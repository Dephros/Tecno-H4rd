var express = require('express');
var router = express.Router();
const getAll = require('../controllers/product.controller')
const deleteProduct = require('../controllers/product.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json("TEST")
});

// GET /users/test
router.get('/getAll', getAll)

router.put('/delete', deleteProduct)

module.exports = router;