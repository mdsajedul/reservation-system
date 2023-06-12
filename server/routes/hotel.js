const router = require('express').Router();
const hotelController = require('../controllers/hotel');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/fileuploader');
const roleAuthorization = require('../middlewares/roleAuthorization');
// const multer = require('multer');
// const upload = multer()


router.get('/agent/:agentId', hotelController.HotelByAgentId)
router.get('/:hotelId', hotelController.getHotelById)
router.patch('/:hotelId', authenticate, roleAuthorization(['Admin','Agent']), hotelController.patchHotelById)
router.post('/', authenticate, roleAuthorization(['Admin','Agent']), upload.array('images'), hotelController.postHotel)
router.get('/', hotelController.getAllHotel)

module.exports = router