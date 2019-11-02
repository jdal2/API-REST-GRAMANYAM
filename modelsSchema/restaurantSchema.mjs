import mongoose from 'mongoose'


const RestaurantSchema = mongoose.Schema({    
    idUser: String,
    name: String,
    email: String,       
    direccion: String,
    poblacion: String,
    telefono: String,
    website: String,    
    categoria: String,
    descripcion: String      
})

export default mongoose.model('Restaurant', RestaurantSchema)
