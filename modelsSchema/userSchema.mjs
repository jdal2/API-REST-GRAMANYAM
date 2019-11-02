import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    password: String,
    email: String,
    direccion: String,
    telefono: Number,
})


export default mongoose.model('User', UserSchema);