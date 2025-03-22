import { createSlice } from "@reduxjs/toolkit";

const CompareSlice = createSlice({
  name: "CompareSlice",
  initialState: [],
  reducers: {
    addToCompare: (state, action) => {
      if (!state.some((product) => product.image === action.payload.image)) {  
        state.push(action.payload);
      }
   
    },

    removeFromCompare: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCompare, removeFromCompare } = CompareSlice.actions;
export default CompareSlice.reducer;
