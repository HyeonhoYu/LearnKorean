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
/* ---- 셋째 묶음 그림: 생각과 토론 ---- */
M7_ONLY.think = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="생각"><path d="M8 122 L192 122" stroke="#221F1C" stroke-width="2.6"/>
  ${m2Person('kid', 60, 'stand', 1)}
  <path d="M96 60 Q90 30 118 26 Q130 8 154 18 Q182 16 180 40 Q192 58 170 66 Q152 78 130 68 Q104 76 96 60 Z" fill="#FBF7EC" stroke="#221F1C" stroke-width="2.4"/>
  <circle cx="86" cy="70" r="3.4" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.6"/><circle cx="80" cy="80" r="2.2" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.4"/>
  <path d="M140 30 Q130 30 130 42 Q130 50 136 54 L136 60 L146 60 L146 54 Q152 50 152 42 Q152 30 140 30 Z" fill="#F2C14E" stroke="#221F1C" stroke-width="2"/>
  <path d="M137 64 L145 64" stroke="#221F1C" stroke-width="2"/></svg>`;
M7_ONLY.dog = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="강아지"><path d="M8 120 L192 120" stroke="#221F1C" stroke-width="2.6"/>
  <g transform="translate(100 118) scale(1.5)"><ellipse cx="4" cy="-14" rx="22" ry="12" fill="#D9A45E" stroke="#221F1C" stroke-width="2.2"/>
  <circle cx="-18" cy="-26" r="11" fill="#D9A45E" stroke="#221F1C" stroke-width="2.2"/><path d="M-26 -32 Q-34 -20 -26 -16 Q-22 -24 -22 -30 Z" fill="#8A5A36" stroke="#221F1C" stroke-width="1.6"/>
  <circle cx="-20" cy="-28" r="1.6" fill="#221F1C"/><circle cx="-28" cy="-23" r="2" fill="#221F1C"/>
  <path d="M-8 -2 L-8 2 M14 -2 L14 2" stroke="#221F1C" stroke-width="4" stroke-linecap="round"/><path d="M26 -18 Q34 -26 32 -32" stroke="#221F1C" stroke-width="3" fill="none" stroke-linecap="round"/></g></svg>`;
