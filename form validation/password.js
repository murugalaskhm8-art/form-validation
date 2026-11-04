let password = document.getElementById("password").value;

let error = document.getElementById("error");

if (password.length <= 8) {
    alert("Password is valid");
}
else {
    alert("Password must contain at least 8 characters");
}