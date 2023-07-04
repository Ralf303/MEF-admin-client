function validateForm() {
  var username = document.getElementById("login-name").value;
  var password = document.getElementById("login-pass").value;
  var usernameError = document.getElementById("username-error");
  var passwordError = document.getElementById("password-error");

  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  if (username === "") {
    usernameError.innerHTML = "Please enter a username";
    return false;
  }

  if (password === "") {
    passwordError.innerHTML = "Please enter a password";
    return false;
  }

  fetch("http://localhost:5000/users/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data === true) {
        // Save username to local storage
        localStorage.setItem("username", username);
        // Redirect to users.html
        window.location.href = "users.html";
      } else {
        alert("Invalid username or password");
      }
    });
}
