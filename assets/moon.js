/* ══════════════════════════════════════════════════════════════
   달 페이지 엔진 (둘째 달부터 함께 씁니다)
   페이지가 const MOON = SECOND_MOON 처럼 달 하나를 고른 뒤 이 파일을 불러옵니다.
   MOON 에는 nights, bundles, pic, pool, total, check, store 와 화면에 쓰는 말(name, title, topics, text)이 있습니다.
   밤마다 steps 를 차례대로 보여 줍니다.
   화면 종류: intro 들어가기, pairs 낱말 카드, choose 고르기(글 또는 그림), rule 규칙,
   josa 받침 규칙 고르기, myname 내 이름, sibling 형제 부르기, shrink 줄어드는 숫자, clock 시계,
   build 문장 만들기, sound 소리와 글자, dialogue 대화 듣기, dict 받아쓰기, task 가족 과제.
   마지막에 결과 화면이 붙습니다.
   ══════════════════════════════════════════════════════════════ */

/* ---- 진도 저장: {stars, start, updated}. 첫째 달과 같은 모양입니다. ---- */
const STORE_KEY = MOON.store;
const OPEN = MOON.nights.map(x => x.n);
function loadStars(){
  const out = {};
  if(!canStore) return out;
  try {
    const d = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    if(d && d.stars && typeof d.stars === 'object'){
      for(const k in d.stars){
        const n = Number(k), v = Number(d.stars[k]);
        if(n >= 1 && n <= MOON.total && v >= 1 && v <= 3) out[n] = Math.round(v);
      }
    }
  } catch(e) {}
  return out;
}
const stars = loadStars();
/* 빠른 확인에서 정한 시작 밤. 그 앞의 밤은 건너뛴 것으로 봅니다. MOON.total + 1 이면 그 달을 다 안다는 뜻입니다. */
function loadStart(){
  if(!canStore) return 1;
  try {
    const v = Number((JSON.parse(localStorage.getItem(STORE_KEY) || 'null') || {}).start);
    return Number.isInteger(v) && v >= 1 && v <= MOON.total + 1 ? v : 1;
  } catch(e) { return 1; }
}
let startAt = loadStart();
function saveStars(){
  if(!canStore) return;
  try { localStorage.setItem(STORE_KEY, JSON.stringify({stars, start: startAt, updated: Date.now()})); } catch(e) {}
}
const passedNight = n => !stars[n] && n < startAt;
/* 앞 달을 다 채웠는지(별이 있거나 빠른 확인으로 건너뛴 밤이면 채운 것으로 봅니다) */
function prevMoonDone(){
  if(!canStore || !MOON.prev) return false;
  try {
    const d = JSON.parse(localStorage.getItem(MOON.prev.store) || 'null');
    if(!d) return false;
    const st = d.stars || {}, start = Number(d.start) || 1;
    for(let n = 1; n <= MOON.prev.total; n++) if(!st[n] && n >= start) return false;
    return true;
  } catch(e) { return false; }
}

/* ---- 상태 ---- */
let night = null, steps = [], step = 0, score = 0, maxScore = 0;
let seq = 0;               /* 화면이 바뀌면 늘어납니다. 이어 듣기와 지연 실행을 멈추는 데 씁니다. */
const later = (fn, ms) => { const my = seq; setTimeout(() => { if(my === seq) fn(); }, ms); };

document.getElementById('homeBtn').addEventListener('click', showPicker);
nextBtn.addEventListener('click', () => {
  if(step < steps.length - 1){ step++; render(); }
  else showPicker();
});
const hideNext = () => { nextBtn.style.visibility = 'hidden'; };
const showNext = () => { nextBtn.style.visibility = 'visible'; };
const nightTitle = n => { const x = MOON.nights.find(m => m.n === n); return x ? x.title : ''; };

/* ══════════════════════════════════════════════════════════════
   밤 고르기
   ══════════════════════════════════════════════════════════════ */
