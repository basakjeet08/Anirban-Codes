import React, { useState } from "react";
import { experienceData } from "../constants/data";
import { AiFillDownCircle } from "react-icons/ai";
import { AiFillUpCircle } from "react-icons/ai";
import {
  subHeadingStyles,
  titleStyles,
  captionStyles,
  bodyStyles,
  primaryCard,
} from "../styles";

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
        <p className={captionStyles}>{location}</p>
      </div>

      {/* Position and the Timeline is shown here */}
      <div className="flex gap-2 justify-between items-baseline">
        <p className={captionStyles}>{jobTitle}</p>
        <p className={captionStyles}>{timeline}</p>
      </div>

      {/* Description is shown here if the user expands the card */}
      {isExpanded && <p className={bodyStyles}>{description}</p>}

      {isExpanded ? (
        <AiFillUpCircle onClick={toggle} className="h-5 w-full text-primary" />
      ) : (
        <AiFillDownCircle
          onClick={toggle}
          className="h-5 w-full text-primary"
        />
      )}
    </div>
  );
};

const Experience = () => {
  // UI Data for Experience
  const { id, sectionHeading, expList } = experienceData;

  return (
    // Experience Container
    <div id={id} className="flex flex-col gap-4 w-full">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {expList.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
