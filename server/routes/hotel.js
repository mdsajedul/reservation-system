const router = require('express').Router();
const hotelController = require('../controllers/hotel')
const upload = require('../middlewares/fileuploader');
// const multer = require('multer');
// const upload = multer()


router.get('/:hotelId', hotelController.getHotelById)
router.patch('/:hotelId', hotelController.patchHotelById)
router.post('/', upload.array('images'), hotelController.postHotel)
router.get('/', hotelController.getAllHotel)

module.exports = router