const bundleOpen = B => B.nights.every(n => OPEN.includes(n));
const nextClosed = () => MOON.bundles.find(B => !bundleOpen(B));
const openBundles = () => MOON.bundles.filter(bundleOpen);
/* 열린 밤을 다 마쳤을 때 토리가 하는 말 */
/* 다음 달이 이미 열려 있으면(MOON.nextPath) 그리로 안내합니다. */
const goNextMoon = () => { location.href = '../' + MOON.nextPath; };
const nextMoonBtn = cls => MOON.nextPath ? h('button', {class: cls || 'btn', onclick: goNextMoon}, MOON.nextName + '로 가기') : '';
function waitLine(){
  const last = openBundles().pop(), nb = nextClosed();
  return (last ? last.title + ' 묶음까지 다 마쳤어. ' : '') +
    (nb ? '다음 묶음 ' + josa(nb.title, '은') + ' 곧 열려. 그동안 받아쓰기실에서 방아를 찧어 보자.' : (MOON.nextPath ? MOON.name + ' 보름달이 떴어! 이제 ' + MOON.nextName + '로 가자.' : MOON.name + ' 보름달이 떴어! ' + josa(MOON.nextName, '이') + ' 열릴 때까지 받아쓰기실에서 방아를 찧어 보자.'));
}
function showPicker(){
  seq++; night = null; curGuide = null;
  hdrTitle.textContent = MOON.title2;
  document.getElementById('stepLabel').textContent = '';
  document.getElementById('trackFill').style.width = '0%';
  hideNext(); setNav(false); setFeedback('');
  card.innerHTML = '';
  const done = Object.keys(stars).length;
  const nextUp = OPEN.find(n => !stars[n] && n >= startAt);
  const started = done > 0 || startAt > 1;
  card.append(h('h2', {}, MOON.title2),
    guide('tori', done === 0 && startAt > MOON.total
      ? '빠른 확인에서 ' + MOON.name + ' 말을 다 알고 있었어. 대단해! 다시 보고 싶은 밤이 있으면 골라 봐.'
      : done === 0 && startAt > 1 && nextUp
      ? '빠른 확인에서 ' + nightName(nextUp) + '부터 하기로 했어. 앞의 밤도 언제든 골라서 해 볼 수 있어.'
      : done === 0
      ? (prevMoonDone() ? MOON.text.welcomePrev : MOON.text.welcomeFresh)
      : nextUp ? '어서 와. ' + nightName(nextUp) + ' 차례야. ' + COUNT[MOON.total - 1] + ' 밤 가운데 ' + COUNT[done - 1] + ' 밤을 마쳤어.'
               : waitLine()));
  if(!nextUp && started && !nextClosed() && MOON.nextPath) card.append(h('div', {style:'margin:-6px 0 20px'}, nextMoonBtn()));
  if(MOON.check.length) card.append(h('div', {class:'checkcta'},
    h('button', {class:'btn quiet play', onclick: startCheck}, started ? '빠른 확인 다시 하기' : '한국어를 조금 할 줄 알아요'),
    h('span', {}, '몇 문제만 풀면 시작할 밤을 찾아 줘요.')));
  card.append(h('button', {class:'roomcard', onclick: () => { location.href = '../dictation/'; }},
    h('div', {html: CHAR.tori('')}),
    h('div', {}, h('b', {}, '받아쓰기실'), h('span', {}, MOON.name + '에서 마친 밤의 말도 여기서 연습해요.'))));

  MOON.bundles.forEach(B => {
    const open = bundleOpen(B);
    const sec = h('section', {class:'bundle' + (open ? '' : ' locked'), 'aria-label': ORD[B.k - 1] + ' 묶음, ' + B.title});
    sec.append(h('div', {class:'bhead'},
      h('span', {class:'bnum'}, ORD[B.k - 1] + ' 묶음'),
      h('b', {}, B.title), h('span', {class:'btopic'}, B.topic),
      open ? '' : h('span', {class:'soon'}, '곧 열려요')));
    const row = h('div', {class:'bnights'});
    B.nights.forEach((n, i) => {
      const got = stars[n] || 0;
      const kind = ['새 말', '문장', '이야기와 가족 과제'][i];
      if(!open){
        row.append(h('div', {class:'modcard locked', 'aria-hidden':'true'},
          h('div', {html: moonSVG(n, 48, false, MOON.total)}),
          h('div', {}, h('span', {class:'night'}, nightName(n)), h('span', {}, kind))));
        return;
      }
      const isNext = n === nextUp && started;
      const passed = passedNight(n);
      const label = h('span', {class:'night'}, nightName(n));
      if(isNext) label.append(h('span', {class:'here'}, '여기부터'));
      row.append(h('button', {class:'modcard' + (isNext ? ' next' : ''),
          'aria-label': nightName(n) + ', ' + nightTitle(n) + (got ? ', 별 ' + got + '개' : ', 아직 안 했어요'),
          onclick: () => startNight(n)},
        h('div', {html: moonSVG(n, 56, !!got, MOON.total)}),
        h('div', {style:'flex:1'}, label, h('b', {}, nightTitle(n)),
          h('span', {}, got ? '★'.repeat(got) + '☆'.repeat(3 - got) : passed ? '빠른 확인으로 건너뛰었어요' : kind))));
    });
    sec.append(row);
    card.append(sec);
  });

  const resetBtn = h('button', {}, MOON.name + ' 기록 지우기');
  let armed = false;
  resetBtn.addEventListener('click', () => {
    if(!armed){ armed = true; resetBtn.textContent = MOON.name + ' 별이 모두 지워져요. 한 번 더 누르면 지웁니다'; return; }
    for(const k in stars) delete stars[k];
    startAt = 1;
    if(canStore){ try { localStorage.removeItem(STORE_KEY); } catch(e) {} }
    showPicker();
  });
  card.append(h('div', {class:'parents'},
    h('b', {}, '부모님께. '),
    MOON.text.parents + ' 첫 밤에 새 말을 만나고, 둘째 밤에 그 말로 문장을 만들고, 셋째 밤에 이야기를 듣고 집에서 해 볼 과제를 합니다. ' + (nextClosed() ? '지금은 ' + ORD[openBundles().length - 1] + ' 묶음까지 열려 있고 나머지는 차례로 열립니다. ' : ''),
    canStore ? (done ? '지금까지 ' + COUNT[done - 1] + ' 밤을 마쳤습니다.' : '아직 시작하기 전입니다.') + ' 진도는 이 기기의 브라우저에만 저장됩니다.'
             : '이 브라우저에서는 진도가 저장되지 않습니다.',
    started && canStore ? h('div', {}, resetBtn) : ''));
}

/* ══════════════════════════════════════════════════════════════
   빠른 확인
   묶음마다 세 문제. 두 문제 이상 맞히면 다음 묶음으로, 아니면 그 묶음의 첫 밤에서 멈춥니다.
   모르겠어요는 틀린 것으로 셉니다. 한 묶음에서 두 문제를 틀리면 남은 문제는 묻지 않습니다.
   ══════════════════════════════════════════════════════════════ */
