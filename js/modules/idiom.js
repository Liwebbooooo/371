/* ========================================
   成语谚语模块
   ======================================== */

const IdiomModule = {
  currentTab: 'all',         // 当前分类标签：all / chengyu / yanyu / practice
  currentView: 'grid',       // 当前视图：grid / detail
  currentIdiom: null,        // 当前查看详情的条目
  practiceItem: null,        // 当前练习题目信息
  isAnswering: false,        // 答题锁（动画期间禁止重复点击）
  practiceTimeout: null,     // 自动下一题的定时器
  correctCount: 0,           // 练习答对次数
  totalCount: 0,             // 练习总答题次数

  init() {
    this.currentTab = 'all';
    this.currentView = 'grid';
    this.currentIdiom = null;
    this.practiceItem = null;
    this.isAnswering = false;
    this.correctCount = 0;
    this.totalCount = 0;
    this.bindEvents();
    this.render();
  },

  // ========================================
  // 绑定标签切换事件
  // ========================================
  bindEvents() {
    const tabs = [
      ['idiom-tab-all', 'all'],
      ['idiom-tab-chengyu', 'chengyu'],
      ['idiom-tab-yanyu', 'yanyu'],
      ['idiom-tab-practice', 'practice'],
    ];
    tabs.forEach(([id, key]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          if (this.practiceTimeout) {
            clearTimeout(this.practiceTimeout);
            this.practiceTimeout = null;
          }
          this.isAnswering = false;
          this.currentTab = key;
          this.currentView = 'grid';
          this.currentIdiom = null;
          this.render();
        });
      }
    });
  },

  // ========================================
  // 根据当前标签筛选数据
  // ========================================
  getFilteredData() {
    if (this.currentTab === 'chengyu') return IDIOM_DATA.filter(i => i.type === '成语');
    if (this.currentTab === 'yanyu') return IDIOM_DATA.filter(i => i.type === '谚语' || i.type === '歇后语');
    return IDIOM_DATA;
  },

  // ========================================
  // 主渲染：根据标签决定显示网格 / 详情 / 练习
  // ========================================
  render() {
    this.updateTabStyles();
    const gridEl = document.getElementById('idiom-grid');
    const practiceEl = document.getElementById('idiom-practice');

    if (this.currentTab === 'practice') {
      if (gridEl) gridEl.style.display = 'none';
      if (practiceEl) practiceEl.style.display = 'block';
      this.renderPractice();
      return;
    }

    if (practiceEl) practiceEl.style.display = 'none';
    if (gridEl) gridEl.style.display = 'grid';

    if (this.currentView === 'detail' && this.currentIdiom) {
      this.renderDetail();
    } else {
      this.renderGrid();
    }
  },

  // ========================================
  // 更新标签按钮高亮状态
  // ========================================
  updateTabStyles() {
    const map = {
      all: 'idiom-tab-all',
      chengyu: 'idiom-tab-chengyu',
      yanyu: 'idiom-tab-yanyu',
      practice: 'idiom-tab-practice',
    };
    Object.entries(map).forEach(([key, id]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.classList.toggle('btn-primary', key === this.currentTab);
        btn.classList.toggle('btn-outline', key !== this.currentTab);
      }
    });
  },

  // ========================================
  // 渲染卡片网格
  // ========================================
  renderGrid() {
    const gridEl = document.getElementById('idiom-grid');
    if (!gridEl) return;

    const data = this.getFilteredData();
    const progress = Storage.getProgress();

    if (data.length === 0) {
      gridEl.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1">暂无数据</p>';
      return;
    }

    let html = '';
    data.forEach(item => {
      const passed = progress.passedIdioms[item.text];
      const typeTag = this.getTypeTagClass(item.type);
      html += `
        <div class="idiom-card" data-id="${item.id}">
          <div class="idiom-text">${item.text}${passed ? ' <span style="color:var(--green);font-size:16px">✅</span>' : ''}</div>
          <div class="idiom-pinyin">${item.pinyin}</div>
          <div class="idiom-meaning">${item.meaning}</div>
          <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
            <span class="tag ${typeTag}">${item.type}</span>
            <span class="tag tag-success">${item.grade}</span>
          </div>
        </div>`;
    });
    gridEl.innerHTML = html;

    gridEl.querySelectorAll('.idiom-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        const item = IDIOM_DATA.find(i => i.id === id);
        if (item) this.showDetail(item);
      });
    });
  },

  // ========================================
  // 类型 → 标签颜色
  // ========================================
  getTypeTagClass(type) {
    if (type === '成语') return 'tag-primary';
    if (type === '谚语') return 'tag-info';
    return 'tag-warning';
  },

  // ========================================
  // 显示详情
  // ========================================
  showDetail(item) {
    this.currentIdiom = item;
    this.currentView = 'detail';
    this.renderDetail();
    // 进入详情自动朗读
    TTS.speak(item.text);
  },

  // ========================================
  // 渲染详情视图
  // ========================================
  renderDetail() {
    const gridEl = document.getElementById('idiom-grid');
    if (!gridEl || !this.currentIdiom) return;

    const item = this.currentIdiom;
    const progress = Storage.getProgress();
    const passed = progress.passedIdioms[item.text];
    const typeTag = this.getTypeTagClass(item.type);

    gridEl.innerHTML = `
      <div style="grid-column:1/-1;background:white;border-radius:var(--radius-lg);padding:32px;box-shadow:var(--shadow-lg);max-width:640px;margin:0 auto;">
        <button class="btn btn-outline" id="idiom-back" style="margin-bottom:20px">‹ 返回列表</button>
        <div style="text-align:center">
          <h2 style="font-size:32px;margin-bottom:8px">${item.text}</h2>
          <div style="font-size:18px;color:var(--primary);font-weight:500;margin-bottom:12px">${item.pinyin}</div>
          <div style="display:flex;gap:8px;justify-content:center;margin-bottom:20px;flex-wrap:wrap">
            <span class="tag ${typeTag}">${item.type}</span>
            <span class="tag tag-success">${item.grade}</span>
            ${passed ? '<span class="tag tag-success">✅ 已掌握</span>' : ''}
          </div>
          <div style="background:var(--bg);border-radius:var(--radius);padding:16px;margin-bottom:16px;text-align:left">
            <strong>📖 释义：</strong>${item.meaning}
          </div>
          ${item.example ? `
          <div style="background:var(--bg);border-radius:var(--radius);padding:16px;margin-bottom:16px;text-align:left">
            <strong>✏️ 例句：</strong>${item.example}
          </div>` : ''}
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" id="idiom-tts">🔊 朗读</button>
            <button class="btn btn-secondary" id="idiom-mark">✅ 标记掌握</button>
          </div>
        </div>
      </div>`;

    const backBtn = document.getElementById('idiom-back');
    const ttsBtn = document.getElementById('idiom-tts');
    const markBtn = document.getElementById('idiom-mark');
    if (backBtn) backBtn.addEventListener('click', () => this.backToGrid());
    if (ttsBtn) ttsBtn.addEventListener('click', () => TTS.speak(item.text));
    if (markBtn) markBtn.addEventListener('click', () => this.markPassed(item));
  },

  // ========================================
  // 返回列表
  // ========================================
  backToGrid() {
    this.currentView = 'grid';
    this.currentIdiom = null;
    this.renderGrid();
  },

  // ========================================
  // 标记为已掌握（首次奖励积分）
  // ========================================
  markPassed(item) {
    const progress = Storage.getProgress();
    if (progress.passedIdioms[item.text]) {
      App.showToast('这个已经掌握啦！', 'info');
      return;
    }
    progress.passedIdioms[item.text] = true;
    Storage.saveProgress(progress);
    ScoreSystem.add(ScoreSystem.REWARDS.IDIOM_CORRECT, `掌握了「${item.text}」！`);
    App.checkInToday();
    this.renderDetail();
  },

  // ========================================
  // 填空练习：渲染
  // ========================================
  renderPractice() {
    const el = document.getElementById('idiom-practice');
    if (!el) return;

    if (!this.practiceItem) {
      this.generatePractice();
    }
    this.renderPracticeQuestion(el);
  },

  // ========================================
  // 生成一道练习题
  // ========================================
  generatePractice() {
    if (this.practiceTimeout) {
      clearTimeout(this.practiceTimeout);
      this.practiceTimeout = null;
    }
    if (IDIOM_DATA.length === 0) {
      this.practiceItem = null;
      return;
    }

    // 随机抽题，避免连续重复
    let item;
    let attempts = 0;
    do {
      item = IDIOM_DATA[Math.floor(Math.random() * IDIOM_DATA.length)];
      attempts++;
    } while (
      this.practiceItem &&
      item.text === this.practiceItem.idiom.text &&
      IDIOM_DATA.length > 1 &&
      attempts < 10
    );

    const chars = item.text.split('');
    // 仅对汉字挖空
    const blankableIdx = chars
      .map((c, i) => (/[\u4e00-\u9fa5]/.test(c) ? i : -1))
      .filter(i => i >= 0);

    if (blankableIdx.length === 0) {
      this.practiceItem = null;
      return;
    }

    // 挖空 1-2 个字
    const maxBlanks = Math.min(2, Math.max(1, Math.floor(blankableIdx.length / 2)));
    const blankCount = maxBlanks >= 2 ? (Math.random() < 0.5 ? 1 : 2) : 1;
    const shuffled = [...blankableIdx].sort(() => Math.random() - 0.5);
    const blankPositions = shuffled.slice(0, blankCount).sort((a, b) => a - b);

    const answer = blankPositions.map(i => chars[i]).join('');
    const options = this.generateOptions(answer);

    this.practiceItem = {
      idiom: item,
      chars,
      blankPositions,
      answer,
      options,
    };
  },

  // ========================================
  // 生成 4 个选项（1 正确 + 3 干扰），打乱
  // ========================================
  generateOptions(answer) {
    // 收集所有汉字作为干扰字符池
    const charPool = [];
    const seen = new Set();
    IDIOM_DATA.forEach(i => {
      i.text.split('').forEach(c => {
        if (/[\u4e00-\u9fa5]/.test(c) && !seen.has(c)) {
          seen.add(c);
          charPool.push(c);
        }
      });
    });

    const distractors = new Set();
    let safety = 0;
    while (distractors.size < 3 && safety < 300) {
      safety++;
      let cand;
      if (answer.length === 1) {
        const c = charPool[Math.floor(Math.random() * charPool.length)];
        if (c && c !== answer) cand = c;
      } else {
        const c1 = charPool[Math.floor(Math.random() * charPool.length)] || '';
        const c2 = charPool[Math.floor(Math.random() * charPool.length)] || '';
        cand = c1 + c2;
        if (cand === answer) continue;
      }
      if (cand && !distractors.has(cand)) distractors.add(cand);
    }

    const options = [answer, ...distractors];
    // Fisher-Yates 洗牌
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  },

  // ========================================
  // 渲染练习题目
  // ========================================
  renderPracticeQuestion(el) {
    if (!this.practiceItem) {
      el.innerHTML = '<p style="text-align:center;color:var(--text-muted)">暂无练习数据</p>';
      return;
    }

    const { idiom, chars, blankPositions, answer, options } = this.practiceItem;

    // 构建带空格的题目文本
    let questionHtml = '';
    chars.forEach((c, i) => {
      if (blankPositions.includes(i)) {
        questionHtml += `<span style="display:inline-block;min-width:1.4em;border-bottom:3px solid var(--primary);text-align:center;margin:0 3px;color:var(--text-muted);line-height:1.2;">＿＿</span>`;
      } else {
        questionHtml += `<span style="font-size:32px;font-weight:700;">${c}</span>`;
      }
    });

    el.innerHTML = `
      <div style="max-width:600px;margin:0 auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;font-size:14px;color:var(--text-light);flex-wrap:wrap;gap:8px">
          <span>📝 填空练习：选出正确的字填入空格</span>
          <span>正确 <strong style="color:var(--green)" id="idiom-practice-correct">${this.correctCount}</strong> / <span id="idiom-practice-total">${this.totalCount}</span></span>
        </div>
        <div style="background:white;border-radius:var(--radius-lg);padding:32px;text-align:center;box-shadow:var(--shadow-lg);border:3px solid var(--border);margin-bottom:20px">
          <div style="margin-bottom:14px;display:flex;gap:6px;justify-content:center;flex-wrap:wrap">
            <span class="tag ${this.getTypeTagClass(idiom.type)}">${idiom.type}</span>
            <span class="tag tag-success">${idiom.grade}</span>
          </div>
          <div style="line-height:1.8;margin-bottom:16px">${questionHtml}</div>
          <div style="font-size:14px;color:var(--text-muted)">💡 拼音提示：${idiom.pinyin}</div>
        </div>
        <div class="options-grid" id="idiom-practice-options"></div>
        <div id="idiom-practice-feedback" style="margin-top:16px;text-align:center;font-size:15px;min-height:22px;font-weight:600"></div>
        <div style="text-align:center;margin-top:12px">
          <button class="btn btn-outline" id="idiom-practice-next">⏭ 换一题</button>
        </div>
      </div>`;

    // 渲染选项按钮
    const optEl = document.getElementById('idiom-practice-options');
    if (optEl) {
      let html = '';
      options.forEach(opt => {
        html += `<button class="option-btn" data-opt="${opt}">${opt}</button>`;
      });
      optEl.innerHTML = html;
      optEl.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => this.handlePracticeAnswer(btn, btn.dataset.opt));
      });
    }

    const nextBtn = document.getElementById('idiom-practice-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.practiceTimeout) {
          clearTimeout(this.practiceTimeout);
          this.practiceTimeout = null;
        }
        this.isAnswering = false;
        this.generatePractice();
        this.renderPractice();
      });
    }
  },

  // ========================================
  // 处理练习答题
  // ========================================
  handlePracticeAnswer(btn, selected) {
    if (this.isAnswering) return;
    this.isAnswering = true;
    this.totalCount++;

    const allBtns = document.querySelectorAll('#idiom-practice-options .option-btn');
    const isCorrect = selected === this.practiceItem.answer;
    const feedback = document.getElementById('idiom-practice-feedback');

    if (isCorrect) {
      this.correctCount++;
      btn.classList.add('correct');
      ScoreSystem.add(ScoreSystem.REWARDS.IDIOM_CORRECT, '答对了！');
      // 首次掌握该条目
      const progress = Storage.getProgress();
      if (!progress.passedIdioms[this.practiceItem.idiom.text]) {
        progress.passedIdioms[this.practiceItem.idiom.text] = true;
        Storage.saveProgress(progress);
        App.checkInToday();
      }
      if (feedback) {
        feedback.innerHTML = `<span style="color:var(--green)">🎉 答对了！「${this.practiceItem.idiom.text}」</span>`;
      }
      TTS.speak(this.practiceItem.idiom.text);
    } else {
      btn.classList.add('wrong');
      allBtns.forEach(b => {
        if (b.dataset.opt === this.practiceItem.answer) b.classList.add('correct');
      });
      if (feedback) {
        feedback.innerHTML = `<span style="color:var(--primary)">❌ 正确答案是「${this.practiceItem.answer}」</span>`;
      }
      App.showToast(`正确答案是「${this.practiceItem.answer}」`, 'info');
    }

    // 更新计数
    const cEl = document.getElementById('idiom-practice-correct');
    const tEl = document.getElementById('idiom-practice-total');
    if (cEl) cEl.textContent = this.correctCount;
    if (tEl) tEl.textContent = this.totalCount;

    // 禁用选项
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    // 延迟进入下一题
    const delay = isCorrect ? 1500 : 2200;
    this.practiceTimeout = setTimeout(() => {
      this.isAnswering = false;
      this.practiceTimeout = null;
      this.generatePractice();
      this.renderPractice();
    }, delay);
  },
};
