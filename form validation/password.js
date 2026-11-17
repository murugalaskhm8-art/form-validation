let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");
    if (password.length >=8) {
        errorMsg.textContent = "Password must contain at least 8 characters";
        errorMsg.style.color = "red";
    } else {
        errorMsg.textContent = "";
        alert("Password is valid");
    }
});
