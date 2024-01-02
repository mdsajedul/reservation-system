const router = require('express').Router();
const hotelController = require('../controllers/hotel');
const roomController = require('../controllers/room')
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/fileuploader');
const roleAuthorization = require('../middlewares/roleAuthorization');
const { validate, validationSchema } = require('../middlewares/validate');


//get hotel by agentId
router.get('/agent/:agentId', validate(validationSchema.objectIdValidation,'params'), hotelController.HotelByAgentId)

//get rooms by hoteId
router.get('/:hotelId/rooms', validate(validationSchema.objectIdValidation,'params'), roomController.getRoomsByHotelId)

//create room by hotel id
router.post('/:hotelId/rooms',authenticate, roleAuthorization(['Agent']),upload.uploadMultipleToCloudinary, validate(validationSchema.objectIdValidation,'params'), validate(validationSchema.createRoom,'body'), roomController.postRoom)

//get hotel by hoteId
router.get('/:hotelId', validate(validationSchema.objectIdValidation,'params'), hotelController.getHotelById)

//update hotel by hotelId
router.patch('/:hotelId', authenticate, validate(validationSchema.objectIdValidation), roleAuthorization(['Admin','Agent']), hotelController.patchHotelById)

//create new hotel
router.post('/', authenticate, roleAuthorization(['Admin','Agent']), upload.uploadMultipleToCloudinary, validate(validationSchema.createHotel,'body'), hotelController.postHotel)

//get all hotels
router.get('/', hotelController.getAllHotel)


module.exports = router