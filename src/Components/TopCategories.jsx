import React from "react";
import { Link } from "react-router";
import metter from "../assets/top_categories/testmeter.webp";
import prototype from "../assets/top_categories/prototype.webp";

const TopCategories = () => {
  return (
    <div>
      <div className="my-2 md:my-0 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-5">
        <Link className="w-full h-full" to="/">
          <img className="w-full h-full" src={metter} />
        </Link>
        <Link className="w-full h-full" to="/">
          <img className="w-full h-full" src={prototype} />
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
