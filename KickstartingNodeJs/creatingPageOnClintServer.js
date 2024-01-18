// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     // process.exit(); // when we write this it means we hide the data if we call this people cant access our page they dont see anything

// });

// server.listen(3000); // 3000 is port which you have to use

// Get Sequence data 
// const http = require('http');

// const server1 = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers); // it give sequence value which you have written there in sequence
//     // process.exit(); // to reset the code
// });
// server1.listen(3000); 

const http = require('http');

const server2 = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); 
    // process.exit(); // to reset the code
    res.setHeader('Content-Type','text/html')  // Response Object
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>My Node JS server</h1></body>');
    res.write('<html>');
    res.end();  // after end never write any res.write it give error
});  // it print My Node JS server in top of the Page

server2.listen(3000); 