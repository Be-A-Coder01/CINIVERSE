import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ getCategory }) => {
  let categoriesList = [
    "Adventure",
    "Fantacy",
    "Animation",
    "Drama",
    "Horror",
    "Action",
    "Comedy",
    "History",
    "Western",
    "Thriller",
    "Crime",
    "Documentary",
    "Science Fiction",
    "Mystery",
    "Music",
    "Romance",
    "Family",
    "War",
    "TV Movie",
  ];

  const data = useSelector((state) => state.status);
  console.log(data, "data");

  let handleclick = (data) => {
    getCategory(data);
  };
  return (
    <>
      <div
        className=" mb-2  sm:sticky   sm:h-[90vh] sm:mb-0 sm:ml-2 sm:top-[80px] md:top-[120px] sm:pl-2  sm:w-1/6 md:w-1/6 md:pl-8 md:my-4 lg:w-1/6 lg:pl-8 lg:my-4"
        id="cat"
      >
        <p className="hidden sm:block text-white font-sans tracking-wider md:text-md lg:text-lg">
          Genre
        </p>
        <div
          className="flex  py-2   h-8 flex-row  overflow-x-auto sm:flex-col  sm:overflow-y-auto sm:h-5/6"
          id="scrollbar"
        >
          {categoriesList.map((item, index) => (
            <Link to="/Categorymovie" key={index}>
              <p
                key={index}
                className="  mx-1 text-[#3E4044]  sm:text-sm md:text-base font-semibold sm:my-2 md:my-2 lg:my-2 hover:text-white hover:duration-200 cursor-pointer "
                onClick={() => handleclick(item)}
              >
                {item}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
