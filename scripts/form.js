// Function to check if the password and confirm password fields match
function checkPasswordMatch() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const message = document.getElementById('passwordMatchMessage');

    if (password.value !== confirmPassword.value) {
        message.textContent = 'Passwords do not match';
        password.focus();
    } else {
        message.textContent = '';
    }
}

// Function to update the displayed value for the page rating
function updateRatingValue() {
    const ratingValue = document.getElementById('ratingValue');
    const pageRating = document.getElementById('pageRating');

    ratingValue.textContent = pageRating.value;
}