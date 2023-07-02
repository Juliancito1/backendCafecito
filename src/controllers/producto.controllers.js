import { validationResult } from "express-validator";
import Producto from "../models/producto";

// Controlador para obtener productos
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

// Controladores para crear un producto

export const crearProducto = async (req, res) => {
  try {
    //trabajar con el resultado de la validacion
    const errors = validationResult(req);
    //errors.isEmpty() true: si esta vacio
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errores: errors.array(),
      });
    } else {
      const productoNuevo = new Producto(req.body);
      await productoNuevo.save();
      res.status(201).json({ mensaje: "El producto fue creado correctamente" });
    }
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al crear el producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //obtener el id y luego solicitar a mongoose el borrar
    console.log(req.params.id);
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El producto no pudo ser eliminado",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    //extraer  el id del request y el body
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El producto fue actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El producto no pudo ser actualizado",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el producto buscado",
    });
  }
};
