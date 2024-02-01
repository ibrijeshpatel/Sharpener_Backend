const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// here we write code down to up side because in app.use method next is not working if we try to reflect both places page
app.use("/add_product",(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Products </button></input></form>')    
    });

app.use("/product",(req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/",(req, res, next) => {
    res.send("<h1>Welcome to main page of this Web</h1>")
    next();
});


app.listen(3000);

