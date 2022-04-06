import {Schema, model} from 'mongoose';

export const ROLES = ['client', 'admin'];

const Rol = new Schema({
    idRol : {
        type: Number,
        required: true,
    },
    rol: {
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

export default model('rol', Rol)
