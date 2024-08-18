import React, { useEffect, useState } from "react";
import Poster from "./Poster";
import Movielist from "./Movielist";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovieData } from "../features/topRatedMovieSlice";
import { fetchTvShows } from "../features/tvShowsSlice";

const Moviesection = ({ getMovieInfo }) => {
  const [movie, setMovie] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedMovieData());
    dispatch(fetchTvShows());
  }, []);

  const { topRatedMovieData } = useSelector((state2) => state2.topMovies);
  const { tvShowData } = useSelector((state2) => state2.tvShows);
  console.log(tvShowData, "tv shows");
  console.log(topRatedMovieData, "movies");

  return (
    <>
      {tvShowData && (
        <div className=" sm:w-5/6 sm:px-3 sm:pt-3 md:w-5/6 md:px-5 md:pt-5 lg:w-5/6 bg-[#18161F] rounded-3xl lg:px-5 lg:pt-5 ">
          <Poster getMovieInfo={getMovieInfo}></Poster>

          <div className="sm:mt-14 mt-6">
            <p className="text-white my-3 mx-3 text-base sm:text-2xl sm:font-semibold sm:my-5">
              Weekly Trending movies
            </p>
            <Movielist
              getMovieInfo={getMovieInfo}
              moviedata={topRatedMovieData.results}
            ></Movielist>
          </div>
          <div className="sm:mt-14 mt-6">
            <p className="text-white my-3 mx-3 text-base sm:text-2xl sm:font-semibold sm:my-5">
              Latest Trending movies
            </p>
            <Movielist
              getMovieInfo={getMovieInfo}
              moviedata={topRatedMovieData.results.slice(9, 20)}
            ></Movielist>
          </div>

          <div className="sm:mt-14 mt-6">
            <p className="text-white my-3 mx-3 text-base sm:text-2xl sm:font-semibold sm:my-5">
              Best Tv Shows
            </p>
            <Movielist
              getMovieInfo={getMovieInfo}
              moviedata={tvShowData.results}
            ></Movielist>
          </div>
        </div>
      )}
    </>
  );
};

export default Moviesection;
