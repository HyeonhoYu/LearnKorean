/* ══════════════════════════════════════════════════════════════
   셋째 달, 나의 하루 (2단계)
   움직임을 말하는 달입니다. 동사가 들어오고, 모두 지금 일어나는 일(현재형)로만 말합니다.
   다섯 묶음: 아침에 일어나요(하루 일과), 학교에 가요(미국 학교와 주말 한글학교),
   맛있어요(음식), 오늘 날씨(날씨), 토리의 하루(요일과 모아서 말하기).

   이 파일은 content/second-moon.js 다음에 불러옵니다. 둘째 달의 그림 도구(m2Person, m2Svg,
   m2Thing, M2_RING)와 그림(M2_PIC)을 그대로 빌려 쓰고, 셋째 달 그림만 M3_ONLY 에 더합니다.
   숫자는 둘째 달의 고유어 수만 씁니다. 일, 이, 삼으로 세는 수는 넷째 달 날짜와 함께 배웁니다.
   그래서 시계도 "시"까지만 읽고 "분"은 넣지 않습니다.
   ══════════════════════════════════════════════════════════════ */

const M3_TOTAL = 15;

/* ---- 그림 ---- */
/* 하늘: 아침, 점심, 저녁, 밤. 해와 달의 자리로 때를 보여 줍니다. */
function m3Sky(phase){
  const S = '#221F1C';
  const sky = {morning:'#CFE0EA', noon:'#9DC3DC', evening:'#F0B98A', night:'#17324A'}[phase];
  const body = {
    morning: `<circle cx="40" cy="92" r="16" fill="#F2C14E" stroke="${S}" stroke-width="2.6"/>`,
    noon:    `<circle cx="100" cy="30" r="17" fill="#F2C14E" stroke="${S}" stroke-width="2.6"/>
              <g stroke="#E3A93C" stroke-width="3" stroke-linecap="round"><path d="M100 6 L100 0"/><path d="M124 30 L130 30"/><path d="M76 30 L70 30"/><path d="M117 13 L121 9"/><path d="M83 13 L79 9"/></g>`,
    evening: `<circle cx="162" cy="96" r="16" fill="#E0703C" stroke="${S}" stroke-width="2.6"/>`,
    night:   `<path d="M150 22 A18 18 0 1 0 168 48 A14 14 0 1 1 150 22 Z" fill="#F5E6BD" stroke="${S}" stroke-width="2"/>
              <g fill="#F5E6BD"><circle cx="40" cy="24" r="2"/><circle cx="70" cy="44" r="1.6"/><circle cx="110" cy="18" r="1.8"/><circle cx="30" cy="60" r="1.4"/></g>`
  }[phase];
  const win = phase === 'night' ? '#E3A93C' : '#9DB4C6';
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${{morning:'아침', noon:'점심', evening:'저녁', night:'밤'}[phase]}">
    <rect x="0" y="0" width="200" height="130" rx="6" fill="${sky}"/>${body}
    <rect x="0" y="108" width="200" height="22" fill="#B7A57A"/>
    <path d="M70 76 L100 54 L130 76 Z" fill="#C1403A" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
    <rect x="78" y="76" width="44" height="34" fill="#F5E6BD" stroke="${S}" stroke-width="2.6"/>
    <rect x="86" y="84" width="12" height="11" fill="${win}" stroke="${S}" stroke-width="2"/><rect x="104" y="90" width="11" height="20" fill="#8A6A4A" stroke="${S}" stroke-width="2"/></svg>`;
}

/* 시계: h 시 정각. 분침은 늘 12 에 있습니다. */
function m3Clock(h){
  const S = '#221F1C', a = (h % 12) * 30 * Math.PI / 180;
  const hx = 100 + Math.sin(a) * 28, hy = 65 - Math.cos(a) * 28;
  let ticks = '';
  for(let i = 0; i < 12; i++){
    const t = i * 30 * Math.PI / 180, r1 = i % 3 ? 46 : 42;
    ticks += `<path d="M${100 + Math.sin(t) * r1} ${65 - Math.cos(t) * r1} L${100 + Math.sin(t) * 51} ${65 - Math.cos(t) * 51}" stroke="${S}" stroke-width="${i % 3 ? 2 : 3.4}" stroke-linecap="round"/>`;
  }
  const num = (n, x, y) => `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="13" font-weight="700" fill="${S}">${n}</text>`;
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${h}시">
    <circle cx="100" cy="65" r="56" fill="#FBF7EC" stroke="${S}" stroke-width="4"/>${ticks}
    ${num(12, 100, 30)}${num(3, 134, 65)}${num(6, 100, 100)}${num(9, 66, 65)}
    <path d="M100 65 L100 24" stroke="${S}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M100 65 L${hx.toFixed(1)} ${hy.toFixed(1)}" stroke="#C1403A" stroke-width="6" stroke-linecap="round"/>
    <circle cx="100" cy="65" r="4.5" fill="${S}"/></svg>`;
}

