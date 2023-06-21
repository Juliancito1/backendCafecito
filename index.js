import express from 'express'

//configurar un puerto
//crear una instancia de express
const app = express();

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), ()=>{
    console.log('Estoy en el puerto ' + app.get("port"));
})