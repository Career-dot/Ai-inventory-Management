// ===== Highlight current page in nav =====
(() => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const current = path.replace('.html', '') || 'index';
  document.querySelectorAll('.nav__link[data-page], .nav__link--plain[data-page]').forEach(link => {
    if (link.dataset.page === current) link.classList.add('is-active');
  });
})();

// ===== Nav shrink on scroll =====
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl?.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

// ===== Scroll reveal (fade + rise), staggered within a group =====
const revealGroups = document.querySelectorAll('[data-reveal-group]');
revealGroups.forEach(group => {
  [...group.children].forEach((child, i) => {
    child.classList.add('reveal');
    child.style.setProperty('--delay', `${i * 90}ms`);
  });
});
document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Headline word stagger (splits text into animated spans) =====
document.querySelectorAll('[data-split]').forEach(el => {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words
    .map((w, i) => `<span class="split-word" style="--w:${i}">${w}</span>`)
    .join(' ');
});

// ===== Cursor spotlight on hero visual =====
const heroVisual = document.querySelector('.hero__visual');
heroVisual?.addEventListener('mousemove', (e) => {
  const rect = heroVisual.getBoundingClientRect();
  heroVisual.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  heroVisual.style.setProperty('--my', `${e.clientY - rect.top}px`);
});

// ===== Marquee: duplicate track content for seamless loop =====
document.querySelectorAll('.trust__logos').forEach(track => {
  const inner = track.querySelector('.trust__track');
  if (inner && !track.dataset.doubled) {
    inner.insertAdjacentHTML('afterend', inner.outerHTML);
    track.dataset.doubled = 'true';
  }
});

// ===== Pricing: monthly / yearly toggle =====
const pricingSwitch = document.getElementById('pricingSwitch');
if (pricingSwitch) {
  const labelMonthly = document.getElementById('labelMonthly');
  const labelYearly = document.getElementById('labelYearly');
  const amounts = document.querySelectorAll('.price-card__amount .num[data-monthly]');

  const setYearly = (yearly) => {
    pricingSwitch.classList.toggle('is-yearly', yearly);
    pricingSwitch.setAttribute('aria-checked', String(yearly));
    labelMonthly.classList.toggle('is-active', !yearly);
    labelYearly.classList.toggle('is-active', yearly);
    amounts.forEach(el => {
      const val = yearly ? el.dataset.yearly : el.dataset.monthly;
      el.textContent = `$${val}`;
    });
  };

  pricingSwitch.addEventListener('click', () => setYearly(!pricingSwitch.classList.contains('is-yearly')));
  pricingSwitch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setYearly(!pricingSwitch.classList.contains('is-yearly')); }
  });
}

// ===== FAQ accordion =====
document.querySelectorAll('.faq-item__q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// ===== Contact form (front-end only demo) =====
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formSuccess')?.classList.add('is-visible');
  contactForm.reset();
});

// ===== Docs: copy code button =====
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    const block = btn.closest('.code-block');
    const text = block.innerText.replace('Copy', '').trim();
    navigator.clipboard?.writeText(text);
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = original; }, 1500);
  });
});

// ===== Docs: active link highlight on scroll =====
const docsSections = document.querySelectorAll('.docs-content section[id]');
if (docsSections.length) {
  const docsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`.docs-nav a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        document.querySelectorAll('.docs-nav a').forEach(a => a.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  docsSections.forEach(s => docsObserver.observe(s));
}

// ===== Highlight active page in nav =====
const currentFile = location.pathname.split('/').pop() || 'index.html';
const pageMap = {
  'index.html': 'home',
  'platform.html': 'platform',
  'solutions.html': 'solutions',
  'pricing.html': 'pricing',
  'docs.html': 'docs',
  'contact.html': 'contact'
};
const currentPage = pageMap[currentFile];
if (currentPage) {
  document.querySelectorAll(`[data-page="${currentPage}"]`).forEach(el => el.classList.add('is-active'));
}

// ===== Mobile nav toggle =====
const burger = document.getElementById('burgerBtn');
const navLinks = document.querySelector('.nav__links');

burger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

// ===== Mobile: tap to open Platform/Solutions dropdown =====
document.querySelectorAll('.nav__item > .nav__link').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Only handle tap-toggle when mobile menu is open
    if (!navLinks.classList.contains('is-open')) return;
    e.preventDefault();
    const item = btn.closest('.nav__item');
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.nav__item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// ===== Demo modal =====
const modal = document.getElementById('demoModal');
const openTriggers = [document.getElementById('watchDemoBtn'), document.getElementById('playBtn')];

function openModal(){
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

openTriggers.forEach(btn => btn?.addEventListener('click', openModal));
modal?.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Animated stat counters (on scroll into view) =====
const statEls = document.querySelectorAll('.stat__num');

const countUp = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    el.textContent = target;
    return;
  }

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statEls.forEach(el => observer.observe(el));