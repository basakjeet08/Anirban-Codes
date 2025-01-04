import React from "react";
import {
  bodyStyles,
  captionStyles,
  primaryButtonStyles,
  subHeadingStyles,
  titleStyles,
} from "../styles";
import { projects } from "../constants/data";
import { FaRegShareFromSquare } from "react-icons/fa6";

const ProjectItem = ({
  project: { title, stack, githubLink, description },
}) => (
  <div className="flex flex-col gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md hover:shadow-primary transition-all duration-300">
    {/* Title and Github Link Container */}
    <div className="flex flex-row gap-4 items-center justify-between">
      <h3 className={titleStyles}>{title}</h3>

      <a
        className={`${primaryButtonStyles} p-2`}
        href={githubLink}
        target="_blank"
      >
        <FaRegShareFromSquare />
      </a>
    </div>

    {/*Stack Tags Container*/}
    <div className="flex flex-row flex-wrap gap-2">
      {stack.map((stackItem, index) => (
        <div key={index} className="p-2 rounded-md bg-cardVariant">
          <p className={`${captionStyles} opacity-80`}>{stackItem}</p>
        </div>
      ))}
    </div>

    <p className={bodyStyles}>{description}</p>
  </div>
);

const Projects = () => {
  return (
    // Projects Container
    <div className="flex flex-col gap-4 w-full">
      <h2 className={subHeadingStyles}>Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
