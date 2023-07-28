import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/list/listSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
