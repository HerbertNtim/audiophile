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
      const { id, name, image, price } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        return;
      } else {
        // If it doesn't exist, add the new item to the cart
        state.items.push({
          id,
          name,
          image,
          price,
        });
      }
    },

    deleteFromCart: (state, action) => {
      const id = action.payload;
        state.items = state.items.filter(item => item.id !== id)
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
