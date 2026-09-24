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
const M5_PIC = Object.assign({}, M4_PIC, M5_ONLY);

/* ---- 묶음 ---- */
const M5_BUNDLES = [
  {k:1, title:'그리고, 그래서', topic:'문장 잇기와 이야기 순서', nights:[1, 2, 3], after:'그동안 날마다 그림일기를 한 장씩 그리고 세 문장으로 이어 써 봐.'},
  {k:2, title:'같이 놀자', topic:'친구와 놀기, 할 수 있어요', nights:[4, 5, 6], after:'그동안 가족이나 친구에게 한국어로 같이 놀자고 해 봐.'},
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
