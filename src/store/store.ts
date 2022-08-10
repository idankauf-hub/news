import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./query";
import selectedReducer from "./selectedDropDown";
export const store = configureStore({
  reducer: {
    query: queryReducer,
    selected: selectedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
