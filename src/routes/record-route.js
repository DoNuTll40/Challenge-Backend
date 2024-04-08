
const express = require('express');
const recordController = require('../controllers/record-controller');
const router = express.Router();

router.get('/view', recordController.getAllRecord)
router.post('/add', recordController.createCarRecord)
router.patch('/update/:id', recordController.updateCarRecord)
router.delete('/delete/:id', recordController.deleteCarRecord)

module.exports = router;