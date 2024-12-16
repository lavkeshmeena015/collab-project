const author = "love and abhi";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("formModal");
  const closeModal = document.getElementById("closeModal");
  const main_hero = document.getElementById("main-hero");

  modal.style.display = "flex";
  main_hero.style.display = "none"

  closeModal.onclick = () => {
    modal.style.display = "none";
    main_hero.style.display = "block"
  };
});

const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
const signUpButton = document.getElementById('signup');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', function() {
    signUpForm.style.display = 'none';  // Show Sign Up form
    signInForm.style.display = 'block';  // Hide Log In form
});

signUpButton.addEventListener('click', function() {
    signUpForm.style.display = 'block';  // Show Sign Up form
    signInForm.style.display = 'none';  // Hide Log In form
});

