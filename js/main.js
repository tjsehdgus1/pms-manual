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
    title: '사업등록관리',
    items: [
      {
        label: '01. 사업관리 / 프로젝트 관리',
        href: '01_사업관리.html',
        sub: [
          { label: '사업관리',      href: '01_사업관리.html#s-사업관리' },
          { label: '프로젝트 관리', href: '01_사업관리.html#s-프로젝트관리' },
        ]
      },
      {
        label: '02. 지원사업공고',
        href: '02_지원사업공고.html',
        sub: [
          { label: '목록 진입',      href: '02_지원사업공고.html#s-목록' },
          { label: '프로젝트 선택', href: '02_지원사업공고.html#s-프로젝트선택' },
          { label: '공고기본 정보 입력', href: '02_지원사업공고.html#s-입력' },
        ]
      },
      {
        label: '03. 공고 신청 (기업)',
        href: '03_공고신청_기업.html',
        sub: [
          { label: '과제신청 목록 진입', href: '03_공고신청_기업.html#s-목록' },
          { label: '신청서 작성 시작',   href: '03_공고신청_기업.html#s-신청서작성' },
          { label: '프로그램 선택',      href: '03_공고신청_기업.html#s-프로그램선택' },
        ]
      },
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

/* ── Lightbox ─────────────────────────────────────────────────── */
function initLightbox() {
  const box = document.createElement('div');
  box.id = 'lightbox';
  box.innerHTML = '<button id="lightbox-close" aria-label="닫기">&times;</button><img id="lightbox-img" src="" alt="">';
  document.body.appendChild(box);

  const lightboxImg = box.querySelector('#lightbox-img');

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  // 이벤트 위임: #content 내 모든 img 클릭 처리
  const content = document.querySelector('#content');
  if (content) {
    content.addEventListener('click', e => {
      if (e.target.tagName === 'IMG') {
        e.stopPropagation();
        open(e.target.src, e.target.alt);
      }
    });
  }

  box.addEventListener('click', e => { if (e.target === box) close(); });
  box.querySelector('#lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── Init ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav('nav-list');
  initSearch('nav-search', 'nav-list');
  initHamburger('hamburger', 'sidebar');
  initScrollSpy();
  initLightbox();
});
