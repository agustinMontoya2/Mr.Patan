import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "carrito",
  initialState: [],
  reducers: {
    agregarProducto: (state, action) => {
      state.push(action.payload);
    },
    quitarProducto: (state, action) => {
      return state.filter((prod) => prod.marca !== action.payload);
    },
  },
});

export const { agregarProducto, quitarProducto } = carritoSlice.actions;
export const elementosAgregados = (state) => state.carrito.length;
export default carritoSlice.reducer;
