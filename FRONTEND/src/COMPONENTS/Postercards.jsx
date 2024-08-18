import React, { useEffect } from "react";
import "./temp.css";
import { fetchTvShows } from "../features/tvShowsSlice";
import { updatecurrentPoster } from "../features/getCurrentPoster";
import { useDispatch, useSelector } from "react-redux";

const Postercards = ({ card, retrieve }) => {
  let dispatch = useDispatch();
  let handleclick = () => {
    console.log(card, "card");
    dispatch(updatecurrentPoster(card));
    // dispatch(fetchTvShows());
    // retrieve(card);
  };

  return (
    <>
      {/* {card && (
        <div className=" my-2 w-20  border-2 rounded-lg ">
          <img
            src={card.Poster}
            className=" rounded-lg "
            onClick={handleclick}
          />
        </div>
      )} */}

      {card && (
        <img
          // src={card.Poster}
          src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
          className="border-2 sm:w-[80px] my-1 w-[40px] h-[60px] sm:h-[70px] sm:mx-2  md:h-[100px] md:w-[70px] rounded-lg "
          onClick={handleclick}
        />
      )}
    </>
  );
};

export default Postercards;