M7_ONLY.debate = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="토론"><rect width="200" height="130" rx="6" fill="#EFE2C2"/>
  <rect x="20" y="84" width="54" height="38" fill="#B08452" stroke="#221F1C" stroke-width="2.4"/><rect x="126" y="84" width="54" height="38" fill="#B08452" stroke="#221F1C" stroke-width="2.4"/>
  ${m2Person('kid', 47, 'wave', 1).replace('translate(47 122)', 'translate(47 96)')}${m2Person('friend', 153, 'wave', -1).replace('translate(153 122)', 'translate(153 96)')}
  <rect x="84" y="16" width="32" height="22" rx="4" fill="#FBF7EC" stroke="#221F1C" stroke-width="2"/><path d="M92 27 L108 27" stroke="#C1403A" stroke-width="3"/>
  <path d="M60 30 L84 26 M140 30 L116 26" stroke="#8C7F63" stroke-width="2" stroke-dasharray="3 3"/></svg>`;
/* ---- 넷째 묶음 그림: 해님 달님 ----
   이야기 속 호랑이는 담이와 다른 욕심쟁이 호랑이라서, 털빛을 더 짙게 하고 눈썹을 찌푸리게 그립니다. */
const m7Tiger = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k || 1})">
  <ellipse cx="6" cy="-18" rx="30" ry="16" fill="#D9782E" stroke="#221F1C" stroke-width="2.4"/>
  <g stroke="#221F1C" stroke-width="3" stroke-linecap="round"><path d="M-6 -30 L-4 -22 M6 -32 L8 -22 M18 -30 L18 -22"/></g>
  <circle cx="-26" cy="-30" r="15" fill="#D9782E" stroke="#221F1C" stroke-width="2.4"/>
  <circle cx="-36" cy="-42" r="5" fill="#D9782E" stroke="#221F1C" stroke-width="2"/><circle cx="-16" cy="-43" r="5" fill="#D9782E" stroke="#221F1C" stroke-width="2"/>
  <path d="M-34 -36 L-28 -33 M-18 -36 L-24 -33" stroke="#221F1C" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="-30" cy="-31" r="1.8" fill="#221F1C"/><circle cx="-22" cy="-31" r="1.8" fill="#221F1C"/>
  <ellipse cx="-26" cy="-23" rx="7" ry="5" fill="#FBF7EC" stroke="#221F1C" stroke-width="1.4"/><path d="M-28 -24 L-24 -24" stroke="#221F1C" stroke-width="2"/>
  <path d="M-16 -4 L-16 0 M24 -4 L24 0" stroke="#221F1C" stroke-width="5" stroke-linecap="round"/>
  <path d="M36 -22 Q50 -30 46 -44" stroke="#221F1C" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M36 -22 Q50 -30 46 -44" stroke="#D9782E" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
const m7Sky = inner => `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="">${inner}</svg>`;
Object.assign(M7_ONLY, {
  hd_sibs: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="오누이"><path d="M8 122 L192 122" stroke="#221F1C" stroke-width="2.6"/>${m2Person('kid', 76, 'stand', 1)}${m2Person('girl', 124, 'stand', -1).replace('#2D6E8E', '#C1403A')}</svg>`,
  hd_mother: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="떡 광주리를 인 어머니"><path d="M8 122 L192 122" stroke="#221F1C" stroke-width="2.6"/>${m2Person('mom', 100, 'stand', 1)}
    <ellipse cx="100" cy="20" rx="30" ry="8" fill="#C9A06A" stroke="#221F1C" stroke-width="2.4"/><path d="M72 20 Q100 34 128 20" fill="#C9A06A" stroke="#221F1C" stroke-width="2.4"/>
    ${[86, 100, 114].map(x => `<ellipse cx="${x}" cy="16" rx="6" ry="3.6" fill="#FBF7EC" stroke="#C9C0AE" stroke-width="1.2"/>`).join('')}</svg>`,
  hd_tiger: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="욕심쟁이 호랑이"><path d="M8 122 L192 122" stroke="#221F1C" stroke-width="2.6"/>${m7Tiger(110, 120, 1.7)}</svg>`,
  hd_hill: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="고개"><rect width="200" height="130" rx="6" fill="#DCEBD6"/>
    <path d="M0 120 Q50 40 100 50 Q150 40 200 120 Z" fill="#9DBA7E" stroke="#221F1C" stroke-width="2.4"/><path d="M60 120 Q90 70 100 52 Q110 70 140 120" stroke="#E0C49A" stroke-width="10" fill="none"/>
    ${m7Tiger(150, 76, .7)}</svg>`,
  hd_tree: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="나무 위로 도망친 오누이"><rect width="200" height="130" rx="6" fill="#17324A"/>
    <rect x="92" y="40" width="16" height="90" fill="#8A6A4A" stroke="#221F1C" stroke-width="2"/><circle cx="100" cy="36" r="34" fill="#3E5B4A" stroke="#221F1C" stroke-width="2.4"/>
    <circle cx="90" cy="30" r="7" fill="#F0D9BE" stroke="#221F1C" stroke-width="1.6"/><circle cx="110" cy="34" r="7" fill="#F0D9BE" stroke="#221F1C" stroke-width="1.6"/>${m7Tiger(60, 128, .8)}</svg>`,
  hd_rope: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="하늘에서 내려온 동아줄"><rect width="200" height="130" rx="6" fill="#CFE0EA"/>
    <path d="M60 10 Q90 4 120 10 Q150 4 170 16" fill="#FBF7EC" stroke="#221F1C" stroke-width="2"/>
    <path d="M100 12 L100 126" stroke="#B08452" stroke-width="6"/><path d="M96 20 L104 28 M96 40 L104 48 M96 60 L104 68 M96 80 L104 88 M96 100 L104 108" stroke="#8A6A4A" stroke-width="2"/>
    <g fill="#F2C14E"><path d="M60 50 l2 4 l4 1 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 l4 -1 Z"/><path d="M146 70 l2 4 l4 1 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 l4 -1 Z"/></g></svg>`,
  hd_sunmoon: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="해와 달이 된 오누이"><rect width="100" height="130" rx="6" fill="#CFE0EA"/><rect x="100" width="100" height="130" rx="6" fill="#17324A"/>
    <circle cx="50" cy="60" r="26" fill="#F2C14E" stroke="#221F1C" stroke-width="2.4"/><g stroke="#E3A93C" stroke-width="3" stroke-linecap="round"><path d="M50 22 L50 14 M50 98 L50 106 M12 60 L4 60 M88 60 L96 60"/></g>
    <circle cx="150" cy="60" r="26" fill="#F6E3A1" stroke="#221F1C" stroke-width="2.4"/>
    <circle cx="43" cy="58" r="2" fill="#221F1C"/><circle cx="57" cy="58" r="2" fill="#221F1C"/><path d="M44 68 q6 5 12 0" stroke="#221F1C" stroke-width="2" fill="none"/>
    <circle cx="143" cy="58" r="2" fill="#221F1C"/><circle cx="157" cy="58" r="2" fill="#221F1C"/><path d="M144 68 q6 5 12 0" stroke="#221F1C" stroke-width="2" fill="none"/></svg>`,
  hd_book: `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="옛날이야기 책"><path d="M30 24 L100 30 L170 24 L170 110 L100 116 L30 110 Z" fill="#FBF7EC" stroke="#221F1C" stroke-width="3" stroke-linejoin="round"/>
    <path d="M100 30 L100 116" stroke="#221F1C" stroke-width="2.4"/><circle cx="64" cy="64" r="18" fill="#F2C14E" stroke="#221F1C" stroke-width="2"/><circle cx="136" cy="64" r="18" fill="#F6E3A1" stroke="#221F1C" stroke-width="2"/></svg>`
});
/* ---- 다섯째 묶음 그림: 꿈과 직업 ---- */
function m7Job(kind){
  const S = '#221F1C';
  const g = {
    doctor: `${m2Ground}${m2Person('kid', 100, 'stand', 1).replace('#2D6E8E', '#FBF7EC')}
      <path d="M90 74 Q86 92 96 96 Q106 92 110 80" stroke="${S}" stroke-width="2.4" fill="none"/><circle cx="110" cy="80" r="4" fill="#9DB4C6" stroke="${S}" stroke-width="1.6"/>
      <path d="M150 30 L150 50 M140 40 L160 40" stroke="#C1403A" stroke-width="6"/>`,
    chef: `${m2Ground}${m2Person('kid', 90, 'stand', 1).replace('#2D6E8E', '#FBF7EC')}
      <path d="M76 38 Q72 22 84 22 Q88 12 98 18 Q108 14 108 26 Q116 30 104 40 L80 40 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <path d="M130 110 L150 110 Q160 96 150 84 L130 84 Q120 96 130 110 Z" fill="#8C8577" stroke="${S}" stroke-width="2.4"/><path d="M122 86 L114 80" stroke="${S}" stroke-width="3"/>`,
    scientist: `${m2Ground}${m2Person('kid', 80, 'stand', 1).replace('#2D6E8E', '#FBF7EC')}
      <path d="M134 40 L134 64 L118 98 Q116 106 124 106 L160 106 Q168 106 166 98 L150 64 L150 40 Z" fill="#E7F0F4" stroke="${S}" stroke-width="2.4"/>
      <path d="M124 90 L160 90 L166 98 Q168 106 160 106 L124 106 Q116 106 118 98 Z" fill="#6E8F58"/><circle cx="138" cy="80" r="3" fill="#FBF7EC"/><circle cx="148" cy="72" r="2.4" fill="#FBF7EC"/>`,
    painter: `${m2Ground}${m2Person('kid', 70, 'give', 1)}
      <path d="M120 110 L136 30 L152 110 M130 70 L142 70" stroke="#8A6A4A" stroke-width="3" fill="none"/>
      <rect x="112" y="36" width="48" height="40" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/><circle cx="148" cy="48" r="5" fill="#F2C14E"/><path d="M114 72 L130 54 L142 66 L158 56 L158 74 L114 74 Z" fill="#9DBA7E"/>`,
    athlete: `${m2Ground}${m2Person('kid', 90, 'wave', 1).replace('#2D6E8E', '#C1403A')}
      <path d="M82 60 L90 74 L98 60" stroke="#E3A93C" stroke-width="3" fill="none"/><circle cx="90" cy="80" r="7" fill="#F2C14E" stroke="${S}" stroke-width="2"/>
      <circle cx="148" cy="100" r="16" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/><path d="M136 94 L160 94 M148 84 L148 116" stroke="${S}" stroke-width="1.6"/>`,
    dream: `<rect width="200" height="130" rx="6" fill="#17324A"/><circle cx="160" cy="30" r="16" fill="#F6E3A1" stroke="${S}" stroke-width="2"/>
      <g fill="#F2C14E"><path d="M40 30 l3 6 l6 1 l-5 4 l2 6 l-6 -3 l-6 3 l2 -6 l-5 -4 l6 -1 Z"/><path d="M100 20 l2 4 l4 1 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 l4 -1 Z"/></g>
      ${m2Person('kid', 100, 'wave', 1).replace('translate(100 122)', 'translate(100 124)')}`,
    hobby: `${m2Ground}${m2Person('kid', 60, 'stand', 1)}
      <path d="M96 60 Q90 30 118 26 Q130 8 154 18 Q182 16 180 40 Q192 58 170 66 Q152 78 130 68 Q104 76 96 60 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <circle cx="122" cy="44" r="8" fill="#C1403A" stroke="${S}" stroke-width="1.6"/><rect x="140" y="34" width="18" height="18" fill="#6FA8D0" stroke="${S}" stroke-width="1.6"/><path d="M160 56 l6 -16 l6 16 Z" fill="#E3A93C"/>`
  }[kind];
  const label = {doctor:'의사', chef:'요리사', scientist:'과학자', painter:'화가', athlete:'운동선수', dream:'꿈', hobby:'취미'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['doctor', 'chef', 'scientist', 'painter', 'athlete', 'dream', 'hobby'].forEach(k => { M7_ONLY['job_' + k] = m7Job(k); });
const M7_PIC = Object.assign({}, M6_PIC, M7_ONLY);

/* ---- 묶음 ---- */
const M7_BUNDLES = [
  {k:1, title:'편지를 써요', topic:'편지의 틀과 안부', nights:[1, 2, 3], after:'그동안 할머니 할아버지께 손으로 편지를 한 장 써 봐.'},
  {k:2, title:'일기를 써요', topic:'글에서 쓰는 ~다 말투', nights:[4, 5, 6], after:'그동안 날마다 일기를 한 편씩 써 봐.'},
  {k:3, title:'내 생각은요', topic:'의견과 까닭, 토론', nights:[7, 8, 9], after:'그동안 가족과 작은 토론을 하며 까닭을 붙여 생각을 말해 봐.'},
  {k:4, title:'옛날이야기', topic:'해님 달님과 이야기 짓기', nights:[10, 11, 12], after:'그동안 가족에게 해님 달님 이야기를 한국어로 들려줘.'},
  {k:5, title:'나의 이야기', topic:'나를 소개하고 꿈 말하기', nights:[13, 14, 15], after:'이제 가족 앞에서 나의 이야기를 들려주고 수료증을 자랑해 봐.'}
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
  dictWords:[] },

/* ---- 셋째 묶음: 내 생각은요 ------------------------------------------
   의견(생각해요)과 까닭(왜냐하면 ~기 때문이에요), 그리고 다른 생각에 예의 있게 답하기(제 생각은 조금 달라요).
   ~다고 생각해요는 둘째 묶음의 ~다 말투에 고 생각해요를 붙인 모양이라 이어서 가르칩니다(좋다 → 좋다고 생각해요).
   토론 주제는 여름과 겨울처럼 아이들이 편하게 편을 고를 수 있는 것으로만 합니다. */
{ n:7, bundle:3, title:'무엇이 더 좋아요?',
  steps:[
    {type:'intro', who:'moi',
     t:'여름이 좋아, 겨울이 좋아? 강아지가 좋아, 고양이가 좋아? 오늘은 내 생각을 말하고 그 까닭도 말해 볼 거야.',
     big:'저는 이렇게 생각해요'},
    {type:'pairs', title:'생각을 말하는 말', who:'moi',
     t:'생각과 까닭을 말할 때 쓰는 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'생각', pic:'think', en:'thought, opinion'}, {w:'생각해요', pic:'think', en:'I think'},
       {w:'왜냐하면', pic:'so', en:'because (at the start)'}, {w:'까닭', pic:'what', en:'reason'},
       {w:'토론', pic:'debate', en:'debate, discussion'}, {w:'강아지', pic:'dog', en:'puppy, dog'}],
     tip:{who:'dami', t:'생각을 말할 때는 까닭을 함께 말해야 힘이 생긴단다. 여름이 좋아요, 하고 끝내지 말고, 왜냐하면 수영을 할 수 있기 때문이에요, 하고 이어 보거라.'}},
    {type:'likes', title:'나는 어느 쪽?', who:'tori',
     t:'둘 가운데 더 좋은 쪽을 골라 봐. 네 생각을 말하는 문장이 만들어져. 정답은 없어!',
     items:[
       {w:'여름과 겨울', pic:'w_summer', labels:['여름', '겨울'], lines:['저는 여름이 더 좋다고 생각해요.', '저는 겨울이 더 좋다고 생각해요.']},
       {w:'강아지와 고양이', pic:'dog', labels:['강아지', '고양이'], lines:['저는 강아지가 더 좋다고 생각해요.', '저는 고양이가 더 좋다고 생각해요.']},
       {w:'산과 바다', pic:'high', labels:['산', '바다'], lines:['저는 산이 더 좋다고 생각해요.', '저는 바다가 더 좋다고 생각해요.']},
       {w:'김밥과 떡볶이', pic:'f_gimbap', labels:['김밥', '떡볶이'], lines:['저는 김밥이 더 좋다고 생각해요.', '저는 떡볶이가 더 좋다고 생각해요.']}],
     tip:{who:'moi', t:'이/가를 잘 봐. 받침이 있는 여름, 산, 김밥에는 이, 받침이 없는 바다, 떡볶이에는 가야.'}},
    {type:'choose', title:'까닭을 이어요', who:'tori',
     t:'생각과 어울리는 까닭을 골라 봐.',
     qs:[
       {pic:'w_summer', t:'저는 여름이 좋아요. 왜냐하면 ...', o:['수영을 할 수 있기 때문이에요.','눈사람을 만들 수 있기 때문이에요.'], a:'수영을 할 수 있기 때문이에요.'},
       {pic:'w_winter', t:'저는 겨울이 좋아요. 왜냐하면 ...', o:['눈이 오기 때문이에요.','더운 날이 많기 때문이에요.'], a:'눈이 오기 때문이에요.'},
       {pic:'dog', t:'저는 강아지가 좋아요. 왜냐하면 ...', o:['같이 산책할 수 있기 때문이에요.','하늘을 날 수 있기 때문이에요.'], a:'같이 산책할 수 있기 때문이에요.'},
       {pic:'think', t:'생각을 말할 때 까닭 앞에 붙이는 말은?', o:['왜냐하면','그리고','마지막에'], a:'왜냐하면'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'강아지', o:['cat','dog','rabbit'], a:'dog'},
       {say:'토론', o:['debate','hg_present','s_classroom'], a:'debate'},
       {say:'생각', o:['think','what','dy_page'], a:'think'},
       {say:'바다', o:['high','w_summer','w_winter'], a:'w_summer'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'생각을 말하는 말을 써 봐.',
     items:[{w:'생각', en:'thought'}, {w:'까닭', en:'reason', hint:{who:'dami', t:'‘닭’에는 ㄹ과 ㄱ이 함께 있단다. 읽어요, 맑아요의 그 받침이지.'}}, {w:'토론', en:'debate'}]}
  ],
  dictWords:[{w:'생각', en:'thought'}, {w:'까닭', en:'reason'}, {w:'토론', en:'debate'}, {w:'왜냐하면', en:'because'}, {w:'강아지', en:'puppy'}] },

{ n:8, bundle:3, title:'왜냐하면',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 생각과 까닭을 한 번에 말해 볼 거야. 그리고 친구 생각이 나와 다를 때 예의 있게 말하는 법도 배워.',
     big:'왜냐하면 ~기 때문이에요'},
    {type:'tense', title:'생각과 까닭', who:'dami',
     t:'까닭은 왜냐하면으로 시작해서 기 때문이에요로 끝낸단다. 그리고 생각은 둘째 묶음의 다 말투에 고 생각해요를 붙이지.',
     cols:['말할 때', '생각과 까닭으로'],
     groups:[
       {rule:'까닭: 요 앞부분에 기 때문이에요', rows:[['재미있어요','재미있기 때문이에요'], ['눈이 와요','눈이 오기 때문이에요'], ['수영할 수 있어요','수영할 수 있기 때문이에요'], ['좋아해요','좋아하기 때문이에요']]},
       {rule:'생각: 다에 고 생각해요', rows:[['좋아요','좋다고 생각해요'], ['재미있어요','재미있다고 생각해요'], ['쉬워요','쉽다고 생각해요']]}],
     note:'쉬워요가 쉽다로 바뀌는 것처럼 모양이 조금 바뀌는 말도 있단다. 처음에는 좋다, 재미있다처럼 쉬운 말로 연습하거라.'},
    {type:'pairs', title:'다른 생각에 답하기', who:'dami',
     t:'생각이 다를 때는 예의 있게 말해야 한단다. 친구와 어른께 하는 말이 조금 다르지.',
     pairs:[
       {when:'생각이 다를 때', pic:'debate', friend:'내 생각은 좀 달라.', elder:'제 생각은 조금 달라요.', en:'I think a little differently.'},
       {when:'상대 말을 인정할 때', pic:'pl5_together', friend:'네 말도 맞아.', elder:'말씀도 맞아요.', en:'You have a point too.'}],
     tip:{who:'tori', t:'다른 생각을 말하기 전에 네 말도 맞아, 하고 먼저 들어 주면 토론이 싸움이 되지 않아.'}},
    {type:'choose', title:'바르게 말한 쪽은?', who:'tori',
     t:'생각과 까닭을 바르게 말한 쪽을 골라 봐.',
     qs:[
       {pic:'w_winter', o:['겨울이 좋다고 생각해요.','겨울이 좋아요고 생각해요.'], a:'겨울이 좋다고 생각해요.', en:'I think winter is good.'},
       {pic:'s_play', o:['왜냐하면 재미있기 때문이에요.','왜냐하면 재미있어요 때문이에요.'], a:'왜냐하면 재미있기 때문이에요.', en:"Because it's fun."},
       {pic:'debate', t:'친구와 생각이 달라요.', o:['내 생각은 좀 달라.','너는 틀렸어!'], a:'내 생각은 좀 달라.', why:'다른 생각은 예의 있게 말해요.'},
       {pic:'p_teacher', t:'선생님과 생각이 달라요.', o:['제 생각은 조금 달라요.','내 생각은 좀 달라.'], a:'제 생각은 조금 달라요.', why:'어른께는 제 생각은으로 말해요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'저는 여름이 더 좋다고 생각해요.', tiles:['저는','여름이','더','좋다고','생각해요.'], extra:['좋아요고'], en:'I think summer is better.'},
       {s:'왜냐하면 수영할 수 있기 때문이에요.', tiles:['왜냐하면','수영할','수','있기','때문이에요.'], en:'Because I can swim.'},
       {s:'제 생각은 조금 달라요.', tiles:['제','생각은','조금','달라요.'], extra:['틀렸어요.'], en:'I think a little differently.'},
       {s:'네 말도 맞아.', tiles:['네','말도','맞아.'], en:'You have a point too.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'생각을 말하는 말에는 ㅎ이 부리는 재주가 숨어 있단다.',
     cmp:[
       {s:'생각해요', d:'생가캐요', n:'ㄱ과 ㅎ이 만나 ㅋ 소리가 나요'},
       {s:'좋다고', d:'조타고', n:'ㅎ과 ㄷ이 만나 ㅌ 소리가 나요'},
       {s:'때문이에요', d:'때무니에요', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'왜냐하면', d:'왜냐하면', n:'받침이 없어서 그대로 나요'}],
     note:'ㅎ은 이웃 소리와 만나면 거센소리로 바꿔 놓는 재주가 있단다. ㄱ과 만나면 ㅋ, ㄷ과 만나면 ㅌ. 넷째 달의 못 해요가 [모태요]였던 것도 같은 재주지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'생각해요', en:'I think', hint:{who:'dami', t:'소리는 [생가캐요]지만 ‘생각’에 ‘해요’를 붙인단다.'}},
       {w:'좋다고', en:'that it is good', hint:{who:'dami', t:'소리는 [조타고]지만 ‘좋’에는 조용한 ㅎ 받침이 있단다.'}},
       {w:'때문이에요', en:"it's because"}]}
  ],
  dictWords:[{w:'생각해요', en:'I think'}, {w:'좋다고', en:'that it is good'}, {w:'때문이에요', en:"it's because"}] },

{ n:9, bundle:3, title:'여름이냐 겨울이냐',
  steps:[
    {type:'intro', who:'dami',
     t:'오늘 한글학교에서 작은 토론을 한단다. 여름과 겨울 가운데 무엇이 더 좋을까? 먼저 글자 없이 귀로만 들어 보거라.',
     big:'여름이 좋아요, 겨울이 좋아요?'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리와 모이가 어떤 까닭을 말하는지 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'dami', t:'오늘은 여름과 겨울 가운데 무엇이 더 좋은지 이야기해 봐요.', en:"Today let's talk about which is better, summer or winter."},
       {who:'tori', t:'저는 겨울이 더 좋다고 생각해요. 왜냐하면 눈사람을 만들 수 있기 때문이에요.', en:'I think winter is better. Because I can make a snowman.'},
       {who:'moi', t:'제 생각은 조금 달라요. 저는 여름이 더 좋다고 생각해요.', en:'I think a little differently. I think summer is better.'},
       {who:'moi', t:'왜냐하면 바다에서 수영할 수 있기 때문이에요.', en:'Because I can swim in the ocean.'},
       {who:'tori', t:'모이 말도 맞아요. 여름에는 수박도 먹을 수 있어요.', en:"Moi has a point. In summer you can eat watermelon too."},
       {who:'moi', t:'토리 말도 맞아요. 겨울에는 설날도 있어요!', en:"Tori has a point too. In winter there's Seollal!"},
       {who:'dami', t:'허허, 둘 다 까닭을 잘 말했어요. 서로 다른 생각을 들어 주는 것, 그게 좋은 토론이란다.', en:'Ho ho, you both gave good reasons. Listening to different ideas, that is a good discussion.'},
       {who:'tori', t:'그럼 봄이랑 가을은요?', en:'Then what about spring and fall?'}],
     note:{who:'dami', t:'토론은 누가 이기는 게 아니란다. 토리와 모이는 자기 생각을 까닭과 함께 말했고, 서로 말도 맞다고 인정해 주었지. 그리고 둘 다 겨울의 설날, 여름의 수영처럼 앞서 배운 것을 까닭으로 가져왔구나.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 토론을 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리는 무엇이 더 좋다고 했어요?', o:['여름','겨울'], a:'겨울'},
       {t:'토리의 까닭은 무엇이에요?', o:['눈사람을 만들 수 있어서','수영할 수 있어서'], a:'눈사람을 만들 수 있어서'},
       {t:'모이는 생각이 다를 때 뭐라고 했어요?', o:['제 생각은 조금 달라요.','토리는 틀렸어요.'], a:'제 생각은 조금 달라요.'},
       {t:'좋은 토론이란 무엇이라고 했어요?', o:['서로 다른 생각을 들어 주는 것','크게 말하는 것'], a:'서로 다른 생각을 들어 주는 것'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 말하는지 잘 보고 대답해 봐.',
     qs:[
       {line:{who:'moi', t:'토리야, 나는 여름이 더 좋아!'}, en:'Tori, I like summer better!', o:['네 말도 맞아. 그런데 나는 겨울이 좋아.','너는 틀렸어.'], a:'네 말도 맞아. 그런데 나는 겨울이 좋아.', why:'먼저 인정하고, 그런데로 내 생각을 말해요.'},
       {line:{who:'dami', t:'토리야, 왜 겨울이 좋으냐?'}, en:'Tori, why do you like winter?', o:['왜냐하면 설날이 있기 때문이에요.','왜냐하면 설날이 있어요 때문이에요.'], a:'왜냐하면 설날이 있기 때문이에요.'},
       {pic:'think', t:'생각을 말하는 문장으로 알맞은 것은?', o:['저는 봄이 좋다고 생각해요.','저는 봄이 좋다 생각해요고.'], a:'저는 봄이 좋다고 생각해요.'}]},
    {type:'task', title:'우리 집 작은 토론', who:'moi',
     t:'가족과 작은 토론을 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'주제를 하나 골라요', say:'아침에 밥이 좋아요, 빵이 좋아요?', sub:'여름과 겨울, 강아지와 고양이도 좋아요.'},
       {when:'생각과 까닭을 말해요', say:'저는 ______이 좋다고 생각해요. 왜냐하면 ______기 때문이에요.', sub:'까닭은 하나면 충분해요.'},
       {when:'다른 생각을 들으면', say:'말씀도 맞아요. 그런데 제 생각은 조금 달라요.', sub:'형제에게는 네 말도 맞아, 내 생각은 좀 달라.'}],
     parent:'저녁 식탁에서 가볍게 편을 나눌 수 있는 주제로 토론해 보세요. 누가 옳은지가 아니라, 아이가 "생각해요"와 "왜냐하면 ~기 때문이에요"로 까닭을 붙여 말하는지를 봐 주시면 됩니다. 부모님이 일부러 다른 편을 들어 주시면 아이가 "제 생각은 조금 달라요"를 연습할 기회가 생깁니다. 다른 사람의 생각을 먼저 인정하고 자기 생각을 말하는 태도도 함께 칭찬해 주세요.'}
  ],
  dictWords:[] },

/* ---- 넷째 묶음: 옛날이야기 -------------------------------------------
   한국 옛이야기 "해와 달이 된 오누이(해님 달님)"를 듣고, 다시 들려주고, 끝을 바꿔 새 이야기를 짓습니다.
   옛이야기의 말투 "~었대요"는 둘째 묶음의 ~다 말투에서 다를 대요로 바꾼 모양이라 이어서 가르칩니다(갔다 → 갔대요).
   원래 이야기에는 호랑이가 어머니를 해치는 대목이 있지만, 달토끼에서는 호랑이가 떡을 빼앗고 어머니는
   다른 길로 무사히 돌아오는 것으로 부드럽게 바꿨습니다. 부모님 안내에 이 점을 밝힙니다.
   이야기 속 호랑이는 담이와 다른 욕심쟁이 호랑이입니다. */
{ n:10, bundle:4, title:'옛날 옛적에',
  steps:[
    {type:'intro', who:'moi',
     t:'한국 옛이야기는 늘 이렇게 시작해. 옛날 옛적에! 오늘은 해와 달이 어떻게 생겼는지 알려 주는 옛이야기에 나오는 말을 모아 왔어.',
     big:'옛날 옛적에'},
    {type:'pairs', title:'이야기에 나오는 말', who:'moi',
     t:'해님 달님 이야기에 나오는 말이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'오누이', pic:'hd_sibs', en:'brother and sister'}, {w:'어머니', pic:'hd_mother', en:'mother'},
       {w:'호랑이', pic:'hd_tiger', en:'tiger'}, {w:'고개', pic:'hd_hill', en:'mountain pass'},
       {w:'동아줄', pic:'hd_rope', en:'thick rope'}, {w:'해', pic:'hd_sunmoon', en:'sun'}, {w:'달', pic:'chu_fullmoon', en:'moon'}],
     tip:{who:'dami', t:'미리 말해 두마. 이 이야기에 나오는 호랑이는 이 할아버지가 아니란다! 떡을 욕심내는 욕심쟁이 호랑이지. 오누이는 오빠와 누이, 곧 남매란 뜻이란다.'}},
    {type:'pairs', title:'이야기 말투', who:'tori',
     t:'옛이야기를 들려줄 때 자주 쓰는 말이야.',
     singles:[
       {w:'옛날 옛적에', pic:'hd_book', en:'once upon a time'}, {w:'살았대요', pic:'hd_sibs', en:'(they say) lived'},
       {w:'그래서 어떻게 되었을까요?', pic:'what', en:'So what happened next?'}]},
    {type:'choose', title:'이야기 말 찾기', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'hd_sibs', o:['오누이','어머니','호랑이'], a:'오누이'},
       {pic:'hd_rope', o:['동아줄','고개','나무'], a:'동아줄'},
       {pic:'hd_tiger', t:'이 호랑이는 담이 할아버지예요?', o:['네, 담이 할아버지예요.','아니요, 욕심쟁이 호랑이예요.'], a:'아니요, 욕심쟁이 호랑이예요.'},
       {pic:'hd_book', t:'옛이야기는 어떻게 시작해요?', o:['옛날 옛적에','안녕히 주무세요','잘 먹겠습니다'], a:'옛날 옛적에'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'고개', o:['hd_hill','hd_tree','hd_rope'], a:'hd_hill'},
       {say:'어머니', o:['hd_sibs','hd_mother','p_grandma'], a:'hd_mother'},
       {say:'해와 달', o:['hd_sunmoon','chu_fullmoon','w_sunny'], a:'hd_sunmoon'},
       {say:'호랑이', o:['cat','hd_tiger','dog'], a:'hd_tiger'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'이야기 말을 써 봐.',
     items:[{w:'호랑이', en:'tiger'}, {w:'오누이', en:'brother and sister'}, {w:'하늘', en:'sky'}]}
  ],
  dictWords:[{w:'호랑이', en:'tiger'}, {w:'오누이', en:'siblings'}, {w:'어머니', en:'mother'}, {w:'고개', en:'mountain pass'}, {w:'동아줄', en:'rope'}, {w:'해', en:'sun'}] },

