import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    isRegister: localStorage.getItem("userId") !== null,
  },
  reducers: {
    isUserRegister: (state) => {
      state.isMenuOpen = state.isRegister;
    },
  },
});

export const { toggleMenu } = registrationSlice.actions;
export default registrationSlice.reducer;
