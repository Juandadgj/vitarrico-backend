import {Schema, model, Types} from 'mongoose';

const Product = new Schema({
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
    barcode: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('product', Product);
