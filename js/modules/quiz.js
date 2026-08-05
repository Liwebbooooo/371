/* ========================================
   知识闯关模块
   ======================================== */

const QuizModule = {
  mode: null,            // 'challenge' | 'practice' | null（菜单页）
  category: 'all',       // 当前选择的分类
  questions: [],         // 当前题池（已洗牌）
  currentIndex: 0,
  lives: 3,              // 闯关模式生命值
  sessionScore: 0,       // 本次闯关得分
  correctCount: 0,       // 本次答对题数
  answeredCount: 0,      // 本次答题总数
  currentStreak: 0,      // 当前连对数
  isAnswering: false,    // 答题锁（动画期间禁止重复点击）

  MAX_LIVES: 3,

  init() {
    this.mode = null;
    this.category = 'all';
    this.questions = [];
    this.currentIndex = 0;
    this.lives = this.MAX_LIVES;
    this.sessionScore = 0;
    this.correctCount = 0;
    this.answeredCount = 0;
    this.currentStreak = 0;
    this.isAnswering = false;
    this.renderMenu();
  },

  // ========================================
  // 获取所有分类（从 QUIZ_DATA 动态提取）
  // ========================================
  getCategories() {
    return [...new Set(QUIZ_DATA.map(q => q.category))];
  },

  // ========================================
  // 渲染菜单：模式选择 + 分类标签
  // ========================================
  renderMenu() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    // 分类标签
    const cats = this.getCategories();
    let chipsHtml = `<span class="grade-chip${this.category === 'all' ? ' active' : ''}" data-cat="all">全部</span>`;
    cats.forEach(cat => {
      const active = cat === this.category ? ' active' : '';
      chipsHtml += `<span class="grade-chip${active}" data-cat="${cat}">${cat}</span>`;
    });

    // 统计栏
    const stats = Storage.getQuizStats();
    const total = stats.totalAnswered || 0;
    const correct = stats.totalCorrect || 0;
    const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

    container.innerHTML = `
      <div style="text-align:center;margin-bottom:24px">
        <div style="font-size:48px;margin-bottom:6px">🏆</div>
        <h3 style="font-size:20px;margin-bottom:6px">知识闯关</h3>
        <p style="color:var(--text-muted);font-size:14px">选择分类和模式，开始挑战吧！</p>
      </div>

      <div style="margin-bottom:22px">
        <div style="font-size:14px;font-weight:600;margin-bottom:10px;color:var(--text-light)">📚 选择分类</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">${chipsHtml}</div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:520px;margin:0 auto">
        <button class="quiz-mode-card" id="quiz-mode-challenge" style="background:white;border:3px solid var(--border);border-radius:var(--radius);padding:28px 20px;cursor:pointer;transition:var(--transition);text-align:center;font-family:var(--font);box-shadow:var(--shadow)">
          <div style="font-size:40px">⚔️</div>
          <div style="font-size:18px;font-weight:700;margin:8px 0 6px">闯关模式</div>
          <div style="font-size:13px;color:var(--text-muted);line-height:1.6">3条生命，答错扣命<br>答对 +2 积分</div>
        </button>
        <button class="quiz-mode-card" id="quiz-mode-practice" style="background:white;border:3px solid var(--border);border-radius:var(--radius);padding:28px 20px;cursor:pointer;transition:var(--transition);text-align:center;font-family:var(--font);box-shadow:var(--shadow)">
          <div style="font-size:40px">📖</div>
          <div style="font-size:18px;font-weight:700;margin:8px 0 6px">练习模式</div>
          <div style="font-size:13px;color:var(--text-muted);line-height:1.6">无限答题，轻松练习<br>答错有解析</div>
        </button>
      </div>

      <div style="display:flex;justify-content:center;gap:28px;margin-top:28px;font-size:13px;color:var(--text-muted)">
        <span>累计答题 <strong style="color:var(--text)">${total}</strong> 题</span>
        <span>正确率 <strong style="color:var(--green)">${rate}%</strong></span>
        <span>最高连对 <strong style="color:var(--primary)">${stats.bestStreak || 0}</strong></span>
      </div>
    `;

    // 分类标签点击
    container.querySelectorAll('.grade-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this.category = chip.dataset.cat;
        this.renderMenu();
      });
    });

    // 模式按钮点击
    const challengeBtn = document.getElementById('quiz-mode-challenge');
    const practiceBtn = document.getElementById('quiz-mode-practice');
    if (challengeBtn) challengeBtn.addEventListener('click', () => this.startGame('challenge'));
    if (practiceBtn) practiceBtn.addEventListener('click', () => this.startGame('practice'));

    // 模式卡片悬停效果
    [challengeBtn, practiceBtn].forEach(btn => {
      if (!btn) return;
      btn.addEventListener('mouseenter', () => {
        btn.style.borderColor = 'var(--primary)';
        btn.style.transform = 'translateY(-3px)';
        btn.style.boxShadow = 'var(--shadow-lg)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.borderColor = 'var(--border)';
        btn.style.transform = '';
        btn.style.boxShadow = 'var(--shadow)';
      });
    });
  },

  // ========================================
  // 构建题池：按分类筛选 + 洗牌
  // ========================================
  buildQuestionPool() {
    let pool = this.category === 'all'
      ? [...QUIZ_DATA]
      : QUIZ_DATA.filter(q => q.category === this.category);

    // Fisher-Yates 洗牌
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  },

  // ========================================
  // 开始游戏
  // ========================================
  startGame(mode) {
    this.mode = mode;
    this.lives = this.MAX_LIVES;
    this.sessionScore = 0;
    this.correctCount = 0;
    this.answeredCount = 0;
    this.currentStreak = 0;
    this.currentIndex = 0;
    this.isAnswering = false;
    this.questions = this.buildQuestionPool();

    if (this.questions.length === 0) {
      App.showToast('该分类暂无题目', 'info');
      this.renderMenu();
      return;
    }
    this.renderQuestion();
  },

  // ========================================
  // 渲染生命值（红心）
  // ========================================
  renderLives() {
    let html = '<div class="quiz-lives">';
    for (let i = 0; i < this.MAX_LIVES; i++) {
      html += `<span class="life">${i < this.lives ? '❤️' : '🖤'}</span>`;
    }
    html += '</div>';
    return html;
  },

  // ========================================
  // 渲染当前题目
  // ========================================
  renderQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const q = this.questions[this.currentIndex];
    if (!q) return;

    const modeLabel = this.mode === 'challenge' ? '⚔️ 闯关模式' : '📖 练习模式';
    const catLabel = this.category === 'all' ? '全部' : this.category;
    const livesHtml = this.mode === 'challenge' ? this.renderLives() : '';
    const scoreHtml = this.mode === 'challenge'
      ? `<div class="quiz-score-display">⭐ 本次得分：${this.sessionScore}　|　连对 ${this.currentStreak}</div>`
      : `<div class="quiz-score-display">✅ 答对 ${this.correctCount} / ${this.answeredCount}</div>`;

    container.innerHTML = `
      <div class="quiz-game">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
          <button class="btn btn-outline" id="quiz-back" style="padding:6px 14px;font-size:13px">‹ 退出</button>
          <span style="font-size:13px;color:var(--text-muted)">${modeLabel} · ${catLabel}</span>
          <span style="font-size:13px;color:var(--text-muted)">第 ${this.currentIndex + 1} / ${this.questions.length} 题</span>
        </div>

        ${livesHtml}
        ${scoreHtml}

        <div class="quiz-question-card">
          <span class="quiz-category-tag tag-info">${q.category}</span>
          <div class="quiz-question">${q.question}</div>
          <div class="quiz-options" id="quiz-options"></div>
          <div id="quiz-feedback" style="margin-top:14px;text-align:center;font-size:14px;font-weight:600;min-height:20px"></div>
        </div>
      </div>
    `;

    // 渲染选项
    const optEl = document.getElementById('quiz-options');
    if (optEl) {
      let html = '';
      q.options.forEach((opt, i) => {
        html += `<button class="quiz-option" data-idx="${i}">${opt}</button>`;
      });
      optEl.innerHTML = html;
      optEl.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => this.handleAnswer(parseInt(btn.dataset.idx)));
      });
    }

    const backBtn = document.getElementById('quiz-back');
    if (backBtn) backBtn.addEventListener('click', () => this.exitGame());
  },

  // ========================================
  // 更新生命值显示
  // ========================================
  updateLivesDisplay() {
    const livesEl = document.querySelector('.quiz-lives');
    if (!livesEl) return;
    let html = '';
    for (let i = 0; i < this.MAX_LIVES; i++) {
      html += `<span class="life">${i < this.lives ? '❤️' : '🖤'}</span>`;
    }
    livesEl.innerHTML = html;
  },

  // ========================================
  // 更新得分显示
  // ========================================
  updateScoreDisplay() {
    if (this.mode === 'challenge') {
      const el = document.querySelector('.quiz-score-display');
      if (el) el.textContent = `⭐ 本次得分：${this.sessionScore}　|　连对 ${this.currentStreak}`;
    } else {
      const el = document.querySelector('.quiz-score-display');
      if (el) el.textContent = `✅ 答对 ${this.correctCount} / ${this.answeredCount}`;
    }
  },

  // ========================================
  // 处理答题
  // ========================================
  handleAnswer(selectedIdx) {
    if (this.isAnswering) return;
    this.isAnswering = true;
    this.answeredCount++;

    const q = this.questions[this.currentIndex];
    const isCorrect = selectedIdx === q.answer;
    const allBtns = document.querySelectorAll('#quiz-options .quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    const selectedBtn = allBtns[selectedIdx];

    // 更新闯关统计
    this.updateQuizStats(isCorrect);

    // 更新每日挑战进度
    if (typeof DailyModule !== 'undefined' && DailyModule.updateTask) {
      DailyModule.updateTask('quiz', 1);
    }

    if (isCorrect) {
      // 答对
      this.correctCount++;
      this.currentStreak++;
      if (selectedBtn) selectedBtn.classList.add('correct');

      if (this.mode === 'challenge') {
        this.sessionScore += ScoreSystem.REWARDS.QUIZ_CORRECT;
        ScoreSystem.add(ScoreSystem.REWARDS.QUIZ_CORRECT, '答对了！');
      } else {
        App.showToast('答对了！', 'success');
      }
      if (feedback) feedback.innerHTML = `<span style="color:var(--green)">🎉 答对了！</span>`;
      TTS.speak(q.options[q.answer]);
    } else {
      // 答错
      this.currentStreak = 0;
      if (selectedBtn) selectedBtn.classList.add('wrong');
      // 高亮正确答案
      allBtns.forEach(b => {
        if (parseInt(b.dataset.idx) === q.answer) b.classList.add('correct');
      });

      if (this.mode === 'challenge') {
        this.lives--;
        this.updateLivesDisplay();
        if (feedback) {
          feedback.innerHTML = `<span style="color:var(--primary)">❌ 答错了！正确答案是「${q.options[q.answer]}」</span>`;
        }
      } else {
        // 练习模式：显示解析
        if (feedback) {
          feedback.innerHTML = `<span style="color:var(--primary)">正确答案是「${q.options[q.answer]}」</span>`;
        }
      }
    }

    this.updateScoreDisplay();

    // 禁用选项
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    // 延迟后进入下一题或结束
    const delay = isCorrect ? 1200 : 2000;
    setTimeout(() => {
      this.isAnswering = false;
      if (this.mode === 'challenge' && this.lives <= 0) {
        this.showGameOver();
      } else {
        this.nextQuestion();
      }
    }, delay);
  },

  // ========================================
  // 更新闯关统计（Storage）
  // ========================================
  updateQuizStats(isCorrect) {
    const stats = Storage.getQuizStats();
    const today = new Date().toISOString().split('T')[0];

    // 日期变更：重置今日计数
    if (stats.todayDate !== today) {
      stats.todayDate = today;
      stats.todayAnswered = 0;
      stats.todayCorrect = 0;
    }

    stats.totalAnswered = (stats.totalAnswered || 0) + 1;
    stats.todayAnswered = (stats.todayAnswered || 0) + 1;
    if (isCorrect) {
      stats.totalCorrect = (stats.totalCorrect || 0) + 1;
      stats.todayCorrect = (stats.todayCorrect || 0) + 1;
    }
    if (this.currentStreak > (stats.bestStreak || 0)) {
      stats.bestStreak = this.currentStreak;
    }
    Storage.saveQuizStats(stats);
  },

  // ========================================
  // 下一题
  // ========================================
  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      if (this.mode === 'practice') {
        // 练习模式：重新洗牌继续
        this.questions = this.buildQuestionPool();
        this.currentIndex = 0;
        App.showToast('题库已轮换，继续加油！', 'info');
      } else {
        // 闯关模式：全部答完，通关
        this.showGameOver(true);
        return;
      }
    }
    this.renderQuestion();
  },

  // ========================================
  // 游戏结束（闯关模式）
  // ========================================
  showGameOver(allCleared = false) {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const accuracy = this.answeredCount > 0 ? Math.round((this.correctCount / this.answeredCount) * 100) : 0;
    const title = allCleared ? '🏆 全部通关！' : '💔 游戏结束';
    const msg = allCleared ? '太厉害了，全部题目都答完了！' : '生命用完了，下次再战！';

    container.innerHTML = `
      <div style="max-width:480px;margin:0 auto;text-align:center">
        <div style="font-size:56px;margin-bottom:12px">${allCleared ? '🏆🎉' : '💔'}</div>
        <h3 style="font-size:22px;margin-bottom:6px">${title}</h3>
        <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px">${msg}</p>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:24px">
          <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)">
            <div style="font-size:28px;font-weight:700;color:var(--primary)">${this.sessionScore}</div>
            <div style="font-size:12px;color:var(--text-muted)">本次得分</div>
          </div>
          <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)">
            <div style="font-size:28px;font-weight:700;color:var(--green)">${this.correctCount}</div>
            <div style="font-size:12px;color:var(--text-muted)">答对题数</div>
          </div>
          <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)">
            <div style="font-size:28px;font-weight:700;color:var(--blue)">${accuracy}%</div>
            <div style="font-size:12px;color:var(--text-muted)">正确率</div>
          </div>
        </div>

        <div style="display:flex;gap:12px;justify-content:center">
          <button class="btn btn-primary" id="quiz-restart">🔄 再来一局</button>
          <button class="btn btn-outline" id="quiz-menu">返回菜单</button>
        </div>
      </div>
    `;

    const restartBtn = document.getElementById('quiz-restart');
    const menuBtn = document.getElementById('quiz-menu');
    if (restartBtn) restartBtn.addEventListener('click', () => this.startGame(this.mode));
    if (menuBtn) menuBtn.addEventListener('click', () => this.init());
  },

  // ========================================
  // 退出游戏，返回菜单
  // ========================================
  exitGame() {
    this.init();
  },
};
