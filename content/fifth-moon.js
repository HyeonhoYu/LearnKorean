/* ══════════════════════════════════════════════════════════════
   다섯째 달, 한국에 가요 (4단계)
   문장을 이어서 이야기로 만드는 달입니다. 그 이야기를 들고 한국에 갑니다.
   다섯 묶음: 그리고, 그래서(이야기 잇기), 같이 놀자(친구), 한국에 갈 거예요(앞날 말하기),
   이거 얼마예요?(돈), 할머니 댁까지(한국 방문).

   이 파일은 content/second-moon.js, third-moon.js, fourth-moon.js 다음에 불러옵니다.
   앞 달의 그림(M4_PIC 안에 M3_PIC, M2_PIC 포함)을 그대로 빌려 쓰고, 다섯째 달 그림만 M5_ONLY 에 더합니다.
   돈은 백, 천, 만의 이름과 딱 떨어지는 값(오백 원, 천 원, 오천 원, 만 원)까지만 다룹니다.
   ══════════════════════════════════════════════════════════════ */

const M5_TOTAL = 15;

/* ---- 첫째 묶음 그림: 잇는 말과 그림일기 ---- */
const m5Icon = (label, inner) => `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">
  <rect x="30" y="12" width="140" height="106" rx="16" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/>${inner}</svg>`;
