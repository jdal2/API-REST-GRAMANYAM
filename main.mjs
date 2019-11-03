import express from 'express';
import Router from 'express';
import mongoose from 'mongoose';
import Restaurant from './modelsSchema/restaurantSchema.mjs';
import User from './modelsSchema/userSchema.mjs'



const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(function(req, res, next) { //tratar CORS error en Angular
   res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });



//REGISTER USER
app.post('/register', (req, res)=>{ 
   
   let user = new User();  
      Object.assign(user, req.body);
      user.save((err, userRegistrado) =>{  // Si no se captura el error con tryCatch, el throw error no permite que el server levante de nuevo.
         try{   
            if(err){
               res.status(500).send(err.message);               
            }       
            res.status(200).send({user: userRegistrado})
            console.log('usuario registrado')
         }
         catch{ 
            console.log(`Ha habido un error: 
            ${err.message}`)
         }                  
      }) 
})

// GetUser
app.get('/users/:idUser', (req, res)=>{
   User.findById(req.params.idUser);   
   console.log(req.params)
})

//REGISTER RESTAURANT
app.post('/restaurantes/', (req, res)=>{   
   let restaurant = new Restaurant();   
   Object.assign(restaurant, req.body);
   console.log(restaurant)   
   restaurant.save((err, restaurant)=>{
      try{
         if(err) return res.status(500).send(err.message);      
         console.log(restaurant)
   }
      catch{
         console.log(err)
      }
      
   })   
   res.send({message: 'Restaurante introducido'})
})

//LISTAR RESTAURANTS
app.get('/restaurantes', (req, res)=>{
   Restaurant.find({}, (err, RestaurantList)=> {
      res.send(RestaurantList);
   })
})

//DETALLE DE UN RESTAURANTE
app.get('/restaurantes/:Id', (req, res)=>{
   let restaurantID = req.params.Id;       
   Restaurant.findOne({id: restaurantID}, (err, restaurant)=>{
      res.send(restaurant)
      })
   console.log(req.params)
})








//
mongoose.connect('mongodb://localhost/bdgramanyam', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res)=>{   
      if(err) return console.log(`No se ha podido conectar => ${err}`)
      console.log('Conectado a la base de datos.')   
      })

app.listen(3000, ()=>{
   console.log('API REST corriendo en http localhost:3000');
})
