/* ══════════════════════════════════════════════════════════════
   둘째 달 내용: 나와 우리 집
   보름(열다섯 밤)을 다섯 묶음으로 나눕니다. 묶음마다 첫 밤은 새 말, 둘째 밤은 문장,
   셋째 밤은 이야기와 가족 과제입니다. 지금은 첫 묶음(안녕하세요)이 열려 있습니다.
   화면은 M2_NIGHTS 의 steps 순서대로 나옵니다. 화면 종류는 second-moon 페이지에 있습니다.
   첫째 달 내용 파일과 함께 읽혀도 겹치지 않도록 이름 앞에 M2_ 를 붙였습니다.
   ══════════════════════════════════════════════════════════════ */

/* ---- 그림 ----------------------------------------------------
   사람은 몸 부분을 조립해서 그립니다. 발이 (x, 122)에 오고, face 가 1이면 오른쪽을 봅니다.
   자세: stand 서 있기, wave 손 흔들기, bow 고개 숙이기, walk 걷기, give 두 손 내밀기     */
const M2_PEOPLE = {
  kid:     {skin:'#F0D9BE', shirt:'#2D6E8E', low:'#17324A', hair:'#221F1C', size:.78, style:'bowl'},
  friend:  {skin:'#EBCBA8', shirt:'#C1403A', low:'#5A5248', hair:'#5A3A22', size:.78, style:'pony'},
  grandma: {skin:'#EBCFB2', shirt:'#6E8F58', skirt:'#C1403A', hair:'#B8B0A4', size:.94, style:'bun'},
  grandpa: {skin:'#EBCFB2', shirt:'#8A6A4A', low:'#5A5248', hair:'#B8B0A4', size:1, style:'short', glasses:true},
  teacher: {skin:'#F0D9BE', shirt:'#E3A93C', low:'#17324A', hair:'#221F1C', size:1, style:'short', glasses:true},
  aunt:    {skin:'#F0D9BE', shirt:'#D98B7E', skirt:'#17324A', hair:'#221F1C', size:.96, style:'long'},
  /* 둘째 묶음. 그림 속 "나"는 남자아이든 여자아이든 파란 옷입니다. */
  girl:    {skin:'#F0D9BE', shirt:'#2D6E8E', skirt:'#17324A', hair:'#221F1C', size:.78, style:'pony'},
  mom:     {skin:'#F0D9BE', shirt:'#C1403A', skirt:'#5A5248', hair:'#221F1C', size:.98, style:'bob'},
  dad:     {skin:'#EBCBA8', shirt:'#17324A', low:'#8A6A4A', hair:'#221F1C', size:1.02, style:'short'},
  uncle:   {skin:'#F0D9BE', shirt:'#6E8F58', low:'#17324A', hair:'#5A3A22', size:1, style:'spiky'},
  bigbro:  {skin:'#F0D9BE', shirt:'#8A6A4A', low:'#17324A', hair:'#221F1C', size:.9, style:'spiky'},
  bigsis:  {skin:'#F0D9BE', shirt:'#E3A93C', skirt:'#C1403A', hair:'#221F1C', size:.9, style:'long'},
  baby:    {skin:'#F3DEC6', shirt:'#E3A93C', low:'#D98B7E', hair:'#5A3A22', size:.56, style:'bowl'}
};
function m2Person(kind, x, pose, face){
  const P = M2_PEOPLE[kind], k = P.size, f = face || 1, S = '#221F1C';
  const hair = {
    bowl:  `<path d="M-16 -83 C-17 -104 17 -104 16 -83 C9 -93 -9 -93 -16 -83 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>`,
    pony:  `<circle cx="-16" cy="-90" r="7" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>
            <path d="M-16 -83 C-17 -104 17 -104 16 -83 C9 -94 -9 -94 -16 -83 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>`,
    bun:   `<circle cx="-8" cy="-102" r="7.5" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>
            <path d="M-16 -84 C-17 -103 17 -103 16 -84 C9 -95 -9 -95 -16 -84 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>`,
    short: `<path d="M-15 -86 C-15 -102 15 -102 15 -86 C9 -95 -9 -95 -15 -86 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>`,
    bob:   `<path d="M-18 -84 C-19 -106 19 -106 18 -84 L18 -72 L11 -72 L11 -86 C4 -94 -10 -94 -11 -86 L-11 -72 L-18 -72 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>`,
    spiky: `<path d="M-15 -86 L-14 -97 L-8 -94 L-4 -102 L1 -95 L7 -101 L9 -94 L15 -96 L15 -86 C9 -94 -9 -94 -15 -86 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4" stroke-linejoin="round"/>`,
    long:  `<path d="M-17 -84 C-18 -106 18 -106 17 -84 L17 -64 L10 -64 L10 -86 C4 -94 -10 -94 -12 -84 L-12 -62 L-17 -62 Z" fill="${P.hair}" stroke="${S}" stroke-width="2.4"/>`
  }[P.style];
  const arm = (d, hx, hy) => `<path d="${d}" stroke="${S}" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="${d}" stroke="${P.shirt}" stroke-width="5" stroke-linecap="round" fill="none"/>
    <circle cx="${hx}" cy="${hy}" r="4.2" fill="${P.skin}" stroke="${S}" stroke-width="2"/>`;
  const arms = {
    stand: arm('M-11 -63 L-16 -38', -16, -38) + arm('M11 -63 L16 -38', 16, -38),
    wave:  arm('M-11 -63 L-16 -38', -16, -38) + arm('M11 -63 Q27 -68 24 -93', 24, -93),
    /* 숙인 몸에서 팔이 땅을 향해 늘어지도록, 몸을 기울인 만큼 앞으로 뻗어 둡니다. */
    bow:   arm('M-8 -63 L5 -42', 5, -42) + arm('M8 -63 L21 -42', 21, -42),
    walk:  arm('M-11 -63 L-20 -42', -20, -42) + arm('M11 -63 L20 -42', 20, -42),
    give:  arm('M-10 -63 Q6 -52 26 -52', 26, -52) + arm('M11 -63 Q20 -54 30 -54', 30, -54)
  }[pose || 'stand'];
  const legs = P.skirt
    ? `<path d="M-15 -46 L15 -46 L21 -4 L-21 -4 Z" fill="${P.skirt}" stroke="${S}" stroke-width="2.4" stroke-linejoin="round"/>`
    : pose === 'walk'
    ? `<g fill="${P.low}" stroke="${S}" stroke-width="2.4"><rect x="-9" y="-36" width="8" height="35" rx="3" transform="rotate(-14 -5 -36)"/>
       <rect x="1" y="-36" width="8" height="35" rx="3" transform="rotate(14 5 -36)"/></g>`
    : `<g fill="${P.low}" stroke="${S}" stroke-width="2.4"><rect x="-10" y="-36" width="8.5" height="35" rx="3"/><rect x="1.5" y="-36" width="8.5" height="35" rx="3"/></g>`;
  const feet = pose === 'walk'
    ? `<g fill="${S}"><ellipse cx="-11" cy="-2" rx="6" ry="3"/><ellipse cx="13" cy="-2" rx="6" ry="3"/></g>`
    : `<g fill="${S}"><ellipse cx="-6" cy="-2" rx="6.5" ry="3"/><ellipse cx="7" cy="-2" rx="6.5" ry="3"/></g>`;
  const glasses = P.glasses ? `<g fill="none" stroke="${S}" stroke-width="1.6"><circle cx="-4" cy="-85" r="4"/><circle cx="8" cy="-85" r="4"/><path d="M0 -85 L4 -85"/></g>` : '';
  const upper = `<rect x="-14" y="-70" width="28" height="36" rx="8" fill="${P.shirt}" stroke="${S}" stroke-width="2.4"/>
    ${arms}
    <circle cx="2" cy="-84" r="15" fill="${P.skin}" stroke="${S}" stroke-width="2.4"/>
    ${hair}
    <circle cx="-4" cy="-85" r="1.9" fill="${S}"/><circle cx="8" cy="-85" r="1.9" fill="${S}"/>
    <path d="M-1 -77 q3.5 3.4 7 0" stroke="${S}" stroke-width="1.8" fill="none" stroke-linecap="round"/>${glasses}`;
  const top = pose === 'bow' ? `<g transform="rotate(32 0 -38)">${upper}</g>` : upper;
  return `<g transform="translate(${x} 122) scale(${f * k} ${k})">${legs}${feet}${top}</g>`;
}
const m2Ground = '<path d="M6 122 L194 122" stroke="#221F1C" stroke-width="2.6" stroke-linecap="round"/>';
const m2Svg = (inner, label, box) => `<svg viewBox="${box || '0 0 200 130'}" width="150" height="98" role="img" aria-label="${label}">${m2Ground}${inner}</svg>`;
/* 한 사람만 나오는 그림은 가까이 당겨서 그립니다. */
const m2Portrait = (kind, label) => m2Svg(m2Person(kind, 100, 'stand', 1), label, '46 12 108 116');
/* 나 표시: 아이가 자기를 찾기 쉽게 머리 위에 붙입니다. */
const m2Me = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-13" y="-11" width="26" height="19" rx="9" fill="#E3A93C" stroke="#221F1C" stroke-width="2.2"/>
  <text x="0" y="4" text-anchor="middle" font-size="13" font-family="Noto Sans KR, sans-serif" font-weight="700" fill="#221F1C">나</text></g>`;
const m2Door = `<rect x="10" y="44" width="46" height="78" rx="3" fill="#E0D2B2" stroke="#221F1C" stroke-width="2.6"/>
  <rect x="20" y="56" width="26" height="66" fill="#8A6A4A" stroke="#221F1C" stroke-width="2.4"/><circle cx="41" cy="92" r="2.4" fill="#E3A93C"/>`;
const m2Arrow = x => `<path d="M${x} 58 L${x + 20} 58 M${x + 12} 50 L${x + 21} 58 L${x + 12} 66" stroke="#C1403A" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
function m2Bye(stayer, leaver){
  const meStays = stayer === 'kid';
  return m2Door + m2Person(stayer, 70, 'wave', 1) + m2Person(leaver, 128, 'walk', 1) + m2Arrow(158)
    + (meStays ? m2Me(70, 29) : m2Me(128, 29));
}
/* 사과 n개: 다섯 개씩 한 줄. 세기 쉽게 다섯 묶음마다 줄을 바꿉니다. */
function m2Apples(n){
  let g = '';
  const rows = Math.ceil(n / 5);
  for(let i = 0; i < n; i++){
    const row = Math.floor(i / 5), col = i % 5, per = Math.min(5, n - row * 5);
    const x = 100 + (col - (per - 1) / 2) * 34, y = 65 + (row - (rows - 1) / 2) * 42;
    g += `<g transform="translate(${x} ${y})"><circle r="14" fill="#C1403A" stroke="#221F1C" stroke-width="2.4"/>
      <path d="M0 -13 Q2 -21 6 -23" stroke="#221F1C" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M2 -18 Q10 -24 14 -17 Q7 -14 2 -18 Z" fill="#6E8F58" stroke="#221F1C" stroke-width="1.6"/>
      <ellipse cx="-5" cy="-4" rx="3" ry="5" fill="#fff" opacity=".35"/></g>`;
  }
  /* 세 줄이 되면 그림 안에 들어오도록 조금 줄입니다. */
  const k = rows > 2 ? .82 : 1;
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="사과 ${n}개"><g transform="translate(100 65) scale(${k}) translate(-100 -65)">${g}</g></svg>`;
}
/* 초가 n개 꽂힌 생일 케이크 */
function m2Cake(n){
  let c = '';
  const w = Math.min(15, 110 / n);
  for(let i = 0; i < n; i++){
    const x = 100 + (i - (n - 1) / 2) * w;
    c += `<rect x="${x - 2.6}" y="40" width="5.2" height="22" fill="#9DB4C6" stroke="#221F1C" stroke-width="1.6"/>
      <path d="M${x} 28 Q${x + 5} 35 ${x} 39 Q${x - 5} 35 ${x} 28 Z" fill="#E3A93C" stroke="#221F1C" stroke-width="1.4"/>`;
  }
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="초가 ${n}개 꽂힌 생일 케이크">
    <ellipse cx="100" cy="118" rx="80" ry="7" fill="#E0D2B2"/>
    <rect x="36" y="62" width="128" height="52" rx="8" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
    <path d="M36 80 Q52 92 68 80 Q84 92 100 80 Q116 92 132 80 Q148 92 164 80" stroke="#D98B7E" stroke-width="7" fill="none"/>
    ${c}</svg>`;
}
/* ---- 넷째 묶음: 몸 그림 ----
   얼굴 부위는 크게 그린 얼굴에, 몸 부위는 크게 당긴 아이 그림에 빨간 동그라미와 화살표로 짚어 줍니다. */