const M5_ONLY = {
  /* 그리고: 두 카드를 더하기, 그래서: 앞 일에서 뒤 일로 가는 화살표, 그런데: 길이 꺾이는 화살표 */
  and: m5Icon('그리고', `<rect x="46" y="40" width="36" height="50" rx="6" fill="#9DC3DC" stroke="#221F1C" stroke-width="2.4"/>
    <rect x="118" y="40" width="36" height="50" rx="6" fill="#F2C14E" stroke="#221F1C" stroke-width="2.4"/>
    <path d="M100 52 L100 78 M87 65 L113 65" stroke="#C1403A" stroke-width="6" stroke-linecap="round"/>`),
  so: m5Icon('그래서', `<circle cx="62" cy="65" r="18" fill="#6FA8D0" stroke="#221F1C" stroke-width="2.4"/>
    <path d="M58 56 Q54 64 58 70 Q64 64 58 56 Z" fill="#FBF7EC"/>
    <path d="M86 65 L124 65" stroke="#C1403A" stroke-width="6" stroke-linecap="round"/><path d="M114 54 L126 65 L114 76" stroke="#C1403A" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M134 74 Q148 46 162 74 Q148 68 134 74 Z" fill="#E3A93C" stroke="#221F1C" stroke-width="2.4"/><path d="M148 70 L148 90" stroke="#221F1C" stroke-width="3"/>`),
  but: m5Icon('그런데', `<path d="M50 90 L96 50 L112 70 L150 34" stroke="#2D6E8E" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M138 32 L152 32 L152 46" stroke="#2D6E8E" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="96" cy="50" r="6" fill="#C1403A" stroke="#221F1C" stroke-width="2"/>`),
  diary: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="그림일기">
    <rect x="30" y="10" width="140" height="112" rx="6" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/>
    <rect x="42" y="20" width="116" height="56" fill="#CFE0EA" stroke="#221F1C" stroke-width="2"/>
    <circle cx="140" cy="36" r="8" fill="#F2C14E"/><path d="M50 72 L76 48 L96 66 L110 56 L150 72 Z" fill="#6E8F58"/>
    ${[86, 98, 110].map(y => `<path d="M44 ${y} L156 ${y}" stroke="#C9C0AE" stroke-width="2"/>`).join('')}
    <path d="M48 84 q10 -4 20 0 t20 0 M48 96 q10 -4 20 0 t20 0 t20 0" stroke="#17324A" stroke-width="1.8" fill="none"/></svg>`,
  lost: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="잃어버렸어요">${m2Ground}
    ${m2Person('kid', 80, 'stand', 1)}
    <path d="M120 40 Q132 26 146 40" stroke="#221F1C" stroke-width="3" fill="none"/>
    <text x="134" y="70" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="36" fill="#C1403A">?</text>
    <path d="M150 104 Q162 90 174 104 Q168 100 162 104 Q156 100 150 104 Z" fill="#E3A93C" stroke="#221F1C" stroke-width="2" opacity=".4" stroke-dasharray="4 3"/></svg>`,
  found: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="찾았어요">${m2Ground}
    <rect x="136" y="70" width="12" height="52" fill="#8A6A4A" stroke="#221F1C" stroke-width="2"/><circle cx="142" cy="54" r="32" fill="#6E8F58" stroke="#221F1C" stroke-width="2.6"/>
    <g transform="translate(150 108) rotate(-20)"><path d="M-16 0 Q0 -18 16 0 Q8 -4 0 0 Q-8 -4 -16 0 Z" fill="#E3A93C" stroke="#221F1C" stroke-width="2"/><path d="M0 0 L0 12" stroke="#221F1C" stroke-width="2.4"/></g>
    ${m2Person('kid', 70, 'wave', 1)}
    <g fill="#E3A93C" stroke="#221F1C" stroke-width="1.2"><path d="M100 30 l3 6 l6 1 l-5 4 l2 6 l-6 -3 l-6 3 l2 -6 l-5 -4 l6 -1 Z"/></g></svg>`
};
/* ---- 둘째 묶음 그림: 놀이 ---- */
function m5Play(kind){
  const S = '#221F1C';
  const g = {
    hide: `${m2Ground}<rect x="46" y="60" width="14" height="62" fill="#8A6A4A" stroke="${S}" stroke-width="2"/><circle cx="53" cy="44" r="30" fill="#6E8F58" stroke="${S}" stroke-width="2.6"/>
      ${m2Person('kid', 84, 'stand', -1)}<path d="M76 50 L92 50" stroke="#F0D9BE" stroke-width="7" stroke-linecap="round"/>
      <rect x="150" y="84" width="40" height="38" fill="#C9A06A" stroke="${S}" stroke-width="2.6"/>
      <g transform="translate(166 86) scale(.7)"><circle cx="0" cy="-8" r="14" fill="#F0D9BE" stroke="${S}" stroke-width="3"/><path d="M-14 -12 C-16 -30 16 -30 14 -12 C8 -20 -8 -20 -14 -12 Z" fill="#221F1C"/><circle cx="-5" cy="-8" r="2" fill="${S}"/><circle cx="5" cy="-8" r="2" fill="${S}"/></g>
      <text x="100" y="24" font-family="sans-serif" font-weight="700" font-size="14" fill="#17324A">1, 2, 3...</text>`,
    bike: `${m2Ground}<circle cx="64" cy="100" r="20" fill="none" stroke="${S}" stroke-width="4"/><circle cx="136" cy="100" r="20" fill="none" stroke="${S}" stroke-width="4"/>
      <path d="M64 100 L92 70 L126 70 L136 100 M92 70 L100 100 L126 70 M84 60 L100 60 M122 58 L132 58" stroke="#C1403A" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <g transform="translate(98 92) scale(.85)">${m2Person('kid', 0, 'give', 1).replace('translate(0 122)', 'translate(0 0)')}</g>`,
    rope: `${m2Ground}${m2Person('kid', 100, 'wave', 1).replace('translate(100 122)', 'translate(100 108)')}
      <path d="M78 76 Q100 150 122 76" stroke="#C1403A" stroke-width="3.4" fill="none"/>
      <path d="M80 122 L90 118 M110 118 L120 122" stroke="#8C7F63" stroke-width="2.4" stroke-linecap="round"/>`,
    swim: `<rect width="200" height="130" rx="6" fill="#CFE0EA"/><path d="M0 70 Q25 62 50 70 T100 70 T150 70 T200 70 L200 130 L0 130 Z" fill="#6FA8D0" stroke="${S}" stroke-width="2"/>
      <circle cx="96" cy="62" r="13" fill="#F0D9BE" stroke="${S}" stroke-width="2.6"/><path d="M83 58 C82 44 110 44 109 58 C102 52 90 52 83 58 Z" fill="#221F1C"/>
      <circle cx="92" cy="62" r="1.8" fill="${S}"/><circle cx="100" cy="62" r="1.8" fill="${S}"/>
      <path d="M112 66 Q130 52 146 62" stroke="#F0D9BE" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M80 70 Q66 80 54 74" stroke="#F0D9BE" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M40 90 q10 -6 20 0 M120 100 q10 -6 20 0" stroke="#FBF7EC" stroke-width="3" fill="none"/>`,
    together: `${m2Ground}${m2Person('kid', 76, 'stand', 1)}${m2Person('friend', 124, 'stand', -1)}
      <path d="M90 84 Q100 92 110 84" stroke="#221F1C" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M96 30 C96 22 104 22 104 30 C104 22 112 22 112 30 C112 38 104 42 104 46 C104 42 96 38 96 30 Z" fill="#C1403A" stroke="${S}" stroke-width="1.8"/>`,
    fight: `${m2Ground}${m2Person('kid', 60, 'give', 1)}${m2Person('friend', 140, 'give', -1)}
      <circle cx="100" cy="78" r="12" fill="#C1403A" stroke="${S}" stroke-width="2.6"/>
      <path d="M84 52 l6 -8 l6 8 l6 -8 l6 8 l6 -8" stroke="#C1403A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    ball: `${m2Ground}<circle cx="100" cy="80" r="30" fill="#C1403A" stroke="${S}" stroke-width="3"/><path d="M70 80 Q100 60 130 80 M100 50 Q86 80 100 110" stroke="${S}" stroke-width="2.4" fill="none"/>`
  }[kind];
  const label = {hide:'숨바꼭질', bike:'자전거', rope:'줄넘기', swim:'수영', together:'같이', fight:'싸워요', ball:'공'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['hide', 'bike', 'rope', 'swim', 'together', 'fight', 'ball'].forEach(k => { M5_ONLY['pl5_' + k] = m5Play(k); });
/* ---- 셋째 묶음 그림: 여행 준비 ---- */
function m5Trip(kind){
  const S = '#221F1C';
  const plane = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k || 1})">
    <path d="M-50 0 Q-50 -10 -30 -10 L40 -10 Q58 -10 60 0 Q58 10 40 10 L-30 10 Q-50 10 -50 0 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
    <path d="M-4 -8 L-24 -34 L-12 -34 L20 -8 Z M-4 8 L-24 34 L-12 34 L20 8 Z M-42 -8 L-52 -24 L-42 -24 L-30 -8 Z" fill="#9DB4C6" stroke="${S}" stroke-width="2.2" stroke-linejoin="round"/>
    ${[-20, -8, 4, 16, 28].map(cx => `<circle cx="${cx}" cy="-2" r="2.6" fill="#2D6E8E"/>`).join('')}</g>`;
  const g = {
    plane:    `<rect width="200" height="130" rx="6" fill="#CFE0EA"/><path d="M20 30 Q40 20 60 30 Q80 24 90 34 L20 34 Z M130 96 Q150 86 170 96 Q186 92 190 100 L130 100 Z" fill="#FBF7EC"/>${plane(100, 64, 1.1)}`,
    airport:  `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="108" width="200" height="22" fill="#8C8577"/>
      <rect x="20" y="68" width="120" height="40" fill="#F5E6BD" stroke="${S}" stroke-width="3"/>${[30, 50, 70, 90, 110].map(x => `<rect x="${x}" y="78" width="14" height="20" fill="#9DB4C6" stroke="${S}" stroke-width="1.6"/>`).join('')}
      <rect x="150" y="40" width="14" height="68" fill="#F5E6BD" stroke="${S}" stroke-width="3"/><rect x="142" y="26" width="30" height="16" rx="4" fill="#9DB4C6" stroke="${S}" stroke-width="3"/>
      ${plane(100, 34, .55)}`,
    passport: `<rect x="62" y="12" width="76" height="106" rx="6" fill="#17324A" stroke="${S}" stroke-width="3"/>
      <circle cx="100" cy="56" r="18" fill="none" stroke="#E3A93C" stroke-width="3"/><path d="M82 56 L118 56 M100 38 Q88 56 100 74 Q112 56 100 38" stroke="#E3A93C" stroke-width="2" fill="none"/>
      <rect x="80" y="88" width="40" height="6" rx="3" fill="#E3A93C"/><rect x="86" y="100" width="28" height="4" rx="2" fill="#E3A93C"/>`,
    korea:    `<rect width="200" height="130" rx="6" fill="#DCEBD6"/>
      <path d="M0 80 Q40 40 80 70 Q120 30 160 64 Q180 50 200 60 L200 130 L0 130 Z" fill="#9DBA7E" stroke="${S}" stroke-width="2"/>
      <path d="M36 72 Q100 44 164 72 Q160 78 152 76 L48 76 Q40 78 36 72 Z" fill="#5A5248" stroke="${S}" stroke-width="3"/>
      <rect x="54" y="76" width="92" height="36" fill="#F5E6BD" stroke="${S}" stroke-width="3"/><path d="M76 76 L76 112 M100 76 L100 112 M124 76 L124 112" stroke="#8A6A4A" stroke-width="3"/>
      <circle cx="170" cy="24" r="12" fill="#F2C14E" stroke="${S}" stroke-width="2"/>`,
    pack:     `<path d="M36 64 L164 64 L164 118 L36 118 Z" fill="#C1403A" stroke="${S}" stroke-width="3"/>
      <path d="M36 64 L56 28 L184 28 L164 64 Z" fill="#D9695F" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M50 64 Q60 50 76 58 L80 64 Z" fill="#9DC3DC" stroke="${S}" stroke-width="2"/><path d="M84 64 L90 48 L110 48 L116 64 Z" fill="#F2C14E" stroke="${S}" stroke-width="2"/>
      <rect x="124" y="50" width="22" height="14" fill="#17324A" stroke="${S}" stroke-width="2"/>
      <path d="M84 118 L84 124 M116 118 L116 124" stroke="${S}" stroke-width="4"/>`,
    vacation: `<rect x="40" y="10" width="120" height="112" rx="8" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <rect x="40" y="10" width="120" height="26" rx="8" fill="#E3A93C" stroke="${S}" stroke-width="3"/><rect x="42" y="26" width="116" height="10" fill="#E3A93C"/>
      ${[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4, 5].map(c => `<rect x="${50 + c * 17}" y="${44 + r * 14}" width="12" height="9" fill="${r > 1 ? '#F6D98F' : '#E7DCC4'}" stroke="#C9C0AE" stroke-width="1"/>`).join('')).join('')}
      <circle cx="148" cy="46" r="10" fill="#F2C14E" stroke="${S}" stroke-width="2"/>`,
    clothes:  `<path d="M70 26 L90 18 Q100 30 110 18 L130 26 L150 50 L134 60 L128 52 L128 116 L72 116 L72 52 L66 60 L50 50 Z" fill="#6FA8D0" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M90 18 Q100 30 110 18" fill="none" stroke="${S}" stroke-width="2.6"/>`
  }[kind];
  const label = {plane:'비행기', airport:'공항', passport:'여권', korea:'한국', pack:'가방을 싸요', vacation:'방학', clothes:'옷'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['plane', 'airport', 'passport', 'korea', 'pack', 'vacation', 'clothes'].forEach(k => { M5_ONLY['tr_' + k] = m5Trip(k); });
/* ---- 넷째 묶음 그림: 돈과 가게 ----
   동전(100, 500)과 지폐(1000, 5000, 10000)는 숫자와 색으로 구별합니다. 실제 돈의 인물이나 무늬는 그리지 않습니다. */
const m5Coin = (x, y, v) => `<g transform="translate(${x} ${y})"><circle r="${v === 500 ? 24 : 20}" fill="${v === 500 ? '#D8D4C8' : '#C9C0AE'}" stroke="#221F1C" stroke-width="2.6"/>
  <circle r="${v === 500 ? 18 : 15}" fill="none" stroke="#8C7F63" stroke-width="1.6"/>
  <text y="1" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="${v === 500 ? 15 : 13}" fill="#221F1C">${v}</text></g>`;
const M5_BILL = {1000:'#8FB8D6', 5000:'#E8A87C', 10000:'#9DBA7E'};
const m5Bill = (x, y, v, k) => `<g transform="translate(${x} ${y}) scale(${k || 1})"><rect x="-44" y="-24" width="88" height="48" rx="4" fill="${M5_BILL[v]}" stroke="#221F1C" stroke-width="2.6"/>
  <rect x="-38" y="-18" width="76" height="36" rx="2" fill="none" stroke="#FBF7EC" stroke-width="1.6"/><circle cx="-22" cy="0" r="10" fill="#FBF7EC" opacity=".6"/>
  <text x="14" y="1" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="${v > 5000 ? 15 : 17}" fill="#221F1C">${v}</text></g>`;
const m5Money = inner => `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="돈">${inner}</svg>`;
Object.assign(M5_ONLY, {
  mo100: m5Money(m5Coin(100, 65, 100)), mo500: m5Money(m5Coin(100, 65, 500)),
  mo1000: m5Money(m5Bill(100, 65, 1000, 1.4)), mo5000: m5Money(m5Bill(100, 65, 5000, 1.4)), mo10000: m5Money(m5Bill(100, 65, 10000, 1.4)),
  mo2000: m5Money(m5Bill(88, 55, 1000, 1.1) + m5Bill(112, 78, 1000, 1.1)),
  mo3000: m5Money(m5Bill(80, 45, 1000, 1) + m5Bill(100, 65, 1000, 1) + m5Bill(120, 85, 1000, 1)),
  mo600: m5Money(m5Coin(80, 65, 500) + m5Coin(128, 65, 100)),
  money: m5Money(m5Bill(84, 58, 5000, 1.05) + m5Coin(146, 84, 500) + m5Coin(120, 100, 100)),
  snack: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="과자">
    <path d="M60 16 L140 16 L136 30 L144 110 L140 118 L60 118 L56 110 L64 30 Z" fill="#E3A93C" stroke="#221F1C" stroke-width="3" stroke-linejoin="round"/>
    <path d="M60 16 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6" stroke="#221F1C" stroke-width="2" fill="none"/>
    <circle cx="100" cy="68" r="22" fill="#C1403A" stroke="#221F1C" stroke-width="2.4"/><circle cx="92" cy="62" r="3" fill="#8A5A36"/><circle cx="106" cy="70" r="3" fill="#8A5A36"/><circle cx="98" cy="76" r="3" fill="#8A5A36"/></svg>`,
  shop5: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="가게">
    <rect x="20" y="40" width="160" height="80" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
    <path d="M14 40 L186 40 L176 18 L24 18 Z" fill="#C1403A" stroke="#221F1C" stroke-width="3" stroke-linejoin="round"/>
    ${[34, 62, 90, 118, 146].map(x => `<path d="M${x} 40 Q${x + 14} 54 ${x + 28} 40" fill="#FBF7EC" stroke="#221F1C" stroke-width="2"/>`).join('')}
    <rect x="30" y="80" width="140" height="10" fill="#B08452" stroke="#221F1C" stroke-width="2"/>
    <path d="M44 80 Q52 66 62 80 Z" fill="#E0703C" stroke="#221F1C" stroke-width="1.6"/><rect x="80" y="68" width="18" height="12" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.6"/>
    <circle cx="124" cy="74" r="7" fill="#C1403A" stroke="#221F1C" stroke-width="1.6"/><rect x="140" y="64" width="16" height="16" fill="#E3A93C" stroke="#221F1C" stroke-width="1.6"/></svg>`
});
/* 가격표를 붙인 물건: 앞 달의 그림에 노란 가격표를 얹습니다 */
const m5Tag = (pic, price) => M4_PIC[pic] ? M4_PIC[pic].replace(/<\/svg>\s*$/, `<g transform="translate(150 22) rotate(12)"><rect x="-30" y="-14" width="60" height="28" rx="5" fill="#F6D98F" stroke="#221F1C" stroke-width="2.4"/>
  <circle cx="-22" cy="0" r="3" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.4"/><text x="6" y="1" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="14" fill="#221F1C">${price}</text></g></svg>`) : '';
Object.assign(M5_ONLY, {
  tag_tteok: m5Tag('f_tteok', 3000), tag_gimbap: m5Tag('f_gimbap', 2000), tag_milk: m5Tag('f_milk', 1000), tag_bread: m5Tag('f_bread', 1000)
});
M5_ONLY.tag_snack = M5_ONLY.snack.replace(/<\/svg>\s*$/, `<g transform="translate(150 22) rotate(12)"><rect x="-30" y="-14" width="60" height="28" rx="5" fill="#F6D98F" stroke="#221F1C" stroke-width="2.4"/><circle cx="-22" cy="0" r="3" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.4"/><text x="6" y="1" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="14" fill="#221F1C">500</text></g></svg>`);
/* ---- 다섯째 묶음 그림: 탈것과 역 ---- */
function m5Ride(kind){
  const S = '#221F1C';
  const wheel = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="#5A5248" stroke="${S}" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="3" fill="#C9C0AE"/>`;
  const busBody = num => `<rect x="30" y="34" width="140" height="66" rx="10" fill="#6E8F58" stroke="${S}" stroke-width="3"/>
      ${[42, 70, 98, 126].map(x => `<rect x="${x}" y="44" width="22" height="22" rx="3" fill="#CFE0EA" stroke="${S}" stroke-width="2"/>`).join('')}
      <rect x="152" y="44" width="12" height="40" fill="#CFE0EA" stroke="${S}" stroke-width="2"/>
      ${num ? `<rect x="60" y="22" width="44" height="18" rx="3" fill="#221F1C"/><text x="82" y="31" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="15" fill="#F2C14E">${num}</text>` : ''}
      ${wheel(62, 102)}${wheel(138, 102)}`;
  const g = {
    subway: `<rect width="200" height="130" rx="6" fill="#E7E4DC"/><rect x="0" y="110" width="200" height="20" fill="#8C8577"/>
      <rect x="14" y="36" width="172" height="70" rx="14" fill="#DAD6CC" stroke="${S}" stroke-width="3"/><rect x="14" y="74" width="172" height="8" fill="#2D6E8E"/>
      ${[26, 64, 102, 140].map(x => `<rect x="${x}" y="46" width="30" height="22" rx="3" fill="#9DB4C6" stroke="${S}" stroke-width="2"/>`).join('')}
      <rect x="86" y="84" width="28" height="22" fill="#C9C0AE" stroke="${S}" stroke-width="2"/>`,
    bus: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="110" width="200" height="20" fill="#8C8577"/>${busBody(0)}`,
    bus7: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="110" width="200" height="20" fill="#8C8577"/>${busBody(7)}`,
    taxi: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="110" width="200" height="20" fill="#8C8577"/>
      <path d="M36 88 L48 60 Q52 52 62 52 L138 52 Q148 52 152 60 L164 88 Z" fill="#E3A93C" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="28" y="84" width="144" height="20" rx="6" fill="#E3A93C" stroke="${S}" stroke-width="3"/>
      <path d="M58 58 L96 58 L96 82 L48 82 Z M104 58 L142 58 L152 82 L104 82 Z" fill="#CFE0EA" stroke="${S}" stroke-width="2" stroke-linejoin="round"/>
      <rect x="84" y="40" width="32" height="12" rx="3" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>${wheel(62, 104)}${wheel(138, 104)}`,
    train: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="108" width="200" height="4" fill="#5A5248"/><rect x="0" y="116" width="200" height="4" fill="#5A5248"/>
      <path d="M20 104 L20 56 Q20 44 32 44 L150 44 Q186 48 190 90 L190 104 Z" fill="#FBF7EC" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M150 44 Q186 48 190 90 L150 90 Z" fill="#17324A" opacity=".85"/>
      <rect x="20" y="84" width="170" height="6" fill="#2D6E8E"/>${[32, 62, 92, 122].map(x => `<rect x="${x}" y="56" width="22" height="18" rx="3" fill="#9DB4C6" stroke="${S}" stroke-width="2"/>`).join('')}`,
    station: `<rect width="200" height="130" rx="6" fill="#E7E4DC"/>
      <rect x="40" y="20" width="120" height="44" rx="8" fill="#2D6E8E" stroke="${S}" stroke-width="3"/>
      <rect x="56" y="30" width="24" height="24" rx="6" fill="#FBF7EC" stroke="${S}" stroke-width="2"/><rect x="60" y="34" width="7" height="7" fill="#2D6E8E"/><rect x="69" y="34" width="7" height="7" fill="#2D6E8E"/><path d="M60 58 L56 62 M76 58 L80 62" stroke="#FBF7EC" stroke-width="2.4"/>
      <path d="M90 36 L140 36 M90 48 L130 48" stroke="#FBF7EC" stroke-width="4" stroke-linecap="round"/>
      <path d="M100 64 L100 118" stroke="${S}" stroke-width="5"/><rect x="0" y="116" width="200" height="14" fill="#8C8577"/>`,
    ticket: `<path d="M34 40 L166 40 L166 58 Q156 65 166 72 L166 92 L34 92 L34 72 Q44 65 34 58 Z" fill="#F6D98F" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M126 40 L126 92" stroke="${S}" stroke-width="2" stroke-dasharray="5 4"/>
      <path d="M48 56 L110 56 M48 68 L96 68 M48 80 L104 80" stroke="#8C7F63" stroke-width="3" stroke-linecap="round"/><circle cx="146" cy="66" r="10" fill="#C1403A" opacity=".7"/>`,
    getoff: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><rect x="0" y="110" width="200" height="20" fill="#8C8577"/>
      <rect x="10" y="30" width="110" height="74" rx="10" fill="#6E8F58" stroke="${S}" stroke-width="3"/><rect x="92" y="44" width="22" height="58" fill="#3E5B4A" stroke="${S}" stroke-width="2"/>
      ${m2Person('kid', 150, 'walk', 1).replace('translate(150 122)', 'translate(150 112)')}
      <path d="M118 96 L136 96" stroke="#C1403A" stroke-width="4" stroke-linecap="round"/><path d="M130 90 L138 96 L130 102" stroke="#C1403A" stroke-width="4" fill="none" stroke-linecap="round"/>`
  }[kind];
  const label = {subway:'지하철', bus:'버스', bus7:'칠 번 버스', taxi:'택시', train:'기차', station:'역', ticket:'표', getoff:'내려요'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['subway', 'bus', 'bus7', 'taxi', 'train', 'station', 'ticket', 'getoff'].forEach(k => { M5_ONLY['ride_' + k] = m5Ride(k); });
const M5_PIC = Object.assign({}, M4_PIC, M5_ONLY);

/* ---- 묶음 ---- */
const M5_BUNDLES = [
  {k:1, title:'그리고, 그래서', topic:'문장 잇기와 이야기 순서', nights:[1, 2, 3], after:'그동안 날마다 그림일기를 한 장씩 그리고 세 문장으로 이어 써 봐.'},
  {k:2, title:'같이 놀자', topic:'친구와 놀기, 할 수 있어요', nights:[4, 5, 6], after:'그동안 가족이나 친구에게 한국어로 같이 놀자고 해 봐.'},
  {k:3, title:'한국에 갈 거예요', topic:'앞날 말하기와 여행 준비', nights:[7, 8, 9], after:'그동안 가족에게 이번 방학이나 주말에 무엇을 할 건지 말해 봐.'},
  {k:4, title:'이거 얼마예요?', topic:'돈과 가게', nights:[10, 11, 12], after:'그동안 집에서 가게 놀이를 하며 이거 얼마예요, 하고 물어봐.'},
  {k:5, title:'할머니 댁까지', topic:'한국 방문', nights:[13, 14, 15], after:'이제 가족에게 여행 이야기를 처음부터 끝까지 들려줘.'}
];

/* ---- 밤 ---- */
const M5_NIGHTS = [

/* ---- 첫째 묶음: 그리고, 그래서 ------------------------------------
   순서 말(먼저, 그다음에, 마지막에)과 잇는 말(그리고, 그래서, 그런데), 그리고 두 문장을 하나로 잇는 "-고".
   "-고"는 앞 문장 끝의 요 부분을 떼고 고를 붙입니다. 언제 일인지는 맨 끝 말이 정합니다(먹고 갔어요).
   넷째 달의 까닭 "넘어져서"와 셋째 밤의 그림일기로 이야기 잇기를 연습합니다. */
{ n:1, bundle:1, title:'먼저, 그다음에',
  steps:[
    {type:'intro', who:'moi',
     t:'다섯째 달에 온 걸 환영해! 넷째 달에는 한 문장씩 말했지? 이번 달에는 문장을 이어서 이야기를 만들어. 그리고 그 이야기를 들고 한국에 갈 거야!',
     big:'먼저, 그다음에, 마지막에'},
    {type:'pairs', title:'순서를 말하는 말', who:'moi',
     t:'일이 일어난 차례를 말할 때 쓰는 말이야. 카드를 누르면 소리가 나.',
     singles:[
       {w:'먼저', pic:'n1', en:'first'}, {w:'그다음에', pic:'n2', en:'next, then'}, {w:'마지막에', pic:'n3', en:'last, finally'}]},
    {type:'pairs', title:'이어 주는 말', who:'dami',
     t:'문장과 문장 사이에 들어가 둘을 이어 주는 말이란다. 뜻을 잘 보거라.',
     singles:[
       {w:'그리고', pic:'and', en:'and (also)'}, {w:'그래서', pic:'so', en:'so, that is why'}, {w:'그런데', pic:'but', en:'but, however'}],
     tip:{who:'dami', t:'그리고는 하나 더, 그래서는 까닭과 결과, 그런데는 뜻밖의 일이란다. 비가 왔어요, 그래서 우산을 썼어요. 비가 왔어요, 그런데 우산이 없었어요.'}},
    {type:'sequence', title:'토리의 아침 순서', who:'tori',
     t:'내 아침이 섞여 버렸어! 일어난 차례대로 카드를 눌러 줘.',
     qs:[
       {t:'토리의 아침', cards:[{pic:'act_wake', t:'일어났어요.'}, {pic:'act_wash', t:'씻었어요.'}, {pic:'act_eat', t:'밥을 먹었어요.'}, {pic:'act_go', t:'학교에 갔어요.'}]},
       {t:'토리의 저녁', cards:[{pic:'s_homework', t:'숙제를 했어요.'}, {pic:'f_rice', t:'저녁을 먹었어요.'}, {pic:'act_sleep', t:'잤어요.'}]}]},
    {type:'choose', title:'어떤 말로 이을까요?', who:'tori',
     t:'두 문장 사이에 알맞은 말을 골라 봐.',
     qs:[
       {pic:'w_umbrella', t:'비가 왔어요. ______ 우산을 썼어요.', en:'It rained. So I used an umbrella.', o:['그래서','그런데'], a:'그래서', why:'비가 온 것이 까닭이라서 그래서예요.'},
       {pic:'f_hungry', t:'배가 고팠어요. ______ 밥이 없었어요.', en:"I was hungry. But there was no food.", o:['그래서','그런데'], a:'그런데', why:'뜻밖의 일이라서 그런데예요.'},
       {pic:'f_milk', t:'빵을 먹었어요. ______ 우유도 마셨어요.', en:'I ate bread. And I drank milk too.', o:['그리고','그런데'], a:'그리고', why:'하나를 더 말하니까 그리고예요.'},
       {pic:'fall', t:'넘어졌어요. ______ 울었어요.', en:'I fell. So I cried.', o:['그래서','그리고'], a:'그래서', why:'넘어진 것이 까닭이라서 그래서예요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 말에 맞는 그림을 찾아 봐.',
     qs:[
       {say:'그래서', o:['and','so','but'], a:'so'},
       {say:'그리고', o:['but','and','so'], a:'and'},
       {say:'그런데', o:['so','but','and'], a:'but'},
       {say:'먼저', o:['n3','n2','n1'], a:'n1'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'이어 주는 말을 써 봐.',
     items:[{w:'먼저', en:'first'}, {w:'그리고', en:'and'}, {w:'그래서', en:'so'}]}
  ],
  dictWords:[{w:'먼저', en:'first'}, {w:'그다음에', en:'next'}, {w:'마지막에', en:'finally'},
             {w:'그리고', en:'and'}, {w:'그래서', en:'so'}, {w:'그런데', en:'but'}] },

{ n:2, bundle:1, title:'밥을 먹고 학교에 갔어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 두 문장을 하나로 이어 볼 거야. 밥을 먹었어요, 학교에 갔어요. 이걸 한 번에, 밥을 먹고 학교에 갔어요!',
     big:'밥을 먹고 학교에 갔어요'},
    {type:'tense', title:'두 문장을 하나로', who:'dami',
     t:'앞 문장 끝의 었어요, 았어요, 했어요를 떼고 고를 붙이거라. 먹었어요는 먹고, 갔어요는 가고, 했어요는 하고란다.',
     cols:['두 문장', '한 문장'],
     groups:[
       {rule:'앞 문장에 고를 붙여요', rows:[
         ['밥을 먹었어요. 학교에 갔어요.', '밥을 먹고 학교에 갔어요.'],
         ['씻었어요. 잤어요.', '씻고 잤어요.'],
         ['숙제를 했어요. 놀았어요.', '숙제를 하고 놀았어요.'],
         ['책을 읽었어요. 그림을 그렸어요.', '책을 읽고 그림을 그렸어요.']]}],
     note:'어제 일인지 오늘 일인지는 맨 끝 말이 정한단다. 먹고 갔어요는 어제 일, 먹고 가요는 지금 일이지. 고에는 ㅆ을 넣지 않는단다.'},
    {type:'choose', title:'하나로 이으면?', who:'tori',
     t:'두 문장을 바르게 이은 쪽을 골라 봐.',
     qs:[
       {pic:'act_eat', t:'밥을 먹었어요. 학교에 갔어요.', o:['밥을 먹고 학교에 갔어요.','밥을 먹었고 학교에 가요.'], a:'밥을 먹고 학교에 갔어요.', en:'I ate and went to school.', why:'고에는 ㅆ을 넣지 않고, 맨 끝이 갔어요예요.'},
       {pic:'act_wash', t:'씻었어요. 잤어요.', o:['씻고 잤어요.','씻어요 잤어요.'], a:'씻고 잤어요.', en:'I washed and went to sleep.'},
       {pic:'s_homework', t:'숙제를 했어요. 놀았어요.', o:['숙제를 하고 놀았어요.','숙제를 했고 놀아요.'], a:'숙제를 하고 놀았어요.', en:'I did my homework and played.', why:'했어요는 하고로 바뀌어요.'},
       {pic:'w_umbrella', t:'비가 왔어요. 그래서 우산을 썼어요. 한 문장으로는?', o:['비가 와서 우산을 썼어요.','우산을 써서 비가 왔어요.'], a:'비가 와서 우산을 썼어요.', en:'It rained, so I used an umbrella.', why:'넷째 달에 배운 까닭 말(와서)이 앞에 와요.'}]},
    {type:'sequence', title:'이어서 말해요', who:'moi',
     t:'이번엔 모이의 하루야. 차례대로 눌러 봐.',
     qs:[
       {t:'모이의 토요일', cards:[{pic:'s_hangeul', t:'한글학교에 갔어요.'}, {pic:'s_read', t:'책을 읽었어요.'}, {pic:'f_tteok', t:'떡볶이를 먹었어요.'}, {pic:'s_play', t:'친구하고 놀았어요.'}]}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'밥을 먹고 학교에 갔어요.', tiles:['밥을','먹고','학교에','갔어요.'], extra:['먹었고'], en:'I ate and went to school.', hint:'고에는 ㅆ을 넣지 않아요.'},
       {s:'숙제를 하고 놀았어요.', tiles:['숙제를','하고','놀았어요.'], extra:['했고'], en:'I did homework and played.'},
       {s:'비가 와서 우산을 썼어요.', tiles:['비가','와서','우산을','썼어요.'], en:'It rained, so I used an umbrella.', hint:'까닭이 먼저 와요.'},
       {s:'친구하고 놀았어요. 그런데 넘어졌어요.', tiles:['친구하고','놀았어요.','그런데','넘어졌어요.'], extra:['그래서'], en:'I played with a friend. But I fell down.', hint:'뜻밖의 일은 그런데로 이어요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'고가 붙으면 앞 받침 때문에 고가 꼬처럼 세게 들린단다.',
     cmp:[
       {s:'먹고', d:'먹꼬', n:'ㄱ 받침 뒤의 ㄱ은 ㄲ처럼 나요'},
       {s:'씻고', d:'씯꼬', n:'ㅅ 받침은 ㄷ처럼, 뒤의 ㄱ은 ㄲ처럼 나요'},
       {s:'읽고', d:'일꼬', n:'ㄺ 가운데 ㄹ만 나고, 뒤의 ㄱ은 ㄲ처럼 나요'},
       {s:'앉고', d:'안꼬', n:'ㄵ 가운데 ㄴ만 나고, 뒤의 ㄱ은 ㄲ처럼 나요'}],
     note:'[먹꼬]로 들려도 먹는다는 뜻의 ‘먹’에 ‘고’를 붙인 것이란다. 받침이 있는 말 뒤의 고는 늘 세게 들리니, 들리는 대로 꼬라고 쓰지 않도록 조심하거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'먹고', en:'eat and', hint:{who:'dami', t:'소리는 [먹꼬]지만 ‘먹’에 ‘고’를 붙인단다. 꼬가 아니라 고지.'}},
       {w:'씻고', en:'wash and', hint:{who:'dami', t:'소리는 [씯꼬]지만 ‘씻’의 받침은 ㅅ이란다.'}},
       {w:'그런데', en:'but'}]}
  ],
  dictWords:[{w:'먹고', en:'eat and'}, {w:'씻고', en:'wash and'}, {w:'읽고', en:'read and'}, {w:'하고', en:'do and'}] },

{ n:3, bundle:1, title:'토리의 그림일기',
  steps:[
    {type:'intro', who:'tori',
     t:'한국 아이들은 그림일기를 써. 그림을 그리고 그 아래에 그날 있었던 일을 쓰는 거야. 오늘은 내 그림일기를 할아버지께 읽어 드릴 거야. 먼저 귀로만 들어 봐.',
     big:'제 그림일기예요'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 이어 주는 말(그래서, 그런데)을 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'할아버지, 제 그림일기를 읽어 드릴게요.', en:"Grandpa, I'll read my picture diary to you."},
       {who:'tori', t:'오늘은 토요일이었어요. 아침에 비가 왔어요.', en:'Today was Saturday. It rained in the morning.'},
       {who:'tori', t:'그래서 우산을 쓰고 한글학교에 갔어요.', en:'So I used my umbrella and went to Korean school.'},
       {who:'tori', t:'그런데 집에 오는 길에 우산을 잃어버렸어요.', en:'But on the way home, I lost my umbrella.'},
       {who:'tori', t:'그래서 모이하고 같이 우산을 찾았어요.', en:'So Moi and I looked for the umbrella together.'},
       {who:'tori', t:'마지막에 공원 나무 아래에서 찾았어요. 참 기뻤어요!', en:'Finally we found it under a tree in the park. I was so happy!'},
       {who:'dami', t:'허허, 이야기가 술술 이어지는구나. 그래서, 그런데를 아주 잘 썼다.', en:'Ho ho, the story flows so well. You used "so" and "but" very well.'},
       {who:'moi', t:'토리야, 그 그림 나도 보여 줘!', en:'Tori, show me the picture too!'}],
     note:{who:'dami', t:'그림일기는 한국 아이들이 처음 글을 쓸 때 하는 공부란다. 날씨, 한 일, 그때의 기분을 차례대로 적지. 토리는 먼저, 그래서, 그런데, 마지막에로 하루를 한 편의 이야기로 만들었구나.'}},
    {type:'sequence', title:'그림일기 순서', who:'moi',
     t:'토리 그림일기의 그림이 섞였어. 이야기 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'w_rain', t:'아침에 비가 왔어요.'}, {pic:'s_hangeul', t:'우산을 쓰고 한글학교에 갔어요.'}, {pic:'lost', t:'우산을 잃어버렸어요.'}, {pic:'found', t:'나무 아래에서 찾았어요.'}]}]},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'아침 날씨는 어땠어요?', o:['비가 왔어요','눈이 왔어요','맑았어요'], a:'비가 왔어요', why:'토리는 ‘아침에 비가 왔어요’라고 했어요.'},
       {t:'토리는 무엇을 잃어버렸어요?', o:['가방','우산','모자'], a:'우산', why:'토리는 ‘우산을 잃어버렸어요’라고 했어요.'},
       {t:'우산은 어디에 있었어요?', o:['학교 안','공원 나무 아래','집 앞'], a:'공원 나무 아래', why:'토리는 ‘공원 나무 아래에서 찾았어요’라고 했어요.'},
       {t:'우산을 찾고 토리는 기분이 어땠어요?', o:['슬펐어요','화났어요','기뻤어요'], a:'기뻤어요', why:'토리는 ‘참 기뻤어요!’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'act_eat', line:{who:'moi', t:'토리야, 어제 뭐 했어?'}, en:'Tori, what did you do yesterday?', o:['밥을 먹고 공원에 갔어.','밥을 먹고 공원에 갔어요.'], a:'밥을 먹고 공원에 갔어.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'w_umbrella', line:{who:'dami', t:'토리야, 왜 우산을 썼느냐?'}, en:'Tori, why did you use an umbrella?', o:['비가 와서 우산을 썼어요.','우산을 써서 비가 왔어요.'], a:'비가 와서 우산을 썼어요.', why:'까닭(비가 와서)이 먼저 와요.'},
       {pic:'diary', t:'할머니께 오늘 일을 말씀드려요.', en:'Tell Grandma about your day.', o:['학교에 가고 숙제를 했어.','학교에 가고 숙제를 했어요.'], a:'학교에 가고 숙제를 했어요.', why:'할머니께는 ‘했어요’로 말해요.'}]},
    {type:'task', title:'나의 그림일기', who:'moi',
     t:'오늘 있었던 일로 그림일기를 한 장 써 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'맨 위에 날씨를 써요', say:'오늘은 ______.', sub:'맑았어요, 비가 왔어요처럼 지난 일로.'},
       {when:'그림을 그리고 한 일을 이어 써요', say:'______고 ______었어요.', sub:'밥을 먹고 공원에 갔어요처럼 고로 이어요.'},
       {when:'그래서나 그런데로 한 문장 더', say:'그래서 ______. 그런데 ______.', sub:'마지막엔 그때 기분을 써요: 참 기뻤어요.'}],
     parent:'그림일기는 한국 초등학교 1, 2학년이 글쓰기를 처음 배울 때 흔히 하는 활동입니다. 공책 한 장에 위쪽은 그림, 아래쪽은 두세 문장을 쓰게 해 주세요. 맞춤법은 조금 틀려도 괜찮고, "그리고", "그래서", "그런데" 가운데 하나를 넣었는지만 봐 주시면 됩니다. 아이가 다 쓰면 소리 내어 읽게 하고, 할머니 할아버지께 사진으로 보내 드리면 좋은 선물이 됩니다.'}
  ],
  dictWords:[] },

/* ---- 둘째 묶음: 같이 놀자 -----------------------------------------
   놀이 이름, 함께 하자는 말(같이 놀자, 할까?, 할래?)과 어른께 여쭙는 말(같이 하실래요?).
   둘째 밤에 할 수 있어요/없어요와 못(못 타요)을 배웁니다. 받침이 없으면 ㄹ 수, 있으면 을 수.
   셋째 밤은 다투고 화해하는 이야기로 넷째 달의 기분 말과 미안해, 괜찮아를 다시 씁니다. */
{ n:4, bundle:2, title:'같이 놀자',
  steps:[
    {type:'intro', who:'moi',
     t:'심심해! 누구랑 같이 놀고 싶어. 오늘은 같이 놀자고 할 때 쓰는 말을 모아 왔어.',
     big:'같이 놀자!'},
    {type:'pairs', title:'무엇을 하고 놀까?', who:'moi',
     t:'놀이 이름이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'숨바꼭질', pic:'pl5_hide', en:'hide and seek'}, {w:'공놀이', pic:'pl5_ball', en:'playing ball'},
       {w:'자전거', pic:'pl5_bike', en:'bicycle'}, {w:'줄넘기', pic:'pl5_rope', en:'jump rope'},
       {w:'수영', pic:'pl5_swim', en:'swimming'}, {w:'같이', pic:'pl5_together', en:'together'}],
     tip:{who:'tori', t:'자전거는 타요, 줄넘기는 해요, 숨바꼭질도 해요. 놀이마다 붙는 말이 달라. 자전거를 타요, 줄넘기를 해요.'}},
    {type:'pairs', title:'같이 하자고 할 때', who:'dami',
     t:'친구에게는 편하게, 어른께는 여쭙는 말로 하거라.',
     pairs:[
       {when:'같이 하자고 할 때', pic:'pl5_together', friend:'같이 놀자!', elder:'같이 하실래요?', en:"Let's play together!"},
       {when:'무엇을 할지 물을 때', pic:'what', friend:'뭐 하고 놀까?', elder:'뭐 할까요?', en:'What shall we do?'},
       {when:'좋다고 할 때', pic:'mood_happy', friend:'좋아!', elder:'좋아요.', en:'Okay! Sounds good.'}]},
    {type:'choose', title:'무엇을 하고 놀아요?', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'pl5_hide', o:['숨바꼭질','줄넘기','수영'], a:'숨바꼭질'},
       {pic:'pl5_bike', o:['자전거를 타요.','자전거를 해요.'], a:'자전거를 타요.', en:'I ride a bike.', why:'자전거는 타요예요.'},
       {pic:'pl5_rope', o:['줄넘기를 해요.','줄넘기를 타요.'], a:'줄넘기를 해요.', en:'I jump rope.', why:'줄넘기는 해요예요.'},
       {pic:'pl5_together', t:'친구에게 같이 놀자고 해요.', o:['같이 놀자!','같이 하실래요?'], a:'같이 놀자!', why:'친구에게는 편한 말로 해요.'},
       {pic:'p_grandpa', t:'할아버지께 같이 하자고 여쭤요.', o:['할아버지, 같이 놀자!','할아버지, 같이 하실래요?'], a:'할아버지, 같이 하실래요?', why:'어른께는 ‘하실래요?’로 여쭤요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 놀이를 찾아 봐.',
     qs:[
       {say:'수영', o:['pl5_swim','pl5_bike','pl5_hide'], a:'pl5_swim'},
       {say:'줄넘기', o:['pl5_ball','pl5_rope','pl5_together'], a:'pl5_rope'},
       {say:'같이', o:['pl5_fight','pl5_hide','pl5_together'], a:'pl5_together'},
       {say:'공놀이', o:['pl5_ball','pl5_swim','pl5_rope'], a:'pl5_ball'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'놀이 말을 써 봐.',
     items:[{w:'같이', en:'together', hint:{who:'dami', t:'소리는 [가치]지만 글자는 ‘같이’란다. 받침 ㅌ이 이를 만나면 ㅊ처럼 소리 나지.'}}, {w:'수영', en:'swimming'}, {w:'자전거', en:'bicycle'}]}
  ],
  dictWords:[{w:'같이', en:'together'}, {w:'놀자', en:"let's play"}, {w:'숨바꼭질', en:'hide and seek'}, {w:'공놀이', en:'playing ball'},
             {w:'자전거', en:'bicycle'}, {w:'줄넘기', en:'jump rope'}, {w:'수영', en:'swimming'}] },

{ n:5, bundle:2, title:'자전거를 탈 수 있어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 할 수 있는 일과 아직 못 하는 일을 말해 볼 거야. 나는 자전거를 탈 수 있어. 그런데 수영은 아직 못 해!',
     big:'자전거를 탈 수 있어요'},
    {type:'tense', title:'할 수 있어요', who:'dami',
     t:'움직이는 말의 요 앞부분에 ㄹ 수 있어요를 붙인단다. 받침이 있는 말에는 을 수 있어요지. 받침 삼 형제를 떠올려 보거라.',
     cols:['움직이는 말', '할 수 있어요'],
     groups:[
       {rule:'받침이 없으면 ㄹ 수 있어요', rows:[['타요','탈 수 있어요'], ['해요','할 수 있어요'], ['가요','갈 수 있어요']]},
       {rule:'받침이 있으면 을 수 있어요', rows:[['먹어요','먹을 수 있어요'], ['읽어요','읽을 수 있어요']]},
       {rule:'할 수 없어요는 못으로도 말해요', rows:[['할 수 없어요','못 해요'], ['탈 수 없어요','못 타요']]}],
     note:'못은 안처럼 움직이는 말 바로 앞에 온단다. 안 해요는 하기 싫어서 안 하는 것, 못 해요는 하고 싶어도 할 수 없는 것이지. 그러니 아직 배우는 중이면 못 해요라고 하거라.'},
    {type:'likes', title:'나는 할 수 있어요?', who:'tori',
     t:'놀이마다 할 수 있으면 ‘할 수 있어요’, 아직 못 하면 ‘아직 못 해요’를 눌러 봐. 네 문장이 만들어져. 세 개 이상 하면 다음으로 갈 수 있어.',
     labels:['할 수 있어요', '아직 못 해요'],
     items:[
       {w:'자전거', pic:'pl5_bike', lines:['저는 자전거를 탈 수 있어요.', '저는 자전거를 아직 못 타요.']},
       {w:'수영', pic:'pl5_swim', lines:['저는 수영을 할 수 있어요.', '저는 수영을 아직 못 해요.']},
       {w:'줄넘기', pic:'pl5_rope', lines:['저는 줄넘기를 할 수 있어요.', '저는 줄넘기를 아직 못 해요.']},
       {w:'한글 읽기', pic:'t_book', lines:['저는 한글을 읽을 수 있어요.', '저는 한글을 아직 못 읽어요.']},
       {w:'김치 먹기', pic:'f_kimchi', lines:['저는 김치를 먹을 수 있어요.', '저는 김치를 아직 못 먹어요.']}],
     tip:{who:'moi', t:'‘아직’은 지금은 아니어도 곧 할 거라는 뜻이야. 아직 못 해도 괜찮아!'}},
    {type:'choose', title:'어느 쪽이 맞을까요?', who:'tori',
     t:'그림을 보고 바르게 말한 쪽을 골라 봐.',
     qs:[
       {pic:'pl5_bike', o:['자전거를 탈 수 있어요.','자전거를 타을 수 있어요.'], a:'자전거를 탈 수 있어요.', en:'I can ride a bike.', why:'타요에는 받침이 없어서 ㄹ 수예요.'},
       {pic:'f_kimchi', o:['김치를 먹을 수 있어요.','김치를 먹 수 있어요.'], a:'김치를 먹을 수 있어요.', en:'I can eat kimchi.', why:'먹에는 받침이 있어서 을 수예요.'},
       {pic:'pl5_swim', t:'수영을 배우는 중이에요.', o:['수영을 안 해요.','수영을 아직 못 해요.'], a:'수영을 아직 못 해요.', en:"I can't swim yet.", why:'하고 싶어도 할 수 없으면 못 해요예요.'},
       {pic:'s_read', o:['한글을 읽을 수 있어요.','한글을 읽 수 있어요.'], a:'한글을 읽을 수 있어요.', en:'I can read Hangul.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'같이 공놀이할까?', tiles:['같이','공놀이할까?'], en:'Shall we play ball together?'},
       {s:'저는 자전거를 탈 수 있어요.', tiles:['저는','자전거를','탈','수','있어요.'], extra:['타'], en:'I can ride a bike.'},
       {s:'수영은 아직 못 해요.', tiles:['수영은','아직','못','해요.'], extra:['안'], en:"I can't swim yet.", hint:'할 수 없을 때는 못이에요.'},
       {s:'같이 줄넘기를 할 수 있어요.', tiles:['같이','줄넘기를','할','수','있어요.'], en:'We can jump rope together.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'할 수 있어요는 소리와 글자가 꽤 다르단다. 그리고 같이에는 특별한 소리 비밀이 있지.',
     cmp:[
       {s:'할 수 있어요', d:'할 쑤 이써요', n:'ㄹ 뒤의 수는 쑤처럼 세게 나요'},
       {s:'같이', d:'가치', n:'ㅌ 받침이 이를 만나면 ㅊ 소리가 나요'},
       {s:'못 해요', d:'모태요', n:'ㅅ 받침과 ㅎ이 만나 ㅌ 소리가 나요'},
       {s:'먹을 수', d:'머글 쑤', n:'ㄱ이 건너가고, 수는 쑤처럼 나요'}],
     note:'같이의 ㅌ은 뒤에 이가 오면 ㅊ으로 바뀌어 [가치]가 된단다. 밭이 [바치]가 되는 것과 같은 이치지. 하지만 쓸 때는 늘 ‘같이’란다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'같이', en:'together', hint:{who:'dami', t:'소리는 [가치]지만 받침 ㅌ을 쓰는 ‘같’에 ‘이’란다.'}},
       {w:'못', en:"can't", hint:{who:'dami', t:'못 해요는 [모태요]로 들리지만 ‘못’의 받침은 ㅅ이란다. 못과 해요는 띄어 쓰지.'}},
       {w:'아직', en:'yet, still'}]}
  ],
  dictWords:[{w:'못', en:"can't"}, {w:'아직', en:'yet'}, {w:'수영', en:'swimming'}] },

{ n:6, bundle:2, title:'다투고 화해해요',
  steps:[
    {type:'intro', who:'tori',
     t:'모이랑 공놀이를 하다가 다퉜어. 친구랑 다투면 어떻게 해야 할까? 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'미안해, 괜찮아'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리와 모이의 기분이 어떻게 바뀌는지 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 같이 공놀이하자!', en:"Moi, let's play ball together!"},
       {who:'moi', t:'좋아! 그런데 내가 먼저 할래.', en:"Okay! But I want to go first."},
       {who:'tori', t:'싫어! 내가 먼저 할래!', en:'No! I want to go first!'},
       {who:'moi', t:'아니야, 내 공이야!', en:"No, it's my ball!"},
       {who:'tori', t:'너무해! 나 화났어.', en:"That's not fair! I'm angry."},
       {who:'dami', t:'허허, 얘들아. 싸우지 말고 한 번씩 번갈아 하거라.', en:"Ho ho, kids. Don't fight. Take turns."},
       {who:'moi', t:'토리야, 미안해. 네가 먼저 해.', en:'Tori, sorry. You go first.'},
       {who:'tori', t:'괜찮아. 나도 미안해. 우리 같이 하자!', en:"It's okay. I'm sorry too. Let's play together!"}],
     note:{who:'dami', t:'친구끼리는 다툴 수도 있단다. 중요한 건 그다음이지. 모이가 먼저 미안해라고 했고, 토리는 괜찮아, 나도 미안해로 받았지. 이렇게 화해하면 우정이 더 단단해진단다.'}},
    {type:'sequence', title:'이야기 순서', who:'moi',
     t:'우리가 다투고 화해한 이야기야. 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'pl5_ball', t:'같이 공놀이를 했어요.'}, {pic:'pl5_fight', t:'서로 먼저 하겠다고 다퉜어요.'}, {pic:'mood_angry', t:'토리가 화났어요.'}, {pic:'pl5_together', t:'미안하다고 하고 화해했어요.'}]}]},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리와 모이는 무엇을 하고 놀았어요?', o:['숨바꼭질','공놀이','줄넘기'], a:'공놀이', why:'토리가 ‘같이 공놀이하자!’라고 했어요.'},
       {t:'왜 다퉜어요?', o:['서로 먼저 하고 싶어서','공이 없어서','비가 와서'], a:'서로 먼저 하고 싶어서', why:'둘 다 ‘내가 먼저 할래’라고 했어요.'},
       {t:'할아버지는 어떻게 하라고 하셨어요?', o:['번갈아 하라고','집에 가라고','자라고'], a:'번갈아 하라고', why:'할아버지는 ‘번갈아 하거라’라고 하셨어요.'},
       {t:'먼저 미안하다고 한 친구는 누구예요?', o:['토리','모이','담이'], a:'모이', why:'모이가 ‘토리야, 미안해’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 말하는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'pl5_bike', line:{who:'moi', t:'토리야, 같이 자전거 탈래?'}, en:'Tori, do you want to ride bikes together?', o:['좋아, 같이 타자!','좋아요, 같이 타요.'], a:'좋아, 같이 타자!', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'pl5_swim', line:{who:'dami', t:'토리야, 수영할 수 있느냐?'}, en:'Tori, can you swim?', o:['네, 할 수 있어요.','응, 할 수 있어.'], a:'네, 할 수 있어요.', why:'할아버지는 어른이라서 ‘할 수 있어요’라고 해요.'},
       {line:{who:'moi', t:'토리야, 아까 화내서 미안해.'}, en:'Tori, sorry I got angry earlier.', o:['괜찮아. 나도 미안해.','너무해!'], a:'괜찮아. 나도 미안해.', why:'친구가 사과하면 괜찮아로 받아 주면 좋아요.'}]},
    {type:'task', title:'한국어로 놀자고 하기', who:'moi',
     t:'가족이나 친구에게 한국어로 놀자고 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'형제나 친구에게', say:'같이 놀자! 뭐 하고 놀까?', sub:'숨바꼭질, 공놀이, 줄넘기 가운데 골라요.'},
       {when:'엄마, 아빠, 할머니 할아버지께', say:'같이 하실래요?', sub:'어른께는 여쭙는 말로.'},
       {when:'놀다가 다투면', say:'미안해. 같이 하자.', sub:'사과를 들으면 ‘괜찮아’로 받아 줘요.'}],
     parent:'아이가 형제나 친구에게 한국어로 놀이를 제안하게 해 주세요. 부모님께는 "같이 하실래요?"로 여쭙게 하시고 흔쾌히 응해 주시면 좋습니다. 놀다가 다툼이 생기면 "미안해"와 "괜찮아"를 한국어로 주고받게 이끌어 주세요. 오늘 배운 "못 해요"는 하고 싶지만 아직 할 수 없다는 뜻이라, 아이가 새로 배우는 것이 있으면 "아직 못 해요. 그런데 배우고 있어요"처럼 말하게 해 보셔도 좋습니다.'}
  ],
  dictWords:[] },

