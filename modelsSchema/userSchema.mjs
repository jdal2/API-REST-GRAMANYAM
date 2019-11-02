import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    "name": string,
    "password": string,
    "email": string,
    "direccion": string,
    "telefono": number,
})


export default mongose.model('User', UserSchema);