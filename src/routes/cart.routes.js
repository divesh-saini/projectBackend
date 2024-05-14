import {Router} from 'express'
import {addToCart, fetchCartByUser, deleteFromCart, updateCart} from '../controllers/cart.controller.js'

const router = Router();
router.post('/', addToCart)
      .get('/', fetchCartByUser)
      .delete('/:id', deleteFromCart)
      .patch('/:id', updateCart)


export default router