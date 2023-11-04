const login = document.querySelector('.login-form');

login.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { elements } = evt.target;
    const email = elements.email.value;
    const password = elements.password.value;
    const formData ={}

    if (email === '' || password === '') {
        return alert('Заповніть всі поля!')
    } else {
        formData.email = email;
        formData.password = password;
    }

    console.log(formData);
    evt.target.reset();
}
