// src/app/components/stats/stats.utils.js
// Counter animation utility (standalone / testing)

/**
 * Animate all elements matching selector from 0 to their data-target value.
 * @param {string} selector
 * @param {number} duration ms
 */
function runCounterAnimations(selector = '.stats__number', duration = 1800) {
  document.querySelectorAll(selector).forEach(el => {
    const target = parseInt(el.dataset.target || el.textContent || '0', 10);
    const suffix = (el.textContent || '').replace(/[\d,]/g, '').trim();
    let start = null;
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(easeOutCubic(p) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

module.exports = { runCounterAnimations };
