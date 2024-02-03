const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require("./3_Router/admin");
const shopRouter = require("./3_Router/shop");


app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRouter);
app.use(shopRouter);


app.listen(3000);

