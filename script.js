const form = document.getElementById("registrationForm");

const successMessage = document.getElementById("successMessage");

const successText = document.getElementById("successText");

const anotherResponseButton =
    document.getElementById("anotherResponseButton");


/* WHEN USER SUBMITS THE FORM */

form.addEventListener("submit", function (event) {

    event.preventDefault();


    /* GET USER INFORMATION */

    const name =
        document.getElementById("name").value;

    const rollNumber =
        document.getElementById("rollNumber").value;

    const year =
        document.getElementById("year").value;

    const department =
        document.getElementById("department").value;

    const section =
        document.getElementById("section").value;

    const email =
        document.getElementById("email").value;


    /* SAVE REGISTRATION IN THIS DEVICE */

    const registration = {
        name: name,
        rollNumber: rollNumber,
        year: year,
        department: department,
        section: section,
        email: email,
        date: new Date().toLocaleString()
    };


    /* GET PREVIOUS REGISTRATIONS */

    let registrations =
        JSON.parse(
            localStorage.getItem("registrations")
        ) || [];


    /* ADD NEW REGISTRATION */

    registrations.push(registration);


    /* SAVE ALL REGISTRATIONS */

    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );


    /* SHOW SUCCESS MESSAGE */

    successText.textContent =
        "Thank you, " +
        name +
        "! Your registration has been submitted successfully.";


    /* HIDE FORM */

    form.style.display = "none";


    /* SHOW SUCCESS BOX */

    successMessage.style.display = "block";

});


/* SUBMIT ANOTHER RESPONSE */

anotherResponseButton.addEventListener(
    "click",
    function () {

        /* HIDE SUCCESS MESSAGE */

        successMessage.style.display = "none";


        /* SHOW FORM AGAIN */

        form.style.display = "flex";


        /* CLEAR PREVIOUS ANSWERS */

        form.reset();


        /* MOVE BACK TO REGISTRATION */

        document
            .getElementById("registration")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);