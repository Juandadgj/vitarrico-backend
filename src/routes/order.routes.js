import { Router } from "express";
import {
    allOrders,
    createOrder,
    updateOrder,
    deleteOrder
} from '../controller/order.controller';
import { verifyToken, isAdmin } from '../middlewares/authJwt';

const router = Router();

router.get('/orders', [verifyToken, isAdmin], allOrders);

router.post('/order', [verifyToken, isAdmin], createOrder);

router.put('/order', [verifyToken, isAdmin], updateOrder);

router.delete('/order', [verifyToken, isAdmin], deleteOrder);

export default router;
