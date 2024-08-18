import { createSlice } from "@reduxjs/toolkit";

export const currentPosterSlice = createSlice({
  name: "currentPosterSlice",
  initialState: {
    currentPosterName: {
      _id: "667873067a5ec0648c617e7a",
      title: "Inside Out 2",
      vote_average: 7.875,
      overview:
        "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone. card",
      release_date: "2024-06-11",
      // Poster:
      //   "https://wallpapers.com/images/hd/avengers-endgame-fantasy-m8fbpfs2m580r7l3.jpg",

      backdrop_path: "/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    },
  },
  reducers: {
    updatecurrentPoster: (state, action) => {
      state.currentPosterName = action.payload;
    },
  },
});

export const { updatecurrentPoster } = currentPosterSlice.actions;

export default currentPosterSlice.reducer;
