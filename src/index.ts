Array.from(document.getElementsByTagName('path')).map(path => {
  console.log(path.getTotalLength());
  const debugPath: HTMLElement = <any>path.cloneNode();
  debugPath.classList.add('line--debug');
  if (path.parentNode) path.parentNode.insertBefore(debugPath.cloneNode(), path);
});
const debugCheckbox: HTMLInputElement = <any>document.getElementById('debug');
debugCheckbox.addEventListener('change', () => {
  if (debugCheckbox.parentElement) {
    if (debugCheckbox.checked) {
      debugCheckbox.parentElement.classList.add('active');
    } else {
      debugCheckbox.parentElement.classList.remove('active');
    }
  }
});
let currentActive = 0;
const checkboxes: HTMLInputElement[] = <any>document.querySelectorAll('.grid input');
const autoShow = setInterval(() => {
  checkboxes[currentActive % 4].checked = !checkboxes[currentActive % 4].checked;
  if (!checkboxes[currentActive % 4].checked) currentActive += 1;
}, 1000);
const grid = document.querySelector('.grid');
if (grid) {
  grid.addEventListener('click', () => {
    clearInterval(autoShow);
  });
}
