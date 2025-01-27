function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("errorMessage");

    // Clear previous error message
    errorMessage.textContent = "";

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    // Simple validation for empty fields
    if (firstName === "" || lastName === "" || email === "" || mobile === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    // Simple regex for email format
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email!";
        return false;
    }

    // Simple regex for mobile number (10 digits)
    var mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        errorMessage.textContent = "Please enter a valid 10-digit mobile number!";
        return false;
    }

    // If everything is correct
    alert("Registration successful!");
    return true; // allow form submission
}
