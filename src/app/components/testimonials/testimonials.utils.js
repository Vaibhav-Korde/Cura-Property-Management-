// src/app/components/testimonials/testimonials.utils.js
// Touch/swipe support for testimonial carousel (mobile)

/**
 * Enable swipe gestures on carousel element.
 * @param {HTMLElement} el        - Carousel track element
 * @param {Function}    onNext    - Callback for swipe left (next)
 * @param {Function}    onPrev    - Callback for swipe right (prev)
 * @param {number}      threshold - Minimum swipe distance in px
 */
function enableSwipe(el, onNext, onPrev, threshold = 60) {
  let startX = 0;
  let isDragging = false;

  el.addEventListener('touchstart', (e) => {
    startX    = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  el.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const delta = startX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > threshold) {
      delta > 0 ? onNext() : onPrev();
    }
    isDragging = false;
  }, { passive: true });
}

module.exports = { enableSwipe };
