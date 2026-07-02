/* 매뉴얼 헤더 메타 (버전 + PMS 바로가기)
 * ───────────────────────────────────────────────
 * ▼▼▼ 기능이 수정·변경되면 아래 버전/날짜만 고치세요 ▼▼▼ */
const MANUAL_VERSION = '0.1';
const MANUAL_DATE    = '2026.07.02';
/* ▲▲▲ 여기만 수정 ▲▲▲ */

const PMS_URL = 'https://pms.jntp.or.kr/';

(function initHeaderMeta() {
  function inject() {
    const header = document.getElementById('header');
    if (!header || header.querySelector('.manual-ver') || header.querySelector('.pms-link')) return;

    // 왼쪽: 버전 (로고 옆)  예) 버전 0.1 (2026.07.02)
    const ver = document.createElement('div');
    ver.className = 'manual-ver';
    ver.innerHTML = '버전 <strong>' + MANUAL_VERSION + '</strong> (' + MANUAL_DATE + ')';

    const logo = header.querySelector('.logo');
    if (logo) logo.insertAdjacentElement('afterend', ver);
    else header.appendChild(ver);

    // 오른쪽 끝: PMS 바로가기 버튼
    const link = document.createElement('a');
    link.className = 'pms-link';
    link.href = PMS_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'PMS 바로가기';
    header.appendChild(link);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
