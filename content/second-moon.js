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
  what:      `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="물음표">
     <circle cx="100" cy="64" r="44" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/>
     <text x="100" y="88" text-anchor="middle" font-size="68" font-family="Jua, sans-serif" fill="#C1403A">?</text></svg>`
};

/* ---- 다섯 묶음 ---- */
const M2_BUNDLES = [
  {k:1, title:'안녕하세요', topic:'인사하고 이름 말하기', nights:[1, 2, 3], after:'그동안 할머니 할아버지께 인사해 봐.'},
  {k:2, title:'우리 가족', topic:'가족을 부르는 말, 있어요와 없어요', nights:[4, 5, 6], after:'그동안 가족사진을 보면서 가족을 한 사람씩 불러 봐.'},
  {k:3, title:'하나, 둘, 셋', topic:'숫자 세기와 나이', nights:[7, 8, 9]},
  {k:4, title:'내 몸', topic:'몸과 아픈 곳 말하기', nights:[10, 11, 12]},
  {k:5, title:'우리 집', topic:'집 안 물건과 색', nights:[13, 14, 15]}
];
const M2_TOTAL = 15;

/* 받아쓰기 자판: 첫째 달에서 배운 자모. 겹받침은 둘째 달 낱말에 나오는 ㅄ(없어요)만 넣습니다. */
const M2_POOL = {
  cho:  ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'],
  jung: ['ㅏ','ㅓ','ㅗ','ㅜ','ㅡ','ㅣ','ㅑ','ㅕ','ㅛ','ㅠ','ㅐ','ㅔ','ㅒ','ㅖ','ㅘ','ㅝ','ㅚ','ㅟ','ㅢ'],
  jong: ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅇ','ㅅ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㄲ','ㅆ','ㅄ']
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
  dictWords:[] }
];

/* 받아쓰기실이 여러 달의 낱말을 모을 때 쓰는 등록 정보 */
const SECOND_MOON = {
  key: 'second-moon', title: '둘째 달', path: 'second-moon/',
  store: 'daltokki:v1:second-moon',
  units: M2_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M2_POOL
};
