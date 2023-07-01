const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');

    ratingInput.addEventListener('input', function() {
      ratingValue.textContent = ratingInput.value;
    });

    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('password-confirm');

    form.addEventListener('submit', function(event) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();
        alert('Passwords do not match. Please try again.');
        usernameInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        usernameInput.focus();
      }
    });