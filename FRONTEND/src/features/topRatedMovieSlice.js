import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopRatedMovieData = createAsyncThunk(
  "fetchMovieData",
  async (data, { rejectWithValue }) => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9f7e31e786dc399c408338dbba616171"
    );
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const topRatedMovieSlice = createSlice({
  name: "topRatedMovieSlice",
  initialState: {
    topRatedMovieData: null,
    isLoading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTopRatedMovieData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTopRatedMovieData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.topRatedMovieData = action.payload;
    });
    builder.addCase(fetchTopRatedMovieData.rejected, (state, action) => {
      state.isLoading = false;
      state.topRatedMovieData = action.payload;
    });
  },
});

export default topRatedMovieSlice.reducer;
