
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const signin = document.getElementById("sign-in");
signin.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User signed in:", user);

            // Display a success message (can be replaced with a modal or other UI)
            alert("Successfully logged in!");

            // Redirect user to another page (for example: /welcome.html)
            window.location.href = '/welcome.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle errors (e.g., wrong credentials, network error, etc.)
            console.error("Error Code:", errorCode);
            console.error("Error Message:", errorMessage);

            // Optionally, show an error message to the user (UI element)
            alert("Error: " + errorMessage);
        });
})


const signup = document.getElementById("sign-up");
signup.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(email, password)
            // Signed up 
            const user = userCredential.user;
            alert("signed up")
            const closeModal = document.getElementById("closeModal");

            closeModal.onclick = () => {
                modal.style.display = "none";
            };
            window.location.href = '/welcome.html?';
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            if (errorCode === 'auth/email-already-in-use') {
                alert("You have already registered with this email.");
            } else {
                console.error("Error during sign up:", errorMessage);
            }
        });
})