import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./query";
import selectedReducer from "./selectedDropDown";
import apiStatusReducer from "./apiStatus";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    selected: selectedReducer,
    apiStatus: apiStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
