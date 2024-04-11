
const express = require('express');
const admincontroller = require('../controllers/admin-controller');
const router = express.Router();

router.get('/users', admincontroller.getAllUser);

module.exports = router;