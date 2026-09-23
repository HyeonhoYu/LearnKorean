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

/* ---- 셋째 묶음 그림: 음식 ---- */
function m3Food(kind){
  const S = '#221F1C';
  const bowl = (fill, top) => `<path d="M44 58 L156 58 Q152 106 100 108 Q48 106 44 58 Z" fill="${fill}" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
    <ellipse cx="100" cy="58" rx="56" ry="10" fill="${top}" stroke="${S}" stroke-width="2.6"/><rect x="82" y="106" width="36" height="8" rx="3" fill="${fill}" stroke="${S}" stroke-width="2.4"/>`;
  const plate = `<ellipse cx="100" cy="92" rx="76" ry="22" fill="#FBF7EC" stroke="${S}" stroke-width="3"/><ellipse cx="100" cy="90" rx="56" ry="14" fill="none" stroke="#C9C0AE" stroke-width="2"/>`;
  const g = {
    rice: `${bowl('#FBF7EC', '#FBF7EC')}<path d="M52 56 Q100 22 148 56" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <g fill="#E7DCC4">${[70, 86, 100, 114, 128, 94, 108].map((x, i) => `<ellipse cx="${x}" cy="${44 + (i % 3) * 4}" rx="3" ry="1.8"/>`).join('')}</g>`,
    soup: `${bowl('#C1403A', '#E0B06A')}<path d="M70 56 q6 -3 12 0 M100 60 q6 -3 12 0 M124 55 q6 -3 12 0" stroke="#6E8F58" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M84 40 Q80 30 86 22 M104 40 Q100 30 106 22 M122 40 Q118 30 124 22" stroke="#8C7F63" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    kimchi: `${plate}<path d="M56 88 Q64 60 92 66 Q108 50 126 64 Q150 62 146 88 Q100 104 56 88 Z" fill="#C1403A" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M70 80 Q86 70 100 78 M104 72 Q120 66 132 78" stroke="#F0D9A8" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g fill="#8A1F1A"><circle cx="82" cy="74" r="1.8"/><circle cx="116" cy="82" r="1.8"/><circle cx="96" cy="86" r="1.6"/></g>`,
    tteok: `${plate}${[[70, 76, -20], [92, 70, 10], [112, 80, -5], [130, 72, 25], [84, 88, 5], [106, 90, -15]].map(([x, y, r]) =>
        `<rect x="${x - 14}" y="${y - 5}" width="28" height="10" rx="5" fill="#E0703C" stroke="${S}" stroke-width="2.2" transform="rotate(${r} ${x} ${y})"/>`).join('')}
      <path d="M60 90 Q100 100 144 88" stroke="#C1403A" stroke-width="4" fill="none" opacity=".6"/>`,
    gimbap: `${plate}${[64, 92, 120].map(x => `<circle cx="${x + 8}" cy="80" r="14" fill="#221F1C" stroke="${S}" stroke-width="2"/><circle cx="${x + 8}" cy="80" r="10.5" fill="#FBF7EC"/>
        <circle cx="${x + 5}" cy="77" r="3" fill="#E3A93C"/><circle cx="${x + 11}" cy="78" r="2.6" fill="#6E8F58"/><circle cx="${x + 8}" cy="84" r="2.6" fill="#E0703C"/>`).join('')}`,
    bread: `<path d="M50 104 L50 60 Q50 30 100 30 Q150 30 150 60 L150 104 Z" fill="#D9A45E" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M60 104 L60 64 Q60 42 100 42 Q140 42 140 64 L140 104 Z" fill="#F5E0B0" stroke="${S}" stroke-width="2"/>
      <rect x="0" y="104" width="200" height="4" fill="none"/>`,
    milk: `<path d="M70 44 L100 22 L130 44 Z" fill="#FBF7EC" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <rect x="70" y="44" width="60" height="74" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <rect x="70" y="64" width="60" height="30" fill="#2D6E8E" stroke="${S}" stroke-width="2.4"/>
      <path d="M100 68 Q90 80 92 86 Q94 92 100 92 Q106 92 108 86 Q110 80 100 68 Z" fill="#FBF7EC" stroke="${S}" stroke-width="1.8"/>`,
    water: `<path d="M72 26 L128 26 L120 116 L80 116 Z" fill="#CFE0EA" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M75 52 L125 52 L120 116 L80 116 Z" fill="#9DC3DC"/>
      <path d="M72 26 L128 26 L120 116 L80 116 Z" fill="none" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M86 64 L88 100" stroke="#FBF7EC" stroke-width="4" stroke-linecap="round" opacity=".7"/>`,
    hungry: `${m2Person('kid', 66, 'stand', 1)}
      <path d="M100 58 Q96 30 124 26 Q138 12 158 22 Q182 20 182 42 Q192 60 170 68 Q150 80 130 70 Q106 76 100 58 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.4"/>
      <circle cx="94" cy="72" r="3" fill="#FBF7EC" stroke="${S}" stroke-width="1.6"/><circle cx="88" cy="82" r="2" fill="#FBF7EC" stroke="${S}" stroke-width="1.4"/>
      <g transform="translate(142 46) scale(.42) translate(-100 -80)">${plate}${[[70, 76, -20], [92, 70, 10], [112, 80, -5], [130, 72, 25]].map(([x, y, r]) =>
        `<rect x="${x - 14}" y="${y - 5}" width="28" height="10" rx="5" fill="#E0703C" stroke="${S}" stroke-width="2.2" transform="rotate(${r} ${x} ${y})"/>`).join('')}</g>
      <path d="M58 88 q4 4 8 0" stroke="${S}" stroke-width="1.6" fill="none"/>`,
    drink: `${m2Person('kid', 80, 'give', 1)}
      <g transform="rotate(-24 98 66)"><path d="M90 50 L110 50 L107 84 L93 84 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M91 60 L109 60 L107 84 L93 84 Z" fill="#9DC3DC"/></g>`
  }[kind];
  const label = {rice:'밥', soup:'국', kimchi:'김치', tteok:'떡볶이', gimbap:'김밥', bread:'빵', milk:'우유', water:'물', hungry:'배고파요', drink:'마셔요'}[kind];
  const ground = ['hungry', 'drink'].includes(kind) ? m2Ground : '';
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${ground}${g}</svg>`;
}
/* 얼굴: 맛있어요, 매워요, 좋아해요, 싫어해요 */
function m3Face(mood){
  const S = '#221F1C';
  const face = {
    yum: {cheek:'#D98B7E', eyes:`<path d="M80 60 q6 -6 12 0 M108 60 q6 -6 12 0" stroke="${S}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
          mouth:`<path d="M86 84 Q100 98 114 84 Z" fill="#C1403A" stroke="${S}" stroke-width="2.6"/><path d="M110 88 q6 6 2 10" stroke="#D98B7E" stroke-width="4" fill="none" stroke-linecap="round"/>`},
    spicy: {cheek:'#E0703C', skin:'#F2B39A', eyes:`<path d="M78 56 L92 62 M122 56 L108 62" stroke="${S}" stroke-width="3" stroke-linecap="round"/><circle cx="86" cy="64" r="3.4" fill="${S}"/><circle cx="114" cy="64" r="3.4" fill="${S}"/>`,
          mouth:`<ellipse cx="100" cy="88" rx="12" ry="9" fill="#8A1F1A" stroke="${S}" stroke-width="2.6"/>
            <path d="M92 104 Q86 116 94 122 Q98 114 100 118 Q102 112 106 122 Q114 116 108 104" fill="#E0703C" stroke="${S}" stroke-width="2"/>
            <path d="M150 40 q-4 8 0 10 q4 -2 0 -10 M156 58 q-3 6 0 8 q3 -2 0 -8" fill="#9DB4C6" stroke="${S}" stroke-width="1.4"/>`},
    like: {cheek:'#D98B7E', eyes:`<circle cx="86" cy="62" r="4.4" fill="${S}"/><circle cx="114" cy="62" r="4.4" fill="${S}"/>`,
          mouth:`<path d="M86 84 Q100 96 114 84" stroke="${S}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M160 36 C160 26 174 26 174 36 C174 26 188 26 188 36 C188 48 174 54 174 60 C174 54 160 48 160 36 Z" fill="#C1403A" stroke="${S}" stroke-width="2"/>`},
    dislike: {cheek:'#C9C0AE', eyes:`<path d="M80 62 L92 62 M108 62 L120 62" stroke="${S}" stroke-width="3" stroke-linecap="round"/>`,
          mouth:`<path d="M86 92 Q100 82 114 92" stroke="${S}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M162 30 L186 54 M186 30 L162 54" stroke="#C1403A" stroke-width="6" stroke-linecap="round"/>`}
  }[mood];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${{yum:'맛있어요', spicy:'매워요', like:'좋아해요', dislike:'싫어해요'}[mood]}">
    <circle cx="100" cy="70" r="42" fill="${face.skin || '#F0D9BE'}" stroke="${S}" stroke-width="3"/>
    <path d="M58 60 C54 16 146 16 142 60 C124 40 76 40 58 60 Z" fill="#221F1C" stroke="${S}" stroke-width="2.6"/>
    <circle cx="76" cy="80" r="7" fill="${face.cheek}" opacity=".55"/><circle cx="124" cy="80" r="7" fill="${face.cheek}" opacity=".55"/>
    ${face.eyes}${face.mouth}</svg>`;
}
['rice', 'soup', 'kimchi', 'tteok', 'gimbap', 'bread', 'milk', 'water', 'hungry', 'drink'].forEach(k => { M3_ONLY['f_' + k] = m3Food(k); });
['yum', 'spicy', 'like', 'dislike'].forEach(k => { M3_ONLY['m_' + k] = m3Face(k); });

/* ---- 넷째 묶음 그림: 날씨와 계절 ---- */
function m3Weather(kind){
  const S = '#221F1C';
  const cloud = (x, y, k, fill) => `<g transform="translate(${x} ${y}) scale(${k || 1})"><path d="M-30 10 Q-34 -8 -16 -10 Q-12 -26 6 -22 Q20 -32 30 -16 Q44 -14 40 2 Q46 14 30 14 L-24 14 Q-36 14 -30 10 Z" fill="${fill || '#FBF7EC'}" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/></g>`;
  const sun = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#F2C14E" stroke="${S}" stroke-width="2.6"/>
    <g stroke="#E3A93C" stroke-width="3.4" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => { const t = a * Math.PI / 180;
      return `<path d="M${x + Math.cos(t) * (r + 6)} ${y + Math.sin(t) * (r + 6)} L${x + Math.cos(t) * (r + 13)} ${y + Math.sin(t) * (r + 13)}"/>`; }).join('')}</g>`;
  const ground = c => `<rect x="0" y="108" width="200" height="22" fill="${c || '#B7A57A'}"/>`;
  const tree = (x, leaf) => `<rect x="${x - 4}" y="80" width="8" height="30" fill="#8A6A4A" stroke="${S}" stroke-width="2"/><circle cx="${x}" cy="70" r="20" fill="${leaf}" stroke="${S}" stroke-width="2.6"/>`;
  const g = {
    sunny:  `<rect width="200" height="130" rx="6" fill="#BFE0F0"/>${sun(100, 50, 22)}${ground()}`,
    cloudy: `<rect width="200" height="130" rx="6" fill="#C9CFD3"/>${cloud(70, 40, 1.1, '#E7E4DC')}${cloud(136, 62, 1, '#DAD6CC')}${ground()}`,
    rain:   `<rect width="200" height="130" rx="6" fill="#A9B6BF"/>${cloud(100, 34, 1.3, '#DAD6CC')}
      <g stroke="#2D6E8E" stroke-width="3" stroke-linecap="round">${[[60, 64], [84, 76], [108, 64], [132, 78], [150, 62], [72, 92], [120, 94]].map(([x, y]) => `<path d="M${x} ${y} L${x - 4} ${y + 10}"/>`).join('')}</g>${ground('#8C9A7A')}`,
    snow:   `<rect width="200" height="130" rx="6" fill="#C9D6DE"/>${cloud(100, 30, 1.3, '#EFEFEA')}
      <g fill="#FBF7EC" stroke="#8C9AA6" stroke-width="1.2">${[[56, 62], [84, 78], [110, 60], [136, 76], [154, 58], [70, 94], [124, 96], [96, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4"/>`).join('')}</g>
      <path d="M0 110 Q50 100 100 108 Q150 116 200 104 L200 130 L0 130 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>`,
    wind:   `<rect width="200" height="130" rx="6" fill="#CFE0EA"/>
      <g stroke="#5A7A8E" stroke-width="3.4" fill="none" stroke-linecap="round"><path d="M20 44 L120 44 Q140 44 140 30 Q140 18 128 20"/><path d="M34 64 L150 64 Q170 64 170 78 Q170 90 158 88"/><path d="M20 84 L96 84"/></g>
      <g transform="rotate(20 150 100)">${tree(150, '#6E8F58')}</g><path d="M40 30 l8 -4 l2 8 Z M70 96 l8 -4 l2 8 Z" fill="#6E8F58"/>${ground()}`,
    hot:    `<rect width="200" height="130" rx="6" fill="#F5D9A8"/>${sun(160, 32, 16)}${m2Person('kid', 90, 'stand', 1)}
      <path d="M112 52 q-3 7 0 9 q3 -2 0 -9 M68 58 q-3 7 0 9 q3 -2 0 -9" fill="#9DB4C6" stroke="${S}" stroke-width="1.4"/>
      <g stroke="#E0703C" stroke-width="2.6" fill="none"><path d="M30 60 q6 -6 0 -12 q-6 -6 0 -12"/><path d="M44 70 q6 -6 0 -12 q-6 -6 0 -12"/></g>${ground()}`,
    cold:   `<rect width="200" height="130" rx="6" fill="#D6E2EA"/>${m2Person('kid', 100, 'stand', 1)}
      <path d="M89 65 L111 65 L111 72 L89 72 Z" fill="#C1403A" stroke="${S}" stroke-width="2"/><path d="M105 72 L109 88" stroke="#C1403A" stroke-width="7" stroke-linecap="round"/>
      <g stroke="#5A7A8E" stroke-width="2.4" stroke-linecap="round"><path d="M74 40 l-8 -4 M74 50 l-10 0 M126 40 l8 -4 M126 50 l10 0"/></g>
      <g fill="#FBF7EC" stroke="#8C9AA6" stroke-width="1.2"><circle cx="40" cy="30" r="3.4"/><circle cx="160" cy="44" r="3.4"/><circle cx="30" cy="80" r="3.4"/><circle cx="170" cy="90" r="3.4"/></g>${ground('#E7EAEC')}`,
    umbrella: `<rect width="200" height="130" rx="6" fill="#A9B6BF"/>
      <g stroke="#2D6E8E" stroke-width="2.4" stroke-linecap="round">${[[30, 20], [50, 40], [160, 24], [176, 50], [24, 70], [180, 80]].map(([x, y]) => `<path d="M${x} ${y} L${x - 3} ${y + 8}"/>`).join('')}</g>
      <path d="M50 58 Q100 0 150 58 Q138 50 125 58 Q112 50 100 58 Q88 50 75 58 Q62 50 50 58 Z" fill="#E3A93C" stroke="${S}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M100 58 L100 104 Q100 114 90 112" stroke="${S}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    hat: `<path d="M56 96 Q54 40 100 34 Q146 40 144 96 Z" fill="#C1403A" stroke="${S}" stroke-width="3"/>
      <rect x="48" y="90" width="104" height="18" rx="6" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <circle cx="100" cy="30" r="10" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <path d="M72 70 L128 70 M68 82 L132 82" stroke="#FBF7EC" stroke-width="3" opacity=".7"/>`,
    snowman: `<rect width="200" height="130" rx="6" fill="#C9D6DE"/><path d="M0 112 Q100 102 200 112 L200 130 L0 130 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <circle cx="100" cy="88" r="28" fill="#FBF7EC" stroke="${S}" stroke-width="3"/><circle cx="100" cy="46" r="20" fill="#FBF7EC" stroke="${S}" stroke-width="3"/>
      <circle cx="93" cy="42" r="3" fill="${S}"/><circle cx="107" cy="42" r="3" fill="${S}"/><path d="M100 48 L114 51 L100 53 Z" fill="#E0703C" stroke="${S}" stroke-width="1.4"/>
      <path d="M80 70 L120 70" stroke="#C1403A" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="84" r="2.6" fill="${S}"/><circle cx="100" cy="96" r="2.6" fill="${S}"/>
      <path d="M72 80 L50 66 M128 80 L150 66" stroke="#8A6A4A" stroke-width="3" stroke-linecap="round"/>`,
    spring: `<rect width="200" height="130" rx="6" fill="#DCEBD6"/>${tree(56, '#F2B8C6')}
      ${[[110, 100], [132, 96], [154, 102], [176, 98]].map(([x, y]) => `<path d="M${x} ${y + 10} L${x} ${y}" stroke="#6E8F58" stroke-width="2.4"/><circle cx="${x}" cy="${y - 4}" r="6" fill="#E3A93C" stroke="${S}" stroke-width="1.8"/>`).join('')}${ground('#9DBA7E')}`,
    summer: `<rect width="200" height="130" rx="6" fill="#9DD0E6"/>${sun(40, 32, 16)}
      <path d="M0 84 Q25 78 50 84 T100 84 T150 84 T200 84 L200 130 L0 130 Z" fill="#2D6E8E" stroke="${S}" stroke-width="2"/>
      <path d="M0 104 Q60 96 120 106 L200 100 L200 130 L0 130 Z" fill="#E7D2A8" stroke="${S}" stroke-width="2"/>`,
    autumn: `<rect width="200" height="130" rx="6" fill="#F3DDB7"/>${tree(70, '#E0703C')}${tree(140, '#E3A93C')}
      <path d="M100 40 l6 -4 l2 8 Z M168 70 l6 -4 l2 8 Z M30 60 l6 -4 l2 8 Z" fill="#C1403A"/>${ground('#C9A87C')}`,
    winter: `<rect width="200" height="130" rx="6" fill="#D6E2EA"/>
      <g fill="#FBF7EC" stroke="#8C9AA6" stroke-width="1.2">${[[30, 24], [70, 40], [120, 20], [168, 36], [150, 70], [44, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6"/>`).join('')}</g>
      <path d="M0 106 Q100 96 200 106 L200 130 L0 130 Z" fill="#FBF7EC" stroke="${S}" stroke-width="2"/>
      <circle cx="100" cy="92" r="16" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/><circle cx="100" cy="68" r="11" fill="#FBF7EC" stroke="${S}" stroke-width="2.6"/>
      <circle cx="96" cy="66" r="1.8" fill="${S}"/><circle cx="104" cy="66" r="1.8" fill="${S}"/>`
  }[kind];
  const label = {sunny:'맑아요', cloudy:'흐려요', rain:'비가 와요', snow:'눈이 와요', wind:'바람이 불어요', hot:'더워요', cold:'추워요',
    umbrella:'우산', hat:'모자', snowman:'눈사람', spring:'봄', summer:'여름', autumn:'가을', winter:'겨울'}[kind];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${label}">${g}</svg>`;
}
['sunny', 'cloudy', 'rain', 'snow', 'wind', 'hot', 'cold', 'umbrella', 'hat', 'snowman', 'spring', 'summer', 'autumn', 'winter']
  .forEach(k => { M3_ONLY['w_' + k] = m3Weather(k); });

/* ---- 다섯째 묶음 그림: 요일 ----
   요일 이름에 숨은 것(월 달, 화 불, 수 물, 목 나무, 금 쇠, 토 흙, 일 해)을 그림으로 보여 줍니다.
   글자를 넣지 않아 듣고 고르기에서 답이 보이지 않습니다. 윗부분의 점은 한 주에서 몇째 날인지 알려 줍니다. */
function m3Day(i){
  const S = '#221F1C';
  const col = ['#E3DDF0', '#F6D0C4', '#D3E6F2', '#D7E8CE', '#F4E6B6', '#E8D9C2', '#F9D9A8'][i];
  const icon = [
    `<path d="M112 46 A26 26 0 1 0 124 86 A20 20 0 1 1 112 46 Z" fill="#F5E6BD" stroke="${S}" stroke-width="2.6"/>`,
    `<path d="M100 40 Q124 62 116 84 Q112 96 100 96 Q86 96 84 84 Q80 70 92 60 Q92 72 98 74 Q94 58 100 40 Z" fill="#E0703C" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
     <path d="M100 70 Q108 80 104 90 Q100 94 96 90 Q94 82 100 70 Z" fill="#F2C14E"/>`,
    `<path d="M100 38 Q76 70 78 82 Q80 98 100 98 Q120 98 122 82 Q124 70 100 38 Z" fill="#6FA8D0" stroke="${S}" stroke-width="2.6"/>
     <path d="M90 74 Q88 84 94 90" stroke="#FBF7EC" stroke-width="3.4" fill="none" stroke-linecap="round"/>`,
    `<rect x="95" y="72" width="10" height="28" fill="#8A6A4A" stroke="${S}" stroke-width="2.2"/><circle cx="100" cy="60" r="22" fill="#6E8F58" stroke="${S}" stroke-width="2.6"/>`,
    `<path d="M76 90 L86 62 L114 62 L124 90 Z" fill="#E3A93C" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/><path d="M90 70 L100 70" stroke="#FBF7EC" stroke-width="3" stroke-linecap="round"/>
     <path d="M118 48 l4 -8 M126 54 l8 -4 M110 44 l0 -9" stroke="#E3A93C" stroke-width="2.6" stroke-linecap="round"/>`,
    `<path d="M66 98 Q80 58 100 60 Q122 58 134 98 Z" fill="#9C7650" stroke="${S}" stroke-width="2.6" stroke-linejoin="round"/>
     <g fill="#6E5236"><circle cx="90" cy="80" r="2.4"/><circle cx="106" cy="74" r="2"/><circle cx="116" cy="88" r="2.6"/></g>
     <path d="M100 60 L100 48 M100 50 Q108 42 112 46 M100 52 Q92 44 88 48" stroke="#6E8F58" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    `<circle cx="100" cy="70" r="20" fill="#F2C14E" stroke="${S}" stroke-width="2.6"/><g stroke="#E3A93C" stroke-width="3.2" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => { const t = a * Math.PI / 180;
      return `<path d="M${100 + Math.cos(t) * 26} ${70 + Math.sin(t) * 26} L${100 + Math.cos(t) * 33} ${70 + Math.sin(t) * 33}"/>`; }).join('')}</g>`][i];
  let dots = '';
  for(let k = 0; k < 7; k++) dots += `<circle cx="${70 + k * 10}" cy="24" r="3.4" fill="${k === i ? '#C1403A' : '#FBF7EC'}" stroke="${S}" stroke-width="1.4"/>`;
  const name = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'][i];
  return `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="${name}">
    <rect x="46" y="10" width="108" height="112" rx="10" fill="${col}" stroke="${S}" stroke-width="3"/>
    <path d="M46 34 L154 34" stroke="${S}" stroke-width="2"/>${dots}${icon}</svg>`;
}
for(let i = 0; i < 7; i++) M3_ONLY['day' + (i + 1)] = m3Day(i);
/* 내일: 오늘 카드에서 다음 카드로 가는 화살표 */
M3_ONLY.tomorrow = `<svg viewBox="0 0 200 130" width="150" height="98" role="img" aria-label="내일">
  <rect x="14" y="30" width="66" height="72" rx="8" fill="#F5E6BD" stroke="#221F1C" stroke-width="3"/><circle cx="47" cy="66" r="12" fill="#F2C14E" stroke="#221F1C" stroke-width="2"/>
  <rect x="120" y="30" width="66" height="72" rx="8" fill="#FBF7EC" stroke="#221F1C" stroke-width="3" stroke-dasharray="7 4"/><circle cx="153" cy="66" r="12" fill="#F2C14E" stroke="#221F1C" stroke-width="2" opacity=".5"/>
  <path d="M86 66 L112 66" stroke="#C1403A" stroke-width="5" stroke-linecap="round"/><path d="M104 58 L114 66 L104 74" stroke="#C1403A" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* 셋째 달 화면에서는 둘째 달 그림도 함께 씁니다. */
const M3_PIC = Object.assign({}, M2_PIC, M3_ONLY);

/* ---- 묶음 ---- */
const M3_BUNDLES = [
  {k:1, title:'아침에 일어나요', topic:'하루 일과와 시계', nights:[1, 2, 3], after:'그동안 가족에게 안녕히 주무세요, 하고 밤 인사를 해 봐.'},
  {k:2, title:'학교에 가요', topic:'학교와 주말 한글학교', nights:[4, 5, 6], after:'그동안 한글학교에서, 아니면 집에서 가족과 선생님 놀이를 하며 세 마디 인사를 해 봐.'},
  {k:3, title:'맛있어요', topic:'음식, 좋아해요와 먹고 싶어요', nights:[7, 8, 9], after:'그동안 밥 먹기 전에는 잘 먹겠습니다, 먹고 나서는 잘 먹었습니다를 말해 봐.'},
  {k:4, title:'오늘 날씨', topic:'날씨와 계절', nights:[10, 11, 12], after:'그동안 아침마다 창밖을 보고 오늘 날씨를 가족에게 알려 줘.'},
  {k:5, title:'토리의 하루', topic:'요일과 하루 이야기', nights:[13, 14, 15], after:'이제 가족에게 네 하루를 처음부터 끝까지 이야기해 봐.'}
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
  dictWords:[] },

/* ---- 셋째 묶음: 맛있어요 ---------------------------------------
   한국 음식과 흔한 음식, 맛(맛있어요, 매워요), 식탁 인사(잘 먹겠습니다, 잘 먹었습니다).
   둘째 밤에 좋아해요, 싫어해요, 안(부정), 먹고 싶어요(바람), 주세요를 문장으로 씁니다.
   을/를은 둘째 묶음에서 배운 받침 규칙을 음식 이름으로 다시 씁니다. */
{ n:7, bundle:3, title:'밥, 김치, 떡볶이',
  steps:[
    {type:'intro', who:'moi',
     t:'배고파! 오늘은 먹는 말을 모아 왔어. 집에서 먹는 음식 이름이 많이 나올 거야.',
     big:'맛있어요'},
    {type:'pairs', title:'밥상 위의 음식', who:'moi',
     t:'그림을 누르면 소리가 나. 너희 집 밥상에도 있는지 봐.',
     singles:[
       {w:'밥', pic:'f_rice', en:'rice, a meal'}, {w:'국', pic:'f_soup', en:'soup'}, {w:'김치', pic:'f_kimchi', en:'kimchi'},
       {w:'떡볶이', pic:'f_tteok', en:'spicy rice cakes'}, {w:'김밥', pic:'f_gimbap', en:'rice rolls'}, {w:'빵', pic:'f_bread', en:'bread'},
       {w:'우유', pic:'f_milk', en:'milk'}, {w:'물', pic:'f_water', en:'water'}],
     tip:{who:'dami', t:'밥은 쌀로 지은 밥이기도 하고, 끼니를 뜻하기도 한단다. 밥 먹자, 하면 식사하자는 말이지.'}},
    {type:'pairs', title:'먹을 때 하는 말', who:'moi',
     t:'맛을 말하는 말과 배고플 때 하는 말이야.',
     singles:[
       {w:'맛있어요', pic:'m_yum', en:'it is tasty'}, {w:'매워요', pic:'m_spicy', en:'it is spicy'},
       {w:'배고파요', pic:'f_hungry', en:"I'm hungry"}, {w:'마셔요', pic:'f_drink', en:'drink'}],
     tip:{who:'tori', t:'맛있어요의 반대는 맛없어요야. 그런데 할머니가 해 주신 음식에는 맛없어요라고 하지 않는 게 좋아.'}},
    {type:'pairs', title:'밥상 인사', who:'dami',
     t:'한국 집에서는 밥 먹기 전과 먹은 뒤에 인사를 한단다. 어른과 함께 먹을 때는 꼭 하거라.',
     singles:[
       {w:'잘 먹겠습니다', pic:'f_rice', en:'(before eating) Thank you for the food.'},
       {w:'잘 먹었습니다', pic:'m_yum', en:'(after eating) Thank you, I enjoyed it.'}]},
    {type:'choose', title:'이건 뭐예요?', who:'tori',
     t:'그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'f_kimchi', o:['김치','김밥','국'], a:'김치'},
       {pic:'f_tteok', o:['빵','떡볶이','밥'], a:'떡볶이'},
       {pic:'f_milk', o:['물','우유','국'], a:'우유'},
       {pic:'m_spicy', o:['맛있어요','매워요','배고파요'], a:'매워요'},
       {pic:'f_rice', t:'밥을 먹기 전이에요.', en:'You are about to eat.', o:['잘 먹겠습니다','잘 먹었습니다'], a:'잘 먹겠습니다', why:'먹기 전에는 ‘잘 먹겠습니다’, 먹은 뒤에는 ‘잘 먹었습니다’예요.'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 그림을 찾아 봐.',
     qs:[
       {say:'김밥', o:['f_gimbap','f_kimchi','f_bread'], a:'f_gimbap'},
       {say:'물', o:['f_milk','f_water','f_soup'], a:'f_water'},
       {say:'맛있어요', o:['m_spicy','m_yum','f_hungry'], a:'m_yum'},
       {say:'국', o:['f_rice','f_soup','f_tteok'], a:'f_soup'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'음식 이름을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'밥', en:'rice'}, {w:'김치', en:'kimchi'}, {w:'우유', en:'milk'}]}
  ],
  dictWords:[{w:'밥', en:'rice, a meal'}, {w:'국', en:'soup'}, {w:'김치', en:'kimchi'}, {w:'김밥', en:'rice rolls'},
             {w:'빵', en:'bread'}, {w:'우유', en:'milk'}, {w:'물', en:'water'}, {w:'매워요', en:'it is spicy'}] },

{ n:8, bundle:3, title:'김밥을 좋아해요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 좋아하는 음식, 싫어하는 음식, 먹고 싶은 음식을 말해 볼 거야. 무엇을 좋아하는지 말할 때도 ‘을’, ‘를’이 붙어.',
     big:'김밥을 좋아해요'},
    {type:'pairs', title:'오늘의 말', who:'moi',
     t:'오늘 문장에 쓸 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'좋아해요', pic:'m_like', en:'like'}, {w:'싫어해요', pic:'m_dislike', en:"don't like"},
       {w:'먹고 싶어요', pic:'f_hungry', en:'want to eat'}, {w:'주세요', pic:'thanks', en:'please give me'}],
     tip:{who:'tori', t:'안 먹어요처럼 움직이는 말 앞에 ‘안’을 붙이면 안 한다는 뜻이야. 안 매워요, 안 마셔요도 돼.'}},
    {type:'likes', title:'나는 뭘 좋아할까?', who:'tori',
     t:'음식마다 좋아해요와 싫어해요 가운데 하나를 눌러 봐. 네 문장이 만들어져. 세 개 이상 하면 다음으로 갈 수 있어.',
     items:[{w:'김치', pic:'f_kimchi'}, {w:'떡볶이', pic:'f_tteok'}, {w:'김밥', pic:'f_gimbap'}, {w:'우유', pic:'f_milk'}, {w:'빵', pic:'f_bread'}, {w:'국', pic:'f_soup'}],
     tip:{who:'dami', t:'김치에는 받침이 없어서 ‘김치를’, 국에는 받침이 있어서 ‘국을’이지. 받침 삼 형제가 여기서도 일하는구나.'}},
    {type:'josa', j:'을', q:'뒤에 무엇을 붙일까요?', title:'을일까요, 를일까요?', who:'tori',
     t:'음식 이름 끝 글자에 받침이 있는지 보고 골라 봐.',
     names:['밥','김치','우유','물','빵','떡볶이','김밥','국']},
    {type:'choose', title:'그림을 보고 말해요', who:'tori',
     t:'그림에 맞는 말을 골라 봐.',
     qs:[
       {pic:'f_hungry', o:['떡볶이를 먹고 싶어요.','떡볶이를 먹어요 싶어요.'], a:'떡볶이를 먹고 싶어요.', en:'I want to eat tteokbokki.', why:'먹고 싶을 때는 ‘먹고 싶어요’라고 해요.'},
       {pic:'m_dislike', t:'우유를 싫어해요. 어떻게 말해요?', o:['우유를 안 마셔요.','우유를 마셔요 안.'], a:'우유를 안 마셔요.', en:"I don't drink milk.", why:'‘안’은 움직이는 말 바로 앞에 와요.'},
       {pic:'m_like', o:['김밥을 좋아해요.','김밥를 좋아해요.'], a:'김밥을 좋아해요.', en:'I like gimbap.', why:'‘밥’에 받침이 있어서 ‘을’이에요.'},
       {pic:'f_water', t:'물이 마시고 싶어요. 할머니께 말해요.', o:['물 주세요.','물 줘.'], a:'물 주세요.', en:'Water, please.', why:'어른께는 ‘주세요’라고 해요.'}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'저는 떡볶이를 좋아해요.', tiles:['저는','떡볶이를','좋아해요.'], extra:['떡볶이을'], en:'I like tteokbokki.', hint:'‘이’에는 받침이 없어요.'},
       {s:'우유를 마셔요.', tiles:['우유를','마셔요.'], extra:['우유을'], en:'I drink milk.'},
       {s:'김치를 안 먹어요.', tiles:['김치를','안','먹어요.'], en:"I don't eat kimchi.", hint:'‘안’은 움직이는 말 바로 앞에 와요.'},
       {s:'김밥을 먹고 싶어요.', tiles:['김밥을','먹고','싶어요.'], extra:['김밥를'], en:'I want to eat gimbap.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'맛있는 말에도 소리 비밀이 숨어 있단다. 들어 보거라.',
     cmp:[
       {s:'맛있어요', d:'마시써요', n:'ㅅ 받침과 ㅆ 받침이 차례로 뒤로 건너가요'},
       {s:'좋아해요', d:'조아해요', n:'ㅎ 받침은 소리가 나지 않아요'},
       {s:'먹고 싶어요', d:'먹꼬 시퍼요', n:'ㄱ 뒤의 ㄱ은 ㄲ처럼, ㅍ 받침은 뒤로 건너가요'},
       {s:'떡볶이', d:'떡뽀끼', n:'ㄱ 뒤의 ㅂ은 ㅃ처럼, ㄲ 받침은 뒤로 건너가요'}],
     note:'좋아해요의 ㅎ은 조용한 받침이란다. 소리는 안 나도 글자에는 꼭 써야 하지. 좋다, 좋은, 좋아요, 모두 ㅎ이 숨어 있단다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'좋아해요', en:'like', hint:{who:'dami', t:'소리는 [조아해요]지만 ‘좋’에는 조용한 받침 ㅎ이 있단다.'}},
       {w:'맛있어요', en:'it is tasty', hint:{who:'dami', t:'소리는 [마시써요]지만 ‘맛’과 ‘있’, 받침이 두 번 있단다. 맛, 있, 어, 요 차례로 써 보거라.'}},
       {w:'빵', en:'bread'}]}
  ],
  dictWords:[{w:'좋아해요', en:'like'}, {w:'맛있어요', en:'it is tasty'}, {w:'주세요', en:'please give me'}, {w:'마셔요', en:'drink'}] },

{ n:9, bundle:3, title:'담이의 떡볶이',
  steps:[
    {type:'intro', who:'moi',
     t:'담이 할아버지가 점심을 만드셨대! 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'잘 먹겠습니다!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'dami', t:'얘들아, 점심 먹자. 떡볶이란다.', en:"Kids, let's have lunch. It's tteokbokki."},
       {who:'tori', t:'와! 잘 먹겠습니다!', en:'Wow! Thank you for the food!'},
       {who:'moi', t:'음, 맛있어요!', en:"Mmm, it's delicious!"},
       {who:'tori', t:'앗, 매워요! 할아버지, 물 주세요.', en:"Ah, it's spicy! Grandpa, water please."},
       {who:'dami', t:'허허, 토리는 매운 떡볶이를 안 먹는구나. 김밥도 있단다.', en:"Ho ho, Tori doesn't eat spicy tteokbokki. There's gimbap too."},
       {who:'tori', t:'저는 김밥을 좋아해요!', en:'I like gimbap!'},
       {who:'moi', t:'나는 떡볶이를 더 먹고 싶어.', en:'I want to eat more tteokbokki.'},
       {who:'tori', t:'잘 먹었습니다!', en:'Thank you, that was delicious!'}],
     note:{who:'dami', t:'토리가 먹기 전에는 ‘잘 먹겠습니다’, 다 먹고는 ‘잘 먹었습니다’라고 했지? 그리고 물이 필요할 때는 ‘물 주세요’. 주세요는 무엇이든 부탁할 때 쓰는 요긴한 말이란다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'할아버지가 만든 점심은 무엇이에요?', o:['김치','떡볶이','빵'], a:'떡볶이', why:'할아버지는 ‘떡볶이란다’라고 하셨어요.'},
       {t:'토리에게 떡볶이는 어때요?', o:['매워요','맛없어요','달아요'], a:'매워요', why:'토리는 ‘앗, 매워요!’라고 했어요.'},
       {t:'토리는 무엇을 좋아해요?', o:['떡볶이','김밥','우유'], a:'김밥', why:'토리는 ‘저는 김밥을 좋아해요’라고 했어요.'},
       {t:'모이는 무엇을 더 먹고 싶어요?', o:['김밥','떡볶이','물'], a:'떡볶이', why:'모이는 ‘떡볶이를 더 먹고 싶어’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {line:{who:'dami', t:'토리야, 무엇을 먹고 싶으냐?'}, en:'Tori, what do you want to eat?', o:['김밥을 먹고 싶어.','김밥을 먹고 싶어요.'], a:'김밥을 먹고 싶어요.', why:'할아버지는 어른이라서 ‘싶어요’라고 해요.'},
       {line:{who:'moi', t:'토리야, 떡볶이 좋아해?'}, en:'Tori, do you like tteokbokki?', o:['아니, 매워.','아니요, 매워요.'], a:'아니, 매워.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'m_yum', t:'할머니가 해 주신 밥을 다 먹었어요.', en:"You finished the meal Grandma made.", o:['잘 먹겠습니다.','잘 먹었습니다.'], a:'잘 먹었습니다.', why:'다 먹은 뒤에는 ‘잘 먹었습니다’라고 해요.'}]},
    {type:'task', title:'밥상 인사', who:'moi',
     t:'오늘 저녁부터 밥상에서 해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'밥 먹기 전에', say:'잘 먹겠습니다.', sub:'어른이 먼저 수저를 드신 뒤에 먹어요.'},
       {when:'다 먹은 뒤에', say:'잘 먹었습니다.', sub:'음식을 해 주신 분께 말해요.'},
       {when:'좋아하는 음식을 말해요', say:'저는 ______을 좋아해요.', sub:'받침이 없으면 를: 저는 김치를 좋아해요.'}],
     parent:'"잘 먹겠습니다"와 "잘 먹었습니다"는 한국 가정에서 매일 쓰는 인사라, 한동안 식사 때마다 해 주시면 금방 자리 잡습니다. 한국 음식을 드시는 날에는 음식 이름을 한국어로 불러 주세요. 김치, 국, 밥처럼 짧은 이름부터 시작하면 좋습니다. 아이가 물이나 반찬이 필요할 때 영어 대신 "물 주세요"라고 말하면 바로 건네주시면 됩니다. 한국 음식을 자주 드시지 않는 가정이라면 빵, 우유, 사과처럼 이미 배운 말로 해도 충분합니다.'}
  ],
  dictWords:[] },

/* ---- 넷째 묶음: 오늘 날씨 ---------------------------------------
   날씨(맑아요, 흐려요, 비가 와요, 눈이 와요, 바람이 불어요, 더워요, 추워요)와 봄, 여름, 가을, 겨울.
   비가 와요, 눈이 와요는 둘째 달의 이/가를 그대로 씁니다. 눈(snow)과 둘째 달의 눈(eye), 써요(write)와
   우산을 써요, 모자를 써요처럼 같은 글자 다른 뜻을 짚습니다. 추워요, 더워요는 규칙 없이 말 덩어리로 익힙니다. */
{ n:10, bundle:4, title:'비가 와요',
  steps:[
    {type:'intro', who:'moi',
     t:'창밖을 봐! 오늘은 날씨를 말하는 말을 모아 왔어. 아침마다 쓸 수 있는 말이야.',
     big:'오늘 날씨'},
    {type:'pairs', title:'하늘을 봐요', who:'moi',
     t:'하늘이 어떤지 말하는 말이야. 그림을 누르면 소리가 나.',
     singles:[
       {w:'맑아요', pic:'w_sunny', en:"it's clear, sunny"}, {w:'흐려요', pic:'w_cloudy', en:"it's cloudy"},
       {w:'비가 와요', pic:'w_rain', en:"it's raining"}, {w:'눈이 와요', pic:'w_snow', en:"it's snowing"},
       {w:'바람이 불어요', pic:'w_wind', en:"it's windy"}],
     tip:{who:'dami', t:'눈이 와요의 눈은 하늘에서 오는 눈이란다. 둘째 달에 배운 얼굴의 눈과 글자가 같지. 그림과 문장을 보면 어느 눈인지 알 수 있단다.'}},
    {type:'pairs', title:'덥고 추워요', who:'moi',
     t:'몸으로 느끼는 날씨와 비 올 때 쓰는 물건이야.',
     singles:[
       {w:'더워요', pic:'w_hot', en:"it's hot"}, {w:'추워요', pic:'w_cold', en:"it's cold"},
       {w:'날씨', pic:'w_sunny', en:'weather'}, {w:'우산', pic:'w_umbrella', en:'umbrella'}, {w:'모자', pic:'w_hat', en:'hat'}],
     tip:{who:'tori', t:'우산은 써요, 모자도 써요. 학교에서 배운 글씨를 써요와 같은 말이야. 머리 위에 쓰는 건 써요라고 해.'}},
    {type:'choose', title:'오늘 날씨는 어때요?', who:'tori',
     t:'그림을 보고 날씨를 골라 봐.',
     qs:[
       {pic:'w_rain', o:['비가 와요','눈이 와요','맑아요'], a:'비가 와요'},
       {pic:'w_cloudy', o:['맑아요','흐려요','더워요'], a:'흐려요'},
       {pic:'w_wind', o:['바람이 불어요','비가 와요','추워요'], a:'바람이 불어요'},
       {pic:'w_cold', o:['더워요','추워요','맑아요'], a:'추워요'},
       {pic:'w_umbrella', o:['모자','우산','눈'], a:'우산'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 날씨를 찾아 봐.',
     qs:[
       {say:'눈이 와요', o:['w_rain','w_snow','w_cloudy'], a:'w_snow'},
       {say:'맑아요', o:['w_sunny','w_wind','w_cloudy'], a:'w_sunny'},
       {say:'더워요', o:['w_cold','w_hot','w_snow'], a:'w_hot'},
       {say:'모자', o:['w_umbrella','w_hat','w_snowman'], a:'w_hat'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'날씨 말을 써 봐. 뜻을 같이 보면 도움이 돼.',
     items:[{w:'비', en:'rain'}, {w:'눈', en:'snow'}, {w:'우산', en:'umbrella'}]}
  ],
  dictWords:[{w:'비', en:'rain'}, {w:'눈', en:'snow'}, {w:'날씨', en:'weather'}, {w:'우산', en:'umbrella'},
             {w:'모자', en:'hat'}, {w:'더워요', en:"it's hot"}, {w:'추워요', en:"it's cold"}, {w:'흐려요', en:"it's cloudy"}] },

{ n:11, bundle:4, title:'겨울에 눈이 와요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 네 계절을 배워. 봄, 여름, 가을, 겨울. 계절 뒤에도 아침에, 주말에처럼 ‘에’를 붙여.',
     big:'겨울에 눈이 와요'},
    {type:'pairs', title:'네 계절', who:'moi',
     t:'계절마다 모습이 달라. 그림을 누르면 소리가 나.',
     singles:[
       {w:'봄', pic:'w_spring', en:'spring'}, {w:'여름', pic:'w_summer', en:'summer'},
       {w:'가을', pic:'w_autumn', en:'fall, autumn'}, {w:'겨울', pic:'w_winter', en:'winter'},
       {w:'오늘', pic:'w_sunny', en:'today'}],
     tip:{who:'dami', t:'한국에도 봄, 여름, 가을, 겨울이 뚜렷하단다. 여기 미국과 한국은 같은 때 같은 계절이지. 그러니 할머니 할아버지께 전화로 날씨를 물어보면 비슷한 대답이 돌아올 게야.'}},
    {type:'choose', title:'어느 계절이에요?', who:'tori',
     t:'그림을 보고 계절을 골라 봐.',
     qs:[
       {pic:'w_autumn', o:['봄','가을','여름'], a:'가을'},
       {pic:'w_winter', o:['겨울','여름','봄'], a:'겨울'},
       {pic:'w_spring', o:['가을','겨울','봄'], a:'봄'},
       {pic:'w_summer', o:['여름','가을','겨울'], a:'여름'}]},
    {type:'choose', title:'계절과 날씨', who:'moi',
     t:'계절에 맞는 말을 골라 봐. 이와 가, 그리고 ‘에’를 잘 봐.',
     qs:[
       {pic:'w_winter', o:['겨울에 눈이 와요.','겨울에 눈가 와요.'], a:'겨울에 눈이 와요.', en:'It snows in winter.', why:'‘눈’에 받침 ㄴ이 있어서 ‘이’예요.'},
       {pic:'w_summer', o:['여름에 추워요.','여름에 더워요.'], a:'여름에 더워요.', en:"It's hot in summer."},
       {pic:'w_rain', o:['비가 와요.','비이 와요.'], a:'비가 와요.', en:"It's raining.", why:'‘비’에는 받침이 없어서 ‘가’예요.'},
       {pic:'w_umbrella', o:['우산을 써요.','우산를 써요.'], a:'우산을 써요.', en:'I use an umbrella.', why:'‘산’에 받침이 있어서 ‘을’이에요.'},
       {pic:'w_wind', o:['바람이 불어요.','바람가 불어요.'], a:'바람이 불어요.', en:"It's windy."}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'오늘 날씨가 어때요?', tiles:['오늘','날씨가','어때요?'], en:"How's the weather today?"},
       {s:'오늘은 비가 와요.', tiles:['오늘은','비가','와요.'], extra:['비이'], en:"It's raining today.", hint:'‘비’에는 받침이 없어요.'},
       {s:'겨울에 눈이 와요.', tiles:['겨울에','눈이','와요.'], extra:['눈가'], en:'It snows in winter.'},
       {s:'모자를 써요.', tiles:['모자를','써요.'], extra:['모자을'], en:'I wear a hat.', hint:'‘자’에는 받침이 없어요.'}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'날씨 말에도 소리 비밀이 있단다. 맑아요는 읽어요처럼 받침이 둘이지.',
     cmp:[
       {s:'맑아요', d:'말가요', n:'ㄺ 가운데 ㄱ이 뒤로 건너가요'},
       {s:'눈이 와요', d:'누니 와요', n:'ㄴ 받침이 뒤로 건너가요'},
       {s:'겨울에', d:'겨우레', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'바람이', d:'바라미', n:'ㅁ 받침이 뒤로 건너가요'}],
     note:'맑아요의 ‘맑’에는 ㄹ과 ㄱ이 함께 있단다. 읽어요에서 만난 바로 그 받침이지. 한 번 만난 받침은 또 만나면 반가운 법이란다.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'맑아요', en:"it's clear", hint:{who:'dami', t:'소리는 [말가요]지만 ‘맑’에는 ㄹ과 ㄱ이 함께 있단다. 받침 줄에서 ㄺ을 찾아보거라.'}},
       {w:'겨울', en:'winter'},
       {w:'여름', en:'summer'}]}
  ],
  dictWords:[{w:'봄', en:'spring'}, {w:'여름', en:'summer'}, {w:'가을', en:'fall'}, {w:'겨울', en:'winter'},
             {w:'맑아요', en:"it's clear"}, {w:'오늘', en:'today'}] },

{ n:12, bundle:4, title:'첫눈 오는 날',
  steps:[
    {type:'intro', who:'moi',
     t:'밖을 봐, 하얀 게 내려! 먼저 글자 없이 귀로만 들어 보고, 그다음에 글자를 같이 보자.',
     big:'눈이 와!'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 누가 무슨 말을 하는지 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'moi', t:'토리야, 창문 봐! 눈이 와!', en:"Tori, look out the window! It's snowing!"},
       {who:'tori', t:'와, 첫눈이야! 밖에 나가자.', en:"Wow, it's the first snow! Let's go outside."},
       {who:'dami', t:'허허, 밖은 아주 춥단다. 모자를 쓰거라.', en:"Ho ho, it's very cold outside. Put on a hat."},
       {who:'tori', t:'네, 할아버지. 모자를 써요.', en:"Okay, Grandpa. I'm putting on my hat."},
       {who:'moi', t:'우리 눈사람을 만들자!', en:"Let's make a snowman!"},
       {who:'tori', t:'눈사람 눈은 까만 돌이야.', en:"The snowman's eyes are black stones."},
       {who:'dami', t:'허허, 눈사람에게도 눈이 있구나.', en:'Ho ho, even the snowman has eyes.'},
       {who:'moi', t:'나는 겨울이 좋아!', en:'I love winter!'}],
     note:{who:'dami', t:'눈사람 눈이라니, 하늘의 눈으로 만든 사람에게 얼굴의 눈을 달았구나. 같은 글자라도 문장 안에서 뜻이 정해진단다. 그리고 토리가 모자를 쓸 때도 ‘써요’라고 했지?'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'창밖에 무엇이 와요?', o:['비','눈','바람'], a:'눈', why:'모이는 ‘눈이 와!’라고 했어요.'},
       {t:'밖은 어때요?', o:['더워요','추워요','맑아요'], a:'추워요', why:'할아버지는 ‘밖은 아주 춥단다’라고 하셨어요.'},
       {t:'토리는 무엇을 써요?', o:['우산','모자','안경'], a:'모자', why:'토리는 ‘모자를 써요’라고 했어요.'},
       {t:'눈사람 눈은 무엇이에요?', o:['까만 돌','사과','연필'], a:'까만 돌', why:'토리는 ‘눈사람 눈은 까만 돌이야’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {pic:'w_rain', line:{who:'moi', t:'토리야, 오늘 날씨 어때?'}, en:"Tori, how's the weather today?", o:['비가 와.','비가 와요.'], a:'비가 와.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {pic:'w_snow', line:{who:'dami', t:'토리야, 밖이 춥느냐?'}, en:'Tori, is it cold outside?', o:['응, 추워.','네, 추워요.'], a:'네, 추워요.', why:'할아버지는 어른이라서 ‘네, 추워요’라고 해요.'},
       {pic:'w_sunny', t:'할머니께 전화로 오늘 날씨를 알려 드려요.', en:"Tell Grandma today's weather on the phone.", o:['할머니, 오늘은 맑아요.','할머니, 오늘은 비가 와요.'], a:'할머니, 오늘은 맑아요.', why:'해가 떠 있으니 맑아요.'}]},
    {type:'task', title:'오늘의 날씨 알림이', who:'moi',
     t:'사흘 동안 아침마다 날씨 알림이가 되어 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'아침에 창밖을 보고 가족에게', say:'오늘은 ______.', sub:'맑아요, 흐려요, 비가 와요, 눈이 와요, 바람이 불어요 가운데 하나.'},
       {when:'덥거나 추우면 하나 더', say:'오늘은 추워요.', sub:'더우면 더워요.'},
       {when:'할머니 할아버지와 통화할 때 물어봐요', say:'할머니, 오늘 날씨가 어때요?', sub:'대답을 잘 듣고 여기 날씨와 비교해 봐요.'}],
     parent:'사흘 정도 아침 식사 전에 아이에게 창밖을 보고 날씨를 말하게 해 주세요. 한국에 계신 조부모님과 통화하신다면 "오늘 날씨가 어때요?"를 여쭤 보게 하시면 좋습니다. 한국과 미국은 계절이 같아도 날씨가 다를 때가 많아서 아이가 흥미를 느낍니다. 첫눈이 오는 날에는 이 밤의 이야기를 다시 들려주셔도 좋습니다.'}
  ],
  dictWords:[] },

/* ---- 다섯째 묶음: 토리의 하루 -------------------------------------
   요일 일곱 개와 내일. 요일 이름에 숨은 달, 불, 물, 나무, 쇠, 흙, 해를 그림으로 보여 줍니다.
   "월요일부터 금요일까지"는 부터, 까지를 규칙 없이 말 덩어리로 씁니다.
   셋째 밤에는 토리가 하루를 처음부터 끝까지 이야기하며 셋째 달의 네 묶음을 모두 다시 씁니다. */
{ n:13, bundle:5, title:'월요일부터 일요일까지',
  steps:[
    {type:'intro', who:'moi',
     t:'셋째 달 마지막 묶음이야. 오늘은 요일을 모아 왔어. 일곱 개니까 하나, 둘, 셋 세면서 들어 봐.',
     big:'월요일, 화요일, 수요일'},
    {type:'pairs', title:'일곱 요일', who:'moi',
     t:'요일마다 그림이 하나씩 숨어 있어. 그림을 누르면 소리가 나.',
     singles:[
       {w:'월요일', pic:'day1', en:'Monday'}, {w:'화요일', pic:'day2', en:'Tuesday'}, {w:'수요일', pic:'day3', en:'Wednesday'},
       {w:'목요일', pic:'day4', en:'Thursday'}, {w:'금요일', pic:'day5', en:'Friday'}, {w:'토요일', pic:'day6', en:'Saturday'},
       {w:'일요일', pic:'day7', en:'Sunday'}],
     tip:{who:'dami', t:'요일 이름 첫 글자에는 옛사람들이 하늘에서 본 것이 숨어 있단다. 월은 달, 화는 불, 수는 물, 목은 나무, 금은 쇠, 토는 흙, 일은 해. 그래서 그림이 그렇게 생겼지.'}},
    {type:'pairs', title:'오늘과 내일', who:'moi',
     t:'날을 말하는 말 두 개를 더 가져왔어. 오늘은 넷째 묶음에서 만났지?',
     singles:[{w:'오늘', pic:'w_sunny', en:'today'}, {w:'내일', pic:'tomorrow', en:'tomorrow'}, {w:'요일', pic:'day1', en:'day of the week'}]},
    {type:'build', title:'차례대로 말해요', who:'tori',
     t:'요일 카드를 차례대로 눌러 봐. 월요일부터 시작해.',
     qs:[
       {s:'월요일 화요일 수요일 목요일', tiles:['월요일','화요일','수요일','목요일'], en:'Monday to Thursday', hint:'달, 불, 물, 나무 차례예요.'},
       {s:'금요일 토요일 일요일', tiles:['금요일','토요일','일요일'], en:'Friday to Sunday', hint:'쇠, 흙, 해 차례예요.'}]},
    {type:'choose', title:'무슨 요일이에요?', who:'tori',
     t:'그림을 보고 요일을 골라 봐. 위의 빨간 점이 한 주에서 몇째 날인지 알려 줘.',
     qs:[
       {pic:'day3', o:['수요일','화요일','금요일'], a:'수요일'},
       {pic:'day6', o:['일요일','토요일','월요일'], a:'토요일'},
       {pic:'day4', o:['목요일','금요일','수요일'], a:'목요일'},
       {pic:'day7', t:'해가 숨은 날이에요.', o:['월요일','일요일','화요일'], a:'일요일'},
       {pic:'day2', t:'월요일 다음 날이에요.', o:['화요일','수요일','토요일'], a:'화요일'}]},
    {type:'choose', mode:'pic', title:'듣고 그림을 골라요', who:'moi',
     t:'내가 말하는 요일을 찾아 봐.',
     qs:[
       {say:'월요일', o:['day7','day1','day3'], a:'day1'},
       {say:'금요일', o:['day5','day6','day4'], a:'day5'},
       {say:'내일', o:['w_sunny','tomorrow','day2'], a:'tomorrow'},
       {say:'목요일', o:['day2','day3','day4'], a:'day4'}]},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'요일을 써 봐. 요일은 모두 ‘요일’로 끝나.',
     items:[{w:'토요일', en:'Saturday'}, {w:'수요일', en:'Wednesday'}, {w:'내일', en:'tomorrow'}]}
  ],
  dictWords:[{w:'월요일', en:'Monday'}, {w:'화요일', en:'Tuesday'}, {w:'수요일', en:'Wednesday'}, {w:'목요일', en:'Thursday'},
             {w:'금요일', en:'Friday'}, {w:'토요일', en:'Saturday'}, {w:'일요일', en:'Sunday'}, {w:'내일', en:'tomorrow'}] },

{ n:14, bundle:5, title:'토요일에 한글학교에 가요',
  steps:[
    {type:'intro', who:'tori',
     t:'오늘은 요일마다 무엇을 하는지 말해 볼 거야. 요일 뒤에도 ‘에’를 붙여. 토요일에, 일요일에.',
     big:'토요일에 한글학교에 가요'},
    {type:'pairs', title:'오늘의 말', who:'moi',
     t:'오늘 문장에 쓸 말이야. 눌러서 들어 봐.',
     singles:[
       {w:'뭐 해요?', pic:'what', en:'What do you do?'},
       {w:'월요일부터 금요일까지', pic:'s_school', en:'from Monday to Friday'},
       {w:'할머니 집', pic:'t_house', en:"grandma's house"}],
     tip:{who:'tori', t:'부터는 시작, 까지는 끝이야. 월요일부터 금요일까지는 월요일에 시작해서 금요일에 끝난다는 뜻이야.'}},
    {type:'choose', title:'토리의 한 주', who:'tori',
     t:'토리의 한 주야. 그림을 보고 알맞은 말을 골라 봐.',
     qs:[
       {pic:'s_school', t:'월요일부터 금요일까지 어디에 가요?', o:['학교에 가요.','한글학교에 가요.'], a:'학교에 가요.', en:'I go to school.'},
       {pic:'s_hangeul', t:'토요일에 어디에 가요?', o:['토요일에 한글학교에 가요.','토요일이 한글학교에 가요.'], a:'토요일에 한글학교에 가요.', en:'I go to Korean school on Saturday.', why:'요일 뒤에는 ‘에’를 붙여요.'},
       {pic:'t_house', t:'일요일에 뭐 해요?', o:['할머니 집에 가요.','할머니 집이 가요.'], a:'할머니 집에 가요.', en:"I go to Grandma's house.", why:'가는 곳 뒤에는 ‘에’를 붙여요.'},
       {pic:'tomorrow', t:'오늘은 금요일이에요. 내일은 무슨 요일이에요?', o:['목요일이에요.','토요일이에요.'], a:'토요일이에요.', en:"Tomorrow is Saturday."}]},
    {type:'build', title:'문장을 만들어요', who:'moi',
     t:'낱말 카드를 차례대로 눌러서 문장을 만들어 봐.',
     qs:[
       {s:'일요일에 뭐 해요?', tiles:['일요일에','뭐','해요?'], en:'What do you do on Sunday?'},
       {s:'토요일에 한글학교에 가요.', tiles:['토요일에','한글학교에','가요.'], extra:['토요일이'], en:'I go to Korean school on Saturday.', hint:'언제(토요일에), 어디(한글학교에), 가요 차례예요.'},
       {s:'월요일부터 금요일까지 학교에 가요.', tiles:['월요일부터','금요일까지','학교에','가요.'], en:'I go to school from Monday to Friday.', hint:'시작(부터)이 먼저, 끝(까지)이 다음이에요.'},
       {s:'내일 할머니 집에 가요.', tiles:['내일','할머니','집에','가요.'], extra:['집이'], en:"Tomorrow I'm going to Grandma's house."}]},
    {type:'sound', title:'소리와 글자가 달라요', who:'dami',
     t:'요일 이름에서도 받침이 뒤로 건너간단다. 요일마다 들어 보거라.',
     cmp:[
       {s:'월요일', d:'워료일', n:'ㄹ 받침이 뒤로 건너가요'},
       {s:'목요일', d:'모교일', n:'ㄱ 받침이 뒤로 건너가요'},
       {s:'금요일', d:'그묘일', n:'ㅁ 받침이 뒤로 건너가요'},
       {s:'일요일', d:'이료일', n:'ㄹ 받침이 뒤로 건너가요'}],
     note:'요일 앞 글자는 달, 불, 물, 나무 같은 뜻을 가진 글자라 모양을 지킨단다. [워료일]로 들려도 달을 뜻하는 ‘월’을 써야 하지.'},
    {type:'dict', title:'듣고 써 봐요', who:'tori',
     t:'들리는 말을 써 봐. 담이 할아버지 말을 떠올려 봐.',
     items:[
       {w:'목요일', en:'Thursday', hint:{who:'dami', t:'소리는 [모교일]이지만 나무를 뜻하는 ‘목’에 받침 ㄱ이 있단다.'}},
       {w:'일요일', en:'Sunday', hint:{who:'dami', t:'소리는 [이료일]이지만 해를 뜻하는 ‘일’에 받침 ㄹ이 있단다.'}},
       {w:'뭐', en:'what'}]}
  ],
  dictWords:[{w:'뭐', en:'what'}, {w:'목요일', en:'Thursday'}, {w:'일요일', en:'Sunday'}] },

{ n:15, bundle:5, title:'토리의 하루',
  steps:[
    {type:'intro', who:'tori',
     t:'셋째 달 마지막 밤이야. 오늘은 내가 내 하루를 처음부터 끝까지 이야기해 줄게. 셋째 달에 배운 말이 다 나와. 먼저 귀로만 들어 봐.',
     big:'저는 토리예요'},
    {type:'dialogue', title:'이야기를 들어요', who:'tori',
     t:'처음부터 듣기를 눌러 봐. 토리의 하루를 귀로만 먼저 들어 봐. 다 듣고 나면 글자 보기를 눌러.',
     lines:[
       {who:'tori', t:'저는 토리예요. 오늘은 토요일이에요.', en:"I'm Tori. Today is Saturday."},
       {who:'tori', t:'저는 일곱 시에 일어나요. 그리고 씻어요.', en:"I get up at seven. Then I wash up."},
       {who:'tori', t:'아침에 빵을 먹어요. 우유도 마셔요.', en:'In the morning I eat bread. I drink milk too.'},
       {who:'tori', t:'오늘은 비가 와요. 우산을 써요.', en:"It's raining today. I use an umbrella."},
       {who:'tori', t:'토요일에 한글학교에 가요. 선생님은 담이 할아버지예요.', en:'On Saturday I go to Korean school. The teacher is Grandpa Dami.'},
       {who:'moi', t:'토리야, 점심에 떡볶이 먹자!', en:"Tori, let's eat tteokbokki for lunch!"},
       {who:'tori', t:'좋아! 저녁에 숙제를 해요. 그리고 아홉 시에 자요.', en:"Okay! In the evening I do homework. And I go to sleep at nine."},
       {who:'tori', t:'할아버지, 안녕히 주무세요!', en:'Good night, Grandpa!'}],
     note:{who:'dami', t:'하루 이야기에 셋째 달이 다 들어 있구나. 일어나고 씻는 하루 일과, 한글학교, 빵과 우유, 비 오는 날씨, 토요일까지. 이렇게 차례대로 이으면 하루가 한 편의 이야기가 된단다.'}},
    {type:'choose', title:'이야기를 떠올려요', who:'tori',
     t:'방금 들은 이야기를 떠올려 봐. 헷갈리면 앞으로 돌아가서 다시 들어도 돼.',
     qs:[
       {t:'오늘은 무슨 요일이에요?', o:['금요일','토요일','일요일'], a:'토요일', why:'토리는 ‘오늘은 토요일이에요’라고 했어요.'},
       {t:'토리는 몇 시에 일어나요?', o:['여섯 시','일곱 시','아홉 시'], a:'일곱 시', why:'토리는 ‘일곱 시에 일어나요’라고 했어요.'},
       {t:'아침에 무엇을 먹어요?', o:['밥','빵','떡볶이'], a:'빵', why:'토리는 ‘아침에 빵을 먹어요’라고 했어요.'},
       {t:'오늘 날씨는 어때요?', o:['눈이 와요','맑아요','비가 와요'], a:'비가 와요', why:'토리는 ‘오늘은 비가 와요’라고 했어요.'},
       {t:'토리는 몇 시에 자요?', o:['여덟 시','아홉 시','열 시'], a:'아홉 시', why:'토리는 ‘아홉 시에 자요’라고 했어요.'}]},
    {type:'choose', title:'토리가 되어 말해요', who:'tori',
     t:'이번엔 네가 토리야. 누가 묻는지 잘 보고 대답해 봐.',
     qs:[
       {line:{who:'moi', t:'토리야, 토요일에 뭐 해?'}, en:'Tori, what do you do on Saturday?', o:['한글학교에 가.','한글학교에 가요.'], a:'한글학교에 가.', why:'모이는 친구라서 편한 말로 대답해요.'},
       {line:{who:'dami', t:'토리야, 오늘이 무슨 요일이냐?'}, en:'Tori, what day is it today?', o:['토요일이야.','토요일이에요.'], a:'토요일이에요.', why:'할아버지는 어른이라서 ‘이에요’라고 해요.'},
       {pic:'act_sleep', t:'밤이에요. 할아버지께 인사해요.', en:'It is night. Say good night to Grandpa.', o:['잘 자.','안녕히 주무세요.'], a:'안녕히 주무세요.', why:'자러 가시는 어른께는 ‘안녕히 주무세요’라고 해요.'}]},
    {type:'task', title:'나의 하루 이야기', who:'moi',
     t:'셋째 달 마지막 과제야. 토리처럼 네 하루를 가족에게 이야기해 봐. 다 하면 했어요를 눌러.',
     lines:[
       {when:'처음에', say:'저는 ______ 시에 일어나요.', sub:'그리고 씻어요.'},
       {when:'가운데', say:'______에 ______을 먹어요.', sub:'아침에 빵을 먹어요, 점심에 밥을 먹어요처럼.'},
       {when:'오늘 한 일', say:'______에 가요.', sub:'학교에 가요, 한글학교에 가요, 할머니 집에 가요.'},
       {when:'끝에', say:'저는 ______ 시에 자요.', sub:'그리고 가족에게 안녕히 주무세요.'}],
     parent:'셋째 달의 마무리 과제입니다. 아이가 하루를 네 문장 정도로 이어서 말하게 해 주세요. 문장이 틀려도 끝까지 들어 주시고, 다 말하면 한 문장만 바르게 고쳐서 다시 말해 주시면 충분합니다. 휴대폰으로 녹음하거나 영상을 찍어 할머니 할아버지께 보내 드리면 아이에게 큰 동기가 됩니다. 이 과제로 셋째 달이 끝납니다. 하루 일과, 학교, 음식, 날씨, 요일까지 모두 해냈으니 많이 칭찬해 주세요.'}
  ],
  dictWords:[] }
];

