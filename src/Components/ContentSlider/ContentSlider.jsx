import React from "react";
import SeeAll from "../SeeAll.jsx";

const ContentSlider = ({ title, btnText, content }) => {
  return (
    <div>
      <div className="container mx-auto my-16">
        <div className="flex items-center justify-between md:justify-start md:gap-10">
          <h1 className="text-lg font-semibold">
            {title || "Popular Categories"}
          </h1>
          {btnText && <SeeAll btnText={btnText} />}
        </div>
        <div>{content || "content"}</div>
      </div>
    </div>
  );
};

export default ContentSlider;
