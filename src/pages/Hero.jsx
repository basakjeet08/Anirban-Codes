import React from "react";
import { easeIn, motion } from "framer-motion";
import { bodyStyles, mainHeadingStyles } from "../styles";
import { heroData } from "../constants/data";
import { horizontalSlide } from "../animations/variant";

const Hero = () => {
  // UI Data for the Hero Section
  const { id, name, info, profileImage } = heroData;

  return (
    <div
      id={id}
      className="w-full pt-32 flex flex-col gap-y-8 gap-x-24 justify-center items-center lg:flex-row-reverse"
    >
      <motion.img
        className="w-1/3 max-w-80 max-h-80 object-cover rounded-full shadow-2xl shadow-primary outline-dashed outline-primary outline-offset-4 lg:outline-offset-8"
        src={profileImage.src}
        alt={profileImage.alt}
        variants={horizontalSlide("left")}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      />

      <motion.div
        className="flex flex-col gap-4 items-center"
        variants={horizontalSlide("right")}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <p className={`${mainHeadingStyles} text-center`}>
          Hi there, I'm <span className="text-primary">{name}</span>
        </p>

        <p className={`${bodyStyles} text-center`}>{info}</p>
      </motion.div>
    </div>
  );
};

export default Hero;
