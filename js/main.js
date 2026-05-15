'use strict';

/* ── Sidebar nav data ─────────────────────────────────────────── */
const NAV = [
  {
    title: '매뉴얼 목차',
    items: [
      { label: '전체 목차', href: '../index.html' },
    ]
  },
  {
    title: '사업 관리',
    items: [
      {
        label: '01. 사업관리',
        href: '01_사업관리.html',
        sub: [
          { label: '1-1. 사업 등록', href: '01_사업관리.html#s1-1' },
          { label: '1-2. 사업 조회/수정', href: '01_사업관리.html#s1-2' },
          { label: '1-3. 사업 승인', href: '01_사업관리.html#s1-3' },
        ]
      },
    ]
  },
  {
    title: '과제 관리',
    items: [
      { label: '02. 과제관리', href: '02_과제관리.html' },
      { label: '03. 협약관리', href: '03_협약관리.html' },
    ]
  },
  {
    title: '정산/보고',
    items: [
      { label: '04. 정산관리', href: '04_정산관리.html' },
      { label: '05. 보고서관리', href: '05_보고서관리.html' },
    ]
  },
];

/* ── Build sidebar HTML ───────────────────────────────────────── */
function buildNav(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentFile = location.pathname.split('/').pop() || 'index.html';
  let html = '';

  NAV.forEach(section => {
    html += `<div class="nav-section">
      <div class="nav-section-title">${section.title}</div>`;

    section.items.forEach(item => {
      const isActive = currentFile === item.href.split('/').pop().split('#')[0];

      if (item.sub) {
        html += `
        <div class="nav-parent${isActive ? ' open' : ''}" data-target="sub-${slugify(item.label)}">
          <a class="nav-item${isActive ? ' active' : ''}" href="${item.href}" style="flex:1;border-left:none;">
            ${item.label}
          </a>
          <span class="caret" style="padding-right:12px;">▶</span>
        </div>
        <div class="nav-sub${isActive ? ' open' : ''}" id="sub-${slugify(item.label)}">`;

        item.sub.forEach(s => {
          const subActive = isActive && location.hash === new URL(s.href, location.href).hash;
          html += `<a class="nav-item${subActive ? ' active' : ''}" href="${s.href}">${s.label}</a>`;
        });
        html += `</div>`;
      } else {
        html += `<a class="nav-item${isActive ? ' active' : ''}" href="${item.href}">${item.label}</a>`;
      }
    });

    html += `</div>`;
  });

  container.innerHTML = html;

  /* Caret toggle */
  container.querySelectorAll('.nav-parent').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const subId = el.dataset.target;
      const sub = document.getElementById(subId);
      if (!sub) return;
      sub.classList.toggle('open');
      el.classList.toggle('open');
    });
  });
}

/* ── Sidebar search filter ────────────────────────────────────── */
function initSearch(inputId, navId) {
  const input = document.getElementById(inputId);
  const nav   = document.getElementById(navId);
  if (!input || !nav) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    nav.querySelectorAll('.nav-item').forEach(el => {
      const match = !q || el.textContent.toLowerCase().includes(q);
      el.style.display = match ? '' : 'none';
    });
    nav.querySelectorAll('.nav-section').forEach(sec => {
      const visible = [...sec.querySelectorAll('.nav-item')].some(el => el.style.display !== 'none');
      sec.style.display = visible ? '' : 'none';
    });
  });
}

/* ── Hamburger (mobile) ───────────────────────────────────────── */
function initHamburger(btnId, sidebarId) {
  const btn  = document.getElementById(btnId);
  const side = document.getElementById(sidebarId);
  if (!btn || !side) return;
  btn.addEventListener('click', () => side.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!side.contains(e.target) && !btn.contains(e.target)) {
      side.classList.remove('open');
    }
  });
}

/* ── Active anchor on scroll ──────────────────────────────────── */
function initScrollSpy() {
  const headings = document.querySelectorAll('h2[id], h3[id]');
  if (!headings.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-item').forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-item[href$="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  headings.forEach(h => observer.observe(h));
}

/* ── Helpers ──────────────────────────────────────────────────── */
function slugify(str) {
  return str.replace(/[^a-zA-Z0-9가-힣]/g, '-');
}

/* ── Init ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav('nav-list');
  initSearch('nav-search', 'nav-list');
  initHamburger('hamburger', 'sidebar');
  initScrollSpy();
});
