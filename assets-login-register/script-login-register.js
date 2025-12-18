const Registerbtn = document.getElementById("RegisterButtonA");
const Registerbtn1 = document.getElementById("RegisterButtonB");
const RegisterForm = document.getElementById("RegisterForm");
const WelcomeUser = document.getElementById("WelcomePage");
const WelcomePageButton = document.getElementById("LogoBtn");
const LogInbtn = document.getElementById("LogInButtonA");
const LogInbtn1 = document.getElementById("LogInButtonB");
const LogInForm = document.getElementById("LogInForm");

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

LogoBtn.addEventListener("click", ()=> {
    LogInForm.style.display = "none";
    RegisterForm.style.display = "none";
    WelcomeUser.style.display = "block";
})