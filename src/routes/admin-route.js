
const express = require('express');
const admincontroller = require('../controllers/admin-controller');
const router = express.Router();

router.get('/users', admincontroller.getAllUser);
router.delete('/users/:id', admincontroller.deleteUserById);
router.patch('/users/:id', admincontroller.updateRoleById)

module.exports = router;