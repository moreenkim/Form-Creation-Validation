document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback')

    

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isValid = true;

    const messages = [];


        const usernameInputField = document.getElementById('username');
        const emailInputField = document.getElementById('email');

        const passwordInputField = document.getElementById('password');


        if (usernameInputField.value.trim() === '') {
            errorMessage.textContent = 'This field is required.';
        } else {
            errorMessage.textContent = '';
            form.submit();
        };

        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        };

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must include both "@" and "." characters.');
        };

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
