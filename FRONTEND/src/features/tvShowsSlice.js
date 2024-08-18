import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTvShows = createAsyncThunk(
  "fetchTvShows",
  async (data, { rejectWithValue }) => {
    let response = await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=9f7e31e786dc399c408338dbba616171"
    );

    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const tvShowsSlice = createSlice({
  name: "tvShowsSlice",
  initialState: {
    tvShowData: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTvShows.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTvShows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tvShowData = action.payload;
    });
    builder.addCase(fetchTvShows.rejected, (state, action) => {
      state.tvShowData = action.payload;
    });
  },
});

export default tvShowsSlice.reducer;
