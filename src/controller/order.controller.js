import Order from '../model/Order';

export const allOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findOneAndUpdate({_id: id}, req.body);
        res.status(201).send(order);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findOneAndDelete({_id: id});
        res.status(200).send(order);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
