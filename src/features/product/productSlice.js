import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct } from "./productApi";

const initialState = {
  products: [],
  status: "idle",
  selectedProduct: null,
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const response = await fetchAllProduct();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
