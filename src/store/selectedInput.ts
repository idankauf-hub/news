import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected:false,
};
const selectedInputSlice = createSlice({
  name: "selectedInput",
  initialState: initialState,
  reducers: {

    setSelectedInput: (state, action) => {
      state.selected = action.payload;
    },
  },
});
export const setSelectedInput = selectedInputSlice.actions.setSelectedInput;


export default selectedInputSlice.reducer;
