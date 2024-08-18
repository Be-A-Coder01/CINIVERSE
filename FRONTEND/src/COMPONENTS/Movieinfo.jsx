import React, { useEffect, useState } from "react";
import Backbutton from "./Backbutton";
import "./temp.css";
import YouTube from "react-youtube";

const Movieinfo = ({ state }) => {
  console.log(state, "state");
  const [videoId, setVideoId] = useState();
  const getMovieTrailer = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${state.id}/videos?api_key=9f7e31e786dc399c408338dbba616171&language=en-US`
    );
    try {
      let data = await response.json();
      setVideoId(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
    <>
      {state && (
        <div className="w-full sm:w-5/6  md:w-5/6  h-full rounded-2xl py-5   bg-[#18161F] lg:flex lg:flex-col ">
          <Backbutton></Backbutton>
          <div className=" flex-col px-3  sm:flex sm:flex-row  w-full sm:space-x-2 md:space-x-5 sm:px-10">
            <div className="sm:w-2/4 w-full ">
              <img
                src={
                  `https://image.tmdb.org/t/p/w500${state.poster_path} ` ||
                  `state.Poster`
                }
                className="w-full h-[280px] mb-4 sm:h-[200px] sm:w-[150px] md:w-full sm:my-0 md:h-[400px] rounded-2xl "
              />
            </div>
            <div className="text-white  flex flex-col space-y-2 sm:space-y-2 md:space-y-5 sm:w-2/4  md:py-10 md:px-10">
              <h1 className="text-xl sm:text-xl md:text-3xl">
                {state.title || state.name || state.Title}
              </h1>
              <div className="flex space-x-3">
                <p className="text-[#74686A] font-semibold sm:text-base md:text-lg">
                  {state.release_date}
                </p>
                <button className="text-white border-2 py-0 px-1 sm:px-1 md:px-2 rounded text-xs">
                  {state.vote_average || 9.6}
                </button>
              </div>
              <p className="sm:text-sm md:text-base">{state.overview}</p>
            </div>
          </div>
          <div
            className=" flex flex-col overflow-y-auto sm:flex-row space-x-3 sm:mx-10  my-7  sm:overflow-auto"
            id="scrollbar"
          >
            {videoId ? (
              videoId.map((ele) => (
                <YouTube className="rounded-lg " videoId={ele.key} />
              ))
            ) : (
              <h1 className="text-white">Loading...</h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Movieinfo;
