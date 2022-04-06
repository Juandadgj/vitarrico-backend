import {Schema, model, Types} from 'mongoose';

const Provider = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    products: {
        type: Array,
        required: true
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
