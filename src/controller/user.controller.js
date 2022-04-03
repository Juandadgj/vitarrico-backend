import User from '../model/User';
import bcrypt from 'bcrypt';

export const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const { password } = user;
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)
        await user.save();
        res.send('User created :D');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        await User.updateOne({_id: id}, req.body)
        res.send(`User with id ${id} updated :D`);
    } catch (error) {
        res.send(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params);
        await User.remove({_id: id});
        res.send('User with id ${id} deleted :(')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const {mail, password} = req.body
        const user = await User.findOne({mail: mail})
        if (!mail || !password) {
            throw new Error('Fields required!')
        }
        if (await bcrypt.compare(password, user.password)) {
            res.send({successful: true})
        } else {
            res.send({successful: false})
        }
    } catch (error) {
        res.send(error)
    }
}