/* ---- 셋째 묶음: 한국에 갈 거예요 ------------------------------------
   여행 준비 말(한국, 비행기, 공항, 여권, 방학, 옷, 가방을 싸요)과 앞날을 말하는 "-ㄹ 거예요".
   받침이 없으면 ㄹ 거예요, 있으면 을 거예요로, 둘째 묶음의 ㄹ 수 있어요와 같은 규칙입니다.
   넷째 달의 지난 일(갔어요)과 나란히 놓아 어제, 오늘, 내일을 한 번에 정리합니다. */
{ n:7, bundle:3, title:'여행 준비',
  steps:[
    {type:'intro', who:'moi',
     t:'토리가 곧 한국에 간대! 오늘은 여행 준비에 쓰는 말을 모아 왔어. 너도 한국에 가 본 적 있어?',
     big:'한국에 가요'},
    {type:'pairs', title:'여행에 쓰는 말', who:'moi',
     t:'여행 갈 때 쓰는 말이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'한국', pic:'tr_korea', en:'Korea'}, {w:'비행기', pic:'tr_plane', en:'airplane'}, {w:'공항', pic:'tr_airport', en:'airport'},
       {w:'여권', pic:'tr_passport', en:'passport'}, {w:'방학', pic:'tr_vacation', en:'school vacation'}, {w:'옷', pic:'tr_clothes', en:'clothes'}],
     tip:{who:'dami', t:'미국에서 한국까지는 비행기로 열서너 시간쯤 걸린단다. 하루의 반보다 길지. 그래서 비행기에서 자고, 먹고, 또 잔단다.'}},
    {type:'pairs', title:'여행 준비', who:'moi',
     t:'여행 가기 전에 하는 일이야.',
     singles:[
       {w:'가방을 싸요', pic:'tr_pack', en:'pack a bag'}, {w:'비행기를 타요', pic:'tr_plane', en:'take a plane'},
       {w:'공항에 가요', pic:'tr_airport', en:'go to the airport'}, {w:'할머니를 만나요', pic:'p_grandma', en:'meet grandma'}],
     tip:{who:'tori', t:'비행기도 자전거처럼 타요. 버스도, 지하철도 다 타요. 올라서 가는 건 다 타요야.'}},
    {type:'sequence', title:'여행 순서', who:'tori',
     t:'한국에 가는 날의 일이 섞였어. 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'tr_pack', t:'가방을 싸요.'}, {pic:'tr_airport', t:'공항에 가요.'}, {pic:'tr_plane', t:'비행기를 타요.'}, {pic:'tr_korea', t:'한국에 도착해요.'}]}]},
    {type:'choose', title:'이건 뭐예요?', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'tr_passport', o:['여권','가방','옷'], a:'여권'},
       {pic:'tr_airport', o:['학교','공항','병원'], a:'공항'},
       {pic:'tr_plane', o:['비행기를 타요.','비행기를 해요.'], a:'비행기를 타요.', en:'I take a plane.', why:'비행기는 타요예요.'},
       {pic:'tr_pack', o:['가방을 싸요.','가방을 타요.'], a:'가방을 싸요.', en:'I pack my bag.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'방학', o:['tr_vacation','tr_passport','tr_korea'], a:'tr_vacation'},
       {say:'한국', o:['tr_airport','tr_korea','tr_plane'], a:'tr_korea'},
       {say:'옷', o:['tr_clothes','tr_pack','tr_passport'], a:'tr_clothes'},
       {say:'비행기', o:['tr_plane','tr_airport','pl5_bike'], a:'tr_plane'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'여행 말을 써 봐.',
     items:[{w:'한국', en:'Korea'}, {w:'여권', en:'passport', hint:{who:'dami', t:'소리는 [여꿘]처럼 세게 들리지만 글자는 ‘권’이란다.'}}, {w:'방학', en:'vacation'}]}
  ],
  dictWords:[{w:'한국', en:'Korea'}, {w:'비행기', en:'airplane'}, {w:'공항', en:'airport'}, {w:'여권', en:'passport'},
             {w:'방학', en:'vacation'}, {w:'옷', en:'clothes'}] },

{ n:8, bundle:3, title:'갈 거예요',
  steps:[
    {type:'intro', who:'tori',
     t:'어제 한 일은 갔어요, 앞으로 할 일은 갈 거예요! 오늘은 앞날을 말하는 법을 배워.',
     big:'한국에 갈 거예요'},
    {type:'tense', title:'어제 한 일, 앞으로 할 일', who:'dami',
     t:'앞으로 할 일은 ㄹ 거예요를 붙인단다. 받침이 있는 말에는 을 거예요지. 둘째 묶음의 ㄹ 수 있어요와 똑같은 규칙이란다.',
     cols:['어제 한 일', '앞으로 할 일'],
     groups:[
       {rule:'받침이 없으면 ㄹ 거예요', rows:[['갔어요','갈 거예요'], ['탔어요','탈 거예요'], ['만났어요','만날 거예요'], ['했어요','할 거예요']]},
       {rule:'받침이 있으면 을 거예요', rows:[['먹었어요','먹을 거예요'], ['읽었어요','읽을 거예요']]}],
     note:'만나요의 ‘나’에는 받침이 없으니 만날 거예요, 먹어요의 ‘먹’에는 받침이 있으니 먹을 거예요. 친구에게는 끝을 거야로 바꾸면 된단다. 갈 거야, 먹을 거야.'},
    {type:'choose', title:'어제 일일까요, 앞으로 할 일일까요?', who:'tori',
     t:'그림과 말을 잘 보고 맞는 쪽을 골라 봐.',
     qs:[
       {pic:'tomorrow', t:'내일 한국에 ______.', o:['갔어요','갈 거예요'], a:'갈 거예요', en:"I'll go to Korea tomorrow.", why:'내일은 앞으로 할 일이라서 갈 거예요예요.'},
       {pic:'yesterday', t:'어제 가방을 ______.', o:['쌌어요','쌀 거예요'], a:'쌌어요', en:'I packed my bag yesterday.', why:'어제는 지난 일이라서 쌌어요예요.'},
       {pic:'f_kimchi', t:'한국에서 김치를 ______.', o:['먹을 거예요','먹 거예요'], a:'먹을 거예요', en:"I'll eat kimchi in Korea.", why:'먹에는 받침이 있어서 을 거예요예요.'},
       {pic:'p_grandma', t:'방학에 할머니를 ______.', o:['만날 거예요','만났 거예요'], a:'만날 거예요', en:"I'll meet Grandma during vacation."}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'방학에 한국에 갈 거예요.', tiles:['방학에','한국에','갈','거예요.'], extra:['갔어요.'], en:"I'll go to Korea during vacation."},
       {s:'비행기를 탈 거예요.', tiles:['비행기를','탈','거예요.'], en:"I'll take a plane."},
       {s:'한국에서 떡볶이를 먹을 거예요.', tiles:['한국에서','떡볶이를','먹을','거예요.'], extra:['먹'], en:"I'll eat tteokbokki in Korea.", hint:'에서는 어디에서 하는지 말할 때 써요.'},
       {s:'어제 가방을 쌌어요. 내일 갈 거예요.', tiles:['어제','가방을','쌌어요.','내일','갈','거예요.'], en:"I packed my bag yesterday. I'll go tomorrow."}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'ㄹ 거예요의 거는 늘 꺼처럼 세게 들린단다. 들어 보거라.',
     cmp:[
       {s:'갈 거예요', d:'갈 꺼예요', n:'ㄹ 뒤의 거는 꺼처럼 나요'},
       {s:'먹을 거예요', d:'머글 꺼예요', n:'ㄱ이 건너가고, 거는 꺼처럼 나요'},
       {s:'할 거야', d:'할 꺼야', n:'친구에게 말할 때도 꺼처럼 나요'},
       {s:'한국에', d:'한구게', n:'ㄱ 받침이 뒤로 건너가요'}],
     note:'[갈 꺼예요]로 들려도 쓸 때는 늘 ‘거예요’란다. 할 수 있어요의 [쑤]와 같은 이치지. ㄹ 뒤에 오는 ㄱ, ㅅ은 힘을 주어 소리 나지만 글자는 그대로 두거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'비행기', en:'airplane'},
       {w:'공항', en:'airport'},
       {w:'거예요', en:'will (future)', hint:{who:'dami', t:'소리는 [꺼예요]지만 ‘거’란다. ㄲ이 아니라 ㄱ을 쓰거라.'}}]}
  ],
  dictWords:[{w:'거예요', en:'will (future)'}, {w:'내일', en:'tomorrow'}, {w:'싸요', en:'pack'}] },