const M2_RING = (x, y, r, w) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#F6D98F" fill-opacity=".35" stroke="#C1403A" stroke-width="${w || 3.4}" stroke-dasharray="${(w || 3.4) * 2} ${(w || 3.4) * 1.2}"/>`;
function m2Face(part, mood){
  const S = '#221F1C';
  const spot = {head:[100, 34, 24], eye:[86, 62, 12], nose:[102, 75, 11], mouth:[100, 92, 14], ear:[143, 70, 14]}[part];
  const mouth = mood === 'ouch'
    ? `<path d="M88 96 Q100 86 112 96" stroke="${S}" stroke-width="3" fill="none" stroke-linecap="round"/>
       <path d="M78 55 L92 50 M122 55 L108 50" stroke="${S}" stroke-width="2.6" stroke-linecap="round"/>
       <path d="M142 34 Q136 46 142 50 Q148 46 142 34 Z" fill="#9DB4C6" stroke="${S}" stroke-width="1.8"/>`
    : `<path d="M88 90 Q100 100 112 90" stroke="${S}" stroke-width="3" fill="#C1403A" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${mood === 'ouch' ? '아파하는 얼굴' : '얼굴'}">
    <ellipse cx="58" cy="70" rx="8" ry="11" fill="#F0D9BE" stroke="${S}" stroke-width="2.6"/>
    <ellipse cx="142" cy="70" rx="8" ry="11" fill="#F0D9BE" stroke="${S}" stroke-width="2.6"/>
    <circle cx="100" cy="68" r="42" fill="#F0D9BE" stroke="${S}" stroke-width="3"/>
    <path d="M58 58 C54 14 146 14 142 58 C124 38 76 38 58 58 Z" fill="#221F1C" stroke="${S}" stroke-width="2.6"/>
    <circle cx="86" cy="62" r="4.4" fill="${S}"/><circle cx="114" cy="62" r="4.4" fill="${S}"/>
    <path d="M100 68 Q96 78 100 81 Q103 82 105 80" stroke="${S}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="78" cy="80" r="6" fill="#D98B7E" opacity=".45"/><circle cx="122" cy="80" r="6" fill="#D98B7E" opacity=".45"/>
    ${mouth}
    ${spot ? M2_RING(...spot) : ''}</svg>`;
}
/* 아이 전신(크게 당김). 좌표는 m2Person 의 kid(크기 .78)를 x=100 에 세운 자리입니다. */
function m2BodyPart(part){
  /* 부위마다 그 둘레를 가까이 당겨 보여 줍니다. [x, y, 동그라미 크기, 보이는 창] */
  const spot = {hand:[87.5, 92, 7, '56 58 76 50'], foot:[95.5, 119, 7, '62 80 76 50'], belly:[101.5, 84, 9, '64 48 76 50'],
                arm:[89, 79, 7, '58 46 76 50'], leg:[96, 104, 9, '62 76 76 50']}[part];
  return `<svg viewBox="${spot[3]}" width="150" height="98" role="img" aria-label="몸" style="overflow:hidden">
    ${m2Person('kid', 100, 'stand', 1)}${M2_RING(spot[0], spot[1], spot[2], 1.8)}</svg>`;
}
/* ---- 다섯째 묶음: 집 안 물건 ----
   m2Thing(종류, 색): 색 문제에 같은 물건을 여러 색으로 쓰려고 색을 받습니다. */
