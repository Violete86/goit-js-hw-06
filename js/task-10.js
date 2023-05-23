function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('button[data-create=""]');
const bntDestroy = document.querySelector('button[data-destroy=""]');
const parentDiv = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);

function createBoxes (amount) {
  let amountEl = document.querySelector('input').value;
for (let i = 1; i <= amountEl; i += 1) {
  const childDiv = document.querySelector('div');
  parentDiv.append(childDiv);
  childDiv.textContent = "Child" + i;
  childDiv.style.backgroundColor = getRandomHexColor();
  childDiv.style.width = 20 + i * 10 + "px";
  childDiv.style.height = 20 + i * 10 + "px";
}
}

bntDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  parentDiv.remove();
};