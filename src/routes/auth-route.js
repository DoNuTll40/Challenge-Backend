
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');
const authenticate = require('../middlewares/authenticate')

router.post('/register', authController.registerUsers)
router.post('/login', authController.loginUsers)
router.get('/me', authenticate ,authController.getMe)

module.exports = router;