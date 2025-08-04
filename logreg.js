const body = document.querySelector("body");
const logRegister = document.querySelector(".log-register");
const form = document.querySelector("form");
const form1 = document.querySelector("form1");
const overLay = document.querySelector(".overlay");
// Select the input fields and buttons for registration and login

const regBtn = document.querySelector(".reg-btn");
const logBtn = document.querySelector(".log-btn");
const bar = document.querySelector(".bar");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");
const slider = document.querySelector(".banner .slider");
const navClose = document.querySelector("#close-nav");
const msgEl = document.querySelector("#message");

/*regBtn.addEventListener("click", () => {
  username = Username.value;
  password = Password.value;
  email = Email.value;
  if (Username.value === "" || Password.value === "" || Email.value === "") {
    alert("Please fill in all fields");
  } else {
    logRegister.style.transform = "scale(0)";
    form.style.transform = "translateX(0px)";
    form1.style.transform = "translateX(320px)";
    logRegister.style.height = "360px";
    overLay.style.transform = "translateX(0px)";
    overLay.style.width = "300px";
  }
});*/

function registered() {
  const username = document.querySelector("#r-username").value;
  const password = document.querySelector("#r-password").value;
  const email = document.querySelector("#r-email").value;
  const msgEl = document.querySelector("#message");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  localStorage.setItem("users", JSON.stringify(users));

  // Check if the input fields are not empty
  if (username === "" || password === "" || email === "") {
    console.log("Please fill in all fields");
    msgEl.textContent = "Please fill in all fields!";
    msgEl.style.color = "red";
    setTimeout(() => {
      msgEl.textContent = ""; // Clear the message after 1 second
    }, 2500);
    return; // Exit the function if any field is empty
  }

  const userExist = users.some((user) => user.username === username);

  if (userExist) {
    console.log(username, password, email);

    msgEl.textContent = "Username already exists!";
    msgEl.style.color = "red";
    document.querySelector("#r-username").value = "";
    document.querySelector("#r-password").value = "";
    document.querySelector("#r-email").value = "";
    setTimeout(() => {
      msgEl.textContent = ""; // Clear the message after 2 seconds
    }, 2500);
  } else {
    users.push({ username, password, email });
    localStorage.setItem("users", JSON.stringify(users));

    msgEl.textContent = "Registration successful!";
    msgEl.style.color = "green";
    document.querySelector("#r-username").value = "";
    document.querySelector("#r-password").value = "";
    document.querySelector("#r-email").value = "";

    setTimeout(function () {
      window.location.reload(); // Reload the page after successful registration
    }, 3000);
    return;
  }
}

document
  .getElementById("r-username")
  .addEventListener("keyup", function (event) {
    console.log("Key pressed in username field");
    if (event.key === "Enter") {
      document.getElementById("r-email").focus();
      return;
    }
  });

document.querySelector("#r-email").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("r-password").focus();
    return;
  }
});

document
  .getElementById("l-username")
  .addEventListener("keyup", function (event) {
    console.log("Key pressed in username field");
    if (event.key === "Enter") {
      document.getElementById("l-password").focus();
      return;
    }
  });

function loginS() {
  console.log("Login function called");
  const username = document.querySelector("#l-username").value;
  const password = document.querySelector("#l-password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const msgEl2 = document.querySelector("#l-message");
  const masg = document.querySelector("#msg");
  localStorage.setItem("users", JSON.stringify(users));

  // Check if the input fields are not empty
  if (username === "" || password === "") {
    msgEl2.textContent = "Please fill in all fields!";
    msgEl2.style.color = "red";

    setTimeout(() => {
      msgEl2.textContent = "";
    }, 1000);
    return; // Exit the function if any field is empt
  }

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    msgEl2.textContent = `Login successful! Welcome, ${user.username}!`;
    msgEl2.style.color = "green";

    document.getElementById("l-username").value = "";
    document.getElementById("l-password").value = "";
    setTimeout(() => {
      window.location.href = "game.html"; // Redirect to index.html after successful login
      localStorage.setItem("username", user.username); // Store the username in localStorage
      document.getElementById(
        "msg"
      ).textContent = `Player: ${user.username} Play yor move!`;
    }, 3000); // Delay the redirect for 2 seconds to allow the message to be
  } else {
    msgEl2.textContent = "Invalid username or password!";
    msgEl2.style.color = "red";
    setTimeout(() => {
      msgEl2.textContent = "";
    }, 2500);
  }
}

