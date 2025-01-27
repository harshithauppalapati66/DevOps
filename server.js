const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Setup view engine for dynamic rendering (e.g., if you need to show success page)
app.set('view engine', 'ejs');

// Root route to serve the registration form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Post route to handle form submission
app.post("/register", (req, res) => {
    const { firstName, lastName, email, mobile, password, confirmPassword } = req.body;

    // Perform simple validation
    if (!firstName || !lastName || !email || !mobile || !password || !confirmPassword) {
        return res.status(400).send("All fields are required.");
    }

    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match.");
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send("Please enter a valid email.");
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        return res.status(400).send("Please enter a valid 10-digit mobile number.");
    }

    // If everything is valid, show success
    res.send(`Registration Successful! Welcome, ${firstName} ${lastName}.`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