{ n:9, bundle:3, title:'짐 싸는 날',
  steps:[
    {type:'intro', who:'tori',
     t:'내일 한국에 가! 오늘 밤에 가방을 싸는데 모이가 놀러 왔어. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'내일 한국에 갈 거야!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 앞으로 할 일(거야, 거예요)을 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 뭐 해?', en:'Tori, what are you doing?'},
       {who:'tori', t:'가방을 싸. 내일 한국에 갈 거야!', en:"I'm packing. I'm going to Korea tomorrow!"},
       {who:'moi', t:'와! 비행기를 탈 거야?', en:'Wow! Are you going to take a plane?'},
       {who:'tori', t:'응. 비행기에서 영화도 볼 거야.', en:"Yes. I'll watch a movie on the plane too."},
       {who:'moi', t:'여권은 있어?', en:'Do you have your passport?'},
       {who:'tori', t:'앗, 여권이 없어! 어디에 있지?', en:"Oh no, my passport is missing! Where is it?"},
       {who:'dami', t:'허허, 여권은 책상 위에 있단다. 한국에서 할머니를 만나면 안부 전해 주거라.', en:"Ho ho, your passport is on the desk. When you meet Grandma in Korea, give her my regards."},
       {who:'tori', t:'네, 할아버지! 할머니께 꼭 인사드릴 거예요.', en:"Yes, Grandpa! I'll be sure to greet her."}],
     note:{who:'dami', t:'토리가 모이에게는 ‘갈 거야’, 나에게는 ‘인사드릴 거예요’라고 했지? 앞날을 말할 때도 친구와 어른에게 하는 말이 다르단다. 그리고 여행 가기 전날 여권 찾기는 어른들도 자주 하는 일이지.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 언제 한국에 가요?', o:['오늘','내일','어제'], a:'내일', why:'토리는 ‘내일 한국에 갈 거야!’라고 했어요.'},
       {t:'비행기에서 무엇을 할 거예요?', o:['영화를 볼 거예요','수영을 할 거예요','숙제를 할 거예요'], a:'영화를 볼 거예요', why:'토리는 ‘영화도 볼 거야’라고 했어요.'},
       {t:'여권은 어디에 있었어요?', o:['가방 안','책상 위','침대 아래'], a:'책상 위', why:'할아버지가 ‘여권은 책상 위에 있단다’라고 하셨어요.'},
       {t:'토리는 한국에서 누구를 만날 거예요?', o:['선생님','할머니','모이'], a:'할머니', why:'할아버지가 할머니께 안부를 전해 달라고 하셨어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'tr_vacation', line:{who:'moi', t:'토리야, 방학에 뭐 할 거야?'}, en:'Tori, what will you do during vacation?', o:['한국에 갈 거야.','한국에 갈 거예요.'], a:'한국에 갈 거야.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'p_grandma', line:{who:'dami', t:'토리야, 한국에서 누구를 만날 거냐?'}, en:'Tori, who will you meet in Korea?', o:['할머니를 만났어요.','할머니를 만날 거예요.'], a:'할머니를 만날 거예요.', why:'앞으로 할 일이라서 만날 거예요예요.'},
       {pic:'yesterday', t:'어제 가방을 쌌어요. 할아버지께 어떻게 말해요?', en:'You packed yesterday. Tell Grandpa.', o:['어제 가방을 쌌어요.','어제 가방을 쌀 거예요.'], a:'어제 가방을 쌌어요.', why:'어제 일이라서 쌌어요예요.'}]},
    {type:'task', title:'방학 계획 말하기', who:'moi',
     t:'다음 방학이나 주말에 무엇을 할지 가족에게 말해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'어디에 갈지', say:'방학에 ______에 갈 거예요.', sub:'한국, 할머니 댁, 공원, 도서관 어디든 좋아요.'},
       {when:'무엇을 할지', say:'______을 할 거예요.', sub:'받침이 없으면 를: 수영을 할 거예요, 여행을 할 거예요.'},
       {when:'누구를 만날지', say:'______를 만날 거예요.', sub:'받침이 있으면 을: 친구를 만날 거예요, 선생님을 만날 거예요.'}],
     parent:'아이와 다음 방학이나 주말 계획을 한국어로 이야기해 보세요. 한국에 갈 계획이 없어도 괜찮습니다. 공원, 도서관, 할머니 댁처럼 가까운 곳도 좋습니다. 계획이 끝나고 나면 "어제 공원에 갔어요"처럼 지난 일로 다시 말하게 해 보시면 넷째 달과 다섯째 달이 자연스럽게 이어집니다. 한국에 갈 계획이 있다면 달력에 날짜를 적고 "몇 밤 남았어요?"를 세어 보셔도 좋습니다.'}
  ],
  dictWords:[] },

