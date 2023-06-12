const router = require('express').Router()
const roomController = require('../controllers/room')

router.get('/:roomId', roomController.patchRoomById)

module.exports = router