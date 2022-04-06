import {Schema, model, Types} from 'mongoose';

const User = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    document: {
        type: String,
        required: true,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    idRol: {
        type: Number,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('user', User);
