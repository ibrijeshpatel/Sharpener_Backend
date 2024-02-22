const express = require('express');
const router = express.Router();
const app = express();
const path = require("path")
const bodyParser = require('body-parser');

const errorControler = require("./controler/error");

const productsRoutes = require('./Routes/products');
const shopRoutes = require("./Routes/shop");
const contactRoutes = require("./Routes/contact");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));  

app.use('/products', productsRoutes);
app.use(shopRoutes);
app.use('/products', contactRoutes);
app.use('/products', contactRoutes);

// app.use(errorControler.get404);
app.use(errorControler.get404);

module.exports = router;


app.listen(5000);


