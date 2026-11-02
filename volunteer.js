// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

// Select the form, email input, and interest dropdown by their ids.
const form = document.querySelector("#volunteerForm");
const emailInput = document.querySelector("#email");
const interestSelect = document.querySelector("#interest");

// Run this function every time the form is submitted.
form.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page / submitting normally.
    event.preventDefault();

    // Read what the user typed or selected.
    // .trim() removes extra spaces, so "   " counts as empty.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestSelect.value;

    // Check for missing information, one field at a time, in order.
    if (name === "") {
        result.textContent = "Please enter your full name.";
    } else if (email === "") {
        result.textContent = "Please enter your email address.";
    } else if (interest === "") {
        result.textContent = "Please select an area of interest.";

    // Everything is filled in: show a message based on the interest chosen.
    } else if (interest === "outreach") {
        result.textContent = "Thanks, " + name + "! Our Community Outreach team will email you about upcoming neighborhood events and service projects.";
    } else if (interest === "events") {
        result.textContent = "Thanks, " + name + "! We'll email you about helping with setup, registration, and cleanup at our next event.";
    } else if (interest === "mentoring") {
        result.textContent = "Thanks, " + name + "! We'll email you about mentoring opportunities with local youth, including training and scheduling.";
    } else {
        // Safety net in case an unexpected value ever shows up.
        result.textContent = "Thanks, " + name + "! We'll be in touch soon.";
    }
});