// ── Mobile nav toggle ──
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Back to top button ──
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
