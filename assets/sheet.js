/* ══════════════════════════════════════════════════════════════
   달토끼 활동지 (선생님 방)
   밤마다 사이트 내용에서 인쇄용 활동지를 그 자리에서 만듭니다. 미리 만든 파일이 없어서,
   밤 내용을 고치면 활동지도 함께 바뀝니다. 서버가 필요 없습니다.

   활동지 한 장(한 밤)에 들어가는 것
   - 오늘의 문장(intro.big)
   - 새 낱말: 그림, 낱말, 따라 쓰는 칸, 빈칸 (pairs)
   - 그림 보고 고르기, 듣고 고르기, 이야기 문제 (choose)
   - 차례 맞추기 (sequence), 표 읽기 (tense), 소리와 글자 (sound)
   - 문장 만들기 (build)
   - 받아쓰기 칸 (dict)
   - 이야기 (dialogue 전문)
   - 가족 과제 쪽지 (task, 잘라서 집으로)
   정답은 학생용 장에 보이지 않게 마지막 선생님용 답안 장에 모읍니다.
   첫째 달은 내용 구조가 달라 아래 buildFirstSheet 로 따로 만듭니다(자모 쓰기 연습장).
   ══════════════════════════════════════════════════════════════ */

/* 첫째 달은 모양이 달라 목록용으로 감쌉니다. first: true 이면 buildFirstSheet 로 만듭니다. */
const FIRST_SHEET = {first: true, name: '첫째 달', path: 'first-moon/',
  bundles: [{k:1, title:'한글 떼기', topic:'자모와 받침, 여덟 밤'}],
  nights: MODULES.map(m => ({n: m.n, bundle: 1, title: m.title, mod: m}))};
const SHEET_MONTHS = [FIRST_SHEET, SECOND_MOON, THIRD_MOON, FOURTH_MOON, FIFTH_MOON, SIXTH_MOON, SEVENTH_MOON, OUTINGS];
const sheetOf = (M, N) => M.first ? buildFirstSheet(N.mod) : buildSheet(M, N);
const NAME_OF = w => (typeof NAME !== 'undefined' && NAME[w]) || w;
const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;'}[c]));