function startCheck(){
  seq++; night = null; curGuide = null;
  hdrTitle.textContent = MOON.name + ' 빠른 확인';
  document.getElementById('stepLabel').textContent = '';
  hideNext(); setNav(true); setFeedback('');
  const total = MOON.check.reduce((a, g) => a + g.qs.length, 0);
  const bar = p => { document.getElementById('trackFill').style.width = Math.round(p / total * 100) + '%'; };
  let gi = 0, qi = 0, miss = 0, asked = 0, stopAt = null;
  intro();

  function intro(){
    card.innerHTML = ''; bar(0);
    card.append(h('h2', {}, MOON.name + ' 빠른 확인'),
      guide('tori', '한국어를 조금 할 줄 알아? 몇 문제만 풀어 보면 어느 밤부터 하면 좋을지 알려 줄게. 모르면 모르겠어요를 눌러도 돼. 틀려도 괜찮아.'),
      h('p', {class:'sub'}, '5분쯤 걸려요. ' + MOON.topics + ' 차례로 세 문제씩 나와요.'),
      h('button', {class:'btn', onclick: ask}, '시작하기'));
    window.scrollTo(0, 0);
  }

  function ask(){
    const G = MOON.check[gi], q = G.qs[qi], B = MOON.bundles.find(b => b.k === G.k);
    seq++; card.innerHTML = ''; curGuide = null; bar(asked); setFeedback('');
    let locked = false;
    card.append(h('h2', {}, ORD[G.k - 1] + ' 묶음, ' + B.title),
      guide('tori', asked === 0 ? '잘 보고 맞는 걸 골라 봐.' : qi === 0 ? '좋아, 다음 묶음이야.' : '다음 문제야.'));
    const box = h('div', {});
    box.append(h('p', {class:'qcount'}, (qi + 1) + ' / ' + G.qs.length));
    if(q.pic || q.t){
      const sit = h('div', {class:'situation'});
      if(q.pic) sit.append(h('div', {class:'pic', html: MOON.pic[q.pic]}));
      if(q.t) sit.append(h('div', {}, h('p', {class:'qtext'}, q.t)));
      box.append(sit);
    }
    if(q.say){
      box.append(h('button', {class:'btn play', style:'margin-bottom:16px', onclick: () => talk(q.say)}, '다시 듣기'));
      later(() => talk(q.say), 300);
    }
    const pic = q.mode === 'pic';
    const opts = h('div', {class: pic ? 'popts' : 'topts'});
    shuffled(q.o).forEach(o => {
      const b = pic
        ? h('button', {class:'popt', 'data-v': o, html: MOON.pic[o], 'aria-label': (MOON.pic[o].match(/aria-label="([^"]*)"/) || [])[1] || o})
        : h('button', {class:'topt', 'data-v': o}, o);
      b.addEventListener('click', () => pick(o === q.a));
      opts.append(b);
    });
    box.append(opts, h('div', {style:'margin-top:16px'},
      h('button', {class:'btn quiet play', onclick: () => pick(false)}, '모르겠어요')));
    card.append(box);
    window.scrollTo(0, 0);

    /* 맞았는지는 알려 주지 않고 바로 다음으로 갑니다. 확인이 시험처럼 느껴지지 않게 하려는 것입니다. */
    function pick(ok){
      if(locked) return; locked = true;
      asked++;
      if(!ok){ miss++; if(!stopAt) stopAt = q.a; }
      if(miss >= 2) return result(B.nights[0]);
      qi++;
      if(qi >= G.qs.length){ gi++; qi = 0; miss = 0; stopAt = null; }
      if(gi >= MOON.check.length) return result(MOON.total + 1);
      ask();
    }
  }

  function result(s){
    startAt = s;
    saveStars();
    seq++; card.innerHTML = ''; curGuide = null; bar(total); setFeedback('');
    const all = s > MOON.total;
    const B = all ? null : MOON.bundles.find(b => b.nights.includes(s));
    const skipped = all ? MOON.bundles.length : B.k - 1;
    const msg = s === 1
      ? '첫째 밤부터 같이 하자. 차근차근 하면 금방 늘 거야.'
      : all
      ? MOON.name + ' 말은 벌써 다 알고 있구나! ' + (MOON.nextPath ? MOON.nextName + '로 가 보자.' : josa(MOON.nextName, '이') + ' 열리면 거기서 만나. 그동안 받아쓰기실에서 글자로 쓰는 연습을 해 보자.')
      : '벌써 ' + COUNT[skipped - 1] + ' 묶음을 알고 있어. ' + josa(B.title, '은') + ' 알아 가는 중이니 ' + nightName(s) + '부터 하면 좋겠어.';
    const btns = h('div', {style:'display:flex;gap:12px;justify-content:center;flex-wrap:wrap'});
    if(!all) btns.append(h('button', {class:'btn', onclick: () => startNight(s)}, nightName(s) + ' 시작하기'));
    if(s > 1 && !all) btns.append(h('button', {class:'btn quiet', onclick: () => { startAt = 1; saveStars(); startNight(1); }}, '첫째 밤부터 할래요'));
    if(all) btns.append(nextMoonBtn());
    btns.append(h('button', {class: all && !MOON.nextPath ? 'btn' : 'btn quiet', onclick: showPicker}, '밤 고르기'));
    card.append(h('div', {style:'text-align:center;padding-top:6px'},
      h('div', {class:'scene'},
        h('div', {class:'moon', html: moonSVG(Math.min(s - 1, MOON.total), 160, false, MOON.total)}),
        h('div', {class:'tori', html: CHAR.tori('happy')})),
      h('h2', {}, all ? josa(MOON.name, '을') + ' 다 알고 있어요' : nightName(s) + '부터 해요'),
      h('div', {style:'max-width:520px;margin:0 auto 12px;text-align:left'}, say('tori', msg)),
      h('p', {class:'checknote'}, '부모님께. 빠른 확인은 참고용입니다. 묶음마다 세 문제 가운데 두 문제를 맞히면 그 묶음을 건너뜁니다. 아이가 어려워하면 앞의 밤으로 돌아가도 괜찮고, 건너뛴 밤의 낱말도 받아쓰기실에 나옵니다.'
        + (!all && s > 1 ? ' 확인은 ' + B.title + ' 묶음에서 멈췄습니다.' : '')
        + (stopAt && !all && !MOON.pic[stopAt] ? ' 아이가 놓친 답 가운데 하나는 ‘' + stopAt + '’입니다.' : '')),
      btns));
    window.scrollTo(0, 0);
  }
}

/* ══════════════════════════════════════════════════════════════
   밤 진행
   ══════════════════════════════════════════════════════════════ */
const SCORED = {choose: S => S.qs.length, josa: S => S.names.length, build: S => S.qs.length, dict: S => S.items.length};
function startNight(n){
  night = MOON.nights.find(m => m.n === n);
  if(!night){ showPicker(); return; }
  try { preloadClips(listClips().filter(c => c.night === n).map(c => c.text)); } catch(e) {}
  steps = night.steps.concat([{type:'result'}]);
  maxScore = night.steps.reduce((a, S) => a + (SCORED[S.type] ? SCORED[S.type](S) : 0), 0);
  score = 0; step = 0;
  setNav(true);
  render();
}
function render(){
  seq++;
  card.innerHTML = ''; setFeedback(''); curGuide = null;
  hdrTitle.textContent = nightName(night.n) + '. ' + night.title;
  nextBtn.textContent = step === steps.length - 1 ? '밤 고르기' : '다음';
  showNext();
  document.getElementById('stepLabel').textContent = (step + 1) + ' / ' + steps.length;
  document.getElementById('trackFill').style.width = (step / (steps.length - 1) * 100) + '%';
  const S = steps[step];
  (SCREENS[S.type] || (() => card.append(h('p', {}, '이 화면은 아직 준비 중이에요.'))))(S);
  window.scrollTo(0, 0);
}
/* 말 한마디를 누르면 소리가 나는 단추 */
const sayBtn = (text, cls) => h('button', {class:'saybtn' + (cls ? ' ' + cls : ''), onclick: e => {
  talk(text); const el = e.currentTarget; el.classList.add('playing'); setTimeout(() => el.classList.remove('playing'), 600);
}}, text);
const head2 = (S) => { card.append(h('h2', {}, S.title), guide(S.who, S.t)); };
/* 따옴표와 문장부호를 뺀 말. 소리 파일 이름과 맞추려고 씁니다. */
const plain = t => t.replace(/[.!]/g, '');

/* 소리 파일 이름과 맞추려고, 소리를 낼 때는 늘 마침표와 느낌표를 뺀 말로 냅니다. 물음표는 억양 때문에 남깁니다. */
const talk = t => speak(plain(t));
const talkThen = (t, cb) => speakThen(plain(t), cb);

const SCREENS = {};

/* ---- 들어가기 ---- */
SCREENS.intro = S => {
  const B = MOON.bundles.find(b => b.k === night.bundle);
  card.append(h('p', {class:'bundletag'}, ORD[B.k - 1] + ' 묶음, ' + B.title),
    h('h2', {}, night.title), guide(S.who, S.t));
  if(S.big) card.append(h('div', {class:'bigsay'}, sayBtn(S.big, 'huge')));
};

/* ---- 낱말 카드: 친구에게 하는 말과 어른에게 하는 말의 짝, 그리고 낱말 하나짜리 카드 ---- */
SCREENS.pairs = S => {
  head2(S);
  if(S.pairs){
    const g = h('div', {class:'pairs'});
    S.pairs.forEach(P => {
      const en = h('div', {class:'en'}, '');
      g.append(h('div', {class:'paircard'},
        h('div', {class:'pic', html: MOON.pic[P.pic] || ''}),
        h('p', {class:'when'}, P.when),
        h('div', {class:'prow'}, h('span', {class:'to'}, '친구에게'), sayBtn(P.friend)),
        h('div', {class:'prow'}, h('span', {class:'to elder'}, '어른에게'), sayBtn(P.elder)),
        en, h('button', {class:'meanbtn', onclick: () => { en.textContent = P.en; }}, '뜻 보기')));
    });
    card.append(g);
  }
  if(S.singles){
    const box = h('div', {class:'words'});
    S.singles.forEach(item => {
      const el = h('div', {class:'word', role:'button', tabindex:'0', 'aria-label': item.w + ' 듣기', onclick: () => talk(item.w)});
      el.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); talk(item.w); } });
      el.innerHTML = item.pic && MOON.pic[item.pic] ? MOON.pic[item.pic] : `<div class="noimg">${item.w}</div>`;
      const en = h('div', {class:'en'}, '');
      el.append(h('div', {class:'w' + ([...item.w].length > 4 ? ' long' : '')}, item.w), en,
        h('button', {onclick: e => { e.stopPropagation(); en.textContent = item.en; }}, '뜻 보기'));
      box.append(el);
    });
    card.append(box);
  }
  if(S.tip) card.append(guide(S.tip.who, S.tip.t, true));
};

