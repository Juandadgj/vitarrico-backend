import { Router } from 'express';
import {
    updateUser,
    deleteUser,
    signup,
    signin
} from '../controller/user.controller';
import { verifyToken } from '../middlewares/authJwt';

const router = Router();

router.put('/user/:id', verifyToken, updateUser);

router.delete('/user/:id', verifyToken, deleteUser);

router.post('/signup', signup);

router.post('/signin', signin);

export default router;
