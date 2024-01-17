//Question-06

// 1.Explain how does the internet work in your own words.
// when we inter to the web browser and try to search something then we inter some URL in 
// search bat it take that URL and match with their domain name. domain name is just an 
// IP address it take that response and request to that IP address to give the output in Jason 
// Format or In HTML its a meta information which is attached to response which describe what 
// inside in that web page. and we see the web page.

// 2.What are the core modules of node js? Explain the use of each one of them in detail.

// http: Used for creating HTTP servers and making HTTP requests.
// https: Similar to the http module, but for creating HTTPS servers and making secure HTTPS requests.
// path: Handles file paths and provides utilities for working with file and directory paths.
// fs (File System): Provides methods for interacting with the file system, such as reading or writing files.
// os (Operating System): Provides information about the operating system.


// http Modules // we have to import it

//const http = require("http") // special keyword or special function with node js expose globaly you can run any code default by a node js // through require keyword

//http.createServer();   // access function or method of an object in JS // request listner as an arhument // its an function which excute every incoming request


// create a server its take request Listner as an argument and requestListner is a function which excute every incoming request


// const http = require('http');

// function requireListner(req, res) {    // it take two argument one is incoming msg and another is response object

// }

// http.createServer(requireListner);

// Another way to create Server // Anonomous Function
 
// const http = require('http');

// http.createServer(function(req, res) {

// });

// Another way to create Server // Arrow Function
 
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000); // 3000 is port which you have to use