{ n:11, bundle:4, title:'그래서 어떻게 되었을까요?',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 옛이야기를 들려주는 말투를 배우고, 해님 달님 이야기를 차례대로 맞춰 볼 거야.',
     big:'오누이가 살았대요'},
    {type:'tense', title:'일기 말투와 이야기 말투', who:'dami',
     t:'옛이야기를 들려줄 때는 들은 이야기라서 대요를 붙인단다. 일기의 다를 대요로 바꾸면 되지.',
     cols:['일기에 쓸 때', '옛이야기를 들려줄 때'],
     groups:[
       {rule:'다를 대요로', rows:[['살았다','살았대요'], ['갔다','갔대요'], ['먹었다','먹었대요'], ['내려왔다','내려왔대요'], ['되었다','되었대요']]}],
     note:'대요는 들은 이야기를 전할 때 쓴단다. 나도 누군가에게 들었다는 뜻이지. 옛이야기는 오래오래 사람들 입에서 입으로 전해졌으니 딱 맞는 말투지.'},
    {type:'sequence', title:'해님 달님 이야기 순서', who:'moi',
     t:'이야기가 섞였어. 차례대로 눌러 줘.',
     qs:[
       {cards:[{pic:'hd_hill', t:'호랑이가 고개에서 어머니의 떡을 다 빼앗았대요.'}, {pic:'hd_tree', t:'호랑이가 오누이 집에 오자 오누이는 나무 위로 도망쳤대요.'}, {pic:'hd_rope', t:'하늘에서 튼튼한 동아줄이 내려왔대요.'}, {pic:'hd_sunmoon', t:'오빠는 달이 되고 누이는 해가 되었대요.'}]}]},
    {type:'choose', title:'이야기 말투로 말해요', who:'tori',
     t:'옛이야기 말투로 바르게 말한 쪽을 골라 봐.',
     qs:[
       {pic:'hd_sibs', o:['오누이가 살았대요.','오누이가 살았다요.'], a:'오누이가 살았대요.'},
       {pic:'hd_rope', o:['동아줄이 내려왔대요.','동아줄이 내려왔데요.'], a:'동아줄이 내려왔대요.', why:'들은 이야기는 대요로 써요. ㅐ를 써요.'},
       {pic:'hd_sunmoon', t:'누이는 무엇이 되었대요?', o:['해가 되었대요.','달이 되었대요.'], a:'해가 되었대요.'},
       {pic:'hd_tree', t:'오누이는 어디로 도망쳤대요?', o:['나무 위로','고개 아래로'], a:'나무 위로'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 옛이야기 문장을 만들어 봐.',
     qs:[
       {s:'옛날 옛적에 오누이가 살았대요.', tiles:['옛날','옛적에','오누이가','살았대요.'], en:'Once upon a time, there lived a brother and sister.'},
       {s:'호랑이가 떡을 다 먹었대요.', tiles:['호랑이가','떡을','다','먹었대요.'], extra:['먹었다요.'], en:'The tiger ate all the rice cakes.'},
       {s:'하늘에서 동아줄이 내려왔대요.', tiles:['하늘에서','동아줄이','내려왔대요.'], en:'A rope came down from the sky.'},
       {s:'그래서 어떻게 되었을까요?', tiles:['그래서','어떻게','되었을까요?'], en:'So what happened next?'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'옛이야기 말에는 새로운 소리 비밀이 하나 숨어 있단다.',
     cmp:[
       {s:'옛날', d:'옌날', n:'ㅅ 받침이 ㄴ 앞에서 ㄴ처럼 나요'},
       {s:'떡 하나', d:'떠카나', n:'ㄱ과 ㅎ이 만나 ㅋ 소리가 나요'},
       {s:'먹었대요', d:'머걷때요', n:'ㅆ은 ㄷ처럼, 대는 때처럼 나요'},
       {s:'하늘에서', d:'하느레서', n:'ㄹ 받침이 뒤로 건너가요'}],
     note:'옛날의 [옌날]은 받침이 뒤의 ㄴ을 닮아 ㄴ으로 바뀌는 게야. 첫째 달부터 일곱째 달까지, 한국어 소리는 이웃끼리 서로 닮고 건너가고 세지는 재미가 있단다. 그래도 글자는 늘 제자리란다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'옛날', en:'long ago', hint:{who:'dami', t:'소리는 [옌날]이지만 ‘옛’에 받침 ㅅ이 있단다.'}},
       {w:'살았대요', en:'(they say) lived', hint:{who:'dami', t:'‘대’는 ㅐ란다. 들은 이야기를 전하는 대요지.'}},
       {w:'동아줄', en:'rope'}]}
  ],
  dictWords:[{w:'옛날', en:'long ago'}, {w:'살았대요', en:'(they say) lived'}, {w:'되었대요', en:'(they say) became'}] },

{ n:12, bundle:4, title:'해님 달님',
  steps:[
    {type:'intro', who:'dami',
     t:'오늘은 이 할아버지가 해님 달님 이야기를 처음부터 끝까지 들려주마. 다 듣고 나면 너만의 이야기도 지어 보거라. 먼저 귀로만 들어 보거라.',
     big:'해와 달이 된 오누이'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'dami', t:'옛날 옛적에 산골에 오누이와 어머니가 살았단다.', en:'Once upon a time, a brother, a sister, and their mother lived in the mountains.'},
       {who:'dami', t:'어머니가 떡을 팔고 돌아오는데, 고개에서 호랑이가 나타났지. 떡 하나 주면 안 잡아먹지!', en:'As the mother came home from selling rice cakes, a tiger appeared at the pass. "Give me a rice cake and I won\'t eat you!"'},
       {who:'moi', t:'할아버지, 그 호랑이가 할아버지예요?', en:'Grandpa, is that tiger you?'},
       {who:'dami', t:'허허, 아니란다! 욕심쟁이 호랑이지. 호랑이가 떡을 다 먹는 사이에 어머니는 다른 길로 집에 돌아왔단다.', en:'Ho ho, no! It is a greedy tiger. While it ate all the rice cakes, the mother came home another way.'},
       {who:'dami', t:'그런데 호랑이가 오누이 집까지 따라왔지. 오누이는 나무 위로 도망쳐서 하늘에 빌었단다.', en:'But the tiger followed them home. The children fled up a tree and prayed to the sky.'},
       {who:'tori', t:'그래서 어떻게 되었어요?', en:'So what happened?'},
       {who:'dami', t:'튼튼한 동아줄이 내려왔지. 오빠는 달이 되고 누이는 해가 되었단다. 호랑이는 헌 동아줄을 잡았다가 쿵 떨어졌지.', en:'A strong rope came down. The brother became the moon, and the sister became the sun. The tiger grabbed an old rope and fell with a thud.'},
       {who:'tori', t:'오빠가 달이 되었으면, 달토끼도 그 달에 살아요?', en:'If the brother became the moon, does the moon rabbit live there too?'}],
     note:{who:'dami', t:'허허, 그럴지도 모르지. 옛이야기는 지혜롭고 용감한 사람이 어려움을 이겨 낸다는 이야기가 많단다. 오누이는 무서웠지만 함께 힘을 모았지. 이제 네 차례다. 이야기의 끝을 바꿔서 너만의 옛이야기를 지어 보거라.'}},
    {type:'letter', title:'나만의 옛이야기', who:'tori',
     t:'칸마다 하나씩 골라서 나만의 옛이야기를 지어 봐. 오른쪽에 이야기가 만들어져.',
     parts:[
       {label:'누가', opts:['옛날 옛적에 토끼가 살았대요.', '옛날 옛적에 까치가 살았대요.', '옛날 옛적에 호랑이가 살았대요.']},
       {label:'어디에서', opts:['산속 작은 집에서 살았대요.', '바닷가 마을에서 살았대요.', '달나라에서 살았대요.']},
       {label:'무슨 일이', opts:['어느 날 배고픈 호랑이를 만났대요.', '어느 날 반짝이는 보물을 찾았대요.', '어느 날 길을 잃어버렸대요.']},
       {label:'어떻게', opts:['그래서 떡을 나눠 주었대요.', '그래서 친구들이 도와주었대요.', '그래서 지혜롭게 꾀를 냈대요.']},
       {label:'끝', opts:['모두 행복하게 살았대요.', '그래서 하늘의 별이 되었대요.', '둘은 좋은 친구가 되었대요.']}],
     noName:true, readLabel:'이야기 들려주기',
     tip:{who:'moi', t:'마음에 들면 인쇄해서 그림도 그려 봐. 나만의 그림책이 돼!'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'호랑이는 어머니에게 무엇을 달라고 했어요?', o:['떡','돈','옷'], a:'떡'},
       {t:'오누이는 어디로 도망쳤어요?', o:['나무 위','집 안','고개 아래'], a:'나무 위'},
       {t:'오빠는 무엇이 되었어요?', o:['해','달','별'], a:'달'},
       {t:'호랑이는 어떻게 되었어요?', o:['헌 동아줄을 잡았다가 떨어졌어요','해가 되었어요'], a:'헌 동아줄을 잡았다가 떨어졌어요'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'hd_sunmoon', line:{who:'moi', t:'토리야, 누이는 뭐가 됐어?'}, en:'Tori, what did the sister become?', o:['해가 됐대.','해가 됐대요.'], a:'해가 됐대.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'hd_rope', line:{who:'dami', t:'토리야, 하늘에서 무엇이 내려왔느냐?'}, en:'Tori, what came down from the sky?', o:['동아줄이 내려왔대요.','동아줄이 내려왔대.'], a:'동아줄이 내려왔대요.', why:'할아버지께는 대요로 말해요.'},
       {pic:'hd_book', t:'할머니께 옛이야기를 들려드려요. 처음 말은?', o:['옛날 옛적에','마지막에','왜냐하면'], a:'옛날 옛적에'}]},
    {type:'task', title:'이야기 들려주기', who:'moi',
     t:'가족에게 옛이야기를 들려줘. 해님 달님도 좋고, 내가 지은 이야기도 좋아. 다 하면 했어요를 눌러.',
     lines:[
       {when:'처음에', say:'옛날 옛적에 ______이 살았대요.', sub:'받침이 없으면 가: 까치가 살았대요.'},
       {when:'가운데', say:'어느 날 ______었대요. 그래서 ______었대요.', sub:'그리고, 그래서, 그런데로 이어요.'},
       {when:'끝에', say:'그래서 행복하게 살았대요.', sub:'듣는 가족에게 그래서 어떻게 되었을까요? 하고 물어봐도 좋아요.'}],
     parent:'해님 달님(해와 달이 된 오누이)은 한국 아이들이 어릴 때 가장 많이 듣는 옛이야기 가운데 하나입니다. 원래 이야기에는 호랑이가 어머니를 해치는 대목이 있지만, 달토끼에서는 호랑이가 떡만 빼앗고 어머니는 다른 길로 무사히 돌아오는 것으로 부드럽게 바꿨습니다. 아이가 원래 이야기를 궁금해하면 나이에 맞게 들려주셔도 됩니다. 조부모님께 이 이야기를 한국어로 들려달라고 부탁드리면, 아이가 오늘 배운 "~었대요" 말투를 실제로 듣게 됩니다.'}
  ],
  dictWords:[] },

