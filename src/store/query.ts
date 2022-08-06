import { createSlice } from "@reduxjs/toolkit";
import { Languages, SortBy, EndPoints, Categories } from "../types/types";

interface IQuery {
  query: {
    search: {
      input: string;
      endpoint: EndPoints;
    };
    filters: {
      country: string;
      catagory: Categories;
      sources: string;
      date: Date | string;
      language: Languages; //Options from the api
    };
    sortby: SortBy; //Options from the api
  };
}
const querySlice = createSlice({
  name: "query",
  initialState: {
    query: {
      search: { input: "", endpoint: "top-headlines" },
      filters: {
        language: "",
        date: new Date(),
        country: "",
        catagory: "",
        sources: "",
      },
      sortby: "publishedAt",
    },
  } as IQuery,
  reducers: {
    updateSearch: (state, action) => {
      state.query.search.input = action.payload.input;
      state.query.search.endpoint = action.payload.endpoint;
    },
    updateFilters: (state, action) => {
      state.query.filters.country = action.payload.country;
      state.query.filters.catagory = action.payload.catagory;
      state.query.filters.language = action.payload.language;
      state.query.filters.date = action.payload.date;
      state.query.filters.sources = action.payload.sources;
    },
    updateSortBy: (state, action) => {
      state.query.sortby = action.payload;
    },
  },
});
export const updateSearch = querySlice.actions.updateSearch;
export const updateFilters = querySlice.actions.updateFilters;
export const updateSortBy = querySlice.actions.updateSortBy;

export default querySlice.reducer;
