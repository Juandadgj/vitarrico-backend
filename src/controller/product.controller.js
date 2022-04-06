import Product from '../model/Product';

export const allProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new Error('ID required!');
        }
        const product = await Product.findOneAndUpdate({_id: id}, req.body);
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new Error('ID required!');
        }
        const product = await Product.findOneAndUpdate({_id: id});
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
