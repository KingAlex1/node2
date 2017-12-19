const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {
        fs.readFile("./index.html" , function (err, data) { 
            if (err) throw new Error("error");
            response.end(data);   
        })    
    }).listen(3000);
