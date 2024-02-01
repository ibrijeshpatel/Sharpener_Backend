// Q2. What is the body parser used for?
// Express body-parser is an npm module used to process data sent in an HTTP request body. 
// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data 
// sets over an HTTP request body.


const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// here we write code down to up side because in app.use method next is not working if we try to reflect both places page
app.use("/add_product",(req, res, next) => {
    res.send(`<form action="/product" method="POST">
        <input type="text" name="title" placeholder="Title">
        <input type="number" name="size" placeholder="Size">
    
    <button type="submit"> Add Products </button></input>
    </form>`)    
    });

app.use("/product",(req, res, next) => {
    console.log(req.body);
    console.log("Title:", req.body.title);
    console.log("Size:", req.body.size);
    res.redirect("/");
});

app.use("/",(req, res, next) => {
    res.send("<h1>Welcome to main page of this Web</h1>")
    next();
});

app.listen(3000);

