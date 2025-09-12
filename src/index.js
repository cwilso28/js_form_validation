import "./styles.css"

let email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validitiy.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    }

    else {
        showError();
    }
})