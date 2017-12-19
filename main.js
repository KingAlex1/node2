const http = require("http");
const fs = require("fs");


http.createServer(function(request, response) {
        fs.readFile("./index.html" , function (err, data) { 
            if (err) throw new Error("error");
            response.end(data);   
        })    
    }).listen(3000);



















// function startTimer() {
//     return new Promise((res, rej) => {
//         http
//             .createServer(function(request, response) {
//                 fs.readFile("./index.html", function(err, data) {
//                     if (err) throw new Error("error");
//                     response.end(data);
//                     res(data);
//                 });
//             })
//             .listen(3000);
//     });
// }

// startTimer()
//     .then(function(data) {
//         let getTime = () => {
//             let date = new Date();
//             let hours = date.getHours();
//             let minutes = date.getMinutes();
//             let seconds = date.getSeconds();
//             return `${hours} : ${minutes} : ${seconds}`;
//         };
//         let numSec = prompt("Введите интервал времени в сукундах", 2) * 1000;
//         let stopTime = prompt("ВВедит срок работы таймера в секундах", 0) * 1000;
//         let timer = document.querySelector(".timer");
//         let newTime = document.createElement("h1");
//         timer.appendChild(newTime);
//         let setTime = setInterval(() => {
//             newTime.innerHTML = getTime();
//             timer.appendChild(newTime);
//         }, numSec);

//         setTimeout(function() {
//             clearInterval(setTime);
//             alert("стоп");
//         }, stopTime);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
