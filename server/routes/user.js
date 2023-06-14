const router = require('express').Router()
const userController = require('../controllers/user')
const { validate, validationSchema } = require('../middlewares/validate')


router.get('/:userId', validate(validationSchema.objectIdValidation,'params'), userController.getUserById)

router.patch('/:userId',validate(validationSchema.objectIdValidation,'params'), validate(validationSchema.updateUser,'body'), userController.patchUserById)

// router.delete('/:userId', userController.)
router.post('/', userController.postUser)
router.get('/',userController.getUsers)

module.exports = router