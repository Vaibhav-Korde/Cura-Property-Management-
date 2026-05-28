// src/app/components/about/about.utils.js
// Parallax and image-stack animation helpers

/**
 * Simple CSS parallax effect on the about visual section.
 * @param {string} selector - Target element selector
 * @param {number} factor   - Parallax speed (0–1)
 */
function initAboutParallax(selector = '.about__img-stack', factor = 0.08) {
  const el = document.querySelector(selector);
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const update = () => {
    const rect   = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    el.style.transform = `translateY(${center * factor}px)`;
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

module.exports = { initAboutParallax };
