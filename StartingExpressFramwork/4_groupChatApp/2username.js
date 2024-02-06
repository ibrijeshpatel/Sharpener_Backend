const express = require("express");
const path = require("path")
const fs = require("fs");

const router = express.Router();


router.get("/login",(req, res) => {
    res.sendFile(path.join(__dirname, "../", "4_groupChatApp", "username.html"));
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
 