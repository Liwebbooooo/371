/* ========================================
   古诗词模块
   ======================================== */

const PoetryModule = {
  currentPoem: null,       // 当前查看的诗词对象
  isReciteMode: false,     // 是否处于背诵模式
  gradeFilter: 'all',      // 年级筛选值
  reciteBlanks: [],        // 背诵填空信息 {lineIdx, charIdx, char}
  reciteCompleted: false,  // 当前诗词是否已完成背诵

  init() {
    this.currentPoem = null;
    this.isReciteMode = false;
    this.reciteBlanks = [];
    this.reciteCompleted = false;
    this.populateGradeFilter();
    this.renderGrid();
    this.bindEvents();
  },

  // ========================================
  // 填充年级下拉框（从数据中提取去重）
  // ========================================
  populateGradeFilter() {
    const select = document.getElementById('poetry-grade-filter');
    if (!select) return;

    const grades = [...new Set(POETRY_DATA.map(p => p.grade))].sort();
    let html = '<option value="all">全部年级</option>';
    grades.forEach(g => {
      html += `<option value="${g}">${g}</option>`;
    });
    select.innerHTML = html;
  },

  // ========================================
  // 获取筛选后的诗词列表
  // ========================================
  getFilteredPoems() {
    if (this.gradeFilter === 'all') return POETRY_DATA;
    return POETRY_DATA.filter(p => p.grade === this.gradeFilter);
  },

  // ========================================
  // 渲染诗词卡片网格
  // ========================================
  renderGrid() {
    const gridEl = document.getElementById('poetry-grid');
    const countEl = document.getElementById('poetry-count');
    if (!gridEl) return;

    const poems = this.getFilteredPoems();
    if (countEl) countEl.textContent = `共 ${poems.length} 首`;

    const progress = Storage.getProgress();

    if (poems.length === 0) {
      gridEl.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1">没有找到匹配的古诗词</p>';
      return;
    }

    let html = '';
    poems.forEach(poem => {
      const passed = progress.passedPoems[poem.title];
      const badge = passed ? ' <span style="color:var(--green)">✅</span>' : '';
      const firstLine = poem.content[0] ? poem.content[0].join('') : '';
      html += `
        <div class="poetry-card" data-id="${poem.id}">
          <div class="poetry-title">${poem.title}${badge}</div>
          <div class="poetry-author">[${poem.dynasty}] ${poem.author}</div>
          <div class="poetry-excerpt">${firstLine}...</div>
        </div>
      `;
    });
    gridEl.innerHTML = html;

    // 绑定卡片点击事件
    gridEl.querySelectorAll('.poetry-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        const poem = POETRY_DATA.find(p => p.id === id);
        if (poem) this.showDetail(poem);
      });
    });
  },

  // ========================================
  // 显示诗词详情
  // ========================================
  showDetail(poem) {
    this.currentPoem = poem;
    this.isReciteMode = false;
    this.reciteBlanks = [];
    this.reciteCompleted = false;

    const gridEl = document.getElementById('poetry-grid');
    const detailEl = document.getElementById('poetry-detail');
    const filterEl = document.getElementById('poetry-grade-filter');

    if (gridEl) gridEl.style.display = 'none';
    if (filterEl && filterEl.parentElement) filterEl.parentElement.style.display = 'none';
    if (detailEl) {
      detailEl.style.display = 'block';
      this.renderDetail();
    }
  },

  // ========================================
  // 渲染详情视图
  // ========================================
  renderDetail() {
    const detailEl = document.getElementById('poetry-detail');
    if (!detailEl || !this.currentPoem) return;

    const poem = this.currentPoem;
    const progress = Storage.getProgress();
    const passed = progress.passedPoems[poem.title];

    // 设置背诵模式 class
    detailEl.className = 'poetry-detail' + (this.isReciteMode ? ' recite-mode' : '');

    // 构建诗词内容
    let contentHtml = '';
    poem.content.forEach((line, lineIdx) => {
      const items = this.normalizeLine(line, poem.pinyin[lineIdx]);

      if (this.isReciteMode) {
        // 背诵模式：逐字渲染，部分字挖空为输入框
        let lineHtml = '<div class="line" style="display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-end;">';
        items.forEach((item, charIdx) => {
          const blankInfo = this.reciteBlanks.find(b => b.lineIdx === lineIdx && b.charIdx === charIdx);
          if (blankInfo) {
            lineHtml += `
              <span style="display:inline-block;text-align:center;margin:0 3px;">
                <span class="pinyin">${item.pinyin}</span>
                <input type="text" class="recite-blank" data-line="${lineIdx}" data-char="${charIdx}" data-answer="${item.char}"
                  maxlength="1"
                  style="width:28px;font-size:20px;text-align:center;border:none;border-bottom:2px solid var(--primary);background:transparent;outline:none;font-family:var(--font);padding:0;color:var(--text);" />
              </span>`;
          } else {
            lineHtml += `
              <span style="display:inline-block;text-align:center;margin:0 3px;">
                <span class="pinyin">${item.pinyin}</span>
                <span style="font-size:20px;">${item.char}</span>
              </span>`;
          }
        });
        lineHtml += '</div>';
        contentHtml += lineHtml;
      } else {
        // 普通模式：整行拼音在上、汉字在下
        const pinyinText = items.map(it => it.pinyin).join('  ');
        const charText = items.map(it => it.char).join('');
        contentHtml += `
          <div class="line">
            <span class="pinyin">${pinyinText}</span>
            <span>${charText}</span>
          </div>`;
      }
    });

    // 背诵完成横幅
    let completeBanner = '';
    if (this.reciteCompleted) {
      completeBanner = `
        <div style="text-align:center;padding:16px;background:#DFF6DD;border-radius:var(--radius);margin-top:16px;font-size:16px;color:var(--green);">
          🎉 太棒了！《${poem.title}》背诵成功！
        </div>`;
    }

    detailEl.innerHTML = `
      <button class="btn btn-outline" id="poetry-back" style="margin-bottom:20px">‹ 返回列表</button>
      <h2>${poem.title}</h2>
      <p style="text-align:center;color:var(--text-muted);margin-bottom:16px">
        [${poem.dynasty}] ${poem.author} · ${poem.grade}
        ${passed ? '<span style="color:var(--green);margin-left:8px">✅ 已背诵</span>' : ''}
      </p>
      <div class="poetry-content">${contentHtml}</div>
      ${completeBanner}
      <div style="margin:24px 0;padding:16px;background:var(--bg);border-radius:var(--radius)">
        <strong>📝 注释：</strong>${poem.annotation || '暂无'}
      </div>
      <div style="margin:24px 0;padding:16px;background:var(--bg);border-radius:var(--radius)">
        <strong>💡 译文：</strong>${poem.translation || '暂无'}
      </div>
      <div style="text-align:center;display:flex;gap:12px;justify-content:center;">
        <button class="btn btn-primary" id="poetry-recite-btn">
          ${this.isReciteMode ? '📖 退出背诵' : '🎯 背诵模式'}
        </button>
        <button class="btn btn-outline" id="poetry-tts-btn">🔊 朗读</button>
      </div>
    `;

    this.bindDetailEvents();

    if (this.isReciteMode && !this.reciteCompleted) {
      this.focusFirstBlank();
    }
  },

  // ========================================
  // 将一行数据规范化为 [{char, pinyin}] 数组
  // ========================================
  normalizeLine(line, pinyinLine) {
    let charArr = line;
    let pinArr = pinyinLine || [];

    // 若整行为单个字符串（如 "曲项向天歌"），拆分为单字
    if (charArr.length === 1 && charArr[0].length > 1) {
      charArr = charArr[0].split('');
      pinArr = pinArr[0] ? pinArr[0].split(/\s+/) : [];
    }

    const result = [];
    for (let i = 0; i < charArr.length; i++) {
      result.push({
        char: charArr[i],
        pinyin: pinArr[i] || '',
      });
    }
    return result;
  },

  // ========================================
  // 切换背诵模式
  // ========================================
  toggleReciteMode() {
    this.isReciteMode = !this.isReciteMode;
    if (this.isReciteMode) {
      this.generateBlanks();
      this.reciteCompleted = false;
    } else {
      this.reciteBlanks = [];
    }
    this.renderDetail();
  },

  // ========================================
  // 生成填空（每行约 40% 的汉字挖空，至少 1 个）
  // ========================================
  generateBlanks() {
    this.reciteBlanks = [];
    if (!this.currentPoem) return;

    const poem = this.currentPoem;
    poem.content.forEach((line, lineIdx) => {
      const items = this.normalizeLine(line, poem.pinyin[lineIdx]);

      // 仅对汉字挖空，跳过标点
      const blankableIndices = [];
      items.forEach((item, charIdx) => {
        if (/[\u4e00-\u9fa5]/.test(item.char)) {
          blankableIndices.push(charIdx);
        }
      });

      if (blankableIndices.length === 0) return;

      const blankCount = Math.max(1, Math.floor(blankableIndices.length * 0.4));
      const shuffled = [...blankableIndices].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, blankCount);

      selected.forEach(charIdx => {
        this.reciteBlanks.push({
          lineIdx,
          charIdx,
          char: items[charIdx].char,
        });
      });
    });
  },

  // ========================================
  // 绑定详情页事件
  // ========================================
  bindDetailEvents() {
    const backBtn = document.getElementById('poetry-back');
    const reciteBtn = document.getElementById('poetry-recite-btn');
    const ttsBtn = document.getElementById('poetry-tts-btn');

    if (backBtn) {
      backBtn.addEventListener('click', () => this.showGrid());
    }
    if (reciteBtn) {
      reciteBtn.addEventListener('click', () => this.toggleReciteMode());
    }
    if (ttsBtn) {
      ttsBtn.addEventListener('click', () => {
        if (!this.currentPoem) return;
        const fullText = this.currentPoem.content.map(l => l.join('')).join('，');
        TTS.speak(fullText, 0.75);
      });
    }

    // 背诵模式：绑定输入框事件
    if (this.isReciteMode) {
      const inputs = document.querySelectorAll('.recite-blank');
      inputs.forEach(input => {
        input.addEventListener('input', () => this.checkReciteInput(input));
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.focusNextBlank(input);
          }
        });
      });
    }
  },

  // ========================================
  // 检查单个填空输入
  // ========================================
  checkReciteInput(input) {
    const answer = input.dataset.answer;
    const value = input.value.trim();

    // 重置样式
    input.style.borderBottomColor = 'var(--primary)';
    input.style.color = 'var(--text)';

    if (value === answer) {
      // 正确：绿色 + 禁用
      input.style.borderBottomColor = 'var(--green)';
      input.style.color = 'var(--green)';
      input.style.fontWeight = '700';
      input.disabled = true;
      this.focusNextBlank(input);
    } else if (value.length > 0) {
      // 有输入但错误：红色
      input.style.borderBottomColor = 'var(--primary)';
      input.style.color = 'var(--primary)';
    }

    this.checkReciteComplete();
  },

  // ========================================
  // 聚焦第一个填空
  // ========================================
  focusFirstBlank() {
    const firstInput = document.querySelector('.recite-blank');
    if (firstInput) firstInput.focus();
  },

  // ========================================
  // 聚焦下一个未完成的填空
  // ========================================
  focusNextBlank(currentInput) {
    const inputs = Array.from(document.querySelectorAll('.recite-blank'));
    const idx = inputs.indexOf(currentInput);
    for (let i = idx + 1; i < inputs.length; i++) {
      if (!inputs[i].disabled) {
        inputs[i].focus();
        return;
      }
    }
  },

  // ========================================
  // 检查是否全部填对
  // ========================================
  checkReciteComplete() {
    const inputs = document.querySelectorAll('.recite-blank');
    if (inputs.length === 0) return;

    let allCorrect = true;
    inputs.forEach(input => {
      if (input.value.trim() !== input.dataset.answer) {
        allCorrect = false;
      }
    });

    if (allCorrect && !this.reciteCompleted) {
      this.reciteCompleted = true;
      this.markPoemPassed();
    }
  },

  // ========================================
  // 标记诗词为已背诵
  // ========================================
  markPoemPassed() {
    if (!this.currentPoem) return;

    const progress = Storage.getProgress();
    const wasPassed = progress.passedPoems[this.currentPoem.title];

    if (!wasPassed) {
      progress.passedPoems[this.currentPoem.title] = true;
      Storage.saveProgress(progress);
      ScoreSystem.add(ScoreSystem.REWARDS.POETRY_RECITE, `背诵了《${this.currentPoem.title}》！`);
    } else {
      App.showToast(`太棒了！《${this.currentPoem.title}》背诵完成！`, 'success');
    }

    App.checkInToday();

    // 显示完成横幅（不重新渲染，保留输入框状态）
    const detailEl = document.getElementById('poetry-detail');
    if (detailEl && !detailEl.querySelector('[data-complete-banner]')) {
      const banner = document.createElement('div');
      banner.setAttribute('data-complete-banner', 'true');
      banner.style.cssText = 'text-align:center;padding:16px;background:#DFF6DD;border-radius:var(--radius);margin-top:16px;font-size:16px;color:var(--green);';
      banner.innerHTML = `🎉 太棒了！《${this.currentPoem.title}》背诵成功！`;
      // 插入到 poetry-content 之后
      const content = detailEl.querySelector('.poetry-content');
      if (content && content.nextSibling) {
        content.parentNode.insertBefore(banner, content.nextSibling);
      } else if (content) {
        content.parentNode.appendChild(banner);
      }
    }
  },

  // ========================================
  // 返回列表视图
  // ========================================
  showGrid() {
    const gridEl = document.getElementById('poetry-grid');
    const detailEl = document.getElementById('poetry-detail');
    const filterEl = document.getElementById('poetry-grade-filter');

    if (gridEl) gridEl.style.display = '';
    if (filterEl && filterEl.parentElement) filterEl.parentElement.style.display = '';
    if (detailEl) detailEl.style.display = 'none';

    this.currentPoem = null;
    this.isReciteMode = false;
    this.reciteBlanks = [];
    this.reciteCompleted = false;
    this.renderGrid();
  },

  // ========================================
  // 绑定年级筛选事件
  // ========================================
  bindEvents() {
    const filter = document.getElementById('poetry-grade-filter');
    if (filter) {
      filter.addEventListener('change', () => {
        this.gradeFilter = filter.value;
        this.renderGrid();
      });
    }
  },
};
