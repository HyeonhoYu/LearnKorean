/* ══════════════════════════════════════════════════════════════
   여섯째 달, 한국을 알아요 (5단계)
   무엇이 어떤지 설명하고, 한국 문화와 역사를 자기 말로 전하는 달입니다.
   다섯 묶음: 더 커요, 제일 커요(비교하기), 어떻게 생겼어요?(설명하기), 설날, 추석, 세종대왕과 한글.

   이 파일은 content/second-moon.js 부터 fifth-moon.js 까지 다음에 불러옵니다.
   앞 달의 그림(M5_PIC 안에 앞 달 그림 모두 포함)을 그대로 빌려 쓰고, 여섯째 달 그림만 M6_ONLY 에 더합니다.
   명절 묶음은 모든 집이 함께하는 세배, 떡국, 송편, 한복, 놀이, 보름달 소원에 맞추고,
   차례와 성묘는 부모님 안내에서 "이렇게 지내는 집도 있다"는 정도로만 소개합니다.
   ══════════════════════════════════════════════════════════════ */

const M6_TOTAL = 15;

/* ---- 첫째 묶음 그림: 견주는 말 ---- */
const m6Animal = (kind, x, y, k) => {
  const S = '#221F1C';
  const g = {
    elephant: `<ellipse cx="0" cy="-30" rx="42" ry="28" fill="#A9B6BF" stroke="${S}" stroke-width="2.6"/>
      <circle cx="-38" cy="-44" r="20" fill="#A9B6BF" stroke="${S}" stroke-width="2.6"/><path d="M-30 -60 Q-14 -64 -14 -40 Q-22 -34 -30 -40 Z" fill="#C9D0D5" stroke="${S}" stroke-width="2"/>
      <path d="M-54 -40 Q-66 -20 -60 0" stroke="${S}" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M-54 -40 Q-66 -20 -60 0" stroke="#A9B6BF" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="-42" cy="-48" r="2.4" fill="${S}"/>${[-26, -8, 12, 28].map(lx => `<rect x="${lx - 5}" y="-8" width="11" height="10" fill="#A9B6BF" stroke="${S}" stroke-width="2"/>`).join('')}`,
    mouse: `<ellipse cx="0" cy="-8" rx="12" ry="8" fill="#C9C0AE" stroke="${S}" stroke-width="2"/><circle cx="-12" cy="-12" r="6" fill="#C9C0AE" stroke="${S}" stroke-width="2"/>
      <circle cx="-14" cy="-19" r="4" fill="#E8A0A0" stroke="${S}" stroke-width="1.6"/><circle cx="-15" cy="-12" r="1.4" fill="${S}"/><path d="M12 -8 Q24 -12 26 -2" stroke="${S}" stroke-width="1.6" fill="none"/>`,
    giraffe: `<path d="M-14 0 L-14 -40 M14 0 L14 -40" stroke="${S}" stroke-width="5"/><path d="M-14 0 L-14 -40 M14 0 L14 -40" stroke="#E3A93C" stroke-width="3"/>
      <ellipse cx="0" cy="-46" rx="24" ry="14" fill="#E3A93C" stroke="${S}" stroke-width="2.4"/>
      <path d="M16 -52 L30 -104" stroke="${S}" stroke-width="12" stroke-linecap="round"/><path d="M16 -52 L30 -104" stroke="#E3A93C" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="36" cy="-108" rx="12" ry="8" fill="#E3A93C" stroke="${S}" stroke-width="2.4"/><circle cx="36" cy="-110" r="1.8" fill="${S}"/>
      <g fill="#8A6A4A"><circle cx="-6" cy="-48" r="4"/><circle cx="8" cy="-42" r="3"/><circle cx="22" cy="-76" r="3"/></g>`,
    turtle: `<ellipse cx="0" cy="-12" rx="26" ry="16" fill="#6E8F58" stroke="${S}" stroke-width="2.6"/><path d="M-14 -20 L0 -26 L14 -20 L10 -8 L-10 -8 Z" fill="none" stroke="#3E5B4A" stroke-width="2"/>
      <circle cx="32" cy="-10" r="8" fill="#9DBA7E" stroke="${S}" stroke-width="2"/><circle cx="34" cy="-12" r="1.6" fill="${S}"/>
      <path d="M-18 0 L-20 4 M18 0 L20 4" stroke="${S}" stroke-width="5" stroke-linecap="round"/>`,
    rabbit: `<ellipse cx="0" cy="-16" rx="22" ry="14" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/><circle cx="22" cy="-26" r="11" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <path d="M18 -34 Q10 -58 18 -58 Q24 -50 24 -34 Z M26 -34 Q28 -58 34 -56 Q36 -46 30 -34 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <circle cx="26" cy="-27" r="1.8" fill="${S}"/><path d="M-12 -2 L-24 4 M8 -2 L20 6" stroke="${S}" stroke-width="4" stroke-linecap="round"/>
      <path d="M-44 -24 L-30 -24 M-48 -14 L-30 -14" stroke="#8C7F63" stroke-width="2.4" stroke-linecap="round"/>`
  }[kind];
  return `<g transform="translate(${x} ${y}) scale(${k || 1})">${g}</g>`;
};
const m6Scene = (label, inner, ground) => `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${ground === false ? '' : '<path d="M8 120 L192 120" stroke="#221F1C" stroke-width="2.6"/>'}${inner}</svg>`;
const m6Pencil = (x, y, len) => `<g transform="translate(${x} ${y})"><rect x="0" y="-7" width="${len}" height="14" fill="#E3A93C" stroke="#221F1C" stroke-width="2.4"/>
  <rect x="-10" y="-7" width="10" height="14" fill="#D98B7E" stroke="#221F1C" stroke-width="2.4"/><path d="M${len} -7 L${len + 16} 0 L${len} 7 Z" fill="#F0D9BE" stroke="#221F1C" stroke-width="2.4" stroke-linejoin="round"/></g>`;
const m6Mount = (x, w, hgt, snow) => `<path d="M${x - w / 2} 120 L${x} ${120 - hgt} L${x + w / 2} 120 Z" fill="#9DBA7E" stroke="#221F1C" stroke-width="2.6" stroke-linejoin="round"/>
  ${snow ? `<path d="M${x - 12} ${132 - hgt} L${x} ${120 - hgt} L${x + 12} ${132 - hgt} L${x + 4} ${128 - hgt} L${x} ${134 - hgt} L${x - 5} ${128 - hgt} Z" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.6"/>` : ''}`;
const M6_ONLY = {
  big: m6Scene('커요', m6Animal('elephant', 110, 120, 1.25)),
  small: m6Scene('작아요', m6Animal('mouse', 100, 120, 1.6)),
  long: m6Scene('길어요', m6Pencil(24, 65, 140), false),
  short: m6Scene('짧아요', m6Pencil(80, 65, 30), false),
  fast: m6Scene('빨라요', m6Animal('rabbit', 110, 118, 1.6)),
  slow: m6Scene('느려요', m6Animal('turtle', 96, 118, 1.6)),
  many: m6Scene('많아요', M3_PIC.apples9.replace(/<\/?svg[^>]*>/g, ''), false),
  few: m6Scene('적어요', M3_PIC.apples2.replace(/<\/?svg[^>]*>/g, ''), false),
  high: m6Scene('높아요', m6Mount(100, 150, 104, true)),
  low: m6Scene('낮아요', m6Mount(100, 130, 34, false)),
  /* 둘을 견주는 그림 */
  cmp_el_mouse: m6Scene('코끼리와 쥐', m6Animal('elephant', 80, 120, 1.1) + m6Animal('mouse', 170, 120, 1.2)),
  cmp_race: m6Scene('토끼와 거북이', m6Animal('rabbit', 150, 116, 1.2) + m6Animal('turtle', 50, 118, 1.2)),
  cmp_three: m6Scene('쥐, 코끼리, 기린', m6Animal('mouse', 26, 120, 1) + m6Animal('elephant', 88, 120, .8) + m6Animal('giraffe', 156, 120, .82)),
  cmp_pencils: m6Scene('긴 연필과 짧은 연필', m6Pencil(20, 44, 150) + m6Pencil(20, 86, 50), false),
  elephant: m6Scene('코끼리', m6Animal('elephant', 110, 120, 1.25)),
  mouse: m6Scene('쥐', m6Animal('mouse', 100, 120, 1.6)),
  giraffe: m6Scene('기린', m6Animal('giraffe', 90, 122, 1)),
  rabbit: m6Scene('토끼', m6Animal('rabbit', 100, 118, 1.6)),
  turtle: m6Scene('거북이', m6Animal('turtle', 96, 118, 1.6)),
  /* 토끼와 거북이 이야기 */
  race_start: m6Scene('달리기를 시작해요', m6Animal('rabbit', 100, 116, 1) + m6Animal('turtle', 36, 118, .9) + '<path d="M150 120 L150 40 M150 40 L180 50 L150 60" stroke="#221F1C" stroke-width="3" fill="#C1403A"/>'),
  race_sleep: m6Scene('토끼가 자요', `<rect x="70" y="60" width="12" height="60" fill="#8A6A4A" stroke="#221F1C" stroke-width="2"/><circle cx="76" cy="46" r="30" fill="#6E8F58" stroke="#221F1C" stroke-width="2.4"/>${m6Animal('rabbit', 120, 118, 1)}<text x="150" y="48" font-family="sans-serif" font-weight="700" font-size="16" fill="#17324A">Z z</text>`),
  race_walk: m6Scene('거북이가 걸어요', m6Animal('turtle', 90, 118, 1.3) + '<path d="M30 112 L50 112 M36 104 L52 104" stroke="#8C7F63" stroke-width="2.4" stroke-linecap="round"/>'),
  race_win: m6Scene('거북이가 이겨요', m6Animal('turtle', 90, 118, 1.2) + '<path d="M170 120 L170 36 M170 36 L140 46 L170 56" stroke="#221F1C" stroke-width="3" fill="#C1403A"/><g fill="#E3A93C" stroke="#221F1C" stroke-width="1.2"><path d="M90 50 l3 6 l6 1 l-5 4 l2 6 l-6 -3 l-6 3 l2 -6 l-5 -4 l6 -1 Z"/></g>')
};
/* ---- 둘째 묶음 그림: 꾸미는 말과 고양이 ---- */
const m6Scale = (pic, k, label) => `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}"><g transform="translate(100 118) scale(${k}) translate(-100 -118)">${pic.replace(/<\/?svg[^>]*>/g, '')}</g></svg>`;
/* 고양이: 털빛, 방울, 꼬리 길이를 바꿔 설명을 듣고 가려낼 수 있게 합니다 */
const m6Cat = (fur, bell, longTail, label) => `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">
  <path d="M10 118 L190 118" stroke="#221F1C" stroke-width="2.6"/>
  <g transform="translate(104 100) scale(1.5)">
    <path d="M16 8 Q${longTail ? '40 4 36 -22' : '26 6 24 -2'}" stroke="#221F1C" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M16 8 Q${longTail ? '40 4 36 -22' : '26 6 24 -2'}" stroke="${fur}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
    <ellipse cx="0" cy="6" rx="20" ry="13" fill="${fur}" stroke="#221F1C" stroke-width="2.4"/>
    <circle cx="-14" cy="-10" r="12" fill="${fur}" stroke="#221F1C" stroke-width="2.4"/>
    <path d="M-24 -16 L-24 -30 L-16 -21 Z M-4 -16 L-4 -30 L-12 -21 Z" fill="${fur}" stroke="#221F1C" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="-18" cy="-11" r="1.8" fill="${fur === '#2B2724' ? '#F2C14E' : '#221F1C'}"/><circle cx="-10" cy="-11" r="1.8" fill="${fur === '#2B2724' ? '#F2C14E' : '#221F1C'}"/>
    ${bell ? '<circle cx="-12" cy="2" r="3.4" fill="#C1403A" stroke="#221F1C" stroke-width="1.2"/>' : ''}</g></svg>`;
Object.assign(M6_ONLY, {
  bag_big: m6Scale(M5_PIC.bag_blue, 1.15, '큰 가방'), bag_small: m6Scale(M5_PIC.bag_blue, .5, '작은 가방'),
  hat_red: M5_PIC.w_hat, hat_blue: M5_PIC.w_hat.replace(/fill="#C1403A"/g, 'fill="#2D6E8E"').replace('aria-label="모자"', 'aria-label="파란 모자"'),
  cat_nabi: m6Cat('#E3A93C', true, true, '방울을 단 노란 고양이'), cat_short: m6Cat('#E3A93C', false, false, '꼬리가 짧은 노란 고양이'),
  cat_black: m6Cat('#2B2724', true, true, '검은 고양이'),
  hair_long: M5_PIC.p_aunt, hair_short: M5_PIC.p_uncle, tall: M5_PIC.p_dad, short_kid: M5_PIC.p_baby,
  glasses: M5_PIC.p_grandpa, wear: M5_PIC.p_mom
});
/* ---- 셋째 묶음 그림: 설날 ---- */
/* 한복 입은 아이: 저고리 소매에 색동 줄 */
const m6Hanbok = (x, k, face) => `<g transform="translate(${x} 122) scale(${k || 1})">
  <path d="M-26 0 L-18 -46 L18 -46 L26 0 Z" fill="#C1403A" stroke="#221F1C" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M-18 -46 L-16 -64 L16 -64 L18 -46 Z" fill="#F2C14E" stroke="#221F1C" stroke-width="2.4"/>
  <circle cx="2" cy="-56" r="3.4" fill="#C1403A" stroke="#221F1C" stroke-width="1.2"/><path d="M2 -54 L-2 -34 M2 -54 L8 -36" stroke="#C1403A" stroke-width="3.4" fill="none" stroke-linecap="round"/>
  ${[0, 1, 2, 3].map(i => `<rect x="${-34 + i * 0}" y="${-62 + i * 5}" width="18" height="5" fill="${['#C1403A', '#2D6E8E', '#F2C14E', '#6E8F58'][i]}" stroke="#221F1C" stroke-width="1"/><rect x="16" y="${-62 + i * 5}" width="18" height="5" fill="${['#C1403A', '#2D6E8E', '#F2C14E', '#6E8F58'][i]}" stroke="#221F1C" stroke-width="1"/>`).join('')}
  <circle cx="-34" cy="-40" r="4" fill="#F0D9BE" stroke="#221F1C" stroke-width="1.6"/><circle cx="34" cy="-40" r="4" fill="#F0D9BE" stroke="#221F1C" stroke-width="1.6"/>
  <circle cx="0" cy="-78" r="14" fill="#F0D9BE" stroke="#221F1C" stroke-width="2.4"/>
  <path d="M-14 -82 C-16 -98 16 -98 14 -82 C8 -90 -8 -90 -14 -82 Z" fill="#221F1C"/>
  ${face === 'bow' ? '' : '<circle cx="-5" cy="-78" r="1.8" fill="#221F1C"/><circle cx="5" cy="-78" r="1.8" fill="#221F1C"/><path d="M-4 -72 q4 3 8 0" stroke="#221F1C" stroke-width="1.6" fill="none"/>'}</g>`;
