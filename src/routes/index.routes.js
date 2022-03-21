import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/user', (req, res) => {
    console.log(req.body);
    res.send('User saved');
})

export default router;
