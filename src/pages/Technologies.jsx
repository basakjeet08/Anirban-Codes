import React from "react";
import { technologyData } from "../constants/data";
import { bodyStyles, subHeadingStyles } from "../styles";
import { scaleIn } from "../animations/variant";
import { motion } from "framer-motion";
import { horizontalSlide } from "../animations/variant";

const Technologies = () => {
  // UI Data for Technologies
  const { sectionHeading, bodyText, techList } = technologyData;

  return (
    <div className="flex flex-col gap-4 pt-6">
      <h1 className={subHeadingStyles}>{sectionHeading}</h1>
      <motion.div
        className="overflow-hidden"
        variants={horizontalSlide("right")}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <p className={bodyStyles}>{bodyText}</p>
      </motion.div>

      <div className="flex flex-wrap gap-4">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            className="h-16 w-16 flex justify-center items-center"
            variants={scaleIn(index)}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
          >
            <img
              className={`p-2 h-14 rounded-xl shadow-lg ${tech.shadow} hover:h-16 transition-all duration-300`}
              src={tech.imgSrc}
              alt={tech.stack + " Logo"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
