import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/producto.controllers";
import { check } from "express-validator";

const router = Router();

// app.get('/prueba', (req,res) => {
//     res.send('esto es una prueba de la peticion GET a mi backend')
// })

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es un dato obligatorio")
        .isLength({min: 2, max: 100})
        .withMessage('El nombre del producto debe contener entre 2 y 100 caracteres inclusive'),
      check("precio")
        .notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un número')
        .custom((value)=>{
          if(value >= 50 && value < 10000)
          {
            return true;
          }else{
            throw new Error('El precio debe estar entre 50 y 9999')
          }
        })
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(editarProducto)
  .get(obtenerProducto);

export default router;
