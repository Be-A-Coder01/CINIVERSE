import React from "react";
import { Link } from "react-router-dom";
const Movielistcards = ({ data, index, getMovieInfo }) => {
  let handleclick = () => {
    getMovieInfo(data);
  };

  return (
    <>
      <div
        key={index}
        className=" text-center   md:h-full md:flex  md:flex-col  lg:h-full  rounded-md lg:flex lg:flex-col  items-center md:space-y-4 "
        onClick={handleclick}
      >
        <div className="rounded-md sm:h-44 sm:w-32 md:h-72  md:w-48">
          <Link to="/Movieinfo">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                data.poster_path || data.backdrop_path
              }`}
              className="w-full rounded-2xl  h-full"
            />
          </Link>
        </div>
        <div>
          <p className="text-white ">⭐⭐⭐⭐⭐</p>
          <p className="text-white  font-normal text-xs sm:text-xs sm:w-32 md:text-xl   md:w-48 ">
            {data.title || data.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movielistcards;
