const main = document.getElementById("main");

function checkOrientation() {
  const header = document.querySelector('header');
  
  if (window.innerWidth > window.innerHeight) {
    header.style.display = 'block';
    header.style.backgroundColor = '#7269e1'
  } else {
    header.style.backgroundColor = '#6a4fb5'
  }
}

checkOrientation();

window.addEventListener('resize', checkOrientation);

function logout() {
  // 1. Find out who is currently logged in
  const currentUser = localStorage.getItem("active_user");

  if (currentUser) {
    // 2. Set their specific connect status to false
    localStorage.setItem("user_" + currentUser + "_connect", "false");
    
    // 3. Remove the "active_user" tracker
    localStorage.removeItem("active_user");
  }

  // 4. Redirect them back to the login page
  window.location.href = "https://rikimaru77.github.io/SImplon-Brief/Login-Register/furrytel-login-register.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("active_user");
  if (!username) return;

  const fieldMap = {
    "first-name": "firstname",
    "last-name": "lastname",
    "email": "email",
    "country": "country",
    "bio": "bio",
    "phone-number": "phonenumber",
    "street-address": "streetaddress",
    "city": "city",
    "zip": "zip",
    "username": "username"
  };

  // iterate over the keys of fieldMap
  for (const formField in fieldMap) {
    const storageField = fieldMap[formField];
    const key = `user_${username}_${storageField}`;
    const value = localStorage.getItem(key);

    if (value !== null) {
      const input = document.querySelector(`[name="${formField}"], #${formField}`);
      if (input) input.value = value;
    }
  }
});

document.getElementById("infos-form").addEventListener("submit", saveProfile);

function saveProfile(event) {
  // Stop form from submitting / reloading
  if (event) event.preventDefault();

  const oldUsername = localStorage.getItem("active_user");
  if (!oldUsername) {
    alert("No active user!");
    return;
  }

  // Get the new username from the form
  const usernameInput = document.querySelector("#username");
  if (!usernameInput) return;

  const newUsername = usernameInput.value.trim();
  if (!newUsername) {
    alert("Username cannot be empty!");
    return;
  }

  // Check if the new username is already taken
  if (newUsername !== oldUsername && localStorage.getItem(`user_${newUsername}_exist`)) {
    alert("This username is already taken!");
    return;
  }

  // Mapping of form fields → localStorage keys
  const fieldMap = {
    "first-name": "firstname",
    "last-name": "lastname",
    "username": "username",
    "street-address": "streetaddress",
    "city": "city",
    "zip": "zip",
    "country": "country",
    "phone-number": "phonenumber",
    "email": "email",
    "bio": "bio"
  };

  // List of all user fields that need renaming if username changes
  const userFields = [
    "firstname",
    "lastname",
    "username",
    "streetaddress",
    "city",
    "zip",
    "country",
    "phonenumber",
    "email",
    "bio",
    "exist",
    "connect",
    "password"
  ];

  // If the username changed, rename all keys including password
  if (newUsername !== oldUsername) {
    userFields.forEach(field => {
      const oldKey = `user_${oldUsername}_${field}`;
      const newKey = `user_${newUsername}_${field}`;
      const value = localStorage.getItem(oldKey);
      if (value !== null) {
        localStorage.setItem(newKey, value);
        localStorage.removeItem(oldKey);
      }
    });
  }

  // Save current form values
  for (const formField in fieldMap) {
    const storageField = fieldMap[formField];
    const input = document.querySelector(`[name="${formField}"], #${formField}`);
    if (input) {
      const key = `user_${newUsername}_${storageField}`;
      localStorage.setItem(key, input.value);
    }
  }

  // Update active_user
  localStorage.setItem("active_user", newUsername);

  // Redirect to homepage
  window.location.href = "https://rikimaru77.github.io/SImplon-Brief/furrytel.html";
}