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