/* ---- 넷째 묶음: 이거 얼마예요? --------------------------------------
   돈(백, 천, 만과 원)과 가게에서 쓰는 말(이거 얼마예요?, 주세요, 모두, 어서 오세요).
   약속대로 딱 떨어지는 값(백 원, 오백 원, 천 원, 이천 원, 삼천 원, 오천 원, 만 원)만 씁니다.
   개는 하나 둘로, 원은 일 이로 센다는 넷째 달의 두 숫자 구별을 다시 씁니다(우유 두 개, 이천 원).
   백, 천, 만 앞에는 일을 붙이지 않습니다(백 원, 천 원, 만 원). */
{ n:10, bundle:4, title:'백, 천, 만',
  steps:[
    {type:'intro', who:'moi',
     t:'한국에 가면 돈을 쓸 거야. 한국 돈은 원이야. 오늘은 돈을 세는 말을 모아 왔어.',
     big:'백 원, 천 원, 만 원'},
    {type:'pairs', title:'한국 돈', who:'moi',
     t:'동전과 지폐야. 누르면 소리가 나. 숫자를 잘 봐.',
     singles:[
       {w:'돈', pic:'money', en:'money'}, {w:'백 원', pic:'mo100', en:'100 won'}, {w:'오백 원', pic:'mo500', en:'500 won'},
       {w:'천 원', pic:'mo1000', en:'1,000 won'}, {w:'오천 원', pic:'mo5000', en:'5,000 won'}, {w:'만 원', pic:'mo10000', en:'10,000 won'}],
     tip:{who:'dami', t:'백, 천, 만 앞에는 일을 붙이지 않는단다. 일백 원이 아니라 백 원, 일천 원이 아니라 천 원이지. 둘이면 이천 원, 셋이면 삼천 원이란다. 그리고 동그라미 넷 달린 10000은 십천이 아니라 만이란다.'}},
    {type:'pairs', title:'천 원이 여러 장', who:'moi',
     t:'천 원짜리가 여러 장이면 넷째 달에 배운 일, 이, 삼을 앞에 붙여.',
     singles:[
       {w:'이천 원', pic:'mo2000', en:'2,000 won'}, {w:'삼천 원', pic:'mo3000', en:'3,000 won'}, {w:'육백 원', pic:'mo600', en:'600 won'}]},
    {type:'choose', title:'얼마예요?', who:'tori',
     t:'돈 그림을 보고 바르게 읽은 쪽을 골라 봐.',
     qs:[
       {pic:'mo1000', o:['천 원','일천 원','백 원'], a:'천 원', why:'천 앞에는 일을 붙이지 않아요.'},
       {pic:'mo500', o:['오백 원','다섯백 원','오천 원'], a:'오백 원', why:'원은 일, 이, 삼으로 세요.'},
       {pic:'mo3000', o:['셋천 원','삼천 원','삼백 원'], a:'삼천 원', why:'천 원이 세 장이라서 삼천 원이에요.'},
       {pic:'mo10000', o:['십천 원','만 원','천 원'], a:'만 원', why:'10000은 만이에요.'},
       {pic:'mo600', o:['육백 원','오백 원','육천 원'], a:'육백 원', why:'오백 원과 백 원을 더하면 육백 원이에요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 돈을 찾아 봐.',
     qs:[
       {say:'오천 원', o:['mo5000','mo500','mo10000'], a:'mo5000'},
       {say:'백 원', o:['mo1000','mo100','mo500'], a:'mo100'},
       {say:'이천 원', o:['mo3000','mo2000','mo1000'], a:'mo2000'},
       {say:'만 원', o:['mo10000','mo5000','mo1000'], a:'mo10000'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'돈을 세는 말을 써 봐.',
     items:[{w:'돈', en:'money'}, {w:'천', en:'thousand'}, {w:'만', en:'ten thousand'}]}
  ],
  dictWords:[{w:'돈', en:'money'}, {w:'백', en:'hundred'}, {w:'천', en:'thousand'}, {w:'만', en:'ten thousand'}, {w:'원', en:'won'}] },

{ n:11, bundle:4, title:'이거 얼마예요?',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 가게에서 물건을 사 볼 거야. 값을 묻고, 달라고 하고, 돈을 내는 말이야.',
     big:'이거 얼마예요?'},
    {type:'pairs', title:'가게에서 쓰는 말', who:'moi',
     t:'가게에서 자주 듣고 말하는 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'이거 얼마예요?', pic:'tag_tteok', en:'How much is this?'}, {w:'이거 주세요', pic:'tag_gimbap', en:'I will take this, please.'},
       {w:'모두', pic:'mo5000', en:'all together'}, {w:'어서 오세요', pic:'shop5', en:'Welcome!'},
       {w:'여기 있어요', pic:'money', en:'Here you are.'}, {w:'과자', pic:'snack', en:'snack'}],
     tip:{who:'tori', t:'가게 주인은 손님에게 높이는 말을 써. 어서 오세요, 감사합니다. 손님도 이거 주세요, 여기 있어요처럼 높여서 말하면 좋아.'}},
    {type:'choose', title:'얼마예요?', who:'tori',
     t:'가격표를 보고 알맞은 대답을 골라 봐.',
     qs:[
       {pic:'tag_tteok', t:'떡볶이는 얼마예요?', o:['삼천 원이에요.','셋천 원이에요.'], a:'삼천 원이에요.', en:"It's 3,000 won."},
       {pic:'tag_snack', t:'과자는 얼마예요?', o:['오백 원이에요.','오천 원이에요.'], a:'오백 원이에요.', en:"It's 500 won."},
       {pic:'tag_milk', t:'우유 두 개는 모두 얼마예요?', o:['이천 원이에요.','둘천 원이에요.'], a:'이천 원이에요.', en:"It's 2,000 won in total.", why:'천 원이 두 번이라서 이천 원이에요.'},
       {pic:'tag_gimbap', t:'김밥을 사고 싶어요. 뭐라고 해요?', o:['김밥 하나 주세요.','김밥 일 주세요.'], a:'김밥 하나 주세요.', en:'One gimbap, please.', why:'물건을 셀 때는 하나, 둘이에요.'}]},
    {type:'shrink', title:'개는 하나 둘, 원은 일 이', who:'dami',
     t:'넷째 달에 배운 두 숫자를 가게에서 함께 쓴단다. 물건은 하나, 둘로, 돈은 일, 이로 세거라.',
     rows:[['하나','한'], ['둘','두'], ['셋','세']],
     units:['개'],
     note:'우유 두 개, 이천 원. 김밥 세 개, 육천 원. 물건은 두 개, 세 개, 값은 이천, 육천이지. 헷갈리면 이 할아버지를 떠올리거라.'},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'이거 얼마예요?', tiles:['이거','얼마예요?'], en:'How much is this?'},
       {s:'김밥 하나 주세요.', tiles:['김밥','하나','주세요.'], extra:['일'], en:'One gimbap, please.'},
       {s:'우유 두 개 주세요.', tiles:['우유','두','개','주세요.'], extra:['이'], en:'Two milks, please.', hint:'물건은 하나, 둘로 세요.'},
       {s:'모두 오천 원이에요.', tiles:['모두','오천','원이에요.'], extra:['다섯천'], en:"It's 5,000 won in total.", hint:'돈은 일, 이로 세요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'돈을 셀 때도 받침이 원으로 건너간단다. 들어 보거라.',
     cmp:[
       {s:'천 원', d:'처 눤', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'만 원', d:'마 눤', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'오백 원', d:'오배 권', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'얼마예요', d:'얼마예요', n:'받침이 없어서 그대로 나요'}],
     note:'[처 눤], [마 눤]으로 들려도 쓸 때는 천 원, 만 원이란다. 숫자와 원은 띄어 쓰는 것도 잊지 말거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐.',
     items:[{w:'얼마', en:'how much'}, {w:'과자', en:'snack'}, {w:'모두', en:'all together'}]}
  ],
  dictWords:[{w:'얼마', en:'how much'}, {w:'과자', en:'snack'}, {w:'모두', en:'all together'}, {w:'주세요', en:'please give me'}] },

