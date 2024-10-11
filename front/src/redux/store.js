import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./carritoSlice";
import userReducer from "./userSlice";
import appointmentsReducer from "./appointments.Slice";

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
    usuario: userReducer,
    appointments: appointmentsReducer,
  },
});
