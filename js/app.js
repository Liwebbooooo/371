/* ========================================
   主应用控制器 - 路由、状态管理、多用户、排行榜
   ======================================== */

const App = {
  currentModule: 'learn',
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;

    // 先检查用户登录
    this.checkUserLogin();
  },

  // === 用户登录检查 ===
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

    // 关闭按钮 / 返回学习按钮：取消切换，回到当前用户
    const doClose = () => {
      if (overlay) overlay.style.display = 'none';
    };

    if (closeBtn) {
      closeBtn.onclick = doClose;
    }
    if (backBtn) {
      backBtn.onclick = doClose;
    }

    // 点击遮罩层关闭
    overlay.onclick = (e) => {
      if (e.target === overlay) doClose();
    };

    // 预填昵称：当前用户 > 上次使用用户
    const currentUser = Storage.getCurrentUser();
    const lastUser = localStorage.getItem('study_lastUser');
    input.value = currentUser || lastUser || '';

    // 已有用户列表
    const users = Storage.getAllUsers();
    if (list && users.length > 0) {
      list.innerHTML = '<p style="font-size:13px;color:var(--text-muted);margin-bottom:8px">或点击已有用户直接进入：</p>';
      users.forEach(u => {
        const chip = document.createElement('span');
        chip.className = 'login-user-chip';
        chip.textContent = u.nickname;
        chip.addEventListener('click', () => {
          this._doLogin(u.nickname);
        });
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
    // 确保登录浮层已隐藏
    const overlay = document.getElementById('login-overlay');
    if (overlay) overlay.style.display = 'none';

    // 更新用户名显示
    this.updateUserDisplay();

    this.setupNavigation();
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

    // 默认显示汉字学习
    this.navigateTo('learn');
  },

  // === 用户名 & 排行榜 显示 ===
  updateUserDisplay() {
    const user = Storage.getCurrentUser();
    const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = user || '';

    // 排行榜入口按钮
    const rankBtn = document.getElementById('btn-show-leaderboard');
    if (rankBtn) {
      rankBtn.addEventListener('click', () => this.showLeaderboard());
    }

    // 切换用户按钮
    const switchBtn = document.getElementById('btn-switch-user');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        this.showLoginScreen();
      });
    }
  },

  // === 排行榜弹窗 ===
  showLeaderboard() {
    const board = Storage.getTodayLeaderboard();
    const user = Storage.getCurrentUser();
    const content = document.createElement('div');

    if (board.length === 0) {
      content.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px">还没有学习记录，快去学习吧！</p>';
    } else {
      let html = '<div class="leaderboard-table">';
      html += '<div class="lb-header"><span>排名</span><span>昵称</span><span>今日积分</span><span>总积分</span></div>';
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
          <span style="color:var(--primary);font-weight:600">${entry.todayScore}</span>
          <span style="color:var(--text-light)">${entry.totalScore}</span>
        </div>`;
      });
      html += '</div>';
      content.innerHTML = html;
    }

    this.showModal('🏆 今日排行', content.outerHTML);
  },

  // === 导航 ===
  setupNavigation() {
    document.querySelectorAll('.sidebar .nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const module = item.dataset.module;
        if (module) this.navigateTo(module);
      });
    });
  },

  navigateTo(module) {
    this.currentModule = module;
    document.querySelectorAll('.sidebar .nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.module === module);
    });
    document.querySelectorAll('.module').forEach(m => {
      m.classList.toggle('active', m.id === `module-${module}`);
    });
    TTS.stop();
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
    if (daily.date !== today) {
      DailyModule.generateTasks();
    }
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
    }, 2000);
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
