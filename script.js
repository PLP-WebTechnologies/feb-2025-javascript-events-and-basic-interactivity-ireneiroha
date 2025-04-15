const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const successMessage = document.getElementById('successMessage');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');

// Event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();
  let isValid = validateForm();

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});

// Real-time validation on blur
nameInput.addEventListener('blur', () => validateField('name'));
emailInput.addEventListener('blur', () => validateField('email'));
ageInput.addEventListener('blur', () => validateField('age'));

// Theme toggle interaction
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function validateForm() {
  let valid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  if (ageInput.value < 18 || ageInput.value === '') {
    ageError.textContent = "You must be at least 18.";
    valid = false;
  }

  return valid;
}

function validateField(field) {
  if (field === 'name' && nameInput.value.trim() === '') {
    nameError.textContent = "Name is required.";
  } else if (field === 'email' && !validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
  } else if (field === 'age' && (ageInput.value < 18 || ageInput.value === '')) {
    ageError.textContent = "You must be at least 18.";
  }
}

function validateEmail(email) {
  return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  ageError.textContent = '';
  successMessage.textContent = '';
}
