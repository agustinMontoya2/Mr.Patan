import { createSlice } from "@reduxjs/toolkit";

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {
    setAppointments: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
