const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInput);
function onInput(evt) {
    output.textContent = evt.target.value === '' ? 'Anonymous' : evt.target.value;
}