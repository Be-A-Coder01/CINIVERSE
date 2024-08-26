import { configureStore } from "@reduxjs/toolkit";
import topRatedMovieSlice from "../features/topRatedMovieSlice";
import tvShowData from "../features/tvShowsSlice";
import poster from "../features/posterMovies";
import currentPosterSlice from "../features/getCurrentPoster";
import  displaySlice  from "../features/getDisplayStatus";

export const store = configureStore({
  reducer: {
    topMovies: topRatedMovieSlice,
    tvShows: tvShowData,
    moviesPoster: poster,
    currentPoster: currentPosterSlice,
    status: displaySlice,
  },
});