/* ---- 고르기 ----------------------------------------------------
   글 고르기: 상황(그림, 글, 영어 뜻) 또는 캐릭터의 말을 보고 알맞은 말을 고릅니다.
   그림 고르기(mode:'pic'): 소리를 듣고 그림을 고릅니다.
   맞히면 조금 뒤 다음 문제로, 틀리면 까닭을 보여 주고 아이가 다음 문제를 누를 때까지 기다립니다. */
SCREENS.choose = S => {
  head2(S);
  const qs = S.qs;
  let qi = 0;
  const box = h('div', {class:'qbox'});
  card.append(box);
  hideNext();
  draw();
  function draw(){
    box.innerHTML = ''; setFeedback('');
    const q = qs[qi];
    let locked = false;
    box.append(h('p', {class:'qcount'}, (qi + 1) + ' / ' + qs.length));
    if(q.line){
      box.append(h('div', {class:'qline'},
        h('div', {class:'mini', html: CHAR[q.line.who]('')}),
        h('div', {class:'bubble'}, h('b', {}, NAME[q.line.who]), h('span', {}, q.line.t),
          h('button', {class:'linkbtn', style:'display:block;margin-top:2px', onclick: () => talk(q.line.t)}, '듣기'))));
      later(() => talk(q.line.t), 300);
    }
    if(q.pic || q.t){
      const sit = h('div', {class:'situation'});
      if(q.pic) sit.append(h('div', {class:'pic', html: MOON.pic[q.pic]}));
      const words = h('div', {});
      if(q.big) words.append(h('div', {class:'qname'}, q.big));
      if(q.t) words.append(h('p', {class:'qtext'}, q.t));
      if(q.en) words.append(h('p', {class:'qen', lang:'en'}, q.en));
      sit.append(words);
      box.append(sit);
    } else if(q.en){
      box.append(h('p', {class:'qen', lang:'en'}, q.en));
    }
    if(q.say){
      box.append(h('button', {class:'btn play', style:'margin-bottom:16px', onclick: () => talk(q.say)}, '다시 듣기'));
      later(() => talk(q.say), 300);
    }
    const pic = S.mode === 'pic';
    const opts = h('div', {class: pic ? 'popts' : 'topts'});
    shuffled(q.o).forEach(o => {
      const b = pic
        ? h('button', {class:'popt', 'data-v': o, html: MOON.pic[o], 'aria-label': (MOON.pic[o].match(/aria-label="([^"]*)"/) || [])[1] || o})
        : h('button', {class:'topt', 'data-v': o}, o);
      b.addEventListener('click', () => pick(o, b));
      opts.append(b);
    });
    box.append(opts);
    const after = h('div', {class:'after'});
    box.append(after);

    function pick(o, b){
      if(locked) return; locked = true;
      const btns = [...opts.children];
      btns.forEach(x => x.disabled = true);
      const good = btns.find(x => x.dataset.v === q.a);
      const spoken = pic ? q.say : q.a;
      if(o === q.a){
        b.classList.add('right'); score++;
        react('happy');
        setFeedback('맞았어요.' + (q.why && !pic ? ' ' + q.why : ''), 'ok');
        if(!q.say) later(() => talk((spoken)), 250);
        later(nextQ, q.why ? 2200 : 1400);
      } else {
        b.classList.add('wrong'); if(good) good.classList.add('right');
        react('oops');
        setFeedback(q.why || (pic ? '이 그림이에요.' : '정답은 ' + q.a + '.'), 'no');
        later(() => talk((spoken)), 300);
        after.append(h('button', {class:'btn play', onclick: nextQ}, qi + 1 < qs.length ? '다음 문제' : '다 풀었어요'));
      }
    }
  }
  function nextQ(){
    qi++;
    if(qi < qs.length) draw();
    else { box.innerHTML = ''; box.append(h('p', {class:'qdone'}, '다 풀었어요. 아래 다음을 눌러요.')); setFeedback('다 풀었어요.', 'ok'); showNext(); }
  }
};

/* ---- 이에요와 예요 규칙 ---- */
function lastSyl(name){ return [...name].pop(); }
function nameCell(name, jo){
  const syl = lastSyl(name), [c, v, j] = decomp(syl) || [];
  const full = josa(name, jo || '이에요');
  const tail = full.slice(name.length);
  return h('button', {class:'rulecell', onclick: () => talk(full), 'aria-label': full + ' 듣기'},
    h('span', {class:'rn'}, name.slice(0, -1), h('span', {class: j ? 'rl has' : 'rl'}, syl)),
    h('span', {class:'rj'}, j ? '받침 ' + j : '받침 없음'),
    h('span', {class:'rf'}, name, h('b', {}, tail)));
}
/* S.j 는 붙일 말(기본 이에요). 받침이 있을 때와 없을 때의 모양은 조사 엔진의 짝에서 가져옵니다. */
SCREENS.rule = S => {
  head2(S);
  const jo = S.j || '이에요', [noForm, yesForm] = JOSA_PAIR[jo];
  card.append(h('div', {class:'rule'},
    h('div', {class:'rcol'}, h('p', {class:'rhead'}, '받침이 있으면 ', h('b', {}, yesForm)), ...S.yes.map(nm => nameCell(nm, jo))),
    h('div', {class:'rcol'}, h('p', {class:'rhead'}, '받침이 없으면 ', h('b', {}, noForm)), ...S.no.map(nm => nameCell(nm, jo)))));
  card.append(guide('dami', S.note || '토리, 모이, 담이는 모두 끝 글자에 받침이 없지. 그래서 토리예요, 모이예요, 담이예요라고 한단다.', true));
};

/* ---- 이에요/예요 고르기: 이름 목록으로 문제를 만듭니다. 판정은 조사 엔진이 합니다. ---- */
function josaWhy(name, jo){
  const [noForm, yesForm] = JOSA_PAIR[jo || '이에요'];
  const syl = lastSyl(name), j = (decomp(syl) || [])[2];
  return j ? '‘' + syl + '’에 받침 ' + josa(j, '이') + ' 있어서 ‘' + yesForm + '’를 붙여요.'
           : '‘' + syl + '’에 받침이 없어서 ‘' + noForm + '’를 붙여요.';
}
SCREENS.josa = S => {
  const jo = S.j || '이에요', [noForm, yesForm] = JOSA_PAIR[jo];
  SCREENS.choose({title: S.title, who: S.who, t: S.t,
    qs: S.names.map(nm => ({big: nm, t: S.q || '이름 뒤에 무엇을 붙일까요?', o: [nm + yesForm, nm + noForm], a: josa(nm, jo), why: josaWhy(nm, jo)}))});
};

/* ---- 형, 오빠, 누나, 언니 ------------------------------------
   먼저 "나"가 남자아이인지 여자아이인지 고르면, 그 아이가 부르는 말을 크게 보여 주고
   아래 표에서 두 쪽을 함께 보여 줍니다. 고른 것은 이 화면에서만 쓰고 저장하지 않습니다. */
const SIB = {
  boy:  {me:'me_boy',  label:'남자아이', older:[{w:'형', pic:'call_hyung', en:'older brother'}, {w:'누나', pic:'call_nuna', en:'older sister'}]},
  girl: {me:'me_girl', label:'여자아이', older:[{w:'오빠', pic:'call_oppa', en:'older brother'}, {w:'언니', pic:'call_unni', en:'older sister'}]}
};
SCREENS.sibling = S => {
  head2(S);
  hideNext();
  const pickRow = h('div', {class:'sibpick'});
  const out = h('div', {'aria-live':'polite'});
  const choose = k => {
    [...pickRow.children].forEach(b => b.classList.toggle('on', b.dataset.k === k));
    const me = SIB[k], other = SIB[k === 'boy' ? 'girl' : 'boy'];
    out.innerHTML = '';
    out.append(say('tori', me.label + '는 이렇게 불러. 나보다 나이 많은 남자는 ' + me.older[0].w + ', 나이 많은 여자는 ' + me.older[1].w + '. 나보다 어리면 누구든 동생이야.'));
    const box = h('div', {class:'words'});
    [...me.older, {w:'동생', pic:'call_dong', en:'younger sibling (boy or girl)'}].forEach(item => {
      const el = h('div', {class:'word', role:'button', tabindex:'0', 'aria-label': item.w + ' 듣기', onclick: () => talk(item.w)});
      el.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); talk(item.w); } });
      el.innerHTML = MOON.pic[item.pic];
      el.append(h('div', {class:'w'}, item.w), h('div', {class:'en', lang:'en'}, item.en));
      box.append(el);
    });
    out.append(box);
    const cell = w => h('td', {}, sayBtn(w));
    const tbl = h('table', {class:'sibtbl'},
      h('tr', {}, h('th', {}, ''), h('th', {}, '나이 많은 남자'), h('th', {}, '나이 많은 여자'), h('th', {}, '나보다 어린 아이')),
      h('tr', {class: k === 'boy' ? 'mine' : ''}, h('th', {}, '남자아이가 부를 때'), cell('형'), cell('누나'), cell('동생')),
      h('tr', {class: k === 'girl' ? 'mine' : ''}, h('th', {}, '여자아이가 부를 때'), cell('오빠'), cell('언니'), cell('동생')));
    out.append(h('p', {class:'sub', style:'margin-top:18px'}, '두 쪽을 함께 보면 이래요. 색칠한 줄이 내가 부르는 말이에요. ' + other.label + '는 다르게 불러요.'),
      h('div', {class:'cmpwrap'}, tbl));
    talk(me.older[0].w);
    react('happy');
    showNext();
  };
  ['boy', 'girl'].forEach(k => {
    const b = h('button', {class:'sibbtn', 'data-k': k, onclick: () => choose(k)});
    b.innerHTML = MOON.pic[SIB[k].me];
    b.append(h('span', {}, '나는 ' + SIB[k].label + '예요'));
    pickRow.append(b);
  });
  card.append(pickRow, out);
};

