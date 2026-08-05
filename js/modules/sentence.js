/* ========================================
   补全句子模块
   ======================================== */

const SentenceModule = {
  currentChar: null,     // 当前题目对应的汉字数据
  correctCount: 0,       // 答对次数
  totalCount: 0,         // 总答题次数
  isAnswering: false,    // 答题锁（动画期间禁止重复点击）

  init() {
    this.correctCount = 0;
    this.totalCount = 0;
    this.isAnswering = false;
    this.currentChar = null;
    this.updateCounts();
    this.nextRound();
  },

  // ========================================
  // 获取有有效句子的汉字（句子中包含该字）
  // ========================================
  getEligibleChars() {
    return CHARACTERS.filter(c => c.sentence && c.sentence.includes(c.char));
  },

  // ========================================
  // 随机抽取一道题（避免连续重复）
  // ========================================
  pickRandomChar() {
    const eligible = this.getEligibleChars();
    if (eligible.length === 0) return null;

    let charData;
    let attempts = 0;
    do {
      charData = eligible[Math.floor(Math.random() * eligible.length)];
      attempts++;
    } while (
      this.currentChar &&
      charData.char === this.currentChar.char &&
      eligible.length > 1 &&
      attempts < 10
    );
    return charData;
  },

  // ========================================
  // 生成 4 个选项（1 正确 + 3 干扰），随机打乱
  // ========================================
  generateOptions(correctChar) {
    const pool = CHARACTERS.filter(c => c.char !== correctChar);
    const distractors = [];
    const used = new Set([correctChar]);

    while (distractors.length < 3 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      const char = pool[idx].char;
      if (!used.has(char)) {
        distractors.push(char);
        used.add(char);
      }
      pool.splice(idx, 1);
    }

    // Fisher-Yates 洗牌
    const options = [correctChar, ...distractors];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  },

  // ========================================
  // 渲染句子（目标字替换为下划线空位）
  // ========================================
  renderSentence(charData) {
    const partEl = document.getElementById('sentence-part');
    if (!partEl) return;

    const sentence = charData.sentence;
    const target = charData.char;
    const idx = sentence.indexOf(target);

    let html;
    if (idx >= 0) {
      const before = sentence.substring(0, idx);
      const after = sentence.substring(idx + target.length);
      const blank = '<span style="display:inline-block;min-width:1.8em;border-bottom:3px solid var(--primary);text-align:center;margin:0 2px;color:var(--text-muted);">＿＿</span>';
      html = `${before}${blank}${after}`;
    } else {
      html = sentence;
    }

    // 拼音提示
    const hint = `<div style="margin-top:10px;font-size:14px;color:var(--text-muted)">提示：拼音 <strong style="color:var(--primary)">${charData.pinyin}</strong></div>`;

    partEl.innerHTML = html + hint;
  },

  // ========================================
  // 渲染选项按钮
  // ========================================
  renderOptions(options, correctChar) {
    const optionsEl = document.getElementById('sentence-options');
    if (!optionsEl) return;

    let html = '';
    options.forEach(opt => {
      html += `<button class="option-btn" data-char="${opt}">${opt}</button>`;
    });
    optionsEl.innerHTML = html;

    optionsEl.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleAnswer(btn, btn.dataset.char, correctChar);
      });
    });
  },

  // ========================================
  // 处理答题
  // ========================================
  handleAnswer(btn, selectedChar, correctChar) {
    if (this.isAnswering) return;
    this.isAnswering = true;
    this.totalCount++;

    const allBtns = document.querySelectorAll('#sentence-options .option-btn');
    const isCorrect = selectedChar === correctChar;

    if (isCorrect) {
      // 答对：绿色动画 + 加分
      this.correctCount++;
      btn.classList.add('correct');
      ScoreSystem.add(ScoreSystem.REWARDS.SENTENCE_CORRECT, '答对了！');
      TTS.speak(this.currentChar.sentence, 0.75);
    } else {
      // 答错：红色抖动 + 高亮正确答案
      btn.classList.add('wrong');
      allBtns.forEach(b => {
        if (b.dataset.char === correctChar) {
          b.classList.add('correct');
        }
      });
      App.showToast(`正确答案是「${correctChar}」`, 'info');
    }

    this.updateCounts();

    // 延迟后进入下一题
    const delay = isCorrect ? 1500 : 2000;
    setTimeout(() => {
      this.isAnswering = false;
      this.nextRound();
    }, delay);
  },

  // ========================================
  // 更新计数显示
  // ========================================
  updateCounts() {
    const correctEl = document.getElementById('sentence-correct-count');
    const totalEl = document.getElementById('sentence-total-count');
    if (correctEl) correctEl.textContent = this.correctCount;
    if (totalEl) totalEl.textContent = this.totalCount;
  },

  // ========================================
  // 下一题
  // ========================================
  nextRound() {
    const charData = this.pickRandomChar();
    if (!charData) {
      const partEl = document.getElementById('sentence-part');
      const optionsEl = document.getElementById('sentence-options');
      if (partEl) partEl.innerHTML = '<p style="text-align:center;color:var(--text-muted)">暂无句子数据</p>';
      if (optionsEl) optionsEl.innerHTML = '';
      return;
    }

    this.currentChar = charData;
    this.renderSentence(charData);
    const options = this.generateOptions(charData.char);
    this.renderOptions(options, charData.char);
  },
};