function m6Seol(kind){
  const S = '#221F1C', ground = '<path d="M8 122 L192 122" stroke="#221F1C" stroke-width="2.6"/>';
  const g = {
    hanbok: `${ground}${m6Hanbok(100, 1.15)}`,
    sebae: `<rect width="200" height="130" rx="6" fill="#F3E3C0"/><rect y="104" width="200" height="26" fill="#E0C49A"/>
      <g transform="translate(-6 0)">${m2Person('grandma', 58, 'stand', 1).replace('translate(58 122)', 'translate(58 110)')}</g>${m2Person('grandpa', 30, 'stand', 1).replace('translate(30 122)', 'translate(30 110)')}
      <g transform="translate(142 112)"><path d="M-30 0 Q-30 -22 -6 -24 L14 -22 Q24 -14 20 0 Z" fill="#C1403A" stroke="${S}" stroke-width="2.4"/>
        <circle cx="-34" cy="-6" r="11" fill="#F0D9BE" stroke="${S}" stroke-width="2.2"/><path d="M-44 -8 C-46 -20 -24 -20 -24 -8 Z" fill="#221F1C"/>
        <path d="M-40 4 L-20 4" stroke="#F0D9BE" stroke-width="6" stroke-linecap="round"/></g>`,
    money: `<rect x="44" y="30" width="112" height="72" rx="4" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <path d="M44 30 L100 70 L156 30" fill="#F2D4CC" stroke="${S}" stroke-width="2.4" stroke-linejoin="round"/>
      <rect x="58" y="16" width="84" height="34" fill="#8FB8D6" stroke="${S}" stroke-width="2" transform="rotate(-6 100 33)"/>
      <circle cx="100" cy="82" r="10" fill="#C1403A"/><circle cx="100" cy="82" r="4" fill="#F6D98F"/>`,
    tteokguk: `<path d="M40 56 L160 56 Q156 106 100 108 Q44 106 40 56 Z" fill="#FBF7EC" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="100" cy="56" rx="60" ry="12" fill="#EFE2C2" stroke="${S}" stroke-width="2.6"/>
      ${[[76, 54], [92, 58], [108, 53], [124, 58], [86, 50], [116, 49]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="8" ry="4.4" fill="#FBF7EC" stroke="#C9C0AE" stroke-width="1.4"/>`).join('')}
      <path d="M96 48 L112 44 M100 60 L116 56" stroke="#E3A93C" stroke-width="2.4"/><path d="M84 46 L90 52" stroke="#6E8F58" stroke-width="3"/>
      <path d="M86 40 Q82 30 88 22 M106 40 Q102 30 108 22" stroke="#8C7F63" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    yut: `<rect x="20" y="70" width="160" height="50" rx="6" fill="#E0C49A" stroke="${S}" stroke-width="2.4"/>
      ${[[50, 30, -20], [84, 26, 10], [118, 32, -6], [150, 28, 18]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-7" y="-26" width="14" height="52" rx="7" fill="${r > 0 ? '#E3A93C' : '#FBF7EC'}" stroke="${S}" stroke-width="2.4"/>${r > 0 ? '' : '<path d="M-3 -14 L3 -8 M-3 -2 L3 4 M-3 10 L3 16" stroke="#221F1C" stroke-width="1.6"/>'}</g>`).join('')}
      <g fill="#C1403A" stroke="${S}" stroke-width="1.4"><circle cx="54" cy="96" r="6"/><circle cx="142" cy="92" r="6"/></g><g fill="#2D6E8E" stroke="${S}" stroke-width="1.4"><circle cx="100" cy="100" r="6"/></g>`,
    newyear: `<rect width="200" height="130" rx="6" fill="#F3D9B5"/><circle cx="100" cy="84" r="30" fill="#E0703C" stroke="${S}" stroke-width="2.4"/>
      <path d="M0 96 Q40 70 80 92 Q120 64 160 90 Q180 80 200 88 L200 130 L0 130 Z" fill="#5A7A8E" stroke="${S}" stroke-width="2"/>
      <g stroke="#E3A93C" stroke-width="3" stroke-linecap="round"><path d="M100 40 L100 30 M70 50 L64 42 M130 50 L136 42 M52 72 L42 68 M148 72 L158 68"/></g>`,
    family: `<rect width="200" height="130" rx="6" fill="#F3E3C0"/>${ground}${m2Person('grandpa', 26, 'stand', 1)}${m2Person('grandma', 60, 'stand', 1)}${m6Hanbok(100, .78)}${m2Person('mom', 140, 'stand', -1)}${m2Person('dad', 174, 'stand', -1)}`
  }[kind];
  const label = {hanbok:'한복', sebae:'세배', money:'세뱃돈', tteokguk:'떡국', yut:'윷놀이', newyear:'새해', family:'설날'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['hanbok', 'sebae', 'money', 'tteokguk', 'yut', 'newyear', 'family'].forEach(k => { M6_ONLY['seol_' + k] = m6Seol(k); });
/* ---- 넷째 묶음 그림: 추석 ---- */
const m6Songp = (x, y, c, k) => `<g transform="translate(${x} ${y}) scale(${k || 1})"><path d="M-14 4 Q-14 -12 0 -12 Q14 -12 14 4 Z" fill="${c}" stroke="#221F1C" stroke-width="2"/><path d="M-8 -2 Q0 -6 8 -2" stroke="#FBF7EC" stroke-width="1.2" fill="none" opacity=".6"/></g>`;
const m6Moon = (cx, cy, r, rabbit) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#F6E3A1" stroke="#221F1C" stroke-width="2.6"/>
  ${rabbit ? `<g transform="translate(${cx} ${cy}) scale(${r / 40})" fill="#D9BD6A" opacity=".9">
    <ellipse cx="-8" cy="8" rx="12" ry="9"/><circle cx="-2" cy="-4" r="7"/><path d="M-4 -10 Q-8 -26 -4 -26 Q0 -20 0 -10 Z M1 -10 Q3 -26 7 -24 Q7 -16 3 -10 Z"/>
    <rect x="8" y="6" width="14" height="12" rx="2"/><path d="M4 -6 L18 6" stroke="#D9BD6A" stroke-width="3"/></g>` : ''}`;
