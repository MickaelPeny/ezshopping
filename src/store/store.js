import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import loginReducer from "../features/loginSlice";

const savedCart = localStorage.getItem("cart");
const initialCartState = savedCart ? JSON.parse(savedCart) : [];
const savedLogin = localStorage.getItem("login");
const initialLoginState = savedLogin
  ? JSON.parse(savedLogin)
  : {
      user: {
        firstname: "Alan",
        lastname: "Turing",
        email: "alan@turing.dev",
      },
    };

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    login: loginReducer,
  },
  preloadedState: {
    cart: {
      items: initialCartState,
    },
    login: {
      user: initialLoginState,
    },
  },
});
