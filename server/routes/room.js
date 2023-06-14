const router = require('express').Router()
const roomController = require('../controllers/room')
const { validate, validationSchema } = require('../middlewares/validate')

router.get('/:roomId', validate(validationSchema.objectIdValidation,'params'), roomController.patchRoomById)

module.exports = router