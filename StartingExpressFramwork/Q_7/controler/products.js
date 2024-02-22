const Product = require("../models/product");
const path = require("path")      // path require for finding the path
const rootDir = require("../path_utility/path") // access the path where rootDir is available
 
exports.getAddProducts = (req, res) => {                   // exporting data and then sending with their name to access this data in their respective file
    res.sendFile(path.join(rootDir, "html", "products.html")); 
};

exports.postAddProducts = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getShop = (req, res) => {
    Product.fetchAll((products) => {
        console.log(products);
        res.sendFile(path.join(rootDir, "html", "shop.html"));
    });
};

exports.getContact = (req, res) => {
    res.sendFile(path.join(rootDir, "html", "contact.html"));
};
exports.postAddContact = (req, res) => {
    res.redirect('/');
};