/* ---- 내 이름으로 말하기. 이름은 화면에만 쓰고 저장하지 않습니다. ---- */
SCREENS.myname = S => {
  head2(S);
  const input = h('input', {type:'text', lang:'ko', autocomplete:'off', autocapitalize:'off', spellcheck:'false', maxlength:'8',
    placeholder:'예: 서준', 'aria-label':'내 이름을 한글로 쓰기'});
  const out = h('div', {class:'mynameout', 'aria-live':'polite'});
  const go = () => {
    const nm = (input.value || '').replace(/\s+/g, '');
    out.innerHTML = '';
    if(!nm){ setFeedback('이름을 먼저 써요.', 'no'); return; }
    if(!/^[가-힣]{1,6}$/.test(nm)){
      setFeedback('한글로 써 주세요. 예를 들어 Emma는 엠마, Ryan은 라이언이라고 써요.', 'no'); return;
    }
    setFeedback('');
    const a = '저는 ' + josa(nm, '이에요') + '.', b = '제 이름은 ' + josa(nm, '이에요') + '.';
    out.append(say('tori', '좋아. ' + josaWhy(nm, '이에요')),
      h('div', {class:'mysent'}, sayBtn(a)), h('div', {class:'mysent'}, sayBtn(b)));
    talk((a));
    react('happy');
  };
  input.addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); go(); } });
  card.append(h('div', {class:'kbdrow mynamerow'}, input, h('button', {class:'btn play', onclick: go}, '말해 보기')),
    h('p', {class:'sub'}, '한국어 자판이 없으면 부모님께 도와 달라고 해도 돼요. 이 화면은 건너뛰어도 괜찮아요.'), out);
};

