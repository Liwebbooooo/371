/* ========================================
   每日挑战模块
   ======================================== */

const DailyModule = {
  // 任务定义
  TASK_DEFS: [
    { id: 'learn',    icon: '✏️', title: '学习5个新汉字',   target: 5,  reward: 10 },
    { id: 'sentence', icon: '📝', title: '完成3道补全句子', target: 3,  reward: 10 },
    { id: 'poetry',   icon: '🏯', title: '背诵1首古诗',     target: 1,  reward: 15 },
    { id: 'quiz',     icon: '🏆', title: '知识闯关10题',    target: 10, reward: 15 },
    { id: 'idiom',    icon: '💬', title: '成语填空5题',     target: 5,  reward: 10 },
  ],

  init() {
    this.ensureTodayTasks();
    this.render();
  },

  // ========================================
  // 获取今日日期字符串
  // ========================================
  getToday() {
    return new Date().toISOString().split('T')[0];
  },

  // ========================================
  // 确保今日任务已生成（日期变更时重新生成）
  // ========================================
  ensureTodayTasks() {
    const daily = Storage.getDaily();
    if (daily.date !== this.getToday()) {
      this.generateTasks();
    }
  },

  // ========================================
  // 生成今日任务
  // ========================================
  generateTasks() {
    const today = this.getToday();
    const tasks = this.TASK_DEFS.map(def => ({
      id: def.id,
      title: def.title,
      target: def.target,
      progress: 0,
      reward: def.reward,
      completed: false,
    }));
    const daily = { date: today, tasks: tasks, bonusClaimed: false };
    Storage.saveDaily(daily);
    return daily;
  },

  // ========================================
  // 更新任务进度（供其他模块调用）
  // ========================================
  updateTask(taskId, amount) {
    let daily = Storage.getDaily();

    // 日期变更：先重新生成
    if (daily.date !== this.getToday()) {
      daily = this.generateTasks();
    }

    const task = daily.tasks.find(t => t.id === taskId);
    if (!task || task.completed) return;

    task.progress = Math.min(task.target, task.progress + amount);

    // 达成目标
    if (task.progress >= task.target && !task.completed) {
      task.completed = true;
      ScoreSystem.add(task.reward, `完成每日任务：${task.title}`);
    }

    Storage.saveDaily(daily);
    this.render();
  },

  // ========================================
  // 判断是否全部完成
  // ========================================
  isAllComplete(daily) {
    if (!daily) daily = Storage.getDaily();
    return daily.tasks.length > 0 && daily.tasks.every(t => t.completed);
  },

  // ========================================
  // 领取全部完成奖励
  // ========================================
  claimBonus() {
    let daily = Storage.getDaily();
    if (daily.date !== this.getToday()) {
      daily = this.generateTasks();
    }

    if (daily.bonusClaimed) {
      App.showToast('每日奖励已经领取过啦', 'info');
      return;
    }
    if (!this.isAllComplete(daily)) {
      App.showToast('还有任务未完成哦，加油！', 'info');
      return;
    }

    daily.bonusClaimed = true;
    Storage.saveDaily(daily);
    ScoreSystem.add(ScoreSystem.REWARDS.DAILY_COMPLETE, '完成全部每日挑战！');
    this.render();
  },

  // ========================================
  // 渲染每日挑战
  // ========================================
  render() {
    const container = document.getElementById('daily-container');
    if (!container) return;

    let daily = Storage.getDaily();
    if (daily.date !== this.getToday()) {
      daily = this.generateTasks();
    }

    const completed = daily.tasks.filter(t => t.completed).length;
    const total = daily.tasks.length;
    const allDone = this.isAllComplete(daily);
    const overallPct = total > 0 ? Math.round((completed / total) * 100) : 0;

    // 头部：日期 + 总进度
    let html = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
        <div style="font-size:15px;color:var(--text-light)">📅 ${this.formatDate(daily.date)}</div>
        <div style="font-size:14px">已完成 <strong style="color:var(--green)">${completed}</strong> / ${total}</div>
      </div>
      <div style="width:100%;height:10px;background:var(--border);border-radius:6px;overflow:hidden;margin-bottom:22px">
        <div style="width:${overallPct}%;height:100%;background:linear-gradient(90deg,var(--green),var(--secondary));transition:width .4s ease"></div>
      </div>
    `;

    // 任务列表
    html += '<div class="daily-tasks">';
    daily.tasks.forEach(task => {
      const def = this.TASK_DEFS.find(d => d.id === task.id);
      const icon = def ? def.icon : '⭐';
      const pct = task.target > 0 ? Math.round((task.progress / task.target) * 100) : 0;
      const checkMark = task.completed ? ' ✅' : '';
      const barColor = task.completed ? 'var(--green)' : 'var(--primary)';

      html += `
        <div class="daily-task${task.completed ? ' completed' : ''}">
          <div class="task-icon">${icon}</div>
          <div class="task-info">
            <div class="task-title">${task.title}${checkMark}</div>
            <div class="task-progress">
              进度 ${task.progress}/${task.target}
              <span style="display:inline-block;width:90px;height:6px;background:var(--border);border-radius:4px;overflow:hidden;vertical-align:middle;margin-left:8px">
                <span style="display:block;width:${pct}%;height:100%;background:${barColor};transition:width .4s ease"></span>
              </span>
            </div>
          </div>
          <div class="task-reward">+${task.reward}分${task.completed ? ' ✓' : ''}</div>
        </div>
      `;
    });
    html += '</div>';

    // 全部完成奖励盒
    if (allDone) {
      const bonus = ScoreSystem.REWARDS.DAILY_COMPLETE;
      if (daily.bonusClaimed) {
        html += `
          <div class="daily-reward-box" style="opacity:.75">
            <h3>🎁 全部完成！</h3>
            <div class="big-reward">+${bonus} 奖励已领取 🎉</div>
          </div>
        `;
      } else {
        html += `
          <div class="daily-reward-box">
            <h3>🎁 恭喜！今日任务全部完成！</h3>
            <div class="big-reward">+${bonus} 积分</div>
            <button class="btn btn-primary btn-lg" id="daily-claim-bonus" style="margin-top:14px">🎉 领取奖励</button>
          </div>
        `;
      }
    }

    container.innerHTML = html;

    // 绑定领取奖励按钮
    const claimBtn = document.getElementById('daily-claim-bonus');
    if (claimBtn) claimBtn.addEventListener('click', () => this.claimBonus());
  },

  // ========================================
  // 格式化日期显示
  // ========================================
  formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const week = ['日', '一', '二', '三', '四', '五', '六'];
    return `${d.getMonth() + 1}月${d.getDate()}日 星期${week[d.getDay()]}`;
  },
};
