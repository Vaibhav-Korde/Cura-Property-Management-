// src/app/components/footer/footer.utils.js
// Footer scroll-to-top and section link helpers

/**
 * Smooth scroll to a section by anchor id.
 * @param {string} id - Section id
 */
function scrollTo(id) {
  const el = document.getElementById(id.replace('#', ''));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Initialise all footer anchor links with smooth scroll.
 * @param {string} containerSelector
 */
function initFooterLinks(containerSelector = '.footer') {
  const links = document.querySelectorAll(`${containerSelector} a[href^="#"]`);
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) scrollTo(href);
    });
  });
}

module.exports = { scrollTo, initFooterLinks };
