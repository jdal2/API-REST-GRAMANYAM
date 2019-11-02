import express from 'express';
import Router from 'express';
import {RESTAURANTES} from './info.mjs'
import {USERS} from './info.mjs';
import mongoose from 'mongoose';
import Restaurant from './modelsSchema/restaurantSchema.mjs';
import User from './modelsSchema/userSchema.mjs'

const router = Router();
const app = express();

mongoose.connect('mongodb://localhost/bdgramanyam', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res)=>{   
      if(err) return console.log(`No se ha podido conectar => ${err}`)
      console.log('Conectado a la base de datos.')   
      })

//parsear y tratar como json el request
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//

//tratar CORS error en Angular
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
//

app.post('/register', (req, res)=>{ 
   try{
   let user = new User();  
      Object.assign(user, req.body);
      user.save(err, userRegistrado =>{
         if(err) res.status(500).send({message: `Error al salvar en la base de datos`})

         res.status(200).send({
         message: `Usuario registrado con id => ${user.id}`,
         status: true
      });
      })
      


    
     
   }
   catch (error){
      res.send({message: `ha habido un error`})
   }
  
})

app.post('/restaurantes/register', (req, res)=>{ 
   let restaurant = new Restaurant();
   Object.assign(restaurant, req.body);
   restaurant.save()
   // console.log(`salida de restaurant`)
   // console.log(restaurant);
   // console.log(`salida de req.body=> ${req}`) 
   // console.log(req.body)  
   res.send('Restaurante introducido')
})


app.get('/restaurantes', (req, res)=>{
   res.send(RESTAURANTES);   
   // console.log(USERS)
   // console.log(req);
})

app.get('/restaurantes/:id', (req, res)=>{       
      console.log(req.params)
})



app.listen(3000, ()=>{
   console.log('API REST corriendo en http localhost:3000');
})
