const router = require('express').Router()
const userController = require('../controllers/user')


router.get('/:userId', userController.getUserById)
router.patch('/:userId', userController.patchUserById)
// router.delete('/:userId', userController.)
router.post('/', userController.postUser)
router.get('/',userController.getUsers)

module.exports = router