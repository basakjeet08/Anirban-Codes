import React from "react";
import { technologyData } from "../constants/data";
import { bodyStyles, subHeadingStyles } from "../styles";

const Technologies = () => {
  // UI Data for Technologies
  const { sectionHeading, bodyText, techList } = technologyData;

  return (
    <div className="flex flex-col gap-4 pt-6">
      <h1 className={subHeadingStyles}>{sectionHeading}</h1>
      <p className={bodyStyles}>{bodyText}</p>
      <div className="flex flex-wrap gap-4">
        {techList.map((tech, index) => (
          <div
            key={index}
            className="h-16 w-16 flex justify-center items-center"
          >
            <img
              className={`p-2 h-14 rounded-xl shadow-lg ${tech.shadow} hover:h-16 transition-all duration-300`}
              src={tech.imgSrc}
              alt={tech.stack + " Logo"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
