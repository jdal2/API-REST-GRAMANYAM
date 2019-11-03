import mongoose from 'mongoose'


const RestaurantSchema = mongoose.Schema({    
    id: String,
    name: String,
    email: {
        type:String,
        required: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },       
    direccion: String,
    poblacion: String,
    telefono: {
        type: Number,
        min: [600000000, 'no válido'],
        max: [999999999, 'no válido']
    },
    website: String,    
    categoria: String,
    descripcion: String      
})

export default mongoose.model('Restaurant', RestaurantSchema)
