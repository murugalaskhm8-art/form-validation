let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let password = document.getElementById("password").value;

    if (password.length <= 8) {
        alert("Password is valid");
    }
    else {
        alert("Password must contain at least 8 characters");
    }

});