import { Router } from 'express';
import { 
    allUsers, 
    createUser, 
    updateUser, 
    deleteUser, 
    login 
} from '../controller/user.controller';

const router = Router();

router.get('/user', allUsers);

router.post('/user', createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

router.post('/login', login);

export default router;