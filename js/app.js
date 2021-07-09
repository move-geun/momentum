const logInBox =  document.querySelector(".login-box")
const logInBoxInput = document.querySelector(".login-box input")
const greeting = document.querySelector(".greeting")



function onLoginSubmit(event){
    event.preventDefault();
    logInBox.classList.add("hidden");
    const username = logInBoxInput.value;
    localStorage.setItem("username",username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");

}

const savedUserName = localStorage.getItem("username");
if (savedUserName === null) {
    logInBox.classList.remove("hidden");
    logInBox.addEventListener("submit", onLoginSubmit);
} else{
   paintGreetings(savedUserName);
}