/* ---- 빠른 확인 ----
   둘째 달과 같은 방식입니다. 묶음마다 세 문제, 두 문제 이상 맞히면 그 묶음을 건너뜁니다. */
const M3_CHECK = [
  {k:1, qs:[
    {mode:'pic', say:'씻어요', t:'듣고 그림을 골라요.', o:['act_eat','act_wash','act_sleep'], a:'act_wash'},
    {pic:'clock3', t:'몇 시예요?', o:['셋 시예요.','세 시예요.'], a:'세 시예요.'},
    {pic:'p_grandpa', t:'밤이에요. 할아버지가 주무시러 가세요.', o:['잘 자','안녕히 주무세요'], a:'안녕히 주무세요'}]},
  {k:2, qs:[
    {mode:'pic', say:'교실', t:'듣고 그림을 골라요.', o:['s_school','s_hangeul','s_classroom'], a:'s_classroom'},
    {pic:'s_read', t:'그림에 맞는 말을 골라요.', o:['책를 읽어요.','책을 읽어요.'], a:'책을 읽어요.'},
    {pic:'s_classroom', t:'수업이 끝났어요. 선생님은 교실에 계세요.', o:['안녕히 가세요.','안녕히 계세요.'], a:'안녕히 계세요.'}]},
  {k:3, qs:[
    {mode:'pic', say:'김밥', t:'듣고 그림을 골라요.', o:['f_kimchi','f_gimbap','f_rice'], a:'f_gimbap'},
    {pic:'f_hungry', t:'그림에 맞는 말을 골라요.', o:['떡볶이를 먹고 싶어요.','떡볶이를 먹어요 싶어요.'], a:'떡볶이를 먹고 싶어요.'},
    {pic:'f_rice', t:'밥을 먹기 전이에요. 뭐라고 해요?', o:['잘 먹겠습니다','잘 먹었습니다'], a:'잘 먹겠습니다'}]},
  {k:4, qs:[
    {mode:'pic', say:'비가 와요', t:'듣고 그림을 골라요.', o:['w_snow','w_sunny','w_rain'], a:'w_rain'},
    {pic:'w_winter', t:'어느 계절이에요?', o:['봄','겨울','여름'], a:'겨울'},
    {pic:'w_umbrella', t:'그림에 맞는 말을 골라요.', o:['우산을 써요.','우산를 써요.'], a:'우산을 써요.'}]},
  {k:5, qs:[
    {mode:'pic', say:'수요일', t:'듣고 그림을 골라요.', o:['day5','day3','day7'], a:'day3'},
    {t:'월요일 다음은 무슨 요일이에요?', o:['화요일','목요일','일요일'], a:'화요일'},
    {pic:'s_hangeul', t:'그림에 맞는 말을 골라요.', o:['토요일에 한글학교에 가요.','토요일이 한글학교에 가요.'], a:'토요일에 한글학교에 가요.'}]}
];

