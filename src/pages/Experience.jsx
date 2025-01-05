import React, { useState } from "react";
import { experienceData } from "../constants/data";
import {
  subHeadingStyles,
  titleStyles,
  captionStyles,
  bodyStyles,
  primaryCard,
  primaryButtonStyles,
} from "../styles";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

const ExperienceItem = ({
  experience: { company, timeline, jobTitle, location, description },
}) => {
  // Expanding State Variables and helper functions
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded((prev) => !prev);

  return (
    // Card Container
    <div className={primaryCard}>
      {/* Company and the Location is defined here */}
      <div className="flex gap-2 justify-between items-baseline">
        <p className={titleStyles}>{company}</p>

        <div className="flex gap-2 items-center">
          <p className={captionStyles}>{location}</p>

          <div onClick={toggle} className={`${primaryButtonStyles} p-1`}>
            {isExpanded ? (
              <IoIosArrowDropup className="h-5 w-5" />
            ) : (
              <IoIosArrowDropdown className="h-5 w-5" />
            )}
          </div>
        </div>
      </div>

      {/* Position and the Timeline is shown here */}
      <div className="flex gap-2 justify-between items-baseline">
        <p className={captionStyles}>{jobTitle}</p>
        <p className={captionStyles}>{timeline}</p>
      </div>

      {/* Description is shown here if the user expands the card */}
      {isExpanded && <p className={bodyStyles}>{description}</p>}
    </div>
  );
};

const Experience = () => {
  // UI Data for Experience
  const { id, sectionHeading, expList } = experienceData;

  return (
    // Experience Container
    <div id={id} className="flex flex-col gap-4 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {expList.map((experience, index) => (
          <div key={index}>
            <ExperienceItem experience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
