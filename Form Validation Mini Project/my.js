console.log("form validation");

function validate() {

    var uname = document.getElementById("uname").value;
    var upass = document.getElementById("upass").value;
    var repass = document.getElementById("uconfirm").value;
    var dob = document.getElementById("udate").value;

    // 1. Blank check
    if (uname.trim() === "" || upass.trim() === "") {
        alert("Name and Password cannot be blank");
        return false;
    }

    // 2. Password length
    if (upass.length < 8 || upass.length > 14) {
        alert("Password must be 8–14 characters long");
        return false;
    }

    // 3. Uppercase check
    if (!upass.match(/[A-Z]/)) {
        alert("Password must contain at least one uppercase letter");
        return false;
    }

    // 4. Lowercase check
    if (!upass.match(/[a-z]/)) {
        alert("Password must contain at least one lowercase letter");
        return false;
    }

    // 5. Confirm password
    if (upass !== repass) {
        alert("Passwords do not match");
        return false;
    }

    // 6. Date of birth check
    if (dob === "") {
        alert("Please select your date of birth");
        return false;
    }

    // 7. Age check
    var dobDate = new Date(dob);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobDate.getFullYear();

    if (age < 18) {
        alert("Candidate must be at least 18 years old");
        return false;
    }

    // 8. Gender check
    var gender = document.getElementsByName("gender");
    var selected = false;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selected = true;
            break;
        }
    }

    if (!selected) {
        alert("Please select your gender");
        return false;
    }
    var check = document.getElementById("terms").value;
    if(!(check.checked)){
        alert("pleas acept our tream and condiation")
    }
    // ✅ All validations passed
    alert("Form submitted successfully!");
    return true;
}