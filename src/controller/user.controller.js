import User from '../model/User';
import bcrypt from 'bcrypt';

export const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const { password } = user;
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const user = await User.findByIdAndUpdate({_id: id}, req.body);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({_id: id});
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const login = async (req, res) => {
    try {
        const {mail, password} = req.body;
        const user = await User.findOne({mail: mail});
        if (!mail || !password) {
            throw new Error('Fields required!');
        }
        if (await bcrypt.compare(password, user.password)) {
            res.status(202).send({successful: true});
        } else {
            res.status(401).send({successful: false});
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
