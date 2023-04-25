function validateForm() {
    var name = document.forms["surveyForm"]["name"].value;
    var age = document.forms["surveyForm"]["age"].value;
    var gender = document.forms["surveyForm"]["gender"].value;
    var email = document.forms["surveyForm"]["email"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    if (age == "") {
        alert("Please enter your age.");
        return false;
    }
    if (gender == "") {
        alert("Please select your gender.");
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (document.getElementById("comments").value.length > 100) {
        alert("Comments should not exceed 100 characters.");
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}