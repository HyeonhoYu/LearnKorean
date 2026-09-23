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
/* ---- 둘째 묶음 그림: 학교와 한글학교 ---- */
function m3School(kind){
  const S = '#221F1C', inner = m => m.replace(/<\/?svg[^>]*>/g, '');
  const g = {
    school: `<rect x="30" y="46" width="140" height="70" fill="#D98B7E" stroke="${S}" stroke-width="3"/>
      <path d="M22 48 L100 20 L178 48 Z" fill="#8A6A4A" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="100" cy="36" r="7" fill="#F5E6BD" stroke="${S}" stroke-width="2"/>
      ${[42, 66, 124, 148].map(x => `<rect x="${x}" y="58" width="16" height="16" fill="#9DB4C6" stroke="${S}" stroke-width="2"/><rect x="${x}" y="86" width="16" height="16" fill="#9DB4C6" stroke="${S}" stroke-width="2"/>`).join('')}
      <rect x="88" y="84" width="24" height="32" fill="#17324A" stroke="${S}" stroke-width="2.4"/>
      <rect x="0" y="116" width="200" height="14" fill="#B7A57A"/>`,
    hangeul: `<rect x="40" y="50" width="120" height="66" fill="#F5E6BD" stroke="${S}" stroke-width="3"/>
      <path d="M30 52 Q100 18 170 52 Z" fill="#17324A" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="62" y="58" width="76" height="22" rx="3" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <text x="100" y="70" text-anchor="middle" dominant-baseline="central" font-family="'Noto Sans KR',sans-serif" font-weight="700" font-size="15" fill="#C1403A">한글학교</text>
      <rect x="52" y="88" width="18" height="16" fill="#9DB4C6" stroke="${S}" stroke-width="2"/><rect x="130" y="88" width="18" height="16" fill="#9DB4C6" stroke="${S}" stroke-width="2"/>
      <rect x="88" y="88" width="24" height="28" fill="#8A6A4A" stroke="${S}" stroke-width="2.4"/>
      <circle cx="170" cy="22" r="11" fill="#F2C14E" stroke="${S}" stroke-width="2"/>
      <rect x="0" y="116" width="200" height="14" fill="#B7A57A"/>`,
    classroom: `<rect x="0" y="0" width="200" height="130" fill="#EFE2C2"/>
      <rect x="40" y="10" width="120" height="50" fill="#3E5B4A" stroke="${S}" stroke-width="3"/>
      <text x="100" y="35" text-anchor="middle" dominant-baseline="central" font-family="'Noto Sans KR',sans-serif" font-size="18" fill="#FBF7EC">가 나 다</text>
      <rect x="40" y="60" width="120" height="5" fill="#B08452" stroke="${S}" stroke-width="1.6"/>
      ${[30, 88, 146].map(x => `<rect x="${x}" y="92" width="44" height="8" fill="#B08452" stroke="${S}" stroke-width="2"/><path d="M${x + 6} 100 L${x + 6} 124 M${x + 38} 100 L${x + 38} 124" stroke="${S}" stroke-width="3"/>`).join('')}`,
    pencil: `<g transform="rotate(-30 100 65)"><rect x="40" y="54" width="100" height="22" fill="#E3A93C" stroke="${S}" stroke-width="3"/>
      <rect x="30" y="54" width="14" height="22" fill="#D98B7E" stroke="${S}" stroke-width="3"/><rect x="44" y="54" width="8" height="22" fill="#C9C0AE" stroke="${S}" stroke-width="2.4"/>
      <path d="M140 54 L166 65 L140 76 Z" fill="#F0D9BE" stroke="${S}" stroke-width="3" stroke-linejoin="round"/><path d="M158 61.5 L166 65 L158 68.5 Z" fill="${S}"/></g>`,
    notebook: `<rect x="56" y="16" width="92" height="104" rx="4" fill="#6E8F58" stroke="${S}" stroke-width="3"/>
      <rect x="70" y="36" width="64" height="22" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <path d="M76 44 L128 44 M76 50 L112 50" stroke="#8C7F63" stroke-width="2"/>
      ${[26, 42, 58, 74, 90, 106].map(y => `<circle cx="56" cy="${y}" r="4" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>`).join('')}`,
    read: `${m2Person('kid', 86, 'give', 1)}
      <path d="M96 76 L118 70 L140 76 L140 100 L118 94 L96 100 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M118 70 L118 94" stroke="${S}" stroke-width="2"/><path d="M102 80 L114 77 M102 86 L114 83 M122 77 L134 80 M122 83 L134 86" stroke="#8C7F63" stroke-width="1.8"/>`,
    write: `${m2Person('kid', 70, 'give', 1)}
      <rect x="84" y="84" width="104" height="8" fill="#B08452" stroke="${S}" stroke-width="2.4"/>
      <path d="M94 92 L94 122 M178 92 L178 122" stroke="${S}" stroke-width="4"/>
      <path d="M104 84 L150 84 L156 76 L110 76 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M118 80 q6 -4 10 0 t10 0" stroke="#17324A" stroke-width="1.8" fill="none"/>
      <path d="M86 88 L104 64" stroke="#E3A93C" stroke-width="5" stroke-linecap="round"/>`,
    study: `${m2Person('kid', 66, 'stand', 1)}
      <rect x="84" y="84" width="104" height="8" fill="#B08452" stroke="${S}" stroke-width="2.4"/>
      <path d="M94 92 L94 122 M178 92 L178 122" stroke="${S}" stroke-width="4"/>
      <rect x="100" y="66" width="36" height="8" fill="#C1403A" stroke="${S}" stroke-width="2"/><rect x="102" y="74" width="36" height="10" fill="#2D6E8E" stroke="${S}" stroke-width="2"/>
      <path d="M160 84 L160 56 L148 46" stroke="${S}" stroke-width="3" fill="none"/><path d="M140 40 L160 36 L156 56 Z" fill="#E3A93C" stroke="${S}" stroke-width="2.2" stroke-linejoin="round"/>`,
    play: `${m2Person('kid', 76, 'wave', 1)}${m2Person('friend', 150, 'wave', -1)}
      <circle cx="114" cy="30" r="12" fill="#C1403A" stroke="${S}" stroke-width="2.6"/><path d="M102 30 Q114 22 126 30 M114 18 Q108 30 114 42" stroke="${S}" stroke-width="1.8" fill="none"/>
      <path d="M92 44 Q100 36 104 38 M136 44 Q128 36 124 38" stroke="#8C7F63" stroke-width="2" fill="none" stroke-dasharray="3 3"/>`,
    repeat: `${m2Person('teacher', 60, 'wave', 1)}
      <path d="M96 22 L186 22 Q192 22 192 28 L192 68 Q192 74 186 74 L118 74 L104 88 L108 74 L96 74 Q90 74 90 68 L90 28 Q90 22 96 22 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <path d="M124 48 A18 18 0 1 1 142 66" stroke="#2D6E8E" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M118 42 L124 50 L132 44" stroke="#2D6E8E" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    good: `${m2Person('teacher', 60, 'wave', 1)}
      <path d="M96 22 L186 22 Q192 22 192 28 L192 68 Q192 74 186 74 L118 74 L104 88 L108 74 L96 74 Q90 74 90 68 L90 28 Q90 22 96 22 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <path d="M141 28 L147 42 L162 43 L150 52 L154 67 L141 58 L128 67 L132 52 L120 43 L135 42 Z" fill="#E3A93C" stroke="${S}" stroke-width="2.2" stroke-linejoin="round"/>`,
    quiet: `${m2Person('teacher', 60, 'stand', 1)}
      <path d="M96 22 L186 22 Q192 22 192 28 L192 68 Q192 74 186 74 L118 74 L104 88 L108 74 L96 74 Q90 74 90 68 L90 28 Q90 22 96 22 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <path d="M124 50 Q141 60 158 50" stroke="#C1403A" stroke-width="4" fill="none" stroke-linecap="round"/>
      <rect x="137" y="30" width="8" height="30" rx="4" fill="#F0D9BE" stroke="${S}" stroke-width="2"/>`,
    song: `${m2Person('kid', 70, 'wave', 1)}
      <g fill="#17324A"><ellipse cx="124" cy="62" rx="8" ry="6"/><ellipse cx="156" cy="54" rx="8" ry="6"/></g>
      <path d="M131 62 L131 26 L163 18 L163 54" stroke="#17324A" stroke-width="3.4" fill="none"/><path d="M131 30 L163 22" stroke="#17324A" stroke-width="6"/>
      <path d="M150 84 l0 -16" stroke="#17324A" stroke-width="3"/><ellipse cx="145" cy="85" rx="6" ry="4.5" fill="#17324A"/>`,
    homework: `<rect x="56" y="12" width="88" height="108" rx="3" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      ${[32, 52, 72, 92].map(y => `<path d="M68 ${y} L76 ${y + 6} L88 ${y - 6}" stroke="#C1403A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M96 ${y} L134 ${y}" stroke="#8C7F63" stroke-width="2.4"/>`).join('')}`,
    drawing: `<rect x="44" y="14" width="112" height="90" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <circle cx="126" cy="38" r="12" fill="#F2C14E"/><path d="M52 96 L84 58 L108 84 L122 70 L150 96 Z" fill="#6E8F58" stroke="${S}" stroke-width="2"/>
      <g transform="rotate(35 150 110)"><rect x="138" y="104" width="34" height="10" fill="#C1403A" stroke="${S}" stroke-width="2"/><path d="M138 104 L128 109 L138 114 Z" fill="#C1403A" stroke="${S}" stroke-width="2"/></g>`
  }[kind];
  const label = {school:'학교', hangeul:'한글학교', classroom:'교실', pencil:'연필', notebook:'공책', read:'읽어요', write:'써요', study:'공부해요',
    play:'놀아요', repeat:'따라 해 보세요', good:'잘했어요', quiet:'조용히 하세요', song:'노래', homework:'숙제', drawing:'그림'}[kind];
  const ground = ['read', 'write', 'study', 'play', 'repeat', 'good', 'quiet', 'song'].includes(kind) ? m2Ground : '';
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${ground}${g}</svg>`;
}
['school', 'hangeul', 'classroom', 'pencil', 'notebook', 'read', 'write', 'study', 'play', 'repeat', 'good', 'quiet', 'song', 'homework', 'drawing']
  .forEach(k => { M3_ONLY['s_' + k] = m3School(k); });

/* 셋째 달 화면에서는 둘째 달 그림도 함께 씁니다. */
const M3_PIC = Object.assign({}, M2_PIC, M3_ONLY);

/* ---- 묶음 ---- */
const M3_BUNDLES = [
  {k:1, title:'아침에 일어나요', topic:'하루 일과와 시계', nights:[1, 2, 3], after:'그동안 가족에게 안녕히 주무세요, 하고 밤 인사를 해 봐.'},
  {k:2, title:'학교에 가요', topic:'학교와 주말 한글학교', nights:[4, 5, 6], after:'그동안 한글학교에서, 아니면 집에서 가족과 선생님 놀이를 하며 세 마디 인사를 해 봐.'},
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
  dictWords:[] },/* ---- 둘째 묶음: 학교에 가요 ------------------------------------
   미국 학교와 주말 한글학교를 나란히 다룹니다. 한글학교 선생님은 담이 할아버지입니다.
   을/를은 이에요/예요, 이/가에 이어 세 번째 받침 규칙이라 "받침 삼 형제"로 묶어 가르칩니다.
   교실 말(따라 해 보세요, 잘했어요, 조용히 하세요)은 알아듣기용입니다. */
{ n:4, bundle:2, title:'학교와 한글학교',
  steps:[
    {type:'intro', who:'moi',
     t:'나는 학교에 두 번 가. 주중에는 학교, 주말에는 한글학교! 너도 그래? 오늘은 학교에서 쓰는 말을 모아 왔어.',
     big:'학교에 가요'},
    {type:'pairs', title:'학교', who:'moi',
     t:'학교에 있는 사람과 물건이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'학교', pic:'s_school', en:'school'}, {w:'한글학교', pic:'s_hangeul', en:'Korean (weekend) school'},
       {w:'선생님', pic:'p_teacher', en:'teacher'}, {w:'교실', pic:'s_classroom', en:'classroom'},
       {w:'친구', pic:'p_friend', en:'friend'}, {w:'연필', pic:'s_pencil', en:'pencil'}, {w:'공책', pic:'s_notebook', en:'notebook'}],
     tip:{who:'tori', t:'선생님은 이름을 부르지 않고 ‘선생님’이라고 불러. 미국 학교처럼 Mr. Kim 하고 부르면 안 돼. 김 선생님, 이렇게 성 뒤에 붙이는 건 괜찮아.'}},
    {type:'pairs', title:'학교에서 하는 일', who:'moi',
     t:'학교에서 하는 일이야. 모두 요로 끝나는 움직이는 말이지.',
     singles:[
       {w:'읽어요', pic:'s_read', en:'read'}, {w:'써요', pic:'s_write', en:'write'},
       {w:'공부해요', pic:'s_study', en:'study'}, {w:'놀아요', pic:'s_play', en:'play'}]},
    {type:'pairs', title:'선생님 말씀', who:'dami',
     t:'한글학교 교실에서 선생님이 자주 하시는 말이란다. 따라 말하지 않아도 되니, 들으면 무슨 뜻인지만 알아 두거라.',
     singles:[
       {w:'따라 해 보세요', pic:'s_repeat', en:'Repeat after me.'},
       {w:'잘했어요', pic:'s_good', en:'Well done!'},
       {w:'조용히 하세요', pic:'s_quiet', en:'Please be quiet.'}]},
    {type:'choose', title:'이건 뭐예요?', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'s_hangeul', o:['학교','한글학교','교실'], a:'한글학교'},
       {pic:'s_pencil', o:['공책','책','연필'], a:'연필'},
       {pic:'s_read', o:['읽어요','써요','놀아요'], a:'읽어요'},
       {pic:'s_play', o:['공부해요','놀아요','자요'], a:'놀아요'},
       {pic:'s_good', t:'선생님이 무슨 말씀을 하셨어요?', o:['잘했어요','조용히 하세요'], a:'잘했어요', why:'별은 잘했다는 뜻이에요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'써요', o:['s_read','s_write','s_play'], a:'s_write'},
       {say:'교실', o:['s_school','s_classroom','s_hangeul'], a:'s_classroom'},
       {say:'조용히 하세요', o:['s_repeat','s_good','s_quiet'], a:'s_quiet'},
       {say:'공책', o:['s_notebook','s_pencil','t_book'], a:'s_notebook'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'학교에서 쓰는 말을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'학교', en:'school', hint:{who:'dami', t:'소리는 [학꾜]로 힘이 들어가지만 글자는 ‘교’란다. ㄱ 받침 뒤라서 그래.'}}, {w:'연필', en:'pencil'}, {w:'친구', en:'friend'}]}
  ],
  dictWords:[{w:'학교', en:'school'}, {w:'선생님', en:'teacher'}, {w:'교실', en:'classroom'}, {w:'친구', en:'friend'},
             {w:'연필', en:'pencil'}, {w:'공책', en:'notebook'}, {w:'써요', en:'write'}, {w:'놀아요', en:'play'}] },

{ n:5, bundle:2, title:'책을 읽어요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 무엇을 하는지 말해 볼 거야. ‘책을 읽어요’처럼 무엇 뒤에 ‘을’이나 ‘를’을 붙여. 어디 가는지는 ‘학교에 가요’처럼 ‘에’를 붙이고.',
     big:'책을 읽어요'},
    {type:'pairs', title:'새 낱말', who:'moi',
     t:'오늘 문장에 쓸 말을 몇 개 더 모아 왔어.',
     singles:[
       {w:'숙제', pic:'s_homework', en:'homework'}, {w:'노래', pic:'s_song', en:'song'},
       {w:'그림', pic:'s_drawing', en:'drawing, picture'}, {w:'이름', pic:'nametag', en:'name'}, {w:'주말', pic:'s_hangeul', en:'weekend'}],
     tip:{who:'tori', t:'숙제를 해요, 노래를 해요처럼 ‘해요’를 붙이면 그 일을 한다는 뜻이야. 공부해요도 공부를 해요와 같은 말이야.'}},
    {type:'rule', j:'을', title:'을과 를', who:'tori',
     t:'무엇을 하는지 말할 때, 그 무엇 뒤에 붙는 말이야. 끝 글자에 받침이 있으면 ‘을’, 없으면 ‘를’.',
     yes:['책','이름','그림'], no:['숙제','노래','사과'],
     note:'이에요와 예요, 이와 가, 을과 를. 받침 삼 형제란다. 셋 다 받침이 있으면 앞의 것, 없으면 뒤의 것이지. 하나만 알면 셋을 다 아는 셈이란다.'},
    {type:'josa', j:'을', q:'뒤에 무엇을 붙일까요?', title:'을일까요, 를일까요?', who:'tori',
     t:'끝 글자에 받침이 있는지 보고 골라 봐.',
     names:['책','연필','공책','숙제','노래','그림','이름','사과']},
    {type:'choose', title:'그림을 보고 말해요', who:'tori',
     t:'그림에 맞는 말을 골라 봐.',
     qs:[
       {pic:'s_read', o:['책을 읽어요.','책를 읽어요.'], a:'책을 읽어요.', en:'I read a book.', why:'‘책’에 받침이 있어서 ‘을’이에요.'},
       {pic:'s_homework', o:['숙제를 해요.','숙제을 해요.'], a:'숙제를 해요.', en:'I do my homework.', why:'‘제’에 받침이 없어서 ‘를’이에요.'},
       {pic:'s_hangeul', o:['주말에 한글학교에 가요.','주말에 한글학교가 가요.'], a:'주말에 한글학교에 가요.', en:'I go to Korean school on weekends.', why:'가는 곳 뒤에는 ‘에’를 붙여요.'},
       {pic:'s_song', o:['노래를 해요.','노래을 해요.'], a:'노래를 해요.', en:'I sing a song.'},
       {pic:'s_write', o:['이름을 써요.','이름를 써요.'], a:'이름을 써요.', en:'I write my name.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'책을 읽어요.', tiles:['책을','읽어요.'], extra:['책를'], en:'I read a book.'},
       {s:'주말에 한글학교에 가요.', tiles:['주말에','한글학교에','가요.'], extra:['한글학교가'], en:'I go to Korean school on weekends.', hint:'언제(주말에), 어디(한글학교에), 무엇을 해요(가요) 차례예요.'},
       {s:'저는 숙제를 해요.', tiles:['저는','숙제를','해요.'], extra:['숙제을'], en:'I do my homework.', hint:'‘제’에는 받침이 없어요.'},
       {s:'공책에 이름을 써요.', tiles:['공책에','이름을','써요.'], extra:['이름를'], en:'I write my name in my notebook.', hint:'어디에(공책에) 무엇을(이름을) 써요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'을이 붙으면 받침이 또 건너간단다. 그리고 학교처럼 힘이 들어가는 소리도 있지.',
     cmp:[
       {s:'책을', d:'채글', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'읽어요', d:'일거요', n:'ㄺ 가운데 ㄱ이 뒤로 건너가요'},
       {s:'연필을', d:'연피를', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'학교', d:'학꾜', n:'ㄱ 받침 뒤의 ㄱ은 ㄲ처럼 나요'}],
     note:'읽어요는 받침이 둘이라 조금 어렵단다. ‘읽’에는 ㄹ과 ㄱ이 함께 있고, 뒤에 어요가 오면 ㄱ이 건너가 [일거요]가 되지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'읽어요', en:'read', hint:{who:'dami', t:'소리는 [일거요]지만 ‘읽’에는 ㄹ과 ㄱ이 함께 있단다. 받침 줄에서 ㄺ을 찾아보거라.'}},
       {w:'책을', en:'book (with 을)', hint:{who:'dami', t:'소리는 [채글]이지만 ‘책’을 먼저 쓰고 ‘을’을 붙인단다.'}},
       {w:'숙제', en:'homework'}]}
  ],
  dictWords:[{w:'읽어요', en:'read'}, {w:'책을', en:'book (with 을)'}, {w:'숙제', en:'homework'}, {w:'노래', en:'song'},
             {w:'그림', en:'drawing'}, {w:'주말', en:'weekend'}] },

{ n:6, bundle:2, title:'주말 한글학교',
  steps:[
    {type:'intro', who:'tori',
     t:'주말이야! 모이랑 한글학교에 가. 한글학교 선생님이 누구신지 알아? 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'안녕하세요, 선생님!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'모이야, 주말이야! 한글학교에 가자.', en:"Moi, it's the weekend! Let's go to Korean school."},
       {who:'moi', t:'좋아! 나는 공책이 있어. 연필도 있어.', en:'Okay! I have a notebook. I have a pencil too.'},
       {who:'tori', t:'안녕하세요, 선생님!', en:'Hello, teacher!'},
       {who:'dami', t:'어서 와요. 이름을 부를게요. 토리?', en:"Come in. I'll call your names. Tori?"},
       {who:'tori', t:'네!', en:'Here!'},
       {who:'dami', t:'오늘은 책을 읽어요. 따라 해 보세요.', en:"Today we'll read a book. Repeat after me."},
       {who:'dami', t:'아주 잘했어요!', en:'Very well done!'},
       {who:'tori', t:'감사합니다, 선생님. 안녕히 계세요!', en:'Thank you, teacher. Goodbye!'}],
     note:{who:'dami', t:'한글학교에서는 이 할아버지가 선생님이란다. 교실에서는 모두에게 ‘따라 해 보세요’처럼 높여서 말하지. 이름을 부르면 ‘네!’ 하고 크게 대답하고, 집에 갈 때는 교실에 남는 선생님께 ‘안녕히 계세요’라고 인사하는 게야.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'토리와 모이는 언제 한글학교에 가요?', o:['주말에','아침에','밤에'], a:'주말에', why:'토리는 ‘주말이야! 한글학교에 가자’라고 했어요.'},
       {t:'한글학교 선생님은 누구예요?', o:['모이','담이 할아버지','토리 엄마'], a:'담이 할아버지', why:'담이 할아버지가 이름을 부르고 책을 읽으셨어요.'},
       {t:'오늘 한글학교에서 무엇을 해요?', o:['책을 읽어요','노래를 해요','숙제를 해요'], a:'책을 읽어요', why:'선생님이 ‘오늘은 책을 읽어요’라고 하셨어요.'},
       {t:'모이는 무엇을 가지고 왔어요?', o:['공책과 연필','책과 가방','컵과 공책'], a:'공책과 연필', why:'모이는 ‘공책이 있어. 연필도 있어’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 말하는지 잘 보고 대답해 봐.',
     qs:[
       {line:{who:'dami', t:'토리?'}, en:'Tori? (taking attendance)', o:['응!','네!'], a:'네!', why:'선생님이 이름을 부르시면 ‘네!’ 하고 대답해요.'},
       {line:{who:'moi', t:'토리야, 주말에 뭐 해?'}, en:'Tori, what do you do on weekends?', o:['한글학교에 가.','한글학교에 가요.'], a:'한글학교에 가.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'s_classroom', t:'수업이 끝났어요. 나는 집에 가고, 선생님은 교실에 계세요.', en:'Class is over. You go home, and the teacher stays.', o:['안녕히 가세요.','안녕히 계세요.'], a:'안녕히 계세요.', why:'남아 계시는 선생님께는 ‘안녕히 계세요’라고 해요.'}]},
    {type:'task', title:'한글학교 세 마디', who:'moi',
     t:'이번 주에 해 봐. 한글학교에 다니면 교실에서, 안 다니면 집에서 가족이 선생님이 되어 줄 거야. 다 하면 했어요를 눌러.',
     lines:[
       {when:'교실에 들어갈 때', say:'안녕하세요, 선생님!', sub:'고개를 숙이며 인사해요.'},
       {when:'선생님이 이름을 부르시면', say:'네!', sub:'크게 대답해요.'},
       {when:'집에 갈 때', say:'감사합니다. 안녕히 계세요.', sub:'선생님은 교실에 남아 계시니까 계세요.'}],
     parent:'한글학교에 다니는 아이라면 이번 주 수업에서 세 마디를 직접 해 보게 해 주세요. 선생님께 미리 살짝 말씀드려 두시면 아이를 더 칭찬해 주실 수 있습니다. 한글학교에 다니지 않는다면 식탁을 교실로 삼아 부모님이 선생님이 되어 주세요. 이름을 부르고, "따라 해 보세요" 하며 오늘 배운 문장을 읽게 하고, "잘했어요"로 마무리하시면 됩니다. 미국 학교 이야기도 한국어로 한 문장씩 물어봐 주세요. 예를 들어 "학교에서 뭐 해요?"에 "책을 읽어요"처럼 답하게 하시면 됩니다.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인 ----
   셋째 달은 묶음이 모두 열린 뒤에 빠른 확인을 만듭니다. 비어 있으면 밤 고르기에 확인 버튼이 나오지 않습니다. */
const M3_CHECK = [];

/* ---- 받아쓰기 자판: 둘째 달에 읽어요의 ㄺ 을 더합니다 ---- */
const M3_POOL = Object.assign({}, M2_POOL, {jong: [...M2_POOL.jong, 'ㄺ']});

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
