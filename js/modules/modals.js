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