/* ========================================
   汉字学习模块
   句子带拼音 + 逐字可点击 + 组词联动 + 待复习
   ======================================== */

const LearnModule = {
  currentLevel: 1,
  currentIndex: 0,
  unlearnedChars: [],
  selectedSentenceChar: null,   // 当前句中选中的字（仅影响组词区，不影响大字）
  charMap: {},                  // 汉字 → 数据快速索引

  GRADE_NAMES: [
    '一年级上册', '一年级下册',
    '二年级上册', '二年级下册',
    '三年级上册', '三年级下册',
    '四年级上册', '四年级下册',
    '五年级上册', '五年级下册',
    '六年级上册', '六年级下册',
  ],

  // ========================================
  // 初始化：构建汉字索引 Map
  // ========================================
  init() {
    this.buildCharMap();
    this.renderGradeChips();
    this.loadLevel(this.currentLevel);
    this.bindEvents();
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
  // 年级选择器
  // ========================================
  renderGradeChips() {
    const container = document.getElementById('grade-selector');
    if (!container) return;

    let html = '';
    this.GRADE_NAMES.forEach((name, i) => {
      const level = i + 1;
      const active = level === this.currentLevel ? ' active' : '';
      html += `<span class="grade-chip${active}" data-level="${level}">${name}</span>`;
    });
    container.innerHTML = html;

    container.querySelectorAll('.grade-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const level = parseInt(chip.dataset.level);
        this.currentLevel = level;
        this.loadLevel(level);
        this.renderGradeChips();
      });
    });
  },

  // ========================================
  // 数据查询
  // ========================================
  getCharsForLevel(level) {
    return CHARACTERS.filter(c => c.level === level);
  },

  getUnlearnedForLevel(level) {
    const progress = Storage.getProgress();
    const chars = this.getCharsForLevel(level);
    return chars.filter(c => !progress.learnedChars[c.char]);
  },

  /** 判断一个字符是否为汉字 */
  isChineseChar(ch) {
    return /[\u4e00-\u9fff]/.test(ch);
  },

  // ========================================
  // 加载年级
  // ========================================
  loadLevel(level) {
    this.currentLevel = level;
    this.unlearnedChars = this.getUnlearnedForLevel(level);
    this.currentIndex = 0;
    this.selectedSentenceChar = null;
    this.updateProgress();
    this.showCurrentChar();

    // 确保按钮可见
    const actionsEl = document.querySelector('.char-actions');
    if (actionsEl) actionsEl.style.display = '';
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
      if (pinyinEl) pinyinEl.textContent = this.GRADE_NAMES[this.currentLevel - 1];
      if (sentenceEl) sentenceEl.innerHTML = '<span style="color:var(--text-muted)">太棒了！本年级所有汉字都已学会！继续加油！</span>';
      if (wordGroupsEl) wordGroupsEl.innerHTML = '';
      if (charIndexEl) charIndexEl.textContent = '';
      return;
    }

    // 序号（当前年级内的序号）
    if (charIndexEl) {
      const totalInGrade = this.unlearnedChars.length;
      charIndexEl.textContent = `第 ${this.currentIndex + 1} / ${totalInGrade} 字`;
    }

    const charData = this.unlearnedChars[this.currentIndex];
    if (!charData) return;

    // 清除句子选中状态
    this.selectedSentenceChar = null;

    // ---- 大字（不变，始终是当前学习目标）----
    this._renderBigChar(bigCharEl, charData);

    // ---- 拼音 ----
    if (pinyinEl) {
      pinyinEl.textContent = charData.pinyin;
    }

    // ---- 句子：带拼音 + 逐字可点击 ----
    this._renderSentence(sentenceEl, charData);

    // ---- 组词：默认显示当前学习字的组词 ----
    this._renderWordGroups(wordGroupsEl, charData.words || []);

    this.updateProgress();
  },

  // ========================================
  // 渲染大字+拼音（学习目标，不变）
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
        // 标点符号
        html += `<span class="sc-punct">${ch}</span>`;
      }
    }

    el.innerHTML = html;

    // 绑定点击事件
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

    // ① 发音
    TTS.speak(char, 0.9);

    // ② 更新组词区
    const wordGroupsEl = document.getElementById('word-groups');
    this._renderWordGroups(wordGroupsEl, charInfo.words || []);

    // ③ 高亮句中选中的字
    this.selectedSentenceChar = char;
    const allWraps = document.querySelectorAll('#sentence-text .sc-char-wrap');
    allWraps.forEach(w => w.classList.remove('sc-selected'));
    // 找到当前选中的并高亮
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

    // 组词点击朗读
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

    const total = this.getCharsForLevel(this.currentLevel).length;
    const unlearned = this.getUnlearnedForLevel(this.currentLevel).length;
    const learned = total - unlearned;

    if (learnedCountEl) learnedCountEl.textContent = learned;
    if (totalCountEl) totalCountEl.textContent = total;
    if (progressBarEl) {
      const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
      progressBarEl.style.width = pct + '%';
    }
  },

  // ========================================
  // 标记为已学
  // ========================================
  markAsLearned() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('本年级汉字已全部学完！', 'info');
      return;
    }

    const charData = this.unlearnedChars[this.currentIndex];
    if (!charData) return;

    const progress = Storage.getProgress();
    if (!progress.learnedChars[charData.char]) {
      progress.learnedChars[charData.char] = true;
      Storage.saveProgress(progress);
      ScoreSystem.add(ScoreSystem.REWARDS.LEARN_CHAR, `学会了「${charData.char}」`);

      // 认识了 → 从待复习列表中移除
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
    }

    this.showCurrentChar();
  },

  // ========================================
  // 不认识 → 加入待复习 + 跳下一个
  // ========================================
  skipChar() {
    if (this.unlearnedChars.length === 0) {
      App.showToast('本年级汉字已全部学完！', 'info');
      return;
    }

    const charData = this.unlearnedChars[this.currentIndex];
    if (charData) {
      // 加入待复习列表
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

    // 跳到下一个（保留当前字在列表中，方便回头再学）
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
      App.showToast('本年级汉字已全部学完！', 'info');
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
      App.showToast('本年级汉字已全部学完！', 'info');
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
          <p>「${this.GRADE_NAMES[this.currentLevel - 1]}」所有汉字都已学会！</p>
          <p style="color:var(--text-muted)">选择其他年级继续学习吧~</p>
        </div>
      `;
    }

    App.showToast(`🎉 ${this.GRADE_NAMES[this.currentLevel - 1]} 全部完成！`, 'success');

    const actionsEl = document.querySelector('.char-actions');
    if (actionsEl) actionsEl.style.display = 'none';

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
  // 绑定按钮事件
  // ========================================
  bindEvents() {
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

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (App.currentModule !== 'learn') return;
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