function m6Chu(kind){
  const S = '#221F1C', night = '<rect width="200" height="130" rx="6" fill="#17324A"/>';
  const g = {
    songpyeon: `<ellipse cx="100" cy="88" rx="78" ry="24" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <path d="M40 84 L70 76 M130 76 L160 84 M60 94 L88 90" stroke="#6E8F58" stroke-width="2" stroke-linecap="round"/>
      ${[[70, 80, '#FBF7EC'], [100, 76, '#E8A0A0'], [130, 80, '#9DBA7E'], [84, 92, '#E3A93C'], [116, 92, '#FBF7EC']].map(([x, y, c]) => m6Songp(x, y, c, 1.3)).join('')}`,
    fullmoon: `${night}${m6Moon(100, 56, 38, false)}<path d="M0 108 Q50 88 100 102 Q150 86 200 104 L200 130 L0 130 Z" fill="#3E5B4A" stroke="${S}" stroke-width="2"/>
      <g fill="#F5E6BD"><circle cx="30" cy="24" r="1.6"/><circle cx="170" cy="30" r="1.8"/><circle cx="150" cy="80" r="1.4"/></g>`,
    moonrabbit: `${night}${m6Moon(100, 64, 52, true)}<g fill="#F5E6BD"><circle cx="24" cy="20" r="1.6"/><circle cx="176" cy="28" r="1.8"/></g>`,
    ganggang: `${night}${m6Moon(100, 30, 20, false)}<ellipse cx="100" cy="100" rx="70" ry="18" fill="none" stroke="#F5E6BD" stroke-width="2" stroke-dasharray="4 4"/>
      ${[0, 1, 2, 3, 4, 5].map(i => { const a = i / 6 * Math.PI * 2, x = 100 + Math.cos(a) * 64, y = 96 + Math.sin(a) * 16;
        return `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)})"><path d="M-7 14 L-5 -4 L5 -4 L7 14 Z" fill="${['#C1403A', '#2D6E8E', '#E3A93C', '#6E8F58', '#D98B7E', '#9DB4C6'][i]}" stroke="${S}" stroke-width="1.4"/><circle cx="0" cy="-10" r="6" fill="#F0D9BE" stroke="${S}" stroke-width="1.4"/><path d="M-6 -14 C-7 -20 7 -20 6 -14 Z" fill="#221F1C"/></g>`; }).join('')}`,
    wish: `${night}${m6Moon(150, 38, 24, false)}<path d="M0 118 L200 118 L200 130 L0 130 Z" fill="#3E5B4A"/>
      <g transform="translate(76 118)"><path d="M-16 0 L-14 -40 L14 -40 L16 0 Z" fill="#2D6E8E" stroke="${S}" stroke-width="2.4"/>
      <circle cx="0" cy="-54" r="14" fill="#F0D9BE" stroke="${S}" stroke-width="2.4"/><path d="M-14 -58 C-16 -74 16 -74 14 -58 C8 -66 -8 -66 -14 -58 Z" fill="#221F1C"/>
      <path d="M-5 -54 q2 2 4 0 M3 -54 q2 2 4 0" stroke="${S}" stroke-width="1.6" fill="none"/>
      <path d="M-4 -38 L0 -26 L4 -38 Z" fill="#F0D9BE" stroke="${S}" stroke-width="1.6"/></g>
      <g fill="#F2C14E"><path d="M106 70 l2 4 l4 1 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 l4 -1 Z"/></g>`,
    s_dough: `<ellipse cx="100" cy="108" rx="60" ry="10" fill="#E0C49A"/><circle cx="100" cy="76" r="30" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>`,
    s_fill: `<ellipse cx="100" cy="108" rx="60" ry="10" fill="#E0C49A"/><path d="M60 80 Q60 44 100 44 Q140 44 140 80 Q140 100 100 100 Q60 100 60 80 Z" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <ellipse cx="100" cy="72" rx="18" ry="10" fill="#8A5A36" stroke="${S}" stroke-width="2"/><g fill="#D9BD6A"><circle cx="94" cy="70" r="2"/><circle cx="104" cy="74" r="2"/></g>`,
    s_shape: `<ellipse cx="100" cy="108" rx="60" ry="10" fill="#E0C49A"/>${m6Songp(100, 92, '#FBF7EC', 3.2)}`,
    s_steam: `<rect x="44" y="60" width="112" height="50" rx="6" fill="#B08452" stroke="${S}" stroke-width="3"/>
      <path d="M50 64 L150 64" stroke="#6E8F58" stroke-width="4"/>${[70, 100, 130].map(x => m6Songp(x, 60, '#FBF7EC', 1.2)).join('')}
      <path d="M72 44 Q66 32 74 22 M100 44 Q94 32 102 22 M128 44 Q122 32 130 22" stroke="#C9C0AE" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    family: `<rect width="200" height="130" rx="6" fill="#F3E3C0"/>
      <rect x="30" y="80" width="140" height="10" fill="#B08452" stroke="${S}" stroke-width="2"/>
      ${[[60, '#FBF7EC'], [90, '#E8A0A0'], [120, '#9DBA7E']].map(([x, c]) => m6Songp(x, 76, c, 1)).join('')}
      ${m2Person('grandma', 36, 'give', 1).replace('translate(36 122)', 'translate(36 118)')}${m6Hanbok(164, .7)}`
  }[kind];
  const label = {songpyeon:'송편', fullmoon:'보름달', moonrabbit:'달토끼', ganggang:'강강술래', wish:'소원', s_dough:'반죽을 동그랗게 빚어요', s_fill:'소를 넣어요', s_shape:'반달 모양으로 빚어요', s_steam:'솔잎을 깔고 쪄요', family:'추석'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['songpyeon', 'fullmoon', 'moonrabbit', 'ganggang', 'wish', 's_dough', 's_fill', 's_shape', 's_steam', 'family'].forEach(k => { M6_ONLY['chu_' + k] = m6Chu(k); });
/* ---- 다섯째 묶음 그림: 세종대왕과 한글 ----
   임금님은 누구의 얼굴도 닮지 않게 다른 인물들과 같은 그림체로 그리고, 붉은 곤룡포와 익선관으로만 나타냅니다.
   한자는 실제 글자가 아닌 복잡한 획 모양으로만 보여 줍니다. */
const m6Txt = (x, y, t, sz, c) => `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="'Noto Sans KR',sans-serif" font-weight="700" font-size="${sz}" fill="${c || '#17324A'}">${t}</text>`;
function m6Han(kind){
  const S = '#221F1C';
  const g = {
    king: `<rect width="200" height="130" rx="6" fill="#F3E3C0"/><path d="M8 122 L192 122" stroke="${S}" stroke-width="2.6"/>
      <g transform="translate(100 122)"><path d="M-30 0 L-22 -58 L22 -58 L30 0 Z" fill="#C1403A" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <circle cx="0" cy="-36" r="10" fill="#E3A93C" stroke="${S}" stroke-width="1.8"/><path d="M-6 -36 q6 -8 12 0 q-6 8 -12 0" stroke="#C1403A" stroke-width="1.6" fill="none"/>
      <path d="M-30 -30 L-40 -10 M30 -30 L40 -10" stroke="#C1403A" stroke-width="10" stroke-linecap="round"/>
      <circle cx="0" cy="-74" r="15" fill="#F0D9BE" stroke="${S}" stroke-width="2.4"/>
      <path d="M-15 -80 L-15 -94 Q0 -102 15 -94 L15 -80 Z" fill="#221F1C" stroke="${S}" stroke-width="2"/><path d="M-22 -86 L-15 -86 M15 -86 L22 -86" stroke="#221F1C" stroke-width="4" stroke-linecap="round"/>
      <circle cx="-5" cy="-74" r="1.8" fill="${S}"/><circle cx="5" cy="-74" r="1.8" fill="${S}"/><path d="M-5 -66 q5 3 10 0" stroke="${S}" stroke-width="1.6" fill="none"/></g>`,
    people: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><path d="M0 110 L200 110 L200 130 L0 130 Z" fill="#B7A57A"/>
      ${[50, 100, 150].map((x, i) => `<g transform="translate(${x} 112)"><path d="M-14 0 L-12 -34 L12 -34 L14 0 Z" fill="#E7DCC4" stroke="${S}" stroke-width="2"/>
        <circle cx="0" cy="-44" r="10" fill="#F0D9BE" stroke="${S}" stroke-width="2"/><path d="M-18 -50 Q0 -64 18 -50 Z" fill="#D9BD6A" stroke="${S}" stroke-width="1.8"/>
        ${i === 1 ? '<path d="M14 -30 L26 -2" stroke="#8A6A4A" stroke-width="3"/>' : ''}</g>`).join('')}`,
    hanja: `<rect x="40" y="16" width="120" height="100" rx="6" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <g stroke="#221F1C" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M58 32 L90 32 M74 26 L74 60 M60 44 L88 44 M62 52 L86 58 M110 30 L142 30 L138 58 M112 42 L140 42 M118 30 L114 60 M126 48 L134 60"/>
        <path d="M60 74 L90 74 L86 104 M64 86 L88 86 M70 74 L66 104 M110 72 L144 72 M126 66 L126 106 M112 88 L140 88 M116 96 L136 104"/></g>
      ${m6Txt(160, 20, '?', 22, '#C1403A')}`,
    hangeul: `<rect x="30" y="20" width="140" height="90" rx="8" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      ${m6Txt(70, 50, 'ㄱ', 30)}${m6Txt(100, 50, 'ㄴ', 30)}${m6Txt(130, 50, 'ㄷ', 30)}${m6Txt(70, 86, 'ㅏ', 30, '#C1403A')}${m6Txt(100, 86, 'ㅓ', 30, '#C1403A')}${m6Txt(130, 86, 'ㅗ', 30, '#C1403A')}`,
    book: `<path d="M40 22 L100 30 L160 22 L160 110 L100 118 L40 110 Z" fill="#E8D9B4" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M100 30 L100 118" stroke="${S}" stroke-width="2.4"/>
      <g stroke="#8A6A4A" stroke-width="2"><path d="M52 40 L52 100 M62 40 L62 100 M72 40 L72 100 M82 40 L82 100 M118 40 L118 100 M128 40 L128 100 M138 40 L138 100 M148 40 L148 100"/></g>
      ${m6Txt(70, 70, 'ㄱ', 18, '#221F1C')}${m6Txt(132, 70, 'ㅏ', 18, '#221F1C')}`,
    sky: `<rect width="200" height="130" rx="6" fill="#CFE0EA"/><circle cx="100" cy="65" r="26" fill="#221F1C"/>`,
    earth: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="70" width="200" height="60" fill="#B7A57A"/><path d="M20 70 L180 70" stroke="#221F1C" stroke-width="10" stroke-linecap="round"/>`,
    person: `<rect width="200" height="130" rx="6" fill="#F3E3C0"/><path d="M100 20 L100 112" stroke="#221F1C" stroke-width="10" stroke-linecap="round"/>
      <circle cx="140" cy="46" r="12" fill="#F0D9BE" stroke="#221F1C" stroke-width="2"/><path d="M140 58 L140 96 M126 72 L154 72 M140 96 L130 114 M140 96 L150 114" stroke="#221F1C" stroke-width="3" stroke-linecap="round"/>`,
    mouth: `<rect width="200" height="130" rx="6" fill="#FBF7EC"/><path d="M40 64 Q70 40 100 52 Q130 40 160 64 Q130 92 100 88 Q70 92 40 64 Z" fill="#D98B7E" stroke="${S}" stroke-width="3"/>
      <rect x="84" y="50" width="32" height="30" fill="none" stroke="#17324A" stroke-width="5"/>`,
    tooth: `<rect width="200" height="130" rx="6" fill="#FBF7EC"/><path d="M60 36 L80 36 L78 96 L70 110 L62 96 Z M120 36 L140 36 L138 96 L130 110 L122 96 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <path d="M86 96 L100 56 L114 96" stroke="#17324A" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    throat: `<rect width="200" height="130" rx="6" fill="#FBF7EC"/><circle cx="100" cy="65" r="34" fill="#E8A0A0" stroke="${S}" stroke-width="3"/><circle cx="100" cy="65" r="18" fill="none" stroke="#17324A" stroke-width="6"/>`,
    present: `<rect width="200" height="130" rx="6" fill="#EFE2C2"/><rect x="40" y="10" width="120" height="50" fill="#3E5B4A" stroke="${S}" stroke-width="3"/>
      ${m6Txt(100, 35, '한글', 22, '#FBF7EC')}${m2Person('kid', 80, 'wave', 1)}${m2Person('teacher', 150, 'stand', -1)}`
  }[kind];
  const label = {king:'세종대왕', people:'백성', hanja:'한자', hangeul:'한글', book:'훈민정음', sky:'하늘', earth:'땅', person:'사람', mouth:'입 모양', tooth:'이 모양', throat:'목구멍 모양', present:'발표'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['king', 'people', 'hanja', 'hangeul', 'book', 'sky', 'earth', 'person', 'mouth', 'tooth', 'throat', 'present'].forEach(k => { M6_ONLY['hg_' + k] = m6Han(k); });
const M6_PIC = Object.assign({}, M5_PIC, M6_ONLY);

/* ---- 묶음 ---- */
const M6_BUNDLES = [
  {k:1, title:'더 커요, 제일 커요', topic:'견주는 말', nights:[1, 2, 3], after:'그동안 가족끼리 누가 더 큰지, 누가 제일 빠른지 견주어 말해 봐.'},
  {k:2, title:'어떻게 생겼어요?', topic:'꾸미는 말과 설명하기', nights:[4, 5, 6], after:'그동안 가족과 수수께끼 놀이를 하며 물건을 설명해 봐.'},
  {k:3, title:'설날', topic:'세배, 떡국, 새해 인사', nights:[7, 8, 9], after:'그동안 가족에게 세배하는 법을 연습하고 새해 인사를 해 봐.'},
  {k:4, title:'추석', topic:'송편, 보름달, 달토끼 옛이야기', nights:[10, 11, 12], after:'그동안 보름달이 뜨면 가족과 달을 보며 소원을 빌어 봐.'},
  {k:5, title:'세종대왕과 한글', topic:'한글이 생긴 이야기', nights:[13, 14, 15], after:'이제 가족 앞에서 한글을 소개하는 발표를 해 봐.'}
];

/* ---- 밤 ---- */
const M6_NIGHTS = [

/* ---- 첫째 묶음: 더 커요, 제일 커요 -----------------------------------
   반대말 짝(커요/작아요, 길어요/짧아요, 빨라요/느려요, 많아요/적어요, 높아요/낮아요)과
   견주는 말(보다, 더, 제일). "코끼리가 쥐보다 커요"에서 보다는 견주는 대상 뒤에 붙습니다.
   셋째 밤은 누구나 아는 옛이야기 "토끼와 거북이"를 담이가 한국어로 들려줍니다. */
{ n:1, bundle:1, title:'커요, 작아요',
  steps:[
    {type:'intro', who:'moi',
     t:'여섯째 달에 온 걸 환영해! 이번 달에는 무엇이 어떤지 설명하고, 한국의 명절과 한글 이야기를 해. 첫 밤은 서로 반대인 말이야.',
     big:'커요, 작아요'},
    {type:'pairs', title:'반대말 짝 하나', who:'moi',
     t:'두 개씩 짝이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'커요', pic:'big', en:"it's big"}, {w:'작아요', pic:'small', en:"it's small"},
       {w:'길어요', pic:'long', en:"it's long"}, {w:'짧아요', pic:'short', en:"it's short"},
       {w:'빨라요', pic:'fast', en:"it's fast"}, {w:'느려요', pic:'slow', en:"it's slow"}]},
    {type:'pairs', title:'반대말 짝 둘', who:'moi',
     t:'짝이 두 개 더 있어.',
     singles:[
       {w:'많아요', pic:'many', en:'there are many'}, {w:'적어요', pic:'few', en:'there are few'},
       {w:'높아요', pic:'high', en:"it's high"}, {w:'낮아요', pic:'low', en:"it's low"}],
     tip:{who:'dami', t:'반대말은 짝으로 외우면 쉽단다. 큰 것이 있으면 작은 것이 있고, 긴 것이 있으면 짧은 것이 있지. 코끼리, 쥐, 기린, 토끼, 거북이도 오늘 이 말들과 함께 만나자꾸나.'}},
    {type:'pairs', title:'동물 친구', who:'moi',
     t:'견줄 때 쓸 동물이야.',
     singles:[
       {w:'코끼리', pic:'elephant', en:'elephant'}, {w:'쥐', pic:'mouse', en:'mouse'}, {w:'기린', pic:'giraffe', en:'giraffe'},
       {w:'토끼', pic:'rabbit', en:'rabbit'}, {w:'거북이', pic:'turtle', en:'turtle'}]},
    {type:'choose', title:'반대말을 찾아요', who:'tori',
     t:'짝이 되는 반대말을 골라 봐.',
     qs:[
       {pic:'big', t:'커요의 반대말은?', o:['작아요','길어요','높아요'], a:'작아요'},
       {pic:'fast', t:'빨라요의 반대말은?', o:['많아요','느려요','짧아요'], a:'느려요'},
       {pic:'many', t:'많아요의 반대말은?', o:['적어요','작아요','낮아요'], a:'적어요'},
       {pic:'high', t:'높아요의 반대말은?', o:['느려요','낮아요','짧아요'], a:'낮아요'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'짧아요', o:['long','short','high'], a:'short'},
       {say:'느려요', o:['fast','slow','small'], a:'slow'},
       {say:'높아요', o:['low','high','big'], a:'high'},
       {say:'기린', o:['elephant','giraffe','turtle'], a:'giraffe'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'반대말을 써 봐.',
     items:[{w:'커요', en:"it's big"}, {w:'작아요', en:"it's small"}, {w:'많아요', en:'there are many', hint:{who:'dami', t:'소리는 [마나요]지만 ‘많’에는 ㄴ과 ㅎ이 함께 있단다. 괜찮아요의 그 받침이지.'}}]}
  ],
  dictWords:[{w:'커요', en:'big'}, {w:'작아요', en:'small'}, {w:'길어요', en:'long'}, {w:'빨라요', en:'fast'},
             {w:'느려요', en:'slow'}, {w:'많아요', en:'many'}, {w:'적어요', en:'few'}, {w:'높아요', en:'high'}] },

{ n:2, bundle:1, title:'코끼리가 쥐보다 커요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 둘을 견주어 말해 볼 거야. 코끼리와 쥐 가운데 누가 더 커? 셋을 견주면 누가 제일 커?',
     big:'코끼리가 쥐보다 커요'},
    {type:'pairs', title:'견주는 말', who:'moi',
     t:'견줄 때 쓰는 말 세 개야. 눌러서 들어 봐.',
     singles:[
       {w:'보다', pic:'cmp_el_mouse', en:'than'}, {w:'더', pic:'cmp_pencils', en:'more'}, {w:'제일', pic:'cmp_three', en:'the most'}],
     tip:{who:'dami', t:'보다는 견주는 대상 뒤에 붙는단다. 코끼리가 쥐보다 커요. 쥐와 견주어 코끼리가 크다는 뜻이지. 영어 than과 달리 뒤에 붙는 것을 잊지 말거라. 셋 이상 견줄 때는 제일이란다.'}},
    {type:'choose', mode:'pic', title:'더 큰 쪽, 제일 큰 쪽', who:'tori',
     t:'들리는 말에 맞는 그림을 눌러 봐.',
     qs:[
       {say:'더 커요', t:'둘 가운데 더 큰 쪽을 눌러요.', o:['elephant','mouse'], a:'elephant'},
       {say:'더 빨라요', t:'둘 가운데 더 빠른 쪽을 눌러요.', o:['turtle','rabbit'], a:'rabbit'},
       {say:'제일 커요', t:'셋 가운데 제일 큰 쪽을 눌러요.', o:['mouse','elephant','giraffe'], a:'giraffe'},
       {say:'제일 작아요', t:'셋 가운데 제일 작은 쪽을 눌러요.', o:['giraffe','mouse','elephant'], a:'mouse'}]},
    {type:'choose', title:'바르게 말한 쪽은?', who:'tori',
     t:'그림을 보고 맞게 견준 말을 골라 봐.',
     qs:[
       {pic:'cmp_el_mouse', o:['코끼리가 쥐보다 커요.','쥐가 코끼리보다 커요.'], a:'코끼리가 쥐보다 커요.', en:'The elephant is bigger than the mouse.'},
       {pic:'cmp_race', o:['거북이가 토끼보다 빨라요.','토끼가 거북이보다 빨라요.'], a:'토끼가 거북이보다 빨라요.', en:'The rabbit is faster than the turtle.'},
       {pic:'cmp_three', o:['기린이 제일 커요.','기린이 더 커요.'], a:'기린이 제일 커요.', en:'The giraffe is the biggest.', why:'셋을 견줄 때는 제일이에요.'},
       {pic:'cmp_pencils', o:['위 연필이 더 길어요.','위 연필이 더 짧아요.'], a:'위 연필이 더 길어요.', en:'The top pencil is longer.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'코끼리가 쥐보다 커요.', tiles:['코끼리가','쥐보다','커요.'], extra:['보다 쥐'], en:'The elephant is bigger than the mouse.', hint:'보다는 견주는 대상(쥐) 뒤에 붙어요.'},
       {s:'기린이 제일 커요.', tiles:['기린이','제일','커요.'], en:'The giraffe is the biggest.'},
       {s:'토끼가 거북이보다 더 빨라요.', tiles:['토끼가','거북이보다','더','빨라요.'], en:'The rabbit is faster than the turtle.'},
       {s:'제 동생은 저보다 작아요.', tiles:['제','동생은','저보다','작아요.'], en:'My younger sibling is smaller than me.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'반대말에도 받침 비밀이 여럿 숨어 있단다.',
     cmp:[
       {s:'많아요', d:'마나요', n:'ㄶ 가운데 ㅎ은 소리 나지 않고 ㄴ이 건너가요'},
       {s:'짧아요', d:'짤바요', n:'ㄼ 가운데 ㅂ이 뒤로 건너가요'},
       {s:'높아요', d:'노파요', n:'ㅍ 받침이 뒤로 건너가요'},
       {s:'작아요', d:'자가요', n:'ㄱ 받침이 뒤로 건너가요'}],
     note:'짧아요는 여덟의 그 받침 ㄼ이란다. 여덟은 [여덜], 짧아요는 [짤바요]. 뒤에 모음이 오면 ㅂ이 살아나지. 겹받침은 이렇게 뒤에 무엇이 오느냐에 따라 달라진단다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'짧아요', en:"it's short", hint:{who:'dami', t:'소리는 [짤바요]지만 ‘짧’에는 ㄹ과 ㅂ이 함께 있단다. 받침 줄에서 ㄼ을 찾아보거라.'}},
       {w:'제일', en:'the most'},
       {w:'보다', en:'than'}]}
  ],
  dictWords:[{w:'짧아요', en:'short'}, {w:'제일', en:'the most'}, {w:'보다', en:'than'}, {w:'코끼리', en:'elephant'}, {w:'거북이', en:'turtle'}] },

{ n:3, bundle:1, title:'토끼와 거북이',
  steps:[
    {type:'intro', who:'dami',
     t:'오늘은 이 할아버지가 옛이야기를 하나 들려주마. 토끼와 거북이 이야기란다. 먼저 글자 없이 귀로만 들어 보거라.',
     big:'토끼와 거북이'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 더 빠른지, 누가 이겼는지 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'dami', t:'옛날에 토끼와 거북이가 달리기를 했단다.', en:'Long ago, a rabbit and a turtle had a race.'},
       {who:'tori', t:'토끼가 거북이보다 훨씬 빨라요!', en:'The rabbit is much faster than the turtle!'},
       {who:'dami', t:'그렇지. 토끼는 제일 빨랐단다. 그래서 중간에 나무 아래에서 잠을 잤지.', en:'Right. The rabbit was the fastest. So it took a nap under a tree halfway.'},
       {who:'moi', t:'거북이는요?', en:'What about the turtle?'},
       {who:'dami', t:'거북이는 느렸지만 쉬지 않고 걸었단다.', en:'The turtle was slow, but it kept walking without rest.'},
       {who:'tori', t:'그래서 누가 이겼어요?', en:'So who won?'},
       {who:'dami', t:'거북이가 이겼단다!', en:'The turtle won!'},
       {who:'moi', t:'토리야, 너도 토끼니까 달리기할 때 잠자면 안 돼!', en:"Tori, you're a rabbit too, so don't nap during a race!"}],
     note:{who:'dami', t:'토끼가 더 빨랐지만 거북이가 이겼구나. 빠른 것보다 끝까지 하는 것이 더 중요하단다. 달토끼에서 하루 한 밤씩 방아를 찧는 것도 거북이처럼 꾸준히 가는 게지.'}},
    {type:'sequence', title:'이야기 순서', who:'moi',
     t:'토끼와 거북이 이야기를 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'race_start', t:'토끼와 거북이가 달리기를 시작했어요.'}, {pic:'race_sleep', t:'토끼가 나무 아래에서 잤어요.'}, {pic:'race_walk', t:'거북이는 쉬지 않고 걸었어요.'}, {pic:'race_win', t:'거북이가 이겼어요.'}]}]},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'누가 더 빨라요?', o:['토끼','거북이'], a:'토끼', why:'토끼가 거북이보다 빨라요.'},
       {t:'토끼는 중간에 무엇을 했어요?', o:['잠을 잤어요','밥을 먹었어요','수영을 했어요'], a:'잠을 잤어요', why:'토끼는 나무 아래에서 잠을 잤어요.'},
       {t:'누가 이겼어요?', o:['토끼','거북이','모이'], a:'거북이', why:'쉬지 않고 걸은 거북이가 이겼어요.'},
       {t:'이 이야기에서 배울 점은?', o:['끝까지 하는 게 중요해요','빠른 게 제일 좋아요'], a:'끝까지 하는 게 중요해요', why:'할아버지는 끝까지 하는 것이 더 중요하다고 하셨어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'cmp_race', line:{who:'moi', t:'토리야, 누가 더 빨라?'}, en:'Tori, who is faster?', o:['토끼가 더 빨라.','토끼가 더 빨라요.'], a:'토끼가 더 빨라.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'race_win', line:{who:'dami', t:'토리야, 누가 이겼느냐?'}, en:'Tori, who won?', o:['거북이가 이겼어요.','토끼가 이겼어요.'], a:'거북이가 이겼어요.', why:'할아버지께는 이겼어요로 대답해요.'},
       {pic:'cmp_three', t:'셋 가운데 누가 제일 커요?', en:'Who is the biggest of the three?', o:['기린이 제일 커요.','기린이 더 커요.'], a:'기린이 제일 커요.', why:'셋을 견줄 때는 제일이에요.'}]},
    {type:'task', title:'우리 가족 견주기', who:'moi',
     t:'가족끼리 견주어 말해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'키를 대 보고', say:'아빠가 저보다 커요.', sub:'누가 제일 큰지도 말해요: 아빠가 제일 커요.'},
       {when:'달리기를 해 보고', say:'______가 ______보다 빨라요.', sub:'받침이 있으면 이: 형이 저보다 빨라요.'},
       {when:'물건을 견주어 보고', say:'이 연필이 더 길어요.', sub:'많아요, 적어요, 높아요, 낮아요도 써 봐요.'}],
     parent:'가족끼리 키를 재거나, 달리기를 하거나, 연필 길이를 대 보며 한국어로 견주어 말하게 해 주세요. "보다"는 견주는 대상 뒤에 붙는다는 점(아빠가 저보다 커요)이 영어와 반대라서 아이가 헷갈리기 쉽습니다. 틀리면 바르게 되받아 주시면 충분합니다. 토끼와 거북이 이야기는 한국 아이들도 어릴 때 흔히 듣는 이야기라, 조부모님께 이 이야기를 한국어로 다시 들려달라고 부탁해 보셔도 좋습니다.'}
  ],
  dictWords:[] },

