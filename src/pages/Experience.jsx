import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { experienceData } from "../constants/data";
import {
  subHeadingStyles,
  titleStyles,
  captionStyles,
  bodyStyles,
  primaryCard,
  secondaryCard,
  chipText,
  sectionKickerStyles,
} from "../styles";

const ExperienceItem = ({ experience, expanded, onToggle }) => {
  const {
    id,
    company,
    timeline,
    jobTitle,
    location,
    description,
    tags,
    highlights,
  } = experience;
  const detailsId = `experience-${id}-details`;

  return (
    <div className={`${primaryCard} relative overflow-hidden text-left`}>
      <div
        aria-hidden
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-cyanGlow opacity-70"
      />
      {/* Company, Role, and Location */}
      <div className="flex gap-2 justify-between items-start pt-1">
        <div className="flex flex-col gap-1 min-w-0">
          <p className={`${captionStyles} uppercase tracking-widest`}>
            {timeline}
          </p>
          <h3 className={titleStyles}>{company}</h3>
          <p className="text-sm font-sans font-medium text-primarySoft flex flex-wrap items-center gap-1.5">
            <FaBriefcase aria-hidden className="text-xs shrink-0" /> {jobTitle}
            <span aria-hidden className="text-white/30">
              •
            </span>
            <span className="text-white/60 font-normal flex items-center gap-1">
              <FaMapMarkerAlt aria-hidden className="text-[11px] shrink-0" />
              {location}
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={expanded ? detailsId : undefined}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${company} details`}
          className="p-2 rounded-xl glass text-white hover:border-primary/60 hover:shadow-glow transition-all shrink-0"
        >
          <IoIosArrowDown
            aria-hidden
            className={`h-4 w-4 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Technology and Responsibility Tags */}
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className={secondaryCard}>
              <span className={chipText}>{tag}</span>
            </span>
          ))}
        </div>
      )}

      {/* Summary and Impact Details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={detailsId}
            role="region"
            aria-label={`${company} details`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className={`${bodyStyles} pt-1`}>{description}</p>
            {highlights?.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm font-sans text-white/75 flex gap-2"
                  >
                    <span aria-hidden className="text-primary mt-0.5">
                      ▸
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={`Expand ${company} details`}
          className="text-left text-xs font-sans font-medium text-primarySoft hover:text-white transition-colors"
        >
          Show impact + details →
        </button>
      )}
    </div>
  );
};

const Experience = () => {
  // UI Data for the Experience Section
  const { id, kicker, sectionHeading, blurb, expList } = experienceData;
  const [expandedId, setExpandedId] = useState(expList[0]?.id ?? null);

  return (
    <section
      id={id}
      className="flex flex-col gap-6 w-full pt-6"
      aria-label={sectionHeading}
    >
      <div className="flex flex-col gap-2">
        {kicker && <span className={sectionKickerStyles}>● {kicker}</span>}
        <h2 className={subHeadingStyles}>
          {sectionHeading} <span className="gradient-text">timeline</span>
        </h2>
        {blurb && <p className={`${bodyStyles} max-w-2xl`}>{blurb}</p>}
      </div>

      {/* Timeline and Experience Cards */}
      <div className="relative flex flex-col gap-5 md:gap-0">
        <div
          aria-hidden
          className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent"
        />
        <div className="flex flex-col gap-5 md:gap-6">
          {expList.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative md:pl-10"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <span
                aria-hidden
                className="hidden md:grid absolute left-0 top-6 h-4 w-4 place-items-center"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow ring-4 ring-ink" />
              </span>
              <ExperienceItem
                experience={experience}
                expanded={expandedId === experience.id}
                onToggle={() =>
                  setExpandedId((prev) =>
                    prev === experience.id ? null : experience.id
                  )
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Experience;