{ n:12, bundle:4, title:'모이네 떡볶이 가게',
  steps:[
    {type:'intro', who:'tori',
     t:'모이가 떡볶이 가게 놀이를 열었대! 나는 손님이야. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'어서 오세요!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 값을 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'어서 오세요! 모이네 가게예요.', en:"Welcome! This is Moi's shop."},
       {who:'tori', t:'안녕하세요. 떡볶이는 얼마예요?', en:'Hello. How much is the tteokbokki?'},
       {who:'moi', t:'떡볶이는 삼천 원이에요. 김밥은 이천 원이에요.', en:'Tteokbokki is 3,000 won. Gimbap is 2,000 won.'},
       {who:'tori', t:'떡볶이 하나하고 김밥 하나 주세요.', en:'One tteokbokki and one gimbap, please.'},
       {who:'moi', t:'모두 오천 원이에요.', en:"That's 5,000 won in total."},
       {who:'tori', t:'여기 있어요.', en:'Here you are.'},
       {who:'dami', t:'허허, 나도 우유 두 개 주세요. 얼마예요?', en:'Ho ho, two milks for me too, please. How much?'},
       {who:'moi', t:'할아버지, 이천 원이에요. 감사합니다. 또 오세요!', en:"Grandpa, that's 2,000 won. Thank you. Come again!"}],
     note:{who:'dami', t:'모이가 가게 주인이 되니 손님에게 ‘어서 오세요’, ‘감사합니다’라고 높여서 말했지? 한국 가게에서는 어른이든 아이든 손님에게 이렇게 말한단다. 그리고 나는 우유 ‘두 개’를 사고 ‘이천 원’을 냈지. 두 숫자가 다 나왔구나.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'떡볶이는 얼마예요?', o:['이천 원','삼천 원','오천 원'], a:'삼천 원', why:'모이가 ‘떡볶이는 삼천 원이에요’라고 했어요.'},
       {t:'토리는 모두 얼마를 냈어요?', o:['삼천 원','오천 원','만 원'], a:'오천 원', why:'떡볶이 삼천 원에 김밥 이천 원을 더해서 오천 원이에요.'},
       {t:'할아버지는 우유를 몇 개 샀어요?', o:['한 개','두 개','세 개'], a:'두 개', why:'할아버지는 ‘우유 두 개 주세요’라고 하셨어요.'},
       {t:'모이가 손님을 맞으며 처음 한 말은?', o:['어서 오세요','안녕히 가세요','잘 먹겠습니다'], a:'어서 오세요', why:'가게에서는 손님에게 ‘어서 오세요’라고 해요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 손님이야. 가게 주인 모이에게 대답해 봐.',
     qs:[
       {pic:'tag_gimbap', line:{who:'moi', t:'어서 오세요! 뭐 드릴까요?'}, en:'Welcome! What can I get you?', o:['김밥 하나 주세요.','김밥 일 주세요.'], a:'김밥 하나 주세요.', why:'물건은 하나, 둘로 세요.'},
       {pic:'tag_milk', line:{who:'dami', t:'토리야, 우유는 얼마냐?'}, en:'Tori, how much is the milk?', o:['천 원이에요.','일천 원이에요.'], a:'천 원이에요.', why:'천 앞에는 일을 붙이지 않아요.'},
       {pic:'mo5000', t:'떡볶이(삼천 원)와 김밥(이천 원)을 샀어요. 모두 얼마예요?', en:'Tteokbokki (3,000) and gimbap (2,000). How much in total?', o:['오천 원이에요.','삼천 원이에요.'], a:'오천 원이에요.'}]},
    {type:'task', title:'우리 집 가게 놀이', who:'moi',
     t:'가족과 가게 놀이를 해 봐. 한 번은 주인, 한 번은 손님! 다 하면 했어요를 눌러.',
     lines:[
       {when:'주인이 되어 손님을 맞아요', say:'어서 오세요!', sub:'물건에 가격표를 붙여요: 천 원, 오백 원.'},
       {when:'손님이 되어 물어요', say:'이거 얼마예요?', sub:'대답을 듣고 돈을 세어 봐요.'},
       {when:'사고 싶은 것을 말해요', say:'이거 ______ 주세요.', sub:'물건은 하나, 둘로: 사과 두 개 주세요.'}],
     parent:'집에 있는 과일, 과자, 장난감에 포스트잇으로 가격표(오백 원, 천 원, 이천 원처럼 딱 떨어지는 값)를 붙이고 가게 놀이를 해 주세요. 종이로 천 원, 오천 원, 만 원 지폐를 만들어 쓰면 더 재미있습니다. 아이가 주인일 때는 "어서 오세요", "감사합니다"를, 손님일 때는 "이거 얼마예요?", "여기 있어요"를 쓰게 해 주세요. 물건은 하나, 둘(두 개), 값은 일, 이(이천 원)로 센다는 점을 한 번씩 짚어 주시면 좋습니다.'}
  ],
  dictWords:[] },

