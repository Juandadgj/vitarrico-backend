import { Router } from "express";
import {
    allProviders,
    createProvider,
    updateProvider,
    deleteProvider
} from '../controller/provider.controller';

const router = Router();

router.get('/providers', allProviders);

router.post('/provider', createProvider);

router.put('/provider', updateProvider);

router.delete('/provider', deleteProvider);

export default router;
