import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import {
  bodyStyles,
  primaryCard,
  secondaryCard,
  chipText,
  subHeadingStyles,
  titleStyles,
  sectionKickerStyles,
} from "../styles";
import { projectData } from "../constants/data";

const ProjectItem = ({
  project: { image, imageAlt, title, stack, links, description, featured, status },
}) => (
  <article
    className={`${primaryCard} h-full text-left ${
      featured ? "!border-primary/50 shadow-glow-lg" : ""
    }`}
  >
    {featured && (
      <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-[11px] font-sans font-semibold text-white">
        <FaStar aria-hidden className="text-[10px]" /> Featured
      </span>
    )}
    {image && (
      <div className="overflow-hidden rounded-xl border border-white/10 -mx-1">
        <img
          className="w-full h-44 object-cover hover:scale-[1.03] transition-transform duration-500"
          src={image}
          alt={imageAlt ?? `${title} project preview`}
          loading="lazy"
        />
      </div>
    )}

    {/* Title and Project Links */}
    <div className="flex flex-row flex-wrap gap-3 items-start justify-between">
      <h3 className={titleStyles}>{title}</h3>
      <div className="flex flex-wrap gap-2 min-w-0">
        {links.map(({ label, url }) => (
          <a
            key={url}
            className="p-2 rounded-xl glass text-white hover:border-primary/60 hover:shadow-glow transition-all inline-flex items-center gap-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title}: ${label}`}
            title={`${title}: ${label}`}
          >
            {url.startsWith("https://github.com/") ? (
              <FaGithub aria-hidden className="h-3.5 w-3.5 shrink-0" />
            ) : (
              <FaExternalLinkAlt aria-hidden className="h-3.5 w-3.5 shrink-0" />
            )}
            {links.length > 1 && <span className={chipText}>{label}</span>}
          </a>
        ))}
      </div>
    </div>

    {/* Technology Tags and Project Status */}
    <div className="flex flex-row flex-wrap gap-1.5">
      {stack.map((stackItem) => (
        <span key={stackItem} className={secondaryCard}>
          <span className={chipText}>{stackItem}</span>
        </span>
      ))}
      {status && (
        <span
          className={secondaryCard}
          aria-label={`Project status: ${status}`}
        >
          <span className={chipText}>{status}</span>
        </span>
      )}
    </div>

    <p className={`${bodyStyles} !text-[13.5px]`}>{description}</p>
  </article>
);

const Projects = () => {
  // UI Data for the Projects Section
  const { id, kicker, sectionHeading, blurb, filters, projectList } = projectData;
  const [activeFilter, setActiveFilter] = useState(filters[0].id);
  const resultsId = `${id}-results`;
  const filteredProjects = projectList.filter(
    (project) =>
      activeFilter === "all" || project.categories.includes(activeFilter)
  );

  return (
    <section
      id={id}
      className="flex flex-col gap-6 w-full pt-6"
      aria-label={sectionHeading}
    >
      <div className="flex flex-col gap-2">
        {kicker && <span className={sectionKickerStyles}>● {kicker}</span>}
        <h2 className={subHeadingStyles}>
          {sectionHeading} <span className="gradient-text">I&apos;ve built</span>
        </h2>
        {blurb && <p className={`${bodyStyles} max-w-2xl`}>{blurb}</p>}
      </div>

      {/* Project Filters */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects"
      >
        {filters.map(({ id: filterId, title }) => (
          <button
            key={filterId}
            type="button"
            aria-pressed={activeFilter === filterId}
            aria-controls={resultsId}
            onClick={() => setActiveFilter(filterId)}
            className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-300 border ${
              activeFilter === filterId
                ? "bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-glow"
                : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:border-primary/50"
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        {filteredProjects.length}
        {filteredProjects.length === 1 ? " project shown." : " projects shown."}
      </p>

      {/* Project Cards */}
      <div
        id={resultsId}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className={bodyStyles}>No projects match this filter yet.</p>
      )}
    </section>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    description: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    status: PropTypes.string,
  }).isRequired,
};

export default Projects;
