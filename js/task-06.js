const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput(evt) {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}