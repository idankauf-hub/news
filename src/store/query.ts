import { createSlice } from "@reduxjs/toolkit";
import {
  Languages,
  SortBy,
  EndPoints,
  Categories,
  Country,
} from "../types/types";

interface IQuery {
  query: {
    sources: any;
    search: string;
    endpoint: EndPoints;
    filters: {
      country: Country;
      category: Categories;
      sources: string;
      date: string;
      language: Languages; //Options from the api
    };
    sortby: SortBy; //Options from the api
    queryUrl: string;
  };
}

const initialState = {
  query: {
    search: "",
    endpoint: "top-headlines",
    filters: {
      language: "",
      date: "",
      country: "us",
      category: "",
      sources: "",
    },
    sortby: "publishedAt",
    queryUrl: "",
  },
};
const querySlice = createSlice({
  name: "query",
  initialState: initialState as IQuery,
  reducers: {
    updateSearch: (state, action) => {
      state.query.search = action.payload;
    },
    updateEndPoint: (state, action) => {
      state.query.endpoint = action.payload;
    },
    updateFilters: (state, action) => {
      state.query.filters = { ...state.query.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.query.filters = {
        language: "",
        date: "",
        country: "us",
        category: "",
        sources: "",
      };
    },
    updateSortBy: (state, action) => {
      state.query.sortby = action.payload;
    },
    updateQueryUrl: (state, action) => {
      state.query.queryUrl = action.payload;
    },
  },
});
export const updateSearch = querySlice.actions.updateSearch;
export const updateEndPoint = querySlice.actions.updateEndPoint;
export const updateFilters = querySlice.actions.updateFilters;
export const updateSortBy = querySlice.actions.updateSortBy;
export const resetFilters = querySlice.actions.resetFilters;
export const updateQueryUrl = querySlice.actions.updateQueryUrl;

export default querySlice.reducer;
