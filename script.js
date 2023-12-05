const form = document.querySelector('form');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', (event) => {
    if (password.value === confirm_password.value) {
        password.classList.remove('error');
        confirm_password.classList.remove('error');
        alert('Form submitted. Thanks!');
    } else {
        password.classList.add('error');
        confirm_password.classList.add('error');
        event.preventDefault();
    }
});