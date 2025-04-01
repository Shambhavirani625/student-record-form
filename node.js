document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", validateForm);
});

function validateForm(event) {
    event.preventDefault();
    
    let isValid = true;

    let name = document.getElementById("name");
    let roll = document.getElementById("roll");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let dob = document.getElementById("dob");
    let course = document.getElementById("course");
    let gender = document.getElementById("gender");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^\d{10}$/;
    let rollPattern = /^[a-zA-Z0-9]+$/;
    let today = new Date();
    let birthDate = new Date(dob.value);

    resetErrors();

    if (!name.value.trim()) {
        showError(name, "Full Name is required.");
        isValid = false;
    }

    if (!roll.value.trim() || !rollPattern.test(roll.value)) {
        showError(roll, "Roll number must be alphanumeric.");
        isValid = false;
    }

    if (!email.value.trim() || !emailPattern.test(email.value)) {
        showError(email, "Enter a valid email.");
        isValid = false;
    }

    if (!phone.value.trim() || !phonePattern.test(phone.value)) {
        showError(phone, "Enter a valid 10-digit phone number.");
        isValid = false;
    }

    if (!dob.value || birthDate >= today) {
        showError(dob, "Date of Birth must be a past date.");
        isValid = false;
    }

    if (!course.value) {
        showError(course, "Please select a course.");
        isValid = false;
    }

    if (!gender.value) {
        showError(gender, "Please select a gender.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}

function showError(input, message) {
    let errorText = document.createElement("small");
    errorText.className = "error-message";
    errorText.textContent = message;
    input.style.border = "1px solid red";
    input.parentNode.appendChild(errorText);
}

function resetErrors() {
    document.querySelectorAll(".error-message").forEach(error => error.remove());
    document.querySelectorAll("input, select").forEach(input => input.style.border = "1px solid #ccc");
}
