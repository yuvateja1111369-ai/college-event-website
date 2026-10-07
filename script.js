const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("message");

    message.textContent =
        "Registration successful! Welcome, " + name + "!";

    form.reset();

});