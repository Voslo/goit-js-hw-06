const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

onInput();

input.addEventListener('input', onInput);

function onInput(evt) {
  text.style.fontSize = `${input.value}px`;
}
