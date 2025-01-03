import React from "react";
import { bodyStyles, mainHeadingStyles } from "../styles";
import { creator } from "../constants/data";
import myImage from "../assets/myImage.jpg";

const Hero = () => {
  return (
    <div className="w-full mt-16 flex flex-col gap-y-4 gap-x-24 justify-center items-center md:flex-row-reverse">
      <img
        className="h-36 md:h-48 lg:h-72 w-auto object-cover rounded-lg shadow-2xl shadow-primary"
        src={myImage}
        alt="Profile Image"
      />

      <div className="flex flex-col gap-4 items-center">
        <p className={mainHeadingStyles}>
          Hi there, I'm <span className="text-primary">{creator.name}</span>
        </p>

        <p className={`${bodyStyles} text-center`}>{creator.info}</p>
      </div>
    </div>
  );
};

export default Hero;
