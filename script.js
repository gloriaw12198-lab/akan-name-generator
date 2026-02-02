
function generateAkanName() {
    // Get input values
    const dob = document.getElementById("Date of birth").value;
    const gender = document.getElementById("Gender").value;

    // Parse date of birth
    const birthDate = new Date(dob);
    const day = birthDate.getDay(); // 0 = Sunday, 1 = Monday, ...

    // Akan names based on day of the week
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Determine Akan name
    let akanName;
    if (gender === "male") {
        akanName = maleNames[day];
    } else if (gender === "female") {
        akanName = femaleNames[day];
    } else {
        akanName = "Please select a gender.";
    }

    // Display the result
    document.getElementById("akan name").innerText = `Your Akan name is: ${akanName}`;
}
return 

