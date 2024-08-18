import React from "react";
import { Link } from "react-router-dom";

const Backbutton = () => {
  return (
    <div>
      <div className="mb-3  px-6">
        <Link to="/">
          <i className="fa-solid fa-arrow-left  text-white font-bold text-4xl hover:text-red-600 "></i>
        </Link>
      </div>
    </div>
  );
};

export default Backbutton;
