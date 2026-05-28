// src/app/components/hero/hero.utils.js
// Helper utilities for hero animations (used in testing / standalone builds)

/**
 * Animate counter from 0 to target value.
 * @param {HTMLElement} el       - Element to animate
 * @param {number}      target   - Final value
 * @param {number}      duration - Animation duration in ms
 * @param {string}      suffix   - Suffix to append ('+', 'k+', etc.)
 */
function animateCounter(el, target, duration = 1800, suffix = '') {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const current  = Math.floor(easeOut(progress) * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

/**
 * Observe element and run callback when it enters viewport.
 * @param {string}   selector - CSS selector
 * @param {Function} callback - Function to run on intersection
 */
function onVisible(selector, callback) {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { callback(e.target); observer.unobserve(e.target); } }),
    { threshold: 0.2 }
  );
  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

module.exports = { animateCounter, onVisible };
