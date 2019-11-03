import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    password: {
        type: String,
        minlength: [8, `no válida. Debe contener 8 o más caracteres, mayúsculas y un simbolo especial.`]
    },
    email: {
        type:String,
        required: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    direccion: String,
    telefono: {
        type: Number,
        min: [600000000, 'no válido'],
        max: [999999999, 'no válido']
    },
})

// 616161616

export default mongoose.model('User', UserSchema);