const http = require("http");
const fs = require("fs");

let getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours} : ${minutes} : ${seconds}`;
};

const NUMSEC = process.env.NUMSEC || 1000;
const STOPTIME = process.env.STOPTIME || 4000;

http.createServer(function(request, response) {
        let setTime = setInterval(() => {
            newTime = getTime();
            console.log(newTime);
            response.write(`${newTime}  \n`);
        }, NUMSEC);

        setTimeout(function() {
            clearInterval(setTime);
            console.log("стоп");
            response.end();
        }, STOPTIME);
    }).listen(3000);
