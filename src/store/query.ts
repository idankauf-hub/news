import { createSlice } from "@reduxjs/toolkit";

interface IQuery {
  query: {
    input: string;
    endpoint: string;
    country: string;
    catagory: string;
    sources: string;
  };
}
const querySlice = createSlice({
  name: "query",
  initialState: {
    query: {
      input: "",
      endpoint: "",
      country: "",
      catagory: "",
      sources: "",
    },
  } as IQuery,
  reducers: {
    addInput: (state, action) => {
      state.query.input = action.payload;
    },
    addEndPoint: (state, action) => {
      state.query.endpoint = action.payload;
    },
    filterByCountry: (state, action) => {
      state.query.country = action.payload;
    },
    filterByCatagory: (state, action) => {
      state.query.catagory = action.payload;
    },
    filterBySources: (state, action) => {
      state.query.sources = action.payload;
    },
  },
});
export const addInput = querySlice.actions.addInput;
export const addEndPoint = querySlice.actions.addEndPoint;
export const filterByCountry = querySlice.actions.filterByCountry;
export const filterByCatagory = querySlice.actions.filterByCatagory;
export const filterBySources = querySlice.actions.filterBySources;

export default querySlice.reducer;
