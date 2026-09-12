//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Check if credentials already exist
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existing.style.display = "block";
}

// Form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert("Logged in as " + user);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    existing.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existing.style.display = "none";
  }
});

// Existing user login
existing.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");

  alert("Logged in as " + savedUsername);
});