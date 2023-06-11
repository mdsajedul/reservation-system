const router = require('express').Router();
const hotelController = require('../controllers/hotel')
const multer = require('multer')
const upload = multer()

router.get('/:hotelId', hotelController.getHotelById)
router.patch('/:hotelId', hotelController.patchHotelById)
router.post('/', upload.none(), hotelController.postHotel)
router.get('/', hotelController.getAllHotel)

module.exports = router