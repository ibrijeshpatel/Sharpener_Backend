const express = require('express');
const router = express.Router();

const productControler = require("../controler/controldata")

router.get('/contact_us', productControler.getContact);

// router.post('/contact_us', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });

module.exports = router;


