import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productItems: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.productItems.push(action.payload);
    },
  },
});

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