/* ---- 받아쓰기 자판: 둘째 달에 읽어요의 ㄺ 을 더합니다 ---- */
const M3_POOL = Object.assign({}, M2_POOL, {jong: [...M2_POOL.jong, 'ㄺ']});

/* 달 등록 정보 (둘째 달과 같은 모양) */
const THIRD_MOON = {
  key: 'third-moon', title: '셋째 달', path: 'third-moon/',
  store: 'daltokki:v1:third-moon',
  units: M3_NIGHTS.map(x => ({n: x.n, words: x.dictWords || []})),
  extra: [], pool: () => M3_POOL,
  num: 3, name: '셋째 달', title2: '셋째 달, 나의 하루', nextName: '넷째 달', nextPath: 'fourth-moon/',
  topics: '하루 일과, 학교, 음식, 날씨, 나의 하루',
  nights: M3_NIGHTS, bundles: M3_BUNDLES, pic: M3_PIC, keys: M3_POOL, total: M3_TOTAL, check: M3_CHECK,
  prev: {store: 'daltokki:v1:second-moon', total: 15},
  text: {
    welcomePrev: '둘째 달을 다 채웠구나. 이번 달에는 움직이는 말을 배워. 아침에 일어나서, 학교에 가고, 밥을 먹고, 날씨를 말하고, 하루를 이야기해. 열다섯 밤이면 보름달이 떠.',
    welcomeFresh: '셋째 달에서는 하루 동안 하는 일을 말해. 둘째 달의 인사, 가족, 숫자를 알고 오면 훨씬 쉬워. 이미 한국어로 조금 말할 줄 알면 여기서 시작해도 돼.',
    parents: '셋째 달은 하루 일과, 학교(미국 학교와 주말 한글학교), 음식, 날씨, 나의 하루의 다섯 묶음으로, 묶음마다 세 밤입니다. 모두 지금 하는 일(현재형)로만 말하고, 지난 일은 넷째 달에 배웁니다.'
  }
};
