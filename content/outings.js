/* ══════════════════════════════════════════════════════════════
   달토끼 나들이
   일곱 달 과정 옆에 두는 세 밤짜리 주제 꾸러미입니다. 과정 순서와 상관없이 골라서 합니다.
   꾸러미마다 몇째 달을 마친 아이에게 알맞은지 묶음 설명에 적어 둡니다.
   꾸러미: 전래 놀이, 한국 여행 지도.

   이 파일은 content/second-moon.js 부터 seventh-moon.js 까지 다음에 불러옵니다.
   앞 달의 그림(M7_PIC 안에 앞 달 그림 모두 포함)을 그대로 빌려 쓰고, 나들이 그림만 OUT_ONLY 에 더합니다.
   밤 번호는 꾸러미를 이어서 셉니다(전래 놀이 1~3, 한국 여행 4~6).
   ══════════════════════════════════════════════════════════════ */

const OUT_TOTAL = 6;

/* ---- 전래 놀이 그림 ---- */
function outPlay(kind){
  const S = '#221F1C';
  const stone = (x, y, c) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="7" fill="${c}" stroke="${S}" stroke-width="2"/><ellipse cx="${x - 3}" cy="${y - 2}" rx="3" ry="2" fill="#fff" opacity=".4"/>`;
  const ddakji = (x, y, k, c1, c2) => `<g transform="translate(${x} ${y}) scale(${k || 1})"><rect x="-26" y="-26" width="52" height="52" fill="${c1}" stroke="${S}" stroke-width="2.4"/>
    <path d="M-26 -26 L0 0 L26 -26 M-26 26 L0 0 L26 26" stroke="${S}" stroke-width="1.8" fill="none"/><path d="M-26 -26 L0 0 L-26 26 Z" fill="${c2}" stroke="${S}" stroke-width="1.8"/><path d="M26 -26 L0 0 L26 26 Z" fill="${c2}" stroke="${S}" stroke-width="1.8"/></g>`;
  const jegi = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="12" ry="5" fill="#8A6A4A" stroke="${S}" stroke-width="2"/>
    ${[-10, -5, 0, 5, 10].map((dx, i) => `<path d="M${dx / 2} -2 Q${dx} -22 ${dx * 1.8} -40" stroke="${['#C1403A', '#F2C14E', '#2D6E8E', '#6E8F58', '#D98B7E'][i]}" stroke-width="4" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
  const top = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-22 -30 L22 -30 L0 10 Z" fill="#C1403A" stroke="${S}" stroke-width="2.4" stroke-linejoin="round"/>
    <ellipse cx="0" cy="-30" rx="22" ry="7" fill="#F2C14E" stroke="${S}" stroke-width="2.2"/><path d="M-14 -18 L14 -18 M-8 -6 L8 -6" stroke="#FBF7EC" stroke-width="2.4"/>
    <path d="M-34 -6 q-6 -6 0 -12 M34 -6 q6 -6 0 -12" stroke="#8C7F63" stroke-width="2" fill="none"/></g>`;
  const floor = '<path d="M8 120 L192 120" stroke="#221F1C" stroke-width="2.6"/>';
  const g = {
    gonggi: `${floor}${stone(60, 108, '#C1403A')}${stone(86, 112, '#F2C14E')}${stone(112, 108, '#2D6E8E')}${stone(138, 112, '#6E8F58')}${stone(100, 50, '#D98B7E')}
      <path d="M100 62 L100 96" stroke="#8C7F63" stroke-width="2" stroke-dasharray="4 4"/><path d="M92 70 L100 60 L108 70" stroke="#8C7F63" stroke-width="2" fill="none"/>`,
    ddakji: `${floor}${ddakji(80, 90, 1, '#2D6E8E', '#9DC3DC')}${ddakji(136, 96, .8, '#C1403A', '#E8A0A0')}`,
    jegi: `${floor}${jegi(100, 70)}${m2Person('kid', 60, 'stand', 1)}<path d="M72 112 Q88 100 92 84" stroke="#8C7F63" stroke-width="2" fill="none" stroke-dasharray="4 3"/>`,
    top: `${floor}${top(100, 108)}`,
    yut: M6_PIC.seol_yut ? M6_PIC.seol_yut.replace(/<\/?svg[^>]*>/g, '') : '',
    throw: `${floor}${m2Person('kid', 70, 'wave', 1)}${stone(108, 30, '#D98B7E')}<path d="M84 50 Q96 36 104 36" stroke="#8C7F63" stroke-width="2" fill="none" stroke-dasharray="4 3"/>`,
    kick: `${floor}${m2Person('kid', 80, 'walk', 1)}${jegi(120, 70)}<path d="M96 116 Q110 100 118 82" stroke="#8C7F63" stroke-width="2" fill="none" stroke-dasharray="4 3"/>`,
    hit: `${floor}${ddakji(130, 108, .6, '#2D6E8E', '#9DC3DC')}${m2Person('kid', 70, 'give', 1)}
      <g transform="translate(112 80) rotate(-30)"><rect x="-20" y="-20" width="40" height="40" fill="#C1403A" stroke="${S}" stroke-width="2.2"/></g><path d="M140 88 l8 -8 M146 96 l10 -4" stroke="#E3A93C" stroke-width="3" stroke-linecap="round"/>`,
    spin: `${floor}${top(120, 110)}${m2Person('kid', 60, 'give', 1)}<path d="M76 90 Q100 84 118 90" stroke="#8A6A4A" stroke-width="2.4" fill="none"/>`,
    win: `${floor}${m2Person('kid', 70, 'wave', 1)}${m2Person('friend', 136, 'stand', -1)}<g fill="#E3A93C" stroke="${S}" stroke-width="1.2"><path d="M60 16 l3 6 l6 1 l-5 4 l2 6 l-6 -3 l-6 3 l2 -6 l-5 -4 l6 -1 Z"/></g>`,
    lose: `${floor}${m2Person('kid', 70, 'stand', 1)}${m2Person('friend', 136, 'wave', -1)}<path d="M62 26 q-3 7 0 9 q3 -2 0 -9" fill="#9DB4C6" stroke="${S}" stroke-width="1.4"/>`,
    turn: `${floor}${m2Person('kid', 60, 'stand', 1)}${m2Person('friend', 140, 'give', -1)}<path d="M84 60 Q100 44 116 60" stroke="#C1403A" stroke-width="3" fill="none"/><path d="M110 54 L118 62 L108 64" stroke="#C1403A" stroke-width="3" fill="none"/>`,
    f1: `${floor}<rect x="30" y="50" width="140" height="20" fill="#2D6E8E" stroke="${S}" stroke-width="2.2"/><rect x="30" y="80" width="140" height="20" fill="#C1403A" stroke="${S}" stroke-width="2.2"/>`,
    f2: `${floor}<rect x="30" y="56" width="140" height="18" fill="#2D6E8E" stroke="${S}" stroke-width="2.2"/><rect x="91" y="4" width="18" height="120" fill="#C1403A" stroke="${S}" stroke-width="2.2"/>`,
    f3: `${floor}<rect x="70" y="40" width="60" height="50" fill="#2D6E8E" stroke="${S}" stroke-width="2.2"/><path d="M70 40 L100 65 L70 90 Z" fill="#C1403A" stroke="${S}" stroke-width="2"/>
      <path d="M130 40 L100 65 L130 90" fill="none" stroke="${S}" stroke-width="2"/><path d="M150 50 Q160 64 146 76" stroke="#8C7F63" stroke-width="2" fill="none"/><path d="M142 70 L146 78 L154 74" stroke="#8C7F63" stroke-width="2" fill="none"/>`,
    f4: `${floor}${ddakji(100, 70, 1.3, '#2D6E8E', '#C1403A')}<g fill="#E3A93C" stroke="${S}" stroke-width="1.2"><path d="M160 30 l3 6 l6 1 l-5 4 l2 6 l-6 -3 l-6 3 l2 -6 l-5 -4 l6 -1 Z"/></g>`
  }[kind];
  const label = {gonggi:'공기놀이', ddakji:'딱지', jegi:'제기', top:'팽이', yut:'윷놀이', throw:'던져요', kick:'차요', hit:'쳐요', spin:'돌려요', win:'이겼어요', lose:'졌어요', turn:'차례',
    f1:'종이 두 장을 길게 접어요', f2:'십자 모양으로 겹쳐 놓아요', f3:'끝을 접어 넣어요', f4:'딱지가 완성됐어요'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
const OUT_ONLY = {};
['gonggi', 'ddakji', 'jegi', 'top', 'yut', 'throw', 'kick', 'hit', 'spin', 'win', 'lose', 'turn', 'f1', 'f2', 'f3', 'f4'].forEach(k => { OUT_ONLY['play_' + k] = outPlay(k); });
/* ---- 한국 여행 지도 그림 ----
   지도는 남한을 단순한 모양으로 그리고 도시 이름은 쓰지 않습니다(지도에서 찾기의 답이 보이지 않게).
   위쪽이 북쪽입니다. 누를 수 있는 영역은 넷째 달 동네 지도와 같은 방식(data-spot)입니다. */
const outSpot = (id, label, x, y, w, hh) => `<g data-spot="${id}" data-label="${label}"><rect class="hot" x="${x}" y="${y}" width="${w}" height="${hh}" rx="12"/></g>`;
const OUT_KOREA = `<rect width="400" height="260" fill="#CFE0EA"/>
  <path d="M150 14 L270 8 Q286 40 282 80 Q288 120 276 160 Q272 190 262 204 Q236 214 210 206 Q186 214 160 206 Q140 196 136 176 Q124 160 134 140 Q122 120 136 104 Q126 88 140 74 Q130 56 146 44 Q138 30 150 14 Z"
    fill="#DCEBD6" stroke="#221F1C" stroke-width="3" stroke-linejoin="round"/>
  <path d="M190 60 Q220 90 214 130 Q230 160 250 176" stroke="#9DBA7E" stroke-width="10" fill="none" stroke-linecap="round" opacity=".7"/>
  <ellipse cx="176" cy="240" rx="30" ry="12" fill="#DCEBD6" stroke="#221F1C" stroke-width="3"/><path d="M170 236 L176 230 L182 236 Z" fill="#6E8F58"/>
  ${[[166, 58], [262, 150], [254, 190], [176, 240]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#C1403A" stroke="#221F1C" stroke-width="2"/>`).join('')}
  <g font-family="sans-serif" font-weight="700" font-size="14" fill="#17324A"><text x="372" y="30" text-anchor="middle">N</text></g>
  <path d="M372 36 L372 60 M366 44 L372 36 L378 44" stroke="#17324A" stroke-width="2.4" fill="none"/>`;
function outTrip(kind){
  const S = '#221F1C', floor = '<path d="M8 120 L192 120" stroke="#221F1C" stroke-width="2.6"/>';
  const g = {
    map: OUT_KOREA.replace('<rect width="400" height="260" fill="#CFE0EA"/>', '<rect width="400" height="260" fill="#CFE0EA"/>'),
    palace: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/>${floor}
      <path d="M36 60 Q100 30 164 60 Q158 66 150 64 L50 64 Q42 66 36 60 Z" fill="#3E5B4A" stroke="${S}" stroke-width="2.6"/>
      <rect x="52" y="64" width="96" height="24" fill="#C1403A" stroke="${S}" stroke-width="2.4"/>
      <path d="M44 88 Q100 72 156 88 Q150 94 142 92 L58 92 Q50 94 44 88 Z" fill="#3E5B4A" stroke="${S}" stroke-width="2.4"/>
      <rect x="48" y="92" width="104" height="28" fill="#E0C49A" stroke="${S}" stroke-width="2.4"/>
      ${[64, 90, 116].map(x => `<rect x="${x}" y="98" width="20" height="22" rx="10" fill="#5A5248" stroke="${S}" stroke-width="2"/>`).join('')}`,
    river: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/><path d="M0 70 Q60 60 100 76 Q150 92 200 80 L200 110 Q150 120 100 106 Q60 92 0 100 Z" fill="#6FA8D0" stroke="${S}" stroke-width="2"/>
      <path d="M20 66 L180 66" stroke="#5A5248" stroke-width="6"/>${[40, 80, 120, 160].map(x => `<path d="M${x} 66 L${x} 96" stroke="#5A5248" stroke-width="4"/>`).join('')}
      ${[30, 60, 150, 172].map((x, i) => `<rect x="${x}" y="${20 + (i % 2) * 10}" width="16" height="${30 - (i % 2) * 10}" fill="#9DB4C6" stroke="${S}" stroke-width="1.6"/>`).join('')}`,
    beach: `<rect width="200" height="130" rx="6" fill="#CFE0EA"/><path d="M0 70 Q50 64 100 70 T200 70 L200 96 L0 96 Z" fill="#2D6E8E" stroke="${S}" stroke-width="1.6"/>
      <path d="M0 96 L200 96 L200 130 L0 130 Z" fill="#E7D2A8"/><circle cx="160" cy="26" r="14" fill="#F2C14E" stroke="${S}" stroke-width="2"/>
      <path d="M64 126 L66 96" stroke="${S}" stroke-width="2.4"/><path d="M40 98 Q66 72 92 98 Z" stroke="${S}" stroke-width="2.4" fill="#C1403A"/>`,
    tower: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/>${floor}
      <path d="M78 120 Q70 90 84 70 Q88 56 88 40 L112 40 Q112 56 116 70 Q130 90 122 120 Z" fill="#E0C49A" stroke="${S}" stroke-width="2.6"/>
      ${[52, 64, 76, 88, 100, 112].map(y => `<path d="M${80 + (y < 80 ? 6 : 0)} ${y} L${120 - (y < 80 ? 6 : 0)} ${y}" stroke="#B08452" stroke-width="1.6"/>`).join('')}
      <rect x="93" y="76" width="14" height="12" fill="#5A5248"/><rect x="84" y="30" width="32" height="10" fill="#E0C49A" stroke="${S}" stroke-width="2.2"/>`,
    hallasan: `<rect width="200" height="130" rx="6" fill="#CFE0EA"/><path d="M0 120 Q60 36 90 30 L110 30 Q140 36 200 120 Z" fill="#9DBA7E" stroke="${S}" stroke-width="2.6"/>
      <ellipse cx="100" cy="32" rx="12" ry="4" fill="#6FA8D0" stroke="${S}" stroke-width="1.6"/>`,
    tangerine: `<ellipse cx="100" cy="108" rx="70" ry="12" fill="#E0C49A"/>${[[74, 88], [106, 92], [138, 88], [90, 64], [122, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="17" fill="#E3A93C" stroke="${S}" stroke-width="2.4"/><path d="M${x} ${y - 17} q6 -8 12 -4" stroke="#6E8F58" stroke-width="3" fill="none"/>`).join('')}`,
    ship: `<rect width="200" height="130" rx="6" fill="#CFE0EA"/><path d="M0 90 Q50 84 100 90 T200 90 L200 130 L0 130 Z" fill="#2D6E8E"/>
      <path d="M40 80 L160 80 L144 102 L56 102 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/><rect x="74" y="56" width="52" height="24" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      ${[82, 96, 110].map(x => `<circle cx="${x + 4}" cy="68" r="4" fill="#9DB4C6" stroke="${S}" stroke-width="1.4"/>`).join('')}<rect x="92" y="40" width="10" height="16" fill="#C1403A" stroke="${S}" stroke-width="2"/>`
  }[kind];
  const label = {map:'한국 지도', palace:'경복궁', river:'한강', beach:'해운대', tower:'첨성대', hallasan:'한라산', tangerine:'귤', ship:'배'}[kind];
  const vb = kind === 'map' ? '0 0 400 260' : '0 0 200 130';
  return `<svg viewBox="${vb}" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['map', 'palace', 'river', 'beach', 'tower', 'hallasan', 'tangerine', 'ship'].forEach(k => { OUT_ONLY['trip_' + k] = outTrip(k); });
/* 지도에서 찾기용: 도시 자리에 누를 영역을 붙인 큰 지도 */
OUT_ONLY.trip_mapfind = `<svg viewBox="0 0 400 260" role="img" aria-label="한국 지도">${OUT_KOREA}
  ${outSpot('seoul', '서울', 140, 34, 52, 46)}${outSpot('gyeongju', '경주', 238, 124, 50, 44)}${outSpot('busan', '부산', 226, 172, 52, 38)}${outSpot('jeju', '제주도', 136, 222, 80, 36)}</svg>`;
const OUT_PIC = Object.assign({}, M7_PIC, OUT_ONLY);

/* ---- 꾸러미 ---- */
const OUT_BUNDLES = [
  {k:1, title:'전래 놀이', topic:'공기, 딱지, 제기, 팽이. 다섯째 달을 마쳤다면 딱 좋아요', nights:[1, 2, 3], after:'그동안 가족과 딱지를 접어서 딱지치기를 해 봐.'},
  {k:2, title:'한국 여행 지도', topic:'서울, 부산, 경주, 제주. 다섯째 달을 마쳤다면 딱 좋아요', nights:[4, 5, 6], after:'그동안 가족과 지도를 펴 놓고 가 보고 싶은 곳을 이야기해 봐.'}
];

/* ---- 밤 ---- */
const OUT_NIGHTS = [

/* ---- 전래 놀이 -----------------------------------------------------
   한국 아이들이 오래전부터 해 온 놀이(공기, 딱지치기, 제기차기, 팽이치기, 윷놀이)와 놀이 동작 말(던져요, 받아요, 쳐요, 차요, 돌려요).
   딱지 접는 순서를 이야기 순서 화면으로 익히고, 놀 때 쓰는 말(내 차례야, 이겼어요, 졌어요, 잘했어)을 배웁니다.
   셋째 밤은 호랑이 할머니가 공기놀이를 가르쳐 주는 이야기로, 이기고 지는 것보다 함께 노는 즐거움을 다룹니다. */
{ n:1, bundle:1, title:'공기와 딱지',
  steps:[
    {type:'intro', who:'moi',
     t:'달토끼 나들이에 온 걸 환영해! 첫 나들이는 전래 놀이야. 할머니 할아버지가 어릴 때 하던 놀이를 배워 보자.',
     big:'전래 놀이'},
    {type:'pairs', title:'전래 놀이', who:'moi',
     t:'한국 아이들이 오래전부터 하던 놀이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'공기놀이', pic:'play_gonggi', en:'gonggi (jacks with stones)'}, {w:'딱지치기', pic:'play_ddakji', en:'ddakji (paper tile flipping)'},
       {w:'제기차기', pic:'play_jegi', en:'jegi (shuttlecock kicking)'}, {w:'팽이치기', pic:'play_top', en:'spinning tops'},
       {w:'윷놀이', pic:'play_yut', en:'yut (stick game)'}],
     tip:{who:'dami', t:'전래 놀이는 옛날부터 전해 내려오는 놀이란다. 장난감을 사지 않아도 돌, 종이, 나무만 있으면 할 수 있지. 여섯째 달 설날에 한 윷놀이도 전래 놀이란다.'}},
    {type:'pairs', title:'놀 때 하는 동작', who:'moi',
     t:'놀이마다 몸을 쓰는 말이 달라. 눌러서 들어 봐.',
     singles:[
       {w:'던져요', pic:'play_throw', en:'throw'}, {w:'받아요', pic:'play_gonggi', en:'catch'}, {w:'쳐요', pic:'play_hit', en:'hit, strike'},
       {w:'차요', pic:'play_kick', en:'kick'}, {w:'돌려요', pic:'play_spin', en:'spin'}],
     tip:{who:'tori', t:'공기는 던지고 받아요. 딱지는 쳐요. 제기는 발로 차요. 팽이는 돌려요. 놀이 이름에 쳐요, 차요가 숨어 있는 것도 있지? 딱지치기, 제기차기!'}},
    {type:'choose', title:'어떻게 놀아요?', who:'tori',
     t:'놀이에 맞는 동작을 골라 봐.',
     qs:[
       {pic:'play_jegi', t:'제기는 발로 ______.', o:['차요','던져요','돌려요'], a:'차요', why:'제기차기, 발로 차는 놀이예요.'},
       {pic:'play_ddakji', t:'딱지는 딱지로 ______.', o:['쳐요','차요','받아요'], a:'쳐요', why:'딱지치기, 딱지로 쳐서 뒤집어요.'},
       {pic:'play_top', t:'팽이는 ______.', o:['돌려요','던져요','차요'], a:'돌려요'},
       {pic:'play_gonggi', t:'공기는 위로 던지고 ______.', o:['받아요','차요','쳐요'], a:'받아요'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'팽이치기', o:['play_top','play_jegi','play_gonggi'], a:'play_top'},
       {say:'차요', o:['play_throw','play_kick','play_spin'], a:'play_kick'},
       {say:'딱지치기', o:['play_yut','play_ddakji','play_gonggi'], a:'play_ddakji'},
       {say:'던져요', o:['play_hit','play_spin','play_throw'], a:'play_throw'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'놀이 이름을 써 봐.',
     items:[{w:'공기', en:'gonggi stones'}, {w:'딱지', en:'ddakji', hint:{who:'dami', t:'소리는 [딱찌]지만 글자는 ‘지’란다. ㄱ 받침 뒤라서 세게 들리지.'}}, {w:'제기', en:'jegi'}]}
  ],
  dictWords:[{w:'공기', en:'gonggi'}, {w:'딱지', en:'ddakji'}, {w:'제기', en:'jegi'}, {w:'팽이', en:'top'},
             {w:'던져요', en:'throw'}, {w:'차요', en:'kick'}, {w:'돌려요', en:'spin'}] },

{ n:2, bundle:1, title:'딱지를 접어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 종이로 딱지를 접고, 딱지치기 하는 법을 배워. 놀 때 쓰는 말도 알려 줄게.',
     big:'딱지를 접어요'},
    {type:'sequence', title:'딱지 접는 순서', who:'moi',
     t:'딱지 접는 순서가 섞였어. 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'play_f1', t:'종이 두 장을 길게 접어요.'}, {pic:'play_f2', t:'두 장을 십자 모양으로 겹쳐 놓아요.'}, {pic:'play_f3', t:'끝을 하나씩 접어 넣어요.'}, {pic:'play_f4', t:'네모난 딱지가 완성됐어요.'}]}]},
    {type:'pairs', title:'놀 때 하는 말', who:'dami',
     t:'함께 놀 때 쓰는 말이란다. 친구와 어른께 하는 말이 조금 다르지.',
     pairs:[
       {when:'내 차례일 때', pic:'play_turn', friend:'내 차례야.', elder:'제 차례예요.', en:"It's my turn."},
       {when:'상대 차례일 때', pic:'play_turn', friend:'네 차례야.', elder:'할머니 차례예요.', en:"It's your turn."},
       {when:'상대가 잘했을 때', pic:'play_win', friend:'잘했어!', elder:'잘하셨어요!', en:'Well done!'}]},
    {type:'tense', title:'이기고 지고', who:'tori',
     t:'놀이가 끝나면 이긴 사람과 진 사람이 있지. 넷째 달에 배운 지난 일 말로 말해.',
     cols:['지금', '끝난 뒤'],
     groups:[{rule:'놀이가 끝나면', rows:[['이겨요','이겼어요'], ['져요','졌어요'], ['뒤집어요','뒤집었어요']]}],
     note:'딱지치기는 내 딱지로 상대 딱지를 쳐서 뒤집으면 이긴단다. 여섯째 달에 배운 ~으면을 쓰면 규칙을 설명할 수 있지. 상대 딱지를 뒤집으면 이겨요.'},
    {type:'choose', title:'딱지치기 규칙', who:'tori',
     t:'딱지치기에 맞는 말을 골라 봐.',
     qs:[
       {pic:'play_hit', o:['상대 딱지를 뒤집으면 이겨요.','상대 딱지를 뒤집으면 져요.'], a:'상대 딱지를 뒤집으면 이겨요.'},
       {pic:'play_win', t:'내가 이겼어요. 친구에게 뭐라고 해요?', o:['재미있었어! 또 하자.','너는 졌어!'], a:'재미있었어! 또 하자.', why:'이겨도 친구를 배려해요.'},
       {pic:'play_lose', t:'내가 졌어요. 친구에게 뭐라고 해요?', o:['잘했어! 다시 하자.','재미없어!'], a:'잘했어! 다시 하자.', why:'져도 상대를 칭찬해요.'},
       {pic:'play_turn', t:'할머니 차례예요. 뭐라고 해요?', o:['네 차례야.','할머니 차례예요.'], a:'할머니 차례예요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'종이로 딱지를 접어요.', tiles:['종이로','딱지를','접어요.'], en:'I fold ddakji out of paper.'},
       {s:'상대 딱지를 뒤집으면 이겨요.', tiles:['상대','딱지를','뒤집으면','이겨요.'], extra:['뒤집면'], en:"If you flip the other player's ddakji, you win."},
       {s:'이번에는 제 차례예요.', tiles:['이번에는','제','차례예요.'], en:"This time it's my turn."},
       {s:'딱지를 쳐서 뒤집었어요.', tiles:['딱지를','쳐서','뒤집었어요.'], en:'I hit the ddakji and flipped it.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'놀이 말에도 소리 비밀이 있단다.',
     cmp:[
       {s:'딱지', d:'딱찌', n:'ㄱ 받침 뒤의 ㅈ은 ㅉ처럼 나요'},
       {s:'접어요', d:'저버요', n:'ㅂ 받침이 뒤로 건너가요'},
       {s:'뒤집어요', d:'뒤지버요', n:'ㅂ 받침이 뒤로 건너가요'},
       {s:'이겼어요', d:'이겨써요', n:'ㅆ 받침이 뒤로 건너가요'}],
     note:'일곱 달 동안 만난 소리 비밀이 놀이 말에도 그대로 나오지? 이제 새 말을 만나도 스스로 풀 수 있을 게야.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐.',
     items:[
       {w:'차례', en:'turn'},
       {w:'접어요', en:'fold', hint:{who:'dami', t:'소리는 [저버요]지만 ‘접’에 받침 ㅂ이 있단다.'}},
       {w:'이겼어요', en:'won'}]}
  ],
  dictWords:[{w:'차례', en:'turn'}, {w:'접어요', en:'fold'}, {w:'이겼어요', en:'won'}, {w:'졌어요', en:'lost'}, {w:'종이', en:'paper'}] },

{ n:3, bundle:1, title:'할머니의 공기놀이',
  steps:[
    {type:'intro', who:'tori',
     t:'한국 할머니 댁에서 할머니가 어릴 때 하던 공기놀이를 가르쳐 주신대! 먼저 글자 없이 귀로만 들어 봐.',
     big:'할머니, 공기 가르쳐 주세요'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 이기는지, 그리고 이기고 진 뒤에 뭐라고 하는지 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'할머니, 공기놀이 가르쳐 주세요!', en:'Grandma, please teach me gonggi!'},
       {who:'halmi', t:'오냐. 돌 하나를 위로 던지고, 떨어지기 전에 바닥의 돌을 집어서 같이 받는 거란다.', en:'All right. Throw one stone up, pick up a stone from the floor before it falls, and catch them together.'},
       {who:'moi', t:'제가 먼저 할래요! 앗, 떨어뜨렸어요.', en:"I'll go first! Oops, I dropped it."},
       {who:'tori', t:'이제 제 차례예요. 던지고, 집고, 받았어요!', en:"Now it's my turn. Throw, pick up, catch!"},
       {who:'halmi', t:'아이고, 잘하는구나! 이번에는 할머니 차례다.', en:"Oh my, you're good at it! Now it's Grandma's turn."},
       {who:'moi', t:'와, 할머니는 다섯 개를 한 번에 받으셨어요!', en:'Wow, Grandma caught all five at once!'},
       {who:'tori', t:'할머니가 이기셨어요. 할머니, 정말 잘하셨어요!', en:'Grandma won. Grandma, you did really well!'},
       {who:'halmi', t:'허허, 할머니도 어릴 때 날마다 했거든. 이기고 지는 것보다 같이 노는 게 더 재미있지?', en:'Ho ho, I played it every day when I was little. Playing together is more fun than winning or losing, right?'}],
     note:{who:'dami', t:'할머니가 어릴 때 하던 놀이를 손주가 배우는구나. 전래 놀이는 이렇게 할머니에게서 손주에게 전해진단다. 토리가 진 뒤에도 할머니께 잘하셨어요, 하고 칭찬해 드린 것이 참 보기 좋구나.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'무슨 놀이를 했어요?', o:['공기놀이','딱지치기','제기차기'], a:'공기놀이'},
       {t:'공기놀이는 돌을 위로 어떻게 해요?', o:['던져요','차요','돌려요'], a:'던져요'},
       {t:'누가 이겼어요?', o:['할머니','토리','모이'], a:'할머니'},
       {t:'할머니는 무엇이 더 재미있다고 하셨어요?', o:['같이 노는 것','이기는 것'], a:'같이 노는 것'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 말하는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'play_turn', line:{who:'moi', t:'토리야, 이제 누구 차례야?'}, en:"Tori, whose turn is it now?", o:['내 차례야!','제 차례예요!'], a:'내 차례야!', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'play_lose', line:{who:'halmi', t:'토리야, 할머니가 이겼구나.'}, en:'Tori, Grandma won.', o:['할머니, 정말 잘하셨어요!','할머니, 재미없어요.'], a:'할머니, 정말 잘하셨어요!', why:'져도 상대를 칭찬해요. 어른께는 잘하셨어요.'},
       {pic:'play_jegi', t:'친구와 제기차기를 하고 싶어요.', en:'You want to play jegi with a friend.', o:['같이 제기차기하자!','같이 제기차기하실래요?'], a:'같이 제기차기하자!', why:'친구에게는 편한 말로 제안해요.'}]},
    {type:'task', title:'우리 집 전래 놀이', who:'moi',
     t:'가족과 전래 놀이를 하나 해 봐. 딱지를 접어도 좋고, 공기놀이를 해도 좋아. 다 하면 했어요를 눌러.',
     lines:[
       {when:'놀이를 시작할 때', say:'같이 딱지치기해요!', sub:'어른께는 같이 하실래요?'},
       {when:'차례를 바꿀 때', say:'이제 제 차례예요.', sub:'형제에게는 내 차례야, 네 차례야.'},
       {when:'놀이가 끝나면', say:'잘하셨어요! 또 해요.', sub:'이겨도 져도 상대를 칭찬해요.'}],
     parent:'딱지는 A4 종이나 색종이 두 장이면 접을 수 있습니다. 접는 법은 인터넷에 "딱지 접기"로 찾으시면 그림 설명이 많습니다. 공기놀이용 공기돌은 한인 마트에서 구할 수 있고, 작은 조약돌로 해도 됩니다. 다만 작은 공기돌은 어린 동생이 입에 넣지 않도록 주의해 주세요. 조부모님께 어릴 때 하시던 놀이를 여쭤보고 함께 해 보시면 이 꾸러미의 뜻이 가장 잘 살아납니다.'}
  ],
  dictWords:[] },

/* ---- 한국 여행 지도 ----------------------------------------------
   한국의 네 곳(서울, 경주, 부산, 제주도)을 지도에서 찾고, 곳마다 이름난 것(경복궁, 한강, 첨성대, 해운대, 한라산, 귤)을 배웁니다.
   "~에 가면 ~을 볼 수 있어요", "~이 유명해요"로 설명하고, 다섯째 달의 ~ㄹ 거예요로 여행 계획을 세웁니다.
   사실은 교과서 수준에서 확인할 수 있는 것만 씁니다(서울은 가장 큰 도시, 한라산은 남한에서 가장 높은 산,
   경주는 옛 신라의 수도, 제주도는 섬). */
{ n:4, bundle:2, title:'한국 지도',
  steps:[
    {type:'intro', who:'moi',
     t:'두 번째 나들이는 한국 여행이야! 다섯째 달에 토리가 할머니 댁에 갔지? 이번에는 지도를 펴 놓고 한국 곳곳을 둘러보자.',
     big:'한국 지도'},
    {type:'pairs', title:'여행할 곳', who:'moi',
     t:'한국의 네 곳이야. 눌러서 들어 봐.',
     singles:[
       {w:'서울', pic:'trip_river', en:'Seoul'}, {w:'부산', pic:'trip_beach', en:'Busan'}, {w:'경주', pic:'trip_tower', en:'Gyeongju'},
       {w:'제주도', pic:'trip_hallasan', en:'Jeju Island'}, {w:'지도', pic:'trip_map', en:'map'}, {w:'섬', pic:'trip_ship', en:'island'}],
     tip:{who:'dami', t:'지도는 보통 위쪽이 북쪽이란다. 서울은 위쪽, 부산은 오른쪽 아래, 제주도는 남쪽 바다 한가운데 있는 섬이지.'}},
    {type:'findit', title:'지도에서 찾아요', who:'tori',
     t:'내가 말하는 곳을 지도에서 눌러 봐. 빨간 점이 도시야.',
     scene:'trip_mapfind',
     qs:[
       {say:'서울', spot:'seoul'},
       {say:'제주도', spot:'jeju'},
       {say:'부산', spot:'busan'},
       {say:'한국에서 가장 큰 도시예요', t:'한국에서 가장 큰 도시예요. 어디일까요?', spot:'seoul', why:'서울은 한국에서 사람이 가장 많이 사는 도시예요.'},
       {say:'남쪽 바다에 있는 섬이에요', t:'남쪽 바다에 있는 섬이에요. 어디일까요?', spot:'jeju', why:'제주도는 남쪽 바다에 있는 섬이에요.'},
       {say:'부산 바로 위에 있는 옛 도시예요', t:'부산 바로 위에 있는 옛 도시예요. 어디일까요?', spot:'gyeongju', why:'경주는 부산 가까이, 위쪽에 있어요.'}]},
    {type:'choose', title:'어느 곳일까요?', who:'tori',
     t:'알맞은 곳을 골라 봐.',
     qs:[
       {pic:'trip_ship', t:'제주도에 가려면 무엇을 타요?', o:['비행기나 배','지하철','자전거'], a:'비행기나 배', why:'제주도는 섬이라서 비행기나 배를 타요.'},
       {pic:'trip_map', t:'지도의 위쪽은 보통 어느 쪽이에요?', o:['북쪽','남쪽'], a:'북쪽'},
       {pic:'trip_beach', t:'바다가 아름다운 큰 항구 도시는?', o:['부산','서울','경주'], a:'부산'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'섬', o:['trip_ship','trip_river','trip_tower'], a:'trip_ship'},
       {say:'지도', o:['trip_map','hd_book','ml_letter'], a:'trip_map'},
       {say:'제주도', o:['trip_palace','trip_hallasan','trip_river'], a:'trip_hallasan'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'여행할 곳을 써 봐.',
     items:[{w:'서울', en:'Seoul'}, {w:'부산', en:'Busan'}, {w:'지도', en:'map'}]}
  ],
  dictWords:[{w:'서울', en:'Seoul'}, {w:'부산', en:'Busan'}, {w:'경주', en:'Gyeongju'}, {w:'제주도', en:'Jeju Island'}, {w:'지도', en:'map'}, {w:'섬', en:'island'}] },

{ n:5, bundle:2, title:'무엇이 유명해요?',
  steps:[
    {type:'intro', who:'tori',
     t:'곳마다 유명한 것이 있어. 오늘은 무엇이 유명한지 배우고, 나의 여행 계획도 세워 볼 거야.',
     big:'제주도는 귤이 유명해요'},
    {type:'pairs', title:'곳마다 유명한 것', who:'moi',
     t:'그림을 누르면 소리가 나. 어느 곳에 있는지도 함께 기억해 봐.',
     singles:[
       {w:'경복궁', pic:'trip_palace', en:'Gyeongbokgung Palace (Seoul)'}, {w:'한강', pic:'trip_river', en:'Han River (Seoul)'},
       {w:'첨성대', pic:'trip_tower', en:'Cheomseongdae observatory (Gyeongju)'}, {w:'해운대', pic:'trip_beach', en:'Haeundae Beach (Busan)'},
       {w:'한라산', pic:'trip_hallasan', en:'Hallasan Mountain (Jeju)'}, {w:'귤', pic:'trip_tangerine', en:'tangerine (Jeju)'}],
     tip:{who:'dami', t:'경복궁은 조선의 임금님이 사시던 궁궐이란다. 여섯째 달의 세종대왕께서도 경복궁에 계셨지. 첨성대는 신라 사람들이 하늘의 별을 보던 곳이고, 한라산은 남한에서 가장 높은 산이란다.'}},
    {type:'choose', title:'어디에 있어요?', who:'tori',
     t:'유명한 것과 그곳을 이어 봐.',
     qs:[
       {pic:'trip_palace', t:'경복궁은 어디에 있어요?', o:['서울','부산','제주도'], a:'서울'},
       {pic:'trip_tower', t:'첨성대는 어디에 있어요?', o:['경주','서울','부산'], a:'경주'},
       {pic:'trip_hallasan', o:['제주도에 가면 한라산을 볼 수 있어요.','부산에 가면 한라산을 볼 수 있어요.'], a:'제주도에 가면 한라산을 볼 수 있어요.'},
       {pic:'trip_tangerine', o:['제주도는 귤이 유명해요.','제주도는 귤가 유명해요.'], a:'제주도는 귤이 유명해요.', why:'‘귤’에 받침이 있어서 이예요.'}]},
    {type:'letter', title:'나의 한국 여행 계획', who:'tori',
     t:'칸마다 골라서 여행 계획을 세워 봐. 오른쪽에 여행 계획이 만들어져.',
     parts:[
       {label:'언제', opts:['이번 여름 방학에 한국에 갈 거예요.', '겨울 방학에 한국에 갈 거예요.', '언젠가 꼭 한국에 갈 거예요.']},
       {label:'먼저', opts:['먼저 서울에서 경복궁을 볼 거예요.', '먼저 서울에서 한강을 볼 거예요.']},
       {label:'그다음에', opts:['그다음에 경주에서 첨성대를 볼 거예요.', '그다음에 부산 해운대에서 수영할 거예요.']},
       {label:'마지막에', opts:['마지막에 제주도에서 한라산에 올라갈 거예요.', '마지막에 제주도에서 귤을 먹을 거예요.']},
       {label:'누구와', opts:['가족과 함께 갈 거예요.', '할머니 할아버지와 함께 갈 거예요.']}],
     noName:true, readLabel:'여행 계획 읽어 주기',
     tip:{who:'moi', t:'다섯째 달의 먼저, 그다음에, 마지막에와 갈 거예요가 다 들어 있지? 인쇄해서 지도 옆에 붙여 봐!'}},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'제주도에 가면 한라산을 볼 수 있어요.', tiles:['제주도에','가면','한라산을','볼','수','있어요.'], en:'If you go to Jeju, you can see Hallasan.'},
       {s:'부산은 바다가 유명해요.', tiles:['부산은','바다가','유명해요.'], extra:['바다이'], en:'Busan is famous for its sea.'},
       {s:'경주에는 첨성대가 있어요.', tiles:['경주에는','첨성대가','있어요.'], en:'Cheomseongdae is in Gyeongju.'},
       {s:'서울에서 경복궁에 갈 거예요.', tiles:['서울에서','경복궁에','갈','거예요.'], en:"I'll go to Gyeongbokgung in Seoul."}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'여행지 이름에도 소리 비밀이 숨어 있단다. 한라산은 설날과 반대 모양의 비밀이지.',
     cmp:[
       {s:'한라산', d:'할라산', n:'ㄴ 받침이 뒤의 ㄹ을 만나 ㄹ처럼 나요'},
       {s:'경복궁', d:'경복꿍', n:'ㄱ 받침 뒤의 ㄱ은 ㄲ처럼 나요'},
       {s:'볼 수 있어요', d:'볼 쑤 이써요', n:'ㄹ 뒤의 수는 쑤처럼 나요'},
       {s:'부산에', d:'부사네', n:'ㄴ 받침이 뒤로 건너가요'}],
     note:'설날은 ㄹ 뒤의 ㄴ이 ㄹ이 되어 [설랄], 한라산은 ㄴ 뒤에 ㄹ이 와서 ㄴ이 ㄹ이 되어 [할라산]. ㄴ과 ㄹ이 만나면 둘 다 ㄹ로 소리 나는 게지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐.',
     items:[
       {w:'한라산', en:'Hallasan', hint:{who:'dami', t:'소리는 [할라산]이지만 ‘한’에 받침 ㄴ이 있단다.'}},
       {w:'제주도', en:'Jeju Island'},
       {w:'유명해요', en:'is famous'}]}
  ],
  dictWords:[{w:'한라산', en:'Hallasan'}, {w:'한강', en:'Han River'}, {w:'귤', en:'tangerine'}, {w:'유명해요', en:'is famous'}] },

{ n:6, bundle:2, title:'할머니와 세운 여행 계획',
  steps:[
    {type:'intro', who:'tori',
     t:'할머니 댁에서 한국 지도를 펴 놓고 여행 계획을 세워! 먼저 글자 없이 귀로만 들어 봐.',
     big:'어디에 가고 싶니?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 어디를 어떤 차례로 가는지 잘 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'halmi', t:'토리야, 방학에 한국 여행을 하고 싶다고? 어디에 가고 싶니?', en:'Tori, you want to travel around Korea during vacation? Where would you like to go?'},
       {who:'tori', t:'먼저 서울에 가서 경복궁을 보고 싶어요.', en:'First I want to go to Seoul and see Gyeongbokgung.'},
       {who:'moi', t:'그다음에 경주에 가요! 첨성대를 보고 싶어요.', en:"Then let's go to Gyeongju! I want to see Cheomseongdae."},
       {who:'halmi', t:'경주는 옛날 신라라는 나라의 수도였단다. 볼 것이 아주 많지.', en:'Gyeongju was the capital of an old kingdom called Silla. There is a lot to see.'},
       {who:'tori', t:'부산에서는 해운대에서 수영할 거예요!', en:"In Busan I'll swim at Haeundae!"},
       {who:'moi', t:'마지막에 제주도에 가요. 한라산에 올라가고 귤도 먹을 거예요.', en:"Last, let's go to Jeju. We'll climb Hallasan and eat tangerines."},
       {who:'halmi', t:'제주도는 섬이라서 비행기나 배를 타야 한단다.', en:'Jeju is an island, so you have to take a plane or a boat.'},
       {who:'tori', t:'와, 정말 신나요! 할머니도 같이 가요!', en:'Wow, so exciting! Grandma, come with us!'}],
     note:{who:'halmi', t:'토리와 모이가 먼저, 그다음에, 마지막에로 여행 차례를 잘 세웠구나. 서울의 궁궐, 경주의 옛 신라, 부산의 바다, 제주의 섬과 산. 한국은 작아 보여도 곳마다 모습이 이렇게 다르단다.'}},
    {type:'sequence', title:'여행 차례', who:'moi',
     t:'토리와 모이의 여행 차례를 눌러 줘.',
     qs:[
       {cards:[{pic:'trip_palace', t:'서울에서 경복궁을 봐요.'}, {pic:'trip_tower', t:'경주에서 첨성대를 봐요.'}, {pic:'trip_beach', t:'부산 해운대에서 수영해요.'}, {pic:'trip_hallasan', t:'제주도에서 한라산에 올라가요.'}]}]},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리가 제일 먼저 가고 싶은 곳은?', o:['서울','부산','제주도'], a:'서울'},
       {t:'경주는 옛날에 어느 나라의 수도였어요?', o:['신라','조선','미국'], a:'신라'},
       {t:'부산에서 토리는 무엇을 할 거예요?', o:['수영','등산','공기놀이'], a:'수영'},
       {t:'제주도에는 왜 비행기나 배를 타고 가요?', o:['섬이라서','너무 멀어서'], a:'섬이라서'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'trip_palace', line:{who:'halmi', t:'토리야, 서울에서 무엇을 보고 싶니?'}, en:'Tori, what do you want to see in Seoul?', o:['경복궁을 보고 싶어요.','경복궁을 보고 싶어.'], a:'경복궁을 보고 싶어요.', why:'할머니께는 높이는 말로 대답해요.'},
       {pic:'trip_tangerine', line:{who:'moi', t:'토리야, 제주도에서 뭐 먹을 거야?'}, en:'Tori, what will you eat in Jeju?', o:['귤 먹을 거야!','귤 먹었어!'], a:'귤 먹을 거야!', why:'앞으로 할 일이라서 거야예요.'},
       {pic:'trip_map', t:'지도에서 부산은 서울의 어느 쪽이에요?', o:['아래쪽 오른쪽','위쪽 왼쪽'], a:'아래쪽 오른쪽', why:'부산은 한국의 남동쪽 끝에 있어요.'}]},
    {type:'task', title:'우리 가족 여행 지도', who:'moi',
     t:'가족과 지도를 펴 놓고 여행 계획을 세워 봐. 한국도 좋고, 사는 곳 가까운 곳도 좋아. 다 하면 했어요를 눌러.',
     lines:[
       {when:'지도에서 찾아요', say:'서울은 여기에 있어요.', sub:'종이 지도나 인터넷 지도를 펴 놓고.'},
       {when:'차례를 정해요', say:'먼저 ______에 갈 거예요. 그다음에 ______.', sub:'마지막에 어디로 갈지도 정해요.'},
       {when:'무엇이 유명한지 말해요', say:'______는 ______이 유명해요.', sub:'제주도는 귤이 유명해요처럼.'}],
     parent:'인쇄한 한국 지도나 인터넷 지도를 함께 보며 여행 계획을 세워 보세요. 서울에서 부산까지는 KTX 기차로 두세 시간쯤 걸리고, 제주도는 비행기로 한 시간쯤 걸린다는 이야기도 곁들이면 좋습니다. 조부모님이 사시는 곳이나 부모님이 자라신 곳을 지도에서 찾아보는 것도 아이에게 뜻깊은 시간이 됩니다. 한국에 갈 계획이 없다면 사는 곳 가까운 곳으로 같은 활동을 하셔도 됩니다.'}
  ],
  dictWords:[] }
];

/* ---- 나들이에는 빠른 확인이 없습니다 ---- */
const OUT_CHECK = [];
const OUT_POOL = M7_POOL;

/* 등록 정보 */
const OUTINGS = {
  key: 'outings', title: '나들이', path: 'outings/',
  store: 'daltokki:v1:outings',
  units: OUT_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => OUT_POOL,
  num: 8, name: '달토끼 나들이', title2: '달토끼 나들이', nextName: '다음 나들이',
  topics: '전래 놀이, 한국 여행 지도',
  nights: OUT_NIGHTS, bundles: OUT_BUNDLES, pic: OUT_PIC, keys: OUT_POOL, total: OUT_TOTAL, check: OUT_CHECK,
  prev: null,
  text: {
    welcomePrev: '',
    welcomeFresh: '달토끼 나들이에 온 걸 환영해! 달마다 가는 길 옆에 있는 작은 여행이야. 순서 없이 마음에 드는 꾸러미를 골라서 해 봐.',
    parents: '달토끼 나들이는 일곱 달 과정 옆에 두는 세 밤짜리 주제 꾸러미입니다. 과정 순서와 상관없이 고를 수 있고, 꾸러미마다 알맞은 단계를 적어 두었습니다.',
    allDone: '지금 열린 나들이를 모두 다녀왔어! 새 꾸러미가 열리면 또 떠나자.'
  }
};
