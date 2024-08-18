import React from "react";
import "./temp.css";
import Movielistcards from "./Movielistcards";

const Movielist = ({ moviedata, getMovieInfo }) => {
  return (
    <>
      <div
        className="flex md:h-full  md:space-x-4 h-full space-x-4 overflow-auto"
        id="movieScrollBar"
      >
        {moviedata.map((ele, index) => (
          <Movielistcards
            getMovieInfo={getMovieInfo}
            key={index}
            data={ele}
            index={index}
          ></Movielistcards>
        ))}
      </div>
    </>
  );
};

export default Movielist;
