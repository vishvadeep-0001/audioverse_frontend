import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productSlice from "../features/product/productSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice
  },
});
