const buttons = document.querySelectorAll('[data-modal-button]')
const navBtn = document.querySelector('.nav_btn')
const nav = document.querySelector('.nav_list')
const modals = document.querySelectorAll('[data-modal]')
const closeButtons = document.querySelectorAll('[data-modal-close]')
const headBtn = document.querySelector('.header_button')
buttons.forEach((e) => {
  e.addEventListener('click', function () {
    const buttonId = this.dataset.modalButton
    modals.forEach((e) => e.classList.add('hidden'))
    let tab = document.querySelector(`#${buttonId}`)
    tab.classList.remove('hidden')
  })
})

closeButtons.forEach((e) => {
  e.addEventListener('click', function () {
    modals.forEach((e) => e.classList.add('hidden'))
  })
})

navBtn.addEventListener('click', function () {
  nav.classList.toggle('active')
  headBtn.classList.toggle('hidden')
})
nav.addEventListener('click', function () {
  nav.classList.remove('active')
})
