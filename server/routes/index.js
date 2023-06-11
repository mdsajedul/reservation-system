const router = require('express').Router()
const openRoute = require('./open');
const authRoute = require('./auth');
const authenticate = require('../middlewares/authenticate');
const userRoute = require('./user')

router.use('/api/v1/auth', authRoute);
router.use('/api/v1/users', userRoute)
router.use('/api/v1', openRoute);
module.exports = router;