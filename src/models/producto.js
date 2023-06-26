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
    min: 1,
    max: 10000,
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
