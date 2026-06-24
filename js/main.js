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
    title: '섹션 목록',
    items: [
      {
        label: '00. 회원가입 (사용자)',
        href: '00_회원가입_사용자.html',
        role: 'user',
        sub: [
          { label: '회원 유형 선택', href: '00_회원가입_사용자.html#s-가입선택' },
          { label: '약관 동의',     href: '00_회원가입_사용자.html#s-약관동의' },
          { label: '본인인증',      href: '00_회원가입_사용자.html#s-본인인증' },
          { label: '회원정보 작성', href: '00_회원가입_사용자.html#s-회원정보' },
        ]
      },
      {
        label: '01. 사업관리 / 프로젝트 관리 (관리자)',
        href: '01_사업관리.html',
        role: 'admin',
        sub: [
          { label: '사업관리',      href: '01_사업관리.html#s-사업관리' },
          { label: '프로젝트 관리', href: '01_사업관리.html#s-프로젝트관리' },
        ]
      },
      {
        label: '02. 지원사업공고 (관리자)',
        href: '02_지원사업공고.html',
        role: 'admin',
        sub: [
          { label: '목록 진입',         href: '02_지원사업공고.html#s-목록' },
          { label: '프로젝트 선택',     href: '02_지원사업공고.html#s-프로젝트선택' },
          { label: '공고기본 정보 입력', href: '02_지원사업공고.html#s-입력' },
          { label: '프로그램 목록 확인', href: '02_지원사업공고.html#s-프로그램목록' },
          { label: '프로그램 등록',     href: '02_지원사업공고.html#s-프로그램등록' },
        ]
      },
      {
        label: '03. 공고 신청 (사용자)',
        href: '03_공고신청_기업.html',
        role: 'user',
        sub: [
          { label: '공고 목록 진입',    href: '03_공고신청_기업.html#s-공고목록' },
          { label: '공고 상세 확인',    href: '03_공고신청_기업.html#s-공고상세' },
          { label: '프로그램 신청',     href: '03_공고신청_기업.html#s-프로그램신청' },
          { label: 'Step1 프로그램정보', href: '03_공고신청_기업.html#s-프로그램정보' },
          { label: 'Step2 기업정보',    href: '03_공고신청_기업.html#s-기업정보' },
          { label: 'Step3 적격성진단',  href: '03_공고신청_기업.html#s-적격성진단' },
          { label: 'Step4 컨소시엄',    href: '03_공고신청_기업.html#s-컨소시엄' },
          { label: 'Step5 사업정보',    href: '03_공고신청_기업.html#s-사업정보' },
          { label: '접수완료',          href: '03_공고신청_기업.html#s-접수완료' },
        ]
      },
      {
        label: '04. 요건검토 / 보완요청 (관리자)',
        href: '04_요건검토_보완요청.html',
        role: 'admin',
        sub: [
          { label: '접수내역 목록 진입',  href: '04_요건검토_보완요청.html#s-목록' },
          { label: '프로그램정보 확인',   href: '04_요건검토_보완요청.html#s-프로그램정보' },
          { label: '기업정보 확인',       href: '04_요건검토_보완요청.html#s-기업정보' },
          { label: '적격성진단표 확인',   href: '04_요건검토_보완요청.html#s-적격성진단' },
          { label: '컨소시엄 확인',       href: '04_요건검토_보완요청.html#s-컨소시엄' },
          { label: '사업정보 확인',       href: '04_요건검토_보완요청.html#s-사업정보' },
          { label: '요건검토 체크리스트', href: '04_요건검토_보완요청.html#s-요건검토' },
          { label: '보완요청',            href: '04_요건검토_보완요청.html#s-보완요청' },
        ]
      },
      {
        label: '05. 보완요청 답변 (사용자)',
        href: '05_보완요청_답변_기업.html',
        role: 'user',
        sub: [
          { label: '사업공고접수 목록 진입', href: '05_보완요청_답변_기업.html#s-목록' },
          { label: '요건검토 탭 확인',       href: '05_보완요청_답변_기업.html#s-요건검토' },
          { label: '보완요청 확인 및 답변',  href: '05_보완요청_답변_기업.html#s-보완답변' },
        ]
      },
      {
        label: '06. 보완요청 답변 검토 (관리자)',
        href: '06_보완요청_답변검토_관리자.html',
        role: 'admin',
        sub: [
          { label: '접수내역 목록 진입',  href: '06_보완요청_답변검토_관리자.html#s-목록' },
          { label: '요건검토 탭 확인',    href: '06_보완요청_답변검토_관리자.html#s-요건검토' },
          { label: '보완요청 답변 확인',  href: '06_보완요청_답변검토_관리자.html#s-답변확인' },
          { label: '검토완료 / 서류탈락', href: '06_보완요청_답변검토_관리자.html#s-검토결과' },
        ]
      },
      {
        label: '07. 선정평가 등록 (관리자)',
        href: '07_선정평가_등록_관리자.html',
        role: 'admin',
        sub: [
          { label: '평가등록 공고 목록',   href: '07_선정평가_등록_관리자.html#s-공고목록' },
          { label: '프로그램/평가표 관리', href: '07_선정평가_등록_관리자.html#s-평가표관리' },
          { label: '평가표 수정',          href: '07_선정평가_등록_관리자.html#s-평가표수정' },
          { label: '평가분과 추가',        href: '07_선정평가_등록_관리자.html#s-평가분과' },
          { label: '평가기업 매칭',        href: '07_선정평가_등록_관리자.html#s-기업매칭' },
        ]
      },
      {
        label: '08. 선정평가 진행 (평가위원)',
        href: '08_선정평가_진행_평가위원.html',
        role: 'evaluator',
        sub: [
          { label: '본인인증',             href: '08_선정평가_진행_평가위원.html#s-본인인증' },
          { label: '평가공고/과제 선택',   href: '08_선정평가_진행_평가위원.html#s-과제선택' },
          { label: '평가과제 상세 확인',   href: '08_선정평가_진행_평가위원.html#s-과제상세' },
          { label: '평가표 작성 및 제출',  href: '08_선정평가_진행_평가위원.html#s-평가표' },
        ]
      },
      {
        label: '09. 선정평가 진행 (평가위원장)',
        href: '09_선정평가_진행_평가위원장.html',
        role: 'evaluator',
        sub: [
          { label: '종합평가표 확인',        href: '09_선정평가_진행_평가위원장.html#s-종합평가표' },
          { label: '평가위원별 평가표 확인', href: '09_선정평가_진행_평가위원장.html#s-위원별평가표' },
        ]
      },
      {
        label: '10. 선정결과 처리 (관리자)',
        href: '10_선정결과_처리_관리자.html',
        role: 'admin',
        sub: [
          { label: '공고 목록 진입',            href: '10_선정결과_처리_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록 확인',   href: '10_선정결과_처리_관리자.html#s-과제목록' },
          { label: '평가결과 상세 확인',        href: '10_선정결과_처리_관리자.html#s-결과상세' },
          { label: '평가위원 평가표 확인',      href: '10_선정결과_처리_관리자.html#s-위원평가표' },
          { label: '평가위원장 평가표 확인',    href: '10_선정결과_처리_관리자.html#s-위원장평가표' },
          { label: '보완요청 답변 검토완료/반려', href: '10_선정결과_처리_관리자.html#s-보완검토' },
        ]
      },
      {
        label: '11. 평가결과 확인 및 제출 (사용자)',
        href: '11_평가결과_확인_기업.html',
        role: 'user',
        sub: [
          { label: '과제 목록 진입',        href: '11_평가결과_확인_기업.html#s-과제목록' },
          { label: '평가결과 목록 확인',    href: '11_평가결과_확인_기업.html#s-결과목록' },
          { label: '평가결과 상세 및 제출', href: '11_평가결과_확인_기업.html#s-결과상세' },
        ]
      },
      {
        label: '12. 협약정보 등록요청 (관리자)',
        href: '12_협약정보_등록요청_관리자.html',
        role: 'admin',
        sub: [
          { label: '전자협약 공고 목록 진입',  href: '12_협약정보_등록요청_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록 확인', href: '12_협약정보_등록요청_관리자.html#s-과제목록' },
          { label: '협약 목록 확인',          href: '12_협약정보_등록요청_관리자.html#s-협약목록' },
          { label: '협약정보 작성 요청',      href: '12_협약정보_등록요청_관리자.html#s-등록요청' },
        ]
      },
      {
        label: '13. 협약정보 등록 (사용자)',
        href: '13_협약정보_등록_기업.html',
        role: 'user',
        sub: [
          { label: '과제 목록 진입',    href: '13_협약정보_등록_기업.html#s-과제목록' },
          { label: '협약 목록 확인',    href: '13_협약정보_등록_기업.html#s-협약목록' },
          { label: '요청내용 확인',     href: '13_협약정보_등록_기업.html#s-요청내용' },
          { label: '과제정보 입력',     href: '13_협약정보_등록_기업.html#s-과제정보' },
          { label: '컨소시엄 입력',     href: '13_협약정보_등록_기업.html#s-컨소시엄' },
          { label: '사업비 입력',       href: '13_협약정보_등록_기업.html#s-사업비' },
          { label: '참여연구원 등록',   href: '13_협약정보_등록_기업.html#s-참여연구원' },
          { label: '첨부자료 등록',     href: '13_협약정보_등록_기업.html#s-첨부자료' },
        ]
      },
      {
        label: '14. 협약정보 검토 및 협약서 등록 (관리자)',
        href: '14_협약정보_검토_협약서등록_관리자.html',
        role: 'admin',
        sub: [
          { label: '전자협약 공고 목록 진입',  href: '14_협약정보_검토_협약서등록_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록 확인', href: '14_협약정보_검토_협약서등록_관리자.html#s-과제목록' },
          { label: '협약 목록 확인',          href: '14_협약정보_검토_협약서등록_관리자.html#s-협약목록' },
          { label: '협약정보 검토',           href: '14_협약정보_검토_협약서등록_관리자.html#s-협약상세' },
          { label: '협약서 등록',             href: '14_협약정보_검토_협약서등록_관리자.html#s-협약서등록' },
        ]
      },
      {
        label: '15. 전자협약 진행 (사용자)',
        href: '15_전자협약_진행_기업.html',
        role: 'user',
        sub: [
          { label: '과제 목록 진입',        href: '15_전자협약_진행_기업.html#s-과제목록' },
          { label: '협약 목록 확인',        href: '15_전자협약_진행_기업.html#s-협약목록' },
          { label: '전자협약 내용 확인',    href: '15_전자협약_진행_기업.html#s-전자협약진행' },
          { label: '공동인증서 인증/서명',  href: '15_전자협약_진행_기업.html#s-인증서인증' },
          { label: '전자협약 요청',         href: '15_전자협약_진행_기업.html#s-전자협약요청' },
        ]
      },
      {
        label: '16. 전자협약 진행 (관리자)',
        href: '16_전자협약_진행_관리자.html',
        role: 'admin',
        sub: [
          { label: '전자협약 공고 목록 진입', href: '16_전자협약_진행_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록 확인', href: '16_전자협약_진행_관리자.html#s-과제목록' },
          { label: '협약 목록 확인',          href: '16_전자협약_진행_관리자.html#s-협약목록' },
          { label: '전자협약 내용 확인',      href: '16_전자협약_진행_관리자.html#s-전자협약진행' },
          { label: '공동인증서 인증(담당기관)', href: '16_전자협약_진행_관리자.html#s-인증서인증' },
          { label: 'TSA 인증마크 확인',       href: '16_전자협약_진행_관리자.html#s-tsa인증' },
        ]
      },
      {
        label: '17. 사업비 지급 신청 (사용자)',
        href: '17_사업비_지급신청_기업.html',
        role: 'user',
        sub: [
          { label: '지급신청 목록 진입',    href: '17_사업비_지급신청_기업.html#s-신청목록' },
          { label: '지급신청서 확인',       href: '17_사업비_지급신청_기업.html#s-신청서' },
          { label: '사업비 지급정보 작성',  href: '17_사업비_지급신청_기업.html#s-정보작성' },
        ]
      },
      {
        label: '18. 사업비 지급 처리 (관리자)',
        href: '18_사업비_지급처리_관리자.html',
        role: 'admin',
        sub: [
          { label: '공고 목록 진입',          href: '18_사업비_지급처리_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록 확인', href: '18_사업비_지급처리_관리자.html#s-과제목록' },
          { label: '지급신청 정보 확인',      href: '18_사업비_지급처리_관리자.html#s-신청정보' },
          { label: '신청 상세 확인 및 처리',  href: '18_사업비_지급처리_관리자.html#s-신청상세' },
        ]
      },
      {
        label: '19. 사업비 집행관리 (사용자)',
        href: '19_사업비_집행관리_기업.html',
        role: 'user',
        sub: [
          { label: '과제 목록 진입',      href: '19_사업비_집행관리_기업.html#s-과제목록' },
          { label: '집행 내역 등록',      href: '19_사업비_집행관리_기업.html#s-집행관리' },
        ]
      },
      {
        label: '20. 사업비 집행 확인 (관리자)',
        href: '20_사업비_집행확인_관리자.html',
        role: 'admin',
        sub: [
          { label: '공고 목록 진입',        href: '20_사업비_집행확인_관리자.html#s-공고목록' },
          { label: '집행관리 상세 확인',    href: '20_사업비_집행확인_관리자.html#s-집행상세' },
        ]
      },
      {
        label: '21. 보고서 제출 요청 (관리자)',
        href: '21_보고서_제출요청_관리자.html',
        role: 'admin',
        sub: [
          { label: '공고 목록 진입',        href: '21_보고서_제출요청_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록',    href: '21_보고서_제출요청_관리자.html#s-과제목록' },
          { label: '보고서 요청 목록',      href: '21_보고서_제출요청_관리자.html#s-요청목록' },
          { label: '보고서 요청 등록',      href: '21_보고서_제출요청_관리자.html#s-요청등록' },
          { label: '요청기업 추가',         href: '21_보고서_제출요청_관리자.html#s-기업추가' },
        ]
      },
      {
        label: '22. 보고서 제출 (사용자)',
        href: '22_보고서_제출_기업.html',
        role: 'user',
        sub: [
          { label: '과제 목록 진입',            href: '22_보고서_제출_기업.html#s-과제목록' },
          { label: '보고서 요청내용 확인 및 제출', href: '22_보고서_제출_기업.html#s-보고서제출' },
        ]
      },
      {
        label: '23. 보고서 제출 확인 (관리자)',
        href: '23_보고서_제출확인_관리자.html',
        role: 'admin',
        sub: [
          { label: '공고 목록 진입',      href: '23_보고서_제출확인_관리자.html#s-공고목록' },
          { label: '프로그램/과제 목록',  href: '23_보고서_제출확인_관리자.html#s-과제목록' },
          { label: '보고서 제출 목록',    href: '23_보고서_제출확인_관리자.html#s-제출목록' },
          { label: '제출내역 확인',       href: '23_보고서_제출확인_관리자.html#s-제출내역' },
          { label: '제출 내용 상세 보기', href: '23_보고서_제출확인_관리자.html#s-내용보기' },
        ]
      },
    ]
  },
];

