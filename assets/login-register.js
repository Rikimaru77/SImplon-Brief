const register_btn = document.getElementById("register-button-a");
const register_btn_a = document.getElementById("register-button-b");
const register_form = document.getElementById("register-part");
const welcome_user = document.getElementById("welcome-page");
const welcome_page_button = document.getElementById("logo-btn");
const login_btn = document.getElementById("login-button-a");
const login_btn_a = document.getElementById("login-button-b");
const login_form = document.getElementById("login-form");
const currentUser = localStorage.getItem("current_username")
const header = document.querySelector('header');

if (localStorage.getItem("user_" + currentUser + "_connect") === "true") {
    window.location.href = "furrytel-profile.html";
}

function checkOrientation() {
  const header = document.querySelector('header');
  
  if (window.innerWidth > window.innerHeight) {
    header.style.display = 'block';
    header.style.backgroundColor = '#7269e1'
  } else {
    header.style.backgroundColor = '#6a4fb5'
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
    header.style.display = 'block';
    header.style.backgroundColor = '#7269e1'
});

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
    header.style.backgroundColor = '#7269e1'
});

welcome_page_button.addEventListener("click", ()=> {
    login_form.style.display = "none";
    register_form.style.display = "none";
    welcome_user.style.display = "block";
    header.style.display = "block";
    header.style.backgroundColor = '#7269e1'
});

while (register_form.style.display === "block") {
    window.addEventListener('resize', checkOrientation);
};

function register() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;
  const lastName = document.getElementById("last-name").value;
  const firstName = document.getElementById("first-name").value;
  const country = document.getElementById("country").value;
  const hashedPassword = Hash(password);
  const bio = "";
  const phoneNumber = "";
  const streetAdress = "";
  const city = "";
  const zip = "";


  if (
    username === "" ||
    password === "" ||
    lastName === "" ||
    firstName === "" ||
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

  localStorage.setItem("user_" + username + "_password", hashedPassword);
  localStorage.setItem("user_" + username + "_email", email);
  localStorage.setItem("user_" + username + "_country", country);
  localStorage.setItem("user_" + username + "_lastname", lastName);
  localStorage.setItem("user_" + username + "_firstname", firstName);
  localStorage.setItem("user_" + username + "_exist", "true");
  localStorage.setItem("user_" + username + "_connect", "true");
  localStorage.setItem("user_" + username + "_username", username);
  localStorage.setItem("active_user", username);
  localStorage.setItem("user_" + username + "_bio", bio);
  localStorage.setItem("user_" + username + "_phonenumber", phoneNumber);
  localStorage.setItem("user_" + username + "_streetaddress", streetAdress);
  localStorage.setItem("user_" + username + "_city", city);
  localStorage.setItem("user_" + username + "_zip", zip);

  window.location.href = "furrytel-profile.html";
}

document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault();
  register();
});

function Hash(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString();
}

function loginin() {
  const username = document.getElementById("login-id").value;
  const password = document.getElementById("password-id").value;
  const hashedPassword = Hash(password);
  const storedHash = localStorage.getItem("user_" + username + "_password");

  if (!localStorage.getItem("user_" + username + "_exist")) {
    alert("Username does not exist");
    return;
  }

  if (hashedPassword !== storedHash) {
    alert("Incorrect password");
    return;
  }

  localStorage.setItem("user_" + username + "_connect", "true");
  localStorage.setItem("active_user", username);
  window.location.href = "furrytel-profile.html";
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  loginin();
});