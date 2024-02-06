const express = require("express");


const app = express();

const username = require("./2username");
const chat = require("./3chat")
const first = require("./4firstPage")

app.use(express.urlencoded({extended: true}));

app.use(username);
app.use(chat);
app.use(first);

app.use((req, res) => {
    res.send("Page Not Found");
})

app.listen(3000);