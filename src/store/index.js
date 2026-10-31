import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";
import cartReducer from "./cartSlice"
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});
