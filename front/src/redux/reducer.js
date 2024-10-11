import { createSlice } from "@reduxjs/toolkit";
import { agregarProducto, quitarProducto } from "./actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO":
      return [...state, action.payload];
    case "QUITAR_PRODUCTO":
      return state.filter((producto) => producto.id !== action.payload);
    default:
      return state;
  }
};
