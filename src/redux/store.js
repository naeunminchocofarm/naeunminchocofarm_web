import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countSlice";

export const store = configureStore({
  reducer:{
    //오류나서 불러온 임시 reducer
    counter:counterSlice.reducer
  }
});



