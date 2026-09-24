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
const M6_PIC = Object.assign({}, M5_PIC, M6_ONLY);

/* ---- 묶음 ---- */
const M6_BUNDLES = [
  {k:1, title:'더 커요, 제일 커요', topic:'견주는 말', nights:[1, 2, 3], after:'그동안 가족끼리 누가 더 큰지, 누가 제일 빠른지 견주어 말해 봐.'},
  {k:2, title:'어떻게 생겼어요?', topic:'꾸미는 말과 설명하기', nights:[4, 5, 6], after:'그동안 가족과 수수께끼 놀이를 하며 물건을 설명해 봐.'},
  {k:3, title:'설날', topic:'세배, 떡국, 새해 인사', nights:[7, 8, 9]},
  {k:4, title:'추석', topic:'송편, 보름달, 달토끼 옛이야기', nights:[10, 11, 12]},
  {k:5, title:'세종대왕과 한글', topic:'한글이 생긴 이야기', nights:[13, 14, 15]}
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
  dictWords:[] }
];

/* ---- 빠른 확인: 여섯째 달은 묶음이 모두 열린 뒤에 만듭니다 ---- */
const M6_CHECK = [];

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
