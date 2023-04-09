
// menu button
const btn = document.querySelector('[data-menu-button]')

btn.addEventListener('click', () => {
  document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom_visible')
})