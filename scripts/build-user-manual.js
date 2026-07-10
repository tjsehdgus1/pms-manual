#!/usr/bin/env node
'use strict';

/*
 * 사용자용(외부 배포) 매뉴얼 빌드 스크립트
 * ─────────────────────────────────────────
 * - 원본(sections/, js/main.js, index.html)은 그대로 두고
 * - "관리자" 태그가 붙은 섹션만 제외한 정적 사본을 pms-manual-user/ 에 생성한다.
 * - 남는 섹션(사용자·평가위원) 제목의 앞자리 번호(예: "00-A. ", "03. ")는 제거한다.
 *
 * 실행: node scripts/build-user-manual.js
 * 재생성이 필요할 때마다(섹션 추가/변경 시) 다시 실행하면 pms-manual-user/ 가 갱신된다.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT  = path.join(ROOT, 'pms-manual-user');

// print.html의 SECTIONS 목록과 동일한 순서/파일명을 유지한다.
// (원본과 이 목록이 어긋나면 섹션이 새로 추가될 때 빌드 스크립트도 함께 갱신해야 함)
const SECTIONS = [
  { file: '00a_일반회원_가입.html',                  label: '일반회원 가입',                     role: 'user' },
  { file: '00b_기업기관_회원가입.html',              label: '기업/기관 회원가입',                role: 'user' },
  { file: '00c_평가위원_신청.html',                  label: '평가위원 신청',                     role: 'evaluator' },
  { file: '01_사업관리.html',                        label: '사업관리 / 프로젝트 관리',          role: 'admin' },
  { file: '02_지원사업공고.html',                    label: '지원사업공고',                      role: 'admin' },
  { file: '03_공고신청_기업.html',                   label: '공고 신청',                         role: 'user' },
  { file: '04_요건검토_보완요청.html',               label: '요건검토 / 보완요청',               role: 'admin' },
  { file: '05_보완요청_답변_기업.html',              label: '보완요청 답변',                     role: 'user' },
  { file: '06_보완요청_답변검토_관리자.html',        label: '보완요청 답변 검토',                role: 'admin' },
  { file: '07_선정평가_등록_관리자.html',            label: '선정평가 등록',                     role: 'admin' },
  { file: '08_선정평가_진행_평가위원.html',          label: '선정평가 진행 (평가위원)',          role: 'evaluator' },
  { file: '09_선정평가_진행_평가위원장.html',        label: '선정평가 진행 (평가위원장)',        role: 'evaluator' },
  { file: '10_선정결과_처리_관리자.html',            label: '선정결과 처리',                     role: 'admin' },
  { file: '11_평가결과_확인_기업.html',              label: '평가결과 확인 및 제출',             role: 'user' },
  { file: '12_협약정보_등록요청_관리자.html',        label: '협약정보 등록요청',                 role: 'admin' },
  { file: '13_협약정보_등록_기업.html',              label: '협약정보 등록',                     role: 'user' },
  { file: '14_협약정보_검토_협약서등록_관리자.html', label: '협약정보 검토 및 협약서 등록',      role: 'admin' },
  { file: '15_전자협약_진행_기업.html',              label: '전자협약 진행 (사용자)',            role: 'user' },
  { file: '16_전자협약_진행_관리자.html',            label: '전자협약 진행 (관리자)',            role: 'admin' },
  { file: '17_사업비_지급신청_기업.html',            label: '사업비 지급 신청',                  role: 'user' },
  { file: '18_사업비_지급처리_관리자.html',          label: '사업비 지급 처리',                  role: 'admin' },
  { file: '19_사업비_집행관리_기업.html',            label: '사업비 집행관리',                   role: 'user' },
  { file: '20_사업비_집행확인_관리자.html',          label: '사업비 집행 확인',                  role: 'admin' },
  { file: '21_보고서_제출요청_관리자.html',          label: '보고서 제출 요청',                  role: 'admin' },
  { file: '22_보고서_제출_기업.html',                label: '보고서 제출',                       role: 'user' },
  { file: '23_보고서_제출확인_관리자.html',          label: '보고서 제출 확인',                  role: 'admin' },
];

const ROLE_LABEL = { user: '사용자', admin: '관리자', evaluator: '평가위원' };
const EXCLUDED_ROLES = new Set(['admin']);

const KEPT = SECTIONS.filter(s => !EXCLUDED_ROLES.has(s.role));
const KEPT_FILES = new Set(KEPT.map(s => s.file));

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
function stripLeadingNumber(text) {
  // "00-A. ", "01. ", "10. " 형태의 접두 번호 제거
  return text.replace(/^\d+(-[A-Za-z])?\.\s*/, '');
}

