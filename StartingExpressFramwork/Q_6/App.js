const express = require('express');
const path = require('path');


const app = express();

const adminRoutes = require('./Routes/admin');
const shopRoutes = require("./Routes/shop");
const contactRoutes = require("./Routes/contact");

app.use(express.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin', contactRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "html", "pnf.html"));
});

app.listen(5000);


