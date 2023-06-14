const router = require('express').Router();
const bookingController = require('../controllers/booking');
const authenticate = require('../middlewares/authenticate');
const { validate, validationSchema } = require('../middlewares/validate');

router.post('/', authenticate, validate(validationSchema.submitBooking,'body'), bookingController.postBooking)

module.exports = router