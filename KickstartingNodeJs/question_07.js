// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     // process.exit(); // when we write this it means we hide the data if we call this people cant access our page they dont see anything

// });

// server.listen(3000); // 3000 is port which you have to use


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); // we can access specific value through 

});

server.listen(3000); // 3000 is port which you have to use