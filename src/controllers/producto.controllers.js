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
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al crear el producto",
    });
  }
};
