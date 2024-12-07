const author = "love and abhi";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("formModal");
  const closeModal = document.getElementById("closeModal");

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
