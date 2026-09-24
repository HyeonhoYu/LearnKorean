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
const M7_PIC = Object.assign({}, M6_PIC, M7_ONLY);

/* ---- 묶음 ---- */
const M7_BUNDLES = [
  {k:1, title:'편지를 써요', topic:'편지의 틀과 안부', nights:[1, 2, 3], after:'그동안 할머니 할아버지께 손으로 편지를 한 장 써 봐.'},
  {k:2, title:'일기를 써요', topic:'글에서 쓰는 ~다 말투', nights:[4, 5, 6]},
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
