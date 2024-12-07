// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEpcL79f7YXNhT06va0cMVY4RUQA-ilI",
  authDomain: "colab-93be4.firebaseapp.com",
  projectId: "colab-93be4",
  storageBucket: "colab-93be4.firebasestorage.app",
  messagingSenderId: "804953483227",
  appId: "1:804953483227:web:2d010b66ac17aa98af29fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("signup");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("signed up");
      window.location.href = "/welcome";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
