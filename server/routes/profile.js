const router = require('express').Router()
const profileController = require('../controllers/profile')
const authenticate = require('../middlewares/authenticate')
const upload = require('../middlewares/fileuploader')
const { validate, validationSchema } = require('../middlewares/validate')

router.post('/',  authenticate,  upload.single('profileImage'), validate(validationSchema.postProfile,'body'), profileController.postProfile)

router.get('/my-profile',authenticate, profileController.getProfileByUserId);

router.get('/:userId', validate(validationSchema.objectIdValidation,'params'), profileController.getProfileByUserId)

module.exports = router