import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./countSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    auth: authSlice.reducer
  },
});
