import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart ? JSON.parse(savedCart) : [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;