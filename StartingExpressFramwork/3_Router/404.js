const express = require("express");
const router = express.Router();

router.get("*",(req, res, next) => {
    res.status(404).send("<h1>Welcome to main page of this Web</h1>")
    next();
});

module.exports = router;
