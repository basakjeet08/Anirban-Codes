import React, { useState } from "react";
import { experiences } from "../constants/data";
import { AiFillDownCircle } from "react-icons/ai";
import { AiFillUpCircle } from "react-icons/ai";
import { headingText } from "../styles";

const ExperienceItem = ({
  experience: { company, timeline, jobTitle, location, description },
}) => {
  // Expanding State Variables and helper functions
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded((prev) => !prev);

  return (
    // Card Container
    <div className="flex flex-col gap-3 p-4 font-mcLaren text-xs text-onBackground bg-card rounded-lg shadow-sm">
      {/* Company and the Location is defined here */}
      <div className="flex gap-2 justify-between items-baseline">
        <p className={`text-lg font-semibold`}>{company}</p>
        <p>{location}</p>
      </div>

      {/* Position and the Timeline is shown here */}
      <div className="flex gap-2 justify-between items-baseline opacity-35">
        <p>{jobTitle}</p>
        <p>{timeline}</p>
      </div>

      {/* Description is shown here if the user expands the card */}
      {isExpanded && <p className="opacity-85">{description}</p>}

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
  return (
    // Experience Container
    <div className="flex xl:justify-center p-4">
      <div className="flex flex-col gap-4 w-full xl:w-3/4">
        <h2 className={`${headingText}`}>Experiences</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;