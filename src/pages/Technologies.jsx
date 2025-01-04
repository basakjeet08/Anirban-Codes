import React from "react";
import { technologies } from "../constants/data";
import { subHeadingStyles } from "../styles";

const Technologies = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={subHeadingStyles}>Technologies</h1>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="h-16 w-16 flex justify-center items-center"
          >
            <img
              className={`p-2 h-14 rounded-xl shadow-lg ${tech.color} hover:h-16 transition-all duration-300`}
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
