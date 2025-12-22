const main = document.getElementById("main")

if (window.location.pathname.includes("furrytel-profile.html")) {
    const currentUser = localStorage.getItem("active_user");

    if (!currentUser || localStorage.getItem("user_" + currentUser + "_connect") === "false") {
        alert("You must log in first.");
        window.location.href = "furrytel-login-register.html";
    }
}

function checkOrientation() {
  const header = document.querySelector('header');
  
  if (window.innerWidth > window.innerHeight) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
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

  // 4. Redirect them back to the login page (change to your actual login file name)
  window.location.href = "furrytel-login-register.html"; 
}