let getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours} : ${minutes} : ${seconds}`;
};

let numSec = prompt("Введите интервал времени в сукундах", 0);
let stopTime = prompt("ВВедит срок работы таймера в секундах", 0);

let timer = document.querySelector(".timer");
let newTime = document.createElement("h1");
newTime.textContent = getTime();
timer.appendChild(newTime);

const setTime = (timer, numSec) => {
    setInterval(() => {
        newTime.innerHTML = getTime();
        timer.appendChild(newTime);
    }, numSec);
};

setTime();

setTimeout(function(stopTime) {
    clearInterval(setTime);
    alert("стоп");
}, stopTime);