/* ---- 문장 만들기: 낱말 카드를 차례대로 누릅니다. 끌어 놓기보다 작은 손과 화면 읽기 프로그램에 편합니다. ---- */
SCREENS.build = S => {
  head2(S);
  let qi = 0;
  const box = h('div', {class:'qbox'});
  card.append(box);
  hideNext();
  draw();
  function draw(){
    box.innerHTML = ''; setFeedback('');
    const q = S.qs[qi];
    const deck = shuffled([...q.tiles, ...(q.extra || [])].map((t, i) => ({t, i})));
    const picked = [];
    let tries = 0, locked = false;
    box.append(h('p', {class:'qcount'}, (qi + 1) + ' / ' + S.qs.length), h('p', {class:'qen', lang:'en'}, q.en));
    const line = h('div', {class:'sline', 'aria-live':'polite'});
    const pool = h('div', {class:'spool'});
    const ctrl = h('div', {class:'dbtns', style:'margin-top:14px'});
    const check = h('button', {class:'btn play'}, '확인');
    ctrl.append(check);
    box.append(line, pool, ctrl);
    paint();
    function paint(){
      line.innerHTML = ''; pool.innerHTML = '';
      if(!picked.length) line.append(h('span', {class:'sempty'}, '여기에 낱말이 차례대로 와요'));
      picked.forEach((x, k) => line.append(h('button', {class:'stile on', onclick: () => { if(locked) return; picked.splice(k, 1); line.classList.remove('wrong'); paint(); }}, x.t)));
      deck.filter(x => !picked.includes(x)).forEach(x => pool.append(h('button', {class:'stile', onclick: () => { if(locked) return; picked.push(x); line.classList.remove('wrong'); paint(); }}, x.t)));
      check.disabled = picked.length !== q.tiles.length;
    }
    check.addEventListener('click', () => {
      if(locked) return;
      const said = picked.map(x => x.t).join(' ');
      if(said === q.s){
        locked = true;
        if(tries === 0) score++;
        line.classList.add('right'); react('happy');
        setFeedback(tries === 0 ? '맞았어요.' : '고쳐서 맞았어요.', 'ok');
        talk(q.s);
        later(nextQ, 1800);
        return;
      }
      tries++;
      line.classList.add('wrong'); react('oops');
      if(tries === 1){
        setFeedback(q.hint || '낱말 순서를 다시 봐요. 누가 하는 말인지부터 와요.', 'no');
      } else {
        locked = true;
        setFeedback('이렇게 만들어요: ' + q.s, 'no');
        line.innerHTML = '';
        q.s.split(' ').forEach(t => line.append(h('span', {class:'stile on'}, t)));
        talk(q.s);
        ctrl.innerHTML = '';
        ctrl.append(h('button', {class:'btn play', onclick: nextQ}, qi + 1 < S.qs.length ? '다음 문장' : '다 만들었어요'));
      }
    });
  }
  function nextQ(){
    qi++;
    if(qi < S.qs.length) draw();
    else { box.innerHTML = ''; box.append(h('p', {class:'qdone'}, '다 만들었어요. 아래 다음을 눌러요.')); setFeedback('다 만들었어요.', 'ok'); showNext(); }
  }
};

/* ---- 줄어드는 숫자: 셀 때 모양과 살, 개 앞의 모양을 나란히 보여 줍니다. 줄어드는 칸은 빨갛게. ---- */
SCREENS.shrink = S => {
  head2(S);
  const t = h('table', {class:'cmp shrink'});
  t.append(h('tr', {}, h('th', {}, '셀 때'), ...S.units.map(u => h('th', {}, u + ' 앞에서'))));
  S.rows.forEach(([full, short]) => {
    const changed = full !== short;
    t.append(h('tr', {class: changed ? 'chg' : ''}, h('td', {}, sayBtn(full)),
      ...S.units.map(u => h('td', {}, sayBtn(short + ' ' + u)))));
  });
  card.append(h('div', {class:'cmpwrap'}, t));
  if(S.note) card.append(guide('dami', S.note, true));
};

/* ---- 시계: 화살표나 아래 버튼으로 시곗바늘을 움직이며 "몇 시"를 듣습니다. 그림은 MOON.pic 의 clock1 부터 clock12. ---- */
const hourWord = h => COUNT[h - 1] + ' 시';
SCREENS.clock = S => {
  head2(S);
  let hr = S.start || 7;
  const face = h('div', {class:'clockface'});
  const label = h('div', {class:'clocklabel'});
  const set = (n, speak) => {
    hr = ((n - 1 + 12) % 12) + 1;
    face.innerHTML = MOON.pic['clock' + hr];
    label.innerHTML = '';
    label.append(sayBtn(hourWord(hr) + '예요'));
    [...row.children].forEach(b => b.classList.toggle('on', Number(b.dataset.h) === hr));
    if(speak) talk(hourWord(hr) + '예요');
  };
  const row = h('div', {class:'clockrow'});
  for(let i = 1; i <= 12; i++) row.append(h('button', {class:'chip', 'data-h': i, onclick: () => set(i, true)}, hourWord(i)));
  card.append(h('div', {class:'clockbox'},
    h('button', {class:'btn quiet play', 'aria-label':'한 시간 전', onclick: () => set(hr - 1, true)}, '◀'),
    face,
    h('button', {class:'btn quiet play', 'aria-label':'한 시간 뒤', onclick: () => set(hr + 1, true)}, '▶')),
    label, row);
  set(hr, false);
  if(S.note) card.append(guide('dami', S.note, true));
};

/* ---- 소리와 글자 (담이) ---- */
SCREENS.sound = S => {
  head2(S);
  const t = h('table', {class:'cmp'});
  t.append(h('tr', {}, h('th', {}, '이렇게 써요'), h('th', {}, '이렇게 들려요'), h('th', {}, '왜'), h('th', {}, '')));
  S.cmp.forEach(c => t.append(h('tr', {},
    h('td', {class:'sp'}, c.s), h('td', {class:'so'}, '[' + c.d + ']'), h('td', {class:'nt'}, c.n),
    h('td', {}, h('button', {onclick: () => talk(c.s)}, '듣기')))));
  card.append(h('div', {class:'cmpwrap'}, t));
  if(S.note) card.append(guide('dami', S.note, true));
};

