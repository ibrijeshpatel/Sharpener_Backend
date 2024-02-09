const express = require('express');
const router = express.Router();
const app = express();
const path = require("path")

const errorControler = require("../Q_6/controler/controlError");

const adminRoutes = require('./Routes/admin');
const shopRoutes = require("./Routes/shop");
const contactRoutes = require("./Routes/contact");

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin', contactRoutes);
app.use('/admin', contactRoutes);

// app.use(errorControler.get404);
app.use(errorControler.get404);

module.exports = router;


app.listen(5000);


