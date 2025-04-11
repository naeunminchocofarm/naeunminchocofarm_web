import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState : 5,
  reducers : {
    increase : (state) => {
      return state + 1
    },
    handleCounter : (state, action) => {
      return state + action.payload
    }
  }
});

export const {increase, handleCounter} = counterSlice.actions;
export default counterSlice;




