import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  years: [1958, 2026],
  rates: [0, 100],
};

const rangeFilterSlice = createSlice({
  name: "rangeFilter",
  initialState,
  reducers: {
    handleYears(state, action) {
      state.years = action.payload;
    },
    handleRates(state, action) {
      state.rates = action.payload;
    },
  },
});

export const { handleYears, handleRates } = rangeFilterSlice.actions;
export default rangeFilterSlice.reducer;
