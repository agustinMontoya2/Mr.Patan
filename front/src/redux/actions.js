import { alimentos } from "./ventas";

const AGREGAR_PRODUCTO = "AGREAR_PRODUCTO";
const QUITAR_PRODUCTO = "QUITAR_PRODUCTO";

export const agregarProducto = (producto) => {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
};
export const quitarProducto = (id) => {
  return {
    type: QUITAR_PRODUCTO,
    payload: id,
  };
};

agregarProducto(alimentos[1]);
