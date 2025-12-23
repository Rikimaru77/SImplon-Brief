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
  window.location.href = "furrytel-login-register.html"; 
}

const welcome_page_button = document.getElementById("logo-btn");

welcome_page_button.addEventListener("click", ()=> {
    window.location.href = "furrytel.html";
});

if (window.location.pathname.includes("furrytel-profile.html")) {
    const currentUser = localStorage.getItem("active_user");

    if (!currentUser || localStorage.getItem("user_" + currentUser + "_connect") === "false") {
        alert("You must log in first.");
        window.location.href = "furrytel-login-register.html";
    }
}

if (window.location.pathname.includes("furrytel.html")) {
    const currentUser = localStorage.getItem("active_user");

    if (!currentUser || localStorage.getItem("user_" + currentUser + "_connect") === "false") {
        alert("You must log in first.");
        window.location.href = "furrytel-login-register.html";
    }
}