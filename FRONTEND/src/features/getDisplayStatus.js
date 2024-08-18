import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "displaySlice",
  initialState: {
    status: false,
  },
  reducers: {
    getStatus: (state, action) => {
      state.status = action.payload;
      console.log(state.status, "state.status");
    },
  },
});

export const { getStatus } = displaySlice.actions;
export default displaySlice.reducer;
