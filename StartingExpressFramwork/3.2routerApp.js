const express = require('express');
const path = require('path');
const router = express.Router();


const app = express();

const adminRoutes = require('./3_2RouterHTML/admin');
const shopRoutes = require("./3_2RouterHTML/shop");
const contactRoutes = require("./3_2RouterHTML/contact");

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin', contactRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "3_2RouterHTML", "pnf.html"));
});

app.listen(5000);


