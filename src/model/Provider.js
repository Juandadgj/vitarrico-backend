import {Schema, model} from 'mongoose';

const Provider = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    direction: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('provider', Provider);
