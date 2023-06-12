const router = require('express').Router()
const openRoute = require('./open');
const authRoute = require('./auth');
const authenticate = require('../middlewares/authenticate');
const userRoute = require('./user')
const hotelRoute = require('./hotel');
const roleAuthorization = require('../middlewares/roleAuthorization');

router.use('/api/v1/auth', authRoute);
router.use('/api/v1/users',authenticate, roleAuthorization(['Admin']), userRoute);
router.use('/api/v1/hotels', hotelRoute)
router.use('/api/v1', openRoute);
module.exports = router;