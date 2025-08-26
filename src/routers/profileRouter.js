import express from 'express'
import { createProfileController } from '../controllers/profile/createProfileController.js'
import { listProfileController } from '../controllers/profile/listProfleController.js'
import { getByidProfileController } from '../controllers/profile/getByidProfileController.js'
import { editProfileController } from '../controllers/profile/editProfileController.js'
import { deleteProfileController } from '../controllers/profile/deleteProfileController.js'

const router = express.Router()

router.post('/', createProfileController)
router.get('/', listProfileController)
router.get('/:id', getByidProfileController)
router.put('/:id', editProfileController)
router.delete('/:id', deleteProfileController)

export default router