const express = require("express");

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`
    <h1>Hello User!</h1>
   <p>If you want to chat with us please login at "localhost:3000/login" and then start chat</p>`)
});
  
module.exports = router;