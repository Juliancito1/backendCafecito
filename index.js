import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import * as dotenv from 'dotenv'
import './src/database/dbConnection'
import productosRouter from './src/routes/productos.routes'
import usuarioRouter from './src/routes/usuarios.routes'
dotenv.config(); //puedo leer variables de entorno
//crear una instancia de express
const app = express();

//configurar un puerto
app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), ()=>{
    console.log('Estoy en el puerto ' + app.get("port"));
})

//middlewares: funciones que ejecutan alguna tarea antes de llegar a las rutas
app.use(cors()); //permite conexiones remotas.
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({extended: true})); //permite en el objeto request los strings y arrays
app.use(morgan("dev")) //nos da informacion extra en la terminal

//rutas
// http://localhost:4000/productos/apicafe/productos

app.use("/apicafe",productosRouter)
app.use('/apicafe/auth',usuarioRouter)