const clcokTitle = document.querySelector(".clock")


function clockTimer(){
    const today = new Date();
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    clcokTitle.innerText = `${hours}:${minutes}:${seconds}`

}

clockTimer();
setInterval(clockTimer, 1000);