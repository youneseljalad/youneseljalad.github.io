/* ==========================================================
   PORTFOLIO SCRIPT
   Part A: YOUR CONTENT (edit this part)
   Part B: the code that renders the page (no need to touch)
   ========================================================== */
(function () {
  'use strict';

  /* ==========================================================
     PART A: YOUR CONTENT
     ========================================================== */

  /* ---- A1. Site settings ----
     Leave a value as "" to hide it. Only filled-in links appear on the page.
     Examples:
       github:   "https://github.com/your-username"
       linkedin: "https://www.linkedin.com/in/your-name"
       email:    "you@example.com"                                   */
  var SITE = {
    email: 'younes.email.work@gmail.com',
    phone: '+393348211981',
    cvFile: 'cv.pdf', // put your CV at the root of the repo with this name
    social: {
      github: '',
      linkedin: 'https://www.linkedin.com/in/djilani-younes-268068311/',
      instagram: '',
      facebook: '',
      website: ''
    }
  };

  /* ---- A2. Experience ----
     One object per job. Newest first. Leave the list empty to show a
     friendly empty state. Every field except title and org is optional.
     Example:
       {
         title: 'Frontend Developer',
         org: 'Company name',
         location: 'City, Country',
         start: 'Jan 2025',
         end: 'Present',                 // or 'Jun 2025'
         description: 'One or two sentences about the role.',
         points: ['Built X', 'Improved Y'],
         logo: 'assets/images/company-logo.png'
       }                                                              */
  var EXPERIENCE = [
    {
      title: 'Intern',
      org: 'SIGEAD (Infinity Prod)',
      location: '',
      duration: '3-month internship',
      description: "Internship at SIGEAD. My Master's thesis project, LIMS, a laboratory management system, was developed in partnership with Infinity Prod by SIGEAD.",
      points: []
    },
    {
      title: 'Independent software developer',
      org: 'Own products',
      description: 'Designing, building and publishing my own mobile and web products end to end, from architecture to app store release and marketing.',
      points: [
        'CalDZ: an AI food scanner published on Google Play, with a companion website for third-party payments and a TikTok page for content marketing.',
        'Reservily: a sports facility booking app with online payment and QR code check-in for players, owners and staff.',
        'Fibre Eat: a food delivery app.',
        'ReserveHub: a booking platform for barbers, auto repair shops, car rentals and hotels in Algeria, with a separate owner panel and super-admin approval workflow.',
        'LinkBiz: a link-in-bio platform for businesses, with mobile-friendly dashboards and a super admin panel.',
        'Interfaces in English, French and Arabic, including right-to-left layout.'
      ]
    },
    {
      title: 'Frontend developer',
      org: 'Client projects',
      description: 'Frontend work for businesses, from product websites to app prototypes.',
      points: [
        'Safe Door: product showcase websites and a mobile-first catalogue for a metallic security door manufacturer, including a scroll-driven 3D site.',
        'Workshop Management App: a React Native prototype built for a client demonstration.'
      ]
    }
  ];

  /* ---- A3. Education ----
     Same idea. "title" is the degree, "org" is the institution.      */
  var EDUCATION = [
    {
      title: 'Master 1',
      org: 'Tuscia University',
      location: 'Italy',
      start: '',
      end: '',
      field: 'Artificial Intelligence and Archival Science',
      description: 'Currently studying.',
      points: [],
      logo: ''
    },
    {
      title: 'Master 2',
      org: 'Université Ferhat Abbas Sétif 1',
      location: 'Sétif, Algeria',
      start: '',
      end: '',
      field: 'Web Development and Data Engineering',
      description: "Master's thesis: LIMS, a laboratory management system for medical laboratories, developed in partnership with Infinity Prod by SIGEAD.",
      points: [],
      logo: ''
    },
    {
      title: "Bachelor's degree",
      org: 'Université Ferhat Abbas Sétif 1',
      location: 'Sétif, Algeria',
      start: '',
      end: '',
      field: 'Computer Science',
      description: '',
      points: [],
      logo: ''
    }
  ];

  /* ---- A3b. Courses and certifications ----
     title, provider, and where it was taken. Add a "url" (full https link
     to your certificate) to make the entry clickable. Empty list hides it. */
  var COURSES = [
    { title: 'Cybersecurity Fundamentals', provider: 'Coursera', format: 'Online', url: '' },
    { title: 'Data Management', provider: 'edX', format: 'Online', url: '' },
    { title: 'AI For Everyone', provider: 'Coursera (DeepLearning.AI, Andrew Ng)', format: 'Online', url: '' },
    { title: 'Google AI Professional Certificate', provider: 'Google, on Coursera', format: 'Online', url: '' },
    { title: 'Elements of AI', provider: 'University of Helsinki and MinnaLearn', format: 'Online', url: '' }
  ];

  /* ---- A4. Skills ----
     Groups with an empty items list are hidden automatically.        */
  var SKILLS = [
    { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP'] },
    { category: 'Web and mobile development', items: ['Angular', 'React', 'Next.js', 'Node.js', 'Express', 'React Native', 'Expo', 'Tailwind CSS', 'Framer Motion', 'TanStack Query', 'Three.js', 'GSAP'] },
    { category: 'Data and backend', items: ['MySQL', 'PostgreSQL', 'Prisma', 'Supabase', 'Firebase', 'Auth.js'] },
    { category: 'Design', items: ['UML', 'Mobile-first design', 'Multilingual interfaces (EN, FR, AR)'] },
    { category: 'Tools and platforms', items: [] },
    { category: 'Other', items: ['Social media marketing', 'Google Ads'] },
    { category: 'Spoken languages', items: ['Arabic (native)', 'English (C1)', 'French (B2)', 'Italian (A1)'] }
  ];

  /* ---- A5. Projects ----
     HOW TO ADD A PROJECT: copy one object below, paste it into the list
     (put a comma between objects), and change the values.

     HOW TO ADD PICTURES:
       1. Save the icon (square, about 256x256) as
          assets/images/projects/<name>-icon.png
       2. Save screenshots as
          assets/images/projects/<name>-screen-1.png, -screen-2.png ...
       3. Fill in "icon" and "screenshots" below with those paths.
     If an icon is missing the page shows a letter tile instead.
     If a screenshot file is missing it is simply left out.

     FIELDS (only filled fields are shown):
       id            unique, lowercase, no spaces
       name          project name
       description   short text for the listing
       details       longer text, shown on featured projects only
       category      'Web Apps', 'Mobile Apps', 'Websites', 'Tools' or 'Other'
                     (filter buttons are built from the categories you use)
       platform      'Web', 'Android', 'iOS', 'Desktop' (or a list of them)
       icon          path to the icon image
       screenshots   list of paths, or of { src, alt } objects
       technologies  list of technology names
       status        'Live', 'In Development', 'Open Source' or any text
       websiteUrl / githubUrl / googlePlayUrl / appStoreUrl / detailUrl
                     full links starting with https://
       ctaLabel      text of the button when there is no link yet
       featured      true makes the listing larger and puts it first   */
  var PROJECTS = [
    {
      id: 'caldz',
      name: 'CalDZ',
      description: 'AI food scanner: point your camera at a meal and instantly get its calories and a full nutritional breakdown.',
      details: "My flagship app, built in Algeria and published on Google Play. Because Google Play billing isn't available to developers in Algeria, I built a companion website where users can pay through a third-party provider. The app is promoted through original content on its TikTok page.",
      category: 'Mobile Apps',
      platform: 'Android',
      icon: 'assets/images/projects/caldz-icon.png',
      screenshots: [
        'assets/images/projects/caldz-screen-1.png',
        'assets/images/projects/caldz-screen-2.png',
        'assets/images/projects/caldz-screen-3.png',
        'assets/images/projects/caldz-screen-4.png'
      ],
      technologies: ['AI food recognition', 'Camera scanning', 'Nutrition tracking'],
      status: 'Live',
      websiteUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      githubUrl: '',
      tiktokUrl: 'https://www.tiktok.com/@cal.dz',
      ctaLabel: 'Link coming soon',
      featured: true
    },
    {
      id: 'reservily',
      name: 'Reservily',
      description: 'Sports facility booking: find a field, book a time, pay online, get a QR code, scan and play.',
      details: 'One platform for three roles. Players find facilities, reserve a field and pay online. Owners publish facilities, control schedules, manage reservations and receive payments. Staff scan QR codes, verify reservations and manage arrivals.',
      category: 'Mobile Apps',
      platform: 'Mobile',
      icon: 'assets/images/projects/reservily-icon.png',
      screenshots: [
        'assets/images/projects/reservily-screen-1.png',
        'assets/images/projects/reservily-screen-2.png',
        'assets/images/projects/reservily-screen-3.png',
        'assets/images/projects/reservily-screen-4.png'
      ],
      technologies: ['Online payments', 'QR code check-in', 'Role-based access'],
      status: '',
      websiteUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      githubUrl: '',
      ctaLabel: 'Link coming soon',
      featured: true
    },
    {
      id: 'fibre-eat',
      name: 'Fibre Eat',
      description: 'Food delivery app for ordering meals and having them delivered to your door.',
      category: 'Mobile Apps',
      platform: 'Mobile',
      icon: 'assets/images/projects/fibre-eat-icon.png',
      screenshots: [
        'assets/images/projects/fibre-eat-screen-1.png',
        'assets/images/projects/fibre-eat-screen-2.png',
        'assets/images/projects/fibre-eat-screen-3.png',
        'assets/images/projects/fibre-eat-screen-4.png'
      ],
      technologies: [],
      status: '',
      websiteUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      githubUrl: '',
      ctaLabel: 'Link coming soon',
      featured: true
    },
    {
      id: 'lims',
      name: 'LIMS',
      description: 'Laboratory management system for medical laboratories in the Wilaya of Sétif.',
      details: "My Master's thesis, developed in partnership with Infinity Prod by SIGEAD and co-authored with a classmate. A three-tier system with role-based access control, UML design documentation, and an analyzer simulation module.",
      category: 'Web Apps',
      platform: 'Web',
      icon: 'assets/images/projects/lims-icon.png',
      screenshots: [
        'assets/images/projects/lims-screen-1.png',
        'assets/images/projects/lims-screen-2.png',
        'assets/images/projects/lims-screen-3.png',
        'assets/images/projects/lims-screen-4.png'
      ],
      technologies: ['Angular', 'PHP', 'MySQL'],
      status: 'Thesis project',
      websiteUrl: '',
      githubUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      ctaLabel: 'Not public yet',
      featured: false
    },
    {
      id: 'reservehub',
      name: 'ReserveHub',
      description: 'Booking platform for barbers, auto repair shops, car rentals and hotels in Algeria.',
      details: 'Customers book per staff member, and business owners manage everything from a separate admin panel with self-registration and super-admin approval. The interface is available in English, French and Arabic, including right-to-left layout.',
      category: 'Web Apps',
      platform: 'Web',
      icon: 'assets/images/projects/reservehub-icon.png',
      screenshots: [
        'assets/images/projects/reservehub-screen-1.png',
        'assets/images/projects/reservehub-screen-2.png',
        'assets/images/projects/reservehub-screen-3.png',
        'assets/images/projects/reservehub-screen-4.png'
      ],
      technologies: ['React', 'Node.js', 'Express', 'Prisma', 'Supabase', 'PostgreSQL'],
      status: 'In Development',
      websiteUrl: '',
      githubUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      ctaLabel: 'In development',
      featured: false
    },
    {
      id: 'linkbiz',
      name: 'LinkBiz',
      description: 'Link-in-bio platform built for businesses, with mobile-friendly dashboards and a super admin panel.',
      category: 'Web Apps',
      platform: 'Web',
      icon: 'assets/images/projects/linkbiz-icon.png',
      screenshots: [
        'assets/images/projects/linkbiz-screen-1.png',
        'assets/images/projects/linkbiz-screen-2.png',
        'assets/images/projects/linkbiz-screen-3.png',
        'assets/images/projects/linkbiz-screen-4.png'
      ],
      technologies: ['Next.js', 'Auth.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      status: 'In Development',
      websiteUrl: '',
      githubUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      ctaLabel: 'In development',
      featured: false
    },
    {
      id: 'workshop-app',
      name: 'Workshop Management App',
      description: 'UI-only mobile prototype of a workshop management system, built for a client demonstration.',
      category: 'Mobile Apps',
      platform: 'Mobile',
      icon: 'assets/images/projects/workshop-app-icon.png',
      screenshots: [
        'assets/images/projects/workshop-app-screen-1.png',
        'assets/images/projects/workshop-app-screen-2.png',
        'assets/images/projects/workshop-app-screen-3.png',
        'assets/images/projects/workshop-app-screen-4.png'
      ],
      technologies: ['React Native', 'Expo', 'TypeScript'],
      status: 'Prototype',
      websiteUrl: '',
      githubUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      ctaLabel: 'Client prototype',
      featured: false
    },
    {
      id: 'safe-door',
      name: 'Safe Door',
      description: 'Product websites for a metallic security door manufacturer, including a scroll-driven 3D site and a mobile-first catalogue.',
      category: 'Websites',
      platform: 'Web',
      icon: 'assets/images/projects/safe-door-icon.png',
      screenshots: [
        'assets/images/projects/safe-door-screen-1.png',
        'assets/images/projects/safe-door-screen-2.png',
        'assets/images/projects/safe-door-screen-3.png',
        'assets/images/projects/safe-door-screen-4.png'
      ],
      technologies: ['Three.js', 'GSAP', 'HTML', 'CSS', 'JavaScript'],
      status: '',
      websiteUrl: '',
      githubUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      ctaLabel: 'Client project',
      featured: false
    }
  ];

  /* ==========================================================
     PART B: RENDERING CODE (no need to edit below)
     ========================================================== */

  var root = document.documentElement;
  var SVG_NS = 'http://www.w3.org/2000/svg';

  function $(selector, scope) { return (scope || document).querySelector(selector); }

  /* Builds DOM nodes safely: text is always added as text, never as HTML. */
  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      var value = props[key];
      if (value === null || value === undefined || value === false) return;
      if (key === 'class') node.className = value;
      else if (key === 'text') node.textContent = value;
      else node.setAttribute(key, value === true ? '' : value);
    });
    [].concat(children === undefined ? [] : children).forEach(function (child) {
      if (child !== null && child !== undefined) node.append(child);
    });
    return node;
  }

  /* ---------- Icons ---------- */
  var ICONS = {
    github: { fill: true, shapes: [['path', { d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' }]] },
    linkedin: { fill: true, shapes: [['path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }]] },
    facebook: { fill: true, shapes: [['path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }]] },
    instagram: { shapes: [['rect', { x: 3, y: 3, width: 18, height: 18, rx: 5 }], ['circle', { cx: 12, cy: 12, r: 4 }], ['circle', { cx: 17.5, cy: 6.5, r: 0.6 }]] },
    mail: { shapes: [['rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ['path', { d: 'm3 7 9 6 9-6' }]] },
    globe: { shapes: [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M2 12h20' }], ['path', { d: 'M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20' }]] },
    search: { shapes: [['circle', { cx: 11, cy: 11, r: 7 }], ['path', { d: 'm20 20-3.5-3.5' }]] },
    star: { fill: true, shapes: [['path', { d: 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z' }]] },
    play: { shapes: [['path', { d: 'M6 3l14 9-14 9z' }]] },
    download: { shapes: [['path', { d: 'M12 3v12m0 0-4-4m4 4 4-4M4 21h16' }]] },
    doc: { shapes: [['path', { d: 'M7 3h8l4 4v14H7z' }], ['path', { d: 'M15 3v4h4' }]] }
  };

  function icon(name, size) {
    var def = ICONS[name];
    var svg = document.createElementNS(SVG_NS, 'svg');
    var s = String(size || 20);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', s);
    svg.setAttribute('height', s);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    if (def.fill) {
      svg.setAttribute('fill', 'currentColor');
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
    }
    def.shapes.forEach(function (shape) {
      var node = document.createElementNS(SVG_NS, shape[0]);
      Object.keys(shape[1]).forEach(function (k) { node.setAttribute(k, shape[1][k]); });
      svg.appendChild(node);
    });
    return svg;
  }

  /* ---------- URL safety ---------- */
  function safeUrl(value) {
    if (!value || typeof value !== 'string') return '';
    var v = value.trim();
    try {
      var u = new URL(v, document.baseURI);
      return (u.protocol === 'http:' || u.protocol === 'https:') ? v : '';
    } catch (e) { return ''; }
  }
  function isExternal(url) {
    try { return new URL(url, document.baseURI).origin !== window.location.origin; }
    catch (e) { return true; }
  }
  function validPhone(value) {
    return typeof value === 'string' && /^\+?[0-9\s\-().]{7,20}$/.test(value.trim());
  }
  function validEmail(value) {
    return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  /* ---------- Social links ---------- */
  var SOCIAL_META = [
    { key: 'github', label: 'GitHub', icon: 'github' },
    { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
    { key: 'instagram', label: 'Instagram', icon: 'instagram' },
    { key: 'facebook', label: 'Facebook', icon: 'facebook' },
    { key: 'website', label: 'Website', icon: 'globe' }
  ];

  function renderSocials(container, withLabels) {
    if (!container) return;
    container.replaceChildren();
    SOCIAL_META.forEach(function (meta) {
      var url = safeUrl(SITE.social[meta.key]);
      if (!url) return;
      var a = el('a', {
        class: 'social-link', href: url, target: '_blank', rel: 'noopener noreferrer',
        'aria-label': withLabels ? null : meta.label + ' (opens in a new tab)', title: meta.label
      }, [icon(meta.icon, 20), withLabels ? el('span', { text: meta.label }) : null]);
      container.appendChild(el('li', {}, a));
    });
    if (validEmail(SITE.email)) {
      var mail = el('a', {
        class: 'social-link', href: 'mailto:' + SITE.email.trim(),
        'aria-label': withLabels ? null : 'Email', title: 'Email'
      }, [icon('mail', 20), withLabels ? el('span', { text: 'Email' }) : null]);
      container.appendChild(el('li', {}, mail));
    }
  }

  /* ---------- CV button ---------- */
  function setupCv() {
    var link = $('#cv-link');
    var label = $('#cv-label');
    if (!link) return;
    link.setAttribute('href', SITE.cvFile);

    function markMissing() {
      link.classList.add('is-unavailable');
      link.setAttribute('aria-disabled', 'true');
      link.removeAttribute('href');
      link.removeAttribute('download');
      link.setAttribute('tabindex', '0');
      link.setAttribute('title', 'Add a file named ' + SITE.cvFile + ' to enable this button');
      if (label) label.textContent = 'CV coming soon';
    }

    // Opening index.html straight from disk blocks this check, so skip it there.
    if (window.location.protocol === 'file:') return;
    fetch(SITE.cvFile, { method: 'HEAD', cache: 'no-store' }).then(function (res) {
      var type = res.headers.get('content-type') || '';
      if (!res.ok || type.indexOf('text/html') !== -1) markMissing();
    }).catch(markMissing);
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    var box = $('#skills-groups');
    var wrap = $('#skills');
    if (!box) return;
    var groups = SKILLS.filter(function (g) { return g.items && g.items.length; });
    if (!groups.length) { if (wrap) wrap.hidden = true; return; }
    groups.forEach(function (g) {
      box.appendChild(el('div', { class: 'skill-group' }, [
        el('h4', { text: g.category }),
        el('ul', { class: 'chips' }, g.items.map(function (item) { return el('li', { text: item }); }))
      ]));
    });
  }

  /* ---------- Timelines ---------- */
  function dateRange(start, end) {
    if (start && end) return start + ' to ' + end;
    return start || end || '';
  }

  function renderTimeline(listId, emptyId, items) {
    var list = $(listId);
    var empty = $(emptyId);
    if (!list) return;
    if (!items.length) { list.hidden = true; if (empty) empty.hidden = false; return; }
    items.forEach(function (item) {
      var logoUrl = safeUrl(item.logo) || (item.logo && !/^[a-z]+:/i.test(item.logo) ? item.logo : '');
      var orgLine = el('p', { class: 'tl-org' }, [
        logoUrl ? el('img', { class: 'tl-logo', src: logoUrl, alt: '', width: 32, height: 32, loading: 'lazy', onerror: null }) : null,
        el('span', { text: item.org })
      ]);
      var logoImg = $('img', orgLine);
      if (logoImg) logoImg.addEventListener('error', function () { logoImg.remove(); });

      var range = dateRange(item.start, item.end);
      var metaParts = [];
      if (item.location) metaParts.push(el('span', { text: item.location }));
      if (range) metaParts.push(el('span', { text: range }));
      else if (item.duration) metaParts.push(el('span', { text: item.duration }));

      list.appendChild(el('li', { class: 'tl-item' }, [
        el('h3', { text: item.title }),
        orgLine,
        metaParts.length ? el('p', { class: 'tl-meta' }, metaParts) : null,
        item.field ? el('p', { class: 'tl-field', text: item.field }) : null,
        item.description ? el('p', { class: 'tl-desc', text: item.description }) : null,
        item.points && item.points.length
          ? el('ul', { class: 'tl-points' }, item.points.map(function (p) { return el('li', { text: p }); }))
          : null
      ]));
    });
  }

  /* ---------- Courses ---------- */
  function renderCourses() {
    var wrap = $('#courses');
    var list = $('#courses-list');
    if (!wrap || !list) return;
    if (!COURSES.length) { wrap.hidden = true; return; }
    COURSES.forEach(function (c) {
      var url = safeUrl(c.url);
      var title = url
        ? el('a', { href: url, target: '_blank', rel: 'noopener noreferrer', text: c.title })
        : el('span', { text: c.title });
      var meta = [c.provider, c.format].filter(Boolean).join(', ');
      list.appendChild(el('li', { class: 'course' }, [
        el('strong', {}, title),
        meta ? el('span', { class: 'course-meta', text: meta }) : null
      ]));
    });
  }

  /* ---------- Projects ---------- */
  var LINK_DEFS = [
    ['websiteUrl', 'Visit website', 'globe'],
    ['googlePlayUrl', 'Google Play', 'play'],
    ['appStoreUrl', 'App Store', 'download'],
    ['detailUrl', 'Project details', 'doc'],
    ['githubUrl', 'Source code', 'github'],
    ['tiktokUrl', 'TikTok page', 'globe']
  ];

  function collectLinks(p) {
    var out = [];
    LINK_DEFS.forEach(function (def) {
      var url = safeUrl(p[def[0]]);
      if (url) out.push({ url: url, label: def[1], icon: def[2] });
    });
    return out;
  }

  function buildLink(link, cls) {
    var external = isExternal(link.url);
    return el('a', {
      class: cls, href: link.url,
      target: external ? '_blank' : null,
      rel: external ? 'noopener noreferrer' : null
    }, [
      icon(link.icon, 18),
      el('span', { text: link.label }),
      external ? el('span', { class: 'sr-only', text: ' (opens in a new tab)' }) : null
    ]);
  }

  function initials(name) {
    var parts = String(name).replace(/([a-z])([A-Z])/g, '$1 $2').split(/[\s\-_]+/).filter(Boolean);
    return parts.slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join('');
  }

  function normalizeShots(p) {
    return (p.screenshots || []).map(function (s, i) {
      var obj = typeof s === 'string' ? { src: s } : s;
      return {
        src: obj.src,
        alt: obj.alt || (p.name + ' screenshot ' + (i + 1)),
        failed: false
      };
    }).filter(function (s) { return s.src; });
  }

  function statusClass(status) {
    var s = String(status).toLowerCase();
    if (s === 'live') return 'status status-live';
    if (s.indexOf('develop') !== -1) return 'status status-dev';
    if (s.indexOf('open') !== -1) return 'status status-open';
    return 'status';
  }

  function buildIcon(p) {
    var wrap = el('div', { class: 'app-icon' }, [
      el('span', { class: 'app-icon-fallback', 'aria-hidden': 'true', text: initials(p.name) })
    ]);
    if (p.icon) {
      var img = el('img', { src: p.icon, alt: '', width: 96, height: 96, loading: 'lazy', decoding: 'async' });
      img.addEventListener('error', function () { wrap.classList.add('is-fallback'); });
      wrap.appendChild(img);
    } else {
      wrap.classList.add('is-fallback');
    }
    return wrap;
  }

  function buildGallery(p) {
    var shots = normalizeShots(p);
    if (!shots.length) return null;
    var gallery = el('div', { class: 'shots', role: 'group', tabindex: '0', 'aria-label': p.name + ' screenshots' });

    shots.forEach(function (shot) {
      var img = el('img', { src: shot.src, alt: shot.alt, loading: 'lazy', decoding: 'async' });
      var btn = el('button', { class: 'shot', type: 'button', 'aria-label': 'Enlarge: ' + shot.alt }, img);

      img.addEventListener('load', function () {
        if (img.naturalWidth && img.naturalHeight) {
          btn.style.aspectRatio = img.naturalWidth + ' / ' + img.naturalHeight;
        }
      });
      img.addEventListener('error', function () {
        shot.failed = true;
        btn.remove();
        if (!gallery.children.length) gallery.remove();
      });
      btn.addEventListener('click', function () {
        var visible = shots.filter(function (s) { return !s.failed; });
        openLightbox(visible, visible.indexOf(shot));
      });
      gallery.appendChild(btn);
    });
    return gallery;
  }

  function buildCard(p, index) {
    var featured = !!p.featured;
    var id = 'project-' + (p.id || index);
    var links = collectLinks(p);
    var primary = links[0];
    var secondary = links.slice(1);
    var platforms = [].concat(p.platform || []).filter(Boolean);

    var action;
    if (primary) {
      action = buildLink(primary, 'btn btn-primary' + (featured ? ' btn-lg' : ''));
    } else {
      action = el('span', {
        class: 'btn is-unavailable' + (featured ? ' btn-lg' : ''),
        'aria-disabled': 'true',
        text: p.ctaLabel || p.status || 'Coming soon'
      });
    }

    var meta = [];
    if (p.category) meta.push(el('span', { text: p.category }));
    platforms.forEach(function (pl) { meta.push(el('span', { class: 'platform-tag', text: pl })); });
    if (p.status) meta.push(el('span', { class: statusClass(p.status), text: p.status }));

    var head = el('div', { class: 'listing-head' }, [
      buildIcon(p),
      el('div', { class: 'listing-title' }, [
        featured ? el('span', { class: 'badge-featured' }, [icon('star', 12), el('span', { text: 'Featured' })]) : null,
        el('h3', { id: id + '-name', text: p.name }),
        meta.length ? el('div', { class: 'listing-meta' }, meta) : null
      ]),
      el('div', { class: 'listing-action' }, action)
    ]);

    return el('article', { class: 'listing' + (featured ? ' featured' : ''), 'aria-labelledby': id + '-name' }, [
      head,
      p.description ? el('p', { class: 'listing-desc', text: p.description }) : null,
      featured && p.details ? el('p', { class: 'listing-details', text: p.details }) : null,
      p.technologies && p.technologies.length
        ? el('ul', { class: 'tags', 'aria-label': 'Technologies' }, p.technologies.map(function (t) { return el('li', { text: t }); }))
        : null,
      secondary.length
        ? el('div', { class: 'listing-links' }, secondary.map(function (l) { return buildLink(l, 'btn btn-quiet'); }))
        : null,
      buildGallery(p)
    ]);
  }

  var projectState = { query: '', category: 'All' };

  function matchesProject(p) {
    if (projectState.category !== 'All' && p.category !== projectState.category) return false;
    var q = projectState.query.trim().toLowerCase();
    if (!q) return true;
    var haystack = [p.name, p.description, p.details, p.category, p.status]
      .concat(p.technologies || [], [].concat(p.platform || []))
      .filter(Boolean).join(' ').toLowerCase();
    return haystack.indexOf(q) !== -1;
  }

  function renderProjects() {
    var list = $('#listings');
    var count = $('#result-count');
    if (!list) return;

    var filtered = PROJECTS.filter(matchesProject);
    // Featured first, otherwise keep the order of the list above.
    var ordered = filtered.map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) { return (b.p.featured ? 1 : 0) - (a.p.featured ? 1 : 0) || a.i - b.i; })
      .map(function (x) { return x.p; });

    list.replaceChildren();
    ordered.forEach(function (p, i) { list.appendChild(buildCard(p, i)); });

    if (!ordered.length) {
      var reset = el('button', { class: 'btn btn-secondary btn-small', type: 'button', text: 'Clear search and filters' });
      reset.addEventListener('click', function () {
        projectState.query = '';
        projectState.category = 'All';
        $('#project-search').value = '';
        renderFilters();
        renderProjects();
      });
      list.appendChild(el('div', { class: 'empty', style: 'grid-column: 1 / -1' }, [
        el('p', { text: 'No projects match your search.' }),
        el('p', { style: 'margin-top:0.75rem' }, reset)
      ]));
    }

    if (count) {
      count.textContent = 'Showing ' + ordered.length + ' of ' + PROJECTS.length +
        (PROJECTS.length === 1 ? ' project' : ' projects');
    }
  }

  function renderFilters() {
    var box = $('#project-filters');
    if (!box) return;
    var categories = [];
    PROJECTS.forEach(function (p) {
      if (p.category && categories.indexOf(p.category) === -1) categories.push(p.category);
    });
    box.replaceChildren();
    if (categories.length < 2) { box.hidden = true; return; }
    box.hidden = false;
    ['All'].concat(categories).forEach(function (cat) {
      var btn = el('button', {
        class: 'filter-btn', type: 'button',
        'aria-pressed': String(projectState.category === cat),
        text: cat === 'All' ? 'All projects' : cat
      });
      btn.addEventListener('click', function () {
        projectState.category = cat;
        renderFilters();
        renderProjects();
      });
      box.appendChild(btn);
    });
  }

  function setupProjects() {
    var controls = $('#project-controls');
    var searchIcon = $('#search-icon');
    if (searchIcon) searchIcon.appendChild(icon('search', 18));

    // Warn about duplicate ids while you edit the list (shows in the browser console only).
    var seen = {};
    PROJECTS.forEach(function (p) {
      if (seen[p.id]) console.warn('Portfolio: duplicate project id "' + p.id + '"');
      seen[p.id] = true;
    });

    if (!PROJECTS.length) {
      if (controls) controls.hidden = true;
      var list = $('#listings');
      if (list) list.appendChild(el('p', { class: 'empty', text: 'Projects will be added here soon.' }));
      return;
    }

    var input = $('#project-search');
    if (input) {
      input.addEventListener('input', function () {
        projectState.query = input.value;
        renderProjects();
      });
    }
    renderFilters();
    renderProjects();
  }

  /* ---------- Lightbox ---------- */
  var lb = {
    dialog: $('#lightbox'), img: $('#lb-img'), caption: $('#lb-caption'),
    prev: $('#lb-prev'), next: $('#lb-next'), close: $('#lb-close'),
    list: [], index: 0
  };

  function showShot() {
    var shot = lb.list[lb.index];
    if (!shot) return;
    lb.img.src = shot.src;
    lb.img.alt = shot.alt;
    lb.caption.textContent = shot.alt + (lb.list.length > 1 ? ' (' + (lb.index + 1) + ' of ' + lb.list.length + ')' : '');
    var many = lb.list.length > 1;
    lb.prev.classList.toggle('is-hidden', !many);
    lb.next.classList.toggle('is-hidden', !many);
  }

  function step(delta) {
    if (lb.list.length < 2) return;
    lb.index = (lb.index + delta + lb.list.length) % lb.list.length;
    showShot();
  }

  function openLightbox(list, index) {
    if (!list.length || index < 0) return;
    lb.list = list;
    lb.index = index;
    showShot();
    if (typeof lb.dialog.showModal === 'function') {
      lb.dialog.showModal();
      root.classList.add('lb-open');
    } else {
      window.open(list[index].src, '_blank', 'noopener');
    }
  }

  function setupLightbox() {
    if (!lb.dialog) return;
    lb.prev.addEventListener('click', function () { step(-1); });
    lb.next.addEventListener('click', function () { step(1); });
    lb.close.addEventListener('click', function () { lb.dialog.close(); });
    // Escape is handled natively by <dialog>
    lb.dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    });
    // Click on the dark area closes it
    lb.dialog.addEventListener('click', function (e) {
      if (!e.target.closest('img, button, figcaption')) lb.dialog.close();
    });
    lb.dialog.addEventListener('close', function () {
      root.classList.remove('lb-open');
      lb.img.removeAttribute('src');
    });
  }

  /* ---------- Theme ---------- */
  function setupTheme() {
    var btn = $('#theme-toggle');
    var meta = $('meta[name="theme-color"]');

    function apply(theme) {
      root.setAttribute('data-theme', theme);
      if (meta) meta.setAttribute('content', theme === 'dark' ? '#0F1613' : '#F5F6F1');
      if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

    if (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        apply(next);
        try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
      });
    }

    // Follow the system theme until the visitor picks one manually.
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function (e) {
        var saved = null;
        try { saved = localStorage.getItem('theme'); } catch (err) { /* ignore */ }
        if (saved !== 'light' && saved !== 'dark') apply(e.matches ? 'dark' : 'light');
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
    }
  }

  /* ---------- Navigation ---------- */
  function setupNav() {
    var header = $('.site-header');
    var nav = $('#site-nav');
    var toggle = $('#menu-toggle');

    function setMenu(open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); toggle.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !e.target.closest('.site-header')) setMenu(false);
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 800) setMenu(false); });

    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Highlight the link of the section being read
    if ('IntersectionObserver' in window) {
      var links = {};
      [].forEach.call(nav.querySelectorAll('a[href^="#"]'), function (a) { links[a.getAttribute('href').slice(1)] = a; });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          Object.keys(links).forEach(function (id) { links[id].removeAttribute('aria-current'); });
          var active = links[entry.target.id];
          if (active) active.setAttribute('aria-current', 'true');
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      Object.keys(links).forEach(function (id) {
        var section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    }
  }

  /* ---------- Contact ---------- */
  function setupContact() {
    var button = $('#contact-email');
    var phoneBtn = $('#contact-phone');
    var note = $('#contact-note');
    var hasSocial = SOCIAL_META.some(function (m) { return safeUrl(SITE.social[m.key]); });
    var hasEmail = validEmail(SITE.email);
    var hasPhone = validPhone(SITE.phone);

    if (hasEmail) {
      button.setAttribute('href', 'mailto:' + SITE.email.trim());
      $('#contact-email-text', button).textContent = SITE.email.trim();
      button.hidden = false;
    }
    if (hasPhone && phoneBtn) {
      phoneBtn.setAttribute('href', 'tel:' + SITE.phone.replace(/[^\d+]/g, ''));
      $('#contact-phone-text', phoneBtn).textContent = SITE.phone.trim();
      phoneBtn.hidden = false;
    }
    if (!hasEmail && !hasPhone && note) {
      note.textContent = hasSocial
        ? "Contact details aren't listed yet. Use the links below to reach me."
        : 'Contact details will be added here soon.';
      note.hidden = false;
    }
  }

  /* ---------- Start ---------- */
  function init() {
    renderSocials($('#hero-socials'), false);
    renderSocials($('#contact-socials'), true);
    renderSocials($('#footer-socials'), false);
    setupCv();
    renderSkills();
    renderCourses();
    renderTimeline('#experience-list', '#experience-empty', EXPERIENCE);
    renderTimeline('#education-list', '#education-empty', EDUCATION);
    setupProjects();
    setupLightbox();
    setupTheme();
    setupNav();
    setupContact();

    var year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());

    // Avatar fallback in case the image failed before this script ran
    var avatarImg = $('#avatar img');
    if (avatarImg && avatarImg.complete && avatarImg.naturalWidth === 0) {
      $('#avatar').classList.add('is-fallback');
    }
  }

  init();
})();
