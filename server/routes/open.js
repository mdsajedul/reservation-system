const { getDivitions, getAllDistricts } = require('../controllers/open');

const router = require('express').Router()

router.get('/divisions', getDivitions);
router.get('/districts', getAllDistricts);
router.get('/cities',()=>{});

module.exports = router