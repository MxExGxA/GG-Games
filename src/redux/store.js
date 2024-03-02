import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import rangeFilterSlice from "./rangeFilterSlice";
import loadingSlice from "./loadingSlice";
const store = configureStore({
  reducer: {
    filter: filterSlice,
    rangeFilter: rangeFilterSlice,
    loadingHandler: loadingSlice,
  },
});

export default store;
