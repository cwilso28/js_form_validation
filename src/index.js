import "./styles.css"

let email = document.getElementById("email");
let emailError = document.querySelector("#email + span.error")

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