/* ---- 둘째 묶음: 어떻게 생겼어요? ------------------------------------
   꾸미는 말(큰, 작은, 긴, 짧은, 빨간, 파란)을 이름 앞에 붙이고, 사람과 동물을 설명합니다.
   규칙: 커요 → 큰, 작아요 → 작은. 받침이 없으면 ㄴ, 있으면 은. 길어요처럼 ㄹ 받침은 ㄹ이 빠지고 긴.
   색 이름의 빨간, 파란은 셋째 달의 빨간색에서 이미 만난 모양입니다.
   설명을 듣고 무엇인지 맞히는 수수께끼는 그림 고르기 화면으로 합니다. */
{ n:4, bundle:2, title:'빨간 모자, 큰 가방',
  steps:[
    {type:'intro', who:'moi',
     t:'오늘은 이름 앞에 붙어서 어떤 것인지 알려 주는 말을 모아 왔어. 그냥 가방이 아니라 큰 가방, 그냥 모자가 아니라 빨간 모자!',
     big:'빨간 모자, 큰 가방'},
    {type:'tense', title:'문장 끝에서, 이름 앞에서', who:'dami',
     t:'첫 묶음의 커요, 작아요가 이름 앞에 오면 모양이 바뀐단다. 받침이 없으면 ㄴ, 있으면 은을 붙이지.',
     cols:['문장 끝에서', '이름 앞에서'],
     groups:[
       {rule:'받침이 없으면 ㄴ', rows:[['가방이 커요','큰 가방'], ['차가 빨라요','빠른 차']]},
       {rule:'받침이 있으면 은', rows:[['가방이 작아요','작은 가방'], ['산이 높아요','높은 산'], ['연필이 짧아요','짧은 연필']]},
       {rule:'ㄹ 받침은 ㄹ이 빠져요', rows:[['연필이 길어요','긴 연필']]}],
     note:'빨간색의 빨간, 파란색의 파란도 사실 이 모양이란다. 셋째 달부터 벌써 쓰고 있었던 게지. 빨간 모자, 파란 가방, 노란 옷.'},
    {type:'pairs', title:'꾸미는 말과 이름', who:'moi',
     t:'그림을 누르면 소리가 나. 앞에 붙은 말이 무엇을 알려 주는지 봐.',
     singles:[
       {w:'큰 가방', pic:'bag_big', en:'a big bag'}, {w:'작은 가방', pic:'bag_small', en:'a small bag'},
       {w:'긴 연필', pic:'long', en:'a long pencil'}, {w:'짧은 연필', pic:'short', en:'a short pencil'},
       {w:'빨간 모자', pic:'hat_red', en:'a red hat'}, {w:'파란 모자', pic:'hat_blue', en:'a blue hat'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'tori',
     t:'들리는 말에 딱 맞는 그림을 눌러 봐. 앞에 붙은 말을 잘 들어.',
     qs:[
       {say:'작은 가방', o:['bag_big','bag_small'], a:'bag_small'},
       {say:'파란 모자', o:['hat_red','hat_blue'], a:'hat_blue'},
       {say:'긴 연필', o:['short','long'], a:'long'},
       {say:'높은 산', o:['low','high'], a:'high'}]},
    {type:'choose', title:'바르게 꾸민 말은?', who:'tori',
     t:'이름 앞에 오는 모양을 골라 봐.',
     qs:[
       {pic:'big', o:['큰 코끼리','커 코끼리'], a:'큰 코끼리', why:'커요가 이름 앞에 오면 큰이에요.'},
       {pic:'small', o:['작아 쥐','작은 쥐'], a:'작은 쥐', why:'작에 받침이 있어서 작은이에요.'},
       {pic:'fast', o:['빠른 토끼','빨라 토끼'], a:'빠른 토끼'},
       {pic:'giraffe', o:['길은 목','긴 목'], a:'긴 목', why:'길어요는 ㄹ이 빠져서 긴이에요.'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'꾸미는 말을 써 봐.',
     items:[{w:'큰', en:'big (before a noun)'}, {w:'작은', en:'small (before a noun)', hint:{who:'dami', t:'소리는 [자근]이지만 ‘작’에 ‘은’을 붙인단다.'}}, {w:'긴', en:'long (before a noun)'}]}
  ],
  dictWords:[{w:'큰', en:'big'}, {w:'작은', en:'small'}, {w:'긴', en:'long'}, {w:'짧은', en:'short'}, {w:'빨간', en:'red'}, {w:'파란', en:'blue'}] },

{ n:5, bundle:2, title:'키가 크고 머리가 길어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 사람과 동물을 설명해 볼 거야. 키가 커요, 머리가 길어요, 안경을 써요. 그리고 설명을 듣고 누구인지 맞히는 수수께끼도 해!',
     big:'키가 크고 머리가 길어요'},
    {type:'pairs', title:'사람을 설명하는 말', who:'moi',
     t:'사람이 어떻게 생겼는지 말할 때 쓰는 말이야.',
     singles:[
       {w:'키가 커요', pic:'tall', en:'is tall'}, {w:'키가 작아요', pic:'short_kid', en:'is short'},
       {w:'머리가 길어요', pic:'hair_long', en:'has long hair'}, {w:'머리가 짧아요', pic:'hair_short', en:'has short hair'},
       {w:'안경을 써요', pic:'glasses', en:'wears glasses'}, {w:'옷을 입어요', pic:'wear', en:'wears clothes'}],
     tip:{who:'tori', t:'안경, 모자, 우산은 써요, 옷은 입어요. 머리 위나 얼굴에 쓰는 건 써요, 몸에 걸치는 건 입어요야.'}},
    {type:'choose', mode:'pic', title:'수수께끼', who:'dami',
     t:'이 할아버지가 설명하는 것을 잘 듣고 무엇인지 맞혀 보거라.',
     qs:[
       {say:'저는 목이 아주 길어요. 키가 제일 커요. 누구일까요?', t:'목이 아주 길어요. 키가 제일 커요. 누구일까요?', o:['elephant','giraffe','turtle'], a:'giraffe'},
       {say:'저는 귀가 길어요. 아주 빨라요. 누구일까요?', t:'귀가 길어요. 아주 빨라요. 누구일까요?', o:['rabbit','mouse','turtle'], a:'rabbit'},
       {say:'저는 느려요. 등에 단단한 집이 있어요. 누구일까요?', t:'느려요. 등에 단단한 집이 있어요. 누구일까요?', o:['giraffe','turtle','elephant'], a:'turtle'},
       {say:'머리가 하얗고 안경을 써요. 누구일까요?', t:'머리가 하얗고 안경을 써요. 누구일까요?', o:['hair_long','glasses','short_kid'], a:'glasses'},
       {say:'머리가 길고 분홍색 옷을 입었어요. 누구일까요?', t:'머리가 길고 분홍색 옷을 입었어요. 누구일까요?', o:['hair_short','tall','hair_long'], a:'hair_long'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 설명해 봐.',
     qs:[
       {s:'키가 크고 머리가 길어요.', tiles:['키가','크고','머리가','길어요.'], en:'She is tall and has long hair.', hint:'다섯째 달의 고로 이어요.'},
       {s:'우리 할아버지는 안경을 써요.', tiles:['우리','할아버지는','안경을','써요.'], extra:['입어요.'], en:'My grandpa wears glasses.'},
       {s:'빨간 모자를 좋아해요.', tiles:['빨간','모자를','좋아해요.'], en:'I like the red hat.'},
       {s:'작은 고양이가 있어요.', tiles:['작은','고양이가','있어요.'], extra:['작아'], en:'There is a small cat.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'꾸미는 말에 은이 붙으면 받침이 건너가지.',
     cmp:[
       {s:'작은', d:'자근', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'짧은', d:'짤븐', n:'ㄼ 가운데 ㅂ이 뒤로 건너가요'},
       {s:'높은', d:'노픈', n:'ㅍ 받침이 뒤로 건너가요'},
       {s:'입어요', d:'이버요', n:'ㅂ 받침이 뒤로 건너가요'}],
     note:'짧아요의 [짤바요]처럼 짧은도 [짤븐]이란다. 같은 받침은 같은 방식으로 소리가 나니, 하나를 익히면 다른 것도 따라온단다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'입어요', en:'wear (clothes)', hint:{who:'dami', t:'소리는 [이버요]지만 ‘입’에 받침 ㅂ이 있단다.'}},
       {w:'안경', en:'glasses'},
       {w:'키', en:'height'}]}
  ],
  dictWords:[{w:'입어요', en:'wear'}, {w:'안경', en:'glasses'}, {w:'키', en:'height'}, {w:'머리', en:'hair, head'}] },

{ n:6, bundle:2, title:'할머니의 고양이 나비',
  steps:[
    {type:'intro', who:'tori',
     t:'할머니 댁 고양이 나비가 없어졌어! 설명을 잘 듣고 나비를 찾아 줘. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'나비가 어떻게 생겼어요?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 나비가 어떻게 생겼는지 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'halmi', t:'아이고, 우리 나비가 없어졌구나.', en:'Oh dear, our Nabi is missing.'},
       {who:'tori', t:'할머니, 나비가 어떻게 생겼어요?', en:'Grandma, what does Nabi look like?'},
       {who:'halmi', t:'작은 고양이란다. 털이 노랗고 꼬리가 길지.', en:'She is a small cat. Her fur is yellow and her tail is long.'},
       {who:'tori', t:'또요?', en:'Anything else?'},
       {who:'halmi', t:'목에 빨간 방울을 달았단다.', en:'She wears a red bell on her neck.'},
       {who:'moi', t:'저기 노란 고양이가 있어요!', en:"There's a yellow cat over there!"},
       {who:'tori', t:'그런데 저 고양이는 꼬리가 짧아. 방울도 없어. 나비가 아니야.', en:"But that cat's tail is short. And it has no bell. It's not Nabi."},
       {who:'moi', t:'상자 안에 작은 고양이가 있어! 꼬리가 길고 빨간 방울도 있어!', en:'There is a small cat in the box! It has a long tail and a red bell!'},
       {who:'halmi', t:'맞다, 우리 나비다! 설명을 잘 들어 줘서 고맙구나.', en:"Yes, that's our Nabi! Thank you for listening so carefully."}],
     note:{who:'halmi', t:'한국에서는 고양이 이름으로 나비를 많이 짓는단다. 토리와 모이가 털빛, 꼬리, 방울을 하나씩 견주어서 우리 나비를 찾았구나. 잘 설명하고 잘 들으면 이렇게 무엇이든 찾을 수 있지.'}},
    {type:'choose', mode:'pic', title:'나비를 찾아요', who:'tori',
     t:'할머니 설명에 딱 맞는 고양이를 눌러 봐.',
     qs:[
       {say:'작은 고양이예요. 털이 노랗고 꼬리가 길어요. 빨간 방울을 달았어요.', t:'털이 노랗고, 꼬리가 길고, 빨간 방울을 달았어요.', o:['cat_short','cat_black','cat_nabi'], a:'cat_nabi'},
       {say:'털이 까맣고 빨간 방울을 달았어요.', t:'털이 까맣고 빨간 방울을 달았어요. 이 고양이는?', o:['cat_nabi','cat_black','cat_short'], a:'cat_black'},
       {say:'털이 노랗고 꼬리가 짧아요.', t:'털이 노랗고 꼬리가 짧아요. 이 고양이는?', o:['cat_short','cat_nabi','cat_black'], a:'cat_short'}]},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'나비는 무엇이에요?', o:['강아지','고양이','토끼'], a:'고양이', why:'나비는 할머니 댁 고양이예요.'},
       {t:'나비의 꼬리는 어때요?', o:['길어요','짧아요'], a:'길어요', why:'할머니는 ‘꼬리가 길지’라고 하셨어요.'},
       {t:'나비는 목에 무엇을 달았어요?', o:['빨간 방울','파란 모자','노란 가방'], a:'빨간 방울', why:'할머니는 ‘빨간 방울을 달았단다’라고 하셨어요.'},
       {t:'나비는 어디에 있었어요?', o:['나무 위','상자 안','침대 아래'], a:'상자 안', why:'모이가 ‘상자 안에 작은 고양이가 있어!’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'bag_big', line:{who:'halmi', t:'토리야, 네 가방은 어떻게 생겼니?'}, en:'Tori, what does your bag look like?', o:['크고 파란 가방이에요.','크고 파란 가방이야.'], a:'크고 파란 가방이에요.', why:'할머니께는 이에요로 대답해요.'},
       {pic:'cat_nabi', line:{who:'moi', t:'토리야, 나비 꼬리 길어?'}, en:"Tori, is Nabi's tail long?", o:['응, 길어.','응, 긴.'], a:'응, 길어.', why:'문장 끝에서는 길어, 이름 앞에서만 긴이에요.'},
       {pic:'giraffe', t:'모이에게 기린을 설명해 줘요.', en:'Describe a giraffe to Moi.', o:['목이 길고 키가 제일 커.','목이 긴 키가 제일 커.'], a:'목이 길고 키가 제일 커.', why:'두 가지를 이을 때는 고로 이어요.'}]},
    {type:'task', title:'수수께끼 놀이', who:'moi',
     t:'가족과 수수께끼 놀이를 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'집 안 물건 하나를 골라 설명해요', say:'이건 작고 빨간 거예요. 무엇일까요?', sub:'세 가지 힌트를 차례로: 크기, 색, 쓰는 곳.'},
       {when:'가족을 설명해 봐요', say:'키가 크고 안경을 써요. 누구일까요?', sub:'머리가 길어요, 짧아요도 써 봐요.'},
       {when:'이번엔 가족이 내는 수수께끼를 맞혀요', say:'______예요!', sub:'받침이 있으면 이에요: 연필이에요!'}],
     parent:'집 안 물건이나 가족을 한국어로 설명하고 맞히는 놀이를 해 주세요. 한국에서는 이런 놀이를 스무고개라고 부릅니다. 아이가 "크고, 파랗고, 둥글어요"처럼 꾸미는 말을 여러 개 이어서 설명하면 크게 칭찬해 주세요. "큰"과 "커요"처럼 이름 앞과 문장 끝의 모양이 다르다는 점을 헷갈려하면, 이름이 뒤에 오는지를 함께 살펴봐 주시면 됩니다.'}
  ],
  dictWords:[] },

