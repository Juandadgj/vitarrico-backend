import { Router } from 'express';
import { 
    allProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from '../controller/product.controller';

const router = Router();

router.get('/products', allProducts);

router.post('/product', createProduct);

router.put('/product', updateProduct);

router.delete('/product', deleteProduct);

export default router;
