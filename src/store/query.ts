import { createSlice } from "@reduxjs/toolkit";
import { Languages, SortBy, EndPoints, Categories ,Country} from "../types/types";

interface IQuery {
  endpoint: any;
  query: {
    search: string;
    endpoint: EndPoints;
    filters: {
      country: Country;
      catagory: Categories;
      sources: string;
      date:string;
      language: Languages; //Options from the api
    };
    sortby: SortBy; //Options from the api
    everythingFilters:string[]
  };
}
const querySlice = createSlice({
  name: "query",
  initialState: {
    query: {
      search: "",
      endpoint: "top-headlines",
      filters: {
        language: "",
        date: new Date().toDateString(),
        country: "",
        catagory: "",
        sources: "",
      },
      sortby: "publishedAt",
    },
  } as IQuery,
  reducers: {
    updateSearch: (state, action) => {
      state.query.search = action.payload;
    },
    updateEndPoint: (state, action) => {
      state.query.endpoint = action.payload;
    },
    updateFilters: (state, action) => {
      state.query.filters = { ...state.query.filters, ...action.payload };
      // state.query.filters.country = action.payload.country;
      // state.query.filters.catagory = action.payload.catagory;
      // state.query.filters.language = action.payload.language;
      // state.query.filters.date = action.payload.date;
      // state.query.filters.sources = action.payload.sources;
    },
    updateSortBy: (state, action) => {
      state.query.sortby = action.payload;
    },
  },
});
export const updateSearch = querySlice.actions.updateSearch;
export const updateEndPoint = querySlice.actions.updateEndPoint;
export const updateFilters = querySlice.actions.updateFilters;
export const updateSortBy = querySlice.actions.updateSortBy;

export default querySlice.reducer;
