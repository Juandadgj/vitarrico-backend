import { Router } from "express";
import {
    allOrders,
    createOrder,
    updateOrder,
    deleteOrder
} from '../controller/order.controller';

const router = Router();

router.get('/orders', allOrders);

router.post('/order', createOrder);

router.put('/order', updateOrder);

router.delete('/order', deleteOrder);

export default router;
