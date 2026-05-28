// src/app/components/services/services.utils.js
// Intersection Observer for card entrance animations

/**
 * Set up staggered card reveal on scroll.
 * @param {string} cardSelector - CSS selector for service cards
 */
function initServiceCardAnimations(cardSelector = '.services__card') {
  const cards = document.querySelectorAll(cardSelector);
  if (!cards.length) return;

  cards.forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(24px)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card  = entry.target;
          const delay = parseFloat(card.style.animationDelay || '0');
          setTimeout(() => {
            card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
            card.style.opacity    = '1';
            card.style.transform  = 'translateY(0)';
          }, delay * 1000);
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach(card => observer.observe(card));
}

module.exports = { initServiceCardAnimations };
