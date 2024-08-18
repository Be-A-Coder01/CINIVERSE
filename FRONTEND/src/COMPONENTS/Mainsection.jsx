import React, { useState } from "react";
import Category from "./Category";
import Moviesection from "./Moviesection";
import { Routes, Route } from "react-router-dom";
import Movieinfo from "./Movieinfo";
import Categorymovie from "./Categorymovie";

const Mainsection = () => {
  const [state, setState] = useState();

  let getMovieInfo = (value) => {
    setState(value);
    console.log(value);
  };

  let getCategory = (value) => {
    setState(value);
  };

  return (
    <>
      <div className="sm:py-0 sm:flex md:flex md:justify-between lg:flex md:my-6  ">
        <Category getCategory={getCategory}></Category>
        <Routes>
          <Route
            path="/"
            element={<Moviesection getMovieInfo={getMovieInfo}></Moviesection>}
          />
          <Route
            path="/Movieinfo"
            element={<Movieinfo state={state}></Movieinfo>}
          />

          <Route
            path="/Categorymovie"
            element={
              <Categorymovie
                getMovieInfo={getMovieInfo}
                state={state}
              ></Categorymovie>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default Mainsection;
