import express from 'express';
import Router from 'express';
import {USERS} from './info.mjs';
import {RESTAURANTES} from './info.mjs';


const router = Router();
const app = express();


//parsear y tratar como json el request
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });


app.get('/restaurantes', (req, res)=>{
   res.send(RESTAURANTES);   
   console.log(USERS)
   console.log(req);
})


app.post('/restaurantes/:id', (req, res)=>{       
      console.log(req.params)
})

app.listen(3000, ()=>{
   console.log('API REST corriendo en http localhost:3000');
})
