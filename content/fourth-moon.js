/* ══════════════════════════════════════════════════════════════
   넷째 달, 어제와 내 마음 (3단계)
   어제 한 일과 내 마음을 말하는 달입니다.
   다섯 묶음: 어제 뭐 했어요(지난 일), 기분이 어때요(기분), 일, 이, 삼(한자어 수, 날짜와 분),
   어디에 있어요(길 찾기), 할머니 댁에 가요(존댓말).

   이 파일은 content/second-moon.js, content/third-moon.js 다음에 불러옵니다.
   앞 달의 그림 도구와 그림(M3_PIC 안에 M2_PIC 포함)을 그대로 빌려 쓰고, 넷째 달 그림만 M4_ONLY 에 더합니다.
   새 규칙(았어요/었어요)은 받침이 아니라 앞 글자의 모음을 봅니다. 화면마다 이 차이를 분명히 말합니다.
   한자어 수는 날짜와 분까지만 다루고, 돈(원)은 다섯째 달로 넘깁니다.
   ══════════════════════════════════════════════════════════════ */

const M4_TOTAL = 15;

/* ---- 첫째 묶음 그림 ---- */
const M4_ONLY = {
  /* 어제: 오늘 카드에서 앞 카드로 돌아가는 화살표(셋째 달 내일 그림의 반대) */
  yesterday: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="어제">
    <rect x="14" y="30" width="66" height="72" rx="8" fill="#E7E0CF" stroke="#221F1C" stroke-width="3"/>
    <path d="M55 50 A16 16 0 1 0 60 80 A12 12 0 1 1 55 50 Z" fill="#F5E6BD" stroke="#221F1C" stroke-width="2"/>
    <rect x="120" y="30" width="66" height="72" rx="8" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/><circle cx="153" cy="66" r="12" fill="#F2C14E" stroke="#221F1C" stroke-width="2"/>
    <path d="M114 66 L88 66" stroke="#2D6E8E" stroke-width="5" stroke-linecap="round"/><path d="M96 58 L86 66 L96 74" stroke="#2D6E8E" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  weekend: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="주말">
    <g transform="translate(-42 0)">${M3_PIC.day6.replace(/<\/?svg[^>]*>/g, '')}</g><g transform="translate(42 0)">${M3_PIC.day7.replace(/<\/?svg[^>]*>/g, '')}</g></svg>`,
  tv: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="텔레비전을 봐요">${m2Ground}
    <rect x="110" y="40" width="76" height="52" rx="4" fill="#17324A" stroke="#221F1C" stroke-width="3"/>
    <rect x="116" y="46" width="64" height="40" fill="#9DC3DC"/><circle cx="136" cy="66" r="8" fill="#F2C14E"/><path d="M150 80 L162 62 L174 80 Z" fill="#6E8F58"/>
    <path d="M140 92 L136 104 M156 92 L160 104" stroke="#221F1C" stroke-width="3"/><rect x="126" y="104" width="44" height="6" fill="#8A6A4A" stroke="#221F1C" stroke-width="2"/>
    ${m2Person('kid', 60, 'stand', 1)}</svg>`,
  make: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="만들어요">${m2Ground}
    ${m2Person('grandma', 64, 'give', 1)}
    <rect x="90" y="84" width="96" height="8" fill="#B08452" stroke="#221F1C" stroke-width="2.4"/><path d="M100 92 L100 122 M176 92 L176 122" stroke="#221F1C" stroke-width="4"/>
    ${[108, 128, 148].map(x => `<circle cx="${x}" cy="76" r="8" fill="#221F1C"/><circle cx="${x}" cy="76" r="5.4" fill="#FBF7EC"/><circle cx="${x - 1}" cy="75" r="1.8" fill="#E3A93C"/><circle cx="${x + 2}" cy="77" r="1.6" fill="#6E8F58"/>`).join('')}</svg>`
};
/* ---- 둘째 묶음 그림: 기분 ---- */
function m4Mood(kind){
  const S = '#221F1C';
  const f = {
    happy:  {eyes:`<path d="M78 62 q8 -8 16 0 M106 62 q8 -8 16 0" stroke="${S}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`,
             mouth:`<path d="M82 82 Q100 104 118 82 Z" fill="#C1403A" stroke="${S}" stroke-width="2.8"/>`,
             extra:`<g fill="#E3A93C" stroke="${S}" stroke-width="1.4"><path d="M160 30 l4 9 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1 Z"/><path d="M36 40 l3 6 l6 1 l-5 4 l2 6 l-6 -3 l-6 3 l2 -6 l-5 -4 l6 -1 Z"/></g>`},
    sad:    {eyes:`<path d="M78 60 L92 54 M122 60 L108 54" stroke="${S}" stroke-width="2.6" stroke-linecap="round"/><circle cx="86" cy="66" r="3.6" fill="${S}"/><circle cx="114" cy="66" r="3.6" fill="${S}"/>`,
             mouth:`<path d="M86 92 Q100 80 114 92" stroke="${S}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
             extra:`<path d="M84 72 Q78 86 84 92 Q90 86 84 72 Z" fill="#6FA8D0" stroke="${S}" stroke-width="1.6"/>`},
    angry:  {skin:'#F2B39A', eyes:`<path d="M76 54 L94 62 M124 54 L106 62" stroke="${S}" stroke-width="3.6" stroke-linecap="round"/><circle cx="87" cy="67" r="3.6" fill="${S}"/><circle cx="113" cy="67" r="3.6" fill="${S}"/>`,
             mouth:`<path d="M86 90 L114 90" stroke="${S}" stroke-width="3.4" stroke-linecap="round"/>`,
             extra:`<g stroke="#8C7F63" stroke-width="3" fill="none" stroke-linecap="round"><path d="M70 26 q-6 -8 0 -16 q6 -8 0 -14"/><path d="M130 26 q6 -8 0 -16 q-6 -8 0 -14"/></g>`},
    scared: {eyes:`<circle cx="86" cy="64" r="8" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/><circle cx="114" cy="64" r="8" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/><circle cx="86" cy="64" r="3" fill="${S}"/><circle cx="114" cy="64" r="3" fill="${S}"/>`,
             mouth:`<ellipse cx="100" cy="90" rx="8" ry="10" fill="#8A1F1A" stroke="${S}" stroke-width="2.6"/>`,
             extra:`<g stroke="#5A7A8E" stroke-width="2.6" stroke-linecap="round" fill="none"><path d="M46 60 q-6 6 0 12 q6 6 0 12"/><path d="M154 60 q6 6 0 12 q-6 6 0 12"/></g>`},
    bored:  {eyes:`<path d="M78 64 L94 64 M106 64 L122 64" stroke="${S}" stroke-width="3" stroke-linecap="round"/>`,
             mouth:`<path d="M90 90 L110 88" stroke="${S}" stroke-width="3" stroke-linecap="round"/>`,
             extra:`<g font-family="sans-serif" font-weight="700" fill="#8C7F63"><text x="146" y="42" font-size="20">...</text></g>`},
    tired:  {eyes:`<path d="M78 64 q8 5 16 0 M106 64 q8 5 16 0" stroke="${S}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M78 72 q8 3 16 0 M106 72 q8 3 16 0" stroke="#8C7F63" stroke-width="2" fill="none"/>`,
             mouth:`<ellipse cx="100" cy="90" rx="7" ry="6" fill="#8A1F1A" stroke="${S}" stroke-width="2.4"/>`,
             extra:`<g font-family="sans-serif" font-weight="700" fill="#17324A"><text x="148" y="44" font-size="18">Z</text><text x="164" y="30" font-size="13">z</text></g>`}
  }[kind];
  const label = {happy:'기뻐요', sad:'슬퍼요', angry:'화나요', scared:'무서워요', bored:'심심해요', tired:'피곤해요'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">
    <circle cx="100" cy="70" r="42" fill="${f.skin || '#F0D9BE'}" stroke="${S}" stroke-width="3"/>
    <path d="M58 60 C54 16 146 16 142 60 C124 40 76 40 58 60 Z" fill="#221F1C" stroke="${S}" stroke-width="2.6"/>
    ${f.eyes}${f.mouth}${f.extra || ''}</svg>`;
}
['happy', 'sad', 'angry', 'scared', 'bored', 'tired'].forEach(k => { M4_ONLY['mood_' + k] = m4Mood(k); });
M4_ONLY.fall = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="넘어졌어요">${m2Ground}
  <g transform="rotate(-70 100 118)">${m2Person('kid', 100, 'wave', 1)}</g>
  <path d="M128 92 q-3 8 0 10 q3 -2 0 -10" fill="#6FA8D0" stroke="#221F1C" stroke-width="1.4"/>
  <g stroke="#E3A93C" stroke-width="3" stroke-linecap="round"><path d="M40 90 l-8 -6 M44 80 l-4 -9 M52 76 l0 -10"/></g>
  <circle cx="160" cy="116" r="7" fill="#8C7F63" stroke="#221F1C" stroke-width="2"/></svg>`;
M4_ONLY.gift = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="선물">
  <rect x="56" y="54" width="88" height="62" fill="#2D6E8E" stroke="#221F1C" stroke-width="3"/><rect x="50" y="40" width="100" height="18" fill="#2D6E8E" stroke="#221F1C" stroke-width="3"/>
  <rect x="92" y="40" width="16" height="76" fill="#C1403A" stroke="#221F1C" stroke-width="2.4"/>
  <path d="M100 40 C84 16 64 30 84 40 Z M100 40 C116 16 136 30 116 40 Z" fill="#C1403A" stroke="#221F1C" stroke-width="2.4"/></svg>`;

/* ---- 셋째 묶음 그림: 숫자 카드, 분이 있는 시계, 달력 ----
   한자어 수는 날짜, 시계처럼 아라비아 숫자와 함께 쓰는 일이 많아서 숫자 카드로 보여 줍니다. */
