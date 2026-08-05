/* ========================================
   汉字列表模块
   ======================================== */

const CharlistModule = {
  currentPage: 1,
  pageSize: 50,
  searchTerm: '',
  gradeFilter: 'all',
  statusFilter: 'all',

  GRADE_NAMES: [
    '一年级上册', '一年级下册',
    '二年级上册', '二年级下册',
    '三年级上册', '三年级下册',
    '四年级上册', '四年级下册',
    '五年级上册', '五年级下册',
    '六年级上册', '六年级下册',
  ],

  init() {
    this.populateGradeFilter();
    this.render();
    this.bindEvents();
  },

  // ========================================
  // 填充年级下拉框
  // ========================================
  populateGradeFilter() {
    const select = document.getElementById('charlist-grade-filter');
    if (!select) return;

    // 保留 "全部年级" 选项，添加各年级
    let html = '<option value="all">全部年级</option>';
    this.GRADE_NAMES.forEach(name => {
      html += `<option value="${name}">${name}</option>`;
    });
    select.innerHTML = html;
  },

  // ========================================
  // 获取筛选后的数据
  // ========================================
  getFilteredChars() {
    let chars = [...CHARACTERS];

    // 搜索过滤
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      chars = chars.filter(c =>
        c.char.includes(term) ||
        c.pinyin.toLowerCase().includes(term)
      );
    }

    // 年级过滤
    if (this.gradeFilter !== 'all') {
      chars = chars.filter(c => c.grade === this.gradeFilter);
    }

    // 状态过滤
    if (this.statusFilter !== 'all') {
      const progress = Storage.getProgress();
      if (this.statusFilter === 'passed') {
        chars = chars.filter(c => progress.learnedChars[c.char]);
      } else if (this.statusFilter === 'pending') {
        chars = chars.filter(c => !progress.learnedChars[c.char]);
      }
    }

    return chars;
  },

  // ========================================
  // 渲染表格
  // ========================================
  render() {
    const filteredChars = this.getFilteredChars();
    const totalChars = filteredChars.length;
    const totalPages = Math.ceil(totalChars / this.pageSize);

    // 修正页码
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages || 1;
    }

    const start = (this.currentPage - 1) * this.pageSize;
    const pageChars = filteredChars.slice(start, start + this.pageSize);

    this.renderTable(pageChars, start);
    this.renderPagination(totalPages);
    this.renderSummary(filteredChars);
  },

  // ========================================
  // 渲染表格主体
  // ========================================
  renderTable(pageChars, startIndex) {
    const tbody = document.getElementById('charlist-body');
    if (!tbody) return;

    const progress = Storage.getProgress();

    if (pageChars.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted)">没有找到匹配的汉字</td></tr>`;
      return;
    }

    let html = '';
    pageChars.forEach((charData, i) => {
      const index = startIndex + i + 1;
      const isPassed = progress.learnedChars[charData.char];
      const statusText = isPassed
        ? '<span class="status-passed">✅ 已过关</span>'
        : '<span class="status-pending">🕐 未过关</span>';
      const words = charData.words ? charData.words.slice(0, 3).join('、') : '';

      html += `
        <tr>
          <td>${index}</td>
          <td>
            <span class="char-clickable" data-char="${charData.char}" data-words="${encodeURIComponent(JSON.stringify(charData.words || []))}" title="点击朗读">
              ${charData.char}
            </span>
          </td>
          <td>${charData.pinyin}</td>
          <td>${charData.strokes}</td>
          <td title="${words}">${words}</td>
          <td>${charData.grade}</td>
          <td>${statusText}</td>
        </tr>
      `;
    });

    tbody.innerHTML = html;

    // 绑定点击朗读事件
    tbody.querySelectorAll('.char-clickable').forEach(el => {
      el.addEventListener('click', () => {
        const char = el.dataset.char;
        const words = JSON.parse(decodeURIComponent(el.dataset.words));
        TTS.speakChar(char, words);
      });

      el.addEventListener('mouseenter', (e) => {
        e.target.style.color = 'var(--primary)';
      });

      el.addEventListener('mouseleave', (e) => {
        e.target.style.color = '';
      });
    });
  },

  // ========================================
  // 渲染分页
  // ========================================
  renderPagination(totalPages) {
    const container = document.getElementById('charlist-pagination');
    if (!container) return;

    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = '';
    const maxButtons = 7;

    // 上一页
    html += `<button class="btn btn-outline btn-sm page-btn" data-page="${this.currentPage - 1}" ${this.currentPage === 1 ? 'disabled' : ''}>‹ 上一页</button>`;

    // 页码按钮
    let startPage = Math.max(1, this.currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    if (startPage > 1) {
      html += `<button class="btn btn-outline btn-sm page-btn" data-page="1">1</button>`;
      if (startPage > 2) {
        html += `<span style="padding:0 4px">...</span>`;
      }
    }

    for (let p = startPage; p <= endPage; p++) {
      const activeClass = p === this.currentPage ? 'btn-primary' : 'btn-outline';
      html += `<button class="btn ${activeClass} btn-sm page-btn" data-page="${p}">${p}</button>`;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        html += `<span style="padding:0 4px">...</span>`;
      }
      html += `<button class="btn btn-outline btn-sm page-btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    // 下一页
    html += `<button class="btn btn-outline btn-sm page-btn" data-page="${this.currentPage + 1}" ${this.currentPage === totalPages ? 'disabled' : ''}>下一页 ›</button>`;

    container.innerHTML = html;

    // 绑定分页点击事件
    container.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.dataset.page);
        if (page >= 1 && page <= totalPages) {
          this.currentPage = page;
          this.render();
        }
      });
    });
  },

  // ========================================
  // 渲染汇总信息
  // ========================================
  renderSummary(filteredChars) {
    const summaryEl = document.getElementById('charlist-summary');
    if (!summaryEl) return;

    const progress = Storage.getProgress();
    const total = filteredChars.length;
    let passed = 0;
    filteredChars.forEach(c => {
      if (progress.learnedChars[c.char]) passed++;
    });

    summaryEl.textContent = `共 ${total} 字，已过关 ${passed} 字`;
  },

  // ========================================
  // 绑定筛选和搜索事件
  // ========================================
  bindEvents() {
    const searchInput = document.getElementById('charlist-search');
    const gradeFilter = document.getElementById('charlist-grade-filter');
    const statusFilter = document.getElementById('charlist-status-filter');

    if (searchInput) {
      // 防抖搜索
      let debounceTimer;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.searchTerm = searchInput.value.trim();
          this.currentPage = 1;
          this.render();
        }, 300);
      });
    }

    if (gradeFilter) {
      gradeFilter.addEventListener('change', () => {
        this.gradeFilter = gradeFilter.value;
        this.currentPage = 1;
        this.render();
      });
    }

    if (statusFilter) {
      statusFilter.addEventListener('change', () => {
        this.statusFilter = statusFilter.value;
        this.currentPage = 1;
        this.render();
      });
    }
  },
};