/* 밤 번호로 정해지는 섞기: 같은 밤은 언제 뽑아도 같은 차례가 나옵니다(답안과 맞도록). */
function seededShuffle(arr, seed){
  const a = arr.slice(); let x = seed * 9301 + 49297;
  for(let i = a.length - 1; i > 0; i--){ x = (x * 9301 + 49297) % 233280; const j = Math.floor(x / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const picOf = (M, key) => (M.pic && M.pic[key]) ? M.pic[key].replace(/width="\d+" height="\d+"/, 'width="96" height="62"') : '';
const LETTERS = ['가', '나', '다', '라', '마'];

/* ══════════════════════════════════════════════════════════════
   첫째 달(한글 떼기) 활동지: 자모 쓰기 연습장
   첫째 달은 내용 구조가 달라(MODULES, JAMO) 따로 만듭니다.
   - 새 글자: 획순 번호가 붙은 큰 글자, 흐린 글자 따라 쓰기, 빈 칸 네 개
   - 글자 만들기 표: 자음과 모음(또는 받침)을 모아 글자를 만드는 표. 첫 줄은 보기
   - 듣고 고르기, 낱말 읽고 쓰기, 소리와 글자(7, 8밤), 받아쓰기
   ══════════════════════════════════════════════════════════════ */
const CHO_L = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
const JUNG_L = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split('');
const JONG_L = ['', ...'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split('')];
const makeSyl = (c, v, j) => String.fromCharCode(0xAC00 + (CHO_L.indexOf(c) * 21 + JUNG_L.indexOf(v)) * 28 + (j ? JONG_L.indexOf(j) : 0));
/* 획순 그림: 획마다 시작점에 번호를 붙입니다. faint 이면 따라 쓰기용 흐린 글자 */
function jamoSvg(j, faint){
  const meta = (typeof JAMO !== 'undefined' && JAMO[j]) || null;
  const guide = '<path d="M50 4 L50 96 M4 50 L96 50" stroke="#E7DCC4" stroke-width="1.5" stroke-dasharray="4 4"/>';
  if(!meta || !meta.s) return `<svg viewBox="0 0 100 100" width="62" height="62">${guide}<text x="50" y="54" text-anchor="middle" dominant-baseline="central" font-size="64" font-family="'Noto Sans KR',sans-serif" fill="${faint ? '#D5CFC2' : '#221F1C'}">${j}</text></svg>`;
  const paths = meta.s.map(d => `<path d="${d}" stroke="${faint ? '#D5CFC2' : '#221F1C'}" stroke-width="${faint ? 7 : 8}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`).join('');
  const nums = faint ? '' : meta.s.map((d, i) => { const m = d.match(/M\s*([\d.]+)\s+([\d.]+)/);
    return m ? `<circle cx="${m[1]}" cy="${m[2]}" r="8" fill="#C1403A"/><text x="${m[1]}" y="${Number(m[2]) + .5}" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="700" fill="#fff">${i + 1}</text>` : ''; }).join('');
  return `<svg viewBox="0 0 100 100" width="62" height="62">${guide}${paths}${nums}</svg>`;
}
const emptyBox = () => '<svg viewBox="0 0 100 100" width="62" height="62"><path d="M50 4 L50 96 M4 50 L96 50" stroke="#E7DCC4" stroke-width="1.5" stroke-dasharray="4 4"/></svg>';

function buildFirstSheet(mod){
  const key = [], parts = [];
  const night = ORD[mod.n - 1] + ' 밤';
  parts.push(`<div class="shead"><div><span class="sbrand">달토끼 활동지</span><span class="smeta">첫째 달 · 한글 · ${night}</span></div>
    <p class="stitle">${esc(mod.title)}</p><div class="sname">이름 <span class="snameline"></span> 날짜 <span class="snameline short"></span></div></div>`);
  parts.push(`<p class="sbig">${esc(mod.why)}</p>`);

  /* 새 글자 */
  const js = [...mod.add.jung, ...mod.add.cho, ...mod.add.jong];
  const seen = new Set(); const list = js.filter(j => !seen.has(j) && seen.add(j));
  if(list.length){
    const label = mod.add.jong.length ? '새 받침' : '새 글자';
    parts.push(`<section class="ssec"><h3>${label} <small>빨간 번호 차례로 획을 그어요. 흐린 글자를 따라 쓰고, 빈 칸에 두 번 더 써요.</small></h3><div class="sjamo">${
      list.map(j => `<div class="sjrow2">${jamoSvg(j, false)}${jamoSvg(j, true)}${emptyBox()}${emptyBox()}<span class="shint">${(JAMO[j] && JAMO[j].h) ? '소리: ' + esc(JAMO[j].h) : ''}</span></div>`).join('')}</div></section>`);
  }

  /* 글자 만들기 표 */
  const BASE_C = ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ', 'ㅇ'], BASE_V = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'];
  let rows, cols, cell, rowHead, colHead;
  if(mod.add.jong.length){
    rows = ['가', '나', '마', '바', '사'].slice(0, 4); cols = mod.add.jong.slice(0, 6);
    cell = (r, c) => { const code = r.charCodeAt(0) - 0xAC00; return String.fromCharCode(r.charCodeAt(0) + JONG_L.indexOf(c)); };
    rowHead = '글자'; colHead = '받침';
  } else if(mod.add.cho.length){
    rows = mod.add.cho.slice(0, 6); cols = BASE_V.slice(0, mod.n === 1 ? 6 : 4);
    cell = (r, c) => makeSyl(r, c); rowHead = '자음'; colHead = '모음';
  } else {
    rows = BASE_C.slice(0, 4); cols = mod.add.jung.slice(0, 6);
    cell = (r, c) => makeSyl(r, c); rowHead = '자음'; colHead = '모음';
  }
  const tbl = rows.map((r, ri) => `<tr><th>${esc(r)}</th>${cols.map(c => `<td class="scell">${ri === 0 ? esc(cell(r, c)) : ''}</td>`).join('')}</tr>`).join('');
  parts.push(`<section class="ssec"><h3>글자 만들기 <small>${rowHead}와 ${colHead}을 모아 글자를 써요. 첫 줄은 보기예요.</small></h3>
    <table class="stable sgrid"><tr><th></th>${cols.map(c => `<th>${esc(c)}</th>`).join('')}</tr>${tbl}</table></section>`);
  key.push('글자 만들기: ' + rows.slice(1).map(r => cols.map(c => cell(r, c)).join(' ')).join(' / '));

  /* 소리와 글자 */
  if(mod.cmp) parts.push(`<section class="ssec"><h3>소리와 글자 <small>소리는 같아도 글자는 달라요.</small></h3><table class="stable"><tr><th>글자</th><th>소리</th><th>까닭</th></tr>${
    mod.cmp.map(c => `<tr><td><b>${esc(c.s)}</b></td><td>[${esc(c.d)}]</td><td class="small">${esc(c.n)}</td></tr>`).join('')}</table></section>`);

  /* 듣고 고르기 */
  parts.push(`<section class="ssec"><h3>듣고 골라요 <small>선생님이 읽어 주는 글자에 동그라미 하세요.</small></h3><div class="sjosa">${
    mod.listen.map((q, i) => { const o = seededShuffle(q.o, mod.n * 17 + i); key.push(`듣고 고르기 ${i + 1}. ${LETTERS[o.indexOf(q.a)]} ${esc(q.a)} (읽어 줄 말: ${esc(q.a)}${q.hint ? ', 힌트: ' + esc(q.hint) : ''})`);
      return `<span class="sjrow"><span class="snum">${i + 1}.</span>${o.map((x, k) => `<span class="sopt"><span class="sletter">${LETTERS[k]}</span><b>${esc(x)}</b></span>`).join(' ')}${q.hint ? `<span class="small"> (${esc(q.hint)})</span>` : ''}</span>`; }).join('')}</div></section>`);

  /* 낱말 읽고 쓰기 */
  parts.push(`<section class="ssec"><h3>낱말 읽고 쓰기 <small>소리 내어 읽고, 흐린 글자를 따라 쓴 뒤 한 번 더 써요.</small></h3><div class="swords">${
    mod.words.map(w => `<div class="sword">${(w.p && typeof PIC !== 'undefined' && PIC[w.p]) ? PIC[w.p].replace(/width="\d+" height="\d+"/, 'width="96" height="62"') : `<svg viewBox="0 0 96 62" width="96" height="62"><rect x="4" y="4" width="88" height="54" rx="8" fill="#F5E6BD" stroke="#C9C0AE"/><text x="48" y="33" text-anchor="middle" dominant-baseline="central" font-size="13" fill="#8C7F63">${esc(w.en)}</text></svg>`}
      <div class="swtext"><b>${esc(w.w)}</b><span class="sen">${esc(w.en)}</span></div><div class="strace">${esc(w.w)}</div></div>`).join('')}</div></section>`);

  /* 받아쓰기 */
  parts.push(`<section class="ssec"><h3>받아쓰기 <small>선생님이 불러 주는 말을 써요.</small></h3><div class="sdict">${
    mod.dict.map((w, i) => `<div><span class="snum">${i + 1}.</span><span class="swrite short"></span></div>`).join('')}</div></section>`);
  key.push('받아쓰기 (불러 줄 말): ' + mod.dict.map((w, i) => `${i + 1}. ${esc(w)}`).join('  '));

  if(mod.note) parts.push(`<section class="ssec"><h3>${esc(NAME_OF(mod.note.w))}의 한마디</h3><p>${esc(mod.note.t)}</p></section>`);

  parts.push(`<section class="stask"><p class="scut">여기를 잘라서 집으로 가져가요</p><h3>가족 과제: 오늘 배운 글자 찾기</h3>
    <ul><li><span class="swhen">집 안에서</span> 오늘 배운 글자가 들어간 물건이나 글자를 세 개 찾아 읽어요.</li>
    <li><span class="swhen">가족에게</span> 오늘 배운 낱말 하나를 읽어 주고, 가족이 불러 주는 낱말 하나를 써 봐요.</li></ul>
    <p class="sparent"><b>부모님께.</b> 첫째 달은 소리와 글자를 잇는 단계입니다. 틀린 글자를 고치기보다, 획순 번호를 따라 천천히 쓰는지 봐 주세요. 달토끼 첫째 달 ${esc(night)}(${esc(mod.title)})을 함께 해 보시면 소리로 다시 익힐 수 있습니다.</p></section>`);

  return {html: `<article class="sheet">${parts.join('')}</article>`, key: {title: `첫째 달 ${night} ${mod.title}`, lines: key}};
}

/* 한 밤의 학생용 활동지와 답안을 만듭니다. */
function buildSheet(M, N){
  const S = N.steps, key = [], parts = [];
  const night = ORD[N.n - 1] + ' 밤';
  let qn = 0;
  const intro = S.find(x => x.type === 'intro');
  const bundle = M.bundles.find(b => b.k === N.bundle);

  parts.push(`<div class="shead"><div><span class="sbrand">달토끼 활동지</span><span class="smeta">${esc(M.name)} · ${esc(bundle ? bundle.title : '')} · ${night}</span></div>
    <p class="stitle">${esc(N.title)}</p><div class="sname">이름 <span class="snameline"></span> 날짜 <span class="snameline short"></span></div></div>`);
  if(intro && intro.big) parts.push(`<p class="sbig">오늘의 문장: <b>${esc(intro.big)}</b></p>`);

  /* 새 낱말 */
  const words = [];
  S.filter(x => x.type === 'pairs').forEach(P => {
    (P.singles || []).forEach(w => words.push({w: w.w, pic: w.pic, en: w.en}));
    (P.pairs || []).forEach(p => { words.push({w: p.friend, pic: p.pic, en: p.en, tag: '친구에게'}); words.push({w: p.elder, pic: p.pic, en: p.en, tag: '어른께'}); });
  });
  if(words.length){
    const list = words.slice(0, 8);
    parts.push(`<section class="ssec"><h3>새 낱말 <small>그림을 보고 읽은 뒤, 흐린 글자를 따라 쓰고 옆 칸에 한 번 더 써요.</small></h3><div class="swords">${
      list.map(w => `<div class="sword">${picOf(M, w.pic)}<div class="swtext"><b>${esc(w.w)}</b>${w.tag ? `<span class="stag">${w.tag}</span>` : ''}<span class="sen">${esc(w.en || '')}</span></div>
        <div class="strace">${esc(w.w)}</div><div class="sblank"></div></div>`).join('')}</div></section>`);
  }

  /* 고르기 문제 */
  const chooseBlocks = [];
  S.filter(x => x.type === 'choose').forEach(C => {
    const qs = C.qs.slice(0, 5);
    const items = qs.map(q => {
      qn++;
      const opts = seededShuffle(q.o, N.n * 31 + qn);
      const ai = opts.indexOf(q.a);
      let stem = '';
      if(C.mode === 'pic'){
        stem = `<p class="sq">${qn}. 선생님이 읽어 주는 말을 듣고 알맞은 그림에 동그라미 하세요.</p>`;
        key.push(`${qn}. ${LETTERS[ai]} (선생님이 읽을 말: ${esc(q.say)})`);
        return stem + `<div class="spicopts">${opts.map((o, i) => `<div class="spicopt"><span class="sletter">${LETTERS[i]}</span>${picOf(M, o)}</div>`).join('')}</div>`;
      }
      const line = q.line ? `<span class="sline2">${esc(NAME_OF(q.line.who))}: “${esc(q.line.t)}”</span> ` : '';
      stem = `<p class="sq">${qn}. ${line}${esc(q.t || '그림에 맞는 것에 동그라미 하세요.')}</p>`;
      key.push(`${qn}. ${LETTERS[ai]} ${esc(q.a)}`);
      return `<div class="sqrow">${q.pic ? `<div class="sqpic">${picOf(M, q.pic)}</div>` : ''}<div>${stem}<div class="sopts">${opts.map((o, i) => `<span class="sopt"><span class="sletter">${LETTERS[i]}</span>${esc(o)}</span>`).join('')}</div></div></div>`;
    });
    chooseBlocks.push(`<div class="sblock"><h4>${esc(C.title || '')}</h4>${items.join('')}</div>`);
  });
  if(chooseBlocks.length) parts.push(`<section class="ssec"><h3>골라요 <small>알맞은 답에 동그라미 하세요.</small></h3>${chooseBlocks.join('')}</section>`);

  /* 차례 맞추기 */
  S.filter(x => x.type === 'sequence').forEach(Q => Q.qs.forEach((q, qi) => {
    const shuffled = seededShuffle(q.cards.map((c, i) => ({c, i})), N.n * 7 + qi);
    parts.push(`<section class="ssec"><h3>차례 맞추기 <small>일이 일어난 차례대로 네모 칸에 번호를 쓰세요.</small></h3><div class="sseq">${
      shuffled.map(({c}) => `<div class="sseqcard"><span class="sbox"></span>${picOf(M, c.pic)}<p>${esc(c.t)}</p></div>`).join('')}</div></section>`);
    key.push('차례: ' + shuffled.map(({i}) => i + 1).join(', ') + ' (왼쪽 카드부터)');
  }));

  /* 받침 규칙: 보기 표와 연습 */
  S.filter(x => x.type === 'rule').forEach(R => {
    const [noF, yesF] = JOSA_PAIR[R.j || '이에요'];
    parts.push(`<section class="ssec"><h3>${esc(R.title)} <small>끝 글자에 받침이 있는지 보고 붙여요.</small></h3><table class="stable"><tr><th>받침이 있으면 ${esc(yesF)}</th><th>받침이 없으면 ${esc(noF)}</th></tr>${
      R.yes.map((y, i) => `<tr><td>${esc(josa(y, R.j || '이에요'))}</td><td>${R.no[i] ? esc(josa(R.no[i], R.j || '이에요')) : ''}</td></tr>`).join('')}</table></section>`);
  });
  S.filter(x => x.type === 'josa').forEach(J => {
    const [noF, yesF] = JOSA_PAIR[J.j || '이에요'];
    const names = J.names.slice(0, 8);
    parts.push(`<section class="ssec"><h3>${esc(J.title || '어느 것을 붙일까요?')} <small>알맞은 것에 동그라미 하세요.</small></h3><div class="sjosa">${
      names.map((nm, i) => `<span class="sjrow"><span class="snum">${i + 1}.</span><b>${esc(nm)}</b> ( ${esc(noF)} / ${esc(yesF)} )</span>`).join('')}</div></section>`);
    key.push(esc(J.title || '붙이기') + ': ' + names.map((nm, i) => `${i + 1}. ${esc(josa(nm, J.j || '이에요'))}`).join('  '));
  });

  /* 표: 지금과 지난 일, 받침 규칙 등 */
  S.filter(x => x.type === 'tense').forEach(T => {
    const [c1, c2] = T.cols || ['지금', '지난 일'];
    parts.push(`<section class="ssec"><h3>${esc(T.title)} <small>왼쪽을 보고 오른쪽 칸을 채워 써요. 첫 줄은 보기예요.</small></h3>${
      T.groups.map(G => `<p class="srule">${esc(G.rule)}</p><table class="stable"><tr><th>${esc(c1)}</th><th>${esc(c2)}</th></tr>${
        G.rows.map(([a, b], i) => `<tr><td>${esc(a)}</td><td>${i === 0 ? esc(b) : ''}</td></tr>`).join('')}</table>`).join('')}</section>`);
    key.push(esc(T.title) + ': ' + T.groups.map(G => G.rows.slice(1).map(([a, b]) => `${esc(a)} → ${esc(b)}`).join(', ')).join(' / '));
  });

  /* 문장 만들기 */
  const builds = S.filter(x => x.type === 'build');
  if(builds.length){
    const qs = builds.flatMap(B => B.qs).slice(0, 4);
    parts.push(`<section class="ssec"><h3>문장 만들기 <small>낱말 카드를 바른 차례로 이어서 아래 줄에 써요.</small></h3>${
      qs.map((q, i) => { const t = seededShuffle(q.tiles, N.n * 13 + i);
        key.push(`문장 ${i + 1}. ${esc(q.s)}`);
        return `<div class="sbuild"><span class="snum">${i + 1}.</span>${t.map(x => `<span class="sheettile">${esc(x)}</span>`).join('')}${q.en ? `<span class="sen">(${esc(q.en)})</span>` : ''}<div class="swrite"></div></div>`; }).join('')}</section>`);
  }

  /* 소리와 글자 */
  S.filter(x => x.type === 'sound').forEach(D => {
    parts.push(`<section class="ssec"><h3>소리와 글자 <small>소리 내어 읽고, 글자는 어떻게 쓰는지 봐요.</small></h3><table class="stable"><tr><th>글자</th><th>소리</th><th>까닭</th></tr>${
      D.cmp.map(c => `<tr><td><b>${esc(c.s)}</b></td><td>[${esc(c.d)}]</td><td class="small">${esc(c.n)}</td></tr>`).join('')}</table></section>`);
  });

  /* 받아쓰기 */
  S.filter(x => x.type === 'dict').forEach(D => {
    parts.push(`<section class="ssec"><h3>받아쓰기 <small>선생님이 불러 주는 말을 써요.</small></h3><div class="sdict">${
      D.items.map((it, i) => `<div><span class="snum">${i + 1}.</span><span class="swrite short"></span></div>`).join('')}</div></section>`);
    key.push('받아쓰기 (불러 줄 말): ' + D.items.map((it, i) => `${i + 1}. ${esc(it.w)}`).join('  '));
  });

  /* 이야기 전문 */
  S.filter(x => x.type === 'dialogue').forEach(D => {
    parts.push(`<section class="ssec"><h3>이야기 <small>함께 소리 내어 읽어요. 역할을 나누어 읽어도 좋아요.</small></h3><div class="sstory">${
      D.lines.map(L => `<p><b>${esc(NAME_OF(L.who))}</b> ${esc(L.t)}</p>`).join('')}</div></section>`);
  });

  /* 가족 과제 쪽지 */
  S.filter(x => x.type === 'task').forEach(T => {
    parts.push(`<section class="stask"><p class="scut">여기를 잘라서 집으로 가져가요</p><h3>가족 과제: ${esc(T.title)}</h3><ul>${
      T.lines.map(l => `<li><span class="swhen">${esc(l.when)}</span> “${esc(l.say)}” <span class="small">${esc(l.sub || '')}</span></li>`).join('')}</ul>
      ${T.parent ? `<p class="sparent"><b>부모님께.</b> ${esc(T.parent)}</p>` : ''}</section>`);
  });

  return {html: `<article class="sheet">${parts.join('')}</article>`, key: {title: `${M.name} ${night} ${N.title}`, lines: key}};
}

/* 답안 장 */
const keyPage = keys => `<article class="sheet skey"><div class="shead"><div><span class="sbrand">달토끼 활동지</span><span class="smeta">선생님용 답안</span></div><p class="stitle">답안</p></div>${
  keys.map(k => `<section class="ssec"><h3>${esc(k.title)}</h3>${k.lines.length ? `<ul>${k.lines.map(l => `<li>${l}</li>`).join('')}</ul>` : '<p class="small">답이 필요한 문제가 없어요.</p>'}</section>`).join('')}</article>`;

/* 인쇄: 인쇄 칸에 활동지를 넣고 인쇄 창을 엽니다. 인쇄 창에서 PDF로 저장을 고르면 파일로 받을 수 있습니다. */
function printSheets(M, nights){
  const out = document.getElementById('printArea');
  const built = nights.map(N => sheetOf(M, N));
  out.innerHTML = built.map(b => b.html).join('') + keyPage(built.map(b => b.key));
  document.documentElement.classList.add('printing-sheets');
  const done = () => { document.documentElement.classList.remove('printing-sheets'); window.removeEventListener('afterprint', done); };
  window.addEventListener('afterprint', done);
  setTimeout(() => { try { window.print(); } catch(e) {} setTimeout(done, 1500); }, 150);
}
function previewSheet(M, N){
  const pv = document.getElementById('preview');
  const b = sheetOf(M, N);
  pv.innerHTML = `<div class="pvhead"><b>미리 보기: ${esc(M.name)} ${ORD[N.n - 1]} 밤</b>
    <button class="btn play" id="pvPrint">이 밤 인쇄하기</button></div>` + b.html + keyPage([b.key]);
  document.getElementById('pvPrint').onclick = () => printSheets(M, [N]);
  pv.scrollIntoView({behavior:'smooth', block:'start'});
}

/* 선생님 방 목록 */
function drawRoom(mi){
  const M = SHEET_MONTHS[mi];
  const list = document.getElementById('roomList');
  document.querySelectorAll('#monthTabs button').forEach((b, i) => b.classList.toggle('on', i === mi));
  const base = location.origin && location.origin.startsWith('http') ? location.origin + location.pathname.replace(/teacher\/(index\.html)?$/, '') : '../';
  list.innerHTML = '';
  M.bundles.forEach(B => {
    const ns = M.nights.filter(N => N.bundle === B.k);
    if(!ns.length) return;
    const sec = h('section', {class:'tbundle'},
      h('div', {class:'tbhead'}, h('h3', {}, ORD[B.k - 1] + ' 묶음, ' + B.title), h('span', {class:'small'}, B.topic),
        h('button', {class:'btn quiet', onclick: () => printSheets(M, ns)}, '묶음 활동지 인쇄 (' + ns.length + '밤)')));
    ns.forEach(N => sec.append(h('div', {class:'tnight'},
      h('span', {class:'tnum'}, ORD[N.n - 1] + ' 밤'), h('b', {}, N.title),
      h('code', {}, base + M.path + '?night=' + N.n),
      h('button', {class:'chip', onclick: () => previewSheet(M, N)}, '미리 보기'),
      h('button', {class:'chip', onclick: () => printSheets(M, [N])}, '인쇄'))));
    list.append(sec);
  });
}
function initRoom(){
  const tabs = document.getElementById('monthTabs');
  SHEET_MONTHS.forEach((M, i) => tabs.append(h('button', {class:'chip', onclick: () => drawRoom(i)}, M.name)));
  const q = new URLSearchParams(location.search), m = Number(q.get('m')), n = Number(q.get('n'));
  const mi = m >= 1 && m <= 8 ? m - 1 : 0;
  drawRoom(mi);
  if(n){ const N = SHEET_MONTHS[mi].nights.find(x => x.n === n); if(N) previewSheet(SHEET_MONTHS[mi], N); }
}
