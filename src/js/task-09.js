function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBtn = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');

colorBtn.addEventListener('click', onClick);

function onClick(evt) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  outputColor.textContent = newColor;
}

