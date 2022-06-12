import { Router } from 'express';
import { 
    allProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from '../controller/product.controller';
import { verifyToken, isAdmin } from '../middlewares/authJwt';

const router = Router();

router.get('/products', allProducts);

router.post('/product', [verifyToken, isAdmin], createProduct);

router.put('/product', [verifyToken, isAdmin], updateProduct);

router.delete('/product', [verifyToken, isAdmin], deleteProduct);

export default router;
