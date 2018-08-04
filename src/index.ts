Array.from(document.getElementsByTagName('path')).map(path => {
  console.log(path.getTotalLength());
  const debugPath: SVGPathElement = <any>path.cloneNode();
  debugPath.classList.add('line--debug');
  if (path.parentNode) path.parentNode.insertBefore(debugPath.cloneNode(), path);
});
// window.addEventListener('click', () => {
Array.from(document.getElementsByClassName('menu')).map(menu => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
});
// });