/* ---- 셋째 묶음: 설날 ---------------------------------------------
   설날, 새해, 한복, 세배, 세뱃돈, 떡국, 윷놀이와 새해 인사(새해 복 많이 받으세요).
   둘째 밤에 세배 순서를 이야기 순서 화면으로 익히고, "~으면"(떡국을 먹으면)을 말 덩어리로 씁니다.
   셋째 밤은 한국 할머니 댁의 설날. 둘째 달에서 여덟 살이던 토리가 떡국을 먹고 아홉 살이 됩니다.
   약속대로 차례는 밤 내용에 넣지 않고 부모님 안내에서만 짧게 소개합니다. */
{ n:7, bundle:3, title:'설날이에요',
  steps:[
    {type:'intro', who:'moi',
     t:'한국에서 가장 큰 명절 가운데 하나, 설날이야! 새해 첫날을 가족과 함께 보내는 날이지. 오늘은 설날에 쓰는 말을 모아 왔어.',
     big:'새해 복 많이 받으세요'},
    {type:'pairs', title:'설날에 만나는 말', who:'moi',
     t:'설날에 보고 듣는 것이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'설날', pic:'seol_family', en:'Lunar New Year'}, {w:'새해', pic:'seol_newyear', en:'new year'},
       {w:'한복', pic:'seol_hanbok', en:'hanbok (traditional clothes)'}, {w:'세배', pic:'seol_sebae', en:'New Year bow'},
       {w:'세뱃돈', pic:'seol_money', en:'New Year money'}, {w:'떡국', pic:'seol_tteokguk', en:'rice cake soup'},
       {w:'윷놀이', pic:'seol_yut', en:'yut (stick game)'}],
     tip:{who:'dami', t:'설날은 음력 새해 첫날이라 해마다 날짜가 조금씩 달라진단다. 양력으로는 보통 일월 끝에서 이월 사이에 오지. 미국에서도 음력 설날이라고 부르며 함께 지내는 이웃이 많단다.'}},
    {type:'pairs', title:'새해 인사', who:'dami',
     t:'새해 첫 인사란다. 친구에게, 그리고 어른께 하는 말이 다르지.',
     pairs:[
       {when:'새해 인사', pic:'seol_newyear', friend:'새해 복 많이 받아!', elder:'새해 복 많이 받으세요.', en:'Happy New Year! (lit. receive many blessings)'}],
     tip:{who:'tori', t:'복은 좋은 일이라는 뜻이야. 새해에 좋은 일이 많이 생기라는 인사지.'}},
    {type:'choose', title:'설날의 말', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'seol_tteokguk', o:['떡국','떡볶이','김밥'], a:'떡국', why:'설날에는 떡국을 먹어요.'},
       {pic:'seol_hanbok', o:['한복','한국','옷'], a:'한복'},
       {pic:'seol_yut', o:['숨바꼭질','윷놀이','줄넘기'], a:'윷놀이'},
       {pic:'seol_sebae', o:['세배','세뱃돈','설날'], a:'세배', why:'어른께 절하며 새해 인사를 하는 것이 세배예요.'},
       {pic:'p_grandma', t:'설날 아침, 할머니께 인사해요.', o:['새해 복 많이 받아!','새해 복 많이 받으세요.'], a:'새해 복 많이 받으세요.', why:'어른께는 받으세요로 해요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'세뱃돈', o:['seol_money','seol_yut','seol_tteokguk'], a:'seol_money'},
       {say:'새해', o:['seol_family','seol_newyear','seol_hanbok'], a:'seol_newyear'},
       {say:'윷놀이', o:['seol_sebae','seol_yut','pl5_rope'], a:'seol_yut'},
       {say:'한복', o:['seol_hanbok','tr_clothes','hat_red'], a:'seol_hanbok'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'설날 말을 써 봐.',
     items:[{w:'설날', en:'Lunar New Year', hint:{who:'dami', t:'소리는 [설랄]이지만 ‘설’과 ‘날’이란다. ㄹ 뒤의 ㄴ이 ㄹ처럼 소리 나지.'}}, {w:'한복', en:'hanbok'}, {w:'세배', en:'New Year bow'}]}
  ],
  dictWords:[{w:'설날', en:'Lunar New Year'}, {w:'새해', en:'new year'}, {w:'한복', en:'hanbok'}, {w:'세배', en:'New Year bow'},
             {w:'떡국', en:'rice cake soup'}, {w:'복', en:'blessing, luck'}] },

