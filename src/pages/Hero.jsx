import React from "react";
import { bodyStyles, mainHeadingStyles } from "../styles";
import { heroData } from "../constants/data";

const Hero = () => {
  // UI Data for the Hero Section
  const { id, name, info, profileImage } = heroData;

  return (
    <div
      id={id}
      className="w-full mt-32 flex flex-col gap-y-4 gap-x-24 justify-center items-center lg:flex-row-reverse"
    >
      <img
        className="h-36 md:h-48 lg:h-72 w-auto object-cover rounded-lg shadow-2xl shadow-primary"
        src={profileImage.src}
        alt={profileImage.alt}
      />

      <div className="flex flex-col gap-4 items-center">
        <p className={`${mainHeadingStyles} text-center`}>
          Hi there, I'm <span className="text-primary">{name}</span>
        </p>

        <p className={`${bodyStyles} text-center`}>{info}</p>
      </div>
    </div>
  );
};

export default Hero;
