import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  birthdate: null,
  email: "",
  id: null,
  nDni: "",
  name: "",
  credentials: {},
};

const userSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const usuarioGlobal = (state) => state.usuario.length;

export default userSlice.reducer;
