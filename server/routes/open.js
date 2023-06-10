const { getDivitions, getAllDistricts, getAllUpazila } = require('../controllers/open');

const router = require('express').Router()

router.get('/divisions', getDivitions);
router.get('/districts', getAllDistricts);
router.get('/upazilas', getAllUpazila);

module.exports = router