/* ── Role filter ──────────────────────────────────────────────── */
let activeRole = 'all';

function initRoleFilter() {
  const sidebar = document.getElementById('sidebar');
  const navList = document.getElementById('nav-list');
  if (!sidebar || !navList) return;

  const filterEl = document.createElement('div');
  filterEl.className = 'role-filter';
  filterEl.innerHTML = `
    <button class="rf-btn rf-all active" data-role="all">전체</button>
    <button class="rf-btn rf-user" data-role="user">사용자</button>
    <button class="rf-btn rf-admin" data-role="admin">관리자</button>
    <button class="rf-btn rf-eval" data-role="evaluator">평가위원</button>
  `;
  sidebar.insertBefore(filterEl, navList);

  filterEl.addEventListener('click', e => {
    const btn = e.target.closest('.rf-btn');
    if (!btn) return;
    activeRole = btn.dataset.role;
    filterEl.querySelectorAll('.rf-btn').forEach(b => b.classList.toggle('active', b === btn));
    applyRoleFilter();
  });
}

function applyRoleFilter() {
  const navList = document.getElementById('nav-list');
  if (!navList) return;
  navList.querySelectorAll('.nav-entry').forEach(el => {
    const role = el.dataset.role;
    el.style.display = (activeRole === 'all' || !role || role === activeRole) ? '' : 'none';
  });
}

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
      const roleAttr = item.role ? ` data-role="${item.role}"` : '';

      if (item.sub) {
        html += `<div class="nav-entry"${roleAttr}>`;
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
        html += `</div></div>`;
      } else {
        html += `<div class="nav-entry"${roleAttr}><a class="nav-item${isActive ? ' active' : ''}" href="${item.href}">${item.label}</a></div>`;
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

/* ── Image path overrides (admin) ─────────────────────────────── */
const IMG_OVERRIDE_KEY = 'pms-img-overrides';

/* 관리자 비밀 문구: 라이트박스가 열린 상태에서 이 단어를 그대로 타이핑하면
   이미지 경로 수정 창이 열립니다. 값만 바꾸면 비밀 문구가 변경됩니다. */
const ADMIN_PASS = 'pms';

function loadOverrides() {
  try { return JSON.parse(localStorage.getItem(IMG_OVERRIDE_KEY)) || {}; }
  catch { return {}; }
}

function saveOverrides(map) {
  localStorage.setItem(IMG_OVERRIDE_KEY, JSON.stringify(map));
}

/* 원본 src 기록 + 저장된 변경분 적용 */
function applyImgOverrides() {
  const map = loadOverrides();
  document.querySelectorAll('#content img').forEach(img => {
    if (!img.dataset.origSrc) img.dataset.origSrc = img.getAttribute('src') || '';
    const o = map[img.dataset.origSrc];
    if (o) img.src = o;
  });
}

/* ── Lightbox ─────────────────────────────────────────────────── */
function initLightbox() {
  const box = document.createElement('div');
  box.id = 'lightbox';
  box.innerHTML = `
    <button id="lightbox-close" aria-label="닫기">&times;</button>
    <img id="lightbox-img" src="" alt="">
    <div id="lightbox-guide">🔍 휠: 확대/축소 &nbsp;·&nbsp; 더블클릭: 2.5배 확대 &nbsp;·&nbsp; 드래그: 이동 &nbsp;·&nbsp; ESC: 닫기</div>
  `;
  document.body.appendChild(box);

  const img = box.querySelector('#lightbox-img');
  const guide = box.querySelector('#lightbox-guide');

  /* 현재 라이트박스에 띄운 본문 이미지 요소 */
  let triggerImg = null;

  let scale = 1, tx = 0, ty = 0;
  let dragging = false, dragX = 0, dragY = 0;
  let guideTimer = null;
  /* 관리자 비밀 문구 입력 버퍼 (라이트박스 열린 동안 타이핑 추적) */
  let passBuffer = '';

  function applyTransform() {
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  function resetTransform() {
    scale = 1; tx = 0; ty = 0;
    applyTransform();
  }

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    passBuffer = '';
    resetTransform();
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    guide.classList.add('visible');
    clearTimeout(guideTimer);
    guideTimer = setTimeout(() => guide.classList.remove('visible'), 2500);
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
    passBuffer = '';
    resetTransform();
  }

  /* 휠 줌 — 커서 위치 기준 */
  box.addEventListener('wheel', e => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    const newScale = Math.min(Math.max(scale * factor, 1), 6);
    const rect = img.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    tx += dx * (1 - newScale / scale);
    ty += dy * (1 - newScale / scale);
    scale = newScale;
    if (scale <= 1) { scale = 1; tx = 0; ty = 0; }
    applyTransform();
  }, { passive: false });

  /* 더블클릭 — 클릭 지점 2.5배 / 원복 */
  img.addEventListener('dblclick', e => {
    e.stopPropagation();
    if (scale > 1) {
      scale = 1; tx = 0; ty = 0;
    } else {
      const rect = img.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const newScale = 2.5;
      tx += dx * (1 - newScale / scale);
      ty += dy * (1 - newScale / scale);
      scale = newScale;
    }
    applyTransform();
  });

  /* 드래그 패닝 */
  img.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    e.preventDefault();
    dragging = true;
    dragX = e.clientX - tx;
    dragY = e.clientY - ty;
    img.style.cursor = 'grabbing';
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    tx = e.clientX - dragX;
    ty = e.clientY - dragY;
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  });
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  });

  const content = document.querySelector('#content');
  if (content) {
    content.addEventListener('click', e => {
      if (e.target.tagName === 'IMG') {
        e.stopPropagation();
        triggerImg = e.target;
        open(e.target.src, e.target.alt);
      }
    });
  }

  box.addEventListener('click', e => { if (e.target === box) close(); });
  box.querySelector('#lightbox-close').addEventListener('click', close);

  /* ── 관리자 전용 이미지 경로 편집기 ──────────────────────────── */
  const editor = document.createElement('div');
  editor.id = 'img-editor';
  editor.innerHTML = `
    <div class="ie-panel" role="dialog" aria-modal="true" aria-label="이미지 경로 수정">
      <h3>이미지 경로 수정 <span class="ie-admin">관리자</span></h3>
      <label for="ie-input">이미지 URL / 경로</label>
      <textarea id="ie-input" rows="3" spellcheck="false"></textarea>
      <div class="ie-preview-wrap"><img id="ie-preview" alt="미리보기"></div>
      <div class="ie-actions">
        <button type="button" id="ie-copy" class="ie-btn ie-ghost">&lt;img&gt; 코드 복사</button>
        <button type="button" id="ie-reset" class="ie-btn ie-ghost">원본 복원</button>
        <span class="ie-spacer"></span>
        <button type="button" id="ie-cancel" class="ie-btn ie-ghost">취소</button>
        <button type="button" id="ie-save" class="ie-btn ie-primary">적용</button>
      </div>
      <p class="ie-note">변경 사항은 이 브라우저에 저장됩니다. 영구 반영하려면 「&lt;img&gt; 코드 복사」로 HTML 소스의 src를 교체하세요.</p>
    </div>
  `;
  document.body.appendChild(editor);

  const ieInput   = editor.querySelector('#ie-input');
  const iePreview = editor.querySelector('#ie-preview');

  function openEditor() {
    if (!triggerImg) return;
    ieInput.value = triggerImg.getAttribute('src') || '';
    iePreview.src = ieInput.value;
    editor.classList.add('open');
    ieInput.focus();
    ieInput.select();
  }

  function closeEditor() { editor.classList.remove('open'); }

  ieInput.addEventListener('input', () => { iePreview.src = ieInput.value.trim(); });

  editor.querySelector('#ie-save').addEventListener('click', () => {
    if (!triggerImg) return;
    const newSrc = ieInput.value.trim();
    if (!newSrc) return;
    const orig = triggerImg.dataset.origSrc || triggerImg.getAttribute('src');
    const map = loadOverrides();
    map[orig] = newSrc;
    saveOverrides(map);
    triggerImg.src = newSrc;
    img.src = newSrc;
    closeEditor();
  });

  editor.querySelector('#ie-reset').addEventListener('click', () => {
    if (!triggerImg) return;
    const orig = triggerImg.dataset.origSrc || triggerImg.getAttribute('src');
    const map = loadOverrides();
    delete map[orig];
    saveOverrides(map);
    triggerImg.src = orig;
    img.src = orig;
    ieInput.value = orig;
    iePreview.src = orig;
  });

  editor.querySelector('#ie-copy').addEventListener('click', async () => {
    const src = ieInput.value.trim();
    const alt = (triggerImg && triggerImg.alt) || '';
    const snippet = `<img src="${src}" alt="${alt}" style="width:100%;border-radius:8px;border:1px solid #d0d5dd;margin:16px 0;">`;
    try {
      await navigator.clipboard.writeText(snippet);
      const b = editor.querySelector('#ie-copy');
      const t = b.textContent;
      b.textContent = '복사됨 ✓';
      setTimeout(() => { b.textContent = t; }, 1500);
    } catch {
      window.prompt('복사할 코드:', snippet);
    }
  });

  editor.querySelector('#ie-cancel').addEventListener('click', closeEditor);
  editor.addEventListener('click', e => { if (e.target === editor) closeEditor(); });

  document.addEventListener('keydown', e => {
    if (editor.classList.contains('open')) {
      if (e.key === 'Escape') { e.stopPropagation(); closeEditor(); }
      return;
    }
    if (box.classList.contains('open')) {
      if (e.key === 'Escape') { close(); return; }
      /* 한 글자 키만 버퍼에 누적 → 비밀 문구와 끝부분이 일치하면 열기 */
      if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        passBuffer = (passBuffer + e.key).toLowerCase().slice(-ADMIN_PASS.length);
        if (passBuffer === ADMIN_PASS.toLowerCase()) {
          passBuffer = '';
          openEditor();
        }
      }
      return;
    }
    if (e.key === 'Escape') close();
  });
}

/* ── Init ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav('nav-list');
  initRoleFilter();
  initSearch('nav-search', 'nav-list');
  initHamburger('hamburger', 'sidebar');
  initScrollSpy();
  applyImgOverrides();
  initLightbox();
});
