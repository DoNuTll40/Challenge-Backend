
const express = require('express');
const router = express.Router();
const recordController = require('../controllers/record-controller');

router.get('/', recordController.getAllRecord)
router.post('/add', recordController.createCarRecord)
router.patch('/update/:id', recordController.updateCarRecord)
router.delete('/delete/:id', recordController.deleteCarRecord)

module.exports = router;