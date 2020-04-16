const checkBtn = document.getElementById('theme_toggle');

// Let's grab the part of the DOM that needs to change
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header__title');
const headerToggle = document.querySelector('.header__toggle');
const mainTitleBis = document.querySelector('.main-title-2');
const cards = document.querySelectorAll('.card');
const textGray = document.querySelectorAll('.text-gray');


checkBtn.addEventListener('click', () => {
  if (checkBtn.checked){
    body.classList.add('dark');
    header.classList.add('dark');
    headerTitle.classList.add('dark');
    headerToggle.classList.add('dark');
    mainTitleBis.classList.add('dark');
    cards.forEach(card => card.classList.add('dark'))
    textGray.forEach(text => text.classList.add('dark'))
  } else {
    body.classList.remove('dark');
    header.classList.remove('dark');
    headerTitle.classList.remove('dark');
    headerToggle.classList.remove('dark');
    mainTitleBis.classList.remove('dark');
    cards.forEach(card => card.classList.remove('dark'))
    textGray.forEach(text => text.classList.remove('dark'))
  }
});

// When the page is loading/reloading I want to set the toggle to false
window.onload = () => {
  checkBtn.checked = false;
}
