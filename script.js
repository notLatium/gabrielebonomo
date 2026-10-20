(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ===================== Traduzioni italiane =====================
     Il testo inglese è quello scritto in index.html. Per modificare
     un testo italiano cambia la voce corrispondente qui sotto.        */
  var IT = {
    'skip': 'Vai al contenuto',
    'nav.numbers': 'Numeri',
    'nav.work': 'Lavoro',
    'nav.path': 'Percorso',
    'nav.contact': 'Contatti',

    'hero.role': 'NOC Engineer in un managed service provider, studente di Informatica e Sicurezza dei Sistemi all’Università Statale di Milano',
    'hero.lead': 'Gestisco la piattaforma RMM N-central e i servizi di sicurezza gestita costruiti su di essa: monitoraggio, patching, remediation e supporto durante gli incidenti di sicurezza.',
    'hero.cta1': 'Guarda i numeri',
    'hero.cta2': 'Contattami',
    'hero.scroll': 'Scorri',

    'story.title': 'Da gennaio 2025 a ottobre 2026, in ticket',
    'story.s1.label': 'ticket chiusi',
    'story.s1.note': '1.589 nel 2025 e 1.081 nel 2026, dagli alert gestiti in pochi minuti ai progetti da oltre 50 ore registrate.',
    'story.s2.label': 'ore registrate sui ticket',
    'story.s2.note': 'Circa 48 minuti per ticket in media. Formazione, studio e lavoro fuori orario svolti fuori dai ticket non sono inclusi.',
    'story.s3.label': 'ticket di alert di monitoraggio e sicurezza',
    'story.s3.note': 'Triage degli alert di N-central, SIEM ed EDR (SentinelOne). Circa 577 arrivano dal solo monitoraggio N-central.',
    'story.s4.label': 'aziende clienti seguite',
    'story.s4.note': 'Alcune con sedi a Miami, in Moldavia, in Cina e a Rotterdam.',

    'areas.title': 'Dove vanno i ticket',
    'areas.intro': 'Ticket per area, 2025 e 2026 sommati. Il lavoro di monitoraggio e sicurezza è nel colore più scuro.',
    'areas.legend.sec': 'Monitoraggio e sicurezza',
    'areas.legend.help': 'Helpdesk e sistemistica',
    'areas.rmm': 'Monitoraggio RMM N-central',
    'areas.siem': 'Eventi di sicurezza SIEM',
    'areas.m365': 'Email e Microsoft 365',
    'areas.net': 'Rete, firewall e VPN',
    'areas.acc': 'Account e accessi',
    'areas.pc': 'PC e postazioni',
    'areas.backup': 'Backup',
    'areas.edr': 'EDR (SentinelOne)',
    'areas.srv': 'Server e virtualizzazione',
    'areas.patch': 'Patching e BitLocker',
    'areas.note': 'Le aree sono stimate dalle parole chiave nei titoli dei ticket: i numeri sono approssimati e i ticket con titoli generici sono esclusi. Le ore sono il tempo registrato su ogni ticket. Per il 2026 aree e ore riguardano i primi 1.000 ticket su 1.081.',

    'role.title': 'Cosa faccio',
    'role.d1.t': 'Responsabile N-central',
    'role.d1.d': 'Configurazione, monitoraggi, patching, automazioni e rapporti con il vendor.',
    'role.d2.t': 'Monitoraggio e triage',
    'role.d2.d': 'Alert di N-central, SIEM (Intrusa), MDR (Adlumin) ed EDR (SentinelOne).',
    'role.d3.t': 'Automazione con PowerShell',
    'role.d3.d': 'Script che automatizzano il lavoro aziendale, dal deploy dei dispositivi ai permessi delle cartelle in Active Directory.',
    'role.d4.t': 'Patch management',
    'role.d4.d': 'Analisi, approvazione e validazione delle patch per Windows, Linux e macOS.',
    'role.d5.t': 'Incident response',
    'role.d5.d': 'Supporto quando le caselle email vengono compromesse.',
    'role.d6.t': 'Formazione interna',
    'role.d6.d': 'Affiancamento e formazione on-the-job di colleghi e stagisti.',
    'role.d7.t': 'Formazione esterna',
    'role.d7.d': 'Formazione su N-central, Cove e SentinelOne per aziende terze.',
    'role.d8.t': 'Supporto commerciale',
    'role.d8.d': 'Demo di prodotto, webinar e supporto prevendita.',

    'stack.title': 'Gli strumenti che uso',
    'stack.rmm': 'RMM e monitoraggio',
    'stack.sec': 'Sicurezza',
    'stack.net': 'Rete',
    'stack.vpn': 'VPN remote access e site-to-site',
    'stack.srv': 'Server e virtualizzazione',
    'stack.auto': 'Automazione',

    'proj.title': 'Progetti selezionati',
    'proj.intro': 'I nomi dei clienti sono omessi. Le ore sono quelle registrate sul ticket.',
    'proj.f.all': 'Tutti',
    'proj.f.client': 'Progetti per clienti',
    'proj.f.internal': 'Strumenti interni',
    'proj.tag.client': 'Progetto per cliente',
    'proj.tag.internal': 'Strumento interno',
    'proj.p1.t': 'Deploy automatico dei dispositivi',
    'proj.p1.d': 'Automazione PowerShell per il deploy dei nuovi dispositivi.',
    'proj.p2.t': 'Progetto di rete aziendale',
    'proj.p2.d': 'Lavoro sulla rete di un cliente.',
    'proj.p3.t': 'Script per i permessi delle cartelle in Active Directory',
    'proj.p3.d': 'Uno script per gestire i permessi delle cartelle in Active Directory.',
    'proj.p4.t': 'Firme Microsoft 365 centralizzate',
    'proj.p4.d': 'Firme email aziendali gestite in modo centralizzato con CodeTwo.',
    'proj.p5.t': 'Installazione di TSplus per l’accesso remoto',
    'proj.p5.d': 'Installazione per un cliente, più circa 6 ore di test interni prima.',
    'proj.p6.t': 'Migrazione da Kaspersky a SentinelOne',
    'proj.p6.d': 'Rimozione di Kaspersky e attivazione dell’EDR SentinelOne per un cliente.',
    'proj.p7.t': 'Rete per una sede in Cina',
    'proj.p7.d': 'Lavoro sulla rete della sede in Cina di un cliente.',
    'proj.p8.t': 'Migrazione dell’infrastruttura',
    'proj.p8.d': 'Migrazione dell’infrastruttura di un cliente.',
    'proj.p9.t': 'Bilanciamento del carico sul firewall',
    'proj.p9.d': 'Bilanciamento del carico configurato sul firewall di un cliente.',
    'proj.p10.t': 'Deploy dell’agente Adlumin',
    'proj.p10.d': 'Distribuzione dell’agente MDR Adlumin tramite una Custom Property di N-central.',

    'cert.title': 'Certificazioni',
    'cert.note': 'Ho ottenuto entrambe le certificazioni N-able durante le trasferte di lavoro a Miami e Berlino.',

    'path.title': 'Il mio percorso',
    'path.e1.t': 'Informatica e Telecomunicazioni',
    'path.e1.d': 'Percorso di 5 anni all’istituto tecnico, indirizzo Informatica e telecomunicazioni.',
    'path.e2.t': 'Un anno di studio in Giappone',
    'path.e2.d': 'Da ottobre 2022 a settembre 2023, immersione totale in Giappone tra studio e lavoro. Si è concluso con la certificazione linguistica JLPT N3.',
    'path.e3.when': '2023 – oggi',
    'path.e3.d': 'Tre anni in un managed service provider: RMM N-central, monitoraggio, patching, automazioni e servizi di sicurezza gestita.',
    'path.e4.when': '2025 – oggi',
    'path.e4.t': 'Laurea triennale in Informatica e Sicurezza dei Sistemi',
    'path.e4.where': 'Università Statale di Milano',
    'path.e4.d': 'Un corso incentrato su informatica, sicurezza e privacy: sviluppo software e infrastrutture sicure, sicurezza di reti e cloud, gestione della sicurezza e aspetti normativi.',

    'person.title': 'Oltre ai ticket',
    'person.soft': 'Come lavoro',
    'person.s1': 'Curiosità',
    'person.s2': 'Determinazione',
    'person.s3': 'Organizzazione',
    'person.s4': 'Problem solving',
    'person.s5': 'Coachability',
    'person.lang': 'Lingue',
    'person.l1': 'Italiano',
    'person.l1v': 'Madrelingua',
    'person.l2': 'Inglese',
    'person.l3': 'Giapponese',
    'person.int': 'Interessi',
    'person.i1': 'Cultura e lingua giapponese, sia pop che tradizionale',
    'person.i2': 'Fotografia, street e automotive',
    'person.i3': 'Videogiochi, team-based e strategici',
    'person.i4': 'Motociclismo, viaggi ed escursioni',
    'person.i5': 'Ballo, hip-hop e K-pop',

    'viz.k0': 'Ogni punto vale 10 ticket: pieni per il 2025, sfumati per il 2026.',
    'viz.k2': 'Evidenziati: alert di monitoraggio e sicurezza.',

    'contact.title': 'Contattami',
    'contact.lead': 'Scrivimi via email o collegati con me su LinkedIn.',
    'contact.write': 'Scrivi un’email',
    'contact.copy': 'Copia indirizzo',
    'contact.li': 'Vedi il mio profilo',
    '_copied': 'Indirizzo copiato.',
    '_copyFail': 'Copia non riuscita: seleziona l’indirizzo e copialo a mano.',

    'hero.alt': 'Ritratto di Gabriele Bonomo',
    '_title': 'Gabriele Bonomo, NOC Engineer',
    '_desc': 'Portfolio di Gabriele Bonomo, NOC Engineer: RMM N-central, sicurezza gestita, patching e automazioni.',
    '_theme.toDark': 'Passa al tema scuro',
    '_theme.toLight': 'Passa al tema chiaro'
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var altNodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-alt]'));
  var metaDesc = document.querySelector('meta[name="description"]');

  // Il testo inglese viene letto dall'HTML
  var EN = {
    '_title': document.title,
    '_desc': metaDesc ? metaDesc.getAttribute('content') : '',
    '_theme.toDark': 'Switch to dark mode',
    '_theme.toLight': 'Switch to light mode',
    '_copied': 'Address copied.',
    '_copyFail': 'Copy failed: select the address and copy it by hand.'
  };
  nodes.forEach(function (n) { EN[n.getAttribute('data-i18n')] = n.innerHTML; });
  altNodes.forEach(function (n) { EN[n.getAttribute('data-i18n-alt')] = n.getAttribute('alt'); });

  var lang = 'en';
  function dict() { return lang === 'it' ? IT : EN; }

  function setLang(l) {
    lang = l === 'it' ? 'it' : 'en';
    var d = dict();
    nodes.forEach(function (n) {
      var v = d[n.getAttribute('data-i18n')];
      if (v != null) n.innerHTML = v;
    });
    altNodes.forEach(function (n) {
      var v = d[n.getAttribute('data-i18n-alt')];
      if (v != null) n.setAttribute('alt', v);
    });
    document.title = d._title;
    if (metaDesc) metaDesc.setAttribute('content', d._desc);
    root.lang = lang;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    // Separatore delle migliaia e decimali secondo la lingua
    document.querySelectorAll('.num').forEach(function (el) {
      el.textContent = formatNum(el, +el.dataset.target);
    });
    document.querySelectorAll('.proj__hours').forEach(function (el) {
      el.textContent = lang === 'it' ? el.textContent.replace('.', ',') : el.textContent.replace(',', '.');
    });
    updateThemeLabel();
    store.set('gb-lang', lang);
  }

  function group(n) {
    var sep = lang === 'it' ? '.' : ',';
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }
  function formatNum(el, n) {
    return (el.dataset.prefix || '') + group(n) + (el.dataset.suffix || '');
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  /* ===================== Tema chiaro / scuro ===================== */
  var themeBtn = document.querySelector('.theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function activeTheme() {
    var t = root.getAttribute('data-theme');
    return t === 'light' || t === 'dark' ? t : (mq.matches ? 'dark' : 'light');
  }
  function updateThemeLabel() {
    var t = activeTheme();
    root.setAttribute('data-theme-active', t);
    var d = dict();
    themeBtn.setAttribute('aria-label', t === 'dark' ? d['_theme.toLight'] : d['_theme.toDark']);
  }
  themeBtn.addEventListener('click', function () {
    var next = activeTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store.set('gb-theme', next);
    updateThemeLabel();
  });
  if (mq.addEventListener) mq.addEventListener('change', updateThemeLabel);

  /* ===================== Lingua iniziale ===================== */
  var urlLang = new URLSearchParams(location.search).get('lang');
  setLang(urlLang || store.get('gb-lang') || 'en');

  /* ===================== Ingresso dell'hero ===================== */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { root.classList.add('is-loaded'); });
  });

  /* ===================== Contatori ===================== */
  function countUp(el) {
    if (el.dataset.done === '1') return;
    el.dataset.done = '1';
    var target = +el.dataset.target;
    if (reduceMotion) { el.textContent = formatNum(el, target); return; }
    var start = null, dur = 1400;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = formatNum(el, Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    }
    el.textContent = formatNum(el, 0);
    requestAnimationFrame(tick);
  }

  /* ===================== Racconto dei numeri (sticky) ===================== */
  var story = document.querySelector('.story');
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.story__rail li'));
  var active = -1;

  // Costruisco il waffle: 159 punti 2025 + 108 punti 2026 (1 punto = 10 ticket)
  // Alert monitoraggio/sicurezza: ~735 nel 2025 (74 punti), ~352 nel 2026 (35 punti), distribuiti in modo uniforme
  var grid = document.querySelector('.viz__grid');
  if (grid) {
    var html = '';
    function isAlert(k, alerts, total) { return Math.floor((k + 1) * alerts / total) > Math.floor(k * alerts / total); }
    for (var k = 0; k < 267; k++) {
      var y25 = k < 159;
      var local = y25 ? k : k - 159;
      var alert = y25 ? isAlert(local, 74, 159) : isAlert(local, 35, 108);
      html += '<i class="' + (y25 ? 'y25' : 'y26') + (alert ? ' alert' : '') + '" style="--i:' + k + '"></i>';
    }
    grid.innerHTML = html;
  }

  function activate(i) {
    active = i;
    if (story) story.setAttribute('data-active', String(i));
    steps.forEach(function (s, k) {
      s.classList.toggle('is-active', k === i);
      s.classList.toggle('is-before', k < i);
      s.setAttribute('aria-hidden', String(k !== i));
    });
    dots.forEach(function (d, k) { d.classList.toggle('is-on', k === i); });
    var num = steps[i].querySelector('.num');
    if (num) countUp(num);
  }

  /* ===================== Kanji e timeline legati allo scroll ===================== */
  var kanji = document.querySelector('.kanji');
  var timeline = document.querySelector('.timeline');

  function onScroll() {
    var vh = window.innerHeight;

    if (story) {
      var r = story.getBoundingClientRect();
      var total = story.offsetHeight - vh;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      var idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
      if (idx !== active && r.top < vh * 0.5) activate(idx);
    }

    if (kanji && !reduceMotion) {
      var y = window.scrollY;
      if (y < vh * 1.5) {
        kanji.style.transform = 'translate3d(0,' + (y * 0.35) + 'px,0) rotate(' + (y * 0.01) + 'deg)';
      }
    }

    if (timeline) {
      var tr = timeline.getBoundingClientRect();
      var tp = (vh * 0.75 - tr.top) / tr.height;
      timeline.style.setProperty('--progress', reduceMotion ? 1 : Math.min(1, Math.max(0, tp)).toFixed(3));
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () { onScroll(); ticking = false; });
    }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  if (active === -1 && steps.length) {
    // Mostra il primo passo anche prima di arrivarci, così non resta vuoto
    steps[0].classList.add('is-active');
  }

  /* ===================== Barre che si riempiono ===================== */
  var reveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add('in'); });
  }

  /* ===================== Filtro progetti ===================== */
  var filterBtns = document.querySelectorAll('.filter button');
  var projects = document.querySelectorAll('.proj');
  filterBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      filterBtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      projects.forEach(function (p) {
        var show = f === 'all' || p.getAttribute('data-kind') === f;
        if (show && p.hidden) {
          p.hidden = false;
          p.classList.add('is-entering');
          requestAnimationFrame(function () {
            requestAnimationFrame(function () { p.classList.remove('is-entering'); });
          });
        } else if (!show) {
          p.hidden = true;
        }
      });
    });
  });

  /* ===================== Copia email ===================== */
  var copyBtn = document.querySelector('.copy-email');
  var copyStatus = document.querySelector('.copy-status');
  if (copyBtn && copyStatus) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      function done(ok) {
        copyStatus.textContent = dict()[ok ? '_copied' : '_copyFail'];
        clearTimeout(copyBtn._t);
        copyBtn._t = setTimeout(function () { copyStatus.textContent = ''; }, 3000);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } else {
        try {
          var ta = document.createElement('textarea');
          ta.value = email; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select();
          var ok = document.execCommand('copy');
          document.body.removeChild(ta);
          done(ok);
        } catch (e) { done(false); }
      }
    });
  }

  /* ===================== Anno nel footer ===================== */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
