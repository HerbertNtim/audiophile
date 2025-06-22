import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === id);
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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
