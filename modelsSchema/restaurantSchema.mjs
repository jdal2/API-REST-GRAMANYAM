import mongoose from 'mongoose'


const RestaurantSchema = mongoose.Schema({    
    'id': string,
    'name': string,
    'email': string,       
    'direccion': string,
    'poblacion': string,
    'telefono': string,
    'website': string,
    'photo': any,
    'categoria': string,
    'descripcion': string      
})

export default mongoose.model('Restaurant', RestaurantSchema)
