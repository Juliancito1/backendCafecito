import { validationResult } from "express-validator";

const resultadoValidacion = (req,res,next)=>{
    //trabajar con el resultado de la validacion
    const errors = validationResult(req);
    //errors.isEmpty() true: si esta vacio
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errores: errors.array(),
      });
    }
    next();
};

export default resultadoValidacion;
