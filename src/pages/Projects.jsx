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
import { motion } from "framer-motion";
import { verticalStaggeredAnimation } from "../animations/variant";

const ProjectItem = ({
  project: { image, imageAlt, title, stack, links, description },
}) => (
  // Card Container
  <div className={primaryCard}>
    {/* Project Image */}
    {image && (
      <img
        className="w-full rounded-lg object-contain"
        src={image}
        alt={imageAlt ?? `${title} project preview`}
      />
    )}

    {/* Title and Project Links Container */}
    <div className="flex flex-row gap-4 items-center justify-between">
      <h3 className={titleStyles}>{title}</h3>

      <div className="flex flex-row flex-wrap gap-2 justify-end min-w-0">
        {links.map(({ label, url }) => (
          <a
            key={url}
            className={`${primaryButtonStyles} p-2 flex items-center gap-2`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title}: ${label}`}
            title={`${title}: ${label}`}
          >
            <FaRegShareFromSquare className="shrink-0" />
            {links.length > 1 && (
              <span className={captionStyles}>{label}</span>
            )}
          </a>
        ))}
      </div>
    </div>

    {/* Stack Tags Container */}
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
    <div id={id} className="flex flex-col gap-8 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={verticalStaggeredAnimation(index)}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
