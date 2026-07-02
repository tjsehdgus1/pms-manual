/* 매뉴얼 헤더 메타 (기준일 + PMS 바로가기)
 * ───────────────────────────────────────────────
 * ▼▼▼ 기능이 수정·변경되면 아래 기준일만 고치세요 ▼▼▼ */
const MANUAL_DATE = '2026.07.02';
/* ▲▲▲ 여기만 수정 ▲▲▲ */

const PMS_URL = 'https://pms.jntp.or.kr/';

(function initHeaderMeta() {
  function inject() {
    const header = document.getElementById('header');
    if (!header || header.querySelector('.manual-date') || header.querySelector('.pms-link')) return;

    // 왼쪽: 기준일 (로고 옆)
    const date = document.createElement('div');
    date.className = 'manual-date';
    date.innerHTML = '기준일 <strong>' + MANUAL_DATE + '</strong>';

    const logo = header.querySelector('.logo');
    if (logo) logo.insertAdjacentElement('afterend', date);
    else header.appendChild(date);

    // 오른쪽 끝: PMS 바로가기 버튼
    const link = document.createElement('a');
    link.className = 'pms-link';
    link.href = PMS_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = 'PMS 바로가기 <span aria-hidden="true">↗</span>';
    header.appendChild(link);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