function m4Num(n){
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${n}">
    <rect x="46" y="10" width="108" height="110" rx="14" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/>
    <text x="100" y="68" text-anchor="middle" dominant-baseline="central" font-family="Georgia,'Times New Roman',serif" font-weight="700" font-size="${String(n).length > 1 ? 58 : 70}" fill="#17324A">${n}</text></svg>`;
}
function m4Clock(hr, mi){
  const S = '#221F1C', ha = ((hr % 12) + mi / 60) * 30 * Math.PI / 180, ma = mi * 6 * Math.PI / 180;
  let ticks = '';
  for(let i = 0; i < 12; i++){
    const t = i * 30 * Math.PI / 180, r1 = i % 3 ? 46 : 42;
    ticks += `<path d="M${100 + Math.sin(t) * r1} ${65 - Math.cos(t) * r1} L${100 + Math.sin(t) * 51} ${65 - Math.cos(t) * 51}" stroke="${S}" stroke-width="${i % 3 ? 2 : 3.4}" stroke-linecap="round"/>`;
  }
  const num = (n, x, y) => `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="13" font-weight="700" fill="${S}">${n}</text>`;
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${hr}시 ${mi}분">
    <circle cx="100" cy="65" r="56" fill="#FBF7EC" stroke="${S}" stroke-width="4"/>${ticks}
    ${num(12, 100, 30)}${num(3, 134, 65)}${num(6, 100, 100)}${num(9, 66, 65)}
    <path d="M100 65 L${(100 + Math.sin(ma) * 44).toFixed(1)} ${(65 - Math.cos(ma) * 44).toFixed(1)}" stroke="#2D6E8E" stroke-width="3.6" stroke-linecap="round"/>
    <path d="M100 65 L${(100 + Math.sin(ha) * 28).toFixed(1)} ${(65 - Math.cos(ha) * 28).toFixed(1)}" stroke="#C1403A" stroke-width="6" stroke-linecap="round"/>
    <circle cx="100" cy="65" r="4.5" fill="${S}"/></svg>`;
}
/* 달력 한 장: 위에 달 숫자, 아래에 동그라미 친 날 */
function m4Cal(mo, day){
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${mo}월 ${day}일">
    <rect x="40" y="10" width="120" height="112" rx="8" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/>
    <rect x="40" y="10" width="120" height="34" rx="8" fill="#C1403A" stroke="#221F1C" stroke-width="3"/><rect x="42" y="30" width="116" height="14" fill="#C1403A"/>
    <circle cx="70" cy="10" r="4" fill="#221F1C"/><circle cx="130" cy="10" r="4" fill="#221F1C"/>
    <text x="100" y="28" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="22" fill="#FBF7EC">${mo}</text>
    <text x="100" y="84" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" font-size="44" fill="#17324A">${day}</text>
    <circle cx="100" cy="84" r="30" fill="none" stroke="#E3A93C" stroke-width="4"/></svg>`;
}
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 23, 30, 31, 45].forEach(n => { M4_ONLY['n' + n] = m4Num(n); });
[[3, 10], [7, 30], [8, 45], [4, 30], [2, 30], [9, 15], [11, 20]].forEach(([h, m]) => { M4_ONLY['ck' + h + '_' + m] = m4Clock(h, m); });
[[3, 5], [6, 15], [10, 9], [12, 25], [1, 1], [8, 20]].forEach(([mo, d]) => { M4_ONLY['cal' + mo + '_' + d] = m4Cal(mo, d); });
M4_ONLY.party = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="생일 파티">
  ${M3_PIC.cake8 ? M3_PIC.cake8.replace(/<\/?svg[^>]*>/g, '') : ''}
  <g stroke="#221F1C" stroke-width="2"><path d="M20 30 L40 60 L10 56 Z" fill="#6FA8D0"/><path d="M180 30 L160 60 L190 56 Z" fill="#E3A93C"/></g>
  <g fill="#C1403A"><circle cx="30" cy="96" r="3"/><circle cx="170" cy="92" r="3"/><circle cx="60" cy="20" r="2.4"/><circle cx="146" cy="16" r="2.4"/></g></svg>`;

/* ---- 넷째 묶음 그림: 자리와 길 ----
   고양이와 상자로 위, 안, 앞, 뒤, 옆을, 탁자로 아래를 보여 줍니다.
   방과 동네 그림에는 누를 수 있는 영역(data-spot)이 있습니다. 영역 안의 .hot 사각형이 눌렀을 때 빛납니다. */
const m4Cat = (x, y, k, peek) => `<g transform="translate(${x} ${y}) scale(${k || 1})">
  ${peek ? '' : `<path d="M16 8 Q34 4 30 -14" stroke="#221F1C" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M16 8 Q34 4 30 -14" stroke="#E3A93C" stroke-width="3.6" fill="none" stroke-linecap="round"/>
  <ellipse cx="0" cy="6" rx="20" ry="13" fill="#E3A93C" stroke="#221F1C" stroke-width="2.6"/>`}
  <circle cx="-14" cy="-10" r="12" fill="#E3A93C" stroke="#221F1C" stroke-width="2.6"/>
  <path d="M-24 -16 L-24 -30 L-16 -21 Z M-4 -16 L-4 -30 L-12 -21 Z" fill="#E3A93C" stroke="#221F1C" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="-18" cy="-11" r="1.8" fill="#221F1C"/><circle cx="-10" cy="-11" r="1.8" fill="#221F1C"/><path d="M-16 -6 q2 2 4 0" stroke="#221F1C" stroke-width="1.6" fill="none"/></g>`;
const m4Box = (x, y, w, hgt) => `<rect x="${x}" y="${y}" width="${w}" height="${hgt}" fill="#C9A06A" stroke="#221F1C" stroke-width="3"/><path d="M${x} ${y} L${x + w / 2} ${y + 10} L${x + w} ${y}" fill="none" stroke="#8A6A4A" stroke-width="2"/>`;
function m4Pos(kind){
  const S = '#221F1C', floor = '<path d="M10 118 L190 118" stroke="#221F1C" stroke-width="2.6"/>';
  const g = {
    up:    `${m4Box(70, 70, 60, 48)}${m4Cat(104, 56, 1)}`,
    in:    `${m4Cat(98, 70, 1, true)}${m4Box(70, 70, 60, 48)}<path d="M70 70 L56 56 M130 70 L144 56" stroke="${S}" stroke-width="3"/>`,
    front: `${m4Box(76, 44, 60, 48)}${m4Cat(104, 104, 1)}`,
    back:  `${m4Cat(128, 52, 1)}${m4Box(66, 60, 68, 58)}`,
    side:  `${m4Box(44, 70, 60, 48)}${m4Cat(146, 104, 1)}`,
    under: `<rect x="40" y="58" width="120" height="10" fill="#B08452" stroke="${S}" stroke-width="2.6"/><path d="M50 68 L50 118 M150 68 L150 118" stroke="${S}" stroke-width="5"/>${m4Cat(104, 104, 1)}`
  }[kind];
  const label = {up:'위', in:'안', front:'앞', back:'뒤', side:'옆', under:'아래'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${floor}${g}</svg>`;
}
['up', 'in', 'front', 'back', 'side', 'under'].forEach(k => { M4_ONLY['pos_' + k] = m4Pos(k); });
M4_ONLY.cat = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="고양이"><path d="M10 118 L190 118" stroke="#221F1C" stroke-width="2.6"/>${m4Cat(104, 100, 1.6)}</svg>`;

/* 누를 수 있는 영역 */
const m4Spot = (id, label, x, y, w, hgt, inner) => `<g data-spot="${id}" data-label="${label}">${inner || ''}<rect class="hot" x="${x}" y="${y}" width="${w}" height="${hgt}" rx="10"/></g>`;
/* 방: 침대, 책상, 의자, 상자, 문 */
M4_ONLY.room = `<svg viewBox="0 0 400 260" role="img" aria-label="방">
  <rect width="400" height="260" fill="#EFE2C2"/><rect y="200" width="400" height="60" fill="#D9C39A"/><path d="M0 200 L400 200" stroke="#221F1C" stroke-width="3"/>
  <rect x="26" y="58" width="62" height="142" fill="#B08452" stroke="#221F1C" stroke-width="3"/><circle cx="78" cy="132" r="4" fill="#E3A93C" stroke="#221F1C" stroke-width="1.6"/>
  <rect x="160" y="40" width="80" height="60" fill="#9DB4C6" stroke="#221F1C" stroke-width="3"/><path d="M200 40 L200 100 M160 70 L240 70" stroke="#221F1C" stroke-width="2.4"/>
  <rect x="110" y="150" width="130" height="30" rx="4" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/><rect x="118" y="138" width="34" height="16" rx="6" fill="#FBF7EC" stroke="#221F1C" stroke-width="2.4"/>
  <path d="M160 146 L240 146 L240 180 L160 180 Z" fill="#2D6E8E" stroke="#221F1C" stroke-width="2.6"/><rect x="104" y="130" width="10" height="70" fill="#8A6A4A" stroke="#221F1C" stroke-width="2.4"/>
  <path d="M112 180 L112 200 M236 180 L236 200" stroke="#221F1C" stroke-width="5"/>
  <rect x="270" y="120" width="112" height="10" fill="#B08452" stroke="#221F1C" stroke-width="2.6"/><path d="M278 130 L278 200 M374 130 L374 200" stroke="#221F1C" stroke-width="5"/>
  <rect x="292" y="98" width="40" height="22" fill="#C1403A" stroke="#221F1C" stroke-width="2.4"/>
  <rect x="340" y="150" width="34" height="8" fill="#6E8F58" stroke="#221F1C" stroke-width="2"/><path d="M344 158 L344 200 M370 158 L370 200 M372 150 L372 112" stroke="#221F1C" stroke-width="4"/>
  ${m4Box(250, 212, 56, 40)}
  ${m4Spot('bed_up', '침대 위', 116, 100, 124, 48)}
  ${m4Spot('bed_under', '침대 아래', 116, 182, 120, 18)}
  ${m4Spot('desk_up', '책상 위', 272, 76, 70, 42)}
  ${m4Spot('desk_under', '책상 아래', 282, 132, 54, 66)}
  ${m4Spot('box_in', '상자 안', 250, 206, 56, 48)}
  ${m4Spot('box_side', '상자 옆', 312, 206, 70, 48)}
  ${m4Spot('door_front', '문 앞', 20, 202, 80, 52)}
  ${m4Spot('window', '창문', 156, 36, 88, 68)}</svg>`;
/* 동네: 길을 따라 가게, 학교, 도서관. 학교 뒤에 공원, 길 건너 병원. 왼쪽과 오른쪽은 그림을 보는 쪽에서 셉니다. */
const m4Bld = (x, w, hgt, roof, sign) => `<rect x="${x}" y="${150 - hgt}" width="${w}" height="${hgt}" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
  <path d="M${x - 6} ${150 - hgt} L${x + w / 2} ${150 - hgt - 22} L${x + w + 6} ${150 - hgt} Z" fill="${roof}" stroke="#221F1C" stroke-width="3" stroke-linejoin="round"/>
  <rect x="${x + w / 2 - 10}" y="${126}" width="20" height="24" fill="#8A6A4A" stroke="#221F1C" stroke-width="2"/>${sign || ''}`;
M4_ONLY.town = `<svg viewBox="0 0 400 260" role="img" aria-label="동네 지도">
  <rect width="400" height="260" fill="#DCEBD6"/>
  <rect x="140" y="12" width="120" height="50" rx="10" fill="#9DBA7E" stroke="#221F1C" stroke-width="2.6"/>
  <circle cx="170" cy="36" r="12" fill="#6E8F58" stroke="#221F1C" stroke-width="2"/><circle cx="228" cy="34" r="14" fill="#6E8F58" stroke="#221F1C" stroke-width="2"/><rect x="190" y="40" width="22" height="6" fill="#8A6A4A"/>
  ${m4Bld(24, 90, 60, '#E3A93C', '<rect x="44" y="104" width="50" height="14" fill="#E3A93C" stroke="#221F1C" stroke-width="1.6"/>')}
  ${m4Bld(150, 100, 70, '#C1403A', '<circle cx="200" cy="100" r="6" fill="#F5E6BD" stroke="#221F1C" stroke-width="1.6"/>')}
  ${m4Bld(286, 90, 64, '#2D6E8E', '<path d="M312 106 L324 100 L336 106 L348 100 L360 106" stroke="#221F1C" stroke-width="2" fill="none"/>')}
  <rect y="150" width="400" height="40" fill="#8C8577"/><path d="M0 170 L400 170" stroke="#F5E6BD" stroke-width="3" stroke-dasharray="16 12"/>
  <rect x="150" y="196" width="100" height="56" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/><path d="M192 214 L208 214 M200 206 L200 222" stroke="#C1403A" stroke-width="6"/>
  ${m4Spot('park', '공원', 136, 8, 128, 58)}
  ${m4Spot('shop', '가게', 16, 64, 106, 88)}
  ${m4Spot('school', '학교', 142, 54, 116, 98)}
  ${m4Spot('library', '도서관', 278, 60, 106, 92)}
  ${m4Spot('hospital', '병원', 144, 192, 112, 64)}</svg>`;
/* 길 안내 화살표 */
const m4Arrow = dir => {
  const road = '<rect x="80" y="10" width="40" height="120" fill="#8C8577"/><rect x="10" y="44" width="180" height="40" fill="#8C8577"/>';
  const path = {straight:'M100 124 L100 22', left:'M100 124 L100 64 L24 64', right:'M100 124 L100 64 L176 64'}[dir];
  const head = {straight:'M88 34 L100 18 L112 34', left:'M36 52 L20 64 L36 76', right:'M164 52 L180 64 L164 76'}[dir];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${{straight:'쭉 가요', left:'왼쪽', right:'오른쪽'}[dir]}">${road}
    <path d="${path}" stroke="#C1403A" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${head}" stroke="#C1403A" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
};
['straight', 'left', 'right'].forEach(d => { M4_ONLY['go_' + d] = m4Arrow(d); });
/* 장소 하나씩: 동네 그림의 건물을 따로 크게 */
const m4Place = (id, label, inner) => `<svg viewBox="0 30 200 130" width="150" height="98" role="img" aria-label="${label}"><rect x="0" y="150" width="200" height="10" fill="#8C8577"/>${inner}</svg>`;
M4_ONLY.pl_shop = m4Place('shop', '가게', m4Bld(56, 88, 60, '#E3A93C', '<rect x="72" y="104" width="56" height="14" fill="#E3A93C" stroke="#221F1C" stroke-width="1.6"/>'));
M4_ONLY.pl_library = m4Place('library', '도서관', m4Bld(56, 88, 64, '#2D6E8E', '<path d="M76 106 L88 100 L100 106 L112 100 L124 106" stroke="#221F1C" stroke-width="2" fill="none"/>'));
M4_ONLY.pl_hospital = m4Place('hospital', '병원', '<rect x="50" y="86" width="100" height="64" fill="#FBF7EC" stroke="#221F1C" stroke-width="3"/><path d="M92 104 L108 104 M100 96 L100 112" stroke="#C1403A" stroke-width="6"/><rect x="90" y="126" width="20" height="24" fill="#9DB4C6" stroke="#221F1C" stroke-width="2"/>');
M4_ONLY.pl_park = m4Place('park', '공원', '<rect x="20" y="96" width="160" height="54" rx="10" fill="#9DBA7E" stroke="#221F1C" stroke-width="2.6"/><circle cx="60" cy="100" r="22" fill="#6E8F58" stroke="#221F1C" stroke-width="2.4"/><rect x="56" y="118" width="8" height="24" fill="#8A6A4A"/><circle cx="140" cy="104" r="18" fill="#6E8F58" stroke="#221F1C" stroke-width="2.4"/><rect x="136" y="118" width="8" height="24" fill="#8A6A4A"/><rect x="88" y="130" width="30" height="6" fill="#8A6A4A" stroke="#221F1C" stroke-width="1.6"/>');

const M4_PIC = Object.assign({}, M3_PIC, M4_ONLY);

/* ---- 묶음 ---- */
const M4_BUNDLES = [
  {k:1, title:'어제 뭐 했어요?', topic:'지난 일 말하기', nights:[1, 2, 3], after:'그동안 저녁마다 가족에게 오늘 한 일을 하나씩 말해 봐.'},
  {k:2, title:'기분이 어때요?', topic:'기분과 까닭', nights:[4, 5, 6], after:'그동안 저녁마다 가족과 오늘 기분을 서로 물어봐.'},
  {k:3, title:'일, 이, 삼', topic:'한자어 수, 날짜와 분', nights:[7, 8, 9], after:'그동안 가족 생일을 모두 물어서 달력에 적어 봐.'},
  {k:4, title:'어디에 있어요?', topic:'자리와 길 찾기', nights:[10, 11, 12], after:'그동안 가족과 보물 숨기기 놀이를 하며 어디에 있는지 말해 봐.'},
  {k:5, title:'할머니 댁에 가요', topic:'존댓말', nights:[13, 14, 15]}
];

/* ---- 밤 ---- */
const M4_NIGHTS = [

/* ---- 첫째 묶음: 어제 뭐 했어요? ------------------------------------
   셋째 달의 움직이는 말(가요, 먹어요, 자요)이 지난 일(갔어요, 먹었어요, 잤어요)로 바뀝니다.
   규칙: 앞 글자의 모음이 ㅏ나 ㅗ면 았어요, 그 밖에는 었어요, 하다는 했어요.
   지금까지의 받침 규칙과 달리 모음을 본다는 것을 담이가 분명히 짚습니다.
   "잘 먹었습니다"에 이미 었이 들어 있었다는 것으로 셋째 달과 잇습니다. */
{ n:1, bundle:1, title:'어제와 오늘',
  steps:[
    {type:'intro', who:'moi',
     t:'넷째 달에 온 걸 환영해! 셋째 달에는 지금 하는 일을 말했지? 이번에는 어제 한 일을 말해. 첫 밤은 지난 일을 말하는 말이야.',
     big:'어제 뭐 했어요?'},
    {type:'pairs', title:'언제예요?', who:'moi',
     t:'날을 말하는 말이야. 오늘과 내일은 셋째 달에 만났지? 그림을 누르면 소리가 나.',
     singles:[
       {w:'어제', pic:'yesterday', en:'yesterday'}, {w:'오늘', pic:'w_sunny', en:'today'},
       {w:'내일', pic:'tomorrow', en:'tomorrow'}, {w:'지난 주말', pic:'weekend', en:'last weekend'}]},
    {type:'tense', title:'지금과 지난 일', who:'tori',
     t:'왼쪽은 셋째 달에 배운 지금 하는 말, 오른쪽은 어제 한 일을 말하는 말이야. 눌러서 들어 봐. 끝이 어떻게 바뀌는지 봐.',
     groups:[
       {rule:'어제 한 일', rows:[['가요','갔어요'], ['자요','잤어요'], ['먹어요','먹었어요'], ['마셔요','마셨어요'], ['공부해요','공부했어요']]}],
     note:'요 앞에 ㅆ이 들어가지? 갔어요, 먹었어요, 했어요. 이 ㅆ이 보이면 이미 지나간 일이란다. 무엇이 붙는지는 다음 밤에 자세히 알려 주마.'},
    {type:'pairs', title:'새로 쓰는 말', who:'moi',
     t:'지난 일을 말할 때 자주 쓰는 말을 더 가져왔어.',
     singles:[
       {w:'봤어요', pic:'tv', en:'watched, saw'}, {w:'놀았어요', pic:'s_play', en:'played'},
       {w:'만들었어요', pic:'make', en:'made'}, {w:'했어요', pic:'s_homework', en:'did'}],
     tip:{who:'tori', t:'텔레비전을 봐요, 책을 봐요. 봐요는 눈으로 보는 거야. 어제 본 건 봤어요.'}},
    {type:'choose', title:'언제 일이에요?', who:'tori',
     t:'어제 일인지 오늘 일인지 잘 보고 골라 봐.',
     qs:[
       {pic:'act_eat', t:'어제 일이에요.', en:'It happened yesterday.', o:['먹어요','먹었어요'], a:'먹었어요', why:'지난 일에는 ㅆ이 들어가요.'},
       {pic:'act_go', t:'어제 일이에요.', en:'It happened yesterday.', o:['갔어요','가요'], a:'갔어요'},
       {pic:'act_sleep', t:'지금 하는 일이에요.', en:'It is happening now.', o:['자요','잤어요'], a:'자요', why:'지금 하는 일에는 ㅆ이 없어요.'},
       {pic:'tv', t:'어제 일이에요.', en:'It happened yesterday.', o:['봤어요','봐요'], a:'봤어요'},
       {pic:'yesterday', o:['어제','내일','오늘'], a:'어제'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'놀았어요', o:['s_play','act_sleep','make'], a:'s_play'},
       {say:'어제', o:['tomorrow','yesterday','weekend'], a:'yesterday'},
       {say:'만들었어요', o:['tv','make','act_eat'], a:'make'},
       {say:'지난 주말', o:['weekend','yesterday','day1'], a:'weekend'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'지난 일을 말하는 말을 써 봐. 요 앞의 ㅆ을 잊지 마.',
     items:[{w:'어제', en:'yesterday'}, {w:'갔어요', en:'went', hint:{who:'dami', t:'소리는 [가써요]지만 ‘가’ 아래에 ㅆ 받침을 넣어 ‘갔’을 쓴단다.'}}, {w:'했어요', en:'did'}]}
  ],
  dictWords:[{w:'어제', en:'yesterday'}, {w:'갔어요', en:'went'}, {w:'했어요', en:'did'}, {w:'잤어요', en:'slept'},
             {w:'봤어요', en:'watched'}, {w:'놀았어요', en:'played'}] },

{ n:2, bundle:1, title:'모음을 봐요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 았어요와 었어요 가운데 무엇을 붙이는지 배워. 이번 규칙은 받침이 아니라 모음을 봐. 그게 새로운 점이야.',
     big:'갔어요, 먹었어요'},
    {type:'tense', title:'앞 글자의 모음을 봐요', who:'dami',
     t:'놀아요에서 아요를 떼면 ‘놀’이 남지? 이렇게 아요나 어요를 떼고 남은 앞 글자의 모음을 보거라. 받침이 아니라 모음이란다.',
     groups:[
       {rule:'모음이 ㅏ나 ㅗ면 았어요', rows:[['놀아요','놀았어요','ㅗ'], ['앉아요','앉았어요','ㅏ'], ['봐요','봤어요','ㅗ'], ['가요','갔어요','ㅏ']]},
       {rule:'그 밖의 모음이면 었어요', rows:[['먹어요','먹었어요','ㅓ'], ['읽어요','읽었어요','ㅣ'], ['마셔요','마셨어요','ㅣ'], ['만들어요','만들었어요','ㅡ']]},
       {rule:'하다는 늘 했어요', rows:[['해요','했어요'], ['공부해요','공부했어요'], ['좋아해요','좋아했어요']]}],
     note:'받침 삼 형제는 받침을 보았지? 이번 규칙은 모음을 본단다. 밝은 모음 ㅏ, ㅗ는 았, 나머지는 었. 하다는 제멋대로라 늘 했이지. 봐요나 가요처럼 줄어든 말은 줄기 전 모음(보, 가)을 보면 된단다.'},
    {type:'choose', title:'았어요일까요, 었어요일까요?', who:'tori',
     t:'아요나 어요를 떼고 남은 앞 글자의 모음을 보고 골라 봐.',
     qs:[
       {t:'놀아요 → 어제는?', o:['놀았어요','놀었어요'], a:'놀았어요', why:'‘놀’의 모음이 ㅗ라서 았어요예요.'},
       {t:'먹어요 → 어제는?', o:['먹았어요','먹었어요'], a:'먹었어요', why:'‘먹’의 모음이 ㅓ라서 었어요예요.'},
       {t:'읽어요 → 어제는?', o:['읽었어요','읽았어요'], a:'읽었어요', why:'‘읽’의 모음이 ㅣ라서 었어요예요.'},
       {t:'공부해요 → 어제는?', o:['공부했어요','공부하었어요'], a:'공부했어요', why:'하다는 늘 했어요예요.'},
       {t:'앉아요 → 어제는?', o:['앉었어요','앉았어요'], a:'앉았어요', why:'‘앉’의 모음이 ㅏ라서 았어요예요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 어제 한 일을 말해 봐.',
     qs:[
       {s:'어제 뭐 했어요?', tiles:['어제','뭐','했어요?'], en:'What did you do yesterday?'},
       {s:'어제 학교에 갔어요.', tiles:['어제','학교에','갔어요.'], extra:['가었어요.'], en:'I went to school yesterday.', hint:'‘가’의 모음은 ㅏ예요.'},
       {s:'아침에 빵을 먹었어요.', tiles:['아침에','빵을','먹었어요.'], extra:['먹았어요.'], en:'I ate bread in the morning.', hint:'‘먹’의 모음은 ㅓ예요.'},
       {s:'지난 주말에 친구하고 놀았어요.', tiles:['지난','주말에','친구하고','놀았어요.'], extra:['놀었어요.'], en:'I played with a friend last weekend.', hint:'‘놀’의 모음은 ㅗ예요. 하고는 함께라는 뜻이에요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'지난 일에 붙는 ㅆ은 뒤의 어요로 건너간단다. 들어 보거라.',
     cmp:[
       {s:'갔어요', d:'가써요', n:'ㅆ 받침이 뒤로 건너가요'},
       {s:'먹었어요', d:'머거써요', n:'ㄱ도 ㅆ도 차례로 건너가요'},
       {s:'했어요', d:'해써요', n:'ㅆ 받침이 뒤로 건너가요'},
       {s:'놀았어요', d:'노라써요', n:'ㄹ도 ㅆ도 차례로 건너가요'}],
     note:'[가써요]로 들려도 ‘갔’에 ㅆ을 쓰는 것이 지난 일의 표시란다. 이 ㅆ을 빼먹으면 어제 일이 오늘 일이 되어 버리지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'먹었어요', en:'ate', hint:{who:'dami', t:'소리는 [머거써요]지만 ‘먹’, ‘었’, ‘어’, ‘요’ 차례로 쓴단다. ‘었’에는 ㅆ 받침이 있지.'}},
       {w:'놀았어요', en:'played', hint:{who:'dami', t:'‘놀’의 모음이 ㅗ라서 ‘았’이 붙는단다.'}},
       {w:'봤어요', en:'watched'}]}
  ],
  dictWords:[{w:'먹었어요', en:'ate'}, {w:'앉았어요', en:'sat'}, {w:'읽었어요', en:'read (past)'}, {w:'공부했어요', en:'studied'}] },

{ n:3, bundle:1, title:'주말 이야기',
  steps:[
    {type:'intro', who:'moi',
     t:'월요일 아침이야. 토리한테 주말에 뭐 했는지 물어볼 거야. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'주말에 뭐 했어?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 지난 주말에 뭐 했어?', en:'Tori, what did you do last weekend?'},
       {who:'tori', t:'토요일에 한글학교에 갔어.', en:'I went to Korean school on Saturday.'},
       {who:'moi', t:'일요일은?', en:'And Sunday?'},
       {who:'tori', t:'할머니 집에 갔어. 할머니가 김밥을 만들었어.', en:"I went to Grandma's house. Grandma made gimbap."},
       {who:'moi', t:'와, 맛있었어?', en:'Wow, was it good?'},
       {who:'tori', t:'응, 정말 맛있었어! 열 개 먹었어.', en:'Yes, really good! I ate ten.'},
       {who:'dami', t:'허허, 토리야. 할머니께 뭐라고 인사했느냐?', en:'Ho ho, Tori. What did you say to Grandma?'},
       {who:'tori', t:'잘 먹었습니다, 했어요!', en:'I said, "Thank you for the meal!"'}],
     note:{who:'dami', t:'잘 먹었습니다의 ‘었’도 지난 일의 표시였단다. 셋째 달부터 벌써 쓰고 있었던 게지. 그리고 토리가 모이에게는 ‘갔어’, 나에게는 ‘했어요’라고 했지? 지난 일에도 친구와 어른에게 하는 말이 다르단다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 토요일에 어디에 갔어요?', o:['학교','한글학교','공원'], a:'한글학교', why:'토리는 ‘토요일에 한글학교에 갔어’라고 했어요.'},
       {t:'일요일에 누가 김밥을 만들었어요?', o:['할머니','모이','담이 할아버지'], a:'할머니', why:'토리는 ‘할머니가 김밥을 만들었어’라고 했어요.'},
       {t:'토리는 김밥을 몇 개 먹었어요?', o:['세 개','여덟 개','열 개'], a:'열 개', why:'토리는 ‘열 개 먹었어’라고 했어요.'},
       {t:'토리는 할머니께 뭐라고 인사했어요?', o:['잘 먹겠습니다','잘 먹었습니다','안녕히 주무세요'], a:'잘 먹었습니다', why:'다 먹은 뒤라서 ‘잘 먹었습니다’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'tv', line:{who:'moi', t:'토리야, 어제 뭐 했어?'}, en:'Tori, what did you do yesterday?', o:['텔레비전을 봤어.','텔레비전을 봤어요.'], a:'텔레비전을 봤어.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'s_homework', line:{who:'dami', t:'토리야, 어제 숙제를 했느냐?'}, en:'Tori, did you do your homework yesterday?', o:['네, 했어요.','응, 했어.'], a:'네, 했어요.', why:'할아버지는 어른이라서 ‘네, 했어요’라고 해요.'},
       {pic:'act_eat', t:'어제 저녁에 밥을 먹었어요. 어떻게 말해요?', en:'You ate dinner yesterday.', o:['어제 밥을 먹어요.','어제 밥을 먹었어요.'], a:'어제 밥을 먹었어요.', why:'어제 일이라서 ‘먹었어요’예요.'}]},
    {type:'task', title:'오늘 한 일 말하기', who:'moi',
     t:'저녁 먹을 때 가족에게 오늘 한 일을 말해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'가족이 먼저 물어요', say:'오늘 뭐 했어요?', sub:'아이가 가족에게 물어봐도 좋아요.'},
       {when:'오늘 간 곳', say:'______에 갔어요.', sub:'학교에 갔어요, 공원에 갔어요처럼.'},
       {when:'오늘 먹은 것이나 한 것', say:'______을 먹었어요.', sub:'받침이 없으면 를: 김치를 먹었어요. 놀았어요, 공부했어요도 좋아요.'}],
     parent:'저녁 식사 때 "오늘 뭐 했어요?"라고 물어 주세요. 아이가 영어로 길게 말하고 싶어 하면 먼저 들어 주시고, 그중 한 가지만 한국어로 다시 말하게 해 주시면 됩니다. 지난 일의 규칙은 "아요나 어요를 떼고 남은 앞 글자의 모음이 ㅏ, ㅗ면 았어요, 그 밖에는 었어요, 하다는 했어요"입니다. 아이가 "먹았어요"처럼 틀리게 말하면 고쳐 말하게 하기보다 "아, 먹었어요!" 하고 바르게 되받아 주시는 것으로 충분합니다.'}
  ],
  dictWords:[] },

/* ---- 둘째 묶음: 기분이 어때요? ------------------------------------
   기분 여섯 가지(기뻐요, 슬퍼요, 화나요, 무서워요, 심심해요, 피곤해요)와 괜찮아?, 왜?.
   둘째 밤에 첫 묶음의 지난 일(슬펐어요, 기뻤어요)과 까닭(넘어져서, 받아서)을 잇습니다.
   까닭의 ~아서/~어서는 규칙을 가르치지 않고 문장 덩어리로 익힙니다.
   기쁘다, 슬프다처럼 ㅡ가 빠지는 말은 모음 규칙의 예외라서 표에 모음을 적지 않습니다. */
{ n:4, bundle:2, title:'기뻐요, 슬퍼요',
  steps:[
    {type:'intro', who:'moi',
     t:'오늘은 마음을 말하는 말을 모아 왔어. 기쁠 때도 슬플 때도 말로 하면 마음이 조금 편해져.',
     big:'기분이 어때요?'},
    {type:'pairs', title:'여러 가지 기분', who:'moi',
     t:'얼굴을 보고 들어 봐. 그림을 누르면 소리가 나. 따라 하면서 얼굴도 흉내 내 봐.',
     singles:[
       {w:'기뻐요', pic:'mood_happy', en:"I'm happy"}, {w:'슬퍼요', pic:'mood_sad', en:"I'm sad"},
       {w:'화나요', pic:'mood_angry', en:"I'm angry"}, {w:'무서워요', pic:'mood_scared', en:"I'm scared"},
       {w:'심심해요', pic:'mood_bored', en:"I'm bored"}, {w:'피곤해요', pic:'mood_tired', en:"I'm tired"}],
     tip:{who:'dami', t:'기분은 마음의 날씨란다. 맑은 날도 비 오는 날도 있지. 어떤 기분이든 나쁜 기분은 없단다. 말로 꺼내 놓으면 그만이지.'}},
    {type:'pairs', title:'친구의 마음 묻기', who:'dami',
     t:'누군가 슬퍼 보이면 먼저 물어봐 주거라. 친구와 어른께 쓰는 말이 조금 다르단다.',
     pairs:[
       {when:'슬퍼 보일 때', pic:'mood_sad', friend:'괜찮아?', elder:'괜찮으세요?', en:'Are you okay?'},
       {when:'까닭을 물을 때', pic:'what', friend:'왜?', elder:'왜요?', en:'Why?'}]},
    {type:'choose', title:'어떤 기분이에요?', who:'tori',
     t:'얼굴을 보고 기분을 골라 봐.',
     qs:[
       {pic:'mood_scared', o:['무서워요','기뻐요','심심해요'], a:'무서워요'},
       {pic:'mood_tired', o:['화나요','피곤해요','슬퍼요'], a:'피곤해요'},
       {pic:'mood_angry', o:['화나요','기뻐요','무서워요'], a:'화나요'},
       {pic:'mood_bored', o:['슬퍼요','심심해요','피곤해요'], a:'심심해요'},
       {pic:'mood_sad', t:'친구가 울어요. 뭐라고 해요?', en:'Your friend is crying.', o:['괜찮아?','잘 자.'], a:'괜찮아?', why:'슬퍼 보이는 친구에게는 ‘괜찮아?’ 하고 물어요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 기분을 찾아 봐.',
     qs:[
       {say:'기뻐요', o:['mood_sad','mood_happy','mood_bored'], a:'mood_happy'},
       {say:'슬퍼요', o:['mood_sad','mood_angry','mood_tired'], a:'mood_sad'},
       {say:'무서워요', o:['mood_bored','mood_happy','mood_scared'], a:'mood_scared'},
       {say:'피곤해요', o:['mood_tired','mood_angry','mood_happy'], a:'mood_tired'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'기분을 말하는 말을 써 봐.',
     items:[{w:'기분', en:'mood, feeling'}, {w:'슬퍼요', en:"I'm sad"}, {w:'기뻐요', en:"I'm happy", hint:{who:'dami', t:'‘뻐’는 ㅂ 두 개, ㅃ이란다. 힘주어 읽는 소리지.'}}]}
  ],
  dictWords:[{w:'기분', en:'mood'}, {w:'기뻐요', en:"I'm happy"}, {w:'슬퍼요', en:"I'm sad"}, {w:'화나요', en:"I'm angry"},
             {w:'무서워요', en:"I'm scared"}, {w:'심심해요', en:"I'm bored"}, {w:'피곤해요', en:"I'm tired"}] },

{ n:5, bundle:2, title:'넘어져서 슬펐어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 어제의 기분과 그 까닭을 말해 볼 거야. ‘넘어져서 슬펐어요’처럼 까닭을 먼저 말하고 기분을 말해.',
     big:'넘어져서 슬펐어요'},
    {type:'tense', title:'지금 기분과 어제 기분', who:'tori',
     t:'기분을 말하는 말에도 ㅆ이 들어가면 지난 일이야. 눌러서 들어 봐.',
     groups:[
       {rule:'어제 기분', rows:[['기뻐요','기뻤어요'], ['슬퍼요','슬펐어요'], ['화나요','화났어요'], ['무서워요','무서웠어요'], ['심심해요','심심했어요'], ['피곤해요','피곤했어요']]}],
     note:'기분 말은 요 앞 글자 아래에 ㅆ을 넣고 어요를 붙이면 된단다. 기뻐요는 기뻤어요, 슬퍼요는 슬펐어요, 피곤해요는 피곤했어요. 모음을 따지지 않아도 되니 오히려 쉽지.'},
    {type:'pairs', title:'까닭을 말하는 말', who:'moi',
     t:'왜 그런 기분이었는지 말할 때 쓰는 말이야. 끝의 ‘서’가 ‘그래서’라는 뜻이야.',
     singles:[
       {w:'넘어져서', pic:'fall', en:'because I fell'}, {w:'선물을 받아서', pic:'gift', en:'because I got a present'},
       {w:'친구하고 놀아서', pic:'s_play', en:'because I played with a friend'}, {w:'조금', pic:'mood_tired', en:'a little'}],
     tip:{who:'tori', t:'넘어져서 슬펐어요, 선물을 받아서 기뻤어요. 까닭이 먼저, 기분이 나중이야. 영어 because랑 순서가 반대야.'}},
    {type:'choose', title:'왜 그런 기분이었어요?', who:'tori',
     t:'그림을 보고 까닭과 기분이 맞는 말을 골라 봐.',
     qs:[
       {pic:'fall', o:['넘어져서 슬펐어요.','넘어져서 기뻤어요.'], a:'넘어져서 슬펐어요.', en:'I fell, so I was sad.'},
       {pic:'gift', o:['선물을 받아서 화났어요.','선물을 받아서 기뻤어요.'], a:'선물을 받아서 기뻤어요.', en:'I got a present, so I was happy.'},
       {pic:'s_play', o:['친구하고 놀아서 기뻤어요.','친구하고 놀아서 무서웠어요.'], a:'친구하고 놀아서 기뻤어요.', en:'I played with a friend, so I was happy.'},
       {pic:'mood_sad', t:'어제 일이에요.', o:['슬펐어요.','슬퍼요.'], a:'슬펐어요.', en:'I was sad.', why:'어제 일에는 ㅆ이 들어가요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'기분이 어때요?', tiles:['기분이','어때요?'], en:'How do you feel?'},
       {s:'어제 넘어져서 슬펐어요.', tiles:['어제','넘어져서','슬펐어요.'], extra:['슬퍼요.'], en:'Yesterday I fell, so I was sad.', hint:'언제, 까닭, 기분 차례예요. 어제 일이라 ㅆ이 들어가요.'},
       {s:'선물을 받아서 기뻤어요.', tiles:['선물을','받아서','기뻤어요.'], extra:['기뻐요.'], en:'I got a present, so I was happy.'},
       {s:'저는 조금 피곤해요.', tiles:['저는','조금','피곤해요.'], en:"I'm a little tired."}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'마음을 말하는 말에도 소리 비밀이 있단다. 괜찮아요에는 조용한 받침이 숨어 있지.',
     cmp:[
       {s:'괜찮아요', d:'괜차나요', n:'ㄶ 가운데 ㅎ은 소리 나지 않고 ㄴ이 건너가요'},
       {s:'슬펐어요', d:'슬퍼써요', n:'ㅆ 받침이 뒤로 건너가요'},
       {s:'무서웠어요', d:'무서워써요', n:'ㅆ 받침이 뒤로 건너가요'},
       {s:'기분이', d:'기부니', n:'ㄴ 받침이 뒤로 건너가요'}],
     note:'괜찮아요의 ‘찮’에는 ㄴ과 ㅎ이 함께 있단다. 좋아해요의 ㅎ처럼 여기서도 ㅎ은 조용하지. 소리가 없어도 글자에는 꼭 쓰거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'괜찮아요', en:"it's okay", hint:{who:'dami', t:'소리는 [괜차나요]지만 ‘찮’에는 ㄴ과 ㅎ이 함께 있단다. 받침 줄에서 ㄶ을 찾아보거라.'}},
       {w:'슬펐어요', en:'I was sad', hint:{who:'dami', t:'어제 일이니 ‘펐’에 ㅆ을 넣는단다.'}},
       {w:'선물', en:'present'}]}
  ],
  dictWords:[{w:'괜찮아요', en:"it's okay"}, {w:'슬펐어요', en:'I was sad'}, {w:'기뻤어요', en:'I was happy'}, {w:'선물', en:'present'}, {w:'조금', en:'a little'}] },

{ n:6, bundle:2, title:'모이의 반짝이 단추',
  steps:[
    {type:'intro', who:'tori',
     t:'모이가 오늘 좀 이상해. 반짝이는 것을 좋아하는 모이한테 무슨 일이 생겼을까? 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'모이야, 괜찮아?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 괜찮아? 기분이 어때?', en:'Moi, are you okay? How do you feel?'},
       {who:'moi', t:'슬퍼. 반짝이는 단추를 잃어버렸어.', en:'Sad. I lost my shiny button.'},
       {who:'tori', t:'언제?', en:'When?'},
       {who:'moi', t:'아침에. 그래서 너무 슬퍼.', en:"This morning. That's why I'm so sad."},
       {who:'dami', t:'허허, 모이야. 이게 네 단추냐?', en:'Ho ho, Moi. Is this your button?'},
       {who:'moi', t:'와! 네, 제 단추예요! 할아버지, 감사합니다!', en:"Wow! Yes, it's my button! Thank you, Grandpa!"},
       {who:'tori', t:'이제 기분이 어때?', en:'How do you feel now?'},
       {who:'moi', t:'단추를 찾아서 아주 기뻐!', en:"I found my button, so I'm really happy!"}],
     note:{who:'dami', t:'모이의 기분이 슬픔에서 기쁨으로 바뀌었구나. 토리가 먼저 괜찮아? 하고 물어 준 덕분에 모이가 마음을 말할 수 있었단다. 좋은 친구는 기분을 물어봐 주는 친구지.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'모이는 처음에 기분이 어땠어요?', o:['기뻤어요','슬펐어요','화났어요'], a:'슬펐어요', why:'모이는 ‘슬퍼’라고 했어요.'},
       {t:'모이는 왜 슬펐어요?', o:['넘어져서','단추를 잃어버려서','배가 아파서'], a:'단추를 잃어버려서', why:'모이는 ‘반짝이는 단추를 잃어버렸어’라고 했어요.'},
       {t:'누가 단추를 찾아 주었어요?', o:['토리','담이 할아버지','모이 엄마'], a:'담이 할아버지', why:'할아버지가 ‘이게 네 단추냐?’라고 하셨어요.'},
       {t:'마지막에 모이는 기분이 어때요?', o:['아주 기뻐요','조금 슬퍼요','무서워요'], a:'아주 기뻐요', why:'모이는 ‘단추를 찾아서 아주 기뻐!’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'mood_happy', line:{who:'moi', t:'토리야, 오늘 기분이 어때?'}, en:'Tori, how do you feel today?', o:['기뻐.','기뻐요.'], a:'기뻐.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'mood_tired', line:{who:'dami', t:'토리야, 기분이 어떠냐?'}, en:'Tori, how do you feel?', o:['조금 피곤해요.','조금 피곤해.'], a:'조금 피곤해요.', why:'할아버지는 어른이라서 ‘피곤해요’라고 해요.'},
       {pic:'p_grandma', t:'할머니가 슬퍼 보이세요.', en:'Grandma looks sad.', o:['괜찮아?','괜찮으세요?'], a:'괜찮으세요?', why:'어른께는 ‘괜찮으세요?’ 하고 여쭤요.'}]},
    {type:'task', title:'저녁 기분 나누기', who:'moi',
     t:'오늘 저녁부터 가족과 서로의 기분을 물어봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'가족에게 물어요', say:'오늘 기분이 어때요?', sub:'형제나 친구에게는 ‘기분이 어때?’'},
       {when:'내 기분을 말해요', say:'저는 오늘 ______.', sub:'기뻤어요, 슬펐어요, 피곤했어요처럼 오늘 있었던 기분이면 ㅆ을 넣어요.'},
       {when:'까닭도 말해 봐요', say:'______해서 ______.', sub:'친구하고 놀아서 기뻤어요, 넘어져서 슬펐어요처럼.'}],
     parent:'저녁 식사나 잠자리에서 서로의 기분을 한국어로 묻고 답해 주세요. 부모님이 먼저 "엄마는 오늘 조금 피곤했어요. 일을 많이 해서 피곤했어요"처럼 본보기를 보여 주시면 아이가 따라 하기 쉽습니다. 아이가 말한 기분이 어떤 것이든 고치거나 평가하지 말고 "그랬구나"로 받아 주세요. 까닭을 말하는 "~해서"는 규칙을 가르치지 않았으니, 아이가 영어로 까닭을 말하면 한국어 문장으로 한 번 되돌려 주시는 것으로 충분합니다.'}
  ],
  dictWords:[] },

/* ---- 셋째 묶음: 일, 이, 삼 ---------------------------------------
   한자어 수 일부터 삼십일까지(날짜), 그리고 분(오십구까지). 돈(원)은 다섯째 달로 넘깁니다.
   핵심은 두 가지 숫자를 언제 쓰는지 구별하는 것: 시, 살, 개는 하나 둘로, 분, 월, 일은 일 이로.
   6월 유월, 10월 시월은 따로 짚습니다. 날짜는 붙여 씁니다(삼월 오일). */
{ n:7, bundle:3, title:'일, 이, 삼',
  steps:[
    {type:'intro', who:'moi',
     t:'숫자를 세는 두 번째 방법을 모아 왔어. 둘째 달에 담이 할아버지가 나중에 만나자고 했던 그 숫자야.',
     big:'일, 이, 삼'},
    {type:'pairs', title:'일부터 십까지', who:'moi',
     t:'숫자 카드를 누르면 소리가 나. 하나, 둘, 셋과는 소리가 전혀 다르지?',
     singles:[
       {w:'일', pic:'n1', en:'one'}, {w:'이', pic:'n2', en:'two'}, {w:'삼', pic:'n3', en:'three'}, {w:'사', pic:'n4', en:'four'},
       {w:'오', pic:'n5', en:'five'}, {w:'육', pic:'n6', en:'six'}, {w:'칠', pic:'n7', en:'seven'}, {w:'팔', pic:'n8', en:'eight'},
       {w:'구', pic:'n9', en:'nine'}, {w:'십', pic:'n10', en:'ten'}],
     tip:{who:'dami', t:'한국어에는 숫자가 두 가지란다. 하나, 둘, 셋은 물건과 나이와 시를 셀 때, 일, 이, 삼은 날짜와 분을 말할 때 쓰지. 오늘 배우는 게 일, 이, 삼이란다.'}},
    {type:'pairs', title:'십 넘는 수', who:'tori',
     t:'십 넘는 수는 레고 쌓기처럼 만들어. 십일은 십에 일, 이십은 이 개의 십, 이십삼은 이십에 삼.',
     singles:[
       {w:'십일', pic:'n11', en:'eleven'}, {w:'십이', pic:'n12', en:'twelve'}, {w:'이십', pic:'n20', en:'twenty'},
       {w:'이십삼', pic:'n23', en:'twenty-three'}, {w:'삼십', pic:'n30', en:'thirty'}, {w:'삼십일', pic:'n31', en:'thirty-one'}]},
    {type:'choose', title:'어떻게 읽어요?', who:'tori',
     t:'숫자 카드를 보고 알맞게 읽은 쪽을 골라 봐.',
     qs:[
       {pic:'n7', o:['칠','일곱','팔'], a:'칠'},
       {pic:'n12', o:['이십일','십이','열둘'], a:'십이', why:'십에 이를 더해서 십이예요.'},
       {pic:'n23', o:['삼십이','이십삼','스물셋'], a:'이십삼', why:'이 개의 십에 삼을 더해서 이십삼이에요.'},
       {pic:'n30', o:['삼십','십삼','서른'], a:'삼십'},
       {pic:'n45', o:['사십오','오십사','마흔다섯'], a:'사십오'}]},
    {type:'choose', title:'시는 하나 둘, 분은 일 이', who:'dami',
     t:'시계를 읽을 때 두 숫자가 함께 나온단다. 짧은 빨간 바늘(시)은 하나, 둘로, 긴 파란 바늘(분)은 일, 이로 읽거라.',
     qs:[
       {pic:'ck3_10', t:'몇 시 몇 분이에요?', o:['세 시 십 분이에요.','삼 시 십 분이에요.'], a:'세 시 십 분이에요.', en:"It's 3:10.", why:'시는 하나 둘로(세 시), 분은 일 이로(십 분) 읽어요.'},
       {pic:'ck7_30', t:'몇 시 몇 분이에요?', o:['일곱 시 삼십 분이에요.','일곱 시 서른 분이에요.'], a:'일곱 시 삼십 분이에요.', en:"It's 7:30.", why:'분은 일, 이로 읽어요.'},
       {pic:'ck8_45', t:'몇 시 몇 분이에요?', o:['팔 시 사십오 분이에요.','여덟 시 사십오 분이에요.'], a:'여덟 시 사십오 분이에요.', en:"It's 8:45."},
       {pic:'ck2_30', t:'두 시 삼십 분을 다르게 말하면?', o:['두 시 반이에요.','두 시 절반이에요.'], a:'두 시 반이에요.', en:"It's half past two.", why:'삼십 분은 ‘반’이라고도 해요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 숫자나 시계를 찾아 봐.',
     qs:[
       {say:'팔', o:['n6','n8','n9'], a:'n8'},
       {say:'이십', o:['n12','n20','n2'], a:'n20'},
       {say:'삼십일', o:['n31','n30','n11'], a:'n31'},
       {say:'아홉 시 십오 분', o:['ck9_15','ck11_20','ck3_10'], a:'ck9_15'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'숫자를 한글로 써 봐.',
     items:[{w:'삼', en:'three'}, {w:'십', en:'ten'}, {w:'육', en:'six'}]}
  ],
  dictWords:[{w:'일', en:'one'}, {w:'이', en:'two'}, {w:'삼', en:'three'}, {w:'사', en:'four'}, {w:'오', en:'five'},
             {w:'육', en:'six'}, {w:'칠', en:'seven'}, {w:'팔', en:'eight'}, {w:'구', en:'nine'}, {w:'십', en:'ten'}, {w:'분', en:'minute'}] },

{ n:8, bundle:3, title:'몇 월 며칠이에요?',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 날짜를 말해 볼 거야. 달과 날에는 일, 이, 삼을 써. 삼월 오일, 이렇게. 그리고 네 생일도 말해 보자!',
     big:'몇 월 며칠이에요?'},
    {type:'pairs', title:'열두 달', who:'moi',
     t:'달 이름은 숫자에 월을 붙여. 그런데 두 달은 모양이 조금 바뀌어. 어느 달인지 찾아봐.',
     singles:[
       {w:'일월', pic:'n1', en:'January'}, {w:'이월', pic:'n2', en:'February'}, {w:'삼월', pic:'n3', en:'March'},
       {w:'사월', pic:'n4', en:'April'}, {w:'오월', pic:'n5', en:'May'}, {w:'유월', pic:'n6', en:'June'},
       {w:'칠월', pic:'n7', en:'July'}, {w:'팔월', pic:'n8', en:'August'}, {w:'구월', pic:'n9', en:'September'},
       {w:'시월', pic:'n10', en:'October'}, {w:'십일월', pic:'n11', en:'November'}, {w:'십이월', pic:'n12', en:'December'}],
     tip:{who:'dami', t:'육월이 아니라 유월, 십월이 아니라 시월이란다. 말하기 편하게 받침을 떼어 낸 게지. 이 두 달만 기억하면 나머지는 숫자에 월만 붙이면 된단다.'}},
    {type:'choose', title:'몇 월 며칠이에요?', who:'tori',
     t:'달력을 보고 알맞은 날짜를 골라 봐. 위의 빨간 칸이 달, 아래 큰 숫자가 날이야.',
     qs:[
       {pic:'cal3_5', o:['삼월 오일이에요.','삼월 다섯 일이에요.'], a:'삼월 오일이에요.', en:"It's March 5th.", why:'날짜는 일, 이, 삼으로 말해요.'},
       {pic:'cal6_15', o:['육월 십오일이에요.','유월 십오일이에요.'], a:'유월 십오일이에요.', en:"It's June 15th.", why:'6월은 유월이에요.'},
       {pic:'cal10_9', o:['시월 구일이에요.','십월 구일이에요.'], a:'시월 구일이에요.', en:"It's October 9th.", why:'10월은 시월이에요. 한국에서 시월 구일은 한글날이에요.'},
       {pic:'cal12_25', o:['십이월 이십오일이에요.','열두 월 이십오일이에요.'], a:'십이월 이십오일이에요.', en:"It's December 25th."}]},
    {type:'birthday', title:'내 생일은 언제예요?', who:'tori',
     t:'네가 태어난 달과 날을 골라 봐. 네 생일 문장이 만들어져. 고른 날짜는 어디에도 저장되지 않아.',
     tip:{who:'moi', t:'가족의 생일도 골라서 말해 봐. 엄마 생일, 아빠 생일, 동생 생일!'}},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'생일이 언제예요?', tiles:['생일이','언제예요?'], en:'When is your birthday?'},
       {s:'오늘은 유월 십오일이에요.', tiles:['오늘은','유월','십오일이에요.'], extra:['육월'], en:"Today is June 15th.", hint:'6월은 모양이 바뀌어요.'},
       {s:'세 시 삼십 분에 만나요.', tiles:['세','시','삼십','분에','만나요.'], extra:['삼'], en:"Let's meet at 3:30.", hint:'시는 하나 둘로, 분은 일 이로 읽어요.'},
       {s:'제 생일은 시월 구일이에요.', tiles:['제','생일은','시월','구일이에요.'], extra:['십월'], en:'My birthday is October 9th.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'날짜에도 받침이 건너가는 소리가 가득하단다.',
     cmp:[
       {s:'삼월', d:'사뭘', n:'ㅁ 받침이 뒤로 건너가요'},
       {s:'칠월', d:'치뤌', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'십일', d:'시빌', n:'ㅂ 받침이 뒤로 건너가요'},
       {s:'생일이', d:'생이리', n:'ㅇ 받침은 그대로, ㄹ 받침은 건너가요'}],
     note:'[사뭘]로 들려도 숫자 ‘삼’에 ‘월’을 붙인 것이란다. 숫자를 알면 날짜 쓰기도 쉬워지지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 날짜를 써 봐.',
     items:[
       {w:'유월', en:'June', hint:{who:'dami', t:'육월이 아니라 유월이란다. 받침이 없지.'}},
       {w:'시월', en:'October', hint:{who:'dami', t:'십월이 아니라 시월이란다.'}},
       {w:'생일', en:'birthday'}]}
  ],
  dictWords:[{w:'유월', en:'June'}, {w:'시월', en:'October'}, {w:'생일', en:'birthday'}, {w:'삼월', en:'March'}, {w:'칠월', en:'July'}] },

{ n:9, bundle:3, title:'모이의 생일 초대',
  steps:[
    {type:'intro', who:'moi',
     t:'나 곧 생일이야! 토리를 초대할 거야. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'내 생일 파티에 와!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 날짜와 시간을 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 내 생일 파티에 와!', en:'Tori, come to my birthday party!'},
       {who:'tori', t:'와, 좋아! 언제야?', en:'Wow, great! When is it?'},
       {who:'moi', t:'시월 구일, 토요일이야.', en:"October 9th, Saturday."},
       {who:'tori', t:'몇 시에?', en:'What time?'},
       {who:'moi', t:'두 시 삼십 분에. 늦지 마!', en:"At 2:30. Don't be late!"},
       {who:'tori', t:'할아버지, 할아버지 생신은 언제예요?', en:"Grandpa, when is your birthday?"},
       {who:'dami', t:'허허, 내 생일은 유월 십오일이란다. 어른의 생일은 생신이라고 하지.', en:'Ho ho, my birthday is June 15th. An elder\'s birthday is called saengsin.'},
       {who:'tori', t:'제 생일은 삼월 오일이에요!', en:'My birthday is March 5th!'}],
     note:{who:'dami', t:'시월 구일은 한국의 한글날이란다. 모이 생일이 한글날이라니 딱 어울리지? 그리고 토리가 나에게 생일이 아니라 ‘생신’이라고 물었지. 다섯째 묶음에서 이런 높임말을 더 많이 만날 게야.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'모이 생일은 언제예요?', o:['삼월 오일','시월 구일','유월 십오일'], a:'시월 구일', why:'모이는 ‘시월 구일, 토요일이야’라고 했어요.'},
       {t:'파티는 몇 시에 해요?', o:['두 시 삼십 분','세 시 십 분','열두 시'], a:'두 시 삼십 분', why:'모이는 ‘두 시 삼십 분에’라고 했어요.'},
       {t:'담이 할아버지 생신은 언제예요?', o:['시월 구일','유월 십오일','삼월 오일'], a:'유월 십오일', why:'할아버지는 ‘유월 십오일이란다’라고 하셨어요.'},
       {t:'어른의 생일을 뭐라고 해요?', o:['생신','선물','파티'], a:'생신', why:'할아버지는 ‘어른의 생일은 생신’이라고 하셨어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'cal3_5', line:{who:'moi', t:'토리야, 네 생일은 언제야?'}, en:'Tori, when is your birthday?', o:['삼월 오일이야.','삼월 오일이에요.'], a:'삼월 오일이야.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'ck4_30', line:{who:'dami', t:'토리야, 지금 몇 시냐?'}, en:'Tori, what time is it?', o:['사 시 삼십 분이에요.','네 시 삼십 분이에요.'], a:'네 시 삼십 분이에요.', why:'시는 하나 둘로 읽어서 네 시예요.'},
       {pic:'p_grandma', t:'할머니의 생일을 여쭤요.', en:"Ask Grandma about her birthday.", o:['할머니, 생일이 언제야?','할머니, 생신이 언제예요?'], a:'할머니, 생신이 언제예요?', why:'어른의 생일은 생신이라고 하고, 높여서 여쭤요.'}]},
    {type:'task', title:'우리 가족 생일 달력', who:'moi',
     t:'가족의 생일을 모두 물어서 달력에 적어 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'엄마, 아빠, 형제에게', say:'생일이 언제예요?', sub:'형제나 사촌에게는 ‘생일이 언제야?’'},
       {when:'할머니 할아버지께', say:'생신이 언제예요?', sub:'어른의 생일은 생신이에요.'},
       {when:'내 생일도 말해요', say:'제 생일은 ______월 ______일이에요.', sub:'6월은 유월, 10월은 시월이에요.'}],
     parent:'집에 있는 달력에 가족 생일을 함께 적어 보세요. 아이가 날짜를 한국어로 읽고, 숫자는 아라비아 숫자로 적어도 괜찮습니다. 조부모님 생신을 여쭐 때는 "생신"이라는 말을 쓰도록 이끌어 주세요. 한국에서는 조부모님 생신을 음력으로 지내는 댁도 많으니, 그런 이야기가 나오면 음력이 무엇인지 가볍게 들려주셔도 좋습니다. 시계를 볼 때마다 "지금 몇 시 몇 분이에요?"를 물어 주시면 두 가지 숫자를 구별하는 연습이 됩니다.'}
  ],
  dictWords:[] },

/* ---- 넷째 묶음: 어디에 있어요? ------------------------------------
   자리(위, 아래, 앞, 뒤, 옆, 안)와 길 찾기(왼쪽, 오른쪽, 쭉 가세요)와 동네 장소.
   한국어는 "책상 위에"처럼 물건이 먼저, 자리가 나중이라 영어(on the desk)와 순서가 반대입니다.
   방 그림과 동네 그림에서 말한 곳을 직접 누르는 화면을 씁니다.
   왼쪽과 오른쪽은 그림을 보는 아이 쪽에서 셉니다. */
{ n:10, bundle:4, title:'위, 아래, 앞, 뒤',
  steps:[
    {type:'intro', who:'moi',
     t:'오늘은 자리를 말하는 말을 모아 왔어. 무엇이 어디에 있는지 말할 수 있으면 숨바꼭질도 할 수 있지!',
     big:'어디에 있어요?'},
    {type:'pairs', title:'고양이가 어디에 있어요?', who:'moi',
     t:'고양이가 여기저기 숨었어. 그림을 누르면 소리가 나.',
     singles:[
       {w:'위', pic:'pos_up', en:'on, above'}, {w:'아래', pic:'pos_under', en:'under'},
       {w:'앞', pic:'pos_front', en:'in front'}, {w:'뒤', pic:'pos_back', en:'behind'},
       {w:'옆', pic:'pos_side', en:'next to'}, {w:'안', pic:'pos_in', en:'inside'},
       {w:'고양이', pic:'cat', en:'cat'}, {w:'상자', pic:'pos_side', en:'box'}, {w:'탁자', pic:'pos_under', en:'table'}],
     tip:{who:'dami', t:'한국어는 물건을 먼저, 자리를 나중에 말한단다. 상자 위, 책상 아래. 영어의 on the box와 순서가 반대지. 그리고 뒤에 ‘에’를 붙여 상자 위에 있어요, 이렇게 말하거라.'}},
    {type:'findit', title:'방에서 찾아요', who:'tori',
     t:'내가 말하는 곳을 그림에서 눌러 봐.',
     scene:'room',
     qs:[
       {say:'침대 위', spot:'bed_up'}, {say:'책상 아래', spot:'desk_under'}, {say:'상자 안', spot:'box_in'},
       {say:'문 앞', spot:'door_front'}, {say:'책상 위', spot:'desk_up'}, {say:'상자 옆', spot:'box_side'}]},
    {type:'choose', title:'고양이가 어디에 있어요?', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'pos_in', o:['상자 위에 있어요.','상자 안에 있어요.'], a:'상자 안에 있어요.', en:"It's in the box."},
       {pic:'pos_under', o:['탁자 아래에 있어요.','탁자 위에 있어요.'], a:'탁자 아래에 있어요.', en:"It's under the table."},
       {pic:'pos_back', o:['상자 앞에 있어요.','상자 뒤에 있어요.'], a:'상자 뒤에 있어요.', en:"It's behind the box."},
       {pic:'pos_side', o:['상자 옆에 있어요.','옆 상자에 있어요.'], a:'상자 옆에 있어요.', en:"It's next to the box.", why:'물건이 먼저, 자리가 나중이에요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'상자 위', o:['pos_in','pos_up','pos_front'], a:'pos_up'},
       {say:'상자 앞', o:['pos_front','pos_back','pos_side'], a:'pos_front'},
       {say:'아래', o:['pos_up','pos_in','pos_under'], a:'pos_under'},
       {say:'고양이', o:['cat','pos_side','pos_in'], a:'cat'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'자리를 말하는 말을 써 봐.',
     items:[{w:'위', en:'on'}, {w:'아래', en:'under'}, {w:'옆', en:'next to', hint:{who:'dami', t:'받침은 ㅍ이란다. 옆에는 [여페]로 소리 나지.'}}]}
  ],
  dictWords:[{w:'위', en:'on'}, {w:'아래', en:'under'}, {w:'앞', en:'in front'}, {w:'뒤', en:'behind'},
             {w:'옆', en:'next to'}, {w:'안', en:'inside'}, {w:'고양이', en:'cat'}, {w:'상자', en:'box'}] },

{ n:11, bundle:4, title:'왼쪽으로 가세요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 동네에서 길을 찾아볼 거야. 어디에 있는지 묻고, 어느 쪽으로 가는지 말해 봐.',
     big:'도서관이 어디에 있어요?'},
    {type:'pairs', title:'동네의 곳', who:'moi',
     t:'동네에 있는 곳이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'도서관', pic:'pl_library', en:'library'}, {w:'공원', pic:'pl_park', en:'park'},
       {w:'가게', pic:'pl_shop', en:'store'}, {w:'병원', pic:'pl_hospital', en:'hospital'}]},
    {type:'pairs', title:'길을 알려 주는 말', who:'moi',
     t:'어느 쪽으로 가는지 알려 주는 말이야.',
     singles:[
       {w:'왼쪽으로 가세요', pic:'go_left', en:'go left'}, {w:'오른쪽으로 가세요', pic:'go_right', en:'go right'},
       {w:'쭉 가세요', pic:'go_straight', en:'go straight'}],
     tip:{who:'tori', t:'길을 알려 줄 때는 모르는 사람이 어른이 많으니까 ‘가세요’라고 해. 친구에게는 ‘왼쪽으로 가’라고 하면 돼.'}},
    {type:'findit', title:'동네 지도에서 찾아요', who:'tori',
     t:'내가 말하는 곳을 지도에서 눌러 봐. 왼쪽과 오른쪽은 지도를 보는 네 쪽에서 세.',
     scene:'town',
     qs:[
       {say:'도서관', spot:'library'},
       {say:'학교 왼쪽에 있어요', t:'학교 왼쪽에 있어요. 어디일까요?', spot:'shop', why:'학교 왼쪽에는 가게가 있어요.'},
       {say:'학교 뒤에 있어요', t:'학교 뒤에 있어요. 어디일까요?', spot:'park', why:'학교 뒤에는 공원이 있어요.'},
       {say:'학교 앞, 길 건너에 있어요', t:'학교 앞, 길 건너에 있어요. 어디일까요?', spot:'hospital', why:'길 건너에는 병원이 있어요.'},
       {say:'학교 오른쪽에 있어요', t:'학교 오른쪽에 있어요. 어디일까요?', spot:'library', why:'학교 오른쪽에는 도서관이 있어요.'}]},
    {type:'choose', title:'어느 쪽으로 가요?', who:'tori',
     t:'빨간 화살표를 보고 길을 알려 줘.',
     qs:[
       {pic:'go_left', o:['왼쪽으로 가세요.','오른쪽으로 가세요.','쭉 가세요.'], a:'왼쪽으로 가세요.', en:'Go left.'},
       {pic:'go_straight', o:['오른쪽으로 가세요.','쭉 가세요.','왼쪽으로 가세요.'], a:'쭉 가세요.', en:'Go straight.'},
       {pic:'go_right', o:['쭉 가세요.','왼쪽으로 가세요.','오른쪽으로 가세요.'], a:'오른쪽으로 가세요.', en:'Go right.'},
       {pic:'town', t:'지도를 봐요. 도서관이 어디에 있어요?', o:['학교 옆에 있어요.','공원 안에 있어요.'], a:'학교 옆에 있어요.', en:"It's next to the school."}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'도서관이 어디에 있어요?', tiles:['도서관이','어디에','있어요?'], extra:['도서관가'], en:'Where is the library?'},
       {s:'학교 옆에 있어요.', tiles:['학교','옆에','있어요.'], extra:['옆','학교에'], en:"It's next to the school.", hint:'물건(학교)이 먼저, 자리(옆)가 나중이에요.'},
       {s:'쭉 가서 왼쪽으로 가세요.', tiles:['쭉','가서','왼쪽으로','가세요.'], en:'Go straight, then go left.'},
       {s:'공원은 학교 뒤에 있어요.', tiles:['공원은','학교','뒤에','있어요.'], en:'The park is behind the school.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'자리를 말하는 말 뒤에 ‘에’가 붙으면 받침이 건너가지.',
     cmp:[
       {s:'옆에', d:'여페', n:'ㅍ 받침이 뒤로 건너가요'},
       {s:'앞에', d:'아페', n:'ㅍ 받침이 뒤로 건너가요'},
       {s:'안에', d:'아네', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'병원에', d:'병워네', n:'ㄴ 받침이 뒤로 건너가요'}],
     note:'옆과 앞은 ㅍ 받침이란다. [여페], [아페]로 들려도 ‘옆’, ‘앞’을 먼저 쓰고 ‘에’를 붙이거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'앞에', en:'in front (with 에)', hint:{who:'dami', t:'소리는 [아페]지만 ‘앞’에 받침 ㅍ이 있단다.'}},
       {w:'공원', en:'park'},
       {w:'왼쪽', en:'left'}]}
  ],
  dictWords:[{w:'앞에', en:'in front'}, {w:'옆에', en:'next to'}, {w:'공원', en:'park'}, {w:'가게', en:'store'},
             {w:'병원', en:'hospital'}, {w:'도서관', en:'library'}, {w:'왼쪽', en:'left'}, {w:'오른쪽', en:'right'}] },

{ n:12, bundle:4, title:'모이네 집 찾기',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘이 모이 생일 파티야! 그런데 모이네 집을 몰라. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'모이야, 너희 집이 어디에 있어?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 길을 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 너희 집이 어디에 있어?', en:'Moi, where is your house?'},
       {who:'moi', t:'공원 알아? 공원 앞에서 오른쪽으로 가.', en:'Do you know the park? Turn right in front of the park.'},
       {who:'tori', t:'오른쪽으로? 그다음은?', en:'Right? And then?'},
       {who:'moi', t:'쭉 가면 큰 나무가 있어. 우리 집은 그 나무 위에 있어!', en:"Go straight and there's a big tree. My house is up in that tree!"},
       {who:'tori', t:'할아버지, 공원이 어디에 있어요?', en:'Grandpa, where is the park?'},
       {who:'dami', t:'허허, 학교 뒤에 있단다. 쭉 가거라.', en:"Ho ho, it's behind the school. Go straight."},
       {who:'tori', t:'네, 감사합니다!', en:'Okay, thank you!'},
       {who:'moi', t:'토리야, 여기야! 나무 위를 봐!', en:"Tori, over here! Look up in the tree!"}],
     note:{who:'dami', t:'까치는 나무 위에 집을 짓는단다. 한국에서는 까치가 반가운 손님이 온다는 소식을 전한다고들 하지. 그리고 토리가 모이에게는 ‘어디에 있어?’, 나에게는 ‘어디에 있어요?’라고 물었지?'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'모이네 집은 어디에 있어요?', o:['나무 위','공원 안','학교 옆'], a:'나무 위', why:'모이는 ‘우리 집은 그 나무 위에 있어!’라고 했어요.'},
       {t:'공원 앞에서 어느 쪽으로 가요?', o:['왼쪽','오른쪽','뒤쪽'], a:'오른쪽', why:'모이는 ‘공원 앞에서 오른쪽으로 가’라고 했어요.'},
       {t:'공원은 어디에 있어요?', o:['학교 뒤','병원 앞','도서관 안'], a:'학교 뒤', why:'할아버지는 ‘학교 뒤에 있단다’라고 하셨어요.'},
       {t:'토리는 할아버지께 길을 여쭤보고 뭐라고 했어요?', o:['잘 자','감사합니다','미안해'], a:'감사합니다', why:'토리는 ‘네, 감사합니다!’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'pos_under', line:{who:'moi', t:'토리야, 고양이 어디에 있어?'}, en:'Tori, where is the cat?', o:['탁자 아래에 있어.','탁자 아래에 있어요.'], a:'탁자 아래에 있어.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'town', line:{who:'dami', t:'토리야, 도서관이 어디에 있느냐?'}, en:'Tori, where is the library?', o:['학교 옆에 있어.','학교 옆에 있어요.'], a:'학교 옆에 있어요.', why:'할아버지는 어른이라서 ‘있어요’라고 해요.'},
       {pic:'go_right', t:'길을 모르는 할머니께 알려 드려요.', en:'Tell a grandma who is lost which way to go.', o:['오른쪽으로 가.','오른쪽으로 가세요.'], a:'오른쪽으로 가세요.', why:'어른께 길을 알려 드릴 때는 ‘가세요’라고 해요.'}]},
    {type:'task', title:'보물 숨기기 놀이', who:'moi',
     t:'가족과 보물 숨기기 놀이를 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'가족이 장난감을 숨기고 힌트를 줘요', say:'침대 아래에 있어요.', sub:'위, 아래, 앞, 뒤, 옆, 안으로 힌트를 바꿔 가며 해요.'},
       {when:'이번엔 아이가 숨기고 힌트를 줘요', say:'______ ______에 있어요.', sub:'물건이 먼저, 자리가 나중: 책상 위에 있어요.'},
       {when:'밖에 나가면 길도 알려 줘요', say:'쭉 가세요. 왼쪽으로 가세요.', sub:'산책할 때 아이가 길잡이가 되어 봐요.'}],
     parent:'집 안에서 작은 장난감을 숨기고 "침대 아래에 있어요", "상자 안에 있어요"처럼 한국어로 힌트를 주세요. 몇 번 한 뒤에는 역할을 바꿔 아이가 숨기고 힌트를 말하게 해 주세요. 영어와 순서가 반대(on the bed, 침대 위)라서 아이가 "위 침대"처럼 말하기 쉬우니, 그때는 "침대 위!" 하고 바르게 되받아 주시면 됩니다. 산책이나 장보러 가는 길에 아이에게 "왼쪽이야? 오른쪽이야?"를 물어 길잡이를 맡겨 보셔도 좋습니다.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인: 넷째 달은 묶음이 모두 열린 뒤에 만듭니다 ---- */
