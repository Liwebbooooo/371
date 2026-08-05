/* ========================================
   汉字学习模块
   首页入口 → 年级选择 → 模式选择 → 沉浸式横屏学习
   ======================================== */

const LearnModule = {
  currentLevel: 1,
  currentMode: 'sequential',  // sequential | random | review
  currentIndex: 0,
  unlearnedChars: [],
  selectedSentenceChar: null,
  charMap: {},
  isImmersive: false,

  GRADE_NAMES: [
    '一年级上册', '一年级下册',
    '二年级上册', '二年级下册',
    '三年级上册', '三年级下册',
    '四年级上册', '四年级下册',
    '五年级上册', '五年级下册',
    '六年级上册', '六年级下册',
  ],

  MODE_NAMES: {
    sequential: '顺序学习',
    random: '随机学习',
    review: '查缺补漏',
  },

  // ========================================
  // 初始化
  // ========================================
  init() {
    this.buildCharMap();
    this.renderGradeGrid();
    this.bindEvents();
    this.showStage('grade');
  },

  buildCharMap() {
    this.charMap = {};
    CHARACTERS.forEach(c => {
      if (!this.charMap[c.char]) {
        this.charMap[c.char] = c;
      }
    });
  },

  // ========================================
  // 阶段切换
  // ========================================
  showStage(stage) {
    const gradeStage = document.getElementById('learn-stage-grade');
    const modeStage = document.getElementById('learn-stage-mode');
    const immersiveStage = document.getElementById('immersive-learn');

    if (gradeStage) gradeStage.style.display = stage === 'grade' ? 'block' : 'none';
    if (modeStage) modeStage.style.display = stage === 'mode' ? 'block' : 'none';
    if (immersiveStage) immersiveStage.style.display = stage === 'immersive' ? 'flex' : 'none';

    if (stage === 'immersive') {
      document.body.classList.add('immersive-mode');
      this.isImmersive = true;
    } else {
      document.body.classList.remove('immersive-mode');
      this.isImmersive = false;
    }
  },

  // ========================================
  // 年级选择网格
  // ========================================
  renderGradeGrid() {
    const container = document.getElementById('grade-grid');
    if (!container) return;

    let html = '';
    this.GRADE_NAMES.forEach((name, i) => {
      const level = i + 1;
      const progress = this._getGradeProgress(level);
      html += `
        <div class="grade-block" data-level="${level}">
          <div class="grade-block-name">${name}</div>
          <div class="grade-block-progress">
            <div class="grade-block-bar" style="width:${progress.pct}%"></div>
          </div>
          <div class="grade-block-count">已学 ${progress.learned}/${progress.total}</div>
        </div>`;
    });
    container.innerHTML = html;

    container.querySelectorAll('.grade-block').forEach(block => {
      block.addEventListener('click', () => {
        const level = parseInt(block.dataset.level);
        this.selectGrade(level);
      });
    });
  },

  _getGradeProgress(level) {
    const chars = this.getCharsForLevel(level);
    const total = chars.length;
    if (total === 0) return { learned: 0, total: 0, pct: 0 };
    const progress = Storage.getProgress();
    const learned = chars.filter(c => progress.learnedChars[c.char]).length;
    return { learned, total, pct: Math.round((learned / total) * 100) };
  },

  // ========================================
  // 选择年级 → 进入模式选择
  // ========================================
  selectGrade(level) {
    this.currentLevel = level;
    this.showStage('mode');
  },

  // ========================================
  // 选择模式 → 进入沉浸式学习
  // ========================================
  selectMode(mode) {
    this.currentMode = mode;
    this.loadCharacters();
    this.startImmersive();
  },

  // ========================================
  // 根据年级和模式加载汉字列表
  // ========================================
  loadCharacters() {
    let chars = [];
    const progress = Storage.getProgress();

    if (this.currentMode === 'review') {
      // 查缺补漏：从待复习列表中读取
      const reviewList = Storage.getReviewList();
      const reviewChars = reviewList
        .map(r => this.charMap[r.char])
        .filter(Boolean);
      // 如果待复习为空，提示用户
      if (reviewChars.length === 0) {
        App.showToast('暂无待复习的汉字，先去学习吧！', 'info');
        this.showStage('grade');
        return;
      }
      chars = reviewChars;
    } else {
      chars = this.getCharsForLevel(this.currentLevel);
      if (this.currentMode === 'sequential') {
        // 默认顺序，过滤已学的
        chars = chars.filter(c => !progress.learnedChars[c.char]);
      } else if (this.currentMode === 'random') {
        // 随机打乱，过滤已学的
        chars = chars.filter(c => !progress.learnedChars[c.char]);
        chars = this._shuffle([...chars]);
      }
    }

    this.unlearnedChars = chars;
    this.currentIndex = 0;
    this.selectedSentenceChar = null;
  },

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // ========================================
  // 开始沉浸式学习
  // ========================================
  startImmersive() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('没有可学习的汉字，选择其他年级或模式吧！', 'info');
      this.showStage('grade');
      return;
    }

    this.showStage('immersive');
    this.showCurrentChar();

    // 尝试横屏
    this.lockLandscape();
  },

  lockLandscape() {
    if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
      window.screen.orientation.lock('landscape').catch(() => {
        // 部分设备不支持，静默忽略
      });
    }
  },

  unlockOrientation() {
    if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
      window.screen.orientation.unlock();
    }
  },

  // ========================================
  // 退出沉浸式学习
  // ========================================
  exitImmersive() {
    this.unlockOrientation();
    this.showStage('grade');
    this.renderGradeGrid(); // 刷新进度
  },

  // ========================================
  // 数据查询
  // ========================================
  getCharsForLevel(level) {
    return CHARACTERS.filter(c => c.level === level);
  },

  /** 判断一个字符是否为汉字 */
  isChineseChar(ch) {
    return /[\u4e00-\u9fff]/.test(ch);
  },

  // ========================================
  // 显示当前汉字（核心渲染）
  // ========================================
  showCurrentChar() {
    const bigCharEl = document.getElementById('big-char');
    const pinyinEl = document.getElementById('pinyin-text');
    const sentenceEl = document.getElementById('sentence-text');
    const wordGroupsEl = document.getElementById('word-groups');
    const charIndexEl = document.getElementById('char-index');

    if (this.unlearnedChars.length === 0) {
      if (bigCharEl) bigCharEl.textContent = '🎉';
      if (pinyinEl) pinyinEl.textContent = '本阶段完成';
      if (sentenceEl) sentenceEl.innerHTML = '<span style="color:var(--text-muted)">太棒了！当前阶段的汉字都已学完！继续加油！</span>';
      if (wordGroupsEl) wordGroupsEl.innerHTML = '';
      if (charIndexEl) charIndexEl.textContent = '';
      return;
    }

    // 序号
    if (charIndexEl) {
      const totalInStage = this.unlearnedChars.length;
      charIndexEl.textContent = `${this.GRADE_NAMES[this.currentLevel - 1]} · ${this.MODE_NAMES[this.currentMode]} · 第 ${this.currentIndex + 1} / ${totalInStage} 字`;
    }

    const charData = this.unlearnedChars[this.currentIndex];
    if (!charData) return;

    // 清除句子选中状态
    this.selectedSentenceChar = null;

    // 大字
    this._renderBigChar(bigCharEl, charData);

    // 拼音
    if (pinyinEl) {
      pinyinEl.textContent = charData.pinyin;
    }

    // 句子
    this._renderSentence(sentenceEl, charData);

    // 组词
    this._renderWordGroups(wordGroupsEl, charData.words || []);

    this.updateProgress();
  },

  // ========================================
  // 渲染大字
  // ========================================
  _renderBigChar(el, charData) {
    if (!el) return;
    el.textContent = charData.char;
    el.style.cursor = 'pointer';
    const newEl = el.cloneNode(true);
    el.parentNode.replaceChild(newEl, el);
    newEl.addEventListener('click', () => {
      TTS.speakChar(charData.char, charData.words);
    });
  },

  // ========================================
  // 渲染句子：逐字带拼音，可点击
  // ========================================
  _renderSentence(el, charData) {
    if (!el) return;
    const sentence = charData.sentence || '';
    if (!sentence) {
      el.innerHTML = '';
      return;
    }

    const self = this;
    let html = '';

    for (let i = 0; i < sentence.length; i++) {
      const ch = sentence[i];

      if (self.isChineseChar(ch)) {
        const charInfo = self.charMap[ch];
        const py = charInfo ? charInfo.pinyin : '';
        html += `
          <span class="sc-char-wrap" data-char="${ch}" data-pinyin="${py}">
            <span class="sc-pinyin">${py}</span>
            <span class="sc-char">${ch}</span>
          </span>`;
      } else {
        html += `<span class="sc-punct">${ch}</span>`;
      }
    }

    el.innerHTML = html;

    el.querySelectorAll('.sc-char-wrap').forEach(wrap => {
      wrap.addEventListener('click', function (e) {
        e.stopPropagation();
        const clickedChar = this.dataset.char;
        self._onSentenceCharClick(clickedChar);
      });
    });
  },

  // ========================================
  // 句中汉字被点击
  // ========================================
  _onSentenceCharClick(char) {
    const charInfo = this.charMap[char];
    if (!charInfo) return;

    // 发音
    TTS.speak(char, 0.9);

    // 更新组词区
    const wordGroupsEl = document.getElementById('word-groups');
    this._renderWordGroups(wordGroupsEl, charInfo.words || []);

    // 高亮句中选中的字
    this.selectedSentenceChar = char;
    const allWraps = document.querySelectorAll('#sentence-text .sc-char-wrap');
    allWraps.forEach(w => w.classList.remove('sc-selected'));
    allWraps.forEach(w => {
      if (w.dataset.char === char) {
        w.classList.add('sc-selected');
      }
    });
  },

  // ========================================
  // 渲染组词标签（带拼音）
  // ========================================
  _renderWordGroups(el, words) {
    if (!el) return;
    if (!words || words.length === 0) {
      el.innerHTML = '<span style="color:var(--text-muted);font-size:14px">暂无组词数据</span>';
      return;
    }

    let tagsHtml = '';
    words.forEach(word => {
      const py = this._getWordPinyin(word);
      tagsHtml += `
        <span class="word-tag" data-word="${word}">
          <span class="word-tag-pinyin">${py}</span>
          <span class="word-tag-text">${word}</span>
        </span>`;
    });
    el.innerHTML = tagsHtml;

    el.querySelectorAll('.word-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        TTS.speak(tag.dataset.word);
      });
    });
  },

  // ========================================
  // 根据汉字索引，拼接词组拼音
  // ========================================
  _getWordPinyin(word) {
    let pinyin = '';
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const info = this.charMap[ch];
      if (info && info.pinyin) {
        pinyin += (pinyin ? ' ' : '') + info.pinyin;
      } else if (this.isChineseChar(ch)) {
        pinyin += (pinyin ? ' ' : '') + ch;
      }
    }
    return pinyin || '';
  },

  // ========================================
  // 更新进度条
  // ========================================
  updateProgress() {
    const learnedCountEl = document.getElementById('learned-count');
    const totalCountEl = document.getElementById('total-count');
    const progressBarEl = document.getElementById('learn-progress-bar');

    let total = 0;
    let learned = 0;

    if (this.currentMode === 'review') {
      // 查缺补漏模式：显示剩余/总复习数
      total = this.unlearnedChars.length;
      learned = 0;
    } else {
      total = this.getCharsForLevel(this.currentLevel).length;
      const unlearned = this.getUnlearnedForLevel(this.currentLevel).length;
      learned = total - unlearned;
    }

    if (learnedCountEl) learnedCountEl.textContent = learned;
    if (totalCountEl) totalCountEl.textContent = total;
    if (progressBarEl) {
      const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
      progressBarEl.style.width = pct + '%';
    }
  },

  getUnlearnedForLevel(level) {
    const progress = Storage.getProgress();
    const chars = this.getCharsForLevel(level);
    return chars.filter(c => !progress.learnedChars[c.char]);
  },

  // ========================================
  // 标记为已学
  // ========================================
  markAsLearned() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('当前阶段已完成！', 'info');
      return;
    }

    const charData = this.unlearnedChars[this.currentIndex];
    if (!charData) return;

    const progress = Storage.getProgress();
    if (!progress.learnedChars[charData.char]) {
      progress.learnedChars[charData.char] = true;
      Storage.saveProgress(progress);
      ScoreSystem.add(ScoreSystem.REWARDS.LEARN_CHAR, `学会了「${charData.char}」`);
      Storage.removeFromReview(charData.char);
    }

    App.checkInToday();
    this.unlearnedChars.splice(this.currentIndex, 1);

    if (this.unlearnedChars.length === 0) {
      this.showCongratulation();
    } else {
      if (this.currentIndex >= this.unlearnedChars.length) {
        this.currentIndex = 0;
      }
      this.showCurrentChar();
    }
  },

  // ========================================
  // 不认识 → 加入待复习 + 跳下一个
  // ========================================
  skipChar() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('当前阶段已完成！', 'info');
      return;
    }

    const charData = this.unlearnedChars[this.currentIndex];
    if (charData) {
      Storage.addToReview({
        char: charData.char,
        pinyin: charData.pinyin,
        grade: charData.grade,
        level: charData.level,
        addedAt: new Date().toISOString(),
      });
      App.showToast(`「${charData.char}」已加入待复习`, 'warning');
    }

    App.checkInToday();

    this.currentIndex++;
    if (this.currentIndex >= this.unlearnedChars.length) {
      this.currentIndex = 0;
    }

    this.showCurrentChar();
  },

  // ========================================
  // 上一个
  // ========================================
  prevChar() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('当前阶段已完成！', 'info');
      return;
    }

    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.unlearnedChars.length - 1;
    }

    this.showCurrentChar();
  },

  // ========================================
  // 下一个
  // ========================================
  nextChar() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('当前阶段已完成！', 'info');
      return;
    }

    this.currentIndex++;
    if (this.currentIndex >= this.unlearnedChars.length) {
      this.currentIndex = 0;
    }

    this.showCurrentChar();
  },

  // ========================================
  // 全部学完的祝贺
  // ========================================
  showCongratulation() {
    const charCard = document.getElementById('char-card');
    if (charCard) {
      charCard.innerHTML = `
        <div style="text-align:center;padding:32px">
          <div style="font-size:64px">🎉🌟🏆</div>
          <h3 style="color:var(--primary);margin:12px 0">太厉害了！</h3>
          <p>「${this.GRADE_NAMES[this.currentLevel - 1]}」${this.MODE_NAMES[this.currentMode]}已完成！</p>
          <p style="color:var(--text-muted)">点击右上角「关闭」退出，选择其他年级继续学习吧~</p>
        </div>
      `;
    }

    App.showToast(`🎉 ${this.GRADE_NAMES[this.currentLevel - 1]} 学习完成！`, 'success');
    this.updateProgress();
  },

  // ========================================
  // 朗读句子
  // ========================================
  speakSentence() {
    if (this.unlearnedChars.length === 0) return;
    const charData = this.unlearnedChars[this.currentIndex];
    if (charData && charData.sentence) {
      TTS.speak(charData.sentence, 0.75);
    }
  },

  // ========================================
  // 绑定事件
  // ========================================
  bindEvents() {
    // 模式卡片
    const modeGrid = document.getElementById('mode-grid');
    if (modeGrid) {
      modeGrid.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => {
          const mode = card.dataset.mode;
          this.selectMode(mode);
        });
      });
    }

    // 返回年级选择
    const backToGradeBtn = document.getElementById('btn-back-to-grade');
    if (backToGradeBtn) {
      backToGradeBtn.addEventListener('click', () => this.showStage('grade'));
    }

    // 退出沉浸式
    const exitBtn = document.getElementById('btn-exit-learn');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => this.exitImmersive());
    }

    // 操作按钮
    const btnKnow = document.getElementById('btn-know');
    const btnDunno = document.getElementById('btn-dunno');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSpeak = document.getElementById('btn-speak-sentence');

    if (btnKnow) btnKnow.addEventListener('click', () => this.markAsLearned());
    if (btnDunno) btnDunno.addEventListener('click', () => this.skipChar());
    if (btnPrev) btnPrev.addEventListener('click', () => this.prevChar());
    if (btnNext) btnNext.addEventListener('click', () => this.nextChar());
    if (btnSpeak) btnSpeak.addEventListener('click', () => this.speakSentence());

    // 键盘快捷键（仅在沉浸式学习时）
    document.addEventListener('keydown', (e) => {
      if (!this.isImmersive) return;
      if (e.key === 'ArrowLeft' || e.key === '1') {
        this.markAsLearned();
      } else if (e.key === 'ArrowRight' || e.key === '2') {
        this.skipChar();
      } else if (e.key === 'ArrowDown' || e.key === ' ') {
        this.nextChar();
      }
    });
  },
};
