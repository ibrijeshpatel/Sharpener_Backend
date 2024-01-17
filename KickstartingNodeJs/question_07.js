// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     // process.exit(); // when we write this it means we hide the data if we call this people cant access our page they dont see anything

// });

// server.listen(3000); // 3000 is port which you have to use


const http = require('http');

const server1 = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); // it give sequence value which you have written there in sequence
    // process.exit(); // to reset the code
});

server1.listen(3000); 