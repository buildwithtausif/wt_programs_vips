// get input field for validation
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
// check for valid email using regEx , this one is official of microsoft (found on stackoverflow)
const validEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

document.getElementById("registerBtn").addEventListener("click", function () {
    if (validEmail.test(email.value) && pass.value !== "" && name.value !== "") {
        // hide registration form
        document.getElementById("registerForm").classList.add("d-none");
        // show login form
        document.getElementById("loginForm").classList.remove("d-none");
    } else {
        alert("One of the fields are empty \nor email is invalid");
    }
});
