import express from 'express'
import { createProductController } from '../controllers/product/createProdctController.js'
import { listProductController } from '../controllers/product/listProductController.js'
import { getByidProductController } from '../controllers/product/getByidProductController.js'
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'

const router = express.Router()

router.post('/', createProductController)
router.get('/', listProductController)
router.get('/:id', getByidProductController)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)

export default router