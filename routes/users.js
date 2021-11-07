var express = require('express');
var router = express.Router();

/*
const testHandler= require('../controllers/user.controller')
const getAll = require('../controllers/user.controller')
const createUser = require('../controllers/user.controller')
*/

const {  getAll, createUser, deleteUser } = require('../controllers/user.controller')




router.get('/getAll', getAll)

router.post('/add', createUser)

router.delete('/delete:dni', deleteUser)



module.exports = router;