/* ---- 다섯째 묶음: 할머니 댁까지 --------------------------------------
   한국에서 타는 것(지하철, 버스, 택시, 기차)과 역, 표, 내려요.
   버스 번호는 일, 이, 삼으로 읽습니다(칠 번 버스). 넷째 달의 길 찾기, 존댓말과
   다섯째 달의 잇는 말, 지난 일, 앞날이 마지막 이야기에 모두 모입니다.
   호랑이 할머니(넷째 달)가 다시 나오고, 담이 할아버지가 부탁한 안부를 토리가 전합니다. */
{ n:13, bundle:5, title:'지하철을 타요',
  steps:[
    {type:'intro', who:'moi',
     t:'토리가 드디어 한국에 도착했어! 공항에서 할머니 댁까지 가려면 무엇을 타야 할까? 오늘은 탈것을 모아 왔어.',
     big:'지하철을 타요'},
    {type:'pairs', title:'한국의 탈것', who:'moi',
     t:'한국에서 많이 타는 것이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'지하철', pic:'ride_subway', en:'subway'}, {w:'버스', pic:'ride_bus', en:'bus'}, {w:'택시', pic:'ride_taxi', en:'taxi'},
       {w:'기차', pic:'ride_train', en:'train'}, {w:'역', pic:'ride_station', en:'station'}, {w:'표', pic:'ride_ticket', en:'ticket'}],
     tip:{who:'dami', t:'한국 도시에는 지하철이 거미줄처럼 이어져 있단다. 서울 지하철은 줄마다 색이 달라서, 몇 호선인지 색으로도 찾을 수 있지.'}},
    {type:'pairs', title:'탈 때와 내릴 때', who:'moi',
     t:'탈것에 오를 때와 나올 때 쓰는 말이야.',
     singles:[
       {w:'타요', pic:'ride_bus', en:'get on, ride'}, {w:'내려요', pic:'ride_getoff', en:'get off'},
       {w:'역에서', pic:'ride_station', en:'at the station'}, {w:'도착해요', pic:'g_house', en:'arrive'}],
     tip:{who:'tori', t:'버스를 타요, 버스에서 내려요. 탈 때는 을/를, 내릴 때는 에서야. 어디에서 내리는지 말하는 거니까.'}},
    {type:'choose', title:'무엇을 타요?', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'ride_subway', o:['지하철','기차','버스'], a:'지하철'},
       {pic:'ride_taxi', o:['택시를 타요.','택시를 해요.'], a:'택시를 타요.', en:'I take a taxi.'},
       {pic:'ride_getoff', o:['버스에서 내려요.','버스를 내려요.'], a:'버스에서 내려요.', en:'I get off the bus.', why:'내릴 때는 에서예요.'},
       {pic:'ride_ticket', o:['표','돈','여권'], a:'표'},
       {pic:'ride_station', o:['역','공항','공원'], a:'역'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'기차', o:['ride_subway','ride_train','ride_bus'], a:'ride_train'},
       {say:'버스', o:['ride_bus','ride_taxi','ride_subway'], a:'ride_bus'},
       {say:'내려요', o:['ride_ticket','ride_getoff','ride_station'], a:'ride_getoff'},
       {say:'택시', o:['ride_train','ride_bus','ride_taxi'], a:'ride_taxi'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'탈것 이름을 써 봐.',
     items:[{w:'버스', en:'bus'}, {w:'기차', en:'train'}, {w:'택시', en:'taxi', hint:{who:'dami', t:'소리는 [택씨]지만 글자는 ‘시’란다. ㄱ 받침 뒤라서 세게 들리지.'}}]}
  ],
  dictWords:[{w:'지하철', en:'subway'}, {w:'버스', en:'bus'}, {w:'택시', en:'taxi'}, {w:'기차', en:'train'},
             {w:'역', en:'station'}, {w:'표', en:'ticket'}, {w:'내려요', en:'get off'}] },

