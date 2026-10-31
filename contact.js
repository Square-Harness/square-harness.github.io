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
