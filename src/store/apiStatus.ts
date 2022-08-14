import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
};
const apiStatusSlice = createSlice({
  name: "apiStatus",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const setLoadingGlobal = apiStatusSlice.actions.setLoading;
export const setErrorGlobal = apiStatusSlice.actions.setError;

export default apiStatusSlice.reducer;
