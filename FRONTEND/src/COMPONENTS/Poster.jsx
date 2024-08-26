import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Postercards from "./Postercards";
import { fetchPosterMovies } from "../features/posterMovies";
import { Link } from "react-router-dom";

const Poster = ({ getMovieInfo }) => {
  const dispatch = useDispatch();

  let posterData = async () => {
    dispatch(fetchPosterMovies());
  };

  const { moviePosterData } = useSelector((state) => state.moviesPoster);
  // console.log(moviePosterData, "moviePosterData");

  useEffect(() => {
    posterData();
  }, []);

  const { currentPosterName } = useSelector((state) => state.currentPoster);

  let handleclick = () => {
    getMovieInfo(currentPosterName);
  };

  return (
    <>
      {currentPosterName && (
        <div className="rounded-none sm:rounded-3xl md:h-96 lg:h-96 w-full relative -z-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${currentPosterName.backdrop_path}`}
            className=" rounded-none sm:rounded-3xl h-full w-full opacity-50"
          />
          <div className="lg:space-y-0 p-3 flex sm:flex-col  absolute top-0 h-full w-full ">
            <div className=" w-4/5 sm:h-5/6 flex space-y-3 flex-col sm:space-y-4  sm:p-5">
              <p className="text-white text-base sm:text-3xl md:text-5xl md:font-semibold font-sans">
                {currentPosterName.title}
              </p>
              <div className="flex space-x-2">
                <p className="text-[#bab4b5] text-xs sm:text-sm md:text-base font-semibold ">
                  {currentPosterName.release_date}
                </p>
                <button className="text-white border-2 text-[10px] px-1 sm:text-xs sm:px-1 md:text-xs md:py-0 md:px-2  lg:py-0 lg:px-2 rounded">
                  {currentPosterName.vote_average}
                </button>
              </div>
              <p className="text-[#bab4b5] hidden sm:block sm:h-9 sm:overflow-auto sm:text-sm  md:h-14 md:text-lg md:w-3/6 md:overflow-hidden lg:overflow-hidden lg:w-3/6 font-semibold ">
                {currentPosterName.overview}
              </p>
              <button
                className="text-white rounded-sm py-1  w-16 text-[10px] sm:rounded-md sm:text-[12px] sm:w-24 sm:py-1 md:text-lg md:rounded-lg  md:w-36 bg-red-700  md:py-2 "
                onClick={handleclick}
              >
                <Link to="/Movieinfo">Watch Now</Link>
              </button>
            </div>

            {moviePosterData && (
              <div className=" sm:py-2  md:py-1 md:px-2 sm:h-2/6  w-1/5  flex sm:w-full justify-end">
                <div
                  className=" flex flex-col overflow-y-auto sm:h-full sm:flex-row sm:overflow-x-auto sm:w-2/5   "
                  id="miniPosterSlider"
                >
                  <Postercards card={moviePosterData.results[1]}></Postercards>
                  <Postercards card={moviePosterData.results[2]}></Postercards>
                  <Postercards card={moviePosterData.results[3]}></Postercards>
                  <Postercards card={moviePosterData.results[4]}></Postercards>
                  <Postercards card={moviePosterData.results[5]}></Postercards>
                  <Postercards card={moviePosterData.results[6]}></Postercards>
                  <Postercards card={moviePosterData.results[7]}></Postercards>
                  <Postercards card={moviePosterData.results[8]}></Postercards>
                  <Postercards card={moviePosterData.results[9]}></Postercards>
                  <Postercards card={moviePosterData.results[10]}></Postercards>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Poster;
