/* ========================================
   积分系统 — 含每日排行追踪
   ======================================== */

const ScoreSystem = {
  REWARDS: {
    LEARN_CHAR: 5,
    SENTENCE_CORRECT: 3,
    POETRY_RECITE: 10,
    IDIOM_CORRECT: 3,
    QUIZ_CORRECT: 2,
    DAILY_COMPLETE: 20,
    STREAK_BONUS: 30,
    FEED_PET: -5,
  },

  add(points, reason) {
    const newScore = Storage.addScore(points);
    // 同时记录每日积分（排行榜用）
    Storage.addDailyScore(points);
    App.showToast(`+${points} 积分！${reason || ''}`, 'success');
    App.updateScoreDisplay();
    return newScore;
  },

  spend(points) {
    const current = Storage.getScore();
    if (current < points) return false;
    Storage.set('score', current - points);
    App.updateScoreDisplay();
    return true;
  },

  get() {
    return Storage.getScore();
  },
};
