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
const M5_PIC = Object.assign({}, M4_PIC, M5_ONLY);

/* ---- 묶음 ---- */
const M5_BUNDLES = [
  {k:1, title:'그리고, 그래서', topic:'문장 잇기와 이야기 순서', nights:[1, 2, 3], after:'그동안 날마다 그림일기를 한 장씩 그리고 세 문장으로 이어 써 봐.'},
  {k:2, title:'같이 놀자', topic:'친구와 놀기, 할 수 있어요', nights:[4, 5, 6]},
  {k:3, title:'한국에 갈 거예요', topic:'앞날 말하기와 여행 준비', nights:[7, 8, 9]},
  {k:4, title:'이거 얼마예요?', topic:'돈과 가게', nights:[10, 11, 12]},
  {k:5, title:'할머니 댁까지', topic:'한국 방문', nights:[13, 14, 15]}
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
  dictWords:[] }
];

/* ---- 빠른 확인: 다섯째 달은 묶음이 모두 열린 뒤에 만듭니다 ---- */
const M5_CHECK = [];

/* ---- 받아쓰기 자판: 넷째 달과 같습니다 ---- */
const M5_POOL = M4_POOL;

/* 달 등록 정보 */
const FIFTH_MOON = {
  key: 'fifth-moon', title: '다섯째 달', path: 'fifth-moon/',
  store: 'daltokki:v1:fifth-moon',
  units: M5_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M5_POOL,
  num: 5, name: '다섯째 달', title2: '다섯째 달, 한국에 가요', nextName: '여섯째 달',
  topics: '이야기 잇기, 친구, 앞날, 돈, 한국 방문',
  nights: M5_NIGHTS, bundles: M5_BUNDLES, pic: M5_PIC, keys: M5_POOL, total: M5_TOTAL, check: M5_CHECK,
  prev: {store: 'daltokki:v1:fourth-moon', total: 15},
  text: {
    welcomePrev: '넷째 달을 다 채웠구나. 이번 달에는 문장을 이어서 이야기를 만들어. 친구와 놀고, 한국에 갈 준비를 하고, 가게에서 물건도 사고, 할머니 댁까지 가 보자. 열다섯 밤이면 보름달이 떠.',
    welcomeFresh: '다섯째 달에서는 문장을 이어서 이야기를 해. 넷째 달의 지난 일과 존댓말을 알고 오면 훨씬 쉬워. 이미 한국어로 꽤 말할 줄 알면 여기서 시작해도 돼.',
    parents: '다섯째 달은 이야기 잇기, 친구, 앞날 말하기, 돈, 한국 방문의 다섯 묶음으로, 묶음마다 세 밤입니다. 한 문장을 넘어 여러 문장을 이어 말하는 것이 목표입니다. 돈은 딱 떨어지는 값(오백 원, 천 원, 오천 원, 만 원)까지만 다룹니다.'
  }
};
