const express = require('express');
const router = express.Router();


const productControler = require("../controler/products")

router.get('/', productControler.getShop);

module.exports = router;