{ n:8, bundle:3, title:'세배를 드려요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 세배하는 순서를 배울 거야. 그리고 떡국을 먹으면 무슨 일이 생기는지도 알려 줄게!',
     big:'세배를 드려요'},
    {type:'sequence', title:'세배하는 순서', who:'dami',
     t:'세배는 차례가 있단다. 차례대로 눌러 보거라.',
     qs:[
       {t:'세배하는 순서', cards:[{pic:'seol_hanbok', t:'한복을 입어요.'}, {pic:'p_grandma', t:'할머니 할아버지께서 앉으세요.'}, {pic:'seol_sebae', t:'절을 하고 새해 인사를 드려요.'}, {pic:'seol_money', t:'덕담을 듣고 세뱃돈을 받아요.'}]}]},
    {type:'tense', title:'~하면', who:'dami',
     t:'무엇을 하면 어떻게 되는지 말할 때는 면을 붙인단다. 받침이 있는 말에는 으면이지. 받침 삼 형제가 또 나왔구나.',
     cols:['움직이는 말', '~하면'],
     groups:[
       {rule:'받침이 없으면 면', rows:[['가요','가면'], ['해요','하면'], ['자요','자면']]},
       {rule:'받침이 있으면 으면', rows:[['먹어요','먹으면'], ['입어요','입으면'], ['받아요','받으면']]}],
     note:'떡국을 먹으면 한 살 더 먹는다고들 한단다. 그래서 설날 아침에 떡국을 먹으며 몇 그릇 먹었느냐고 농담을 하지. 나이도 먹고 떡국도 먹으니 먹는다는 말이 두 번 쓰이는 게야.'},
    {type:'choose', title:'설날에는 어떻게 해요?', who:'tori',
     t:'설날에 맞는 말을 골라 봐.',
     qs:[
       {pic:'seol_tteokguk', o:['떡국을 먹으면 한 살 더 먹어요.','떡국을 먹으면 한 살 덜 먹어요.'], a:'떡국을 먹으면 한 살 더 먹어요.', en:'If you eat tteokguk, you get a year older.'},
       {pic:'seol_sebae', t:'할머니께 세배해요.', o:['할머니께 세배를 드려요.','할머니에게 세배를 줘요.'], a:'할머니께 세배를 드려요.', en:'I give Grandma a New Year bow.', why:'어른께는 께, 드려요를 써요.'},
       {pic:'seol_money', t:'세뱃돈을 받을 때는?', o:['두 손으로 받고 감사합니다라고 해요.','한 손으로 받고 고마워라고 해요.'], a:'두 손으로 받고 감사합니다라고 해요.', en:'Receive it with both hands and say thank you.'},
       {pic:'seol_hanbok', o:['설날에 한복을 입어요.','설날에 한복을 써요.'], a:'설날에 한복을 입어요.', en:'I wear hanbok on Seollal.', why:'옷은 입어요예요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'새해 복 많이 받으세요.', tiles:['새해','복','많이','받으세요.'], en:'Happy New Year.'},
       {s:'설날에 한복을 입어요.', tiles:['설날에','한복을','입어요.'], extra:['써요.'], en:'I wear hanbok on Seollal.'},
       {s:'할머니께 세배를 드려요.', tiles:['할머니께','세배를','드려요.'], extra:['줘요.'], en:'I give Grandma a New Year bow.'},
       {s:'떡국을 먹으면 한 살 더 먹어요.', tiles:['떡국을','먹으면','한','살','더','먹어요.'], extra:['먹면'], en:'If you eat tteokguk, you get a year older.', hint:'먹에는 받침이 있어서 먹으면이에요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'설날 말에는 소리 비밀이 유난히 많단다.',
     cmp:[
       {s:'설날', d:'설랄', n:'ㄹ 뒤의 ㄴ이 ㄹ처럼 나요'},
       {s:'떡국', d:'떡꾹', n:'ㄱ 받침 뒤의 ㄱ은 ㄲ처럼 나요'},
       {s:'세뱃돈', d:'세배똔', n:'사이에 든 ㅅ 때문에 ㄷ이 ㄸ처럼 나요'},
       {s:'한복을', d:'한보글', n:'ㄱ 받침이 뒤로 건너가요'}],
     note:'설날의 [설랄]은 새로운 소리 비밀이란다. ㄹ과 ㄴ이 만나면 ㄴ이 ㄹ로 바뀌지. 설날, 달나라, 물놀이도 모두 그렇단다. [달라라], [물로리]. 하지만 쓸 때는 제 글자대로 쓰거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'떡국', en:'rice cake soup', hint:{who:'dami', t:'소리는 [떡꾹]이지만 ‘떡’과 ‘국’이란다.'}},
       {w:'세뱃돈', en:'New Year money', hint:{who:'dami', t:'세배와 돈 사이에 ㅅ이 들어가 ‘뱃’이 된단다.'}},
       {w:'받으면', en:'if you receive'}]}
  ],
  dictWords:[{w:'세뱃돈', en:'New Year money'}, {w:'윷놀이', en:'yut game'}, {w:'먹으면', en:'if you eat'}, {w:'받으면', en:'if you receive'}] },

{ n:9, bundle:3, title:'할머니 댁의 설날',
  steps:[
    {type:'intro', who:'tori',
     t:'한국 할머니 댁에서 맞는 첫 설날이야! 한복을 입고 할머니께 세배를 드릴 거야. 먼저 글자 없이 귀로만 들어 봐.',
     big:'할머니, 새해 복 많이 받으세요!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리와 할머니가 주고받는 새해 인사를 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'할머니, 새해 복 많이 받으세요!', en:'Grandma, Happy New Year!'},
       {who:'halmi', t:'오냐, 우리 토리도 새해 복 많이 받아라. 올해도 튼튼하게 잘 자라거라.', en:'Yes, Happy New Year to you too, Tori. Grow up healthy and strong this year.'},
       {who:'halmi', t:'자, 세뱃돈이란다.', en:"Here's your New Year money."},
       {who:'tori', t:'감사합니다, 할머니!', en:'Thank you, Grandma!'},
       {who:'moi', t:'할머니, 저도 세배할래요!', en:'Grandma, I want to bow too!'},
       {who:'halmi', t:'허허, 모이도 복 많이 받아라. 이제 떡국 먹자.', en:"Ho ho, blessings to you too, Moi. Now let's eat tteokguk."},
       {who:'tori', t:'떡국을 먹으면 한 살 더 먹지요? 그럼 저는 이제 아홉 살이에요!', en:"If I eat tteokguk, I get a year older, right? Then I'm nine now!"},
       {who:'halmi', t:'그렇지. 떡국 먹고 다 같이 윷놀이하자!', en:"That's right. Let's eat and then all play yut together!"}],
     note:{who:'halmi', t:'올해도 튼튼하게 잘 자라라, 이렇게 어른이 해 주시는 좋은 말을 덕담이라고 한단다. 세뱃돈은 두 손으로 받고 감사합니다라고 하는 게 예의지. 우리 담이 동생 말로는 토리가 여덟 살이라더니, 벌써 아홉 살이구나.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 할머니께 뭐라고 인사했어요?', o:['새해 복 많이 받으세요','안녕히 주무세요','잘 먹겠습니다'], a:'새해 복 많이 받으세요'},
       {t:'할머니가 토리에게 무엇을 주셨어요?', o:['세뱃돈','한복','떡'], a:'세뱃돈', why:'할머니는 ‘자, 세뱃돈이란다’라고 하셨어요.'},
       {t:'떡국을 먹고 토리는 몇 살이 됐어요?', o:['여덟 살','아홉 살','열 살'], a:'아홉 살', why:'토리는 ‘저는 이제 아홉 살이에요!’라고 했어요.'},
       {t:'떡국을 먹고 무엇을 할 거예요?', o:['윷놀이','숨바꼭질','수영'], a:'윷놀이', why:'할머니는 ‘다 같이 윷놀이하자’라고 하셨어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 말하는지 잘 보고 대답해 봐.',
     qs:[
       {line:{who:'halmi', t:'토리야, 새해 복 많이 받아라.'}, en:'Tori, Happy New Year.', o:['할머니도 새해 복 많이 받으세요.','너도 새해 복 많이 받아.'], a:'할머니도 새해 복 많이 받으세요.', why:'어른께는 받으세요로 되돌려 드려요.'},
       {line:{who:'moi', t:'토리야, 새해 복 많이 받아!'}, en:'Tori, Happy New Year!', o:['너도 새해 복 많이 받아!','새해 복 많이 받으세요.'], a:'너도 새해 복 많이 받아!', why:'모이는 친구라서 편한 말로 해요.'},
       {pic:'seol_money', t:'할머니께서 세뱃돈을 주세요. 어떻게 받아요?', en:'Grandma gives you New Year money.', o:['두 손으로 받으며 감사합니다.','한 손으로 받으며 고마워.'], a:'두 손으로 받으며 감사합니다.', why:'어른께 받을 때는 두 손으로 받아요.'}]},
    {type:'task', title:'우리 집 설날', who:'moi',
     t:'설날이 오면, 아니면 오늘 연습으로 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'할머니 할아버지께 절하며', say:'새해 복 많이 받으세요.', sub:'영상 통화로 해도 좋아요.'},
       {when:'세뱃돈이나 선물을 받을 때', say:'감사합니다.', sub:'두 손으로 받아요.'},
       {when:'떡국을 먹으며', say:'떡국을 먹으면 한 살 더 먹어요!', sub:'가족과 윷놀이도 해 봐요.'}],
     parent:'설날에 조부모님께 세배를 드리거나, 멀리 계시면 영상 통화로 새해 인사를 드리게 해 주세요. 세배는 남자아이와 여자아이의 절하는 방법이 조금 다르니 부모님이 한 번 보여 주시면 좋습니다. 설날 아침에 조상께 차례를 지내는 집도 있고, 교회나 성당에 가거나 가족끼리 떡국만 나누는 집도 있습니다. 어느 쪽이든 집안의 방식대로 설명해 주시면 됩니다. 한국은 2023년부터 공식적으로 만 나이를 쓰지만, "떡국 먹으면 한 살 더 먹는다"는 말은 지금도 설날의 정다운 인사로 쓰입니다.'}
  ],
  dictWords:[] },

/* ---- 넷째 묶음: 추석 ---------------------------------------------
   추석(한가위), 송편, 보름달, 강강술래, 소원과 추석 인사.
   둘째 밤에 송편 빚는 순서와 소원 빌기(~게 해 주세요)를 익힙니다.
   셋째 밤에 달 속 토끼가 떡방아를 찧는 옛이야기로 사이트 이름 달토끼와 토리의 뿌리를 풀어 줍니다.
   약속대로 성묘와 차례는 부모님 안내에서만 짧게 소개합니다. */
{ n:10, bundle:4, title:'추석이에요',
  steps:[
    {type:'intro', who:'moi',
     t:'설날만큼 큰 명절이 또 있어. 바로 추석! 가을에 가족이 모여 햇곡식으로 음식을 만들고 보름달을 보는 날이야.',
     big:'즐거운 추석 보내세요'},
    {type:'pairs', title:'추석에 만나는 말', who:'moi',
     t:'추석에 보고 듣는 것이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'추석', pic:'chu_family', en:'Chuseok (harvest festival)'}, {w:'한가위', pic:'chu_fullmoon', en:'another name for Chuseok'},
       {w:'송편', pic:'chu_songpyeon', en:'half-moon rice cakes'}, {w:'보름달', pic:'chu_fullmoon', en:'full moon'},
       {w:'강강술래', pic:'chu_ganggang', en:'ganggangsullae (circle dance)'}, {w:'소원', pic:'chu_wish', en:'wish'}],
     tip:{who:'dami', t:'추석은 음력 팔월 보름, 한 해 가운데 달이 가장 밝고 둥근 날이란다. 양력으로는 보통 구월이나 시월에 오지. 한가위는 추석을 부르는 또 다른 이름이란다.'}},
    {type:'pairs', title:'추석 인사', who:'dami',
     t:'추석에 나누는 인사란다.',
     pairs:[{when:'추석 인사', pic:'chu_fullmoon', friend:'즐거운 추석 보내!', elder:'즐거운 추석 보내세요.', en:'Have a happy Chuseok!'}]},
    {type:'choose', title:'추석의 말', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'chu_songpyeon', o:['떡국','송편','떡볶이'], a:'송편', why:'추석에는 송편, 설날에는 떡국이에요.'},
       {pic:'chu_ganggang', o:['강강술래','윷놀이','숨바꼭질'], a:'강강술래', why:'보름달 아래에서 손을 잡고 둥글게 도는 놀이예요.'},
       {pic:'chu_fullmoon', o:['보름달','해','별'], a:'보름달'},
       {pic:'seol_tteokguk', t:'설날에 먹는 음식은?', o:['떡국','송편'], a:'떡국', why:'떡국은 설날, 송편은 추석이에요.'},
       {pic:'p_grandpa', t:'추석에 할아버지께 인사해요.', o:['즐거운 추석 보내!','즐거운 추석 보내세요.'], a:'즐거운 추석 보내세요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'소원', o:['chu_wish','chu_songpyeon','chu_ganggang'], a:'chu_wish'},
       {say:'송편', o:['seol_tteokguk','chu_songpyeon','f_tteok'], a:'chu_songpyeon'},
       {say:'강강술래', o:['chu_ganggang','seol_yut','pl5_together'], a:'chu_ganggang'},
       {say:'설날', o:['chu_family','seol_family'], a:'seol_family'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'추석 말을 써 봐.',
     items:[{w:'추석', en:'Chuseok'}, {w:'송편', en:'songpyeon'}, {w:'소원', en:'wish'}]}
  ],
  dictWords:[{w:'추석', en:'Chuseok'}, {w:'한가위', en:'Hangawi'}, {w:'송편', en:'songpyeon'}, {w:'보름달', en:'full moon'}, {w:'소원', en:'wish'}] },

