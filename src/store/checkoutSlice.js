import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  paymentMethod: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
      return state;
    },
  },
});

export const { setFormData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
