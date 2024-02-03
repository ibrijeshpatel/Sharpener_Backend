const express = require("express");

const router = express.Router();

// router.get("/add_product",(req, res, next) => {
//     res.send(`<form action="/product" method="POST"><input type="text" name="title" placeholder="Title"><button type="submit"> Add Products </button></input></form>`)    
//     });

// router.post("/product",(req, res, next) => {
//     console.log(req.body);
//     res.redirect("/");
// });

// module.exports = router;



router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
