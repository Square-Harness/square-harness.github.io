const contactDialog = document.querySelector('#contact-dialog');
const contactOpen = document.querySelector('[data-contact-open]');
const contactClose = document.querySelector('[data-contact-close]');

contactOpen.addEventListener('click', () => contactDialog.showModal());
contactClose.addEventListener('click', () => contactDialog.close());
contactDialog.addEventListener('click', (event) => {
  if (event.target !== contactDialog) return;
  const bounds = contactDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    contactDialog.close();
  }
});
contactOpen.hidden = false;

const contactForm = document.querySelector('.contact-form');
const contactStatus = document.querySelector('[data-contact-status]');
const contactSend = contactForm.querySelector('button[type="submit"]');
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (contactSend.disabled || !contactForm.reportValidity()) return;
  contactSend.disabled = true;
  contactSend.textContent = 'Sending…';
  contactStatus.textContent = '';
  const fields = new FormData(contactForm);
  let failureMessage = '';
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(['name', 'email', 'message', '_honey'].map(key => [key, fields.get(key) || '']))),
      signal: AbortSignal.timeout(12000),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) {
      failureMessage = typeof result.error === 'string' ? result.error : 'Delivery could not be confirmed. Please try again later.';
      throw new Error('Delivery failed');
    }
    contactForm.reset();
    contactStatus.textContent = 'Message sent to the team.';
  } catch {
    contactStatus.textContent = failureMessage || 'Delivery could not be confirmed. Please wait before trying again.';
  } finally {
    contactSend.disabled = false;
    contactSend.textContent = 'Send message';
  }
});
