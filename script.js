document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback')

    const isValid = true;

    const messages = ["this is an error", "try again"];


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInputField = document.getElementById('username');
        const emailInputField = document.getElementById('email');

        const passwordInputField = document.getElementById('password');


        if (usernameInputField.value.trim() === '') {
            errorMessage.textContent = 'This field is required.';
        } else {
            errorMessage.textContent = '';
            form.submit();
        }
        if (usernameInputField.value.length < 3) {
            isValid = false;
            usernameError.textContent = 'Username must be at least 3 characters long.';
            return;
          } else {
            usernameError.textContent = '';
          }

        if (emailInputField.value.trim() === '') {
            errorMessage.textContent = 'This field is required.';
        } else {
            errorMessage.textContent = '';
            form.submit();
        }

        if (passwordInputField.value.trim() === '') {
            errorMessage.textContent = 'This field is required.';
        } else {
            errorMessage.textContent = '';
            form.submit();
        }
    });
});
