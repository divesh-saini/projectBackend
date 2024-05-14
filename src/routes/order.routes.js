import {Router} from 'express'
import { 
    createOrder,
     fetchOrdersByUser,
      deleteOrder,
       updateOrder,
       fetchAllOrders
 } from '../controllers/order.controller.js';

const router = Router();
router.post('/', createOrder)
      .get('/own/', fetchOrdersByUser)
      .delete('/:id', deleteOrder)
      .patch('/:id', updateOrder)
      .get('/',fetchAllOrders)


export default router;