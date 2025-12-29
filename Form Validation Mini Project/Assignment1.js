console.log("Form validation");

    function validate() {



        document.querySelectorAll(".error").forEach(e => e.innerText = "");


        var dob = document.getElementById("dob");



        //1 Blabk check


        var name = document.getElementById("uname");
        var nameerror = document.getElementById("nameerr");
        var namePattern = /^[A-Za-z ]+$/;

        if (name.value === "") {
            nameerror.innerHTML = "Name is required";
            name.style.border = "2px solid red";
            return false;
        } else if (!namePattern.test(name.value)) {
            nameerror.innerHTML = "Name must contain only alphabates";
            name.style.border = "2px solid red";
            return false;

        } else {
            nameerror.innerHTML = "";
        }

        if (dob.value === "") {
            document.getElementById("doberr").innerText = "Select DOB";
            dob.style.border = "2px solid red";
            return false;
        } else {
            var age = new Date().getFullYear() - new Date(dob.value).getFullYear();
            if (age < 18) {
                document.getElementById("doberr").innerText = "Age must be 18+";
                dob.style.border = "2px solid red";
                return false;
            } else {
                dob.style.border = "2px solid green";
            }
        }

        var gender = document.querySelector('input[name="gender"]:checked');
        var genderError = document.getElementById("gendererr");

        if (!gender) {

            genderError.innerHTML = "Please select gender";
            return false;
        } else {
            genderError.innerHTML = "";
        }

        var email = document.getElementById("umail").value;
        var emailerror = document.getElementById("emailerr");

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailerror.innerHTML = "Email is required";
            email.style.border = "2px solid red";
            return false;
        } else if (!emailPattern.test(email)) {
            emailerror.innerHTML = "ENter a valid email";
            email.style.border = "2px solid red";
            return false;
        } else {
            emailerror.innerHTML = "";
        }


        var userName = document.getElementById("userName").value;
        var usernameError = document.getElementById("usererr");

        if (userName === "") {
            usernameError.innerHTML = "Username is required";
            //userName.style.border = "2px solid red";
            return false;
        } else if (userName.length < 8 || userName.length > 20) {
            usernameError.innerHTML = "Username must be between 8 and 14 characters";
            //userName.style.border = "2px solid red";
            return false;
        } else if (!/^[0-9A-Za-z ]+$/.test(userName)) {
            usernameError.innerHTML = "Special characters are not allowed";
            // userName.style.border = "2px solid red";
            return false;
        } else {
            usernameError.innerHTML = "";
            // userName.style.border = "2px solid green";
        }


        var pass = document.getElementById("upass").value;
        var passErr = document.getElementById("passerr");

        if (pass === "") {
            passErr.innerHTML = "Password is required";
            return false;
        } else if (pass.length < 8 || pass.length > 14) {
            passErr.innerHTML = "Password in between 8-14 character";
            return false;
        } else if (!/[A-Z]/.test(pass)) {
            passErr.innerHTML = "Password has contain atleast one upper case";
            return false;
        } else if (!/[0-9]/.test(pass)) {
            passErr.innerHTML = "Password has contain atleast one number";
            return false;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
            passErr.innerHTML = "Password has contain atleast one speacial character";
            return false;
        } else {
            passErr.innerHTML = "";
        }



        var confirmPass = document.getElementById("cpass").value;
        var confirmPassErr = document.getElementById("cpasserr");

        if (confirmPass === "") {
            confirmPassErr.innerHTML = "Please confirm password first";
            return false;
        } else if (confirmPass !== pass) {
            confirmPassErr.innerHTML = "Password not matching";
            return false;
        } else {
            confirmPassErr.innerHTML = "";
        }



        var mobile = document.getElementById("mob").value;
        var mobileErr = document.getElementById("moberr");


        if (mobile === "") {
            mobileErr.innerHTML = "Mobile number is must";
            return false;
        } else if (!/^[0-9]{10}$/.test(mobile)) {
            mobileErr.innerHTML = "Mobile number muct be exactly 10 digits";
            return false;
        } else {
            mobileErr.innerHTML = "";
        }


        var country = document.getElementByName("cun").value;
        var countryErr = document.getElementById("cuntryerr");

        if (country === "") {
            countryErr.innerHTML = "Country can not be null";
        } else {
            countryErr.innerHTML = "";
        }





        var country = document.querySelector('input[name="cun"]:checked');
        var countryErr = document.getElementById("cuntryerr");

        if (!country) {

            countryErr.innerHTML = "Please select country";
            return false;
        } else {
            countryErr.innerHTML = "";
        }



        var skills = document.querySelector('input[name="ski"]:checked');
        var skillsError = document.getElementById("skillserr");

        if (skills.length < 2) {
            skillsError.innerHTML = "Select at least two skills";
            return false;
        } else {
            skillsError.innerHTML = "";
        }



        var experience = document.querySelector('input[name="experience"]:checked');
        var experienceError = document.getElementById("experr");

        if (!experience) {
            experienceError.innerHTML = "Please select experience level";
            return false;
        } else {
            experienceError.innerHTML = "";
        }


        var salary = document.getElementById("salary").value;
        var salaryError = document.getElementById("salaryerr");

        if (salary === "") {
            salaryError.innerHTML = "Expected salary is required";
            return false;
        } else if (salary <= 0) {
            salaryError.innerHTML = "Salary must be greater than zero";
            return false;
        } else {
            salaryError.innerHTML = "";
        }



        var terms = document.getElementById("terms");
        var termsError = document.getElementById("termerr");

        if (!terms.checked) {
            termsError.innerHTML = "You must accept the terms and conditions";
            return false;
        } else {
            termsError.innerHTML = "";
        }

        return true;

    }