import React, { useEffect, useState } from "react";
import Backbutton from "./Backbutton";
import Movielistcards from "./Movielistcards";

const Categorymovie = ({ state, getMovieInfo }) => {
  const [categorymovie, setCategorymovie] = useState();
  let fetchMovie = async (value) => {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9f7e31e786dc399c408338dbba616171&query=${value}`
    );

    let result = await res.json();
    console.log(result.results, "result");
    setCategorymovie(result.results);
  };

  useEffect(() => {
    fetchMovie(state);
  }, [state]);

  return (
    <>
      <div className="md:w-5/6  rounded-2xl py-5 bg-[#18161F] h-fit lg:flex lg:flex-col px-10 space-y-5">
        <Backbutton></Backbutton>
        <div className="">
          <div className=" flex  flex-wrap space-x-7 space-y-10 ">
            {categorymovie &&
              categorymovie.map((ele, index) => (
                <Movielistcards
                  data={ele}
                  index={index}
                  getMovieInfo={getMovieInfo}
                ></Movielistcards>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorymovie;
