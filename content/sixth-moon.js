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
const M6_PIC = Object.assign({}, M5_PIC, M6_ONLY);

/* ---- 묶음 ---- */
const M6_BUNDLES = [
  {k:1, title:'더 커요, 제일 커요', topic:'견주는 말', nights:[1, 2, 3], after:'그동안 가족끼리 누가 더 큰지, 누가 제일 빠른지 견주어 말해 봐.'},
  {k:2, title:'어떻게 생겼어요?', topic:'꾸미는 말과 설명하기', nights:[4, 5, 6]},
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
