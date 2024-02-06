const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/login",(req, res) => {
    res.send(`<form action="/printUser" method="POST"><input type="text" name="username"><button type="submit">Login</button></input></form>`)
});

router.post("/printUser",(req, res) => {
    const username = req.body.username;
    console.log(username);
    if (username) {
        fs.appendFile("messages.txt", `${username}\n`, () => {
            res.redirect("/chat");
        })
    }
      
});


module.exports = router;
 