/* ---- 받아쓰기: 틀리면 다른 글자를 표시하고 힌트를 준 뒤 한 번 더 쓰게 합니다. ---- */
SCREENS.dict = S => {
  head2(S);
  let qi = 0;
  const wrap = h('div', {});
  card.append(wrap);
  hideNext();
  draw();
  function draw(){
    wrap.innerHTML = ''; setFeedback('');
    const it = S.items[qi];
    let typed = '', pendingCho = null, attempt = 0, locked = false;
    const box = h('div', {class:'dictbox'});
    const ans = h('div', {class:'answer', 'aria-live':'polite'}, '');
    const help = h('div', {});
    box.append(h('p', {class:'qcount'}, (qi + 1) + ' / ' + S.items.length),
      h('div', {class:'drow'}, h('button', {class:'btn play', onclick: () => talk(it.w)}, '다시 듣기'),
        h('span', {class:'dmean'}, '뜻: ' + it.en)), ans, help);
    const paint = () => { ans.className = 'answer'; ans.textContent = typed + (pendingCho || ''); };
    const row = (label, list, fn) => { const r = h('div', {class:'pickrow'}, h('b', {}, label));
      list.forEach(j => r.append(h('button', {class:'chip', onclick: () => { if(!locked) fn(j); }}, j))); return r; };
    box.append(
      row('자음', MOON.keys.cho, j => { pendingCho = j; setFeedback(''); paint(); }),
      row('모음', MOON.keys.jung, j => { if(!pendingCho){ setFeedback('자음을 먼저 눌러요.', 'no'); return; } typed += compose(pendingCho, j); pendingCho = null; setFeedback(''); paint(); }),
      row('받침', MOON.keys.jong, j => { if(!typed){ setFeedback('먼저 글자를 만들어요.', 'no'); return; } typed = typed.slice(0, -1) + addJong(typed[typed.length - 1], j); setFeedback(''); paint(); }));
    const kbd = h('input', {type:'text', lang:'ko', autocomplete:'off', autocapitalize:'off', spellcheck:'false', 'aria-label':'자판으로 쓰기'});
    const kbdRow = h('div', {class:'kbdrow', hidden:''}, kbd);
    kbd.addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); check(false); } });
    const ctrl = h('div', {style:'display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;align-items:center'},
      h('button', {class:'btn quiet play', onclick: () => { if(locked) return; pendingCho = null; typed = typed.slice(0, -1); paint(); }}, '지우기'),
      h('button', {class:'btn quiet play', onclick: () => check(true)}, '모르겠어요'),
      h('button', {class:'btn play', onclick: () => check(false)}, '확인'),
      h('button', {class:'linkbtn', onclick: () => { kbdRow.hidden = !kbdRow.hidden; if(!kbdRow.hidden) kbd.focus(); }}, '자판으로 쓸래요'));
    box.append(kbdRow, ctrl);
    wrap.append(box);
    later(() => talk(it.w), 400);

    function check(giveUp){
      if(locked) return;
      const val = (kbd.value || '').replace(/\s+/g, '') || typed;
      if(!giveUp && val === it.w){
        locked = true;
        ans.className = 'answer right'; ans.textContent = it.w;
        if(attempt === 0) score++;
        react('happy'); setFeedback(attempt === 0 ? '한 번에 맞았어요.' : '고쳐서 맞았어요.', 'ok');
        later(nextQ, 1400);
        return;
      }
      const errs = giveUp ? [{type:'blank', pos:-1}] : diagnose(val, it.w);
      attempt++;
      if(attempt === 1 && !giveUp){
        ans.className = 'answer'; ans.innerHTML = '';
        const marks = new Set(errs.map(e => e.pos));
        [...val].forEach((ch, i) => ans.append(h('span', {class: marks.has(i) || marks.has(-1) ? 'diff' : ''}, ch)));
        const hint = it.hint || {who: DERR[errs[0].type].who, t: DERR[errs[0].type].hint(errs[0], it.w)};
        help.innerHTML = ''; help.append(guide(hint.who, hint.t, true));
        setFeedback('다른 글자를 표시했어요. 한 번 더 써 봐요.', 'no');
        typed = ''; pendingCho = null; kbd.value = '';
        later(() => talk(it.w), 600);
        return;
      }
      locked = true;
      ans.className = 'answer wrong'; ans.innerHTML = '';
      ans.append(h('span', {class:'diff'}, val || '(빈칸)'), h('span', {class:'arrow'}, '→'), h('span', {class:'fix'}, it.w));
      help.innerHTML = '';
      help.append(guide('tori', '정답은 ' + iya(it.w) + '. 받아쓰기실에서 또 만날 거야.', true));
      setFeedback('정답을 보여 줬어요.', 'no');
      talk(it.w);
      ctrl.innerHTML = '';
      ctrl.append(h('button', {class:'btn play', onclick: nextQ}, qi + 1 < S.items.length ? '다음 말' : '다 썼어요'));
    }
  }
  function nextQ(){
    qi++;
    if(qi < S.items.length) draw();
    else { wrap.innerHTML = ''; wrap.append(h('p', {class:'qdone'}, '받아쓰기 끝. 아래 다음을 눌러요.')); setFeedback('받아쓰기 끝.', 'ok'); showNext(); }
  }
};

/* ---- 대화 듣기: 글자 없이 먼저 듣고, 그다음 글자를 봅니다. ---- */
SCREENS.dialogue = S => {
  head2(S);
  let textOn = false, enOn = false, playing = false;
  const list = h('ol', {class:'dlg', 'aria-label':'대화'});
  const rows = S.lines.map((L, i) => {
    const txt = h('span', {class:'dt'}), en = h('span', {class:'den', lang:'en'});
    const li = h('li', {class:'dline ' + (L.who === 'tori' ? 'me' : 'other')},
      h('div', {class:'mini', html: CHAR[L.who]('')}),
      h('button', {class:'dbub', 'aria-label': NAME[L.who] + '의 말 듣기', onclick: () => { stop(); mark(i); talkThen(L.t, () => mark(-1)); }},
        h('b', {}, NAME[L.who]), txt, en));
    list.append(li);
    return {li, txt, en, L};
  });
  const paint = () => rows.forEach(r => {
    r.txt.textContent = textOn ? r.L.t : '. . .';
    r.txt.classList.toggle('hid', !textOn);
    r.en.textContent = enOn ? r.L.en : '';
  });
  const mark = i => rows.forEach((r, k) => r.li.classList.toggle('now', k === i));
  let my = 0;
  const stop = () => { my++; playing = false; playBtn.textContent = '처음부터 듣기'; mark(-1); };
  const playAll = () => {
    if(playing){ stop(); return; }
    playing = true; playBtn.textContent = '멈추기';
    const token = ++my, screen = seq;
    const go = i => {
      if(token !== my || screen !== seq) return;
      if(i >= rows.length){ stop(); if(!textOn) setFeedback('다 들었어요. 이제 글자 보기를 눌러 봐요.', 'ok'); return; }
      mark(i);
      rows[i].li.scrollIntoView({block:'nearest', behavior:'smooth'});
      talkThen(rows[i].L.t, () => setTimeout(() => go(i + 1), 450));
    };
    go(0);
  };
  const playBtn = h('button', {class:'btn play', onclick: playAll}, '처음부터 듣기');
  const textBtn = h('button', {class:'btn quiet play', onclick: () => { textOn = !textOn; textBtn.textContent = textOn ? '글자 숨기기' : '글자 보기'; paint(); }}, '글자 보기');
  const enBtn = h('button', {class:'linkbtn', onclick: () => { enOn = !enOn; enBtn.textContent = enOn ? '영어 뜻 숨기기' : '영어 뜻 보기'; paint(); }}, '영어 뜻 보기');
  card.append(h('div', {class:'dbtns'}, playBtn, textBtn, enBtn), list);
  paint();
  if(S.note) card.append(guide(S.note.who, S.note.t, true));
};

/* ---- 가족 과제: 인쇄할 수 있는 카드 ---- */
SCREENS.task = S => {
  head2(S);
  const done = h('button', {class:'btn'}, '했어요');
  const tc = h('div', {class:'taskcard'},
    h('p', {class:'tlabel'}, '달토끼 가족 과제'),
    h('h3', {}, S.title),
    h('ol', {class:'tsteps'}, ...S.lines.map(L => h('li', {},
      h('span', {class:'twhen'}, L.when),
      h('span', {class:'tsay'}, L.say),
      L.say.includes('_') ? '' : h('button', {class:'linkbtn noprint', onclick: () => talk((L.say))}, '듣기'),
      h('span', {class:'tsub'}, L.sub),
      h('span', {class:'tbox', 'aria-hidden':'true'})))),
    h('p', {class:'tparent'}, h('b', {}, '부모님께. '), S.parent));
  done.addEventListener('click', () => {
    done.disabled = true; done.textContent = '잘했어요';
    react('happy'); setFeedback('과제를 했어요. 모이가 오늘 인사를 모았어요.', 'ok');
  });
  card.append(tc, h('div', {class:'dbtns noprint', style:'margin-top:16px'}, done,
    h('button', {class:'btn quiet', onclick: () => window.print()}, '인쇄하기')),
    h('p', {class:'sub noprint'}, '지금 못 해도 괜찮아요. 다음을 눌러 넘어가고, 나중에 해도 돼요.'));
};

