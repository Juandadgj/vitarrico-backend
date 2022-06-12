import {Schema, model, Types} from 'mongoose';

const Order = new Schema({
    client: {
        type: Types.ObjectId,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('order', Order);
