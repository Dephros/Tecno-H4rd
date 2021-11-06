var express = require('express');
var router = express.Router();
const testHandler= require('../controllers/user.controller')
const getAll = require('../controllers/user.controller')
const createUser = require('../controllers/user.controller')




/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json("TEST")
});

// GET /users/test

router.get('/test', testHandler)

router.get('/getAll', getAll)

router.post('/add', createUser)



module.exports = router;
