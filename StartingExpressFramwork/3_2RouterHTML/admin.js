const express = require('express');
const path = require("path");

const router = express.Router();

router.get('/add_product', (req, res) => {
  res.sendFile(path.join(__dirname, "../", "3_2RouterHTML", "admin.html"));

});

router.post('/add_product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;