function logregister() {
  logRegister.style.transform = "scale(1)";
  overLay.style.transform = "translateX(320px)";
  document.getElementById("l-username").value = "";
  document.getElementById("l-password").value = "";

  // Toggle the form's transform property to switch between login and registration
  if (form.style.transform === "translateX(-320px)") {
    form.style.transform = "translateX(0px)";
    form1.style.transform = "translateX(320px)";
    logRegister.style.height = "360px";
  } else if (window.matchMedia("(max-width: 420px)").matches) {
    overLay.style.transform = "translateX(0)";
    overLay.style.transform = "scaleX(0)";
    nav.style.width = "0px";
    navUl.style.width = "0px";
  }
}

function logIn() {
  logRegister.style.transform = "scale(1)";
  overLay.style.transform = "translateX(320px)";
  document.getElementById("l-username").value = "";
  document.getElementById("l-password").value = "";

  // Toggle the form's transform property to switch between login and registration
  if (form.style.transform === "translateX(-320px)") {
    form.style.transform = "translateX(0px)";
    form1.style.transform = "translateX(320px)";
    logRegister.style.height = "360px";
  } else if (window.matchMedia("(max-width: 420px)").matches) {
    overLay.style.transform = "translateX(0)";
    overLay.style.transform = "scaleX(0)";
  }
}

function login() {
  form.style.transform = "translate(0px)";
  form1.style.transform = "translateX(320px)";
  logRegister.style.height = "360px";
  document.getElementById("l-username").value = "";
  document.getElementById("l-password").value = "";
  if (window.matchMedia("(max-width: 420px)").matches) {
    overLay.style.transform = "translateX(0)";
    overLay.style.transform = "scaleX(0)";
  }
}

function register() {
  form.style.transform = "translateX(-320px)";
  form1.style.transform = "translateX(0px)";
  logRegister.style.height = "400px";
  document.getElementById("r-username").value = "";
  document.getElementById("r-password").value = "";

  if (window.matchMedia("(max-width: 420px)").matches) {
    overLay.style.transform = "scaleX(0)";
  }
}

function clsbtn() {
  logRegister.style.transform = "scale(0)";
  form.style.transform = "translateX(0px)";
  form1.style.transform = "translateX(320px)";
  logRegister.style.height = "360px";
  overLay.style.transform = "translateX(0px)";
  overLay.style.width = "300px";
  document.getElementById("l-username").value = "";
  document.getElementById("l-password").value = "";

  if (window.matchMedia("(max-width: 420px)").matches) {
    overLay.style.transform = "scaleX(1)";
  }
}

function ovReg() {
  overLay.style.transform = "traslateX(320px)";
  logRegister.style.transform = "scale(1)";
  form.style.transform = "translateX(-320px)";
  form1.style.transform = "translateX(0px)";
  logRegister.style.height = "400px";
  document.getElementById("r-username").value = "";
  document.getElementById("r-password").value = "";

  if (window.matchMedia("(max-width: 420px)").matches) {
    overLay.style.transform = "scaleX(0)";
  }
}

bar.addEventListener("click", () => {
  navUl.style.width = "250px";
  nav.style.width = "250px";
});

navClose.addEventListener("click", () => {
  nav.style.width = "0px";
  navUl.style.width = "0px";
});

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.getElementById("circle").style.display = "block";
  }
};

/*game.js additions*/
