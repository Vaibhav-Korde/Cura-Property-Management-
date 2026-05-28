// src/app/components/gallery/gallery.utils.js
// Keyboard navigation and lightbox helpers

/**
 * Bind Escape key to close lightbox.
 * @param {Function} closeFn - Function to call on Escape
 */
function bindEscapeToClose(closeFn) {
  const handler = (e) => { if (e.key === 'Escape') closeFn(); };
  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
}

/**
 * Filter gallery items by category key.
 * @param {Array}  items  - Full item array
 * @param {string} filter - Category key ('all' returns everything)
 * @returns {Array}
 */
function filterItems(items, filter) {
  return filter === 'all' ? items : items.filter(i => i.key === filter);
}

module.exports = { bindEscapeToClose, filterItems };
