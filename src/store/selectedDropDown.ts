import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sources:false,
  country:false
};
const selectedSlice = createSlice({
  name: "selected",
  initialState: initialState,
  reducers: {
    selectSources: (state, action) => {
      state.sources = action.payload;
    },
    selectCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});
export const selectSources = selectedSlice.actions.selectSources;
export const selectCountry = selectedSlice.actions.selectCountry;


export default selectedSlice.reducer;
