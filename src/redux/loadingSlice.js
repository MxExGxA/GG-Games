import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaded: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    handleLoadState(state) {
      state.loaded += 1;
    },
  },
});

export const { handleLoadState } = loadingSlice.actions;
export default loadingSlice.reducer;
