import React from "react";
import {
  bodyStyles,
  captionStyles,
  primaryButtonStyles,
  primaryCard,
  secondaryCard,
  subHeadingStyles,
  titleStyles,
} from "../styles";
import { projectData } from "../constants/data";
import { FaRegShareFromSquare } from "react-icons/fa6";

const ProjectItem = ({
  project: { title, stack, githubLink, description },
}) => (
  // Card Container
  <div className={primaryCard}>
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
        <div key={index} className={secondaryCard}>
          <p className={`${captionStyles} opacity-80`}>{stackItem}</p>
        </div>
      ))}
    </div>

    <p className={bodyStyles}>{description}</p>
  </div>
);

const Projects = () => {
  // UI Data for the projects Section
  const { id, sectionHeading, projectList } = projectData;

  return (
    // Projects Container
    <div id={id} className="flex flex-col gap-4 w-full">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div key={index}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
