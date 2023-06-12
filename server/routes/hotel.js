const router = require('express').Router();
const hotelController = require('../controllers/hotel');
const roomController = require('../controllers/room')
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/fileuploader');
const roleAuthorization = require('../middlewares/roleAuthorization');


router.get('/agent/:agentId', hotelController.HotelByAgentId)

router.get('/:hotelId/rooms', roomController.getRoomsByHotelId)

router.post('/:hotelId/rooms',authenticate, roleAuthorization(['Agent']),upload.array('images'), roomController.postRoom)

router.get('/:hotelId', hotelController.getHotelById)

router.patch('/:hotelId', authenticate, roleAuthorization(['Admin','Agent']), hotelController.patchHotelById)

router.post('/', authenticate, roleAuthorization(['Admin','Agent']), upload.array('images'), hotelController.postHotel)

router.get('/', hotelController.getAllHotel)


module.exports = router