const M4_CHECK = [];

/* ---- 받아쓰기 자판: 셋째 달에 앉아요의 ㄵ, 괜찮아요의 ㄶ 을 더합니다 ---- */
const M4_POOL = Object.assign({}, M3_POOL, {jong: [...M3_POOL.jong, 'ㄵ', 'ㄶ']});

/* 달 등록 정보 */
const FOURTH_MOON = {
  key: 'fourth-moon', title: '넷째 달', path: 'fourth-moon/',
  store: 'daltokki:v1:fourth-moon',
  units: M4_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M4_POOL,
  num: 4, name: '넷째 달', title2: '넷째 달, 어제와 내 마음', nextName: '다섯째 달',
  topics: '지난 일, 기분, 숫자와 날짜, 길 찾기, 존댓말',
  nights: M4_NIGHTS, bundles: M4_BUNDLES, pic: M4_PIC, keys: M4_POOL, total: M4_TOTAL, check: M4_CHECK,
  prev: {store: 'daltokki:v1:third-moon', total: 15},
  text: {
    welcomePrev: '셋째 달을 다 채웠구나. 이번 달에는 어제 한 일과 네 마음을 말해 봐. 지난 일, 기분, 새 숫자, 길 찾기, 그리고 할머니 댁에서 쓰는 존댓말까지 가. 열다섯 밤이면 보름달이 떠.',
    welcomeFresh: '넷째 달에서는 어제 한 일과 기분을 말해. 셋째 달의 하루 일과를 알고 오면 훨씬 쉬워. 이미 한국어로 꽤 말할 줄 알면 여기서 시작해도 돼.',
    parents: '넷째 달은 지난 일, 기분, 한자어 수(날짜와 분), 길 찾기, 존댓말의 다섯 묶음으로, 묶음마다 세 밤입니다. 지난 일을 말하는 규칙은 받침이 아니라 모음을 보는 첫 규칙이라 천천히 다룹니다.'
  }
};
