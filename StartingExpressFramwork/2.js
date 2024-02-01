const express = require("express");

const app = express();

// here we write code down to up side because in app.use method next is not working if we try to reflect both places page
app.use("/product",(req, res, next) => {
    console.log("Product Page");
    res.send("<h1>Welcome to Product Page</h1>")
});

app.use("/",(req, res, next) => {
    console.log("This is Main Page");
    res.send("<h1>Welcome to main page of this Web</h1>")
    next();
});


app.listen(3000);

