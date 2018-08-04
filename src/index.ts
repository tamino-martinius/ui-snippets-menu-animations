console.log('Hello World');
// window.addEventListener('click', () => {
Array.from(document.getElementsByClassName('menu')).map(menu => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
});
// });
