document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = true;

    const messages = [];
    const feedbackDiv = document.getElementById("form-feedback");

    const usernameInputField = document.getElementById("username");
    const emailInputField = document.getElementById("email");

    const passwordInputField = document.getElementById("password");

    if (usernameInputField.value.trim() === "") {
      errorMessage.textContent = "This field is required.";
    } else {
      errorMessage.textContent = "";
      form.submit();
    }

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    if (emailInputField.value.trim() === "") {
      errorMessage.textContent = "This field is required.";
    } else {
      errorMessage.textContent = "";
      form.submit();
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push('Email must include both "@" and "." characters.');
    }

    if (passwordInputField.value.trim() === "") {
      errorMessage.textContent = "This field is required.";
    } else {
      errorMessage.textContent = "";
      form.submit();
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    };;

    feedbackDiv.style.display = 'block';
        if (!isValid) {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; 
        } else {
            feedbackDiv.innerHTML = 'Registration successful!'; 
            feedbackDiv.style.color = '#28a745'; 
        }
  });
});
