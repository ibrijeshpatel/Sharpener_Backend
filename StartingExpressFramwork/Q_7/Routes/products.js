const express = require('express');
const router = express.Router();  

const productsControler = require("../controler/products");  // require that path  where data is stored and then it put in the given name 


router.get('/add_product', productsControler.getAddProducts);   //access that data inside above given name and that data name which is written in control file
router.post('/add_product', productsControler.postAddProducts);

module.exports = router;