/* 아이가 하는 일: 일어나요, 씻어요, 먹어요, 가요, 자요 */
function m3Act(kind){
  const S = '#221F1C', inner = m => m.replace(/<\/?svg[^>]*>/g, '');
  const g = {
    wake: `<g transform="translate(-30 4) scale(.9)">${inner(m2Thing('bed', 'yellow'))}</g>
      <rect x="140" y="18" width="40" height="34" fill="#CFE0EA" stroke="${S}" stroke-width="2.4"/><circle cx="152" cy="42" r="7" fill="#F2C14E"/>
      ${m2Person('kid', 150, 'wave', -1)}
      <path d="M118 36 L124 30 M114 30 L114 22 M110 36 L104 30" stroke="${S}" stroke-width="2.4" stroke-linecap="round"/>`,
    wash: `${m2Person('kid', 78, 'give', 1)}
      <rect x="104" y="72" width="64" height="14" rx="4" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <path d="M112 86 L114 122 L158 122 L160 86" fill="#E7DCC4" stroke="${S}" stroke-width="2.6"/>
      <path d="M150 72 L150 56 L136 56" stroke="${S}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M136 60 q-2 6 0 8 q2 -2 0 -8" fill="#9DB4C6" stroke="${S}" stroke-width="1.4"/>
      <g fill="#FBF7EC" stroke="#8C7F63" stroke-width="1.6"><circle cx="72" cy="34" r="5"/><circle cx="86" cy="26" r="4"/><circle cx="94" cy="38" r="3.4"/></g>`,
    eat: `${m2Person('kid', 70, 'give', 1)}
      <rect x="90" y="84" width="96" height="8" fill="#B08452" stroke="${S}" stroke-width="2.4"/>
      <path d="M100 92 L100 122 M176 92 L176 122" stroke="${S}" stroke-width="4"/>
      <path d="M112 70 L148 70 Q146 86 130 86 Q114 86 112 70 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <path d="M116 70 Q130 60 144 70" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <path d="M158 84 L162 56 M166 84 L166 56" stroke="${S}" stroke-width="2.4" stroke-linecap="round"/>`,
    go: `${m2Person('kid', 90, 'walk', 1)}
      <rect x="70" y="54" width="14" height="24" rx="4" fill="#C1403A" stroke="${S}" stroke-width="2.2"/>
      <path d="M118 96 L170 96" stroke="#C1403A" stroke-width="5" stroke-linecap="round"/>
      <path d="M160 86 L172 96 L160 106" stroke="#C1403A" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M30 118 L50 118 M56 118 L72 118" stroke="#8C7F63" stroke-width="3" stroke-linecap="round"/>`,
    sleep: `<rect x="20" y="40" width="10" height="80" fill="#B08452" stroke="${S}" stroke-width="2.6"/>
      <rect x="26" y="78" width="150" height="24" rx="3" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <rect x="34" y="62" width="40" height="18" rx="8" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <circle cx="56" cy="64" r="15" fill="#F0D9BE" stroke="${S}" stroke-width="2.4"/>
      <path d="M42 58 C40 44 70 44 70 58 C62 52 50 52 42 58 Z" fill="#221F1C" stroke="${S}" stroke-width="2"/>
      <path d="M49 66 q3 2 6 0 M59 66 q3 2 6 0" stroke="${S}" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M68 70 L174 70 L174 102 L68 102 Z" fill="#2D6E8E" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <rect x="26" y="102" width="150" height="8" fill="#B08452" stroke="${S}" stroke-width="2.4"/>
      <g font-family="sans-serif" font-weight="700" fill="#17324A"><text x="92" y="42" font-size="18">Z</text><text x="112" y="28" font-size="14">z</text><text x="126" y="18" font-size="11">z</text></g>`
  }[kind];
  const label = {wake:'일어나요', wash:'씻어요', eat:'먹어요', go:'가요', sleep:'자요'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${kind === 'sleep' ? '' : m2Ground}${g}</svg>`;
}

const M3_ONLY = {
  sky_morning: m3Sky('morning'), sky_noon: m3Sky('noon'), sky_evening: m3Sky('evening'), sky_night: m3Sky('night'),
  act_wake: m3Act('wake'), act_wash: m3Act('wash'), act_eat: m3Act('eat'), act_go: m3Act('go'), act_sleep: m3Act('sleep')
};
for(let i = 1; i <= 12; i++) M3_ONLY['clock' + i] = m3Clock(i);
/* 셋째 달 화면에서는 둘째 달 그림도 함께 씁니다. */
const M3_PIC = Object.assign({}, M2_PIC, M3_ONLY);

/* ---- 묶음 ---- */
const M3_BUNDLES = [
  {k:1, title:'아침에 일어나요', topic:'하루 일과와 시계', nights:[1, 2, 3], after:'그동안 가족에게 안녕히 주무세요, 하고 밤 인사를 해 봐.'},
  {k:2, title:'학교에 가요', topic:'학교와 주말 한글학교', nights:[4, 5, 6]},
  {k:3, title:'맛있어요', topic:'음식, 좋아해요와 먹고 싶어요', nights:[7, 8, 9]},
  {k:4, title:'오늘 날씨', topic:'날씨와 계절', nights:[10, 11, 12]},
  {k:5, title:'토리의 하루', topic:'요일과 하루 이야기', nights:[13, 14, 15]}
];

/* ---- 밤 ---- */
const M3_NIGHTS = [

/* ---- 첫째 묶음: 아침에 일어나요 --------------------------------
   아침, 점심, 저녁, 밤과 하루의 다섯 동작. 시계는 둘째 달의 한, 두, 세 그대로 "한 시, 두 시".
   때와 시각 뒤에 붙는 "에"는 받침과 상관없이 늘 같은 모양이라, 규칙 대신 문장으로 익힙니다.
   밤 인사(잘 자, 안녕히 주무세요)와 아침 인사(잘 잤어?, 안녕히 주무셨어요?)는 말 덩어리로 배웁니다. */
{ n:1, bundle:1, title:'아침, 점심, 저녁',
  steps:[
    {type:'intro', who:'tori',
     t:'셋째 달에 온 걸 환영해! 둘째 달에서는 이름을 붙이는 말을 배웠지? 이번 달에는 움직이는 말을 배워. 첫 밤은 하루를 여는 말이야.',
     big:'아침에 일어나요'},
    {type:'pairs', title:'하루의 때', who:'moi',
     t:'하루를 네 조각으로 나눠 봤어. 해와 달이 어디 있는지 봐. 그림을 누르면 소리가 나.',
     singles:[
       {w:'아침', pic:'sky_morning', en:'morning'}, {w:'점심', pic:'sky_noon', en:'noon, lunch'},
       {w:'저녁', pic:'sky_evening', en:'evening, dinner'}, {w:'밤', pic:'sky_night', en:'night'}],
     tip:{who:'dami', t:'아침, 점심, 저녁은 그때 먹는 밥도 가리킨단다. 아침 먹자, 하면 아침밥을 먹자는 말이지. 밤은 달토끼에서 날마다 세던 그 밤이란다.'}},
    {type:'pairs', title:'하루에 하는 일', who:'moi',
     t:'이번엔 움직이는 말이야. 모두 요로 끝나지? 어른에게도 쓸 수 있는 말이야.',
     singles:[
       {w:'일어나요', pic:'act_wake', en:'get up'}, {w:'씻어요', pic:'act_wash', en:'wash up'},
       {w:'먹어요', pic:'act_eat', en:'eat'}, {w:'가요', pic:'act_go', en:'go'}, {w:'자요', pic:'act_sleep', en:'sleep'}],
     tip:{who:'tori', t:'친구에게는 끝의 요를 떼고 말해. 일어나, 씻어, 먹어, 가, 자. 둘째 달에서 배운 대로야.'}},
    {type:'pairs', title:'아침 인사와 밤 인사', who:'dami',
     t:'한국 집에서는 자기 전과 일어난 뒤에도 인사를 한단다. 할머니 할아버지께는 오른쪽 말을 쓰거라.',
     pairs:[
       {when:'잘 때', pic:'act_sleep', friend:'잘 자', elder:'안녕히 주무세요', en:'good night'},
       {when:'아침에 일어나서', pic:'act_wake', friend:'잘 잤어?', elder:'안녕히 주무셨어요?', en:'did you sleep well? / good morning'}]},
    {type:'choose', title:'무엇을 해요?', who:'tori',
     t:'그림 속 아이가 무엇을 하는지 골라 봐.',
     qs:[
       {pic:'act_eat', o:['먹어요','자요','가요'], a:'먹어요'},
       {pic:'act_wash', o:['일어나요','씻어요','먹어요'], a:'씻어요'},
       {pic:'act_sleep', o:['가요','씻어요','자요'], a:'자요'},
       {pic:'act_go', o:['가요','일어나요','자요'], a:'가요'},
       {pic:'sky_evening', t:'언제예요?', o:['아침','저녁','점심'], a:'저녁'},
       {pic:'p_grandma', t:'할머니가 주무시러 가세요.', en:'Grandma is going to bed.', o:['잘 자','안녕히 주무세요'], a:'안녕히 주무세요', why:'할머니는 어른이라서 ‘안녕히 주무세요’라고 해요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'일어나요', o:['act_sleep','act_wake','act_go'], a:'act_wake'},
       {say:'아침', o:['sky_night','sky_evening','sky_morning'], a:'sky_morning'},
       {say:'먹어요', o:['act_eat','act_wash','act_wake'], a:'act_eat'},
       {say:'밤', o:['sky_noon','sky_night','sky_morning'], a:'sky_night'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'하루의 말을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'아침', en:'morning'}, {w:'자요', en:'sleep'}, {w:'가요', en:'go'}]}
  ],
  dictWords:[{w:'아침', en:'morning'}, {w:'점심', en:'noon, lunch'}, {w:'저녁', en:'evening'}, {w:'밤', en:'night'},
             {w:'자요', en:'sleep'}, {w:'가요', en:'go'}, {w:'일어나요', en:'get up'}] },

{ n:2, bundle:1, title:'일곱 시에 일어나요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 시계를 읽어 볼 거야. 둘째 달에서 배운 한, 두, 세 기억나? 시계에서도 그대로 써. 그리고 때나 시각 뒤에는 ‘에’를 붙여.',
     big:'일곱 시에 일어나요'},
    {type:'clock', title:'몇 시예요?', who:'tori',
     t:'화살표를 누르면 시곗바늘이 움직여. 아래 버튼을 눌러도 돼. 빨간 짧은 바늘이 가리키는 숫자를 읽어.',
     note:'한 시, 두 시, 세 시, 네 시. 살과 개 앞에서처럼 시 앞에서도 줄어들지. 열한 시, 열두 시도 마찬가지란다.'},
    {type:'choose', title:'시계를 읽어요', who:'tori',
     t:'시계를 보고 바르게 읽은 쪽을 골라 봐.',
     qs:[
       {pic:'clock3', t:'몇 시예요?', o:['셋 시예요.','세 시예요.'], a:'세 시예요.', en:"It's three o'clock.", why:'셋은 시 앞에서 세가 돼요.'},
       {pic:'clock7', t:'몇 시예요?', o:['일곱 시예요.','여덟 시예요.'], a:'일곱 시예요.', en:"It's seven o'clock."},
       {pic:'clock11', t:'몇 시예요?', o:['열하나 시예요.','열한 시예요.'], a:'열한 시예요.', en:"It's eleven o'clock.", why:'열하나도 시 앞에서 열한이 돼요.'},
       {pic:'clock2', t:'몇 시예요?', o:['두 시예요.','둘 시예요.'], a:'두 시예요.', en:"It's two o'clock.", why:'둘은 시 앞에서 두가 돼요.'},
       {pic:'clock9', t:'몇 시예요?', o:['아홉 시예요.','열 시예요.'], a:'아홉 시예요.', en:"It's nine o'clock."}]},
    {type:'choose', title:'언제 해요?', who:'moi',
     t:'때 뒤에는 ‘에’를 붙여. 그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'act_wake', t:'언제 일어나요?', o:['아침에 일어나요.','밤에 일어나요.'], a:'아침에 일어나요.', en:'I get up in the morning.'},
       {pic:'act_sleep', t:'언제 자요?', o:['점심에 자요.','밤에 자요.'], a:'밤에 자요.', en:'I sleep at night.'},
       {pic:'clock8', t:'몇 시에 가요?', o:['여덟 시에 가요.','여덟 시가 가요.'], a:'여덟 시에 가요.', en:"I go at eight o'clock.", why:'시각 뒤에는 ‘에’를 붙여요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'몇 시에 일어나요?', tiles:['몇','시에','일어나요?'], en:'What time do you get up?'},
       {s:'일곱 시에 일어나요.', tiles:['일곱','시에','일어나요.'], extra:['시가'], en:"I get up at seven o'clock.", hint:'시각 뒤에는 ‘에’를 붙여요.'},
       {s:'아침에 씻어요.', tiles:['아침에','씻어요.'], extra:['아침이'], en:'I wash up in the morning.', hint:'때 뒤에도 ‘에’를 붙여요.'},
       {s:'저는 아홉 시에 자요.', tiles:['저는','아홉','시에','자요.'], extra:['아홉이'], en:"I go to sleep at nine o'clock.", hint:'누가 하는 말인지(저는)부터, 그다음은 언제.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'움직이는 말에서도 받침이 뒤로 건너간단다. 들어 보거라.',
     cmp:[
       {s:'먹어요', d:'머거요', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'씻어요', d:'씨서요', n:'ㅅ 받침이 뒤로 건너가요'},
       {s:'일어나요', d:'이러나요', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'저녁에', d:'저녀게', n:'ㄱ 받침이 뒤로 건너가요'}],
     note:'[머거요]라고 들려도 먹는 것은 ‘먹’이란다. 먹, 씻, 일처럼 뜻을 가진 앞부분은 모양을 지키고, 뒤에 요가 붙는 게야.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'먹어요', en:'eat', hint:{who:'dami', t:'소리는 [머거요]지만 먹는다는 뜻은 ‘먹’에 있단다. ‘먹’을 먼저 쓰고 ‘어요’를 붙여 보거라.'}},
       {w:'씻어요', en:'wash up', hint:{who:'dami', t:'소리는 [씨서요]지만 ‘씻’에 받침 ㅅ이 있단다. ‘씻’을 쓰고 ‘어요’를 붙여 보거라.'}},
       {w:'시', en:"o'clock"}]}
  ],
  dictWords:[{w:'먹어요', en:'eat'}, {w:'씻어요', en:'wash up'}, {w:'시', en:"o'clock"}] },

{ n:3, bundle:1, title:'토리의 아침',
  steps:[
    {type:'intro', who:'moi',
     t:'토리가 아직 자고 있어. 내가 깨우러 갈 거야. 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'토리야, 일어나!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 일어나! 아침이야.', en:"Tori, get up! It's morning."},
       {who:'tori', t:'음, 몇 시야?', en:'Mm, what time is it?'},
       {who:'moi', t:'일곱 시야. 나는 여섯 시에 일어나.', en:"It's seven. I get up at six."},
       {who:'tori', t:'조금만 더 잘래.', en:'I want to sleep a little more.'},
       {who:'dami', t:'허허, 토리야. 일어나서 씻거라. 아침 먹자.', en:"Ho ho, Tori. Get up and wash. Let's eat breakfast."},
       {who:'tori', t:'네, 할아버지. 지금 일어나요!', en:"Okay, Grandpa. I'm getting up now!"},
       {who:'tori', t:'할아버지, 안녕히 주무셨어요?', en:'Grandpa, did you sleep well?'},
       {who:'dami', t:'오냐, 잘 잤단다.', en:'Yes, I slept well.'}],
     note:{who:'dami', t:'모이가 토리에게는 ‘일어나!’라고 하고, 토리는 나에게 ‘일어나요’라고 했지? 그리고 아침에 어른을 뵈면 ‘안녕히 주무셨어요?’ 하고 인사한단다. 한국 할머니 할아버지들이 아주 좋아하시는 인사지.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'모이가 토리를 깨울 때 몇 시였어요?', o:['여섯 시','일곱 시','여덟 시'], a:'일곱 시', why:'모이는 ‘일곱 시야’라고 했어요.'},
       {t:'모이는 몇 시에 일어나요?', o:['여섯 시','일곱 시','아홉 시'], a:'여섯 시', why:'모이는 ‘나는 여섯 시에 일어나’라고 했어요.'},
       {t:'할아버지는 토리에게 일어나서 무엇을 하라고 했어요?', o:['씻어요','자요','가요'], a:'씻어요', why:'할아버지는 ‘일어나서 씻거라’라고 했어요.'},
       {t:'토리는 할아버지께 아침 인사를 뭐라고 했어요?', o:['잘 잤어?','안녕히 주무셨어요?','안녕히 주무세요'], a:'안녕히 주무셨어요?', why:'아침에 어른께는 ‘안녕히 주무셨어요?’라고 해요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'clock7', line:{who:'moi', t:'토리야, 몇 시에 일어나?'}, en:'Tori, what time do you get up?', o:['일곱 시에 일어나.','일곱 시에 일어나요.'], a:'일곱 시에 일어나.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'clock9', line:{who:'dami', t:'토리야, 몇 시에 자느냐?'}, en:'Tori, what time do you go to sleep?', o:['아홉 시에 자.','아홉 시에 자요.'], a:'아홉 시에 자요.', why:'할아버지는 어른이라서 ‘자요’라고 해요.'},
       {pic:'p_grandpa', t:'밤이에요. 할아버지가 주무시러 가세요.', en:'It is night. Grandpa is going to bed.', o:['잘 자','안녕히 주무세요','안녕히 주무셨어요?'], a:'안녕히 주무세요', why:'자러 가시는 어른께는 ‘안녕히 주무세요’라고 해요. ‘주무셨어요?’는 아침 인사예요.'}]},
    {type:'task', title:'아침 인사, 밤 인사', who:'moi',
     t:'오늘 밤부터 가족에게 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'자기 전에 할머니, 할아버지, 엄마, 아빠께', say:'안녕히 주무세요.', sub:'형제나 친구에게는 ‘잘 자’라고 해요.'},
       {when:'아침에 일어나서 어른을 뵈면', say:'안녕히 주무셨어요?', sub:'형제나 친구에게는 ‘잘 잤어?’라고 해요.'},
       {when:'가족에게 내 하루를 말해요', say:'저는 ______ 시에 일어나요.', sub:'자는 시간도 말해 봐요: 저는 아홉 시에 자요.'}],
     parent:'이번 과제는 하루 이틀이 아니라 한동안 이어서 해 주시면 좋습니다. 자기 전에 "안녕히 주무세요", 아침에 "안녕히 주무셨어요?"는 한국 가정에서 가장 자주 쓰는 인사라, 조부모님과 통화하거나 뵐 때 바로 쓸 수 있습니다. 아이가 먼저 인사하면 어른께서 "오냐, 잘 자라" 같은 말로 받아 주세요. 시각은 정각만 배웠으니 "일곱 시 반"처럼 말해야 할 때는 가장 가까운 정각으로 말해도 괜찮습니다.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인 ----
   셋째 달은 묶음이 모두 열린 뒤에 빠른 확인을 만듭니다. 비어 있으면 밤 고르기에 확인 버튼이 나오지 않습니다. */
const M3_CHECK = [];

/* ---- 받아쓰기 자판: 둘째 달과 같습니다 ---- */
const M3_POOL = M2_POOL;

/* 달 등록 정보 (둘째 달과 같은 모양) */
const THIRD_MOON = {
  key: 'third-moon', title: '셋째 달', path: 'third-moon/',
  store: 'daltokki:v1:third-moon',
  units: M3_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M3_POOL,
  num: 3, name: '셋째 달', title2: '셋째 달, 나의 하루', nextName: '넷째 달',
  topics: '하루 일과, 학교, 음식, 날씨, 나의 하루',
  nights: M3_NIGHTS, bundles: M3_BUNDLES, pic: M3_PIC, keys: M3_POOL, total: M3_TOTAL, check: M3_CHECK,
  prev: {store: 'daltokki:v1:second-moon', total: 15},
  text: {
    welcomePrev: '둘째 달을 다 채웠구나. 이번 달에는 움직이는 말을 배워. 아침에 일어나서, 학교에 가고, 밥을 먹고, 날씨를 말하고, 하루를 이야기해. 열다섯 밤이면 보름달이 떠.',
    welcomeFresh: '셋째 달에서는 하루 동안 하는 일을 말해. 둘째 달의 인사, 가족, 숫자를 알고 오면 훨씬 쉬워. 이미 한국어로 조금 말할 줄 알면 여기서 시작해도 돼.',
    parents: '셋째 달은 하루 일과, 학교(미국 학교와 주말 한글학교), 음식, 날씨, 나의 하루의 다섯 묶음으로, 묶음마다 세 밤입니다. 모두 지금 하는 일(현재형)로만 말하고, 지난 일은 넷째 달에 배웁니다.'
  }
};
