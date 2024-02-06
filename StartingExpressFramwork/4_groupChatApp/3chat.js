const express = require("express");
const path = require("path")
const fs = require("fs");
const router = express.Router();

router.get("/chat",(req, res) => {
    fs.readFile("messages.txt", (err, data) => {
        if (err) {
            data = "Not Chat Exist.";
        }
        res.sendFile(path.join(__dirname, "../", "4_groupChatApp", "chat.html"));  // `${data} 
    });
});

router.post("/sendMessage",(req, res) => {
    const message = req.body.message;                                                                                                                                                                                                                                                                                               
    console.log(message);
    if (message) {
        fs.appendFile("messages.txt", `${message}\n`, () => {
            res.redirect("/chat");
        });
    }
});


module.exports = router;
