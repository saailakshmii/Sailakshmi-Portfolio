// ============================================
// 1. MOBILE NAVIGATION TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// 2. AUTO-UPDATE FOOTER YEAR
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// 3. "HELLO, I'M SAI!!" POP-UP EFFECT
// Triggers once, the first time the About section
// scrolls into view, instead of playing on page load.
// ============================================
const aboutIntro = document.getElementById('aboutIntro');

if (aboutIntro && 'IntersectionObserver' in window) {
  const introObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutIntro.classList.add('pop-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  introObserver.observe(aboutIntro);
} else if (aboutIntro) {
  // Fallback for very old browsers without IntersectionObserver
  aboutIntro.classList.add('pop-in');
}
