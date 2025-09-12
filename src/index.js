import "./styles.css"

let email = document.getElementById("email");

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

}