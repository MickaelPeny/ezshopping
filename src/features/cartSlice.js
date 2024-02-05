import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existIndex >= 0) {
        state.items[existIndex].quantity += action.payload.quantity;
      } else {
        let newItem = { ...action.payload, quantity: action.payload.quantity };
        state.items.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },

    adjustQuantity: (state, action) => {
      const existIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existIndex >= 0) {
        state.items[existIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, adjustQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