/* ---- 결과 ---- */
SCREENS.result = () => {
  const s = score >= maxScore - 1 ? 3 : score >= Math.ceil(maxScore * .6) ? 2 : 1;
  stars[night.n] = Math.max(stars[night.n] || 0, s);
  saveStars();
  const nextN = night.n + 1, nextOpen = OPEN.includes(nextN);
  const B = MOON.bundles.find(b => b.k === night.bundle);
  const lastOfBundle = night.n === B.nights[B.nights.length - 1];
  const bundleDone = B.nights.every(n => stars[n]);
  const monthDone = MOON.nights.every(x => stars[x.n] || passedNight(x.n)) && !nextClosed();
  const title = monthDone ? josa(MOON.name, '을') + ' 다 채웠어요' : lastOfBundle && bundleDone ? ORD[B.k - 1] + ' 묶음을 다 채웠어요' : '오늘 밤 달이 조금 차올랐어요';
  const nb = nextClosed();
  const line = s < 3 ? '괜찮아. 떡은 방아를 여러 번 찧어야 만들어져. 한 번 더 해 볼까?'
    : monthDone && !nextOpen ? MOON.name + ' 보름달이 떴어! ' + MOON.topics + '까지 모두 해냈어. ' + (B.after || '')
    : nextOpen ? '잘했어. ' + (lastOfBundle ? B.title + ' 묶음을 마쳤어. ' : '') + '이제 ' + josa(nightName(nextN), '으로') + ' 가자.'
    : B.title + ' 묶음을 다 마쳤어. ' + (nb ? '다음 묶음 ' + josa(nb.title, '은') + ' 곧 열려. ' : '') + (B.after || '');
  card.append(h('div', {style:'text-align:center;padding-top:10px'},
    h('div', {class:'scene'},
      h('div', {class:'moon', html: moonSVG(night.n, 160, true, MOON.total)}),
      h('div', {class:'tori', html: CHAR.tori(s === 3 ? 'happy' : '')})),
    h('h2', {}, title),
    h('div', {class:'stars'}, '★'.repeat(s) + '☆'.repeat(3 - s)),
    h('p', {class:'sub'}, '맞힌 문제 ' + score + ' / ' + maxScore),
    h('div', {style:'max-width:520px;margin:0 auto 22px;text-align:left'}, say('tori', line)),
    h('div', {style:'display:flex;gap:12px;justify-content:center;flex-wrap:wrap'},
      h('button', {class:'btn quiet', onclick: () => startNight(night.n)}, '다시 하기'),
      nextOpen ? h('button', {class:'btn', onclick: () => startNight(nextN)}, '다음 밤')
               : monthDone && MOON.nextPath ? nextMoonBtn()
               : h('button', {class:'btn', onclick: showPicker}, '밤 고르기'))));
  hideNext();
};

/* ══════════════════════════════════════════════════════════════
   녹음 목록
   녹음실(record/)이 읽어 갑니다. 화면에서 소리 내는 말이 모두 들어 있습니다.
   아이가 쓴 이름으로 만드는 문장은 미리 알 수 없어서 빠지고, 음성 합성이 맡습니다.
   ══════════════════════════════════════════════════════════════ */
function listClips(){
  const out = [], seen = new Set();
  const add = (text, n, label, sayHow) => {
    text = text && plain(text);
    if(!text || seen.has(text)) return;
    seen.add(text);
    out.push({id: clipId(text), text, night: n, month: MOON.num, label, say: sayHow || '자연스러운 속도로 한 번'});
  };
  const VOICE = {tori:'토리 목소리: 밝은 아이처럼', moi:'모이 목소리: 토리 친구처럼 명랑하게', dami:'담이 목소리: 할아버지처럼 느긋하게'};
  MOON.nights.forEach(N => N.steps.forEach(S => {
    const n = N.n;
    if(S.type === 'intro' && S.big) add(S.big, n, '들어가기');
    if(S.type === 'pairs'){
      (S.pairs || []).forEach(P => { add(P.friend, n, '친구에게 하는 말', '친구에게 말하듯 편하게'); add(P.elder, n, '어른에게 하는 말', '어른께 말하듯 공손하게'); });
      (S.singles || []).forEach(x => add(x.w, n, '낱말'));
    }
    if(S.type === 'choose') S.qs.forEach(q => {
      if(q.line) add(q.line.t, n, NAME[q.line.who] + '의 말', VOICE[q.line.who]);
      if(q.say) add(q.say, n, '듣고 그림 고르기');
      if(S.mode !== 'pic') add(plain(q.a), n, '고르기 정답');
    });
    if(S.type === 'rule') [...S.yes, ...S.no].forEach(nm => add(josa(nm, S.j || '이에요'), n, '받침 규칙'));
    if(S.type === 'josa') S.names.forEach(nm => add(josa(nm, S.j || '이에요'), n, '받침 규칙 고르기'));
    if(S.type === 'shrink') S.rows.forEach(([full, short]) => { add(full, n, '세는 말'); S.units.forEach(u => add(short + ' ' + u, n, '줄어드는 숫자')); });
    if(S.type === 'clock') for(let i = 1; i <= 12; i++) add(hourWord(i) + '예요', n, '시계');
    if(S.type === 'sibling') ['형','누나','오빠','언니','동생'].forEach(w => add(w, n, '형제 부르는 말'));
    if(S.type === 'build') S.qs.forEach(q => add(q.s, n, '문장 만들기', '문장 끝까지 자연스럽게'));
    if(S.type === 'sound') S.cmp.forEach(c => add(c.s, n, '소리와 글자', '이어서 자연스럽게. [' + c.d + ']처럼 들리면 맞아요'));
    if(S.type === 'dict') S.items.forEach(x => add(x.w, n, '받아쓰기'));
    if(S.type === 'dialogue') S.lines.forEach(L => add(L.t, n, '대화, ' + NAME[L.who], VOICE[L.who]));
    if(S.type === 'task') S.lines.forEach(L => { if(!L.say.includes('_')) add(plain(L.say), n, '가족 과제'); });
  }));
  MOON.check.forEach(G => G.qs.forEach(q => { const B = MOON.bundles.find(b => b.k === G.k); if(q.say) add(q.say, B.nights[0], '빠른 확인'); }));
  return out;
}

/* 주소에 ?night=2 처럼 붙이면 그 밤으로 바로 들어갑니다. */
const params = new URLSearchParams(location.search);
const qNight = Number(params.get('night'));
if(params.get('check')) startCheck();
else if(Number.isInteger(qNight) && OPEN.includes(qNight)) startNight(qNight);
else showPicker();
