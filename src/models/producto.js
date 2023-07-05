import { Schema, model } from "mongoose";

const productoScheme = new Schema({
  nombreProducto: {
    type: String,
    minLength: 2,
    maxLength: 100,
    unique: true,
    required: true,
  },
  precio: {
    type: Number,
    min: 50,
    max: 9999,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const Producto = model("producto", productoScheme);

export default Producto;
