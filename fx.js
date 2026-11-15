/* ==========================================================
   FX: all the motion and interaction. Loads after script.js.
   Everything here is optional: delete this file and its <script>
   tag and the site still works. Respects reduced-motion.
   ========================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  root.classList.add('fx');

  /* ---------- text scramble ---------- */
  var CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&';
  function scramble(node, to, ms) {
    clearInterval(node._t);
    if (reduce || /[^\u0000-\u024f]/.test(to)) { node.textContent = to; return; }
    var n = 0, steps = Math.max(6, Math.round(ms / 30));
    node._t = setInterval(function () {
      n++;
      var out = '';
      for (var i = 0; i < to.length; i++) {
        out += (i < to.length * n / steps || to[i] === ' ') ? to[i] : CH[Math.floor(Math.random() * CH.length)];
      }
      node.textContent = out;
      if (n >= steps) { clearInterval(node._t); node.textContent = to; }
    }, 30);
  }

  /* ---------- hero headline: split into letters ---------- */
  var h1 = $('.hero h1');
  if (h1) {
    var full = h1.textContent.trim(), k = 0;
    h1.setAttribute('aria-label', full);
    h1.textContent = '';
    full.split(' ').forEach(function (w) {
      var word = document.createElement('span');
      word.className = 'word';
      word.setAttribute('aria-hidden', 'true');
      w.split('').forEach(function (c) {
        var s = document.createElement('span');
        s.className = 'ch';
        s.style.setProperty('--i', k++);
        s.textContent = c;
        word.appendChild(s);
      });
      h1.appendChild(word);
      h1.appendChild(document.createTextNode(' '));
    });
  }

  /* ---------- greeting in the languages I speak + Rieti clock ---------- */
  var greet = $('#greeting');
  if (greet) {
    var hellos = ['Hello', 'Ciao', 'سلام', 'Bonjour'], gi = 0;
    greet.setAttribute('aria-hidden', 'true');
    setInterval(function () { gi = (gi + 1) % hellos.length; scramble(greet, hellos[gi], 500); }, 2600);
  }
  var clock = $('#clock');
  function tick() {
    if (!clock) return;
    var t = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit' }).format(new Date());
    clock.textContent = 'Rieti, Italy: ' + t + ' local time';
  }
  tick(); setInterval(tick, 20000);

  /* ---------- scroll progress ---------- */
  var bar = $('#progress'), ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var max = root.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- living background (canvas particles) ---------- */
  var cv = $('#bg');
  if (cv && !reduce) {
    var cx = cv.getContext('2d'), W, H, P = [], mouse = { x: -999, y: -999 }, color = '200,255,77';
    var readColor = function () {
      var hex = getComputedStyle(root).getPropertyValue('--accent').trim().replace('#', '');
      if (hex.length === 6) color = parseInt(hex.slice(0, 2), 16) + ',' + parseInt(hex.slice(2, 4), 16) + ',' + parseInt(hex.slice(4, 6), 16);
      cv.style.opacity = root.getAttribute('data-theme') === 'dark' ? '0.7' : '0.35';
    };
    var resize = function () {
      W = cv.width = window.innerWidth; H = cv.height = window.innerHeight;
      var n = Math.min(90, Math.floor(W * H / 15000));
      P = [];
      for (var i = 0; i < n; i++) P.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
    };
    var frame = function () {
      if (!document.hidden) {
        cx.clearRect(0, 0, W, H);
        for (var i = 0; i < P.length; i++) {
          var p = P[i], dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) { p.vx += dx / d * 0.012; p.vy += dy / d * 0.012; }
          p.vx *= 0.99; p.vy *= 0.99;
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
          cx.fillStyle = 'rgba(' + color + ',0.8)';
          cx.fillRect(p.x, p.y, 2, 2);
          for (var j = i + 1; j < P.length; j++) {
            var q = P[j], ax = p.x - q.x, ay = p.y - q.y, dist = ax * ax + ay * ay;
            if (dist < 12000) {
              cx.strokeStyle = 'rgba(' + color + ',' + (0.22 * (1 - dist / 12000)) + ')';
              cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(q.x, q.y); cx.stroke();
            }
          }
          if (d < 180) {
            cx.strokeStyle = 'rgba(' + color + ',' + (0.4 * (1 - d / 180)) + ')';
            cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(mouse.x, mouse.y); cx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    };
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; });
    new MutationObserver(readColor).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    readColor(); resize(); frame();
  }

  /* ---------- custom cursor ---------- */
  if (fine && !reduce) {
    var dot = document.createElement('div'), ring = document.createElement('div');
    dot.className = 'cursor-dot'; ring.className = 'cursor-ring';
    dot.setAttribute('aria-hidden', 'true'); ring.setAttribute('aria-hidden', 'true');
    document.body.append(ring, dot);
    root.classList.add('has-cursor');
    var tx = -100, ty = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', function (e) {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
    });
    document.addEventListener('mouseover', function (e) {
      ring.classList.toggle('hot', !!e.target.closest('a, button, input, [role="option"]'));
    });
    (function loop() {
      rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- magnetic buttons, card tilt + spotlight, avatar parallax ---------- */
  if (fine && !reduce) {
    var mag = null;
    document.addEventListener('mousemove', function (e) {
      var m = e.target.closest('.btn, .social-link, .icon-btn');
      if (mag && mag !== m) mag.style.transform = '';
      mag = m;
      if (m) {
        var r = m.getBoundingClientRect();
        m.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.25) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.35) + 'px)';
      }
      var card = e.target.closest('.listing');
      if (card) {
        var b = card.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top, amp = card.classList.contains('featured') ? 2.5 : 6;
        card.style.setProperty('--mx', x + 'px'); card.style.setProperty('--my', y + 'px');
        card.style.setProperty('--rx', ((0.5 - y / b.height) * amp).toFixed(2) + 'deg');
        card.style.setProperty('--ry', ((x / b.width - 0.5) * amp).toFixed(2) + 'deg');
      }
      var av = $('.avatar');
      if (av) av.style.transform = 'rotateY(' + ((e.clientX / window.innerWidth - 0.5) * 14) + 'deg) rotateX(' + ((0.5 - e.clientY / window.innerHeight) * 10) + 'deg)';
    });
    document.addEventListener('mouseout', function (e) {
      var card = e.target.closest && e.target.closest('.listing');
      if (card && !card.contains(e.relatedTarget)) { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); }
    });
  }

  /* ---------- reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    var targets = $$('.section h2, .section-intro, .controls, .fact, .skill-group, .tl-item, .courses h3, .course, .listing, .contact-actions, .contact-panel .social-list');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var node = en.target;
        node.classList.add('in');
        if (node.tagName === 'H2') { var txt = node.textContent; node.setAttribute('aria-label', txt); scramble(node, txt, 600); }
        io.unobserve(node);
        setTimeout(function () { node.classList.remove('rv', 'in'); node.style.transitionDelay = ''; }, 1300);
      });
    }, { threshold: 0.12 });
    targets.forEach(function (node, i) {
      node.classList.add('rv');
      node.style.transitionDelay = ((i % 5) * 70) + 'ms';
      io.observe(node);
    });
  }

  /* ---------- skills marquee ---------- */
  var track = $('#marquee-track');
  if (track) {
    var words = [];
    $$('.skill-group').forEach(function (g) {
      if ($('h4', g).textContent.indexOf('Spoken') !== -1) return;
      $$('li', g).forEach(function (li) { words.push(li.textContent); });
    });
    if (!words.length) { track.parentNode.hidden = true; }
    words.concat(words).forEach(function (w) {
      var s = document.createElement('span'); s.textContent = w; track.appendChild(s);
    });
  }

  /* ---------- command palette (Ctrl/Cmd + K) ---------- */
  var dlg = $('#palette'), input = $('#pal-input'), list = $('#pal-list');
  if (dlg && typeof dlg.showModal === 'function') {
    var cmds = [], shown = [], sel = 0;
    var go = function (id) { return function () { var t = document.getElementById(id); if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }; };
    [['About', 'about'], ['Experience', 'experience'], ['Education', 'education'], ['Projects', 'projects'], ['Contact', 'contact']].forEach(function (s) {
      cmds.push({ label: 'Go to ' + s[0], hint: 'Section', run: go(s[1]) });
    });
    var mail = $('#contact-email');
    var email = mail && mail.getAttribute('href') && mail.getAttribute('href').indexOf('mailto:') === 0 ? mail.getAttribute('href').slice(7) : '';
    if (email) {
      cmds.push({ label: 'Email me', hint: email, run: function () { window.location.href = 'mailto:' + email; } });
      cmds.push({ label: 'Copy my email address', hint: 'Clipboard', keep: true, run: function (item) {
        if (navigator.clipboard) navigator.clipboard.writeText(email);
        item.textContent = 'Copied to clipboard';
        setTimeout(function () { dlg.close(); }, 700);
      } });
    }
    var li = $('a[href*="linkedin.com"]');
    if (li) cmds.push({ label: 'Open my LinkedIn', hint: 'New tab', run: function () { window.open(li.href, '_blank', 'noopener'); } });
    var cvLink = $('#cv-link');
    if (cvLink && cvLink.getAttribute('href')) cmds.push({ label: 'Get my CV', hint: 'PDF', run: function () { cvLink.click(); } });
    cmds.push({ label: 'Switch theme', hint: 'Light or dark', run: function () { $('#theme-toggle').click(); } });

    var paint = function () {
      var q = input.value.trim().toLowerCase();
      shown = cmds.filter(function (c) { return (c.label + ' ' + c.hint).toLowerCase().indexOf(q) !== -1; });
      sel = Math.min(sel, Math.max(0, shown.length - 1));
      list.replaceChildren();
      if (!shown.length) {
        var none = document.createElement('li'); none.className = 'p-empty';
        none.textContent = 'Nothing matches. Try "projects" or "email".'; list.appendChild(none); return;
      }
      shown.forEach(function (c, i) {
        var li2 = document.createElement('li'), b = document.createElement('button'), s = document.createElement('small');
        li2.setAttribute('role', 'presentation');
        b.type = 'button'; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', String(i === sel));
        b.append(document.createTextNode(c.label)); s.textContent = c.hint; b.appendChild(s);
        b.addEventListener('click', function () { exec(i, b); });
        li2.appendChild(b); list.appendChild(li2);
      });
    };
    var exec = function (i, node) {
      var c = shown[i]; if (!c) return;
      if (!c.keep) dlg.close();
      c.run(node ? node.firstChild : null);
    };
    var open = function () { input.value = ''; sel = 0; paint(); dlg.showModal(); input.focus(); };
    input.addEventListener('input', function () { sel = 0; paint(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, shown.length - 1); paint(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); paint(); }
      else if (e.key === 'Enter') { e.preventDefault(); exec(sel, list.querySelectorAll('button')[sel]); }
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    document.addEventListener('keydown', function (e) {
      var typing = /input|textarea/i.test((e.target.tagName || ''));
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); dlg.open ? dlg.close() : open(); }
      else if (e.key === '/' && !typing && !dlg.open) { e.preventDefault(); open(); }
    });
    var kb = $('#open-palette');
    if (kb) kb.addEventListener('click', open);
  }
})();
