import { Router } from "express";
import {
    allProviders,
    createProvider,
    updateProvider,
    deleteProvider
} from '../controller/provider.controller';
import { isAdmin, verifyToken } from "../middlewares/authJwt";

const router = Router();

router.get('/providers', [verifyToken, isAdmin], allProviders);

router.post('/provider', [verifyToken, isAdmin], createProvider);

router.put('/provider/:id', [verifyToken, isAdmin], updateProvider);

router.delete('/provider/:id', [verifyToken, isAdmin], deleteProvider);

export default router;
