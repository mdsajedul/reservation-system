const router = require('express').Router()
const openRoute = require('./open');

router.use('/api/v1/auth',()=>{});
router.use('api/v1/users',()=>{});
router.use('/api/v1',openRoute);

module.exports = router;