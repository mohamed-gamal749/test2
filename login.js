
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Correct username and password
const correctUsername = "admin";
const correctPassword = "12345";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    message.textContent = "Login successful! Redirecting...";
    message.className = "success";

    setTimeout(() => {
      window.location.href = "oo.html";
    }, 2000);
  } else {
    message.textContent = "Incorrect username or password.";
    message.className = "error";
  }
});