const COASTER_SELECTOR = '.coaster';
const BUTTON_SELECTOR = '[data-flip]';
const FLIP_CLASS = 'is-flipping';
const BACK_CLASS = 'is-back';
const HALF_FLIP_MS = 350;
const FLIP_MS = 700;

const coaster = document.querySelector(COASTER_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);

function flip() {
  coaster.classList.add(FLIP_CLASS);
  setTimeout(() => coaster.classList.toggle(BACK_CLASS), HALF_FLIP_MS);
  setTimeout(() => coaster.classList.remove(FLIP_CLASS), FLIP_MS);
}

coaster.addEventListener('click', flip);
coaster.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    flip();
  }
});
button.addEventListener('click', flip);