/* ---- 다섯째 묶음: 나의 이야기 -----------------------------------------
   일곱 달 동안 배운 말을 모아 자기를 소개하고(이름, 나이, 가족, 좋아하는 것, 잘하는 것, 취미),
   꿈을 말합니다(~이/가 되고 싶어요, 왜냐하면 ~기 때문이에요).
   마지막 밤에 토리, 모이, 담이, 호랑이 할머니가 모두 모여 일곱 번째 보름달을 보고,
   이름을 넣어 인쇄하는 수료증으로 달토끼를 마칩니다. 이름은 저장하지 않습니다. */
{ n:13, bundle:5, title:'나를 소개해요',
  steps:[
    {type:'intro', who:'moi',
     t:'달토끼의 마지막 묶음이야! 일곱 달 동안 배운 말로 너를 소개해 볼 거야. 둘째 달의 첫 인사 기억나? 이제는 훨씬 많이 말할 수 있어.',
     big:'저를 소개할게요'},
    {type:'pairs', title:'나를 소개하는 말', who:'moi',
     t:'나를 소개할 때 쓰는 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'소개', pic:'hg_present', en:'introduction'}, {w:'취미', pic:'job_hobby', en:'hobby'},
       {w:'잘해요', pic:'mood_happy', en:'am good at'}, {w:'좋아하는 것', pic:'m_like', en:'things I like'},
       {w:'저를 소개할게요', pic:'hg_present', en:'Let me introduce myself'}],
     tip:{who:'tori', t:'둘째 달에는 저는 토리예요만 말했는데, 이제는 나이, 가족, 좋아하는 것, 잘하는 것, 꿈까지 말할 수 있어!'}},
    {type:'letter', title:'나의 소개 글', who:'tori',
     t:'칸마다 너에게 맞는 문장을 골라 봐. 없으면 제일 비슷한 걸 골라. 오른쪽에 소개 글이 만들어져. 이름은 소리 내어 말할 때 넣어 봐.',
     parts:[
       {label:'첫인사', opts:['안녕하세요. 저를 소개할게요.', '만나서 반가워요. 저를 소개할게요.']},
       {label:'나이', opts:['저는 일곱 살이에요.', '저는 여덟 살이에요.', '저는 아홉 살이에요.', '저는 열 살이에요.']},
       {label:'가족', opts:['우리 가족은 네 명이에요.', '저는 동생이 있어요.', '저는 형이나 언니가 있어요.']},
       {label:'좋아하는 것', opts:['저는 떡볶이를 좋아해요.', '저는 강아지를 좋아해요.', '저는 겨울을 좋아해요.']},
       {label:'잘하는 것', opts:['저는 그림을 잘 그려요.', '저는 자전거를 잘 타요.', '저는 한글을 잘 읽어요.']}],
     noName:true, readLabel:'소개 글 읽어 주기',
     tip:{who:'dami', t:'네 명의 명은 사람을 세는 말이란다. 한 명, 두 명, 세 명, 네 명. 셋째 달의 한 개, 두 개처럼 줄어드는 숫자를 쓰지.'}},
    {type:'choose', title:'나를 소개해요', who:'tori',
     t:'소개하는 말로 바르게 쓴 쪽을 골라 봐.',
     qs:[
       {pic:'job_hobby', t:'취미를 말해요.', o:['제 취미는 그림 그리기예요.','제 취미는 그림 그리기이에요.'], a:'제 취미는 그림 그리기예요.', why:'‘기’에는 받침이 없어서 예요예요.'},
       {pic:'pl5_bike', o:['저는 자전거를 잘 타요.','저는 자전거를 잘 해요.'], a:'저는 자전거를 잘 타요.', why:'자전거는 타요예요.'},
       {pic:'seol_family', t:'가족이 네 명이에요.', o:['우리 가족은 네 명이에요.','우리 가족은 넷 명이에요.'], a:'우리 가족은 네 명이에요.', why:'명 앞에서 넷은 네로 줄어요.'},
       {pic:'m_like', o:['저는 떡볶이를 좋아해요.','저는 떡볶이가 좋아해요.'], a:'저는 떡볶이를 좋아해요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'취미', o:['job_hobby','job_dream','think'], a:'job_hobby'},
       {say:'소개', o:['debate','hg_present','ml_letter'], a:'hg_present'},
       {say:'가족', o:['seol_family','hd_sibs','pl5_together'], a:'seol_family'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'나를 소개하는 말을 써 봐.',
     items:[{w:'소개', en:'introduction'}, {w:'취미', en:'hobby'}, {w:'잘해요', en:'am good at'}]}
  ],
  dictWords:[{w:'소개', en:'introduction'}, {w:'취미', en:'hobby'}, {w:'잘해요', en:'am good at'}, {w:'명', en:'(counter for people)'}] },

{ n:14, bundle:5, title:'커서 무엇이 되고 싶어요?',
  steps:[
    {type:'intro', who:'tori',
     t:'커서 무엇이 되고 싶어? 오늘은 꿈을 말해 볼 거야. 그리고 셋째 묶음의 왜냐하면으로 까닭도 붙여 봐.',
     big:'저는 커서 선생님이 되고 싶어요'},
    {type:'pairs', title:'여러 가지 꿈', who:'moi',
     t:'여러 가지 일이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'꿈', pic:'job_dream', en:'dream'}, {w:'의사', pic:'job_doctor', en:'doctor'}, {w:'선생님', pic:'p_teacher', en:'teacher'},
       {w:'요리사', pic:'job_chef', en:'chef'}, {w:'과학자', pic:'job_scientist', en:'scientist'},
       {w:'화가', pic:'job_painter', en:'painter'}, {w:'운동선수', pic:'job_athlete', en:'athlete'}]},
    {type:'tense', title:'~이 되고 싶어요', who:'dami',
     t:'무엇이 되고 싶다고 할 때는 되고 싶어요 앞에 이나 가를 붙인단다. 받침 삼 형제가 마지막 달까지 따라왔구나.',
     cols:['꿈', '~이/가 되고 싶어요'],
     groups:[
       {rule:'받침이 있으면 이', rows:[['선생님','선생님이 되고 싶어요'], ['소방관','소방관이 되고 싶어요']]},
       {rule:'받침이 없으면 가', rows:[['의사','의사가 되고 싶어요'], ['요리사','요리사가 되고 싶어요'], ['화가','화가가 되고 싶어요'], ['운동선수','운동선수가 되고 싶어요']]}],
     note:'운동선수의 ‘수’에는 받침이 없으니 가란다. 둘째 달에 배운 이와 가가 이렇게 마지막 달까지 쓰이는구나.'},
    {type:'likes', title:'나의 꿈', who:'tori',
     t:'되고 싶은 것에는 ‘되고 싶어요’를, 아닌 것에는 ‘글쎄요’를 눌러 봐. 세 개 이상 하면 다음으로 갈 수 있어.',
     labels:['되고 싶어요', '글쎄요'],
     items:[
       {w:'의사', pic:'job_doctor', lines:['저는 커서 의사가 되고 싶어요.', '의사는 글쎄요. 잘 모르겠어요.']},
       {w:'선생님', pic:'p_teacher', lines:['저는 커서 선생님이 되고 싶어요.', '선생님은 글쎄요. 잘 모르겠어요.']},
       {w:'요리사', pic:'job_chef', lines:['저는 커서 요리사가 되고 싶어요.', '요리사는 글쎄요. 잘 모르겠어요.']},
       {w:'과학자', pic:'job_scientist', lines:['저는 커서 과학자가 되고 싶어요.', '과학자는 글쎄요. 잘 모르겠어요.']},
       {w:'화가', pic:'job_painter', lines:['저는 커서 화가가 되고 싶어요.', '화가는 글쎄요. 잘 모르겠어요.']},
       {w:'운동선수', pic:'job_athlete', lines:['저는 커서 운동선수가 되고 싶어요.', '운동선수는 글쎄요. 잘 모르겠어요.']}],
     tip:{who:'moi', t:'꿈은 바뀌어도 괜찮아. 나는 어제는 요리사, 오늘은 화가가 되고 싶어!'}},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 꿈을 말해 봐.',
     qs:[
       {s:'저는 커서 의사가 되고 싶어요.', tiles:['저는','커서','의사가','되고','싶어요.'], extra:['의사이'], en:'I want to be a doctor when I grow up.'},
       {s:'왜냐하면 아픈 사람을 돕고 싶기 때문이에요.', tiles:['왜냐하면','아픈','사람을','돕고','싶기','때문이에요.'], en:'Because I want to help sick people.'},
       {s:'제 꿈은 선생님이에요.', tiles:['제','꿈은','선생님이에요.'], extra:['선생님예요.'], en:'My dream is to be a teacher.'},
       {s:'저는 한국어를 잘해요.', tiles:['저는','한국어를','잘해요.'], en:'I am good at Korean.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'꿈을 말하는 말에도 받침이 건너가지. 이 할아버지의 마지막 소리 비밀이란다.',
     cmp:[
       {s:'꿈이', d:'꾸미', n:'ㅁ 받침이 뒤로 건너가요'},
       {s:'선생님이', d:'선생니미', n:'ㅁ 받침이 뒤로 건너가요'},
       {s:'싶어요', d:'시퍼요', n:'ㅍ 받침이 뒤로 건너가요'},
       {s:'잘해요', d:'잘해요', n:'받침 ㄹ 뒤의 ㅎ은 약하게 나요'}],
     note:'첫째 달에 받침을 처음 배웠을 때를 떠올려 보거라. 이제는 받침이 건너가고, 닮고, 세지고, 조용해지는 까닭까지 다 아는구나. 이 할아버지가 더 가르칠 게 없단다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'꿈을 말하는 말을 써 봐.',
     items:[{w:'꿈', en:'dream'}, {w:'의사', en:'doctor', hint:{who:'dami', t:'첫 글자는 ㅇ에 모음 ㅢ란다.'}}, {w:'과학자', en:'scientist'}]}
  ],
  dictWords:[{w:'꿈', en:'dream'}, {w:'의사', en:'doctor'}, {w:'요리사', en:'chef'}, {w:'과학자', en:'scientist'}, {w:'화가', en:'painter'}] },

{ n:15, bundle:5, title:'일곱 번째 보름달',
  steps:[
    {type:'intro', who:'dami',
     t:'달토끼의 마지막 밤이란다. 오늘 밤 일곱 번째 보름달이 떴지. 모두 모였으니 먼저 귀로만 들어 보거라.',
     big:'일곱 번째 보름달'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리가 일곱 달 동안의 이야기를 해. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'dami', t:'토리야, 오늘 밤 일곱 번째 보름달이 떴구나.', en:'Tori, the seventh full moon has risen tonight.'},
       {who:'tori', t:'할아버지, 처음 달토끼에 왔을 때 저는 한글도 몰랐어요.', en:"Grandpa, when I first came to Dal Tokki, I didn't even know Hangul."},
       {who:'moi', t:'맞아! 그때 기역, 니은부터 배웠지.', en:'Right! Back then we learned from giyeok and nieun.'},
       {who:'tori', t:'그다음에 인사를 배우고, 가족을 부르고, 하루를 말했어요.', en:'Then I learned greetings, called my family, and talked about my day.'},
       {who:'halmi', t:'한국에도 와서 할머니한테 세배도 했지.', en:'You even came to Korea and gave me a New Year bow.'},
       {who:'tori', t:'이제는 편지도 쓰고, 일기도 쓰고, 제 생각도 말할 수 있어요!', en:'Now I can write letters, keep a diary, and share my own thoughts!'},
       {who:'tori', t:'저는 커서 한국어 선생님이 되고 싶어요. 왜냐하면 친구들에게 한글을 가르쳐 주고 싶기 때문이에요.', en:'When I grow up I want to be a Korean teacher. Because I want to teach Hangul to my friends.'},
       {who:'dami', t:'허허, 달이 한 밤씩 차듯 토리도 한 밤씩 자랐구나. 참 잘했다.', en:'Ho ho, just as the moon fills night by night, you grew night by night too. Well done.'}],
     note:{who:'dami', t:'달토끼는 여기서 끝나지만 한국어는 끝나지 않는단다. 받아쓰기실에서 날마다 방아를 찧고, 가족과 한국어로 이야기하고, 할머니 할아버지께 편지를 쓰거라. 보름달이 뜰 때마다 이 할아버지와 토리, 모이를 떠올려 주면 좋겠구나.'}},
    {type:'choose', title:'일곱 달을 떠올려요', who:'tori',
     t:'토리와 함께 걸어온 일곱 달을 떠올려 봐.',
     qs:[
       {t:'토리가 첫째 달에 배운 것은?', o:['한글','편지','토론'], a:'한글'},
       {t:'토리가 한국 할머니 댁에서 설날에 한 것은?', o:['세배','수영','숙제'], a:'세배'},
       {t:'달토끼는 달에서 무엇을 해요?', o:['떡방아를 찧어요','수영을 해요','잠을 자요'], a:'떡방아를 찧어요'},
       {t:'토리의 꿈은 무엇이에요?', o:['한국어 선생님','요리사','화가'], a:'한국어 선생님'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'마지막으로 네가 토리가 되어 대답해 봐.',
     qs:[
       {line:{who:'halmi', t:'토리야, 커서 무엇이 되고 싶니?'}, en:'Tori, what do you want to be when you grow up?', o:['한국어 선생님이 되고 싶어요.','한국어 선생님이 되고 싶어.'], a:'한국어 선생님이 되고 싶어요.', why:'할머니께는 높이는 말로 대답해요.'},
       {line:{who:'moi', t:'토리야, 달토끼 재미있었어?'}, en:'Tori, was Dal Tokki fun?', o:['응, 정말 재미있었어!','네, 정말 재미있었어요.'], a:'응, 정말 재미있었어!', why:'모이는 친구라서 편한 말로 대답해요.'},
       {line:{who:'dami', t:'토리야, 이제 한국어를 그만 배워도 되겠구나?'}, en:'Tori, you can stop learning Korean now, right?', o:['아니요, 앞으로도 계속 배울 거예요!','네, 이제 그만할래요.'], a:'아니요, 앞으로도 계속 배울 거예요!', why:'달토끼는 끝나도 한국어 공부는 계속돼요.'}]},
    {type:'certificate', title:'달토끼 수료증', who:'moi',
     t:'일곱 달 동안 정말 잘했어! 네 이름을 쓰고 수료증을 인쇄해 봐.',
     certTitle:'수료증',
     body:'위 어린이는 달토끼에서 일곱 달, 아흔여덟 밤 동안 한글과 한국어를 꾸준히 배워 일곱 개의 보름달을 가득 채웠기에 이 증서를 드립니다. 앞으로도 한국어로 꿈을 키워 가기를 바랍니다.',
     from:'달토끼 토리, 모이, 담이',
     tip:{who:'dami', t:'이름은 이 화면에만 보이고 어디에도 저장되지 않는단다. 인쇄해서 벽에 붙이고, 할머니 할아버지께도 자랑하거라.'}},
    {type:'task', title:'나의 이야기 발표', who:'moi',
     t:'달토끼 마지막 과제야. 가족 앞에서 나의 이야기를 들려주고 수료증을 받아 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'처음에 나를 소개해요', say:'안녕하세요. 저를 소개할게요.', sub:'이름, 나이, 가족, 좋아하는 것.'},
       {when:'달토끼에서 배운 것을 말해요', say:'저는 달토끼에서 ______을 배웠어요.', sub:'한글, 인사, 편지, 일기, 무엇이든 좋아요.'},
       {when:'마지막에 꿈을 말해요', say:'저는 커서 ______이 되고 싶어요.', sub:'왜냐하면 ______기 때문이에요.'}],
     parent:'달토끼의 마지막 과제입니다. 아이가 가족 앞에서 자기소개, 달토끼에서 배운 것, 꿈을 이어서 말하게 해 주세요. 발표가 끝나면 인쇄한 수료증을 가족이 직접 건네주시면 아이에게 오래 남는 순간이 됩니다. 일곱 달 동안 아이 곁에서 함께해 주셔서 감사합니다. 달토끼를 마친 뒤에도 받아쓰기실에서 복습을 이어 가고, 한국어 그림책 읽기, 조부모님과의 영상 통화, 한글학교 활동으로 한국어를 계속 써 주세요.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인 ----
   묶음마다 세 문제, 두 문제 이상 맞히면 그 묶음을 건너뜁니다. */
const M7_CHECK = [
  {k:1, qs:[
    {pic:'ml_p_to', t:'할머니께 편지를 써요. 맨 위에는?', o:['할머니에게','할머니께'], a:'할머니께'},
    {t:'약속하는 말은 어느 쪽이에요?', o:['방학에 꼭 갈게요.','방학에 갔어요.'], a:'방학에 꼭 갈게요.'},
    {mode:'pic', say:'우표', t:'듣고 그림을 골라요.', o:['ml_envelope','ml_stamp','ml_letter'], a:'ml_stamp'}]},
  {k:2, qs:[
    {t:'갔어요. 일기에는?', o:['갔다.','갔어요.'], a:'갔다.'},
    {pic:'dy_page', t:'일기에서 나를 말할 때는?', o:['저는','나는'], a:'나는'},
    {mode:'pic', say:'날씨', t:'듣고 그림을 골라요.', o:['dy_date','dy_weather','dy_felt'], a:'dy_weather'}]},
  {k:3, qs:[
    {pic:'s_play', t:'왜냐하면 ...', o:['재미있기 때문이에요.','재미있어요 때문이에요.'], a:'재미있기 때문이에요.'},
    {pic:'p_teacher', t:'선생님과 생각이 달라요.', o:['내 생각은 좀 달라.','제 생각은 조금 달라요.'], a:'제 생각은 조금 달라요.'},
    {pic:'think', t:'생각을 말하는 문장으로 알맞은 것은?', o:['저는 봄이 좋다고 생각해요.','저는 봄이 좋다 생각해요고.'], a:'저는 봄이 좋다고 생각해요.'}]},
  {k:4, qs:[
    {pic:'hd_sibs', t:'옛이야기 말투로 알맞은 것은?', o:['오누이가 살았대요.','오누이가 살았다요.'], a:'오누이가 살았대요.'},
    {mode:'pic', say:'동아줄', t:'듣고 그림을 골라요.', o:['hd_hill','hd_rope','hd_tree'], a:'hd_rope'},
    {pic:'hd_sunmoon', t:'누이는 무엇이 되었대요?', o:['해','달'], a:'해'}]},
  {k:5, qs:[
    {mode:'pic', say:'요리사', t:'듣고 그림을 골라요.', o:['job_doctor','job_chef','job_painter'], a:'job_chef'},
    {pic:'p_teacher', t:'저는 커서 선생님___ 되고 싶어요.', o:['이','가'], a:'이'},
    {pic:'job_hobby', t:'제 취미는 그림 그리기___.', o:['예요','이에요'], a:'예요'}]}
];

/* ---- 받아쓰기 자판: 여섯째 달과 같습니다 ---- */
const M7_POOL = M6_POOL;

/* 달 등록 정보 */
const SEVENTH_MOON = {
  key: 'seventh-moon', title: '일곱째 달', path: 'seventh-moon/',
  store: 'daltokki:v1:seventh-moon',
  units: M7_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M7_POOL,
  num: 7, name: '일곱째 달', title2: '일곱째 달, 나의 이야기', nextName: '다음 달', final: true,
  topics: '편지, 일기, 내 생각, 옛날이야기, 나의 이야기',
  nights: M7_NIGHTS, bundles: M7_BUNDLES, pic: M7_PIC, keys: M7_POOL, total: M7_TOTAL, check: M7_CHECK,
  prev: {store: 'daltokki:v1:sixth-moon', total: 15},
  text: {
    welcomePrev: '여섯째 달을 다 채웠구나. 이제 달토끼의 마지막 달이야. 편지와 일기를 쓰고, 생각을 말하고, 옛날이야기를 짓고, 마지막에 네 이야기를 해 보자. 열다섯 밤이면 일곱 번째 보름달이 떠.',
    welcomeFresh: '일곱째 달에서는 글을 쓰고 생각을 말해. 여섯째 달까지의 말을 알고 오면 훨씬 쉬워. 이미 한국어를 잘하면 여기서 시작해도 돼.',
    parents: '일곱째 달은 편지, 일기, 토론, 옛날이야기, 나의 이야기의 다섯 묶음으로, 묶음마다 세 밤입니다. 글쓰기는 사이트 자판보다 종이에 손으로 쓰도록 이끌고, 마지막 밤에는 아이 이름을 넣어 인쇄하는 수료증이 있습니다(이름은 저장하지 않습니다).'
  }
};