{ n:11, bundle:4, title:'소원을 빌어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 송편을 빚고 보름달에 소원을 빌 거야. 소원은 ‘~게 해 주세요’로 말해.',
     big:'한국어를 잘하게 해 주세요'},
    {type:'sequence', title:'송편 빚는 순서', who:'moi',
     t:'송편 만드는 순서가 섞였어. 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'chu_s_dough', t:'반죽을 동그랗게 빚어요.'}, {pic:'chu_s_fill', t:'가운데에 소를 넣어요.'}, {pic:'chu_s_shape', t:'반달 모양으로 빚어요.'}, {pic:'chu_s_steam', t:'솔잎을 깔고 쪄요.'}]}]},
    {type:'tense', title:'소원을 말해요', who:'dami',
     t:'바라는 것을 빌 때는 요 앞부분에 게 해 주세요를 붙인단다. 받침이 있어도 없어도 늘 게야.',
     cols:['지금', '소원'],
     groups:[
       {rule:'게 해 주세요', rows:[['건강해요','건강하게 해 주세요'], ['행복해요','행복하게 해 주세요'], ['잘해요','잘하게 해 주세요'], ['커요','크게 해 주세요'], ['많아요','많게 해 주세요']]}],
     note:'받침 삼 형제와 달리 게는 받침을 따지지 않는단다. 크게, 많게, 건강하게. 그리고 소원은 나보다 다른 사람을 위해 빌 때 더 빛나는 법이지.'},
    {type:'choose', title:'어떤 소원일까요?', who:'tori',
     t:'소원을 바르게 말한 쪽을 골라 봐.',
     qs:[
       {pic:'p_grandma', o:['할머니가 건강하게 해 주세요.','할머니가 건강해 해 주세요.'], a:'할머니가 건강하게 해 주세요.', en:'Please let Grandma be healthy.'},
       {pic:'s_hangeul', o:['한국어를 잘하게 해 주세요.','한국어를 잘하게 주세요.'], a:'한국어를 잘하게 해 주세요.', en:'Please let me be good at Korean.'},
       {pic:'seol_family', o:['우리 가족이 행복하게 해 주세요.','우리 가족이 행복하게 해.'], a:'우리 가족이 행복하게 해 주세요.', en:'Please let my family be happy.', why:'소원은 높이는 말로 빌어요.'},
       {pic:'chu_s_shape', t:'송편은 어떤 모양이에요?', o:['반달 모양이에요.','네모 모양이에요.'], a:'반달 모양이에요.', en:"It's a half-moon shape."}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'추석에 가족이 모여요.', tiles:['추석에','가족이','모여요.'], en:'Families gather on Chuseok.'},
       {s:'보름달에 소원을 빌어요.', tiles:['보름달에','소원을','빌어요.'], extra:['소원를'], en:'I make a wish on the full moon.'},
       {s:'송편을 반달 모양으로 빚어요.', tiles:['송편을','반달','모양으로','빚어요.'], en:'I shape songpyeon into a half moon.'},
       {s:'할머니가 건강하게 해 주세요.', tiles:['할머니가','건강하게','해','주세요.'], extra:['건강해'], en:'Please let Grandma be healthy.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'추석 말에도 소리 비밀이 숨어 있단다.',
     cmp:[
       {s:'보름달', d:'보름딸', n:'두 말이 붙으면서 뒤의 ㄷ이 ㄸ처럼 나요'},
       {s:'추석에', d:'추서게', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'빌어요', d:'비러요', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'송편을', d:'송펴늘', n:'ㄴ 받침이 뒤로 건너가요'}],
     note:'보름과 달이 붙은 보름달은 [보름딸]로 소리 난단다. 설날의 세뱃돈이 [세배똔]인 것과 비슷하지. 두 말이 붙어 한 말이 되면 뒤가 세게 나기도 한단다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'보름달', en:'full moon', hint:{who:'dami', t:'소리는 [보름딸]이지만 ‘보름’과 ‘달’이란다. ㄸ이 아니라 ㄷ을 쓰거라.'}},
       {w:'빌어요', en:'wish, pray', hint:{who:'dami', t:'소리는 [비러요]지만 ‘빌’에 받침 ㄹ이 있단다.'}},
       {w:'건강', en:'health'}]}
  ],
  dictWords:[{w:'빌어요', en:'make a wish'}, {w:'건강', en:'health'}, {w:'반달', en:'half moon'}, {w:'행복', en:'happiness'}] },

{ n:12, bundle:4, title:'달토끼 이야기',
  steps:[
    {type:'intro', who:'tori',
     t:'추석 밤, 할머니 댁 마당에서 보름달을 봐. 오늘은 달토끼라는 이름에 숨은 이야기를 들을 거야. 먼저 글자 없이 귀로만 들어 봐.',
     big:'달에 토끼가 살아요?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 보름달 속에 무엇이 있는지 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'와, 보름달이 아주 커요!', en:'Wow, the full moon is so big!'},
       {who:'halmi', t:'저 달을 잘 보거라. 무엇이 보이니?', en:'Look closely at the moon. What do you see?'},
       {who:'tori', t:'음, 토끼가 보여요! 방아를 찧어요!', en:"Hmm, I see a rabbit! It's pounding with a mortar!"},
       {who:'halmi', t:'그렇단다. 옛날부터 달에는 토끼가 계수나무 아래에서 떡방아를 찧는다고 했지. 그 토끼를 달토끼라고 부른단다.', en:'That is right. Since long ago, people have said a rabbit pounds rice cakes under a laurel tree on the moon. We call it the moon rabbit.'},
       {who:'moi', t:'토리야, 너도 토끼잖아! 혹시 저 토끼가 너야?', en:"Tori, you're a rabbit too! Could that rabbit be you?"},
       {who:'tori', t:'헤헤, 나는 밤마다 한국어 방아를 찧는 달토끼야!', en:"Hehe, I'm a moon rabbit who pounds Korean every night!"},
       {who:'halmi', t:'허허, 그래서 밤마다 한 밤씩 달을 채웠구나.', en:'Ho ho, so that is why you filled the moon one night at a time.'},
       {who:'tori', t:'할머니, 저도 소원을 빌래요. 한국어를 더 잘하게 해 주세요!', en:'Grandma, I want to make a wish too. Please let me get even better at Korean!'}],
     note:{who:'halmi', t:'첫째 달부터 토리가 방아를 찧어 보자고 했지? 방아를 찧으면 곡식이 떡이 되듯, 날마다 한 밤씩 배우면 말이 쌓인단다. 달이 한 밤씩 차서 보름달이 되는 것처럼 말이야. 그게 달토끼라는 이름의 뜻이란다.'}},
    {type:'sequence', title:'추석 하루', who:'moi',
     t:'토리의 추석 하루를 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'chu_family', t:'가족이 모였어요.'}, {pic:'chu_s_shape', t:'송편을 빚었어요.'}, {pic:'chu_ganggang', t:'강강술래를 했어요.'}, {pic:'chu_moonrabbit', t:'보름달을 보며 소원을 빌었어요.'}]}]},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'보름달 속에 무엇이 보여요?', o:['토끼','거북이','까치'], a:'토끼'},
       {t:'달토끼는 무엇을 해요?', o:['떡방아를 찧어요','수영을 해요','잠을 자요'], a:'떡방아를 찧어요'},
       {t:'달토끼는 무슨 나무 아래에 있어요?', o:['계수나무','사과나무','소나무'], a:'계수나무', why:'할머니는 ‘계수나무 아래에서’라고 하셨어요.'},
       {t:'토리의 소원은 무엇이에요?', o:['한국어를 더 잘하게 해 주세요','떡을 많이 먹게 해 주세요'], a:'한국어를 더 잘하게 해 주세요'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'chu_moonrabbit', line:{who:'halmi', t:'토리야, 달에 무엇이 보이니?'}, en:'Tori, what do you see on the moon?', o:['토끼가 보여요.','토끼가 보여.'], a:'토끼가 보여요.', why:'할머니께는 보여요로 대답해요.'},
       {pic:'chu_songpyeon', line:{who:'moi', t:'토리야, 송편 몇 개 먹었어?'}, en:'Tori, how many songpyeon did you eat?', o:['세 개 먹었어.','삼 개 먹었어.'], a:'세 개 먹었어.', why:'물건은 하나, 둘로 세요.'},
       {pic:'chu_wish', t:'보름달에 가족을 위해 소원을 빌어요.', en:'Make a wish for your family.', o:['우리 가족이 건강하게 해 주세요.','우리 가족이 건강해.'], a:'우리 가족이 건강하게 해 주세요.'}]},
    {type:'task', title:'보름달 소원', who:'moi',
     t:'보름달이 뜨는 날 밤에 해 봐. 추석이 아니어도 보름달이면 돼. 다 하면 했어요를 눌러.',
     lines:[
       {when:'가족과 달을 보며', say:'달에 토끼가 보여요!', sub:'무엇이 보이는지 서로 말해 봐요.'},
       {when:'소원을 빌어요', say:'______게 해 주세요.', sub:'가족을 위한 소원도 하나: 할머니가 건강하게 해 주세요.'},
       {when:'가족에게 이야기를 들려줘요', say:'달에는 토끼가 떡방아를 찧어요.', sub:'달토끼 이야기를 한국어로 짧게 들려줘요.'}],
     parent:'보름달이 뜨는 날 아이와 함께 달을 보며 "토끼가 보여요?"라고 물어봐 주세요. 한국에서는 달의 어두운 무늬를 계수나무 아래에서 방아를 찧는 토끼로 보아 왔습니다. 추석은 음력 팔월 보름으로 보통 구월이나 시월에 옵니다. 추석에는 조상의 산소에 가거나(성묘) 차례를 지내는 집도 있고, 가족끼리 음식을 나누며 지내는 집도 있으니 집안의 방식대로 이야기해 주시면 됩니다. 송편 대신 반달 모양 쿠키나 떡을 사서 함께 먹으며 이야기해도 충분합니다.'}
  ],
  dictWords:[] },

