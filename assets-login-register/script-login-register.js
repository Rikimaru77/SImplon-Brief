const Registerbtn = document.getElementById("register-button-a");
const Registerbtn1 = document.getElementById("register-button-b");
const RegisterForm = document.getElementById("register-form");
const WelcomeUser = document.getElementById("welcome-page");
const WelcomePageButton = document.getElementById("logo-btn");
const LogInbtn = document.getElementById("login-button-a");
const LogInbtn1 = document.getElementById("login-button-b");
const LogInForm = document.getElementById("login-form");

Registerbtn.addEventListener("click",()=> {
    RegisterForm.style.display = "flex";
    WelcomeUser.style.display = "none";
    LogInForm.style.display = "none";
});

LogInbtn.addEventListener("click", ()=> {
    LogInForm.style.display = "flex";
    RegisterForm.style.display = "none";
    WelcomeUser.style.display = "none";
})

Registerbtn1.addEventListener("click",()=> {
    RegisterForm.style.display = "flex";
    WelcomeUser.style.display = "none";
    LogInForm.style.display = "none";
});

LogInbtn1.addEventListener("click", ()=> {
    LogInForm.style.display = "flex";
    RegisterForm.style.display = "none";
    WelcomeUser.style.display = "none";
})

WelcomePageButton.addEventListener("click", ()=> {
    LogInForm.style.display = "none";
    RegisterForm.style.display = "none";
    WelcomeUser.style.display = "block";
})