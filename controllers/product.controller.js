const { signedCookie } = require('cookie-parser');
const productController = require('../controllers/product.controller')

var express = require('express');
var router = express.Router();


const getAll = (req, res) => {
    res.json("all products")
}

const getById = (req, res) => {
    res.json("all products")
}

const deleteProduct = (req, res) => {
    res.json("computer delete")
}


module.exports = getAll;
module.exports = deleteProduct;
module.exports = getById;
