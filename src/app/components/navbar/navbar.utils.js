// src/app/components/navbar/navbar.utils.js
// Vanilla JS helper used during SSR/pre-render or testing

/**
 * Initialises navbar scroll behaviour without Angular DI.
 * Only used for static builds or testing — in Angular, use NavbarComponent HostListener.
 * @param {string} selector - CSS selector for the header element
 * @param {number} offset   - scroll offset in pixels before "scrolled" class applied
 */
function initNavbarScroll(selector = '.navbar', offset = 60) {
  const el = document.querySelector(selector);
  if (!el) return;
  const update = () => el.classList.toggle('scrolled', window.scrollY > offset);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/**
 * Smooth scroll to section by id.
 * @param {string} id - Element id (without #)
 */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

module.exports = { initNavbarScroll, scrollToSection };
