import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage(
      "El nombre del producto debe contener entre 2 y 100 caracteres inclusive"
    ),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => {
      if (value >= 50 && value < 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 50 y 9999");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|svg)$/)
    .withMessage("La imagen debe tener el formato adecuado (jpg, png, svg)"),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Salado", "Dulce", "Bebida Caliente", "Bebida Fria"])
    .withMessage("Debe ingresar una categoria valida"),
  //al final de la validacion invoco a resultadoValidacion
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarProducto;
