<<<<<<< HEAD

=======
>>>>>>> 157394cda2b9a191881e5b6e97868d9a947ff86d
const author = "love and abhi";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("formModal");
  const closeModal = document.getElementById("closeModal");
<<<<<<< HEAD
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

=======

  // Show the modal when the page loads
  modal.style.display = "flex";

  // Close the modal when the close button is clicked
  closeModal.onclick = () => {
    modal.style.display = "none";
  };
});

const signUpForm = document.getElementById("sign-up");
const signInForm = document.getElementById("sign-in");
const signUpButton = document.querySelector(".signup");
const loginButton = document.querySelector(".login");

signUpButton.addEventListener("click", () => {
  signUpForm.style.display = "block"; // Show Sign Up form
  signInForm.style.display = "none"; // Hide Log In form
});

// Show the Log In form and hide the Sign Up form
loginButton.addEventListener("click", () => {
  signUpForm.style.display = "none"; // Hide Sign Up form
  signInForm.style.display = "block"; // Show Log In form
});
>>>>>>> 157394cda2b9a191881e5b6e97868d9a947ff86d
