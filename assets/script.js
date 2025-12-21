const register_btn = document.getElementById("register-button-a");
const register_btn_a = document.getElementById("register-button-b");
const register_form = document.getElementById("register-part");
const welcome_user = document.getElementById("welcome-page");
const welcome_page_button = document.getElementById("logo-btn");
const login_btn = document.getElementById("login-button-a");
const login_btn_a = document.getElementById("login-button-b");
const login_form = document.getElementById("login-form");
const header = document.getElementById("navbar");

function checkOrientation() {
  const header = document.querySelector('header');
  
  if (window.innerWidth > window.innerHeight) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
  }
}

register_btn.addEventListener("click",()=> {
    register_form.style.display = "block";
    welcome_user.style.display = "none";
    login_form.style.display = "none";
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
});


login_btn.addEventListener("click", ()=> {
    login_form.style.display = "block";
    register_form.style.display = "none";
    welcome_user.style.display = "none";
    header.style.display = "block";
})

register_btn_a.addEventListener("click",()=> {
    register_form.style.display = "block";
    welcome_user.style.display = "none";
    login_form.style.display = "none";
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
});

login_btn_a.addEventListener("click", ()=> {
    login_form.style.display = "block";
    register_form.style.display = "none";
    welcome_user.style.display = "none";
    header.style.display = "block";
})

welcome_page_button.addEventListener("click", ()=> {
    login_form.style.display = "none";
    register_form.style.display = "none";
    welcome_user.style.display = "block";
    header.style.display = "block";
})

while (register_form.style.display === "block") {
    window.addEventListener('resize', checkOrientation);
}

function register() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;
  const lastname = document.getElementById("last-name").value;
  const firstname = document.getElementById("first-name").value;
  const country = document.getElementById("country").value;

  if (
    username === "" ||
    password === "" ||
    lastname === "" ||
    firstname === "" ||
    country === ""
  ) {
    alert("Please fill all of the forms");
    return;
    }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (localStorage.getItem("user_" + username + "_exist")) {
    alert("The username is already taken");
    return;
  }

  localStorage.setItem("user_" + username + "_password", password);
  localStorage.setItem("user_" + username + "_email", email);
  localStorage.setItem("user_" + username + "_country", country);
  localStorage.setItem("user_" + username + "_lastname", lastname);
  localStorage.setItem("user_" + username + "_firstname", firstname);
  localStorage.setItem("user_" + username + "_exist", "true");

  alert("User Register succesfully")
  window.location.href = "furrytel-profile.html";
}

document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();
  register();
});

function loginin() {
  const usernameid = document.getElementById("username-id");
  const passwordid = document.getElementById("password-id").value;

  if (usernameid !== localStorage.getItem("user_" + username)) {
    alert("Username does not exist");
    return;
  }

if (passwordid !== localStorage.getItem("user_" + usernameid + "_password" + password)) {
    alert("incorrect password");
    return;
  }

  alert("Login successful");
  window.location.href = "furrytel-profile.html";
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  loginin();
});