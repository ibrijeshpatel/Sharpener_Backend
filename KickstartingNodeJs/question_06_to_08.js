//Question-06

// 1.Explain how does the internet work in your own words.
// when we inter to the web browser and try to search something then we inter some URL in 
// search but it take that URL and match with their domain name. domain name is just an 
// IP address it take that response and request to that IP address to give the output in Jason 
// Format or In HTML its a meta information which is attached to response which describe what 
// inside in that web page. and we see the web page.

// 2.What are the core modules of node js? Explain the use of each one of them in detail.

// http: Used for creating HTTP servers and making HTTP requests.
// https: Similar to the http module, but for creating HTTPS servers and making secure HTTPS requests.
// path: Handles file paths and provides utilities for working with file and directory paths.
// fs (File System): Provides methods for interacting with the file system, such as reading or writing files.
// os (Operating System): Provides information about the operating system.

// 4. What are relative path and absolute path? How to define them?
// Absolute path is a path where we can specify all location or path from beginning and provide full path to file or directory.
// Relative path is a path where we can specify the current path its not start from beginning but it is a current path. 

// 5. What does createServer do?
// it create our computer into http server. and http server object can listen our computer port and excute function each time when request is made

// 6. What are anonymous functions?
// A function declair without any function name.

// 7. What do you think server.listens exactly do?Why do we need it?
// server.listen() is a method used to make a server listen for incoming requests on a 
// specified network address (host) and port number.

// When you create a server to handle web requests, it needs to actively listen for incoming requests from clients.

// server.listen() takes two main parameters: the port number and an optional host address.
// The port number is crucial because it helps the server differentiate between different services or applications running on the same machine.
// The host address specifies the network interface on which the server should listen. 


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





