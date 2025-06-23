"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price, quantity = 1 } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.findIndex((item) => item.id === id);
      if (existingItem !== -1) {
        state.items[existingItem].quantity += quantity;
      } else {
        // If it doesn't exist, add the new item to the cart
        state.items.push({
          id,
          name,
          image,
          price,
          quantity,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Optionally, remove item if quantity reaches 0
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    deleteFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
