const router = require('express').Router();
const bookingController = require('../controllers/booking')

router.post('/',bookingController.postBooking)

module.exports = router