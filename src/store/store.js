import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";

const savedCart = localStorage.getItem("cart");
const initialCartState = savedCart ? JSON.parse(savedCart) : [];

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: initialCartState,
    },
  },
});
