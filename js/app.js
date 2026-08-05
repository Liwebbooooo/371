/* ========================================
   主应用控制器 v2 — 学科→模块两级导航
   ======================================== */

const App = {
  currentModule: 'subjects',   // 当前模块（subjects / home / learn / ...）
  currentSubject: null,        // 当前学科：'chinese' | 'math'
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;
    this.checkUserLogin();
  },

  // === 用户登录 ===
  checkUserLogin() {
    const user = Storage.getCurrentUser();
    if (!user) {
      this.showLoginScreen();
    } else {
      this.startApp();
    }
  },

  showLoginScreen() {
    const overlay = document.getElementById('login-overlay');
    if (overlay) overlay.style.display = 'flex';

    const input = document.getElementById('login-nickname');
    const btn = document.getElementById('login-btn');
    const list = document.getElementById('login-user-list');
    const closeBtn = document.getElementById('login-close');
    const backBtn = document.getElementById('login-back-btn');

    if (!input || !btn) return;

    const doClose = () => { if (overlay) overlay.style.display = 'none'; };
    if (closeBtn) closeBtn.onclick = doClose;
    if (backBtn) backBtn.onclick = doClose;
    overlay.onclick = (e) => { if (e.target === overlay) doClose(); };

    const currentUser = Storage.getCurrentUser();
    const lastUser = localStorage.getItem('study_lastUser');
    input.value = currentUser || lastUser || '';

    const users = Storage.getAllUsers();
    if (list && users.length > 0) {
      list.innerHTML = '<p style="font-size:13px;color:var(--text-muted);margin-bottom:8px">或点击已有用户直接进入：</p>';
      users.forEach(u => {
        const chip = document.createElement('span');
        chip.className = 'login-user-chip';
        chip.textContent = u.nickname;
        chip.addEventListener('click', () => this._doLogin(u.nickname));
        list.appendChild(chip);
      });
    }

    const doLogin = () => {
      const name = input.value.trim();
      if (!name || name.length > 10) {
        this.showToast('请输入有效昵称（1-10个字）', 'warning');
        return;
      }
      this._doLogin(name);
    };
    btn.onclick = doLogin;
    input.onkeydown = (e) => { if (e.key === 'Enter') doLogin(); };
    input.focus();
    input.select();
  },

  _doLogin(nickname) {
    Storage.setCurrentUser(nickname);
    const overlay = document.getElementById('login-overlay');
    if (overlay) overlay.style.display = 'none';
    this.startApp();
  },

  // === 启动应用 ===
  startApp() {
    const overlay = document.getElementById('login-overlay');
    if (overlay) overlay.style.display = 'none';

    this.updateUserDisplay();
    this.setupNavigation();
    this.setupSubjectCards();
    this.setupHomeCards();
    this.updateScoreDisplay();
    this.updateStreakDisplay();
    this.checkDailyReset();
    this.checkPetStamina();

    // 初始化各模块
    LearnModule.init();
    CharlistModule.init();
    SentenceModule.init();
    PoetryModule.init();
    IdiomModule.init();
    PetModule.init();
    QuizModule.init();
    DailyModule.init();

    // 默认进入学科选择页
    this.navigateTo('subjects');

    // 全局横屏管理
    this.setupOrientation();
  },

  // === 学科选择卡片 ===
  setupSubjectCards() {
    const chineseCard = document.getElementById('subject-chinese');
    const mathCard = document.getElementById('subject-math');

    if (chineseCard) {
      chineseCard.addEventListener('click', () => {
        this.currentSubject = 'chinese';
        this.navigateTo('home');
      });
    }

    if (mathCard) {
      mathCard.addEventListener('click', () => {
        this.showToast('数学模块即将上线，敬请期待！', 'info');
      });
    }

    // 返回首页按钮
    const backHomeBtn = document.getElementById('btn-back-home');
    if (backHomeBtn) {
      backHomeBtn.addEventListener('click', () => this.navigateTo('home'));
    }

    // 主页按钮（返回学科选择）
    const backSubjectsBtn = document.getElementById('btn-back-subjects');
    if (backSubjectsBtn) {
      backSubjectsBtn.addEventListener('click', () => this.navigateTo('subjects'));
    }
  },

  // === 首页卡片 ===
  setupHomeCards() {
    document.querySelectorAll('.home-card').forEach(card => {
      card.addEventListener('click', () => {
        const module = card.dataset.module;
        if (module === 'learn') {
          LearnModule.showStage('grade');
          LearnModule.renderGradeGrid();
        }
        if (module) this.navigateTo(module);
      });
    });

    // 点击 logo：在模块页→返回首页，在首页→返回学科选择
    const logo = document.getElementById('logo-home');
    if (logo) {
      logo.addEventListener('click', () => {
        if (this.currentModule === 'home') {
          this.navigateTo('subjects');
        } else {
          this.navigateTo('home');
        }
      });
    }
  },

  // === 全局横屏管理 ===
  setupOrientation() {
    const rotateOverlay = document.getElementById('rotate-overlay');

    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const isMobile = window.innerWidth <= 1024;
      // 手机/平板竖屏时显示旋转提示
      if (isPortrait && isMobile && rotateOverlay) {
        rotateOverlay.classList.add('show');
      } else if (rotateOverlay) {
        rotateOverlay.classList.remove('show');
      }
    };

    // 尝试锁横屏
    if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
      window.screen.orientation.lock('landscape').catch(() => {});
    }

    // 监听方向变化
    window.addEventListener('orientationchange', () => {
      setTimeout(checkOrientation, 100);
    });
    window.addEventListener('resize', checkOrientation);

    // 初始化检测
    checkOrientation();
  },

  // === 导航 ===
  setupNavigation() {
    document.querySelectorAll('.nav-blocks .nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const module = item.dataset.module;
        if (module) this.navigateTo(module);
      });
    });
  },

  navigateTo(module) {
    this.currentModule = module;

    // 离开沉浸学习
    if (module !== 'learn' && LearnModule.isImmersive) {
      LearnModule.exitImmersive();
    }

    // 进入汉字学习时确保显示年级页
    if (module === 'learn') {
      LearnModule.showStage('grade');
      LearnModule.renderGradeGrid();
    }

    // 控制导航栏和返回按钮显示
    const navBlocks = document.getElementById('nav-blocks');
    const backHomeBtn = document.getElementById('btn-back-home');
    const backSubjectsBtn = document.getElementById('btn-back-subjects');

    if (module === 'subjects') {
      // 学科选择页：无导航栏，无返回按钮
      if (navBlocks) navBlocks.style.display = 'none';
      if (backHomeBtn) backHomeBtn.style.display = 'none';
      if (backSubjectsBtn) backSubjectsBtn.style.display = 'none';
    } else if (module === 'home') {
      // 模块首页：无导航栏，只显示"主页"按钮
      if (navBlocks) navBlocks.style.display = 'none';
      if (backHomeBtn) backHomeBtn.style.display = 'none';
      if (backSubjectsBtn) backSubjectsBtn.style.display = '';
    } else {
      // 功能模块页：显示导航栏、返回按钮、主页按钮
      if (navBlocks) navBlocks.style.display = '';
      if (backHomeBtn) backHomeBtn.style.display = '';
      if (backSubjectsBtn) backSubjectsBtn.style.display = '';
    }

    // 导航高亮
    document.querySelectorAll('.nav-blocks .nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.module === module);
    });

    // 切换模块显示
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    const target = document.getElementById(`module-${module}`);
    if (target) target.classList.add('active');

    // 首页/学科页取消所有导航高亮
    if (module === 'home' || module === 'subjects') {
      document.querySelectorAll('.nav-blocks .nav-item').forEach(item => item.classList.remove('active'));
    }

    TTS.stop();
  },

  // === 用户显示 ===
  updateUserDisplay() {
    const user = Storage.getCurrentUser();
    const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = user || '';

    const rankBtn = document.getElementById('btn-show-leaderboard');
    if (rankBtn) rankBtn.addEventListener('click', () => this.showLeaderboard());

    const switchBtn = document.getElementById('btn-switch-user');
    if (switchBtn) switchBtn.addEventListener('click', () => this.showLoginScreen());
  },

  // === 排行榜 ===
  showLeaderboard() {
    const board = Storage.getTodayLeaderboard();
    const user = Storage.getCurrentUser();
    const content = document.createElement('div');

    if (board.length === 0) {
      content.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px">还没有学习记录，快去学习吧！</p>';
    } else {
      let html = '<div class="leaderboard-table">';
      html += '<div class="lb-header"><span>排名</span><span>昵称</span><span>今日积分</span><span>总积分</span><span>学习天数</span><span>连续</span></div>';
      board.forEach((entry, i) => {
        const rank = i + 1;
        let medal = '';
        if (rank === 1) medal = '🥇';
        else if (rank === 2) medal = '🥈';
        else if (rank === 3) medal = '🥉';
        const isMe = entry.nickname === user;
        html += `<div class="lb-row${isMe ? ' lb-me' : ''}">
          <span>${medal || rank}</span>
          <span>${entry.nickname}${isMe ? ' (我)' : ''}</span>
          <span style="color:var(--c-indigo);font-weight:600">${entry.todayScore}</span>
          <span style="color:var(--text-secondary)">${entry.totalScore}</span>
          <span style="color:var(--text-secondary)">${entry.learnDays} 天</span>
          <span style="color:var(--c-amber);font-weight:600">🔥 ${entry.streak}</span>
        </div>`;
      });
      html += '</div>';
      content.innerHTML = html;
    }
    this.showModal('🏆 今日排行', content.outerHTML);
  },

  // === 积分 ===
  updateScoreDisplay() {
    const el = document.getElementById('score-display');
    if (el) el.textContent = ScoreSystem.get();
  },

  // === 签到 ===
  updateStreakDisplay() {
    const progress = Storage.getProgress();
    const el = document.getElementById('streak-display');
    if (el) el.textContent = progress.streak || 0;
  },

  checkInToday() {
    const progress = Storage.getProgress();
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastStudyDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (progress.lastStudyDate === yesterday) {
      progress.streak = (progress.streak || 0) + 1;
    } else {
      progress.streak = 1;
    }
    progress.lastStudyDate = today;
    Storage.saveProgress(progress);
    this.updateStreakDisplay();

    if (progress.streak % 7 === 0) {
      ScoreSystem.add(ScoreSystem.REWARDS.STREAK_BONUS, `连续学习 ${progress.streak} 天！`);
    }
  },

  // === 每日重置 ===
  checkDailyReset() {
    const daily = Storage.getDaily();
    const today = new Date().toISOString().split('T')[0];
    if (daily.date !== today) DailyModule.generateTasks();
  },

  // === 神兽体力 ===
  checkPetStamina() {
    const pet = Storage.getPet();
    if (!pet.adopted) return;
    const today = new Date().toISOString().split('T')[0];
    const lastFed = pet.lastFedDate;
    if (lastFed && lastFed !== today) {
      const daysPassed = Math.floor((new Date(today) - new Date(lastFed)) / 86400000);
      if (daysPassed > 0) {
        pet.stamina = Math.max(0, pet.stamina - daysPassed * 10);
        Storage.savePet(pet);
      }
    }
  },

  // === Toast ===
  showToast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  },

  // === Modal ===
  showModal(title, content, buttons = []) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    let btnHTML = '';
    if (buttons.length > 0) {
      btnHTML = '<div style="display:flex;gap:10px;justify-content:flex-end;margin-top:20px">';
      buttons.forEach((btn, i) => {
        const cls = i === 0 ? 'btn-primary' : 'btn-outline';
        btnHTML += `<button class="btn ${cls}" data-modal-btn="${i}">${btn.text}</button>`;
      });
      btnHTML += '</div>';
    }
    overlay.innerHTML = `<div class="modal"><h3>${title}</h3><div>${content}</div>${btnHTML}</div>`;
    document.body.appendChild(overlay);
    buttons.forEach((btn, i) => {
      const btnEl = overlay.querySelector(`[data-modal-btn="${i}"]`);
      if (btnEl) btnEl.addEventListener('click', () => { overlay.remove(); if (btn.onClick) btn.onClick(); });
    });
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    return { close: () => overlay.remove() };
  },

  formatNumber(n) {
    if (n >= 10000) return (n / 10000).toFixed(1) + '万';
    return n.toString();
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
