import { createSlice } from "@reduxjs/toolkit";

interface IQuery {
  query: {
    input: string;
    endpoint: string;
    country: string;
    catagory: string;
    sources: string;
    sortby: "relevancy"|"popularity"|"publishedAt"; //Options from the api
    dates: Date | string;
    language: "ar"|"de"|"en"|"es"|"fr"|"he"|"it"|"nl"|"no"|"pt"|"ru"|"sv"|"ud"|"zh"|""; //Options from the api
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
      sortby: "publishedAt",
      language: "",
      dates: new Date(),
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
    addSortBy: (state, action) => {
      state.query.sortby = action.payload;
    },
    filterByLanguage: (state, action) => {
      state.query.language = action.payload;
    },
    filterByDates: (state, action) => {
      state.query.dates = action.payload;
    },
  },
});
export const addInput = querySlice.actions.addInput;
export const addEndPoint = querySlice.actions.addEndPoint;
export const filterByCountry = querySlice.actions.filterByCountry;
export const filterByCatagory = querySlice.actions.filterByCatagory;
export const filterBySources = querySlice.actions.filterBySources;
export const addSortBy = querySlice.actions.addSortBy;
export const filterByLanguage = querySlice.actions.filterByLanguage;
export const filterByDates = querySlice.actions.filterByDates;

export default querySlice.reducer;
