const express = require('express');
const router = express.Router();
const app = express();
const path = require("path")

const errorControler = require("../Q_6/controler/controlError");

const productsRoutes = require('./Routes/products');
const shopRoutes = require("./Routes/shop");
const contactRoutes = require("./Routes/contact");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));  // not require

app.use('/products', productsRoutes);
app.use(shopRoutes);
app.use('/products', contactRoutes);
app.use('/products', contactRoutes);

// app.use(errorControler.get404);
app.use(errorControler.get404);

module.exports = router;


app.listen(5000);


