import { Router } from "express";
import {
    fetchAllProducts,
    fetchProductById,
    createProduct,
    updateProduct
} from '../controllers/product.controller.js'


const router = Router()
router.post('/', createProduct)
      .get('/', fetchAllProducts)
      .get('/:id', fetchProductById)
      .patch('/:id', updateProduct)

export default router 