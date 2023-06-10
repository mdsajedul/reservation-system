const router = require('express').Router()
const openRoute = require('./open');
const authRoute = require('./auth')

router.use('/api/v1/auth', authRoute);
router.use('api/v1/users',()=>{});
router.use('/api/v1',openRoute);

module.exports = router;