const express = require('express');
const router = express.Router();

const contactControler = require("../controler/products")

router.get('/contact_us', contactControler.getContact);

router.post('/contact_us', contactControler.postAddContact)

module.exports = router;


