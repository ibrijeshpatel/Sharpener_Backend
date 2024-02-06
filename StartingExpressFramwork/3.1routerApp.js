const express = require('express');

const app = express();

const adminRoutes = require('./3_1Router/admin');
const shopRoutes = require('./3_1Router/shop');

app.use(express.urlencoded({extended: true}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4200);


