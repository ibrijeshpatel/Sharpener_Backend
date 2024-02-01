
// Q1. Why are we using Express JS ? Any reasons?
// Express Js is a fast, unopinionated, minimalist web framework for Node. js that provides a 
// robust set of features for web and mobile applications. It has many advantages, 
// such as simplicity, flexibility, community support, scalability, and cross-platform functionality.

// Q3. What are middlewares ?
// When you submit a form on a website, your computer sends the request in XML or JSON to the web 
// server. Then, the web server runs the business logic based on the request, retrieves information 
// from databases, or communicates to other microservices using different protocols.

// Q4. What is next used for.
// The next() function returns the next item in an iterator. You can add a default return value, 
// to return if the iterable has reached to its end.

// // Q5. What is res.send used for?
// The res. send() function is used for sending the response for the HTTP request. It takes a 
// parameter body. The parameter can be a String, Buffer object, an object, Boolean, or an Array.

// Q6.If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to.
// run Below cod and go localhost:3000 then inspect refresh page again then go netrork section ang then 
// localhost scroll down and get :- Content-Type:   text/html; charset=utf-8

// Q7. If I do res.send( { key1: value }) . What will be the content-type header equal to.
// Content-Type:    text/html; charset=utf-8

// Q8. What does app.listen(3000) do behind the scenes ?
// app.listen(3000) in Express is like telling our app to start listening for visitors on a specific address 
// here which is 3000 port, much like how Node listens for connections. The app, created by `express()`, 
// is just a handy function that handles different types of requests, making it easy to serve both HTTP and 
// HTTPS versions of your app without extra complexity.

//Q9.
const express = require("express");

const app = express();

app.use((req, res,next) => {
    console.log("In the Middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Another Middleware");
    res.send("<h1>Hello From ExpressJs</h1>");
    // res.send("{ key1: value }");
});

app.listen(3000);