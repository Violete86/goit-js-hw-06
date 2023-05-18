function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBackground() {
  let colocrhexCod = getRandomHexColor();
  let backgroundColor = document.body.style.backgroundColor = getRandomHexColor();
  let text = document.querySelector('.color');
  text.textContent = backgroundColor;
}

let button = document.querySelector('.change-color');
button.addEventListener('click', changeBackground);