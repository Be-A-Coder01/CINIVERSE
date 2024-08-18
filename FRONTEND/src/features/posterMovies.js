import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosterMovies = createAsyncThunk(
  "fetchPosterMovies",
  async (data, { rejectWithValue }) => {
    let response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=9f7e31e786dc399c408338dbba616171"
    );

    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const posterMoviesSlice = createSlice({
  name: "posterMoviesSlice",
  initialState: {
    moviePosterData: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosterMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosterMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviePosterData = action.payload;
    });
    builder.addCase(fetchPosterMovies.rejected, (state, action) => {
      state.moviePosterData = action.payload;
    });
  },
});

export default posterMoviesSlice.reducer;
