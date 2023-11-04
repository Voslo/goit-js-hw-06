function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('#controls [data-create]');
const destroyButton = document.querySelector('#controls [data-destroy]');

createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  let currentSize = 30;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color: ${color};"></div>`;
    currentSize += 10;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}
