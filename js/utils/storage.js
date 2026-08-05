/* ========================================
   LocalStorage 封装 — 多用户架构
   所有数据按用户隔离：study_user_${nickname}_...
   排行榜数据全局共享：study_leaderboard
   ======================================== */

const Storage = {
  _prefix: 'study_',

  // === 用户管理 ===
  getCurrentUser() {
    return localStorage.getItem('study_currentUser') || null;
  },

  setCurrentUser(nickname) {
    const old = this.getCurrentUser();
    localStorage.setItem('study_currentUser', nickname);
    // 记住最近登录用户（即使 currentUser 被清除也能恢复）
    localStorage.setItem('study_lastUser', nickname);
    // 首次用户自动注册到用户列表
    const users = this.getAllUsers();
    if (!users.find(u => u.nickname === nickname)) {
      users.push({ nickname, createdAt: new Date().toISOString() });
      localStorage.setItem('study_users', JSON.stringify(users));
    }
    return old;
  },

  getAllUsers() {
    try {
      const raw = localStorage.getItem('study_users');
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  },

  // === 用户隔离的 key ===
  _ukey(name) {
    const user = this.getCurrentUser() || '_guest';
    return `${this._prefix}user_${encodeURIComponent(user)}_${name}`;
  },

  // === 跨用户读取（不依赖 currentUser）===
  _keyForUser(nickname, name) {
    return `${this._prefix}user_${encodeURIComponent(nickname)}_${name}`;
  },

  getUserScore(nickname) {
    try {
      const raw = localStorage.getItem(this._keyForUser(nickname, 'score'));
      return raw ? JSON.parse(raw) : 0;
    } catch { return 0; }
  },

  getUserProgress(nickname) {
    try {
      const raw = localStorage.getItem(this._keyForUser(nickname, 'progress'));
      if (raw) {
        const p = JSON.parse(raw);
        return { streak: p.streak || 0, lastStudyDate: p.lastStudyDate || null };
      }
    } catch {}
    return { streak: 0, lastStudyDate: null };
  },

  // 统计某用户的总学习天数（从排行榜记录中计算）
  countUserLearnDays(nickname) {
    const board = this._getLeaderboardRaw();
    const userScores = board[nickname];
    if (!userScores) return 0;
    return Object.keys(userScores).length;
  },

  // === 通用读写 ===
  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(this._ukey(key));
      return raw ? JSON.parse(raw) : defaultValue;
    } catch { return defaultValue; }
  },

  set(key, value) {
    try {
      localStorage.setItem(this._ukey(key), JSON.stringify(value));
    } catch (e) {
      console.warn('Storage full:', e);
    }
  },

  // === 学习进度 ===
  getProgress() {
    return this.get('progress', {
      learnedChars: {},
      passedPoems: {},
      passedIdioms: {},
      lastStudyDate: null,
      streak: 0,
    });
  },
  saveProgress(progress) { this.set('progress', progress); },

  // === 积分 ===
  getScore() { return this.get('score', 0); },
  addScore(points) {
    const current = this.getScore();
    this.set('score', current + points);
    return current + points;
  },

  // === 每日积分（用于排行榜）===
  getDailyScore() {
    const today = new Date().toISOString().split('T')[0];
    const user = this.getCurrentUser();
    if (!user) return 0;
    const board = this._getLeaderboardRaw();
    return (board[user] && board[user][today]) || 0;
  },

  addDailyScore(points) {
    const user = this.getCurrentUser();
    if (!user || points <= 0) return;
    const today = new Date().toISOString().split('T')[0];
    const board = this._getLeaderboardRaw();
    if (!board[user]) board[user] = {};
    board[user][today] = (board[user][today] || 0) + points;
    localStorage.setItem('study_leaderboard', JSON.stringify(board));
  },

  _getLeaderboardRaw() {
    try {
      const raw = localStorage.getItem('study_leaderboard');
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  },

  // 获取今日排行榜：[{nickname, todayScore, totalScore, streak, learnDays}]
  getTodayLeaderboard() {
    const today = new Date().toISOString().split('T')[0];
    const board = this._getLeaderboardRaw();
    const users = this.getAllUsers();
    const result = [];

    for (const u of users) {
      const userScores = board[u.nickname] || {};
      const dayScore = userScores[today] || 0;
      const totalScore = this.getUserScore(u.nickname);  // 从 per-user 存储读取
      const progress = this.getUserProgress(u.nickname);
      const learnDays = this.countUserLearnDays(u.nickname);
      result.push({
        nickname: u.nickname,
        todayScore: dayScore,
        totalScore,
        streak: progress.streak || 0,
        learnDays,
      });
    }

    result.sort((a, b) => b.todayScore - a.todayScore || b.totalScore - a.totalScore);
    return result;
  },

  // === 神兽 ===
  getPet() {
    return this.get('pet', {
      adopted: false, type: null, name: '',
      stamina: 100, stage: 1, totalFed: 0,
      evolutionScore: 0, lastFedDate: null,
    });
  },
  savePet(pet) { this.set('pet', pet); },

  // === 每日挑战 ===
  getDaily() { return this.get('daily', { date: null, tasks: [] }); },
  saveDaily(daily) { this.set('daily', daily); },

  // === 闯关统计 ===
  getQuizStats() {
    return this.get('quizStats', {
      totalAnswered: 0, totalCorrect: 0,
      bestStreak: 0, chestOpened: 0,
    });
  },
  saveQuizStats(stats) { this.set('quizStats', stats); },

  // === 待复习列表 ===
  getReviewList() { return this.get('reviewList', []); },
  addToReview(entry) {
    const list = this.getReviewList();
    if (!list.find(item => item.char === entry.char)) {
      list.push(entry);
      this.set('reviewList', list);
    }
  },
  removeFromReview(char) {
    let list = this.getReviewList();
    list = list.filter(item => item.char !== char);
    this.set('reviewList', list);
  },
};
