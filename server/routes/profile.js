const router = require('express').Router()
const profileController = require('../controllers/profile')
const authenticate = require('../middlewares/authenticate')
const upload = require('../middlewares/fileuploader')

router.post('/', authenticate, upload.single('profileImage'), profileController.postProfile)
router.get('/my-profile',authenticate, profileController.getProfileByUserId);
router.get('/:userId', profileController.getProfileByUserId)

module.exports = router