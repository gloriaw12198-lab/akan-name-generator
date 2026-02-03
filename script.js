document.getElementById("name-form")
.addEventListener("submit", function (e) {
    e.preventDefault();

    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("akan-name");

    if (dob === "" || gender === "") {
        result.textContent = "Please enter your date of birth and select a gender.";
        return;
    }

    const date = new Date(dob);
    const day = date.getDay();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];

    const femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
    ];

    let akanName = "";

    if (gender === "male") {
        akanName = maleNames[day];
    } else if (gender === "female") {
        akanName = femaleNames[day];
    }

    result.textContent = `You were born on a ${days[day]}. Your Akan name is ${akanName}.`;
});
