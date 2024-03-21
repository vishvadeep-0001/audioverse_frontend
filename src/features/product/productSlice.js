import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./productApi";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const getAllProductsAsync = createAsyncThunk(
  "product/getAllProduct",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