// "const <varName> = [ ... ];" 형태의 배열을 관리자 항목 제외 + 번호 제거해서 치환
function filterNavArraySource(src, varName) {
  const startMarker = `const ${varName} = [`;
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`소스에서 ${varName} 배열을 찾지 못했습니다.`);

  let depth = 0, i = startIdx + startMarker.length - 1; // '[' 위치에서 시작
  for (; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) break; }
  }
  const arraySrc = src.slice(startIdx + `const ${varName} = `.length, i + 1);
  const nav = new Function('return ' + arraySrc)();

  const filtered = nav.map(group => ({
    ...group,
    items: group.items
      .filter(item => !item.role || !EXCLUDED_ROLES.has(item.role))
      .map(item => ({ ...item, label: stripLeadingNumber(item.label) })),
  }));

  const newSrc = `const ${varName} = ` + JSON.stringify(filtered, null, 2) + ';';
  return src.slice(0, startIdx) + newSrc + src.slice(i + 2);
}

/* ── 1. 출력 폴더 초기화 ─────────────────────────────────────── */
rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, 'sections'), { recursive: true });

/* ── 2. 정적 자산 복사 (css / images / manual-meta.js) ─────────── */
copyDir(path.join(ROOT, 'css'), path.join(OUT, 'css'));
copyDir(path.join(ROOT, 'images'), path.join(OUT, 'images'));
fs.mkdirSync(path.join(OUT, 'js'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'js', 'manual-meta.js'), path.join(OUT, 'js', 'manual-meta.js'));

/* ── 3. js/main.js: NAV 배열에서 관리자 섹션 제외 + 번호 제거 ──── */
{
  const src = fs.readFileSync(path.join(ROOT, 'js', 'main.js'), 'utf8');
  let out = filterNavArraySource(src, 'NAV');

  // 사이드바 역할 필터에서 "관리자" 버튼 제거
  out = out.replace(
    /\s*<button class="rf-btn rf-admin" data-role="admin">관리자<\/button>\n?/,
    '\n'
  );

  fs.writeFileSync(path.join(OUT, 'js', 'main.js'), out, 'utf8');
}

/* ── 4. index.html: 관리자 카드 제외 + 번호 제거 ────────────────── */
{
  let src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  // toc-card 블록 단위로 분리해 관리자 역할 카드를 제거
  src = src.replace(
    /<a class="toc-card"[\s\S]*?<\/a>/g,
    block => {
      const roleMatch = block.match(/data-role="(\w+)"/);
      const role = roleMatch ? roleMatch[1] : null;
      if (role && EXCLUDED_ROLES.has(role)) return '';
      // SECTION 번호 배지 제거
      return block.replace(/\s*<div class="num">SECTION[^<]*<\/div>\n?/, '\n');
    }
  );

  // 상단 역할 범례에서 "관리자" 배지 제거
  src = src.replace(/\s*<span class="role-badge role-admin">관리자<\/span>\n?/, '\n');

  // 타이틀 문구를 사용자용으로 구분
  src = src.replace('<title>PMS 매뉴얼 – 전남테크노파크</title>', '<title>PMS 사용자 매뉴얼 – 전남테크노파크</title>');
  src = src.replace('<h1>PMS 매뉴얼</h1>', '<h1>PMS 사용자 매뉴얼</h1>');

  // index.html 자체 인라인 스크립트의 NAV_INDEX 배열에서도 관리자 항목 제외 + 번호 제거
  src = filterNavArraySource(src, 'NAV_INDEX');

  // 인라인 스크립트의 역할 필터에서도 "관리자" 버튼 제거
  src = src.replace(
    /\s*<button class="rf-btn rf-admin" data-role="admin">관리자<\/button>\n?/,
    '\n'
  );

  // 카드 제거로 생긴 공백뿐인 줄 정리 (연속 빈 줄 → 한 줄)
  src = src.replace(/(?:[ \t]*\n){3,}/g, '\n\n');

  fs.writeFileSync(path.join(OUT, 'index.html'), src, 'utf8');
}

/* ── 5. 각 섹션 HTML: 제목 번호 제거 + 이전/다음 네비게이션 재계산 ── */
for (let idx = 0; idx < KEPT.length; idx++) {
  const cur = KEPT[idx];
  let src = fs.readFileSync(path.join(ROOT, 'sections', cur.file), 'utf8');

  // <title> 앞자리 번호 제거
  src = src.replace(/<title>\s*\d+(-[A-Za-z])?\.\s*/, '<title>');

  // 이전/다음 섹션 네비게이션 재계산 (제외된 관리자 섹션은 건너뜀)
  const prev = KEPT[idx - 1];
  const next = KEPT[idx + 1];
  const navHtml =
    '    <nav class="section-nav">\n' +
    (prev
      ? `      <a class="sec-nav-btn sec-nav-prev" href="${prev.file}"><span class="sec-nav-dir">← 이전</span><span class="sec-nav-title">${prev.label}</span></a>\n`
      : '') +
    (next
      ? `      <a class="sec-nav-btn sec-nav-next" href="${next.file}"><span class="sec-nav-dir">다음 →</span><span class="sec-nav-title">${next.label}</span></a>\n`
      : '') +
    '    </nav>';

  src = src.replace(/<nav class="section-nav">[\s\S]*?<\/nav>/, navHtml);

  fs.writeFileSync(path.join(OUT, 'sections', cur.file), src, 'utf8');
}

console.log(`✅ pms-manual-user/ 생성 완료 — 섹션 ${KEPT.length}개 (관리자 ${SECTIONS.length - KEPT.length}개 제외)`);
