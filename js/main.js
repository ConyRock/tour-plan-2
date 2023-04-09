// slider
const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

});

// menu button
const btn = document.querySelector('[data-menu-button]')

btn.addEventListener('click', () => {
  document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom_visible')
})


// modal booking 
const modalOpen = document.querySelector('[data-modal-open]')

modalOpen.addEventListener('click', () => {
  document.querySelector('.modal__overlay').classList.add('modal__overlay_visible')
  document.querySelector('.modal__dialog').classList.add('modal__dialog_visible')
})

// close button
const modalCloseButton = document.querySelector('[data-modal-close-button]')

modalCloseButton.addEventListener('click', () => {
  document.querySelector('.modal__overlay').classList.remove('modal__overlay_visible')
  document.querySelector('.modal__dialog').classList.remove('modal__dialog_visible')
})

// close overlay
const modalCloseOverlay = document.querySelector('[data-modal-close-overlay]')

modalCloseOverlay.addEventListener('click', () => {
  document.querySelector('.modal__overlay').classList.remove('modal__overlay_visible')
  document.querySelector('.modal__dialog').classList.remove('modal__dialog_visible')
})