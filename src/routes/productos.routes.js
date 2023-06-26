import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
} from "../controllers/producto.controllers";

const router = Router();

// app.get('/prueba', (req,res) => {
//     res.send('esto es una prueba de la peticion GET a mi backend')
// })

router.route("/productos").get(obtenerProductos).post(crearProducto);

export default router;
