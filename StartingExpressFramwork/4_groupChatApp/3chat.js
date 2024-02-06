const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/chat",(req, res) => {
    fs.readFile("messages.txt", (err, data) => {
        if (err) {
            data = "Not Chat Exist.";
        }
        res.send(`${data} <form action="/sendMessage" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')"><input type="text" name="message"><button type="submit">Send</button></input></form>`)
    })   
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