{ n:14, bundle:5, title:'칠 번 버스를 타요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 할머니 댁 가는 길을 말해 볼 거야. 몇 번 버스를 타는지, 어디에서 내리는지. 다섯째 달에 배운 잇는 말도 다 써!',
     big:'칠 번 버스를 타요'},
    {type:'choose', title:'버스 번호 읽기', who:'dami',
     t:'버스 번호는 일, 이, 삼으로 읽는단다. 번 앞의 숫자는 날짜처럼 읽지.',
     qs:[
       {pic:'ride_bus7', t:'몇 번 버스예요?', o:['칠 번 버스예요.','일곱 번 버스예요.'], a:'칠 번 버스예요.', en:"It's bus number 7.", why:'버스 번호는 일, 이, 삼으로 읽어요.'},
       {pic:'n12', t:'이 번호의 버스를 타요.', o:['십이 번 버스를 타요.','열두 번 버스를 타요.'], a:'십이 번 버스를 타요.', en:'I take bus number 12.'},
       {pic:'n3', t:'지하철 삼 호선을 타요. 몇 호선이에요?', o:['삼 호선','세 호선'], a:'삼 호선', en:'Line 3', why:'지하철 줄 번호도 일, 이, 삼으로 읽어요.'}]},
    {type:'sequence', title:'할머니 댁 가는 길', who:'moi',
     t:'공항에서 할머니 댁까지 가는 순서야. 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'tr_airport', t:'공항에 도착했어요.'}, {pic:'ride_subway', t:'지하철을 탔어요.'}, {pic:'ride_bus7', t:'칠 번 버스로 갈아탔어요.'}, {pic:'g_house', t:'할머니 댁에 도착했어요.'}]}]},
    {type:'choose', title:'길을 말해요', who:'tori',
     t:'그림에 맞는 문장을 골라 봐. 잇는 말과 지난 일, 앞날을 잘 봐.',
     qs:[
       {pic:'ride_subway', o:['지하철을 타고 역에서 내렸어요.','지하철을 탔고 역에서 내려요.'], a:'지하철을 타고 역에서 내렸어요.', en:'I took the subway and got off at the station.', why:'고에는 ㅆ을 넣지 않고, 맨 끝이 언제인지 정해요.'},
       {pic:'tomorrow', t:'내일 할 일이에요.', o:['내일 기차를 탈 거예요.','내일 기차를 탔어요.'], a:'내일 기차를 탈 거예요.', en:"I'll take the train tomorrow."},
       {pic:'town', t:'할머니 댁은 어디에 있어요?', o:['공원 앞에 있어요.','앞 공원에 있어요.'], a:'공원 앞에 있어요.', en:"It's in front of the park.", why:'물건이 먼저, 자리가 나중이에요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'칠 번 버스를 탈 거예요.', tiles:['칠','번','버스를','탈','거예요.'], extra:['일곱'], en:"I'll take bus number 7."},
       {s:'지하철을 타고 역에서 내렸어요.', tiles:['지하철을','타고','역에서','내렸어요.'], extra:['탔고'], en:'I took the subway and got off at the station.'},
       {s:'할머니 댁은 공원 앞에 있어요.', tiles:['할머니','댁은','공원','앞에','있어요.'], extra:['집은'], en:"Grandma's house is in front of the park.", hint:'할머니의 집은 댁이에요.'},
       {s:'먼저 지하철을 타요. 그다음에 버스를 타요.', tiles:['먼저','지하철을','타요.','그다음에','버스를','타요.'], en:'First take the subway. Then take the bus.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'탈것과 번호에도 소리 비밀이 있단다.',
     cmp:[
       {s:'역에서', d:'여게서', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'몇 번', d:'멷 뻔', n:'ㅊ 받침은 ㄷ처럼, 뒤의 ㅂ은 ㅃ처럼 나요'},
       {s:'택시', d:'택씨', n:'ㄱ 받침 뒤의 ㅅ은 ㅆ처럼 나요'},
       {s:'십 번', d:'십 뻔', n:'ㅂ 받침 뒤의 ㅂ은 ㅃ처럼 나요'}],
     note:'받침 뒤에 오는 ㄱ, ㄷ, ㅂ, ㅅ, ㅈ은 힘이 들어가 세게 소리 나곤 한단다. 첫째 달부터 여러 번 만났지? 하지만 글자는 늘 제 모양 그대로란다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'역에서', en:'at the station', hint:{who:'dami', t:'소리는 [여게서]지만 ‘역’에 받침 ㄱ이 있단다.'}},
       {w:'지하철', en:'subway'},
       {w:'내렸어요', en:'got off', hint:{who:'dami', t:'내려요의 지난 일이란다. ‘렸’에 ㅆ을 넣거라.'}}]}
  ],
  dictWords:[{w:'역에서', en:'at the station'}, {w:'내렸어요', en:'got off'}, {w:'도착해요', en:'arrive'}] },

{ n:15, bundle:5, title:'드디어 할머니 댁',
  steps:[
    {type:'intro', who:'tori',
     t:'다섯째 달 마지막 밤이야. 드디어 할머니 댁에 왔어! 넷째 달에 만난 호랑이 할머니 기억나? 먼저 귀로만 들어 봐.',
     big:'할머니, 안녕하세요!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리가 여행 이야기를 어떻게 이어서 하는지 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'halmi', t:'아이고, 토리야! 어서 오너라. 먼 길 오느라 애썼구나.', en:'Oh my, Tori! Come in. You came such a long way.'},
       {who:'tori', t:'할머니, 안녕하세요! 담이 할아버지가 안부 전해 달라고 하셨어요.', en:'Hello, Grandma! Grandpa Dami asked me to send his regards.'},
       {who:'halmi', t:'고맙구나. 그래, 어떻게 왔니?', en:'Thank you. So, how did you get here?'},
       {who:'tori', t:'먼저 비행기를 타고 한국에 왔어요. 그리고 지하철을 탔어요.', en:'First I flew to Korea. Then I took the subway.'},
       {who:'tori', t:'그다음에 칠 번 버스를 타고 공원 앞에서 내렸어요.', en:'Next I took bus number 7 and got off in front of the park.'},
       {who:'moi', t:'할머니, 저도 왔어요! 까치는 날아서 왔어요!', en:'Grandma, I came too! Magpies fly here!'},
       {who:'halmi', t:'허허, 모이도 왔구나. 배고프지? 떡을 만들었단다.', en:"Ho ho, Moi came too. You must be hungry. I made rice cakes."},
       {who:'tori', t:'감사합니다, 잘 먹겠습니다! 내일은 할머니하고 시장에 갈 거예요.', en:"Thank you, I'll enjoy it! Tomorrow I'll go to the market with you, Grandma."}],
     note:{who:'halmi', t:'토리가 여행 이야기를 먼저, 그리고, 그다음에로 차례차례 이어서 했구나. 어제 온 길은 왔어요, 내렸어요, 내일 할 일은 갈 거예요. 할머니한테는 높이는 말로 또박또박. 다섯 달 동안 참 많이 컸다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 무엇을 타고 한국에 왔어요?', o:['기차','비행기','택시'], a:'비행기', why:'토리는 ‘비행기를 타고 한국에 왔어요’라고 했어요.'},
       {t:'토리는 몇 번 버스를 탔어요?', o:['칠 번','십 번','삼 번'], a:'칠 번', why:'토리는 ‘칠 번 버스를 타고’라고 했어요.'},
       {t:'버스에서 어디에서 내렸어요?', o:['역 앞','공원 앞','학교 앞'], a:'공원 앞', why:'토리는 ‘공원 앞에서 내렸어요’라고 했어요.'},
       {t:'내일은 무엇을 할 거예요?', o:['시장에 갈 거예요','집에 갈 거예요','학교에 갈 거예요'], a:'시장에 갈 거예요', why:'토리는 ‘내일은 할머니하고 시장에 갈 거예요’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'tr_plane', line:{who:'halmi', t:'토리야, 어떻게 왔니?'}, en:'Tori, how did you get here?', o:['비행기를 타고 왔어.','비행기를 타고 왔어요.'], a:'비행기를 타고 왔어요.', why:'할머니께는 ‘왔어요’로 말해요.'},
       {pic:'shop5', line:{who:'moi', t:'토리야, 내일 뭐 할 거야?'}, en:'Tori, what will you do tomorrow?', o:['시장에 갈 거야.','시장에 갔어.'], a:'시장에 갈 거야.', why:'내일 일이라서 갈 거야예요. 모이는 친구라 편한 말로.'},
       {pic:'p_halmi', t:'할머니께 떡을 받았어요. 먹기 전에 뭐라고 해요?', en:'Grandma gave you rice cakes.', o:['잘 먹겠습니다.','잘 먹었습니다.'], a:'잘 먹겠습니다.', why:'먹기 전에는 ‘잘 먹겠습니다’예요.'}]},
    {type:'task', title:'나의 여행 이야기', who:'moi',
     t:'다섯째 달 마지막 과제야. 다녀온 여행이나 가 보고 싶은 여행을 이야기로 들려줘. 다 하면 했어요를 눌러.',
     lines:[
       {when:'처음', say:'먼저 ______을 타고 ______에 갔어요.', sub:'가 보고 싶은 여행이면 갈 거예요로.'},
       {when:'가운데', say:'그리고 ______. 그다음에 ______.', sub:'무엇을 먹었는지, 누구를 만났는지 이어서.'},
       {when:'끝', say:'마지막에 ______. 참 ______.', sub:'그때 기분으로 끝내요: 참 기뻤어요.'}],
     parent:'다섯째 달의 마무리 과제입니다. 실제로 다녀온 여행(한국이 아니어도 괜찮습니다)이나 가 보고 싶은 여행을 아이가 네다섯 문장으로 이어서 말하게 해 주세요. 먼저, 그리고, 그다음에, 마지막에를 넣고, 다녀온 일은 "갔어요", 앞으로의 일은 "갈 거예요"로 말하는지 봐 주시면 됩니다. 영상으로 찍어 조부모님께 보내 드리면 아이가 스스로 자랑스러워합니다. 이 과제로 다섯째 달이 끝납니다. 이야기 잇기, 친구, 앞날, 돈, 한국 방문까지 모두 해냈으니 많이 칭찬해 주세요.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인 ----
   묶음마다 세 문제, 두 문제 이상 맞히면 그 묶음을 건너뜁니다. */
const M5_CHECK = [
  {k:1, qs:[
    {pic:'w_umbrella', t:'비가 왔어요. ______ 우산을 썼어요.', o:['그래서','그런데'], a:'그래서'},
    {pic:'act_eat', t:'밥을 먹었어요. 학교에 갔어요. 한 문장으로는?', o:['밥을 먹고 학교에 갔어요.','밥을 먹었고 학교에 가요.'], a:'밥을 먹고 학교에 갔어요.'},
    {mode:'pic', say:'그런데', t:'듣고 그림을 골라요.', o:['and','so','but'], a:'but'}]},
  {k:2, qs:[
    {mode:'pic', say:'줄넘기', t:'듣고 그림을 골라요.', o:['pl5_bike','pl5_rope','pl5_swim'], a:'pl5_rope'},
    {pic:'pl5_bike', t:'그림에 맞는 말을 골라요.', o:['자전거를 탈 수 있어요.','자전거를 타을 수 있어요.'], a:'자전거를 탈 수 있어요.'},
    {pic:'p_grandpa', t:'할아버지께 같이 하자고 여쭤요.', o:['같이 놀자!','같이 하실래요?'], a:'같이 하실래요?'}]},
  {k:3, qs:[
    {mode:'pic', say:'여권', t:'듣고 그림을 골라요.', o:['tr_clothes','tr_passport','tr_plane'], a:'tr_passport'},
    {pic:'tomorrow', t:'내일 한국에 ______.', o:['갔어요','갈 거예요'], a:'갈 거예요'},
    {pic:'f_kimchi', t:'한국에서 김치를 ______.', o:['먹을 거예요','먹 거예요'], a:'먹을 거예요'}]},
  {k:4, qs:[
    {pic:'mo1000', t:'얼마예요?', o:['일천 원','천 원'], a:'천 원'},
    {pic:'mo3000', t:'얼마예요?', o:['삼천 원','셋천 원'], a:'삼천 원'},
    {pic:'tag_gimbap', t:'김밥을 사고 싶어요.', o:['김밥 일 주세요.','김밥 하나 주세요.'], a:'김밥 하나 주세요.'}]},
  {k:5, qs:[
    {mode:'pic', say:'지하철', t:'듣고 그림을 골라요.', o:['ride_bus','ride_subway','ride_taxi'], a:'ride_subway'},
    {pic:'ride_bus7', t:'몇 번 버스예요?', o:['칠 번 버스예요.','일곱 번 버스예요.'], a:'칠 번 버스예요.'},
    {pic:'ride_getoff', t:'그림에 맞는 말을 골라요.', o:['버스에서 내려요.','버스를 내려요.'], a:'버스에서 내려요.'}]}
];

/* ---- 받아쓰기 자판: 넷째 달과 같습니다 ---- */
const M5_POOL = M4_POOL;

/* 달 등록 정보 */
const FIFTH_MOON = {
  key: 'fifth-moon', title: '다섯째 달', path: 'fifth-moon/',
  store: 'daltokki:v1:fifth-moon',
  units: M5_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M5_POOL,
  num: 5, name: '다섯째 달', title2: '다섯째 달, 한국에 가요', nextName: '여섯째 달', nextPath: 'sixth-moon/',
  topics: '이야기 잇기, 친구, 앞날, 돈, 한국 방문',
  nights: M5_NIGHTS, bundles: M5_BUNDLES, pic: M5_PIC, keys: M5_POOL, total: M5_TOTAL, check: M5_CHECK,
  prev: {store: 'daltokki:v1:fourth-moon', total: 15},
  text: {
    welcomePrev: '넷째 달을 다 채웠구나. 이번 달에는 문장을 이어서 이야기를 만들어. 친구와 놀고, 한국에 갈 준비를 하고, 가게에서 물건도 사고, 할머니 댁까지 가 보자. 열다섯 밤이면 보름달이 떠.',
    welcomeFresh: '다섯째 달에서는 문장을 이어서 이야기를 해. 넷째 달의 지난 일과 존댓말을 알고 오면 훨씬 쉬워. 이미 한국어로 꽤 말할 줄 알면 여기서 시작해도 돼.',
    parents: '다섯째 달은 이야기 잇기, 친구, 앞날 말하기, 돈, 한국 방문의 다섯 묶음으로, 묶음마다 세 밤입니다. 한 문장을 넘어 여러 문장을 이어 말하는 것이 목표입니다. 돈은 딱 떨어지는 값(오백 원, 천 원, 오천 원, 만 원)까지만 다룹니다.'
  }
};