const M2_COLOR = {red:'#C1403A', blue:'#2D6E8E', yellow:'#E3A93C', green:'#6E8F58', black:'#2B2724', white:'#FBF7EC'};
function m2Thing(kind, color){
  const S = '#221F1C', c = M2_COLOR[color] || color || '#8A6A4A', wood = '#B08452';
  const g = {
    house: `<path d="M40 64 L100 20 L160 64 Z" fill="#C1403A" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="52" y="62" width="96" height="58" fill="#F5E6BD" stroke="${S}" stroke-width="3"/>
      <rect x="88" y="84" width="24" height="36" fill="${wood}" stroke="${S}" stroke-width="2.6"/>
      <rect x="60" y="74" width="20" height="18" fill="#9DB4C6" stroke="${S}" stroke-width="2.4"/><rect x="120" y="74" width="20" height="18" fill="#9DB4C6" stroke="${S}" stroke-width="2.4"/>`,
    room: `<path d="M30 16 L170 16 L170 92 L30 92 Z" fill="#EFE2C2" stroke="${S}" stroke-width="3"/>
      <path d="M30 92 L10 122 L190 122 L170 92" fill="#D9C39A" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="112" y="30" width="36" height="30" fill="#9DB4C6" stroke="${S}" stroke-width="2.4"/><path d="M130 30 L130 60 M112 45 L148 45" stroke="${S}" stroke-width="2"/>
      <rect x="40" y="80" width="54" height="20" rx="3" fill="#E3A93C" stroke="${S}" stroke-width="2.4"/><rect x="42" y="72" width="16" height="10" rx="3" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>`,
    door: `<rect x="70" y="10" width="60" height="112" rx="3" fill="${wood}" stroke="${S}" stroke-width="3"/>
      <rect x="80" y="22" width="40" height="36" fill="none" stroke="${S}" stroke-width="2"/><rect x="80" y="70" width="40" height="40" fill="none" stroke="${S}" stroke-width="2"/>
      <circle cx="120" cy="66" r="4" fill="#E3A93C" stroke="${S}" stroke-width="2"/>`,
    window: `<rect x="50" y="16" width="100" height="92" fill="#9DB4C6" stroke="${S}" stroke-width="3.4"/>
      <circle cx="80" cy="44" r="10" fill="#F5E6BD"/><path d="M100 16 L100 108 M50 62 L150 62" stroke="${S}" stroke-width="3"/>
      <rect x="44" y="106" width="112" height="8" fill="${wood}" stroke="${S}" stroke-width="2.4"/>`,
    bed: `<rect x="30" y="44" width="10" height="72" fill="${wood}" stroke="${S}" stroke-width="2.6"/>
      <rect x="36" y="70" width="134" height="30" rx="3" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <rect x="44" y="58" width="30" height="14" rx="6" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <path d="M80 66 L168 66 L168 100 L80 100 Z" fill="${c}" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <rect x="36" y="100" width="134" height="8" fill="${wood}" stroke="${S}" stroke-width="2.4"/><path d="M40 108 L40 118 M166 108 L166 118" stroke="${S}" stroke-width="4"/>`,
    desk: `<rect x="34" y="46" width="132" height="12" rx="2" fill="${c}" stroke="${S}" stroke-width="2.8"/>
      <rect x="120" y="58" width="40" height="44" fill="${c}" stroke="${S}" stroke-width="2.6"/><path d="M126 80 L154 80" stroke="${S}" stroke-width="2"/>
      <circle cx="140" cy="70" r="2.4" fill="${S}"/><circle cx="140" cy="92" r="2.4" fill="${S}"/>
      <path d="M42 58 L42 120 M158 102 L158 120 M122 102 L122 120" stroke="${S}" stroke-width="5" stroke-linecap="round"/>
      <rect x="54" y="30" width="30" height="16" fill="#9DB4C6" stroke="${S}" stroke-width="2.2"/>`,
    chair: `<rect x="72" y="14" width="56" height="54" rx="6" fill="${c}" stroke="${S}" stroke-width="2.8"/>
      <rect x="66" y="66" width="68" height="12" rx="3" fill="${c}" stroke="${S}" stroke-width="2.8"/>
      <path d="M74 78 L70 120 M126 78 L130 120 M84 78 L86 112 M116 78 L114 112" stroke="${S}" stroke-width="4.6" stroke-linecap="round"/>`,
    book: `<path d="M60 20 L70 14 L150 14 L150 106 L140 112 L60 112 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M140 20 L150 14" stroke="${S}" stroke-width="2.6"/>
      <path d="M60 20 L140 20 L140 112 L60 112 Z" fill="${c}" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="78" y="40" width="48" height="16" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <path d="M68 20 L68 112" stroke="${S}" stroke-width="2"/>`,
    cup: `<path d="M64 36 L136 36 L128 114 L72 114 Z" fill="${c}" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M134 52 C164 52 164 92 130 92" stroke="${S}" stroke-width="9" fill="none"/><path d="M134 52 C164 52 164 92 130 92" stroke="${c}" stroke-width="4" fill="none"/>
      <ellipse cx="100" cy="36" rx="36" ry="6" fill="#EFE2C2" stroke="${S}" stroke-width="2.6"/>
`,
    bag: `<path d="M84 34 C84 12 116 12 116 34" stroke="${S}" stroke-width="7" fill="none"/>
      <rect x="58" y="30" width="84" height="88" rx="18" fill="${c}" stroke="${S}" stroke-width="3"/>
      <rect x="72" y="70" width="56" height="34" rx="8" fill="${c}" stroke="${S}" stroke-width="2.6"/><path d="M72 82 L128 82" stroke="${S}" stroke-width="2"/>
      <path d="M64 44 Q100 54 136 44" stroke="${S}" stroke-width="2" fill="none"/>`,
    blob: `<path d="M60 40 C70 12 128 14 144 34 C166 60 150 104 118 112 C84 122 44 104 46 74 C47 60 54 50 60 40 Z" fill="${c}" stroke="${S}" stroke-width="3"/>
      <ellipse cx="82" cy="48" rx="10" ry="6" fill="#fff" opacity="${color === 'white' ? 0 : .3}"/>`,
    palette: `<path d="M100 14 C150 14 178 48 170 78 C164 100 140 94 132 104 C122 120 100 122 80 116 C44 106 26 76 36 50 C46 26 70 14 100 14 Z" fill="#E7D2A8" stroke="${S}" stroke-width="3"/>
      <circle cx="70" cy="46" r="10" fill="#C1403A" stroke="${S}" stroke-width="2"/><circle cx="100" cy="34" r="10" fill="#E3A93C" stroke="${S}" stroke-width="2"/>
      <circle cx="132" cy="44" r="10" fill="#2D6E8E" stroke="${S}" stroke-width="2"/><circle cx="62" cy="80" r="10" fill="#6E8F58" stroke="${S}" stroke-width="2"/>
      <circle cx="104" cy="94" r="10" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>`
  }[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${kind}">${g}</svg>`;
}
const M2_PIC = {
  hi_friend: m2Svg(m2Person('kid', 66, 'wave', 1) + m2Person('friend', 134, 'wave', -1) + m2Me(66, 29), '친구와 손을 흔들며 인사하는 그림'),
  hi_elder:  m2Svg(m2Person('kid', 70, 'bow', 1) + m2Person('grandma', 138, 'stand', -1) + m2Me(58, 38), '할머니께 고개 숙여 인사하는 그림'),
  thanks:    m2Svg(m2Person('grandma', 66, 'give', 1) + m2Person('kid', 140, 'give', -1)
               + '<g stroke="#221F1C" stroke-width="2.4"><rect x="92" y="62" width="24" height="20" fill="#C1403A"/><path d="M104 62 L104 82 M92 71 L116 71" stroke="#E3A93C" stroke-width="3.4"/></g>'
               + m2Me(140, 29), '할머니가 주신 선물을 두 손으로 받는 그림'),
  sorry:     m2Svg(m2Person('kid', 66, 'bow', 1) + m2Person('grandpa', 144, 'stand', -1)
               + '<ellipse cx="106" cy="120" rx="18" ry="4" fill="#9DB4C6"/><g transform="rotate(-80 100 114)"><path d="M92 106 L108 106 L106 122 L94 122 Z" fill="#F5E6BD" stroke="#221F1C" stroke-width="2.4"/></g>'
               + m2Me(54, 38), '할아버지 컵을 쏟고 고개 숙이는 그림'),
  yes:       m2Svg(m2Person('kid', 76, 'stand', 1) + '<circle cx="146" cy="56" r="22" fill="none" stroke="#6E8F58" stroke-width="8"/>' + m2Me(76, 29), '네라고 대답하는 그림'),
  no:        m2Svg(m2Person('kid', 76, 'stand', 1) + '<path d="M128 38 L164 74 M164 38 L128 74" stroke="#C1403A" stroke-width="8" stroke-linecap="round"/>' + m2Me(76, 29), '아니요라고 대답하는 그림'),
  bye_go:    m2Svg(m2Bye('kid', 'grandma'), '할머니가 떠나고 나는 집에 남는 그림'),
  bye_stay:  m2Svg(m2Bye('grandma', 'kid'), '내가 떠나고 할머니는 집에 남는 그림'),
  bye_stay_t:m2Svg(m2Bye('teacher', 'kid'), '내가 떠나고 선생님은 남는 그림'),
  bye_go_a:  m2Svg(m2Bye('kid', 'aunt'), '이모가 떠나고 나는 집에 남는 그림'),
  p_friend:  m2Portrait('friend', '친구'),
  p_grandma: m2Portrait('grandma', '할머니'),
  p_grandpa: m2Portrait('grandpa', '할아버지'),
  p_teacher: m2Portrait('teacher', '선생님'),
  nametag:   `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="이름표">
     <rect x="44" y="22" width="112" height="84" rx="12" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
     <rect x="44" y="22" width="112" height="24" rx="12" fill="#2D6E8E" stroke="#221F1C" stroke-width="3"/>
     <rect x="44" y="34" width="112" height="12" fill="#2D6E8E"/><path d="M44 46 L156 46" stroke="#221F1C" stroke-width="3"/>
     <circle cx="100" cy="14" r="7" fill="none" stroke="#221F1C" stroke-width="3"/>
     <path d="M64 70 L136 70 M64 88 L118 88" stroke="#B9AB88" stroke-width="6" stroke-linecap="round"/></svg>`,
  /* ---- 둘째 묶음: 우리 가족 ---- */
  p_mom:     m2Portrait('mom', '엄마'),
  p_dad:     m2Portrait('dad', '아빠'),
  p_uncle:   m2Portrait('uncle', '삼촌'),
  p_aunt:    m2Portrait('aunt', '이모'),
  p_baby:    m2Svg(m2Person('baby', 100, 'stand', 1), '동생', '56 44 88 84'),
  family:    `<svg viewBox="0 0 260 130" width="150" height="75" role="img" aria-label="가족">
     <path d="M6 122 L254 122" stroke="#221F1C" stroke-width="2.6" stroke-linecap="round"/>
     ${m2Person('grandpa', 32, 'stand', 1)}${m2Person('grandma', 74, 'stand', 1)}${m2Person('dad', 118, 'stand', 1)}
     ${m2Person('mom', 162, 'stand', -1)}${m2Person('kid', 202, 'stand', -1)}${m2Person('baby', 234, 'stand', -1)}</svg>`,
  /* 형제를 부르는 그림: 왼쪽이 나, 오른쪽이 부르는 사람 */
  call_hyung: m2Svg(m2Person('kid', 70, 'wave', 1) + m2Person('bigbro', 136, 'stand', -1) + m2Me(70, 29), '남자아이인 내가 형을 부르는 그림'),
  call_oppa:  m2Svg(m2Person('girl', 70, 'wave', 1) + m2Person('bigbro', 136, 'stand', -1) + m2Me(70, 29), '여자아이인 내가 오빠를 부르는 그림'),
  call_nuna:  m2Svg(m2Person('kid', 70, 'wave', 1) + m2Person('bigsis', 136, 'stand', -1) + m2Me(70, 29), '남자아이인 내가 누나를 부르는 그림'),
  call_unni:  m2Svg(m2Person('girl', 70, 'wave', 1) + m2Person('bigsis', 136, 'stand', -1) + m2Me(70, 29), '여자아이인 내가 언니를 부르는 그림'),
  call_dong:  m2Svg(m2Person('girl', 76, 'stand', 1) + m2Person('baby', 128, 'stand', -1) + m2Me(76, 29), '나와 내 동생'),
  me_boy:     m2Svg(m2Person('kid', 100, 'stand', 1) + m2Me(100, 29), '남자아이', '46 12 108 116'),
  me_girl:    m2Svg(m2Person('girl', 100, 'stand', 1) + m2Me(100, 29), '여자아이', '46 12 108 116'),
  have_sib:   m2Svg(m2Person('kid', 78, 'stand', 1) + m2Person('baby', 122, 'stand', -1)
                + '<path d="M92 84 Q104 92 112 88" stroke="#221F1C" stroke-width="3" fill="none" stroke-linecap="round"/>' + m2Me(78, 29), '나는 동생이 있어요'),
  no_sib:     m2Svg(m2Person('kid', 78, 'stand', 1)
                + '<path d="M122 122 L122 86 C122 70 146 70 146 86 L146 122" stroke="#8C7F63" stroke-width="3" stroke-dasharray="6 5" fill="none"/>'
                + '<path d="M160 50 L188 78 M188 50 L160 78" stroke="#C1403A" stroke-width="6" stroke-linecap="round"/>' + m2Me(78, 29), '나는 동생이 없어요'),
  photo:      `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="가족사진">
     <rect x="30" y="14" width="140" height="104" rx="6" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
     <rect x="40" y="24" width="120" height="84" fill="#9DB4C6" stroke="#221F1C" stroke-width="2"/>
     <g transform="translate(40 24) scale(.6)">${m2Person('grandma', 40, 'stand', 1)}${m2Person('mom', 84, 'stand', 1)}${m2Person('dad', 126, 'stand', -1)}${m2Person('kid', 166, 'stand', -1)}</g></svg>`,
  /* ---- 셋째 묶음: 하나, 둘, 셋 ---- */
  apples1: m2Apples(1), apples2: m2Apples(2), apples3: m2Apples(3), apples4: m2Apples(4), apples5: m2Apples(5),
  apples6: m2Apples(6), apples7: m2Apples(7), apples8: m2Apples(8), apples9: m2Apples(9), apples10: m2Apples(10), apples11: m2Apples(11), apples12: m2Apples(12),
  cake1: m2Cake(1), cake3: m2Cake(3), cake5: m2Cake(5), cake7: m2Cake(7), cake8: m2Cake(8), cake9: m2Cake(9),
  /* ---- 넷째 묶음: 내 몸 ---- */
  f_head: m2Face('head'), f_eye: m2Face('eye'), f_nose: m2Face('nose'), f_mouth: m2Face('mouth'), f_ear: m2Face('ear'),
  f_face: m2Face(null), ouch: m2Face(null, 'ouch'),
  b_hand: m2BodyPart('hand'), b_foot: m2BodyPart('foot'), b_belly: m2BodyPart('belly'), b_arm: m2BodyPart('arm'), b_leg: m2BodyPart('leg'),
  b_body: m2Svg(m2Person('kid', 100, 'stand', 1), '몸', '52 22 96 104'),
  /* ---- 다섯째 묶음: 우리 집 ---- */
  t_house: m2Thing('house'), t_room: m2Thing('room'), t_door: m2Thing('door'), t_window: m2Thing('window'),
  t_bed: m2Thing('bed', 'yellow'), t_desk: m2Thing('desk', '#B08452'), t_chair: m2Thing('chair', 'green'),
  t_book: m2Thing('book', 'blue'), t_cup: m2Thing('cup', 'white'), t_bag: m2Thing('bag', 'red'),
  c_red: m2Thing('blob', 'red'), c_blue: m2Thing('blob', 'blue'), c_yellow: m2Thing('blob', 'yellow'),
  c_green: m2Thing('blob', 'green'), c_black: m2Thing('blob', 'black'), c_white: m2Thing('blob', 'white'),
  palette: m2Thing('palette'),
  bag_blue: m2Thing('bag', 'blue'), bag_yellow: m2Thing('bag', 'yellow'), cup_red: m2Thing('cup', 'red'), cup_green: m2Thing('cup', 'green'),
  book_black: m2Thing('book', 'black'), book_red: m2Thing('book', 'red'), chair_white: m2Thing('chair', 'white'), chair_blue: m2Thing('chair', 'blue'),
  chairs2: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="의자 두 개"><g transform="translate(-44 0)">${m2Thing('chair', 'green').replace(/<\/?svg[^>]*>/g, '')}</g><g transform="translate(44 0)">${m2Thing('chair', 'green').replace(/<\/?svg[^>]*>/g, '')}</g></svg>`,
  what:      `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="물음표">
     <circle cx="100" cy="64" r="44" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
     <text x="100" y="88" text-anchor="middle" font-size="68" font-family="Jua, sans-serif" fill="#C1403A">?</text></svg>`
};

/* ---- 다섯 묶음 ---- */
const M2_BUNDLES = [
  {k:1, title:'안녕하세요', topic:'인사하고 이름 말하기', nights:[1, 2, 3], after:'그동안 할머니 할아버지께 인사해 봐.'},
  {k:2, title:'우리 가족', topic:'가족을 부르는 말, 있어요와 없어요', nights:[4, 5, 6], after:'그동안 가족사진을 보면서 가족을 한 사람씩 불러 봐.'},
  {k:3, title:'하나, 둘, 셋', topic:'숫자 세기와 나이', nights:[7, 8, 9], after:'그동안 집에 있는 물건을 하나, 둘, 셋 하고 세어 봐.'},
  {k:4, title:'내 몸', topic:'몸의 이름, 어디가 아파요', nights:[10, 11, 12], after:'그동안 가족과 담이가 말했어요 놀이를 해 봐.'},
  {k:5, title:'우리 집', topic:'집 안 물건과 색', nights:[13, 14, 15], after:'이제 집 안 물건을 가리키며 이게 뭐예요, 하고 가족과 묻고 답해 봐.'}
];
const M2_TOTAL = 15;

/* 받아쓰기 자판: 첫째 달에서 배운 자모. 겹받침은 둘째 달 낱말에 나오는 ㅄ(없어요)과 ㄼ(여덟)만 넣습니다. */
const M2_POOL = {
  cho:  ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'],
  jung: ['ㅏ','ㅓ','ㅗ','ㅜ','ㅡ','ㅣ','ㅑ','ㅕ','ㅛ','ㅠ','ㅐ','ㅔ','ㅒ','ㅖ','ㅘ','ㅝ','ㅚ','ㅟ','ㅢ'],
  jong: ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅇ','ㅅ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㄲ','ㅆ','ㅄ','ㄼ']
};

/* ---- 첫 묶음: 안녕하세요 ------------------------------------
   인사말은 친구에게 하는 말과 어른에게 하는 말을 짝으로 가르칩니다.
   고마워요, 미안해요처럼 가운데에 있는 말은 이 짝을 흐리게 해서 이 묶음에서는 쓰지 않습니다. */
const M2_NIGHTS = [
{ n:1, bundle:1, title:'인사말',
  steps:[
    {type:'intro', who:'tori',
     t:'첫째 달에서 한글을 배웠지? 이제 그 글자로 진짜 말을 해 볼 거야. 오늘은 인사말이야. 한국어는 누구에게 말하느냐에 따라 인사가 달라져.',
     big:'안녕하세요'},
    {type:'pairs', title:'인사말을 모았어요', who:'moi',
     t:'내가 모아 온 인사말이야. 같은 인사라도 친구에게 하는 말과 어른에게 하는 말이 달라. 말을 누르면 소리가 나.',
     pairs:[
       {when:'만날 때', pic:'hi_elder', friend:'안녕', elder:'안녕하세요', en:'hi / hello'},
       {when:'고마울 때', pic:'thanks', friend:'고마워', elder:'감사합니다', en:'thanks / thank you'},
       {when:'미안할 때', pic:'sorry', friend:'미안해', elder:'죄송합니다', en:"sorry / I'm sorry"}],
     singles:[
       {w:'안녕히 가세요', pic:'bye_go', en:'goodbye (to someone who is leaving)'},
       {w:'안녕히 계세요', pic:'bye_stay', en:'goodbye (when you are the one leaving)'},
       {w:'네', pic:'yes', en:'yes'},
       {w:'아니요', pic:'no', en:'no'}],
     tip:{who:'tori', t:'참, 친구랑 헤어질 때도 ‘안녕’이라고 해. 만날 때도 안녕, 헤어질 때도 안녕이야.'}},
    {type:'choose', title:'누구에게 말해요?', who:'tori',
     t:'누구에게 하는 말인지 잘 보고 골라 봐. 친구에게는 편한 말, 어른에게는 높이는 말이야.',
     qs:[
       {pic:'p_friend', t:'친구를 만났어요.', en:'You meet a friend.', o:['안녕','안녕하세요'], a:'안녕', why:'친구에게는 ‘안녕’이라고 해요.'},
       {pic:'p_grandma', t:'할머니를 만났어요.', en:'You meet your grandma.', o:['안녕','안녕하세요'], a:'안녕하세요', why:'할머니는 어른이라서 ‘안녕하세요’라고 해요.'},
       {pic:'p_teacher', t:'선생님이 연필을 주셨어요.', en:'Your teacher gives you a pencil.', o:['고마워','감사합니다'], a:'감사합니다', why:'선생님은 어른이라서 ‘감사합니다’라고 해요.'},
       {pic:'p_friend', t:'친구가 지우개를 빌려줬어요.', en:'A friend lends you an eraser.', o:['고마워','감사합니다'], a:'고마워', why:'친구에게는 ‘고마워’라고 해요.'},
       {pic:'p_friend', t:'친구 발을 밟았어요.', en:"You step on a friend's foot.", o:['미안해','죄송합니다'], a:'미안해', why:'친구에게는 ‘미안해’라고 해요.'},
       {pic:'p_grandpa', t:'할아버지 물을 쏟았어요.', en:"You spill Grandpa's water.", o:['미안해','죄송합니다'], a:'죄송합니다', why:'할아버지는 어른이라서 ‘죄송합니다’라고 해요.'}]},
    {type:'choose', title:'누가 떠나요?', who:'tori',
     t:'헤어질 때는 누가 떠나는지 봐야 해. 떠나는 사람에게는 ‘안녕히 가세요’, 남아 있는 사람에게는 ‘안녕히 계세요’라고 해. 빨간 화살표가 떠나는 사람이야.',
     qs:[
       {pic:'bye_go', t:'할머니가 놀러 오셨다가 가세요. 나는 집에 있어요.', en:'Grandma visited and is leaving. You stay home.', o:['안녕히 가세요','안녕히 계세요'], a:'안녕히 가세요', why:'할머니가 떠나시니까 ‘안녕히 가세요’예요.'},
       {pic:'bye_stay', t:'나는 할머니 댁에서 우리 집으로 가요. 할머니는 댁에 계세요.', en:"You leave Grandma's house. Grandma stays.", o:['안녕히 가세요','안녕히 계세요'], a:'안녕히 계세요', why:'내가 떠나고 할머니는 남으시니까 ‘안녕히 계세요’예요.'},
       {pic:'bye_stay_t', t:'학교가 끝났어요. 나는 집에 가고, 선생님은 교실에 계세요.', en:'School is over. You go home and your teacher stays.', o:['안녕히 가세요','안녕히 계세요'], a:'안녕히 계세요', why:'내가 떠나고 선생님은 남으시니까 ‘안녕히 계세요’예요.'},
       {pic:'bye_go_a', t:'이모가 놀러 왔다가 집에 가요.', en:'Your aunt visited and is going home.', o:['안녕히 가세요','안녕히 계세요'], a:'안녕히 가세요', why:'이모가 떠나니까 ‘안녕히 가세요’예요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'tori',
     t:'내가 인사말을 말할 테니까, 그 말에 맞는 그림을 골라 봐.',
     qs:[
       {say:'안녕하세요', o:['hi_elder','hi_friend','sorry'], a:'hi_elder'},
       {say:'아니요', o:['yes','no','thanks'], a:'no'},
       {say:'감사합니다', o:['sorry','thanks','bye_go'], a:'thanks'},
       {say:'안녕', o:['hi_elder','no','hi_friend'], a:'hi_friend'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'이번엔 들리는 말을 써 봐. 뜻을 같이 보면 도움이 돼. 틀리면 한 번 더 쓸 수 있어.',
     items:[{w:'네', en:'yes'}, {w:'안녕', en:'hi, bye (to a friend)'}, {w:'고마워', en:'thanks (to a friend)'}]}
  ],
  dictWords:[{w:'네', en:'yes'}, {w:'안녕', en:'hi, bye (to a friend)'}, {w:'고마워', en:'thanks (to a friend)'},
             {w:'미안해', en:'sorry (to a friend)'}, {w:'아니요', en:'no'}] },

{ n:2, bundle:1, title:'저는 ○○이에요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 내 이름을 말해 볼 거야. ‘저는 토리예요’라고 하면 돼. 그런데 이름 끝에 받침이 있으면 말이 조금 달라져. 첫째 달에 배운 받침이 여기서 쓰여.',
     big:'저는 토리예요'},
    {type:'pairs', title:'이름을 말할 때 쓰는 말', who:'moi',
     t:'이름을 말할 때 쓰는 말을 모았어. 어른에게는 ‘나’ 대신 ‘저’라고 해.',
     singles:[
       {w:'이름', pic:'nametag', en:'name'},
       {w:'저', en:'I, me (polite)'},
       {w:'제', en:'my (polite)'},
       {w:'뭐', pic:'what', en:'what'}]},
    {type:'rule', title:'이에요와 예요', who:'tori',
     t:'이름 끝 글자를 봐. 받침이 있으면 ‘이에요’, 받침이 없으면 ‘예요’를 붙여. 눌러서 들어 봐.',
     yes:['민준','하은'], no:['지호','토리']},
    {type:'josa', title:'어느 쪽일까요?', who:'tori',
     t:'이름 끝에 받침이 있는지 보고 알맞은 말을 골라 봐.',
     names:['서연','소라','준','모이','태민','유나','하준','담이']},
    {type:'myname', title:'내 이름으로 말해요', who:'tori',
     t:'이제 네 이름으로 해 보자. 이름을 한글로 써 봐. 여기에 쓴 이름은 어디에도 저장하지 않아.'},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐. 잘못 눌렀으면 위에서 다시 누르면 돌아와.',
     qs:[
       {s:'저는 토리예요.', tiles:['저는','토리예요.'], en:"I'm Tori."},
       {s:'이름이 뭐예요?', tiles:['이름이','뭐예요?'], en:'What is your name?'},
       {s:'저는 민준이에요.', tiles:['저는','민준이에요.'], extra:['민준예요.'], en:"I'm Minjun.", hint:'‘준’에 받침이 있어요. 이에요와 예요 가운데 무엇을 붙일까요?'},
       {s:'제 이름은 하은이에요.', tiles:['제','이름은','하은이에요.'], extra:['하은예요.'], en:'My name is Haeun.', hint:'‘은’에 받침이 있어요. 그리고 ‘제’가 맨 앞에 와요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'이름을 말하다 보면 신기한 일이 생긴단다. 받침 뒤에 ㅇ으로 시작하는 글자가 오면, 받침이 뒷글자로 건너가서 소리 나지. 그래도 글자는 원래대로 쓴단다.',
     cmp:[
       {s:'이름이', d:'이르미', n:'ㅁ 받침이 뒤로 건너가요'},
       {s:'이름은', d:'이르믄', n:'ㅁ 받침이 뒤로 건너가요'},
       {s:'민준이에요', d:'민주니에요', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'하은이에요', d:'하으니에요', n:'ㄴ 받침이 뒤로 건너가요'}],
     note:'셋째 달에 가면 이런 말을 더 많이 만날 게야. 오늘은 소리는 건너가도 글자는 제자리에 있다는 것만 기억하거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 마지막 말은 소리와 글자가 조금 달라. 담이 할아버지 말을 떠올려 봐.',
     items:[{w:'이름', en:'name'}, {w:'저는', en:'I am (polite)'},
            {w:'이름이', en:'name (with 이)', hint:{who:'dami', t:'소리는 [이르미]지만 ‘이름’ 뒤에 ‘이’가 붙은 말이란다. 이름을 먼저 쓰고 이를 붙여 보거라.'}}]}
  ],
  dictWords:[{w:'이름', en:'name'}, {w:'저는', en:'I am (polite)'}, {w:'이름이', en:'name (with 이)'}] },

{ n:3, bundle:1, title:'처음 만났어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 내가 담이 할아버지를 처음 만난 날 이야기야. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'안녕하세요?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 보는 거야. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'안녕하세요?', en:'Hello.'},
       {who:'dami', t:'오냐, 반갑구나. 이름이 무엇이냐?', en:'Well, nice to meet you. What is your name?'},
       {who:'tori', t:'저는 토리예요.', en:"I'm Tori."},
       {who:'dami', t:'토리로구나. 나는 담이란다.', en:"So you're Tori. I'm Dami."},
       {who:'moi', t:'토리야, 안녕!', en:'Hi, Tori!'},
       {who:'tori', t:'안녕, 모이야!', en:'Hi, Moi!'},
       {who:'tori', t:'할아버지, 안녕히 계세요.', en:'Goodbye, Grandpa. (Tori is leaving.)'},
       {who:'dami', t:'오냐, 잘 가거라.', en:'Alright, off you go.'}],
     note:{who:'dami', t:'나는 할아버지라서 토리에게 ‘안녕하세요’라고 하지 않고 ‘오냐’라고 했단다. 어른은 아이에게 높이는 말을 쓰지 않아도 되지. 모이는 토리 친구라서 ‘안녕’이라고 했고 말이다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 담이 할아버지에게 뭐라고 인사했어요?', o:['안녕','안녕하세요'], a:'안녕하세요', why:'담이는 어른이라서 ‘안녕하세요’라고 했어요.'},
       {t:'토리는 모이에게 뭐라고 인사했어요?', o:['안녕','안녕하세요'], a:'안녕', why:'모이는 친구라서 ‘안녕’이라고 했어요.'},
       {t:'토리가 떠날 때 뭐라고 했어요?', o:['안녕히 가세요','안녕히 계세요'], a:'안녕히 계세요', why:'토리가 떠나고 할아버지는 남으시니까 ‘안녕히 계세요’예요.'},
       {t:'담이 할아버지의 이름은 뭐예요?', o:['담이','토리','모이'], a:'담이', why:'할아버지는 ‘나는 담이란다’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 담이 할아버지 말에 알맞게 대답해 봐.',
     qs:[
       {line:{who:'dami', t:'오냐, 반갑구나. 이름이 무엇이냐?'}, o:['저는 토리예요.','안녕히 가세요.','미안해.'], a:'저는 토리예요.', why:'이름을 물었으니까 이름을 말해요.'},
       {line:{who:'dami', t:'이 떡 좀 먹어 보거라.'}, en:'Here, try some rice cake.', o:['감사합니다.','고마워.','아니요.'], a:'감사합니다.', why:'할아버지께 받았으니까 ‘감사합니다’예요.'},
       {line:{who:'dami', t:'이제 집에 가 보거라.'}, en:'Now, off you go home.', o:['안녕히 계세요.','안녕히 가세요.','안녕하세요?'], a:'안녕히 계세요.', why:'토리가 떠나니까 ‘안녕히 계세요’예요.'}]},
    {type:'task', title:'할머니 할아버지께 전화하기', who:'moi',
     t:'오늘 배운 말을 진짜로 써 볼 차례야. 할머니나 할아버지께 전화해서 인사해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'전화를 받으시면', say:'안녕하세요, 할머니!', sub:'할아버지께는 ‘안녕하세요, 할아버지!’'},
       {when:'내 이름을 말해요', say:'저는 ______이에요.', sub:'받침이 없는 이름이면 ‘예요’를 붙여요.'},
       {when:'끊기 전에', say:'안녕히 계세요.', sub:'전화를 끊을 때는 내가 떠나는 쪽이에요.'}],
     parent:'처음에는 부모님이 옆에서 한 줄씩 먼저 말해 주셔도 됩니다. 할머니 할아버지께 아이가 오늘 배운 인사를 할 거라고 미리 알려 드리면 더 반갑게 받아 주십니다. 전화 대신 영상 통화나 직접 만나서 해도 좋습니다.'}
  ],
  dictWords:[] },
/* ---- 둘째 묶음: 우리 가족 ------------------------------------
   형, 오빠, 누나, 언니는 부르는 사람이 남자아이인지 여자아이인지에 따라 달라집니다.
   영어에는 없는 구별이라, 먼저 "나는 누구예요"를 고르고 그 자리에서 부르는 말을 보여 줍니다.
   고른 것은 저장하지 않습니다. 이와 가는 이에요와 예요처럼 받침으로 고릅니다. */
{ n:4, bundle:2, title:'가족을 불러요',
  steps:[
    {type:'intro', who:'moi',
     t:'나는 까치 모이야. 반짝이는 말을 모으는 게 취미야. 오늘은 가족을 부르는 말을 모아 왔어. 먼저 들어 봐.',
     big:'우리 가족'},
    {type:'pairs', title:'가족을 부르는 말', who:'moi',
     t:'내가 모아 온 말이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'가족', pic:'family', en:'family'},
       {w:'엄마', pic:'p_mom', en:'mom'},
       {w:'아빠', pic:'p_dad', en:'dad'},
       {w:'할머니', pic:'p_grandma', en:'grandma'},
       {w:'할아버지', pic:'p_grandpa', en:'grandpa'},
       {w:'이모', pic:'p_aunt', en:"aunt (mom's sister)"},
       {w:'삼촌', pic:'p_uncle', en:"uncle (mom's or dad's brother)"}],
     tip:{who:'dami', t:'이모는 엄마의 언니나 여동생이란다. 아빠 쪽 누이는 고모라고 부르는데, 그건 나중에 또 만나자꾸나.'}},
    {type:'sibling', title:'형, 오빠, 누나, 언니', who:'tori',
     t:'한국어에서는 형제를 부를 때 내가 남자아이인지 여자아이인지에 따라 말이 달라. 먼저 너는 누구인지 골라 봐.'},
    {type:'choose', title:'누구라고 불러요?', who:'tori',
     t:'파란 옷에 ‘나’가 붙은 아이가 부르는 거야. 부르는 아이가 남자아이인지 여자아이인지 잘 봐.',
     qs:[
       {pic:'call_hyung', t:'나는 남자아이예요. 나보다 나이 많은 남자예요.', en:'You are a boy. He is older than you.', o:['형','오빠'], a:'형', why:'남자아이는 나이 많은 남자를 ‘형’이라고 불러요.'},
       {pic:'call_unni', t:'나는 여자아이예요. 나보다 나이 많은 여자예요.', en:'You are a girl. She is older than you.', o:['누나','언니'], a:'언니', why:'여자아이는 나이 많은 여자를 ‘언니’라고 불러요.'},
       {pic:'call_oppa', t:'나는 여자아이예요. 나보다 나이 많은 남자예요.', en:'You are a girl. He is older than you.', o:['형','오빠'], a:'오빠', why:'여자아이는 나이 많은 남자를 ‘오빠’라고 불러요.'},
       {pic:'call_nuna', t:'나는 남자아이예요. 나보다 나이 많은 여자예요.', en:'You are a boy. She is older than you.', o:['누나','언니'], a:'누나', why:'남자아이는 나이 많은 여자를 ‘누나’라고 불러요.'},
       {pic:'call_dong', t:'나보다 어린 아이예요.', en:'This child is younger than you.', o:['동생','언니','형'], a:'동생', why:'나보다 어리면 남자아이든 여자아이든 ‘동생’이에요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 부르는 사람을 찾아 봐.',
     qs:[
       {say:'할아버지', o:['p_grandpa','p_dad','p_uncle'], a:'p_grandpa'},
       {say:'엄마', o:['p_grandma','p_mom','p_aunt'], a:'p_mom'},
       {say:'동생', o:['p_baby','call_hyung','p_uncle'], a:'p_baby'},
       {say:'가족', o:['p_dad','family','p_grandma'], a:'family'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'가족을 부르는 말을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'엄마', en:'mom'}, {w:'아빠', en:'dad'}, {w:'동생', en:'younger sibling'}]}
  ],
  dictWords:[{w:'엄마', en:'mom'}, {w:'아빠', en:'dad'}, {w:'동생', en:'younger sibling'}, {w:'가족', en:'family'},
             {w:'할머니', en:'grandma'}, {w:'삼촌', en:'uncle'}, {w:'누나', en:"older sister (a boy's)"}, {w:'언니', en:"older sister (a girl's)"},
             {w:'형', en:"older brother (a boy's)"}, {w:'오빠', en:"older brother (a girl's)"}] },

{ n:5, bundle:2, title:'동생이 있어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 가족이 있는지 없는지 말해 볼 거야. ‘동생이 있어요’, ‘동생이 없어요’. 그리고 가족 말 뒤에 붙는 ‘이’와 ‘가’도 배워.',
     big:'동생이 있어요'},
    {type:'pairs', title:'있어요와 없어요', who:'moi',
     t:'오늘 모아 온 말은 세 개야. 눌러서 들어 봐.',
     singles:[
       {w:'있어요', pic:'have_sib', en:'there is, (I) have'},
       {w:'없어요', pic:'no_sib', en:"there isn't, (I) don't have"},
       {w:'우리', pic:'family', en:'we, our'}],
     tip:{who:'tori', t:'한국어는 내 엄마를 ‘우리 엄마’라고 해. 나 혼자의 엄마가 아니라 우리 가족의 엄마라서 그래. 우리 아빠, 우리 할머니, 우리 집도 마찬가지야.'}},
    {type:'rule', j:'이', title:'이와 가', who:'tori',
     t:'가족 말 끝 글자를 봐. 받침이 있으면 ‘이’, 받침이 없으면 ‘가’를 붙여. 이에요와 예요랑 똑같은 방법이야.',
     yes:['동생','삼촌','형'], no:['누나','아빠','할머니'],
     note:'이에요와 예요를 고를 때처럼, 받침만 보면 된단다. 받침이 있는 말에는 ‘이’, 없는 말에는 ‘가’. 아주 쉽지?'},
    {type:'josa', j:'이', q:'뒤에 무엇을 붙일까요?', title:'이일까요, 가일까요?', who:'tori',
     t:'끝 글자에 받침이 있는지 보고 골라 봐.',
     names:['언니','형','엄마','동생','오빠','삼촌','이모','할아버지']},
    {type:'choose', title:'그림을 보고 말해요', who:'tori',
     t:'그림 속 파란 옷 아이가 ‘나’야. 그림에 맞는 말을 골라 봐.',
     qs:[
       {pic:'have_sib', o:['동생이 있어요.','동생이 없어요.'], a:'동생이 있어요.', en:'I have a younger sibling.', why:'손을 잡은 동생이 있어요.'},
       {pic:'no_sib', o:['동생이 있어요.','동생이 없어요.'], a:'동생이 없어요.', en:"I don't have a younger sibling.", why:'옆에 아무도 없어요.'},
       {pic:'call_nuna', o:['누나가 있어요.','누나이 있어요.'], a:'누나가 있어요.', en:'I have an older sister.', why:'‘나’에 받침이 없어서 ‘누나가’예요.'},
       {pic:'call_hyung', o:['형이 있어요.','형가 있어요.'], a:'형이 있어요.', en:'I have an older brother.', why:'‘형’에 받침 ㅇ이 있어서 ‘형이’예요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'동생이 있어요.', tiles:['동생이','있어요.'], extra:['동생가'], en:'I have a younger sibling.', hint:'‘생’에 받침이 있어요. 이와 가 가운데 무엇이 붙을까요?'},
       {s:'우리 엄마예요.', tiles:['우리','엄마예요.'], extra:['엄마이에요.'], en:'This is my mom.', hint:'‘마’에 받침이 없어요. 그리고 ‘우리’가 앞에 와요.'},
       {s:'저는 언니가 없어요.', tiles:['저는','언니가','없어요.'], extra:['언니이'], en:"I don't have an older sister.", hint:'누가 하는 말인지(저는)부터 와요. ‘니’에는 받침이 없어요.'},
       {s:'저는 삼촌이 있어요.', tiles:['저는','삼촌이','있어요.'], extra:['삼촌가'], en:'I have an uncle.', hint:'‘촌’에 받침 ㄴ이 있어요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'첫 묶음에서 받침이 뒷글자로 건너간다고 했지? 있어요와 없어요에서도 그런 일이 생긴단다. 그런데 건너가지 않는 받침도 하나 있지.',
     cmp:[
       {s:'있어요', d:'이써요', n:'ㅆ 받침이 뒤로 건너가요'},
       {s:'없어요', d:'업써요', n:'ㅄ 가운데 ㅅ만 건너가서 ㅆ 소리가 나요'},
       {s:'삼촌이', d:'삼초니', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'동생이', d:'동생이', n:'ㅇ 받침은 건너가지 않아요'}],
     note:'ㅇ 받침은 제자리를 지키는 고집쟁이란다. 동생이, 형이처럼 ㅇ 받침 뒤에서는 쓴 그대로 소리 나지. 들을 때는 [이써요]여도 쓸 때는 ‘있어요’로 쓴다는 것, 이번에도 잊지 말거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 들리는 소리와 쓰는 글자가 다른 말이 있어. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'있어요', en:'there is, (I) have', hint:{who:'dami', t:'소리는 [이써요]지만, 받침 ㅆ이 앞 글자에 남아 있단다. ‘있’을 먼저 쓰고 ‘어요’를 붙여 보거라.'}},
       {w:'없어요', en:"there isn't", hint:{who:'dami', t:'소리는 [업써요]지만, ‘없’에는 ㅂ과 ㅅ 두 받침이 함께 있단다. 받침 줄에서 ㅄ을 찾아보거라.'}},
       {w:'동생이', en:'younger sibling (with 이)'}]}
  ],
  dictWords:[{w:'있어요', en:'there is, (I) have'}, {w:'없어요', en:"there isn't"}, {w:'우리', en:'we, our'}, {w:'동생이', en:'younger sibling (with 이)'}] },

{ n:6, bundle:2, title:'모이의 가족사진',
  steps:[
    {type:'intro', who:'tori',
     t:'모이가 가족사진을 가져왔대. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'우리 가족 사진이야'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 이거 우리 가족 사진이야.', en:'Tori, this is my family photo.'},
       {who:'tori', t:'와! 이분은 누구야?', en:'Wow! Who is this?'},
       {who:'moi', t:'우리 할머니야. 옆에는 우리 엄마랑 아빠야.', en:'That is my grandma. Next to her are my mom and dad.'},
       {who:'tori', t:'이 작은 까치는?', en:'And this little magpie?'},
       {who:'moi', t:'내 동생이야. 나는 형이 없어. 동생만 있어.', en:"That is my little sibling. I don't have an older brother. I only have a little sibling."},
       {who:'dami', t:'허허, 모이는 가족이 많구나.', en:'Ho ho, Moi has a big family.'},
       {who:'tori', t:'할아버지는 가족이 있어요?', en:'Grandpa, do you have family?'},
       {who:'dami', t:'있지. 산 너머에 우리 누나가 산단다.', en:'I do. My older sister lives over the mountain.'}],
     note:{who:'dami', t:'모이는 ‘우리 엄마’, ‘우리 할머니’라고 했지? 그런데 동생은 ‘내 동생’이라고 했단다. 동생은 ‘내 동생’이라고 많이 하지. 그리고 이 호랑이는 남자라서 나이 많은 누이를 ‘누나’라고 부른단다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'모이 가족사진에 누가 있어요?', o:['할머니','할아버지','삼촌'], a:'할머니', why:'모이는 ‘우리 할머니야’라고 했어요.'},
       {t:'모이는 형이 있어요?', o:['네, 있어요.','아니요, 없어요.'], a:'아니요, 없어요.', why:'모이는 ‘나는 형이 없어’라고 했어요.'},
       {t:'사진 속 작은 까치는 누구예요?', o:['모이 동생','모이 엄마','모이 누나'], a:'모이 동생', why:'모이는 ‘내 동생이야’라고 했어요.'},
       {t:'담이 할아버지는 누가 있어요?', o:['누나','동생','형'], a:'누나', why:'할아버지는 ‘우리 누나가 산단다’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐. 친구에게는 편한 말, 어른에게는 높이는 말이야.',
     qs:[
       {line:{who:'moi', t:'토리야, 너는 동생이 있어?'}, en:'Tori, do you have a little sibling?', o:['아니, 없어.','아니요, 없어요.'], a:'아니, 없어.', why:'모이는 친구라서 편한 말로 ‘아니, 없어’라고 해요.'},
       {line:{who:'dami', t:'토리야, 너는 동생이 있느냐?'}, en:'Tori, do you have a little sibling?', o:['아니, 없어.','아니요, 없어요.'], a:'아니요, 없어요.', why:'할아버지는 어른이라서 ‘아니요, 없어요’라고 해요.'},
       {line:{who:'dami', t:'이 사진 속 사람은 누구냐?'}, en:'Who is the person in this photo?', o:['우리 엄마예요.','우리 엄마이에요.','우리 엄마야.'], a:'우리 엄마예요.', why:'‘마’에 받침이 없어서 ‘예요’예요. 할아버지께 말하니까 ‘엄마야’가 아니라 ‘엄마예요’라고 해요.'}]},
    {type:'task', title:'가족사진 보며 세 문장 말하기', who:'moi',
     t:'이제 네 가족 차례야. 가족사진을 보면서 가족에게 세 문장을 말해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'사진 속 사람을 가리키며', say:'우리 ______예요.', sub:'받침이 있는 말이면 이에요: 우리 삼촌이에요.'},
       {when:'있는 가족을 말해요', say:'저는 ______가 있어요.', sub:'받침이 있는 말이면 이: 저는 동생이 있어요.'},
       {when:'없는 가족도 말해요', say:'저는 ______가 없어요.', sub:'받침이 있는 말이면 이: 저는 형이 없어요.'}],
     parent:'가족사진이나 휴대폰 사진을 함께 보면서 해 주세요. 형, 오빠, 누나, 언니는 아이 쪽에서 부르는 말로 알려 주시면 됩니다. 아이가 남자아이면 형과 누나, 여자아이면 오빠와 언니입니다. 고모, 외삼촌, 사촌처럼 이 묶음에 없는 말이 나오면 그대로 알려 주셔도 좋습니다. 사진 속 가족이 멀리 계시면 영상 통화로 직접 말해 보게 해도 좋습니다.'}
  ],
  dictWords:[] },
/* ---- 셋째 묶음: 하나, 둘, 셋 --------------------------------
   고유어 수(하나부터 열둘)를 세고, 살과 개 앞에서 하나, 둘, 셋, 넷이 한, 두, 세, 네로 줄어드는 것을 배웁니다.
   어른에게는 몇 살이냐고 묻지 않는다는 것도 담이의 이야기로 다룹니다. */
{ n:7, bundle:3, title:'하나부터 열까지',
  steps:[
    {type:'intro', who:'moi',
     t:'오늘은 세는 말을 모아 왔어. 하나, 둘, 셋. 달토끼에서 한 밤, 두 밤 하고 셀 때 벌써 들어 본 말들이야.',
     big:'하나, 둘, 셋'},
    {type:'pairs', title:'하나부터 열까지', who:'moi',
     t:'사과를 세면서 들어 봐. 그림을 누르면 소리가 나.',
     singles:[
       {w:'하나', pic:'apples1', en:'one'}, {w:'둘', pic:'apples2', en:'two'}, {w:'셋', pic:'apples3', en:'three'},
       {w:'넷', pic:'apples4', en:'four'}, {w:'다섯', pic:'apples5', en:'five'}, {w:'여섯', pic:'apples6', en:'six'},
       {w:'일곱', pic:'apples7', en:'seven'}, {w:'여덟', pic:'apples8', en:'eight'}, {w:'아홉', pic:'apples9', en:'nine'},
       {w:'열', pic:'apples10', en:'ten'}],
     tip:{who:'dami', t:'한국어에는 세는 말이 두 가지 있단다. 오늘 배우는 하나, 둘, 셋은 옛날부터 우리말로 세던 말이지. 일, 이, 삼으로 세는 말은 나중에 따로 만나자꾸나.'}},
    {type:'build', title:'차례대로 세어요', who:'tori',
     t:'숫자 카드를 차례대로 눌러 봐. 하나부터 시작해.',
     qs:[
       {s:'하나 둘 셋 넷 다섯', tiles:['하나','둘','셋','넷','다섯'], en:'Count from one to five.', hint:'하나 다음은 둘, 둘 다음은 셋이에요.'},
       {s:'여섯 일곱 여덟 아홉 열', tiles:['여섯','일곱','여덟','아홉','열'], en:'Count from six to ten.', hint:'여섯 다음은 일곱이에요.'}]},
    {type:'choose', title:'몇 개일까요?', who:'tori',
     t:'사과를 세어 보고 알맞은 말을 골라 봐. 다섯 개씩 한 줄이야.',
     qs:[
       {pic:'apples3', t:'사과를 세어 봐요.', o:['둘','셋','넷'], a:'셋'},
       {pic:'apples7', t:'사과를 세어 봐요.', o:['여섯','일곱','여덟'], a:'일곱'},
       {pic:'apples4', t:'사과를 세어 봐요.', o:['넷','다섯','셋'], a:'넷'},
       {pic:'apples9', t:'사과를 세어 봐요.', o:['여덟','열','아홉'], a:'아홉'},
       {pic:'apples6', t:'사과를 세어 봐요.', o:['여섯','다섯','일곱'], a:'여섯'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 만큼 사과가 있는 그림을 찾아 봐.',
     qs:[
       {say:'다섯', o:['apples4','apples5','apples6'], a:'apples5'},
       {say:'둘', o:['apples2','apples3','apples1'], a:'apples2'},
       {say:'여덟', o:['apples10','apples7','apples8'], a:'apples8'},
       {say:'열', o:['apples9','apples10','apples5'], a:'apples10'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'세는 말을 써 봐. 받침을 잘 들어 봐.',
     items:[{w:'하나', en:'one'}, {w:'셋', en:'three'},
            {w:'여덟', en:'eight', hint:{who:'dami', t:'소리는 [여덜]이지만 받침에 ㄹ과 ㅂ이 함께 있단다. 받침 줄에서 ㄼ을 찾아보거라.'}}]}
  ],
  dictWords:[{w:'하나', en:'one'}, {w:'둘', en:'two'}, {w:'셋', en:'three'}, {w:'넷', en:'four'}, {w:'다섯', en:'five'},
             {w:'여섯', en:'six'}, {w:'일곱', en:'seven'}, {w:'여덟', en:'eight'}, {w:'아홉', en:'nine'}, {w:'열', en:'ten'}] },

{ n:8, bundle:3, title:'몇 살이에요?',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 나이를 말해 볼 거야. ‘몇 살이에요?’ 하고 물으면 ‘여덟 살이에요’처럼 대답해. 그런데 살 앞에서 숫자 몇 개가 모양을 바꿔. 그게 오늘의 비밀이야.',
     big:'여덟 살이에요'},
    {type:'pairs', title:'나이와 개수를 말하는 말', who:'moi',
     t:'오늘 모아 온 말이야. 열 다음 숫자도 두 개 가져왔어.',
     singles:[
       {w:'살', pic:'cake8', en:'years old'},
       {w:'개', pic:'apples3', en:'(counter for things)'},
       {w:'몇', pic:'what', en:'how many'},
       {w:'열하나', pic:'apples11', en:'eleven'},
       {w:'열둘', pic:'apples12', en:'twelve'}],
     tip:{who:'tori', t:'열하나는 열에 하나, 열둘은 열에 둘을 붙인 말이야. 쉽지?'}},
    {type:'shrink', title:'살과 개 앞에서 줄어들어요', who:'tori',
     t:'하나, 둘, 셋, 넷은 살이나 개 앞에서 끝이 줄어들어. 하나는 한, 둘은 두, 셋은 세, 넷은 네. 다섯부터는 그대로야. 눌러서 들어 봐.',
     rows:[['하나','한'], ['둘','두'], ['셋','세'], ['넷','네'], ['다섯','다섯'], ['열하나','열한'], ['열둘','열두']],
     units:['살','개'],
     note:'그래서 달토끼에서도 밤을 셀 때 ‘하나 밤’이 아니라 ‘한 밤’, ‘둘 밤’이 아니라 ‘두 밤’이라고 했단다.'},
    {type:'choose', title:'어느 쪽이 맞을까요?', who:'tori',
     t:'그림을 보고 바르게 말한 쪽을 골라 봐.',
     qs:[
       {pic:'cake3', t:'몇 살이에요?', o:['셋 살이에요.','세 살이에요.'], a:'세 살이에요.', why:'셋은 살 앞에서 세가 돼요.'},
       {pic:'apples2', t:'사과가 몇 개예요?', o:['두 개예요.','둘 개예요.'], a:'두 개예요.', why:'둘은 개 앞에서 두가 돼요.'},
       {pic:'cake1', t:'몇 살이에요?', o:['하나 살이에요.','한 살이에요.'], a:'한 살이에요.', why:'하나는 살 앞에서 한이 돼요.'},
       {pic:'apples4', t:'사과가 몇 개예요?', o:['넷 개예요.','네 개예요.'], a:'네 개예요.', why:'넷은 개 앞에서 네가 돼요.'},
       {pic:'cake5', t:'몇 살이에요?', o:['다섯 살이에요.','다섯 개예요.'], a:'다섯 살이에요.', why:'나이는 살로 세요. 다섯은 그대로예요.'},
       {pic:'apples8', t:'사과가 몇 개예요?', o:['여덟 살이에요.','여덟 개예요.'], a:'여덟 개예요.', why:'물건은 개로 세요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'몇 살이에요?', tiles:['몇','살이에요?'], en:'How old are you?'},
       {s:'저는 일곱 살이에요.', tiles:['저는','일곱','살이에요.'], extra:['개예요.'], en:"I'm seven years old.", hint:'나이는 살로 세요. 누가 하는 말인지(저는)부터 와요.'},
       {s:'사과가 세 개예요.', tiles:['사과가','세','개예요.'], extra:['셋'], en:'There are three apples.', hint:'셋은 개 앞에서 줄어들어요.'},
       {s:'동생은 두 살이에요.', tiles:['동생은','두','살이에요.'], extra:['둘'], en:'My little sibling is two.', hint:'둘은 살 앞에서 줄어들어요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'나이를 말할 때도 소리와 글자가 다른 곳이 있단다. 살의 ㅅ이 앞 받침을 만나면 힘이 들어가 ㅆ처럼 소리 나기도 하지.',
     cmp:[
       {s:'몇 살', d:'멷 쌀', n:'ㅊ 받침은 ㄷ처럼 나고, 뒤의 ㅅ은 ㅆ처럼 나요'},
       {s:'여덟 살', d:'여덜 쌀', n:'ㄼ 가운데 ㄹ만 소리 나고, 뒤의 ㅅ은 ㅆ처럼 나요'},
       {s:'일곱 살', d:'일곱 쌀', n:'ㅂ 받침 뒤의 ㅅ은 ㅆ처럼 나요'},
       {s:'살이에요', d:'사리에요', n:'ㄹ 받침이 뒤로 건너가요'}],
     note:'소리가 [쌀]로 들려도 나이를 쓸 때는 늘 ‘살’이란다. 쌀은 밥 짓는 쌀이지. 헷갈리면 이 할아버지를 떠올리거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 들리는 소리와 쓰는 글자가 다른 말이 있어.',
     items:[
       {w:'살', en:'years old', hint:{who:'dami', t:'나이를 세는 살은 ㅅ 하나로 쓴단다. 쌀은 밥 짓는 쌀이지.'}},
       {w:'몇', en:'how many', hint:{who:'dami', t:'소리는 [멷]이지만 받침은 ㅊ이란다. 받침 줄에서 ㅊ을 찾아보거라.'}},
       {w:'열둘', en:'twelve'}]}
  ],
  dictWords:[{w:'살', en:'years old'}, {w:'개', en:'(counter for things)'}, {w:'몇', en:'how many'}, {w:'열하나', pic:'apples11', en:'eleven'}, {w:'열둘', en:'twelve'}] },

{ n:9, bundle:3, title:'토리의 생일',
  steps:[
    {type:'intro', who:'moi',
     t:'오늘은 토리 생일이야. 담이 할아버지도 오셨어. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'생일 축하해'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 생일 축하해!', en:'Happy birthday, Tori!'},
       {who:'tori', t:'고마워, 모이야!', en:'Thanks, Moi!'},
       {who:'moi', t:'토리는 몇 살이야?', en:'How old are you, Tori?'},
       {who:'tori', t:'나는 여덟 살이야.', en:"I'm eight."},
       {who:'moi', t:'와, 나도 여덟 살이야!', en:"Wow, I'm eight too!"},
       {who:'dami', t:'허허, 떡을 여덟 개 가져왔단다.', en:'Ho ho, I brought eight rice cakes.'},
       {who:'tori', t:'감사합니다, 할아버지. 할아버지는 몇 살이에요?', en:'Thank you, Grandpa. How old are you?'},
       {who:'dami', t:'허허, 어른께는 연세가 어떻게 되세요, 하고 여쭙는단다.', en:'Ho ho, to an elder you ask, "May I ask your age?"'}],
     note:{who:'dami', t:'친구에게는 ‘몇 살이야?’ 하고 물어도 된단다. 그런데 할머니, 할아버지 같은 어른께 몇 살이냐고 물으면 버릇없게 들리지. 어른의 나이는 ‘연세’라고 하고, ‘연세가 어떻게 되세요?’ 하고 여쭙는단다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 몇 살이에요?', o:['일곱 살','여덟 살','아홉 살'], a:'여덟 살', why:'토리는 ‘나는 여덟 살이야’라고 했어요.'},
       {t:'모이는 몇 살이에요?', o:['여덟 살','열 살','세 살'], a:'여덟 살', why:'모이는 ‘나도 여덟 살이야’라고 했어요.'},
       {t:'담이 할아버지는 떡을 몇 개 가져왔어요?', o:['여섯 개','열 개','여덟 개'], a:'여덟 개', why:'할아버지는 ‘떡을 여덟 개 가져왔단다’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {line:{who:'moi', t:'토리야, 너는 몇 살이야?'}, en:'Tori, how old are you?', o:['나는 여덟 살이야.','저는 여덟 살이에요.'], a:'나는 여덟 살이야.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {line:{who:'dami', t:'토리야, 너는 몇 살이냐?'}, en:'Tori, how old are you?', o:['나는 여덟 살이야.','저는 여덟 살이에요.'], a:'저는 여덟 살이에요.', why:'할아버지는 어른이라서 ‘저는 여덟 살이에요’라고 해요.'},
       {pic:'p_grandma', t:'할머니의 나이가 궁금해요.', en:"You want to know Grandma's age.", o:['몇 살이에요?','연세가 어떻게 되세요?'], a:'연세가 어떻게 되세요?', why:'어른께는 ‘연세가 어떻게 되세요?’라고 여쭤요.'},
       {pic:'p_friend', t:'친구의 나이가 궁금해요.', en:"You want to know your friend's age.", o:['몇 살이야?','연세가 어떻게 되세요?'], a:'몇 살이야?', why:'친구에게는 ‘몇 살이야?’라고 물어요.'}]},
    {type:'task', title:'나이를 말하고 물어보기', who:'moi',
     t:'오늘 배운 말로 가족과 이야기해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'할머니 할아버지께 내 나이를 말해요', say:'저는 ______ 살이에요.', sub:'한, 두, 세, 네 살처럼 줄어드는 숫자를 조심해요.'},
       {when:'사촌이나 친구에게 물어봐요', say:'너는 몇 살이야?', sub:'친구에게는 편한 말로 물어요.'},
       {when:'할머니 할아버지께 여쭤요', say:'연세가 어떻게 되세요?', sub:'어른께는 몇 살이냐고 묻지 않아요.'}],
     parent:'마지막 질문은 할머니 할아버지께 미리 알려 드리면 좋습니다. 아이가 "연세가 어떻게 되세요?"라고 여쭈면 칭찬해 주시고, 대답은 "여든 살이란다"처럼 숫자 그대로 해 주셔도 됩니다. 스물 이상의 수는 아직 배우지 않았으니 알아듣지 못해도 괜찮습니다. 저녁 식탁에서 숟가락이나 과일을 "하나, 둘, 셋" 하고 함께 세어 보는 것도 좋은 연습입니다.'}
  ],
  dictWords:[] },

/* ---- 넷째 묶음: 내 몸 -----------------------------------------
   몸의 이름 열 개를 배우고, 셋째 묶음의 숫자(눈이 두 개예요)와 둘째 묶음의 이/가(머리가 아파요)를 다시 씁니다.
   과제는 "Simon says"와 같은 "담이가 말했어요" 놀이입니다. */
{ n:10, bundle:4, title:'머리, 눈, 코, 입',
  steps:[
    {type:'intro', who:'moi',
     t:'오늘은 몸의 이름을 모아 왔어. 내 몸을 가리키면서 따라 해 봐.',
     big:'내 몸'},
    {type:'pairs', title:'얼굴', who:'moi',
     t:'빨간 동그라미가 있는 곳을 봐. 그림을 누르면 소리가 나. 네 얼굴에서도 같은 곳을 짚어 봐.',
     singles:[
       {w:'머리', pic:'f_head', en:'head'}, {w:'눈', pic:'f_eye', en:'eye'}, {w:'코', pic:'f_nose', en:'nose'},
       {w:'입', pic:'f_mouth', en:'mouth'}, {w:'귀', pic:'f_ear', en:'ear'}]},
    {type:'pairs', title:'몸', who:'moi',
     t:'이번엔 몸이야. 손, 발, 배, 팔, 다리. 하나씩 짚으면서 들어 봐.',
     singles:[
       {w:'손', pic:'b_hand', en:'hand'}, {w:'발', pic:'b_foot', en:'foot'}, {w:'배', pic:'b_belly', en:'belly'},
       {w:'팔', pic:'b_arm', en:'arm'}, {w:'다리', pic:'b_leg', en:'leg'}],
     tip:{who:'tori', t:'눈은 하늘에서 오는 눈과 글자가 같아. 배도 먹는 배, 타는 배와 글자가 같지. 그림을 보면 무슨 뜻인지 알 수 있어.'}},
    {type:'choose', title:'여기는 어디예요?', who:'tori',
     t:'빨간 동그라미가 있는 곳의 이름을 골라 봐.',
     qs:[
       {pic:'f_nose', o:['코','입','귀'], a:'코'},
       {pic:'b_foot', o:['손','발','배'], a:'발'},
       {pic:'f_ear', o:['눈','귀','머리'], a:'귀'},
       {pic:'b_belly', o:['배','팔','다리'], a:'배'},
       {pic:'f_eye', o:['코','눈','입'], a:'눈'},
       {pic:'b_leg', o:['팔','다리','손'], a:'다리'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 곳을 찾아 봐.',
     qs:[
       {say:'입', o:['f_nose','f_mouth','f_eye'], a:'f_mouth'},
       {say:'손', o:['b_hand','b_foot','b_arm'], a:'b_hand'},
       {say:'머리', o:['f_ear','f_nose','f_head'], a:'f_head'},
       {say:'팔', o:['b_leg','b_arm','b_belly'], a:'b_arm'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'몸의 이름을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'눈', en:'eye'}, {w:'손', en:'hand'}, {w:'다리', en:'leg'}]}
  ],
  dictWords:[{w:'머리', en:'head'}, {w:'눈', en:'eye'}, {w:'코', en:'nose'}, {w:'입', en:'mouth'}, {w:'귀', en:'ear'},
             {w:'손', en:'hand'}, {w:'발', en:'foot'}, {w:'배', en:'belly'}, {w:'팔', en:'arm'}, {w:'다리', en:'leg'}] },

{ n:11, bundle:4, title:'머리가 아파요',
  steps:[
    {type:'intro', who:'tori',
     t:'어디가 아플 때 하는 말을 배워 보자. 아픈 곳 뒤에 이나 가를 붙이고 ‘아파요’라고 하면 돼.',
     big:'머리가 아파요'},
    {type:'pairs', title:'아플 때 하는 말', who:'moi',
     t:'오늘 모아 온 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'아파요', pic:'ouch', en:'it hurts'},
       {w:'어디', pic:'what', en:'where'},
       {w:'몸', pic:'b_body', en:'body'}],
     tip:{who:'tori', t:'친구에게는 ‘아파’, 어른에게는 ‘아파요’라고 해. 넘어졌을 때 ‘아야!’ 하고 소리치는 건 누구에게나 괜찮아.'}},
    {type:'josa', j:'이', q:'뒤에 무엇을 붙일까요?', title:'이일까요, 가일까요?', who:'tori',
     t:'둘째 묶음에서 배운 것 기억나? 받침이 있으면 이, 없으면 가.',
     names:['눈','코','입','귀','손','배','팔','다리']},
    {type:'choose', title:'어디가 아파요?', who:'tori',
     t:'빨간 동그라미가 있는 곳이 아파. 알맞은 말을 골라 봐.',
     qs:[
       {pic:'b_belly', o:['배가 아파요.','발이 아파요.'], a:'배가 아파요.', en:'My belly hurts.'},
       {pic:'f_head', o:['머리가 아파요.','머리이 아파요.'], a:'머리가 아파요.', en:'My head hurts.', why:'‘리’에 받침이 없어서 ‘가’를 붙여요.'},
       {pic:'b_hand', o:['손가 아파요.','손이 아파요.'], a:'손이 아파요.', en:'My hand hurts.', why:'‘손’에 받침 ㄴ이 있어서 ‘이’를 붙여요.'},
       {pic:'f_ear', o:['귀가 아파요.','코가 아파요.'], a:'귀가 아파요.', en:'My ear hurts.'}]},
    {type:'choose', title:'몇 개예요?', who:'moi',
     t:'셋째 묶음에서 배운 숫자로 세어 봐. 개 앞에서 줄어드는 숫자, 기억나지?',
     qs:[
       {pic:'f_eye', t:'눈이 몇 개예요?', o:['눈이 두 개예요.','눈이 둘 개예요.'], a:'눈이 두 개예요.', en:'I have two eyes.', why:'둘은 개 앞에서 두가 돼요.'},
       {pic:'f_nose', t:'코가 몇 개예요?', o:['코가 한 개예요.','코가 하나 개예요.'], a:'코가 한 개예요.', en:'I have one nose.', why:'하나는 개 앞에서 한이 돼요.'},
       {pic:'f_ear', t:'귀가 몇 개예요?', o:['귀가 두 개예요.','귀가 세 개예요.'], a:'귀가 두 개예요.', en:'I have two ears.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'어디가 아파요?', tiles:['어디가','아파요?'], en:'Where does it hurt?'},
       {s:'머리가 아파요.', tiles:['머리가','아파요.'], extra:['머리이'], en:'My head hurts.', hint:'‘리’에 받침이 없어요.'},
       {s:'저는 발이 아파요.', tiles:['저는','발이','아파요.'], extra:['발가'], en:'My foot hurts.', hint:'누가 하는 말인지(저는)부터 와요. ‘발’에는 받침 ㄹ이 있어요.'},
       {s:'손이 두 개예요.', tiles:['손이','두','개예요.'], extra:['둘'], en:'I have two hands.', hint:'둘은 개 앞에서 줄어들어요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'몸의 이름 뒤에 이가 붙으면, 받침이 또 뒤로 건너간단다. 들어 보거라.',
     cmp:[
       {s:'눈이', d:'누니', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'손이', d:'소니', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'발이', d:'바리', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'입이', d:'이비', n:'ㅂ 받침이 뒤로 건너가요'}],
     note:'[누니 아파요]로 들려도 쓸 때는 ‘눈이 아파요’란다. 받침은 제 글자에 두고, 이는 따로 쓰는 게야.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'아파요', en:'it hurts'},
       {w:'발이', en:'foot (with 이)', hint:{who:'dami', t:'소리는 [바리]지만, ㄹ은 ‘발’의 받침으로 남아 있단다. ‘발’을 쓰고 ‘이’를 붙여 보거라.'}},
       {w:'눈이', en:'eye (with 이)', hint:{who:'dami', t:'소리는 [누니]지만, ㄴ은 ‘눈’의 받침이란다. ‘눈’을 쓰고 ‘이’를 붙여 보거라.'}}]}
  ],
  dictWords:[{w:'아파요', en:'it hurts'}, {w:'어디', en:'where'}, {w:'몸', en:'body'}, {w:'발이', en:'foot (with 이)'}, {w:'눈이', en:'eye (with 이)'}] },

{ n:12, bundle:4, title:'모이가 아파요',
  steps:[
    {type:'intro', who:'tori',
     t:'토리 생일 다음 날, 모이가 조금 이상해. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'배가 아파요'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 왜 그래?', en:"Moi, what's wrong?"},
       {who:'moi', t:'아야, 배가 아파.', en:'Ow, my belly hurts.'},
       {who:'dami', t:'모이야, 어디가 아프냐?', en:'Moi, where does it hurt?'},
       {who:'moi', t:'배가 아파요. 머리도 아파요.', en:'My belly hurts. My head hurts too.'},
       {who:'tori', t:'할아버지, 모이가 어제 떡을 여덟 개 먹었어요!', en:'Grandpa, Moi ate eight rice cakes yesterday!'},
       {who:'dami', t:'허허, 떡을 너무 많이 먹었구나.', en:'Ho ho, you ate too many rice cakes.'},
       {who:'moi', t:'다음에는 한 개만 먹을게요.', en:"Next time I'll eat just one."}],
     note:{who:'dami', t:'모이가 토리에게는 ‘배가 아파’라고 하고, 나에게는 ‘배가 아파요’라고 했지? 친구와 어른에게 하는 말이 이렇게 다르단다. 그리고 ‘머리도 아파요’의 ‘도’는 ‘~도, 또’라는 뜻이지.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'모이는 어디가 아파요?', o:['귀','배','발'], a:'배', why:'모이는 ‘배가 아파요’라고 했어요.'},
       {t:'모이는 또 어디가 아파요?', o:['머리','손','다리'], a:'머리', why:'모이는 ‘머리도 아파요’라고 했어요.'},
       {t:'모이는 떡을 몇 개 먹었어요?', o:['한 개','여덟 개','세 개'], a:'여덟 개', why:'토리가 ‘떡을 여덟 개 먹었어요’라고 했어요.'},
       {t:'다음에는 떡을 몇 개만 먹을 거예요?', o:['한 개','두 개','열 개'], a:'한 개', why:'모이는 ‘한 개만 먹을게요’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 넘어져서 발이 아파. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'b_foot', line:{who:'moi', t:'토리야, 어디가 아파?'}, en:'Tori, where does it hurt?', o:['발이 아파.','발이 아파요.'], a:'발이 아파.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'b_foot', line:{who:'dami', t:'토리야, 어디가 아프냐?'}, en:'Tori, where does it hurt?', o:['발이 아파.','발이 아파요.'], a:'발이 아파요.', why:'할아버지는 어른이라서 ‘아파요’라고 해요.'},
       {pic:'f_ear', t:'귀가 아파요. 할머니께 말해요.', en:'Your ear hurts. Tell Grandma.', o:['귀가 아파요.','귀이 아파요.','귀가 아파.'], a:'귀가 아파요.', why:'‘귀’에는 받침이 없어서 ‘가’. 할머니께는 ‘아파요’라고 해요.'}]},
    {type:'task', title:'담이가 말했어요 놀이', who:'moi',
     t:'가족과 놀이를 해 봐. 영어의 Simon says와 같은 놀이야. 다 하면 했어요를 눌러.',
     lines:[
       {when:'어른이 말하면 아이가 가리켜요', say:'담이가 말했어요, 코!', sub:'‘담이가 말했어요’ 없이 ‘코!’만 말하면 움직이지 않아요.'},
       {when:'이번엔 아이가 말해요', say:'담이가 말했어요, 귀!', sub:'머리, 눈, 입, 손, 발, 배, 팔, 다리로 바꿔 가며 해 봐요.'},
       {when:'놀이가 끝나면 아픈 척하며 말해요', say:'______가 아파요.', sub:'받침이 있는 말이면 이: 발이 아파요.'}],
     parent:'놀이는 영어의 Simon says와 같습니다. 어른이 "담이가 말했어요, 코!" 하면 아이가 코를 가리키고, "담이가 말했어요" 없이 "코!"만 말하면 가만히 있어야 합니다. 몇 번 하고 나면 역할을 바꿔 아이가 말하게 해 주세요. 부위를 말할 때 영어가 섞여도 괜찮고, 한국어로 다시 말해 주시면 됩니다. 마지막에 아픈 척하며 "배가 아파요" 같은 문장을 말하게 해 보세요.'}
  ],
  dictWords:[] },
/* ---- 다섯째 묶음: 우리 집 ------------------------------------
   집 안 물건 열 개와 색 여섯 개. 이에요/예요(첫째 묶음), 이/가(둘째), 숫자와 개(셋째)를 모두 다시 씁니다.
   이야기에서는 친구에게 "내 가방", 어른께 "제 가방"을 구별합니다. */
{ n:13, bundle:5, title:'집 안에 있어요',
  steps:[
    {type:'intro', who:'moi',
     t:'둘째 달 마지막 묶음이야. 오늘은 집 안에 있는 물건의 이름을 모아 왔어. 네 방에도 있는지 찾아보면서 들어 봐.',
     big:'우리 집'},
    {type:'pairs', title:'집', who:'moi',
     t:'먼저 집이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'집', pic:'t_house', en:'house, home'}, {w:'방', pic:'t_room', en:'room'},
       {w:'문', pic:'t_door', en:'door'}, {w:'창문', pic:'t_window', en:'window'}],
     tip:{who:'tori', t:'창문은 ‘창’과 ‘문’이 합쳐진 말이야. 빛이 들어오는 문이라서 창문이지.'}},
    {type:'pairs', title:'방 안의 물건', who:'moi',
     t:'이번엔 방 안에 있는 물건이야. 하나씩 눌러서 들어 봐.',
     singles:[
       {w:'침대', pic:'t_bed', en:'bed'}, {w:'책상', pic:'t_desk', en:'desk'}, {w:'의자', pic:'t_chair', en:'chair'},
       {w:'책', pic:'t_book', en:'book'}, {w:'컵', pic:'t_cup', en:'cup'}, {w:'가방', pic:'t_bag', en:'bag, backpack'}],
     tip:{who:'dami', t:'책상은 책을 놓고 보는 상이라서 책상이란다. 책과 책상, 글자 하나로 이어져 있지.'}},
    {type:'choose', title:'이건 뭐예요?', who:'tori',
     t:'그림을 보고 이름을 골라 봐.',
     qs:[
       {pic:'t_chair', o:['책상','의자','침대'], a:'의자'},
       {pic:'t_window', o:['문','창문','방'], a:'창문'},
       {pic:'t_book', o:['책','컵','가방'], a:'책'},
       {pic:'t_desk', o:['책','책상','의자'], a:'책상'},
       {pic:'t_bag', o:['가방','집','컵'], a:'가방'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 물건을 찾아 봐.',
     qs:[
       {say:'침대', o:['t_desk','t_bed','t_chair'], a:'t_bed'},
       {say:'컵', o:['t_cup','t_bag','t_book'], a:'t_cup'},
       {say:'문', o:['t_window','t_house','t_door'], a:'t_door'},
       {say:'방', o:['t_room','t_house','t_window'], a:'t_room'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'물건 이름을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'문', en:'door'}, {w:'책', en:'book'}, {w:'의자', en:'chair', hint:{who:'dami', t:'첫 글자는 ㅇ에 모음 ㅢ란다. 모음 줄에서 ㅢ를 찾아보거라.'}}]}
  ],
  dictWords:[{w:'집', en:'house, home'}, {w:'방', en:'room'}, {w:'문', en:'door'}, {w:'창문', en:'window'}, {w:'침대', en:'bed'},
             {w:'책상', en:'desk'}, {w:'의자', en:'chair'}, {w:'책', en:'book'}, {w:'컵', en:'cup'}, {w:'가방', en:'bag'}] },

{ n:14, bundle:5, title:'무슨 색이에요?',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 색을 배워. 그리고 물건을 가리키며 ‘이게 뭐예요?’ 하고 묻는 말도 배워.',
     big:'빨간색이에요'},
    {type:'pairs', title:'색', who:'moi',
     t:'여섯 가지 색을 모아 왔어. 눌러서 들어 봐.',
     singles:[
       {w:'빨간색', pic:'c_red', en:'red'}, {w:'파란색', pic:'c_blue', en:'blue'}, {w:'노란색', pic:'c_yellow', en:'yellow'},
       {w:'초록색', pic:'c_green', en:'green'}, {w:'검은색', pic:'c_black', en:'black'}, {w:'하얀색', pic:'c_white', en:'white'}],
     tip:{who:'tori', t:'색 이름은 모두 ‘색’으로 끝나. 빨간색은 ‘빨강’, 파란색은 ‘파랑’이라고도 해.'}},
    {type:'pairs', title:'묻는 말', who:'moi',
     t:'물건과 색을 물을 때 쓰는 말이야.',
     singles:[
       {w:'이게 뭐예요?', pic:'what', en:'What is this?'},
       {w:'무슨 색이에요?', pic:'palette', en:'What color is it?'}]},
    {type:'choose', title:'무슨 색이에요?', who:'tori',
     t:'그림을 보고 무슨 색인지 골라 봐.',
     qs:[
       {pic:'bag_blue', t:'무슨 색이에요?', o:['파란색이에요.','노란색이에요.'], a:'파란색이에요.', en:"It's blue."},
       {pic:'cup_red', t:'무슨 색이에요?', o:['초록색이에요.','빨간색이에요.'], a:'빨간색이에요.', en:"It's red."},
       {pic:'book_black', t:'무슨 색이에요?', o:['검은색이에요.','하얀색이에요.'], a:'검은색이에요.', en:"It's black."},
       {pic:'chair_white', t:'무슨 색이에요?', o:['하얀색이에요.','파란색이에요.'], a:'하얀색이에요.', en:"It's white."},
       {pic:'cup_green', t:'무슨 색이에요?', o:['노란색이에요.','초록색이에요.'], a:'초록색이에요.', en:"It's green."}]},
    {type:'josa', title:'이에요일까요, 예요일까요?', who:'tori',
     t:'‘이게 뭐예요?’ 하고 물으면 물건 이름에 이에요나 예요를 붙여서 대답해. 첫 묶음에서 배운 방법 그대로야.',
     q:'이게 뭐예요?', names:['책','의자','컵','침대','가방','창문']},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'이게 뭐예요?', tiles:['이게','뭐예요?'], en:'What is this?'},
       {s:'가방이 빨간색이에요.', tiles:['가방이','빨간색이에요.'], extra:['가방가'], en:'The bag is red.', hint:'‘방’에 받침 ㅇ이 있어요.'},
       {s:'의자가 두 개 있어요.', tiles:['의자가','두','개','있어요.'], extra:['둘'], en:'There are two chairs.', hint:'둘은 개 앞에서 줄어들어요.'},
       {s:'여기가 제 방이에요.', tiles:['여기가','제','방이에요.'], extra:['방예요.'], en:'This is my room.', hint:'‘방’에 받침이 있어요. ‘여기가’부터 시작해요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'마지막 묶음의 소리 비밀이란다. 책상은 [책쌍]으로 들리지? ㄱ 받침 뒤에서 ㅅ이 힘을 주어 ㅆ처럼 나는 게야.',
     cmp:[
       {s:'책상', d:'책쌍', n:'ㄱ 받침 뒤의 ㅅ은 ㅆ처럼 나요'},
       {s:'책이에요', d:'채기에요', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'빨간색이에요', d:'빨간새기에요', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'방이에요', d:'방이에요', n:'ㅇ 받침은 건너가지 않아요'}],
     note:'둘째 달 동안 받침이 건너가는 소리를 여러 번 만났지. 들리는 대로 쓰지 않고 글자의 제자리를 찾아 쓰는 것, 그게 받아쓰기의 비밀이란다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'책상', en:'desk', hint:{who:'dami', t:'소리는 [책쌍]이지만 ‘책’ 다음에 ‘상’을 쓴단다. 쌍이 아니라 상이지.'}},
       {w:'노란색', en:'yellow'},
       {w:'컵', en:'cup'}]}
  ],
  dictWords:[{w:'빨간색', en:'red'}, {w:'파란색', en:'blue'}, {w:'노란색', en:'yellow'}, {w:'초록색', en:'green'},
             {w:'검은색', en:'black'}, {w:'하얀색', en:'white'}, {w:'색', en:'color'}] },

{ n:15, bundle:5, title:'토리의 방',
  steps:[
    {type:'intro', who:'tori',
     t:'둘째 달 마지막 밤이야. 모이가 내 방에 놀러 왔어. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'여기가 내 방이야'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 여기가 내 방이야.', en:'Moi, this is my room.'},
       {who:'moi', t:'와! 이게 뭐야?', en:'Wow! What is this?'},
       {who:'tori', t:'내 책상이야. 의자도 있어.', en:"It's my desk. There's a chair too."},
       {who:'moi', t:'침대가 노란색이네!', en:'Your bed is yellow!'},
       {who:'tori', t:'응, 달님처럼 노란색이야.', en:'Yes, yellow like the moon.'},
       {who:'dami', t:'토리야, 이 빨간 가방은 누구 것이냐?', en:'Tori, whose red bag is this?'},
       {who:'tori', t:'제 가방이에요, 할아버지.', en:"It's my bag, Grandpa."},
       {who:'dami', t:'허허, 방이 참 깨끗하구나.', en:'Ho ho, your room is very tidy.'}],
     note:{who:'dami', t:'토리가 모이에게는 ‘내 책상’이라고 하고, 나에게는 ‘제 가방’이라고 했지? 어른께 말할 때는 ‘나’ 대신 ‘저’, ‘내’ 대신 ‘제’를 쓴단다. 둘째 달 내내 배운 높이는 말의 마지막 조각이지.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리의 침대는 무슨 색이에요?', o:['파란색','노란색','빨간색'], a:'노란색', why:'토리는 ‘달님처럼 노란색이야’라고 했어요.'},
       {t:'빨간 가방은 누구 것이에요?', o:['토리 가방','모이 가방','할아버지 가방'], a:'토리 가방', why:'토리는 ‘제 가방이에요’라고 했어요.'},
       {t:'모이가 책상을 보고 뭐라고 물었어요?', o:['이게 뭐야?','몇 살이야?','어디가 아파?'], a:'이게 뭐야?', why:'모이는 ‘와! 이게 뭐야?’라고 물었어요.'},
       {t:'할아버지는 토리 방이 어떻다고 했어요?', o:['깨끗해요','작아요','추워요'], a:'깨끗해요', why:'할아버지는 ‘방이 참 깨끗하구나’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'t_chair', line:{who:'moi', t:'토리야, 이게 뭐야?'}, en:'Tori, what is this?', o:['의자야.','의자예요.'], a:'의자야.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'t_cup', line:{who:'dami', t:'토리야, 이게 뭐냐?'}, en:'Tori, what is this?', o:['컵이야.','컵이에요.','컵예요.'], a:'컵이에요.', why:'할아버지는 어른이라서 높이는 말로 해요. ‘컵’에는 받침이 있어서 ‘이에요’예요.'},
       {pic:'t_bag', t:'할머니께 내 가방을 보여 드려요.', en:'Show Grandma your bag.', o:['내 가방이에요.','제 가방이에요.'], a:'제 가방이에요.', why:'어른께는 ‘내’ 대신 ‘제’라고 해요.'}]},
    {type:'task', title:'우리 집 보물찾기', who:'moi',
     t:'둘째 달 마지막 과제야. 가족과 집 안을 돌아다니며 물건을 찾아 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'가족이 물건을 가리키며 물어요', say:'이게 뭐예요?', sub:'아이가 가족에게 물어도 좋아요.'},
       {when:'아이가 대답해요', say:'______이에요.', sub:'받침이 없으면 예요: 의자예요, 침대예요.'},
       {when:'색도 말해 봐요', say:'______색이에요.', sub:'빨간색, 파란색, 노란색, 초록색, 검은색, 하얀색.'}],
     parent:'집 안을 함께 돌아다니며 물건을 가리키고 "이게 뭐예요?"라고 물어 주세요. 아이가 모르는 물건이 나오면 이름을 알려 주시면 됩니다. 색은 여섯 가지만 배웠으니 분홍색, 보라색 같은 색은 알려 주시되 틀려도 괜찮습니다. 이 과제로 둘째 달이 끝납니다. 인사, 가족, 숫자, 몸, 집을 모두 해냈으니 많이 칭찬해 주세요.'}
  ],
  dictWords:[] }
];

/* 받아쓰기실이 여러 달의 낱말을 모을 때 쓰는 등록 정보 */
/* ---- 둘째 달 빠른 확인 ----------------------------------------
   한국어를 조금 하는 아이가 아는 묶음을 건너뛰게 합니다. 묶음마다 세 문제이고,
   두 문제 이상 맞히면 다음 묶음으로 갑니다. 처음 막힌 묶음의 첫 밤부터 시작합니다.
   say 가 있으면 그 말을 들려주고, mode:'pic' 이면 그림 가운데서 고릅니다. */
const M2_CHECK = [
  {k:1, qs:[
    {pic:'p_grandma', t:'할머니를 만났어요. 뭐라고 해요?', o:['안녕','안녕하세요'], a:'안녕하세요'},
    {pic:'thanks', t:'친구가 선물을 줬어요. 뭐라고 해요?', o:['고마워','미안해'], a:'고마워'},
    {t:'이름을 말해요. 내 이름은 민준이에요.', o:['저는 민준이에요.','저는 민준예요.'], a:'저는 민준이에요.'}]},
  {k:2, qs:[
    {pic:'call_oppa', t:'나는 여자아이예요. 나보다 나이 많은 남자를 뭐라고 불러요?', o:['형','오빠'], a:'오빠'},
    {mode:'pic', say:'할아버지', t:'듣고 그림을 골라요.', o:['p_dad','p_grandpa','p_uncle'], a:'p_grandpa'},
    {pic:'no_sib', t:'그림에 맞는 말을 골라요.', o:['동생이 있어요.','동생이 없어요.'], a:'동생이 없어요.'}]},
  {k:3, qs:[
    {mode:'pic', say:'일곱', t:'듣고 그림을 골라요.', o:['apples6','apples7','apples8'], a:'apples7'},
    {pic:'cake3', t:'몇 살이에요?', o:['셋 살이에요.','세 살이에요.'], a:'세 살이에요.'},
    {pic:'p_grandma', t:'할머니의 나이가 궁금해요. 뭐라고 여쭤요?', o:['몇 살이에요?','연세가 어떻게 되세요?'], a:'연세가 어떻게 되세요?'}]},
  {k:4, qs:[
    {mode:'pic', say:'귀', t:'듣고 그림을 골라요.', o:['f_eye','f_ear','f_nose'], a:'f_ear'},
    {pic:'b_belly', t:'여기가 아파요. 뭐라고 해요?', o:['배가 아파요.','발이 아파요.'], a:'배가 아파요.'},
    {pic:'f_eye', t:'눈이 몇 개예요?', o:['눈이 두 개예요.','눈이 둘 개예요.'], a:'눈이 두 개예요.'}]},
  {k:5, qs:[
    {mode:'pic', say:'의자', t:'듣고 그림을 골라요.', o:['t_desk','t_bed','t_chair'], a:'t_chair'},
    {pic:'bag_blue', t:'무슨 색이에요?', o:['파란색이에요.','초록색이에요.'], a:'파란색이에요.'},
    {pic:'t_bag', t:'할머니께 내 가방을 보여 드려요.', o:['내 가방이에요.','제 가방이에요.'], a:'제 가방이에요.'}]}
];

const SECOND_MOON = {
  key: 'second-moon', title: '둘째 달', path: 'second-moon/',
  store: 'daltokki:v1:second-moon',
  units: M2_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M2_POOL
};
