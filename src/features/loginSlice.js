import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstname: "Alan",
    lastname: "Turing",
    email: "alan@turing.dev",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;
