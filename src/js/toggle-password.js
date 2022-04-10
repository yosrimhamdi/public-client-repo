const eyeIcons = document.querySelectorAll('.eye-icon');

const toggleIcon = eyeIcon => {
  const src = eyeIcon.getAttribute('src');

  if (src.endsWith('eye-solid.svg')) {
    eyeIcon.setAttribute('src', '../src/images/eye-slash-solid.svg');
  } else {
    eyeIcon.setAttribute('src', '../src/images/eye-solid.svg');
  }
};

const togglePasswordVisibility = eyeIcon => {
  const passwordInput = eyeIcon.previousElementSibling;

  if (passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
};

eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    toggleIcon(eyeIcon);

    togglePasswordVisibility(eyeIcon);
  });
});
