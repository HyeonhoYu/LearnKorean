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
const M4_PIC = Object.assign({}, M3_PIC, M4_ONLY);

/* ---- 묶음 ---- */
const M4_BUNDLES = [
  {k:1, title:'어제 뭐 했어요?', topic:'지난 일 말하기', nights:[1, 2, 3], after:'그동안 저녁마다 가족에게 오늘 한 일을 하나씩 말해 봐.'},
  {k:2, title:'기분이 어때요?', topic:'기분과 까닭', nights:[4, 5, 6]},
  {k:3, title:'일, 이, 삼', topic:'한자어 수, 날짜와 분', nights:[7, 8, 9]},
  {k:4, title:'어디에 있어요?', topic:'자리와 길 찾기', nights:[10, 11, 12]},
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
  dictWords:[] }
];

/* ---- 빠른 확인: 넷째 달은 묶음이 모두 열린 뒤에 만듭니다 ---- */
const M4_CHECK = [];

/* ---- 받아쓰기 자판: 셋째 달에 앉아요의 ㄵ 을 더합니다 ---- */
const M4_POOL = Object.assign({}, M3_POOL, {jong: [...M3_POOL.jong, 'ㄵ']});

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
