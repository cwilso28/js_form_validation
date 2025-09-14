import "./styles.css"

let email = document.getElementById("email");
let emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    }

    else {
        showEmailError();
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email address";
    }

    else if (email.validity.typeMismatch) {
        emailError.textContent = "Email must follow the example@example.com format";
    }

    else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength}`;
    }

    emailError.className = "error active"
}

let pwd = document.getElementById("password");
let pwdError = document.querySelector("#password + span.error");

pwd.addEventListener("input", (event) => {
    if (pwd.validity.valid){
        pwdError.textContent = "";
        pwdError.className = "error";
    }

    else {
        showPwdError();
    }
})

function showPwdError() {
    if (pwd.validity.valueMissing) {
        pwdError.textContent = "Please enter a password";
    }
    
    else if (pwd.validity.patternMismatch || pwd.validity.tooShort) {
        pwdError.textContent = "Password must be at least 8 characters long, with one symbol, one capital letter, and one number";
    }
    pwdError.className = "error active";
};

let pwdConfirm = document.getElementById("pw_confirm");
let pwdConfirmError = document.querySelector("#pw_confirm + span.error");

pwdConfirm.addEventListener("input", (event) => {
    if (pwdConfirm.validity.valid && pwdConfirm.value === pwd.value) {
        pwdConfirmError.textContent = "";
        pwdConfirmError.className = "error";
    }

    else {
        showPwdConfirmError();
    }
})

function showPwdConfirmError() {
    if (pwdConfirm.validity.valueMissing) {
        pwdConfirmError.textContent = "Please confirm password";
    }

    else if (!(pwdConfirm.value === pwd.value)) {
        pwdConfirmError.textContent = "Does not match password!";
    }

    pwdConfirmError.className = "error active";
}