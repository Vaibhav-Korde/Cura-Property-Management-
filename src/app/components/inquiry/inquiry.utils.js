// src/app/components/inquiry/inquiry.utils.js
// Form validation helpers and step-transition animations

/**
 * Validate email address format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate international phone number.
 * @param {string} phone
 * @returns {boolean}
 */
function isValidPhone(phone) {
  return /^\+?[\d\s\-()\[\]]{7,20}$/.test(phone.trim());
}

/**
 * Animate step panel transition.
 * @param {HTMLElement} fromPanel
 * @param {HTMLElement} toPanel
 * @param {'forward'|'backward'} direction
 */
function animateStepTransition(fromPanel, toPanel, direction = 'forward') {
  const offset = direction === 'forward' ? '40px' : '-40px';
  fromPanel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
  fromPanel.style.opacity    = '0';
  fromPanel.style.transform  = `translateX(${direction === 'forward' ? '-40px' : '40px'})`;

  setTimeout(() => {
    fromPanel.style.display = 'none';
    toPanel.style.display   = 'block';
    toPanel.style.opacity   = '0';
    toPanel.style.transform = `translateX(${offset})`;

    requestAnimationFrame(() => {
      toPanel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toPanel.style.opacity    = '1';
      toPanel.style.transform  = 'translateX(0)';
    });
  }, 260);
}

/**
 * Generate a human-readable reference ID.
 * @returns {string}
 */
function generateReferenceId() {
  const prefix = 'CURA';
  const ts     = Date.now().toString(36).toUpperCase();
  const rand   = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

/**
 * Serialize form data to plain object.
 * @param {HTMLFormElement} form
 * @returns {Object}
 */
function serializeForm(form) {
  const data = new FormData(form);
  const obj  = {};
  data.forEach((value, key) => { obj[key] = value; });
  return obj;
}

module.exports = { isValidEmail, isValidPhone, animateStepTransition, generateReferenceId, serializeForm };
