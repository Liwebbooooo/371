/* ========================================
   神兽领养模块
   ======================================== */

const PetModule = {
  // 三种神兽基础信息
  PET_TYPES: {
    qilin: {
      name: '小麒麟',
      emoji: '🦌',
      desc: '金色祥瑞，性情温和，喜欢安静地陪伴你学习。',
      defaultName: '麒麒',
      bgFrom: '#FFF8E1',
      bgTo: '#FFECB3',
    },
    dragon: {
      name: '小龙',
      emoji: '🐉',
      desc: '翠绿勇敢，充满力量，最爱和你一起挑战难题。',
      defaultName: '龙龙',
      bgFrom: '#E0F7FA',
      bgTo: '#B2DFDB',
    },
    phoenix: {
      name: '小凤凰',
      emoji: '🔥',
      desc: '赤红优雅，才华横溢，擅长诗词歌赋。',
      defaultName: '凤凤',
      bgFrom: '#FFEBEE',
      bgTo: '#FFCDD2',
    },
  },

  // 食肆食物配置
  FOODS: [
    { id: 'snack',   name: '小零食',   icon: '🍪', cost: 10, stamina: 15, evolution: 0  },
    { id: 'fruit',   name: '水果篮',   icon: '🍎', cost: 20, stamina: 30, evolution: 0  },
    { id: 'deluxe',  name: '豪华大餐', icon: '🍱', cost: 40, stamina: 60, evolution: 0  },
    { id: 'potion',  name: '魔法药水', icon: '🧪', cost: 50, stamina: 40, evolution: 20 },
  ],

  STAGE_NAMES: { 1: '幼年期', 2: '成长期', 3: '神兽期' },

  init() {
    this.render();
  },

  // ========================================
  // 主渲染：根据领养状态分流
  // ========================================
  render() {
    const pet = Storage.getPet();
    if (pet.adopted) {
      this.renderPet();
    } else {
      this.renderAdoption();
    }
  },

  // ========================================
  // 领养选择界面
  // ========================================
  renderAdoption() {
    const container = document.getElementById('pet-container');
    if (!container) return;

    const cards = Object.entries(this.PET_TYPES).map(([key, info]) => `
      <div class="card" data-adopt="${key}" style="text-align:center;cursor:pointer;border:2px solid var(--border);transition:var(--transition)">
        <div class="pet-svg-container" style="background:linear-gradient(135deg,${info.bgFrom},${info.bgTo})">
          ${this.getPetSVG(key, 1)}
        </div>
        <h3 style="font-size:20px;margin-bottom:6px">${info.emoji} ${info.name}</h3>
        <p style="color:var(--text-light);font-size:14px;margin-bottom:14px;min-height:42px">${info.desc}</p>
        <button class="btn btn-primary">领养 ${info.name}</button>
      </div>
    `).join('');

    container.innerHTML = `
      <div style="width:100%">
        <div style="text-align:center;margin-bottom:24px">
          <h3 style="font-size:22px;margin-bottom:8px">🐉 领养你的神兽伙伴</h3>
          <p style="color:var(--text-light);font-size:15px;max-width:560px;margin:0 auto">
            选择一只神兽，陪伴你一起学习成长！通过学习赚取积分喂养它，神兽会不断进化，变得越来越神气哦～
          </p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;max-width:840px;margin:0 auto">
          ${cards}
        </div>
      </div>
    `;

    container.querySelectorAll('[data-adopt]').forEach(el => {
      el.addEventListener('click', () => this.namePet(el.dataset.adopt));
    });
  },

  // ========================================
  // 起名弹窗
  // ========================================
  namePet(type) {
    const info = this.PET_TYPES[type];
    if (!info) return;

    const modal = App.showModal('给神兽起个名字', `
      <p style="margin-bottom:12px;color:var(--text-light)">给你的新伙伴取一个好听的名字吧！</p>
      <input type="text" id="pet-name-input" maxlength="8" placeholder="输入名字（最多 8 个字）"
        style="width:100%;padding:10px 14px;font-size:16px;border-radius:12px;border:2px solid var(--border);outline:none;font-family:var(--font);box-sizing:border-box" />
      <div style="text-align:center;margin-top:16px">
        <button class="btn btn-primary" id="pet-confirm-btn">确认领养</button>
      </div>
    `, []);

    const confirmBtn = document.getElementById('pet-confirm-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        const inp = document.getElementById('pet-name-input');
        const name = inp ? inp.value.trim() : '';
        modal.close();
        this.confirmAdopt(type, name);
      });
    }
    setTimeout(() => {
      const inp = document.getElementById('pet-name-input');
      if (inp) inp.focus();
    }, 100);
  },

  // ========================================
  // 确认领养
  // ========================================
  confirmAdopt(type, name) {
    const info = this.PET_TYPES[type];
    if (!info) return;
    const finalName = name || info.defaultName;

    const pet = Storage.getPet();
    pet.adopted = true;
    pet.type = type;
    pet.name = finalName;
    pet.stamina = 100;
    pet.stage = 1;
    pet.totalFed = 0;
    pet.evolutionScore = 0;
    pet.lastFedDate = new Date().toISOString().split('T')[0];
    Storage.savePet(pet);

    App.showToast(`领养成功！欢迎「${finalName}」！`, 'success');
    this.renderPet();
  },

  // ========================================
  // 已领养：神兽展示 + 食肆
  // ========================================
  renderPet() {
    const container = document.getElementById('pet-container');
    if (!container) return;

    const pet = Storage.getPet();
    if (!pet.adopted) {
      this.renderAdoption();
      return;
    }

    const info = this.PET_TYPES[pet.type] || this.PET_TYPES.qilin;
    const svg = this.getPetSVG(pet.type, pet.stage);
    const staminaPct = Math.max(0, Math.min(100, pet.stamina));
    const staminaColor = pet.stamina > 60 ? 'var(--green)' : pet.stamina > 30 ? 'var(--orange)' : 'var(--primary)';
    const evoPct = this.getEvoPct(pet.evolutionScore);
    const score = ScoreSystem.get();

    const foodHtml = this.FOODS.map(f => {
      const affordable = score >= f.cost;
      const effect = `+${f.stamina}体力${f.evolution ? ` · +${f.evolution}进化` : ''}`;
      return `
        <div class="food-item" data-food="${f.id}" style="${affordable ? '' : 'opacity:0.55'}">
          <div class="food-icon">${f.icon}</div>
          <div class="food-name">${f.name}</div>
          <div class="food-effect">${effect}</div>
          <div class="food-cost">⭐ ${f.cost} 分</div>
        </div>`;
    }).join('');

    // 体力预警
    let warningHtml = '';
    if (pet.stamina === 0) {
      warningHtml = '<div style="margin-top:16px;padding:12px;background:#FDE8E8;border-radius:12px;color:var(--primary);font-size:14px;text-align:center">💢 神兽体力耗尽啦，赶紧喂点吃的吧！</div>';
    } else if (pet.stamina <= 20) {
      warningHtml = '<div style="margin-top:16px;padding:12px;background:#FFF4CE;border-radius:12px;color:#8B6914;font-size:14px;text-align:center">⚠️ 神兽快饿坏了，记得喂食哦！</div>';
    }

    container.innerHTML = `
      <div class="pet-display">
        <div class="pet-svg-container" style="background:linear-gradient(135deg,${info.bgFrom},${info.bgTo})">
          ${svg}
        </div>
        <h3 style="font-size:22px;margin-bottom:4px">${pet.name}</h3>
        <div style="color:var(--text-muted);font-size:14px;margin-bottom:14px">${info.emoji} ${info.name} · ${this.STAGE_NAMES[pet.stage]} (Lv.${pet.stage})</div>
        <div class="pet-status">
          <div class="stat-row">
            <span class="stat-label">⚡ 体力</span>
            <span class="stat-value" style="color:${staminaColor}">${pet.stamina}/100</span>
          </div>
          <div class="progress-bar" style="margin-bottom:14px">
            <div class="fill" style="width:${staminaPct}%;background:${staminaColor}"></div>
          </div>
          <div class="stat-row">
            <span class="stat-label">🌟 进化值</span>
            <span class="stat-value">${pet.evolutionScore}</span>
          </div>
          <div class="progress-bar" style="margin-bottom:14px">
            <div class="fill" style="width:${evoPct}%"></div>
          </div>
          <div class="stat-row"><span class="stat-label">🍽️ 累计喂食</span><span class="stat-value">${pet.totalFed} 次</span></div>
          <div class="stat-row"><span class="stat-label">📅 最近喂食</span><span class="stat-value">${pet.lastFedDate || '—'}</span></div>
        </div>
        <div class="pet-actions">
          <button class="btn btn-outline btn-sm" id="pet-rename">✏️ 改名</button>
          <button class="btn btn-outline btn-sm" id="pet-speak">🔊 打招呼</button>
        </div>
      </div>
      <div class="pet-shop">
        <h3 style="margin-bottom:8px">🛒 神兽食肆</h3>
        <p style="color:var(--text-light);font-size:14px;margin-bottom:16px">
          用学习赚来的积分为神兽购买食物，保持体力它才能健康成长。魔法药水还能加速进化哦！
        </p>
        <div class="food-grid">${foodHtml}</div>
        ${warningHtml}
      </div>
    `;

    // 绑定食物点击
    container.querySelectorAll('.food-item').forEach(el => {
      el.addEventListener('click', () => this.feedPet(el.dataset.food));
    });

    const renameBtn = document.getElementById('pet-rename');
    if (renameBtn) renameBtn.addEventListener('click', () => this.renamePet());

    const speakBtn = document.getElementById('pet-speak');
    if (speakBtn) speakBtn.addEventListener('click', () => this.speakPet(pet));
  },

  // ========================================
  // 喂食
  // ========================================
  feedPet(foodId) {
    const food = this.FOODS.find(f => f.id === foodId);
    if (!food) return;

    const pet = Storage.getPet();
    if (!pet.adopted) return;

    if (pet.stamina >= 100 && food.stamina > 0) {
      App.showToast('体力已满，不用喂食啦！', 'info');
      return;
    }

    if (!ScoreSystem.spend(food.cost)) {
      App.showToast('积分不足，继续学习赚积分吧！', 'error');
      return;
    }

    const oldStage = pet.stage;
    pet.stamina = Math.min(100, pet.stamina + food.stamina);
    if (food.evolution) {
      pet.evolutionScore += food.evolution;
    }
    pet.totalFed++;
    pet.lastFedDate = new Date().toISOString().split('T')[0];
    pet.stage = this.getStage(pet.evolutionScore);
    Storage.savePet(pet);

    if (pet.stage > oldStage) {
      App.showToast(`🎉 ${pet.name}进化到了 ${this.STAGE_NAMES[pet.stage]}！`, 'success');
      TTS.speak(`${pet.name}进化啦！`);
    } else {
      App.showToast(`喂了${food.name}，体力 +${food.stamina}！`, 'success');
    }

    this.renderPet();
  },

  // ========================================
  // 改名
  // ========================================
  renamePet() {
    const pet = Storage.getPet();
    const modal = App.showModal('给神兽改名字', `
      <p style="margin-bottom:12px;color:var(--text-light)">输入新的名字：</p>
      <input type="text" id="pet-name-input" maxlength="8" value="${pet.name}" placeholder="输入名字"
        style="width:100%;padding:10px 14px;font-size:16px;border-radius:12px;border:2px solid var(--border);outline:none;font-family:var(--font);box-sizing:border-box" />
      <div style="text-align:center;margin-top:16px">
        <button class="btn btn-primary" id="pet-confirm-btn">确认</button>
      </div>
    `, []);

    const btn = document.getElementById('pet-confirm-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const inp = document.getElementById('pet-name-input');
        const name = inp ? inp.value.trim() : '';
        modal.close();
        if (!name) {
          App.showToast('名字不能为空哦！', 'error');
          return;
        }
        const p = Storage.getPet();
        p.name = name;
        Storage.savePet(p);
        App.showToast('改名成功！', 'success');
        this.renderPet();
      });
    }
    setTimeout(() => {
      const inp = document.getElementById('pet-name-input');
      if (inp) { inp.focus(); inp.select(); }
    }, 100);
  },

  // ========================================
  // 打招呼
  // ========================================
  speakPet(pet) {
    const greetings = {
      qilin: `${pet.name}开心地蹭了蹭你，今天也要一起加油哦！`,
      dragon: `${pet.name}威风地甩了甩尾巴，准备好挑战新知识啦！`,
      phoenix: `${pet.name}优雅地鸣叫一声，为你吟唱一首小诗。`,
    };
    const text = greetings[pet.type] || `${pet.name}向你打招呼！`;
    TTS.speak(text);
    App.showToast(text, 'info');
  },

  // ========================================
  // 进化阶段计算
  // ========================================
  getStage(evolutionScore) {
    if (evolutionScore >= 500) return 3;
    if (evolutionScore >= 200) return 2;
    return 1;
  },

  // ========================================
  // 进化进度百分比
  // ========================================
  getEvoPct(score) {
    if (score >= 500) return 100;
    if (score >= 200) return Math.round(((score - 200) / 300) * 100);
    return Math.round((score / 200) * 100);
  },

  // ========================================
  // 获取神兽 SVG（按类型 + 阶段）
  // ========================================
  getPetSVG(type, stage) {
    const svgs = {
      qilin: {
        1: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M58 118 Q40 112 44 128 Q52 124 62 122 Z" fill="#FFC107"/>
          <ellipse cx="98" cy="122" rx="46" ry="34" fill="#FFD93D"/>
          <ellipse cx="98" cy="130" rx="34" ry="22" fill="#FFE57F"/>
          <rect x="70" y="146" width="13" height="22" rx="6" fill="#FFA000"/>
          <rect x="113" y="146" width="13" height="22" rx="6" fill="#FFA000"/>
          <ellipse cx="76" cy="168" rx="8" ry="4" fill="#8D6E63"/>
          <ellipse cx="119" cy="168" rx="8" ry="4" fill="#8D6E63"/>
          <circle cx="142" cy="96" r="26" fill="#FFD93D"/>
          <path d="M150 72 Q156 54 150 48 Q146 58 144 70 Z" fill="#FF6B6B"/>
          <ellipse cx="132" cy="74" rx="6" ry="9" fill="#FFB74D" transform="rotate(-25 132 74)"/>
          <path d="M124 80 Q118 70 126 66 Q130 72 132 78 Z" fill="#FF8C42"/>
          <circle cx="148" cy="94" r="4.5" fill="#3E2723"/>
          <circle cx="149.5" cy="92.5" r="1.6" fill="#fff"/>
          <circle cx="153" cy="103" r="4" fill="#FF8A80" opacity="0.55"/>
          <path d="M146 105 Q151 109 156 105" stroke="#3E2723" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          <circle cx="90" cy="112" r="3" fill="#FFA000" opacity="0.5"/>
          <circle cx="104" cy="120" r="3" fill="#FFA000" opacity="0.5"/>
          <circle cx="80" cy="124" r="3" fill="#FFA000" opacity="0.5"/>
        </svg>`,
        2: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M55 120 Q35 110 38 130 Q44 126 58 126 Q44 138 52 148 Q58 138 60 128 Z" fill="#FFC107"/>
          <ellipse cx="96" cy="118" rx="52" ry="38" fill="#FFD93D"/>
          <ellipse cx="96" cy="128" rx="38" ry="26" fill="#FFE57F"/>
          <rect x="66" y="144" width="14" height="26" rx="7" fill="#FFA000"/>
          <rect x="112" y="144" width="14" height="26" rx="7" fill="#FFA000"/>
          <ellipse cx="73" cy="170" rx="9" ry="4" fill="#8D6E63"/>
          <ellipse cx="119" cy="170" rx="9" ry="4" fill="#8D6E63"/>
          <path d="M118 78 Q98 72 96 88 Q108 86 120 86 Q104 96 112 104 Q124 96 128 86 Z" fill="#FF8C42"/>
          <circle cx="144" cy="92" r="28" fill="#FFD93D"/>
          <path d="M152 66 Q160 44 154 38 Q150 50 146 64 Z" fill="#FF6B6B"/>
          <path d="M152 58 Q156 56 158 52" stroke="#FFB74D" stroke-width="2" fill="none" stroke-linecap="round"/>
          <ellipse cx="132" cy="68" rx="7" ry="11" fill="#FFB74D" transform="rotate(-25 132 68)"/>
          <circle cx="150" cy="90" r="5" fill="#3E2723"/>
          <circle cx="151.5" cy="88.5" r="1.8" fill="#fff"/>
          <circle cx="156" cy="100" r="4.5" fill="#FF8A80" opacity="0.55"/>
          <path d="M148 102 Q153 107 158 102" stroke="#3E2723" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <circle cx="84" cy="110" r="3.5" fill="#FFA000" opacity="0.55"/>
          <circle cx="100" cy="118" r="3.5" fill="#FFA000" opacity="0.55"/>
          <circle cx="76" cy="122" r="3.5" fill="#FFA000" opacity="0.55"/>
          <circle cx="92" cy="128" r="3.5" fill="#FFA000" opacity="0.55"/>
          <circle cx="108" cy="126" r="3.5" fill="#FFA000" opacity="0.55"/>
        </svg>`,
        3: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="qilinGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <style>
            .q-body{animation:qglow 2.2s ease-in-out infinite}
            @keyframes qglow{0%,100%{opacity:1}50%{opacity:.85}}
            .q-spark{animation:qsp 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
            @keyframes qsp{0%,100%{opacity:.3;transform:scale(.7)}50%{opacity:1;transform:scale(1.2)}}
          </style>
          <g class="q-spark"><path d="M30 44v12M24 50h12" stroke="#FFD93D" stroke-width="2" stroke-linecap="round"/></g>
          <g class="q-spark" style="animation-delay:.5s"><path d="M170 54v12M164 60h12" stroke="#FF8C42" stroke-width="2" stroke-linecap="round"/></g>
          <g class="q-spark" style="animation-delay:.9s"><path d="M160 144v10M155 149h10" stroke="#FFD93D" stroke-width="2" stroke-linecap="round"/></g>
          <path d="M52 116 Q30 104 36 128 Q44 124 58 124 Q40 140 50 152 Q60 140 62 128 Z" fill="#FFC107"/>
          <g class="q-body" filter="url(#qilinGlow)">
            <ellipse cx="94" cy="114" rx="56" ry="40" fill="#FFD93D"/>
            <ellipse cx="94" cy="126" rx="40" ry="26" fill="#FFE57F"/>
            <rect x="62" y="140" width="15" height="28" rx="7" fill="#FFA000"/>
            <rect x="110" y="140" width="15" height="28" rx="7" fill="#FFA000"/>
            <ellipse cx="69" cy="168" rx="10" ry="4" fill="#8D6E63"/>
            <ellipse cx="117" cy="168" rx="10" ry="4" fill="#8D6E63"/>
            <path d="M120 70 Q92 60 90 84 Q106 80 122 82 Q100 94 110 106 Q128 96 132 84 Z" fill="#FF8C42"/>
            <path d="M116 76 Q100 68 100 82" fill="#FFB74D"/>
            <circle cx="146" cy="86" r="30" fill="#FFD93D"/>
            <path d="M154 58 Q166 36 156 30 Q152 44 150 56 Z" fill="#FF6B6B"/>
            <path d="M154 50 Q160 46 162 40 M153 42 Q157 38 159 34" stroke="#FFD93D" stroke-width="2" fill="none" stroke-linecap="round"/>
            <ellipse cx="132" cy="60" rx="8" ry="12" fill="#FFB74D" transform="rotate(-25 132 60)"/>
            <circle cx="152" cy="84" r="5.5" fill="#3E2723"/>
            <circle cx="154" cy="82" r="2" fill="#fff"/>
            <circle cx="158" cy="96" r="5" fill="#FF8A80" opacity="0.6"/>
            <path d="M150 98 Q156 103 162 98" stroke="#3E2723" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="80" cy="106" r="4" fill="#FFA000" opacity="0.55"/>
            <circle cx="96" cy="114" r="4" fill="#FFA000" opacity="0.55"/>
            <circle cx="72" cy="118" r="4" fill="#FFA000" opacity="0.55"/>
            <circle cx="88" cy="124" r="4" fill="#FFA000" opacity="0.55"/>
            <circle cx="104" cy="120" r="4" fill="#FFA000" opacity="0.55"/>
            <circle cx="64" cy="112" r="4" fill="#FFA000" opacity="0.55"/>
          </g>
        </svg>`,
      },
      dragon: {
        1: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 140 Q70 110 100 120 Q130 130 140 100 Q145 80 130 70" fill="none" stroke="#4ECDC4" stroke-width="26" stroke-linecap="round"/>
          <path d="M50 140 Q70 110 100 120 Q130 130 140 100 Q145 80 130 70" fill="none" stroke="#A8E6CF" stroke-width="14" stroke-linecap="round" opacity="0.6"/>
          <circle cx="132" cy="66" r="22" fill="#4ECDC4"/>
          <path d="M126 48 Q124 40 130 38 Q132 44 132 50 Z" fill="#FFD93D"/>
          <path d="M140 48 Q142 40 136 38 Q134 44 134 50 Z" fill="#FFD93D"/>
          <circle cx="138" cy="64" r="4.5" fill="#3E2723"/>
          <circle cx="139.5" cy="62.5" r="1.6" fill="#fff"/>
          <circle cx="124" cy="70" r="1.5" fill="#2BB7AE"/>
          <path d="M124 74 Q130 78 136 74" stroke="#3E2723" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          <circle cx="120" cy="72" r="3.5" fill="#FF8A80" opacity="0.5"/>
          <path d="M50 140 Q42 144 44 152 Q50 148 54 146 Z" fill="#4ECDC4"/>
        </svg>`,
        2: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 150 Q60 110 96 124 Q132 138 142 96 Q148 72 128 62" fill="none" stroke="#4ECDC4" stroke-width="28" stroke-linecap="round"/>
          <path d="M44 150 Q60 110 96 124 Q132 138 142 96 Q148 72 128 62" fill="none" stroke="#A8E6CF" stroke-width="15" stroke-linecap="round" opacity="0.6"/>
          <path d="M70 134 l4 -6 l4 6 z" fill="#2BB7AE" opacity="0.5"/>
          <path d="M84 130 l4 -6 l4 6 z" fill="#2BB7AE" opacity="0.5"/>
          <path d="M100 128 l4 -6 l4 6 z" fill="#2BB7AE" opacity="0.5"/>
          <circle cx="130" cy="60" r="24" fill="#4ECDC4"/>
          <path d="M122 40 Q120 28 128 26 Q130 34 130 44 Z" fill="#FFD93D"/>
          <path d="M140 40 Q142 28 134 26 Q132 34 132 44 Z" fill="#FFD93D"/>
          <path d="M116 66 Q100 70 92 78" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
          <path d="M116 70 Q102 80 96 90" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
          <circle cx="136" cy="58" r="5" fill="#3E2723"/>
          <circle cx="137.5" cy="56.5" r="1.8" fill="#fff"/>
          <circle cx="120" cy="64" r="1.6" fill="#2BB7AE"/>
          <path d="M120 68 Q127 73 134 68" stroke="#3E2723" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <circle cx="116" cy="66" r="4" fill="#FF8A80" opacity="0.55"/>
          <path d="M46 150 l-4 6 M46 150 l0 7 M46 150 l4 6" stroke="#2BB7AE" stroke-width="2" stroke-linecap="round"/>
          <path d="M44 150 Q36 154 38 164 Q46 160 50 156 Z" fill="#4ECDC4"/>
        </svg>`,
        3: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="dragonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <style>
            .d-body{animation:dglow 2.2s ease-in-out infinite}
            @keyframes dglow{0%,100%{opacity:1}50%{opacity:.85}}
            .d-spark{animation:dsp 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
            @keyframes dsp{0%,100%{opacity:.3;transform:scale(.7)}50%{opacity:1;transform:scale(1.2)}}
          </style>
          <g class="d-spark"><path d="M40 54v12M34 60h12" stroke="#4ECDC4" stroke-width="2" stroke-linecap="round"/></g>
          <g class="d-spark" style="animation-delay:.6s"><path d="M160 144v12M154 150h12" stroke="#A8E6CF" stroke-width="2" stroke-linecap="round"/></g>
          <g class="d-spark" style="animation-delay:1s"><path d="M60 34v10M55 39h10" stroke="#FFD93D" stroke-width="2" stroke-linecap="round"/></g>
          <path d="M40 156 Q52 108 92 122 Q134 136 146 90 Q152 64 130 54" fill="none" stroke="#4ECDC4" stroke-width="30" stroke-linecap="round"/>
          <path d="M40 156 Q52 108 92 122 Q134 136 146 90 Q152 64 130 54" fill="none" stroke="#A8E6CF" stroke-width="16" stroke-linecap="round" opacity="0.6"/>
          <g class="d-body" filter="url(#dragonGlow)">
            <path d="M64 136 l5 -7 l5 7 z" fill="#2BB7AE" opacity="0.55"/>
            <path d="M80 130 l5 -7 l5 7 z" fill="#2BB7AE" opacity="0.55"/>
            <path d="M98 128 l5 -7 l5 7 z" fill="#2BB7AE" opacity="0.55"/>
            <path d="M116 122 l5 -7 l5 7 z" fill="#2BB7AE" opacity="0.55"/>
            <circle cx="132" cy="50" r="26" fill="#4ECDC4"/>
            <path d="M122 28 Q118 10 128 6 Q130 16 130 30 Z" fill="#FFD93D"/>
            <path d="M128 22 Q126 12 132 10" stroke="#FFA000" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M144 28 Q148 10 138 6 Q136 16 136 30 Z" fill="#FFD93D"/>
            <path d="M138 22 Q140 12 134 10" stroke="#FFA000" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M114 56 Q90 56 76 64" stroke="#FFFFFF" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.85"/>
            <path d="M114 62 Q92 70 80 84" stroke="#FFFFFF" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.85"/>
            <circle cx="138" cy="48" r="5.5" fill="#3E2723"/>
            <circle cx="140" cy="46" r="2" fill="#fff"/>
            <circle cx="120" cy="54" r="1.8" fill="#2BB7AE"/>
            <path d="M120 58 Q128 64 136 58" stroke="#3E2723" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="116" cy="56" r="4.5" fill="#FF8A80" opacity="0.6"/>
            <path d="M40 156 l-5 7 M40 156 l0 8 M40 156 l5 7" stroke="#2BB7AE" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M40 156 Q30 160 34 172 Q44 166 48 160 Z" fill="#4ECDC4"/>
            <circle cx="166" cy="100" r="7" fill="#FFE57F"/>
            <circle cx="166" cy="100" r="3" fill="#FFD93D"/>
            <path d="M166 88 q4 -4 0 -8 q-4 4 0 8 z" fill="#FFB347" opacity="0.8"/>
          </g>
        </svg>`,
      },
      phoenix: {
        1: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="120" rx="34" ry="38" fill="#FF6B6B"/>
          <ellipse cx="100" cy="128" rx="22" ry="26" fill="#FFB347"/>
          <ellipse cx="78" cy="116" rx="16" ry="22" fill="#E55A5A" transform="rotate(-20 78 116)"/>
          <circle cx="100" cy="78" r="22" fill="#FF6B6B"/>
          <path d="M100 58 Q96 48 100 42 Q104 48 100 58 Z" fill="#E55A5A"/>
          <path d="M100 84 L108 90 L100 92 Z" fill="#FFA000"/>
          <circle cx="106" cy="76" r="4.5" fill="#3E2723"/>
          <circle cx="107.5" cy="74.5" r="1.6" fill="#fff"/>
          <circle cx="112" cy="84" r="3.5" fill="#FF8A80" opacity="0.55"/>
          <path d="M100 156 Q96 172 90 176" stroke="#FF6B6B" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M100 158 Q100 174 100 180" stroke="#E55A5A" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M100 156 Q104 172 110 176" stroke="#FFB347" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M92 158 l-3 6 M92 158 l0 7 M92 158 l3 6" stroke="#FFA000" stroke-width="2" stroke-linecap="round"/>
          <path d="M108 158 l-3 6 M108 158 l0 7 M108 158 l3 6" stroke="#FFA000" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        2: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="118" rx="36" ry="40" fill="#FF6B6B"/>
          <ellipse cx="100" cy="126" rx="22" ry="28" fill="#FFB347"/>
          <path d="M70 110 Q40 96 36 120 Q52 116 70 122 Z" fill="#E55A5A"/>
          <path d="M70 110 Q48 104 46 118 Q58 114 72 118" fill="#FFB347" opacity="0.7"/>
          <path d="M130 110 Q160 96 164 120 Q148 116 130 122 Z" fill="#E55A5A"/>
          <circle cx="100" cy="74" r="23" fill="#FF6B6B"/>
          <path d="M100 54 Q94 40 100 34 Q106 40 100 54 Z" fill="#E55A5A"/>
          <path d="M100 54 Q96 44 92 48" stroke="#FFB347" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M100 54 Q104 44 108 48" stroke="#FFB347" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M100 80 L110 88 L100 90 Z" fill="#FFA000"/>
          <circle cx="107" cy="72" r="5" fill="#3E2723"/>
          <circle cx="108.5" cy="70.5" r="1.8" fill="#fff"/>
          <circle cx="113" cy="80" r="4" fill="#FF8A80" opacity="0.55"/>
          <path d="M92 156 Q80 178 72 186" stroke="#FF6B6B" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M100 158 Q100 182 100 192" stroke="#E55A5A" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M108 156 Q120 178 128 186" stroke="#FFB347" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M96 158 Q88 180 84 190" stroke="#FF8C42" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M104 158 Q112 180 116 190" stroke="#FF8C42" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M90 156 l-3 7 M90 156 l0 8 M90 156 l3 7" stroke="#FFA000" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M110 156 l-3 7 M110 156 l0 8 M110 156 l3 7" stroke="#FFA000" stroke-width="2.2" stroke-linecap="round"/>
        </svg>`,
        3: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="phoenixGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <style>
            .p-body{animation:pglow 2.2s ease-in-out infinite}
            @keyframes pglow{0%,100%{opacity:1}50%{opacity:.85}}
            .p-spark{animation:psp 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
            @keyframes psp{0%,100%{opacity:.3;transform:scale(.7)}50%{opacity:1;transform:scale(1.2)}}
          </style>
          <g class="p-spark"><path d="M40 44v12M34 50h12" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/></g>
          <g class="p-spark" style="animation-delay:.5s"><path d="M165 54v12M159 60h12" stroke="#FFB347" stroke-width="2" stroke-linecap="round"/></g>
          <g class="p-spark" style="animation-delay:1s"><path d="M50 154v10M45 159h10" stroke="#FFE57F" stroke-width="2" stroke-linecap="round"/></g>
          <path d="M88 150 Q60 178 40 190" stroke="#FF6B6B" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M92 154 Q70 184 56 196" stroke="#E55A5A" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M100 156 Q100 188 100 200" stroke="#FFB347" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M108 154 Q130 184 144 196" stroke="#FF8C42" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M112 150 Q140 178 160 190" stroke="#FF6B6B" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M96 156 Q84 186 76 198" stroke="#FFE57F" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M104 156 Q116 186 124 198" stroke="#FFE57F" stroke-width="6" fill="none" stroke-linecap="round"/>
          <g class="p-body" filter="url(#phoenixGlow)">
            <ellipse cx="100" cy="116" rx="38" ry="42" fill="#FF6B6B"/>
            <ellipse cx="100" cy="124" rx="22" ry="30" fill="#FFB347"/>
            <path d="M66 108 Q34 90 28 118 Q50 114 70 120 Z" fill="#E55A5A"/>
            <path d="M66 108 Q44 100 42 116 Q56 112 70 116" fill="#FFB347" opacity="0.75"/>
            <path d="M134 108 Q166 90 172 118 Q150 114 130 120 Z" fill="#E55A5A"/>
            <path d="M134 108 Q156 100 158 116 Q144 112 130 116" fill="#FFB347" opacity="0.75"/>
            <circle cx="100" cy="70" r="25" fill="#FF6B6B"/>
            <path d="M100 48 Q92 30 100 22 Q108 30 100 48 Z" fill="#E55A5A"/>
            <path d="M100 48 Q94 36 88 40" stroke="#FFB347" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M100 48 Q106 36 112 40" stroke="#FFB347" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M100 48 Q100 32 100 24" stroke="#FFE57F" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M100 76 L112 86 L100 88 Z" fill="#FFA000"/>
            <circle cx="108" cy="68" r="5.5" fill="#3E2723"/>
            <circle cx="110" cy="66" r="2" fill="#fff"/>
            <circle cx="115" cy="76" r="4.5" fill="#FF8A80" opacity="0.6"/>
            <path d="M88 156 l-3 8 M88 156 l0 9 M88 156 l3 8" stroke="#FFA000" stroke-width="2.4" stroke-linecap="round"/>
            <path d="M112 156 l-3 8 M112 156 l0 9 M112 156 l3 8" stroke="#FFA000" stroke-width="2.4" stroke-linecap="round"/>
          </g>
        </svg>`,
      },
    };

    const typeSvgs = svgs[type] || svgs.qilin;
    return typeSvgs[stage] || typeSvgs[1] || '';
  },
};
