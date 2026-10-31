import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 0,
    perPage: 4,
  },
  reducers: {
    loadMore: (state) => {
      state.page += 1;
    },
  },
});

export const { loadMore } = paginationSlice.actions;
export default paginationSlice.reducer;