/* ---- 다섯째 묶음: 세종대왕과 한글 ---------------------------------
   세종대왕이 백성을 위해 한글(훈민정음)을 만든 이야기, 모음(하늘, 땅, 사람)과 자음(입, 이, 목구멍 모양)의 짜임, 한글날.
   역사는 교과서에 나오는 사실만 씁니다. 연도는 숫자 부담을 줄이려고 "오백 년도 더 전"으로 말합니다.
   셋째 밤은 한글학교 한글날 발표. 첫째 달에 한글을 떼던 아이가 여섯째 달에 한글을 소개하며 한 바퀴가 닫힙니다. */
{ n:13, bundle:5, title:'세종대왕',
  steps:[
    {type:'intro', who:'dami',
     t:'여섯째 달 마지막 묶음이란다. 첫째 달에 배운 한글, 그 한글은 누가 왜 만들었을까? 오늘은 그 이야기를 해 주마.',
     big:'한글을 만든 세종대왕'},
    {type:'pairs', title:'한글 이야기에 나오는 말', who:'moi',
     t:'오늘 이야기에 나오는 말이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'세종대왕', pic:'hg_king', en:'King Sejong the Great'}, {w:'왕', pic:'hg_king', en:'king'},
       {w:'백성', pic:'hg_people', en:'the common people'}, {w:'한자', pic:'hg_hanja', en:'Chinese characters'},
       {w:'한글', pic:'hg_hangeul', en:'Hangul, the Korean alphabet'}, {w:'글자', pic:'hg_hangeul', en:'letter, character'},
       {w:'한글날', pic:'cal10_9', en:'Hangul Day (October 9)'}],
     tip:{who:'dami', t:'오백 년도 더 전, 조선이라는 나라에 세종대왕이 계셨단다. 그때는 한자로만 글을 썼는데, 한자는 너무 많고 어려워서 백성 대부분이 글을 읽지 못했지. 세종대왕은 백성이 쉽게 배우는 글자를 만들고 싶어 하셨단다.'}},
    {type:'sequence', title:'한글이 생긴 이야기', who:'tori',
     t:'한글이 생긴 이야기를 차례대로 눌러 봐.',
     qs:[
       {cards:[{pic:'hg_hanja', t:'옛날에는 한자로만 글을 썼어요.'}, {pic:'hg_people', t:'백성은 한자가 어려워서 글을 못 읽었어요.'}, {pic:'hg_king', t:'세종대왕이 새 글자를 만들었어요.'}, {pic:'hg_hangeul', t:'누구나 쉽게 한글을 읽고 써요.'}]}]},
    {type:'choose', title:'한글 이야기', who:'tori',
     t:'알맞은 말을 골라 봐.',
     qs:[
       {pic:'hg_king', t:'한글을 만든 사람은 누구예요?', o:['세종대왕','토리','담이 할아버지'], a:'세종대왕'},
       {pic:'hg_people', t:'세종대왕은 누구를 위해 한글을 만들었어요?', o:['백성','왕','친구'], a:'백성', why:'한자를 모르는 백성을 위해 만들었어요.'},
       {pic:'cal10_9', t:'한글날은 언제예요?', o:['시월 구일','유월 십오일','삼월 오일'], a:'시월 구일', why:'넷째 달에 나온 모이 생일과 같은 날이에요.'},
       {pic:'mo10000', t:'세종대왕은 한국 돈 어디에 있어요?', o:['만 원','천 원','백 원'], a:'만 원', why:'세종대왕은 만 원짜리 지폐에 있어요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'백성', o:['hg_king','hg_people','hg_hangeul'], a:'hg_people'},
       {say:'한자', o:['hg_hanja','hg_hangeul','hg_book'], a:'hg_hanja'},
       {say:'세종대왕', o:['hg_people','p_grandpa','hg_king'], a:'hg_king'},
       {say:'한글', o:['hg_hangeul','hg_hanja','t_book'], a:'hg_hangeul'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'한글 이야기의 말을 써 봐.',
     items:[{w:'한글', en:'Hangul'}, {w:'왕', en:'king'}, {w:'글자', en:'letter', hint:{who:'dami', t:'소리는 [글짜]지만 글자는 ‘자’란다. ㄹ 받침 뒤라서 세게 들리지.'}}]}
  ],
  dictWords:[{w:'한글', en:'Hangul'}, {w:'세종대왕', en:'King Sejong'}, {w:'왕', en:'king'}, {w:'백성', en:'the people'},
             {w:'한자', en:'Chinese characters'}, {w:'글자', en:'letter'}, {w:'한글날', en:'Hangul Day'}] },

{ n:14, bundle:5, title:'하늘, 땅, 사람',
  steps:[
    {type:'intro', who:'tori',
     t:'한글은 아무렇게나 만든 글자가 아니야. 모음은 하늘, 땅, 사람을 보고, 자음은 말할 때 입과 혀 모양을 보고 만들었어!',
     big:'하늘, 땅, 사람'},
    {type:'pairs', title:'모음의 세 뿌리', who:'dami',
     t:'모음은 세 가지로 시작한단다. 둥근 하늘, 평평한 땅, 서 있는 사람.',
     singles:[
       {w:'하늘', pic:'hg_sky', en:'sky (the round dot ·)'}, {w:'땅', pic:'hg_earth', en:'earth (the flat line ㅡ)'}, {w:'사람', pic:'hg_person', en:'person (the standing line ㅣ)'}],
     tip:{who:'dami', t:'사람(ㅣ) 오른쪽에 하늘(점)을 찍으면 ㅏ, 왼쪽에 찍으면 ㅓ. 땅(ㅡ) 위에 찍으면 ㅗ, 아래에 찍으면 ㅜ란다. 지금은 점이 짧은 줄이 되었지.'}},
    {type:'pairs', title:'자음은 소리 내는 모양', who:'dami',
     t:'자음은 소리를 낼 때 입, 이, 목구멍의 모양을 본떴단다.',
     singles:[
       {w:'미음, 입 모양', pic:'hg_mouth', en:'ㅁ looks like a mouth'}, {w:'시옷, 이 모양', pic:'hg_tooth', en:'ㅅ looks like a tooth'},
       {w:'이응, 목구멍 모양', pic:'hg_throat', en:'ㅇ looks like the throat'}],
     tip:{who:'tori', t:'ㄱ은 혀뿌리가 목구멍을 막는 모양, ㄴ은 혀끝이 윗잇몸에 닿는 모양이래. 거울 보고 ㄱ, ㄴ, ㅁ을 소리 내 봐!'}},
    {type:'choose', title:'어떻게 만들었을까요?', who:'tori',
     t:'한글의 짜임을 떠올리며 골라 봐.',
     qs:[
       {pic:'hg_person', t:'ㅣ는 무엇을 본떴어요?', o:['사람','하늘','땅'], a:'사람'},
       {pic:'hg_earth', t:'ㅡ는 무엇을 본떴어요?', o:['하늘','땅','사람'], a:'땅'},
       {t:'ㅏ는 무엇과 무엇을 합쳤어요?', o:['사람과 하늘','땅과 하늘'], a:'사람과 하늘', why:'ㅣ(사람) 오른쪽에 점(하늘)이 붙어서 ㅏ예요.'},
       {t:'ㅗ는 무엇과 무엇을 합쳤어요?', o:['사람과 하늘','땅과 하늘'], a:'땅과 하늘', why:'ㅡ(땅) 위에 점(하늘)이 붙어서 ㅗ예요.'},
       {pic:'hg_mouth', t:'이 모양을 본뜬 자음은?', o:['ㅁ','ㅅ','ㅇ'], a:'ㅁ'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'세종대왕이 한글을 만들었어요.', tiles:['세종대왕이','한글을','만들었어요.'], extra:['만들 거예요.'], en:'King Sejong made Hangul.'},
       {s:'백성을 위해 만들었어요.', tiles:['백성을','위해','만들었어요.'], en:'He made it for the people.'},
       {s:'한글은 배우기 아주 쉬워요.', tiles:['한글은','배우기','아주','쉬워요.'], en:'Hangul is very easy to learn.'},
       {s:'한글날은 시월 구일이에요.', tiles:['한글날은','시월','구일이에요.'], extra:['십월'], en:'Hangul Day is October 9.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'한글 이야기에도 소리 비밀이 있단다. 설날과 같은 비밀도 하나 숨어 있지.',
     cmp:[
       {s:'한글날', d:'한글랄', n:'ㄹ 뒤의 ㄴ이 ㄹ처럼 나요'},
       {s:'글자', d:'글짜', n:'ㄹ 받침 뒤의 ㅈ이 ㅉ처럼 나요'},
       {s:'백성', d:'백썽', n:'ㄱ 받침 뒤의 ㅅ이 ㅆ처럼 나요'},
       {s:'만들었어요', d:'만드러써요', n:'ㄹ과 ㅆ이 차례로 건너가요'}],
     note:'한글날의 [한글랄]은 설날의 [설랄]과 같은 이치란다. 여섯 달 동안 만난 소리 비밀을 모두 알면, 들리는 것과 쓰는 것이 왜 다른지 이제 스스로 풀 수 있을 게야.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'한글날', en:'Hangul Day', hint:{who:'dami', t:'소리는 [한글랄]이지만 ‘한글’과 ‘날’이란다.'}},
       {w:'백성', en:'the people', hint:{who:'dami', t:'소리는 [백썽]이지만 ‘성’이란다.'}},
       {w:'하늘', en:'sky'}]}
  ],
  dictWords:[{w:'하늘', en:'sky'}, {w:'땅', en:'earth'}, {w:'사람', en:'person'}, {w:'자음', en:'consonant'}, {w:'모음', en:'vowel'}] },

{ n:15, bundle:5, title:'한글날 발표',
  steps:[
    {type:'intro', who:'tori',
     t:'여섯째 달 마지막 밤이야. 오늘은 한글날, 한글학교에서 모이랑 한글 발표를 해! 먼저 글자 없이 귀로만 들어 봐.',
     big:'한글을 소개할게요'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리와 모이가 여섯 달 동안 배운 말로 한글을 소개해. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'dami', t:'오늘은 한글날이에요. 토리와 모이가 발표를 할 거예요.', en:"Today is Hangul Day. Tori and Moi will give a presentation."},
       {who:'tori', t:'안녕하세요. 저는 토리예요. 오늘은 한글을 소개할게요.', en:"Hello. I'm Tori. Today I'll introduce Hangul."},
       {who:'tori', t:'한글은 세종대왕이 백성을 위해 만들었어요. 그전에는 글이 아주 어려웠어요.', en:'King Sejong made Hangul for the people. Before that, writing was very hard.'},
       {who:'moi', t:'모음은 하늘, 땅, 사람을 보고 만들었어요. 점이 하늘, ㅡ가 땅, ㅣ가 사람이에요.', en:'Vowels were made from sky, earth, and person. The dot is sky, ㅡ is earth, ㅣ is person.'},
       {who:'tori', t:'자음은 입과 혀 모양을 보고 만들었어요. ㅁ은 입 모양이에요.', en:'Consonants were made from the shapes of the mouth and tongue. ㅁ is the shape of a mouth.'},
       {who:'moi', t:'그래서 한글은 한자보다 훨씬 쉬워요. 스물네 글자로 거의 모든 소리를 쓸 수 있어요!', en:'So Hangul is much easier than Chinese characters. With 24 letters you can write almost any sound!'},
       {who:'tori', t:'저도 첫째 달에 한글을 배웠어요. 이제는 한국어로 발표도 할 수 있어요!', en:'I learned Hangul in my first month too. Now I can even give a presentation in Korean!'},
       {who:'dami', t:'참 잘했어요! 여러분, 큰 박수!', en:'Very well done! Everyone, a big round of applause!'}],
     note:{who:'dami', t:'여섯 달 전, 토리는 ㄱ, ㄴ, ㄷ부터 배웠지. 그 한글로 인사하고, 가족을 부르고, 하루를 말하고, 어제와 내일을 잇고, 한국에 다녀오고, 이제는 한글을 남에게 설명하는구나. 세종대왕께서 바라신 것이 바로 이런 게 아니었을까.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 발표를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'오늘은 무슨 날이에요?', o:['한글날','설날','추석'], a:'한글날'},
       {t:'모음 ㅡ는 무엇을 본떴어요?', o:['하늘','땅','사람'], a:'땅', why:'모이는 ‘ㅡ가 땅’이라고 했어요.'},
       {t:'ㅁ은 무슨 모양이에요?', o:['입 모양','이 모양','목구멍 모양'], a:'입 모양', why:'토리는 ‘ㅁ은 입 모양이에요’라고 했어요.'},
       {t:'한글은 몇 글자로 거의 모든 소리를 써요?', o:['스물네 글자','열 글자','백 글자'], a:'스물네 글자', why:'모이는 ‘스물네 글자로’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'hg_king', line:{who:'dami', t:'토리, 한글은 누가 만들었어요?'}, en:'Tori, who made Hangul?', o:['세종대왕이 만들었어요.','세종대왕이 만들 거예요.'], a:'세종대왕이 만들었어요.', why:'옛날 일이라서 만들었어요예요.'},
       {pic:'hg_hangeul', line:{who:'moi', t:'토리야, 한글 쉬워?'}, en:'Tori, is Hangul easy?', o:['응, 아주 쉬워!','응, 아주 쉬워요!'], a:'응, 아주 쉬워!', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'cal10_9', t:'할머니께 한글날을 알려 드려요.', en:'Tell Grandma the date of Hangul Day.', o:['한글날은 시월 구일이에요.','한글날은 십월 구일이에요.'], a:'한글날은 시월 구일이에요.', why:'10월은 시월이에요.'}]},
    {type:'task', title:'나의 한글 발표', who:'moi',
     t:'여섯째 달 마지막 과제야. 가족 앞에서 한글을 소개하는 발표를 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'인사하고 시작해요', say:'안녕하세요. 오늘은 한글을 소개할게요.', sub:'가족을 청중으로 모셔요.'},
       {when:'한글 이야기', say:'한글은 세종대왕이 백성을 위해 만들었어요.', sub:'모음은 하늘, 땅, 사람, 자음은 입과 혀 모양.'},
       {when:'나의 이야기로 끝내요', say:'저는 ______에 한글을 배웠어요. 이제 ______.', sub:'이제 한국어로 무엇을 할 수 있는지 말해요.'}],
     parent:'여섯째 달의 마무리 과제입니다. 아이가 가족 앞에서 한글을 소개하는 짧은 발표를 하게 해 주세요. 종이에 ㅏ, ㅗ를 그려 하늘, 땅, 사람으로 설명하게 하면 더 좋습니다. 한글날(10월 9일)은 한국의 국경일로, 한글학교에서도 글짓기나 발표 행사를 많이 합니다. 발표를 영상으로 찍어 조부모님께 보내 드리면 아이에게 큰 자랑이 됩니다. 이 과제로 여섯째 달이 끝납니다. 비교하기, 설명하기, 설날, 추석, 한글 이야기까지 모두 해냈으니 많이 칭찬해 주세요.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인 ----
   묶음마다 세 문제, 두 문제 이상 맞히면 그 묶음을 건너뜁니다. */
const M6_CHECK = [
  {k:1, qs:[
    {mode:'pic', say:'더 커요', t:'둘 가운데 더 큰 쪽을 눌러요.', o:['mouse','elephant'], a:'elephant'},
    {pic:'cmp_three', t:'셋 가운데 누가 제일 커요?', o:['기린이 더 커요.','기린이 제일 커요.'], a:'기린이 제일 커요.'},
    {t:'빨라요의 반대말은?', o:['느려요','짧아요','낮아요'], a:'느려요'}]},
  {k:2, qs:[
    {mode:'pic', say:'작은 가방', t:'듣고 그림을 골라요.', o:['bag_big','bag_small'], a:'bag_small'},
    {pic:'big', t:'바르게 꾸민 말은?', o:['큰 코끼리','커 코끼리'], a:'큰 코끼리'},
    {pic:'glasses', t:'할아버지는 안경을 ______.', o:['써요','입어요'], a:'써요'}]},
  {k:3, qs:[
    {mode:'pic', say:'떡국', t:'듣고 그림을 골라요.', o:['chu_songpyeon','seol_tteokguk'], a:'seol_tteokguk'},
    {pic:'p_grandma', t:'설날 아침, 할머니께 인사해요.', o:['새해 복 많이 받아!','새해 복 많이 받으세요.'], a:'새해 복 많이 받으세요.'},
    {pic:'seol_money', t:'세뱃돈은 어떻게 받아요?', o:['두 손으로 받아요.','한 손으로 받아요.'], a:'두 손으로 받아요.'}]},
  {k:4, qs:[
    {mode:'pic', say:'송편', t:'듣고 그림을 골라요.', o:['seol_tteokguk','chu_songpyeon','f_tteok'], a:'chu_songpyeon'},
    {pic:'chu_moonrabbit', t:'달에서 누가 방아를 찧어요?', o:['토끼','거북이','까치'], a:'토끼'},
    {pic:'p_grandma', t:'할머니를 위해 소원을 빌어요.', o:['할머니가 건강하게 해 주세요.','할머니가 건강해 해 주세요.'], a:'할머니가 건강하게 해 주세요.'}]},
  {k:5, qs:[
    {pic:'hg_king', t:'한글을 만든 사람은?', o:['세종대왕','토리','모이'], a:'세종대왕'},
    {pic:'cal10_9', t:'한글날은 언제예요?', o:['십월 구일','시월 구일'], a:'시월 구일'},
    {pic:'hg_person', t:'모음 ㅣ는 무엇을 본떴어요?', o:['하늘','땅','사람'], a:'사람'}]}
];

/* ---- 받아쓰기 자판: 다섯째 달과 같습니다 ---- */
const M6_POOL = M5_POOL;

/* 달 등록 정보 */
const SIXTH_MOON = {
  key: 'sixth-moon', title: '여섯째 달', path: 'sixth-moon/',
  store: 'daltokki:v1:sixth-moon',
  units: M6_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M6_POOL,
  num: 6, name: '여섯째 달', title2: '여섯째 달, 한국을 알아요', nextName: '일곱째 달',
  topics: '비교하기, 설명하기, 설날, 추석, 세종대왕과 한글',
  nights: M6_NIGHTS, bundles: M6_BUNDLES, pic: M6_PIC, keys: M6_POOL, total: M6_TOTAL, check: M6_CHECK,
  prev: {store: 'daltokki:v1:fifth-moon', total: 15},
  text: {
    welcomePrev: '다섯째 달을 다 채웠구나. 이번 달에는 무엇이 어떤지 설명하고, 한국의 설날과 추석, 한글 이야기를 해. 여섯 달 동안 배운 말로 한국을 소개해 보자. 열다섯 밤이면 보름달이 떠.',
    welcomeFresh: '여섯째 달에서는 견주고 설명하고, 한국 명절과 한글 이야기를 해. 다섯째 달의 이야기 잇기를 알고 오면 훨씬 쉬워. 이미 한국어를 꽤 잘하면 여기서 시작해도 돼.',
    parents: '여섯째 달은 비교하기, 설명하기, 설날, 추석, 세종대왕과 한글의 다섯 묶음으로, 묶음마다 세 밤입니다. 명절은 세배, 떡국, 송편, 한복, 놀이, 보름달 소원처럼 모든 가정이 함께할 수 있는 내용으로 다루고, 차례와 성묘는 부모님 안내에서만 짧게 소개합니다.'
  }
};
