const express = require('express');
const router = express.Router();


const productControler = require("../controler/controldata")

router.get('/', productControler.getShop);

module.exports = router;
