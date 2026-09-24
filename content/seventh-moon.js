/* ══════════════════════════════════════════════════════════════
   일곱째 달, 나의 이야기 (6단계)
   달토끼의 마지막 달입니다. 글로 쓰고, 생각을 말하고, 마지막에 자기 이야기를 처음부터 끝까지 합니다.
   다섯 묶음: 편지를 써요, 일기를 써요, 내 생각은요(토론), 옛날이야기(해님 달님), 나의 이야기.
   마지막 밤에는 이름을 넣어 인쇄하는 수료증이 있습니다. 이름은 저장하지 않습니다.

   이 파일은 content/second-moon.js 부터 sixth-moon.js 까지 다음에 불러옵니다.
   앞 달의 그림(M6_PIC 안에 앞 달 그림 모두 포함)을 그대로 빌려 쓰고, 일곱째 달 그림만 M7_ONLY 에 더합니다.
   글쓰기 과제는 사이트 자판보다 종이에 손으로 쓰도록 이끕니다. 받아쓰기 자판은 낱말용이기 때문입니다.
   ══════════════════════════════════════════════════════════════ */

const M7_TOTAL = 15;

/* ---- 첫째 묶음 그림: 편지 ---- */
function m7Mail(kind){
  const S = '#221F1C';
  const lines = (x, y, n, w) => [...Array(n)].map((_, i) => `<path d="M${x} ${y + i * 12} L${x + w} ${y + i * 12}" stroke="#C9C0AE" stroke-width="2"/>`).join('');
  const hi = (x, y, w, hh) => `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="3" fill="#F6D98F" stroke="#C1403A" stroke-width="2.4" stroke-dasharray="5 3"/>`;
  const paper = inner => `<rect x="50" y="8" width="100" height="116" rx="4" fill="#FFFDF6" stroke="${S}" stroke-width="3"/>${inner}`;
  const g = {
    letter: paper(`${lines(60, 26, 8, 80)}<path d="M62 24 q8 -4 16 0 t16 0" stroke="#17324A" stroke-width="2" fill="none"/><path d="M104 108 q8 -4 16 0 t16 0" stroke="#17324A" stroke-width="2" fill="none"/>`),
    envelope: `<rect x="30" y="30" width="140" height="80" rx="4" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <path d="M30 30 L100 76 L170 30" fill="none" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <rect x="138" y="38" width="22" height="26" fill="#E8A0A0" stroke="${S}" stroke-width="2"/><path d="M60 92 L110 92 M60 100 L96 100" stroke="#8C7F63" stroke-width="2.4"/>`,
    stamp: `<rect x="62" y="22" width="76" height="88" fill="#FBF7EC" stroke="${S}" stroke-width="3" stroke-dasharray="6 3"/>
      <rect x="72" y="32" width="56" height="68" fill="#9DC3DC" stroke="${S}" stroke-width="2"/><circle cx="100" cy="60" r="14" fill="#F6E3A1" stroke="${S}" stroke-width="2"/>
      <path d="M78 92 Q100 76 122 92" stroke="#3E5B4A" stroke-width="4" fill="none"/>`,
    postbox: `<path d="M8 122 L192 122" stroke="${S}" stroke-width="2.6"/><rect x="92" y="90" width="16" height="32" fill="#5A5248" stroke="${S}" stroke-width="2"/>
      <path d="M64 92 L64 46 Q64 18 100 18 Q136 18 136 46 L136 92 Z" fill="#C1403A" stroke="${S}" stroke-width="3"/>
      <rect x="76" y="46" width="48" height="8" rx="3" fill="#221F1C"/><rect x="80" y="64" width="40" height="18" fill="#FBF7EC" stroke="${S}" stroke-width="1.6"/>`,
    p_to: paper(`${hi(58, 16, 50, 16)}${lines(60, 42, 7, 80)}`),
    p_hello: paper(`${lines(60, 24, 1, 50)}${hi(58, 34, 84, 16)}${lines(60, 60, 5, 80)}`),
    p_body: paper(`${lines(60, 24, 2, 80)}${hi(58, 44, 84, 40)}${lines(60, 94, 2, 80)}`),
    p_bye: paper(`${lines(60, 24, 5, 80)}${hi(58, 84, 84, 14)}${lines(104, 112, 1, 36)}`),
    p_from: paper(`${lines(60, 24, 6, 80)}${hi(98, 100, 46, 16)}`),
    reply: `<rect x="24" y="30" width="96" height="70" rx="4" fill="#FBF7EC" stroke="${S}" stroke-width="2.6" transform="rotate(-8 72 65)"/>
      <rect x="80" y="20" width="96" height="90" rx="4" fill="#FFFDF6" stroke="${S}" stroke-width="3"/>${lines(90, 38, 5, 76)}
      <path d="M150 96 C150 88 160 88 160 96 C160 88 170 88 170 96 C170 104 160 108 160 112 C160 108 150 104 150 96 Z" fill="#C1403A" transform="translate(-8 -8)"/>`
  }[kind];
  const label = {letter:'편지', envelope:'봉투', stamp:'우표', postbox:'우체통', p_to:'받는 사람', p_hello:'첫인사', p_body:'하고 싶은 말', p_bye:'끝인사', p_from:'보내는 사람', reply:'답장'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
const M7_ONLY = {};
['letter', 'envelope', 'stamp', 'postbox', 'p_to', 'p_hello', 'p_body', 'p_bye', 'p_from', 'reply'].forEach(k => { M7_ONLY['ml_' + k] = m7Mail(k); });
/* ---- 둘째 묶음 그림: 일기장 ----
   한국 일기장은 맨 위에 날짜와 날씨 칸, 가운데 그림 칸, 아래에 글 줄이 있습니다. 부분마다 노란 칸으로 짚어 줍니다. */
function m7Diary(part){
  const S = '#221F1C';
  const hi = (x, y, w, hh) => `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="3" fill="#F6D98F" fill-opacity=".7" stroke="#C1403A" stroke-width="2.4" stroke-dasharray="5 3"/>`;
  const icons = `<circle cx="112" cy="20" r="5" fill="#F2C14E" stroke="${S}" stroke-width="1.2"/><path d="M122 22 q2 -6 8 -4 q4 -4 8 0 q4 2 0 6 Z" fill="#FBF7EC" stroke="${S}" stroke-width="1.2"/>
    <path d="M144 22 Q150 12 156 22 Z" fill="#6FA8D0" stroke="${S}" stroke-width="1.2"/>`;
  const base = `<rect x="40" y="8" width="120" height="116" rx="4" fill="#FFFDF6" stroke="${S}" stroke-width="3"/>
    <path d="M48 28 L100 28" stroke="#C9C0AE" stroke-width="2"/>${icons}
    <rect x="48" y="34" width="104" height="44" fill="#E7F0F4" stroke="${S}" stroke-width="1.6"/><circle cx="130" cy="46" r="6" fill="#F2C14E"/><path d="M52 74 L74 54 L90 68 L102 60 L148 74 Z" fill="#9DBA7E"/>
    ${[88, 100, 112].map(y => `<path d="M48 ${y} L152 ${y}" stroke="#C9C0AE" stroke-width="2"/>`).join('')}`;
  const g = {
    page: base,
    date: base + hi(46, 12, 58, 18),
    weather: base + hi(104, 10, 54, 20),
    did: base + hi(46, 82, 108, 22),
    felt: base + hi(46, 104, 108, 14)
  }[part];
  const label = {page:'일기장', date:'날짜', weather:'날씨', did:'한 일', felt:'느낀 점'}[part];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['page', 'date', 'weather', 'did', 'felt'].forEach(k => { M7_ONLY['dy_' + k] = m7Diary(k); });
const M7_PIC = Object.assign({}, M6_PIC, M7_ONLY);

/* ---- 묶음 ---- */
const M7_BUNDLES = [
  {k:1, title:'편지를 써요', topic:'편지의 틀과 안부', nights:[1, 2, 3], after:'그동안 할머니 할아버지께 손으로 편지를 한 장 써 봐.'},
  {k:2, title:'일기를 써요', topic:'글에서 쓰는 ~다 말투', nights:[4, 5, 6], after:'그동안 날마다 일기를 한 편씩 써 봐.'},
  {k:3, title:'내 생각은요', topic:'의견과 까닭, 토론', nights:[7, 8, 9]},
  {k:4, title:'옛날이야기', topic:'해님 달님과 이야기 짓기', nights:[10, 11, 12]},
  {k:5, title:'나의 이야기', topic:'나를 소개하고 꿈 말하기', nights:[13, 14, 15]}
];

/* ---- 밤 ---- */
const M7_NIGHTS = [

/* ---- 첫째 묶음: 편지를 써요 ------------------------------------------
   편지의 차례(받는 사람, 첫인사, 하고 싶은 말, 끝인사, 보내는 사람)와 편지 말(께, 에게, 올림, 드림).
   둘째 밤에 약속하는 말 "~ㄹ게요"를 배우고, 편지 꾸미기 화면으로 할머니께 보내는 편지를 완성합니다.
   셋째 밤은 할머니의 답장. 어른이 아이에게 쓸 때(토리에게, 할머니가)와 아이가 어른께 쓸 때(할머니께, 토리 올림)를 견줍니다. */
{ n:1, bundle:1, title:'편지의 모양',
  steps:[
    {type:'intro', who:'moi',
     t:'일곱째 달에 온 걸 환영해! 달토끼의 마지막 달이야. 이번 달에는 말한 것을 글로 써 봐. 첫 묶음은 편지야.',
     big:'할머니께 편지를 써요'},
    {type:'pairs', title:'편지와 우편', who:'moi',
     t:'편지를 보낼 때 쓰는 것들이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'편지', pic:'ml_letter', en:'letter'}, {w:'봉투', pic:'ml_envelope', en:'envelope'}, {w:'우표', pic:'ml_stamp', en:'stamp'},
       {w:'우체통', pic:'ml_postbox', en:'mailbox'}, {w:'답장', pic:'ml_reply', en:'reply letter'}],
     tip:{who:'dami', t:'한국 우체통은 빨간색이란다. 미국 우체통은 파란색이지. 같은 편지라도 나라마다 우체통 색이 다르단다.'}},
    {type:'pairs', title:'받는 사람, 보내는 사람', who:'dami',
     t:'편지 맨 위와 맨 아래에 쓰는 말이란다. 친구에게 쓸 때와 어른께 쓸 때가 다르지.',
     pairs:[
       {when:'맨 위, 받는 사람', pic:'ml_p_to', friend:'모이에게', elder:'할머니께', en:'To ...'},
       {when:'맨 아래, 보내는 사람', pic:'ml_p_from', friend:'토리가', elder:'토리 올림', en:'From ...'}],
     tip:{who:'tori', t:'에게 대신 께, 넷째 달에 배운 그 께야. 올림은 어른께 편지를 올린다는 뜻이야. 드림이라고 써도 돼.'}},
    {type:'sequence', title:'편지의 차례', who:'tori',
     t:'편지는 차례가 있어. 위에서 아래로 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'ml_p_to', t:'받는 사람을 써요.'}, {pic:'ml_p_hello', t:'첫인사를 써요.'}, {pic:'ml_p_body', t:'하고 싶은 말을 써요.'}, {pic:'ml_p_bye', t:'끝인사를 써요.'}, {pic:'ml_p_from', t:'보내는 사람을 써요.'}]}]},
    {type:'choose', title:'편지 말', who:'tori',
     t:'알맞은 말을 골라 봐.',
     qs:[
       {pic:'ml_p_to', t:'할머니께 편지를 써요. 맨 위에는?', o:['할머니께','할머니에게','할머니가'], a:'할머니께', why:'어른께는 께를 써요.'},
       {pic:'ml_p_from', t:'할아버지께 쓴 편지, 맨 아래에는?', o:['토리가','토리 올림'], a:'토리 올림'},
       {pic:'ml_p_to', t:'친구 모이에게 편지를 써요. 맨 위에는?', o:['모이께','모이에게'], a:'모이에게', why:'친구에게는 에게를 써요.'},
       {pic:'ml_stamp', o:['우표','봉투','답장'], a:'우표'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'봉투', o:['ml_letter','ml_envelope','ml_stamp'], a:'ml_envelope'},
       {say:'우체통', o:['ml_postbox','pl_shop','ml_reply'], a:'ml_postbox'},
       {say:'끝인사', o:['ml_p_to','ml_p_bye','ml_p_hello'], a:'ml_p_bye'},
       {say:'답장', o:['ml_reply','ml_letter','ml_stamp'], a:'ml_reply'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'편지 말을 써 봐.',
     items:[{w:'편지', en:'letter'}, {w:'우표', en:'stamp'}, {w:'봉투', en:'envelope'}]}
  ],
  dictWords:[{w:'편지', en:'letter'}, {w:'봉투', en:'envelope'}, {w:'우표', en:'stamp'}, {w:'우체통', en:'mailbox'},
             {w:'답장', en:'reply'}, {w:'올림', en:'(respectfully) from'}] },

{ n:2, bundle:1, title:'보고 싶어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 할머니께 보내는 편지를 직접 완성할 거야. 그 전에 편지에 자주 쓰는 말과, 약속하는 말 ‘~ㄹ게요’를 배워.',
     big:'할머니, 보고 싶어요'},
    {type:'pairs', title:'편지에 자주 쓰는 말', who:'moi',
     t:'편지에 자주 쓰는 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'보고 싶어요', pic:'ml_letter', en:'I miss you'}, {w:'잘 지내세요?', pic:'p_grandma', en:'How are you doing?'},
       {w:'건강하세요', pic:'p_grandpa', en:'Stay healthy'}, {w:'사랑해요', pic:'pl5_together', en:'I love you'},
       {w:'또 쓸게요', pic:'ml_p_bye', en:"I'll write again"}]},
    {type:'tense', title:'약속하는 말', who:'dami',
     t:'무엇을 하겠다고 약속할 때는 ㄹ게요를 붙인단다. 받침이 있으면 을게요지. 받침 삼 형제가 여기서도 일하는구나.',
     cols:['지금', '약속'],
     groups:[
       {rule:'받침이 없으면 ㄹ게요', rows:[['써요','쓸게요'], ['가요','갈게요'], ['전화해요','전화할게요']]},
       {rule:'받침이 있으면 을게요', rows:[['먹어요','먹을게요'], ['읽어요','읽을게요']]}],
     note:'갈 거예요는 계획을 말할 때, 갈게요는 상대에게 약속할 때 쓴단다. 할머니께 방학에 꼭 갈게요, 하고 약속해 보거라.'},
    {type:'letter', title:'할머니께 편지 쓰기', who:'tori',
     t:'칸마다 마음에 드는 문장을 골라 봐. 오른쪽에 편지가 만들어져. 마지막에 네 이름을 쓰면 완성이야.',
     parts:[
       {label:'받는 사람', opts:['할머니께', '할아버지께', '할머니 할아버지께']},
       {label:'첫인사', opts:['안녕하세요?', '보고 싶은 할머니, 안녕하세요?', '잘 지내세요?']},
       {label:'요즘 나의 이야기', opts:['저는 한글학교에 다녀요.', '저는 한국어를 배우고 있어요.', '저는 요즘 자전거를 탈 수 있어요.']},
       {label:'하고 싶은 말', opts:['할머니가 보고 싶어요.', '할머니가 해 주신 떡이 먹고 싶어요.', '방학에 꼭 갈게요.']},
       {label:'끝인사', opts:['건강하세요.', '사랑해요.', '또 편지 쓸게요.']}],
     sign:'올림', namePh:'내 이름',
     tip:{who:'moi', t:'인쇄하기를 누르면 편지만 종이로 뽑을 수 있어. 뽑아서 할머니께 보내 봐!'}},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 편지 문장을 만들어 봐.',
     qs:[
       {s:'할머니, 보고 싶어요.', tiles:['할머니,','보고','싶어요.'], en:'Grandma, I miss you.'},
       {s:'방학에 꼭 갈게요.', tiles:['방학에','꼭','갈게요.'], extra:['갔어요.'], en:"I'll be sure to visit during vacation."},
       {s:'할머니, 건강하세요.', tiles:['할머니,','건강하세요.'], extra:['건강해.'], en:'Grandma, stay healthy.'},
       {s:'다음에 또 편지 쓸게요.', tiles:['다음에','또','편지','쓸게요.'], en:"I'll write again next time."}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'약속하는 말 ㄹ게요의 게는 께처럼 들린단다. 들어 보거라.',
     cmp:[
       {s:'갈게요', d:'갈께요', n:'ㄹ 뒤의 게는 께처럼 나요'},
       {s:'읽을게요', d:'일글께요', n:'ㄱ이 건너가고, 게는 께처럼 나요'},
       {s:'보고 싶어요', d:'보고 시퍼요', n:'ㅍ 받침이 뒤로 건너가요'},
       {s:'편지를', d:'편지를', n:'받침이 없어서 그대로 나요'}],
     note:'[갈께요]로 들려도 쓸 때는 ‘갈게요’란다. 다섯째 달의 [갈 꺼예요]가 ‘갈 거예요’인 것과 같은 이치지. 편지는 소리가 아니라 글자로 남으니 더 조심해서 쓰거라.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'갈게요', en:"I'll go", hint:{who:'dami', t:'소리는 [갈께요]지만 ‘게’란다. ㄲ이 아니라 ㄱ을 쓰거라.'}},
       {w:'싶어요', en:'want to', hint:{who:'dami', t:'소리는 [시퍼요]지만 ‘싶’에 받침 ㅍ이 있단다.'}},
       {w:'건강하세요', en:'stay healthy'}]}
  ],
  dictWords:[{w:'갈게요', en:"I'll go"}, {w:'싶어요', en:'want to'}, {w:'건강하세요', en:'stay healthy'}, {w:'사랑해요', en:'I love you'}] },

{ n:3, bundle:1, title:'할머니의 답장',
  steps:[
    {type:'intro', who:'tori',
     t:'한국에서 할머니 답장이 왔어! 모이랑 같이 읽어 볼 거야. 먼저 글자 없이 귀로만 들어 봐.',
     big:'사랑하는 토리에게'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 할머니 답장을 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 할머니께 답장이 왔어!', en:"Moi, Grandma's reply came!"},
       {who:'moi', t:'와! 빨리 읽어 줘!', en:'Wow! Read it quickly!'},
       {who:'halmi', t:'사랑하는 토리에게. 편지 잘 받았다.', en:'Dear Tori, I got your letter.'},
       {who:'halmi', t:'한국어로 쓴 편지를 읽고 할머니는 눈물이 날 만큼 기뻤단다.', en:'Reading a letter written in Korean made me so happy I almost cried.'},
       {who:'halmi', t:'이곳은 벌써 단풍이 들었다. 나비도 잘 지낸단다.', en:'The leaves have already turned here. Nabi is doing well too.'},
       {who:'halmi', t:'방학에 꼭 오너라. 할머니가 떡을 만들어 줄게. 건강하게 잘 지내라. 할머니가.', en:"Be sure to come during vacation. I'll make you rice cakes. Stay healthy. Love, Grandma."},
       {who:'tori', t:'할머니가 우리 편지를 읽고 기뻐하셨대!', en:'Grandma was happy to read our letter!'},
       {who:'moi', t:'토리야, 우리 또 쓰자!', en:"Tori, let's write again!"}],
     note:{who:'dami', t:'토리는 할머니께 쓸 때 ‘할머니께’, ‘토리 올림’이라고 썼지. 할머니는 토리에게 쓸 때 ‘토리에게’, ‘할머니가’라고 쓰셨구나. 어른이 아이에게 쓸 때와 아이가 어른께 쓸 때가 이렇게 다르단다. 그리고 나비는 여섯째 달에 찾은 그 고양이지.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 답장을 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'할머니는 편지를 읽고 기분이 어땠어요?', o:['기뻤어요','슬펐어요','화났어요'], a:'기뻤어요', why:'할머니는 눈물이 날 만큼 기뻤다고 하셨어요.'},
       {t:'한국은 지금 어떤 계절이에요?', o:['단풍이 든 가을','눈 오는 겨울','꽃 피는 봄'], a:'단풍이 든 가을', why:'할머니는 ‘벌써 단풍이 들었다’라고 하셨어요.'},
       {t:'할머니는 방학에 무엇을 해 주신대요?', o:['떡을 만들어 주신대요','옷을 사 주신대요'], a:'떡을 만들어 주신대요'},
       {t:'할머니 답장의 맨 아래에는 무엇이라고 쓰였어요?', o:['할머니가','할머니 올림','할머니께'], a:'할머니가', why:'어른이 아이에게 쓸 때는 ‘할머니가’라고 써요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누구에게 쓰는지 잘 보고 골라 봐.',
     qs:[
       {pic:'p_grandpa', t:'할아버지께 편지를 써요. 맨 위에는?', o:['할아버지께','할아버지에게'], a:'할아버지께'},
       {line:{who:'moi', t:'토리야, 나한테도 편지 써 줘!'}, en:'Tori, write me a letter too!', o:['응, 꼭 쓸게!','네, 꼭 쓸게요.'], a:'응, 꼭 쓸게!', why:'모이는 친구라서 편한 말로 약속해요.'},
       {pic:'ml_p_bye', t:'할머니께 쓴 편지의 끝인사로 알맞은 것은?', o:['건강하세요.','잘 있어.'], a:'건강하세요.', why:'어른께는 높이는 말로 끝인사를 해요.'}]},
    {type:'task', title:'손으로 쓰는 편지', who:'moi',
     t:'오늘 만든 편지를 종이에 손으로 옮겨 써 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'맨 위에', say:'할머니께', sub:'친구에게 쓰면 ______에게.'},
       {when:'가운데에', say:'할머니, 보고 싶어요. 방학에 꼭 갈게요.', sub:'요즘 나의 이야기도 한두 줄 더 써요.'},
       {when:'맨 아래에', say:'______ 올림', sub:'날짜도 함께 써요.'}],
     parent:'편지 꾸미기 화면에서 인쇄한 편지를 그대로 보내셔도 좋지만, 가능하면 아이가 종이에 손으로 옮겨 쓰게 해 주세요. 조부모님께는 손글씨 편지가 무엇보다 큰 선물입니다. 한국으로 보내는 국제 우편은 우체국에서 보낼 수 있고, 사진을 찍어 메신저로 보내도 괜찮습니다. 조부모님께 답장을 부탁드리면, 아이가 한국어로 쓴 글을 직접 읽는 좋은 기회가 됩니다.'}
  ],
  dictWords:[] },

/* ---- 둘째 묶음: 일기를 써요 -------------------------------------------
   일기의 차례(날짜, 날씨, 한 일, 느낀 점)와 글에서만 쓰는 "~다" 말투.
   일기는 지난 일이라 "갔어요 → 갔다", "기뻤어요 → 기뻤다"처럼 지난 일의 ~었다만 다룹니다.
   지금 일의 ~는다/~ㄴ다는 규칙이 복잡해서 넣지 않습니다.
   일기는 듣는 사람이 없는 글이라 "저는" 대신 "나는"을 씁니다. */
{ n:4, bundle:2, title:'일기의 모양',
  steps:[
    {type:'intro', who:'moi',
     t:'다섯째 달에 그림일기를 썼던 거 기억나? 오늘은 조금 더 큰 형, 누나들이 쓰는 일기야. 일기에는 말할 때와 다른 특별한 말투가 있어.',
     big:'오늘은 즐거웠다'},
    {type:'pairs', title:'일기장', who:'moi',
     t:'일기장의 부분이야. 노란 칸을 잘 봐. 그림을 누르면 소리가 나.',
     singles:[
       {w:'일기장', pic:'dy_page', en:'diary notebook'}, {w:'날짜', pic:'dy_date', en:'date'}, {w:'날씨', pic:'dy_weather', en:'weather'},
       {w:'한 일', pic:'dy_did', en:'what I did'}, {w:'느낀 점', pic:'dy_felt', en:'how I felt'}],
     tip:{who:'dami', t:'한국 일기장은 맨 위에 날짜와 날씨를 적는 칸이 있단다. 해, 구름, 비 그림에 동그라미를 치는 일기장도 많지.'}},
    {type:'sequence', title:'일기의 차례', who:'tori',
     t:'일기는 이 차례로 써. 위에서 아래로 눌러 줘.',
     qs:[
       {cards:[{pic:'dy_date', t:'날짜를 써요.'}, {pic:'dy_weather', t:'날씨를 써요.'}, {pic:'dy_did', t:'한 일을 써요.'}, {pic:'dy_felt', t:'느낀 점을 써요.'}]}]},
    {type:'tense', title:'말할 때와 일기에 쓸 때', who:'dami',
     t:'일기에는 말할 때의 어요 대신 다를 쓴단다. 었어요에서 어요를 떼고 다를 붙이면 되지.',
     cols:['말할 때', '일기에 쓸 때'],
     groups:[
       {rule:'어요를 떼고 다', rows:[['갔어요','갔다'], ['먹었어요','먹었다'], ['놀았어요','놀았다'], ['했어요','했다'], ['기뻤어요','기뻤다'], ['재미있었어요','재미있었다']]}],
     note:'이 다 말투는 듣는 사람이 없는 글에서 쓴단다. 일기, 책, 신문이 다 이렇게 쓰지. 그래서 일기에는 저는 대신 나는이라고 쓴단다. 누구에게 높일 필요가 없으니까.'},
    {type:'choose', title:'일기에는 어떻게 써요?', who:'tori',
     t:'일기에 알맞게 쓴 쪽을 골라 봐.',
     qs:[
       {pic:'act_go', t:'학교에 갔어요. 일기에는?', o:['학교에 갔다.','학교에 갔어요.'], a:'학교에 갔다.'},
       {pic:'mood_happy', t:'기뻤어요. 일기에는?', o:['기뻤어요.','기뻤다.'], a:'기뻤다.'},
       {pic:'dy_page', t:'일기에서 나를 말할 때는?', o:['저는','나는'], a:'나는', why:'일기는 누구에게 높일 필요가 없어서 나는이에요.'},
       {pic:'p_grandma', t:'할머니께 말씀드릴 때는?', o:['학교에 갔다.','학교에 갔어요.'], a:'학교에 갔어요.', why:'말할 때는 어요를 써요. 다는 글에서 써요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 일기장 부분을 찾아 봐.',
     qs:[
       {say:'날짜', o:['dy_weather','dy_date','dy_felt'], a:'dy_date'},
       {say:'느낀 점', o:['dy_felt','dy_did','dy_date'], a:'dy_felt'},
       {say:'날씨', o:['dy_page','dy_did','dy_weather'], a:'dy_weather'},
       {say:'한 일', o:['dy_did','dy_felt','dy_weather'], a:'dy_did'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'일기 말을 써 봐.',
     items:[{w:'일기', en:'diary'}, {w:'날짜', en:'date'}, {w:'했다', en:'did (written style)'}]}
  ],
  dictWords:[{w:'일기', en:'diary'}, {w:'일기장', en:'diary notebook'}, {w:'날짜', en:'date'}, {w:'했다', en:'did'}, {w:'나는', en:'I (written style)'}] },

{ n:5, bundle:2, title:'오늘은 재미있었다',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 일기 한 장을 직접 만들어 볼 거야. 날짜, 날씨, 한 일, 느낀 점을 골라서 ~다로 써 봐.',
     big:'오늘은 재미있었다'},
    {type:'pairs', title:'일기에 자주 쓰는 말', who:'moi',
     t:'일기에 자주 쓰는 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'맑았다', pic:'w_sunny', en:'it was sunny'}, {w:'비가 왔다', pic:'w_rain', en:'it rained'},
       {w:'재미있었다', pic:'mood_happy', en:'it was fun'}, {w:'힘들었다', pic:'mood_tired', en:'it was hard'},
       {w:'다음에 또 하고 싶다', pic:'s_play', en:'I want to do it again'}],
     tip:{who:'tori', t:'하고 싶어요도 일기에는 하고 싶다라고 써. 끝을 다로 바꾸는 거야.'}},
    {type:'letter', title:'나의 일기 한 장', who:'tori',
     t:'칸마다 하나씩 골라 봐. 오른쪽에 일기 한 장이 만들어져.',
     parts:[
       {label:'날짜', opts:['시월 구일 토요일', '구월 이십일 일요일', '십이월 이십오일 금요일']},
       {label:'날씨', opts:['날씨: 맑았다.', '날씨: 비가 왔다.', '날씨: 눈이 왔다.']},
       {label:'한 일 하나', opts:['나는 친구와 공원에 갔다.', '나는 한글학교에 갔다.', '나는 할머니께 전화를 드렸다.']},
       {label:'한 일 둘', opts:['같이 자전거를 탔다.', '책을 읽고 숙제를 했다.', '떡볶이를 먹었다.']},
       {label:'느낀 점', opts:['정말 재미있었다.', '조금 힘들었지만 기뻤다.', '다음에 또 하고 싶다.']}],
     noName:true, readLabel:'일기 읽어 주기',
     tip:{who:'moi', t:'인쇄해서 일기장에 붙여도 좋아. 하지만 제일 좋은 건 네 손으로 직접 쓰는 거야!'}},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 일기 문장을 만들어 봐.',
     qs:[
       {s:'오늘은 날씨가 맑았다.', tiles:['오늘은','날씨가','맑았다.'], extra:['맑았어요.'], en:'The weather was clear today.'},
       {s:'나는 친구와 공원에 갔다.', tiles:['나는','친구와','공원에','갔다.'], extra:['저는'], en:'I went to the park with a friend.', hint:'일기에는 나는을 써요.'},
       {s:'떡볶이를 먹었다.', tiles:['떡볶이를','먹었다.'], extra:['먹었어요.'], en:'I ate tteokbokki.'},
       {s:'정말 재미있었다.', tiles:['정말','재미있었다.'], en:'It was really fun.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'~었다의 다는 앞의 ㅆ 받침 때문에 따처럼 세게 들린단다.',
     cmp:[
       {s:'갔다', d:'갇따', n:'ㅆ 받침은 ㄷ처럼, 뒤의 ㄷ은 ㄸ처럼 나요'},
       {s:'먹었다', d:'머걷따', n:'ㄱ이 건너가고, 뒤의 다는 따처럼 나요'},
       {s:'맑았다', d:'말갇따', n:'ㄺ의 ㄱ이 건너가고, 다는 따처럼 나요'},
       {s:'재미있었다', d:'재미이썯따', n:'ㅆ이 건너가고, 다는 따처럼 나요'}],
     note:'[갇따]로 들려도 쓸 때는 ‘갔다’란다. 가와 ㅆ 받침, 그리고 다. 지난 일의 ㅆ을 꼭 챙기거라. 이 ㅆ이 없으면 일기가 지난 일이 아니게 되지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'갔다', en:'went', hint:{who:'dami', t:'소리는 [갇따]지만 ‘가’ 아래 ㅆ, 그리고 ‘다’란다.'}},
       {w:'먹었다', en:'ate', hint:{who:'dami', t:'소리는 [머걷따]지만 ‘먹’, ‘었’, ‘다’를 차례로 쓴단다.'}},
       {w:'맑았다', en:'was clear'}]}
  ],
  dictWords:[{w:'갔다', en:'went'}, {w:'먹었다', en:'ate'}, {w:'맑았다', en:'was clear'}, {w:'재미있었다', en:'was fun'}, {w:'기뻤다', en:'was happy'}] },

{ n:6, bundle:2, title:'토리의 일기장',
  steps:[
    {type:'intro', who:'tori',
     t:'한글날 발표를 한 날, 나는 일기를 썼어. 할아버지께 읽어 드릴 거야. 먼저 글자 없이 귀로만 들어 봐.',
     big:'나의 일기'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리가 일기를 읽을 때와 말할 때 말투가 어떻게 다른지 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'할아버지, 제 일기를 읽어 드릴게요.', en:"Grandpa, I'll read you my diary."},
       {who:'tori', t:'시월 구일 토요일. 날씨는 맑았다.', en:'Saturday, October 9. The weather was clear.'},
       {who:'tori', t:'오늘은 한글날이었다. 나는 한글학교에서 발표를 했다.', en:'Today was Hangul Day. I gave a presentation at Korean school.'},
       {who:'tori', t:'처음에는 무서웠다. 그런데 모이가 옆에서 도와주었다.', en:'At first I was scared. But Moi helped me from beside me.'},
       {who:'tori', t:'발표가 끝나고 모두 박수를 쳤다. 정말 기뻤다.', en:'When the presentation ended, everyone clapped. I was really happy.'},
       {who:'dami', t:'허허, 일기를 참 잘 썼구나. 말할 때는 기뻤어요, 일기에는 기뻤다라고 썼지?', en:'Ho ho, you wrote your diary very well. You say "기뻤어요" when talking, but wrote "기뻤다" in your diary, right?'},
       {who:'moi', t:'토리야, 나도 네 일기에 나와?', en:'Tori, am I in your diary too?'},
       {who:'tori', t:'응, 모이가 도와줬다고 썼어!', en:'Yes, I wrote that you helped me!'}],
     note:{who:'dami', t:'토리가 일기를 읽을 때는 ~다로, 나에게 말할 때는 ~요로, 모이에게는 편한 말로 했구나. 한 사람이 세 가지 말투를 쓸 줄 알면 한국어를 제대로 쓰는 게지. 여섯째 달의 한글날 발표가 이렇게 일기가 되었구나.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 일기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'일기의 날짜는 언제예요?', o:['시월 구일','유월 십오일','삼월 오일'], a:'시월 구일'},
       {t:'그날 날씨는 어땠어요?', o:['맑았다','비가 왔다','눈이 왔다'], a:'맑았다'},
       {t:'발표 처음에 토리는 기분이 어땠어요?', o:['무서웠다','심심했다','화났다'], a:'무서웠다'},
       {t:'누가 토리를 도와주었어요?', o:['모이','할머니','선생님'], a:'모이'}]},
    {type:'choose', title:'토리가 되어 써요', who:'tori',
     t:'이번엔 네가 토리야. 말할 때와 쓸 때를 잘 구별해 봐.',
     qs:[
       {pic:'dy_page', t:'일기장에 오늘 한 일을 써요.', en:'Write in your diary.', o:['나는 공원에 갔다.','저는 공원에 갔어요.'], a:'나는 공원에 갔다.', why:'일기에는 나는과 ~다를 써요.'},
       {line:{who:'dami', t:'토리야, 오늘 어디에 갔느냐?'}, en:'Tori, where did you go today?', o:['공원에 갔다.','공원에 갔어요.'], a:'공원에 갔어요.', why:'할아버지께 말할 때는 ~요로 해요.'},
       {line:{who:'moi', t:'토리야, 오늘 어디 갔어?'}, en:'Tori, where did you go today?', o:['공원에 갔어.','공원에 갔다.'], a:'공원에 갔어.', why:'친구에게 말할 때는 편한 말로 해요.'}]},
    {type:'task', title:'사흘 일기', who:'moi',
     t:'사흘 동안 날마다 일기를 한 편씩 써 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'맨 위에', say:'______월 ______일 ______요일. 날씨: ______.', sub:'맑았다, 흐렸다, 비가 왔다처럼.'},
       {when:'한 일을 두세 문장으로', say:'나는 ______에 갔다. 그리고 ______을 했다.', sub:'다섯째 달의 그리고, 그래서, 그런데로 이어요.'},
       {when:'맨 끝에 느낀 점', say:'정말 ______었다.', sub:'재미있었다, 기뻤다, 힘들었다.'}],
     parent:'사흘 동안 아이가 공책에 손으로 일기를 쓰게 해 주세요. 세 문장이면 충분합니다. 이번 묶음에서 처음 배운 "~다" 말투는 한국 책과 신문이 쓰는 글말이라, 앞으로 한국어 책을 읽는 데 꼭 필요합니다. 맞춤법은 틀려도 괜찮고, 문장 끝이 "~었다"로 끝났는지만 봐 주세요. 아이가 원하면 일기를 조부모님께 사진으로 보내 드려도 좋습니다.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인: 일곱째 달은 묶음이 모두 열린 뒤에 만듭니다 ---- */
const M7_CHECK = [];

/* ---- 받아쓰기 자판: 여섯째 달과 같습니다 ---- */
const M7_POOL = M6_POOL;

/* 달 등록 정보 */
const SEVENTH_MOON = {
  key: 'seventh-moon', title: '일곱째 달', path: 'seventh-moon/',
  store: 'daltokki:v1:seventh-moon',
  units: M7_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M7_POOL,
  num: 7, name: '일곱째 달', title2: '일곱째 달, 나의 이야기', nextName: '다음 달',
  topics: '편지, 일기, 내 생각, 옛날이야기, 나의 이야기',
  nights: M7_NIGHTS, bundles: M7_BUNDLES, pic: M7_PIC, keys: M7_POOL, total: M7_TOTAL, check: M7_CHECK,
  prev: {store: 'daltokki:v1:sixth-moon', total: 15},
  text: {
    welcomePrev: '여섯째 달을 다 채웠구나. 이제 달토끼의 마지막 달이야. 편지와 일기를 쓰고, 생각을 말하고, 옛날이야기를 짓고, 마지막에 네 이야기를 해 보자. 열다섯 밤이면 일곱 번째 보름달이 떠.',
    welcomeFresh: '일곱째 달에서는 글을 쓰고 생각을 말해. 여섯째 달까지의 말을 알고 오면 훨씬 쉬워. 이미 한국어를 잘하면 여기서 시작해도 돼.',
    parents: '일곱째 달은 편지, 일기, 토론, 옛날이야기, 나의 이야기의 다섯 묶음으로, 묶음마다 세 밤입니다. 글쓰기는 사이트 자판보다 종이에 손으로 쓰도록 이끌고, 마지막 밤에는 아이 이름을 넣어 인쇄하는 수료증이 있습니다(이름은 저장하지 않습니다).'
  }
};
