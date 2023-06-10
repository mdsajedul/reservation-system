const router = require('express').Router();
const authController = require('../controllers/auth')

router.post('/login', authController.loginController)
router.post('/register', authController.registerController)

module.exports = router