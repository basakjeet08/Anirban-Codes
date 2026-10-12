import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { technologyData } from "../constants/data";
import { bodyStyles, subHeadingStyles, sectionKickerStyles } from "../styles";

const TechnologyItem = ({ technology: { stack, icon: Icon } }) => (
  <div
    className="group h-16 w-16"
    role="img"
    aria-label={stack}
    title={stack}
  >
    <div className="relative h-full w-full grid place-items-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/60 group-hover:shadow-glow group-hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300">
      <Icon className="h-10 w-10 text-primarySoft" aria-hidden />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 translate-y-full w-max max-w-32 sm:max-w-48 px-2 py-1 rounded-lg bg-ink border border-white/10 text-[11px] font-sans text-white/80 text-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        {stack}
      </span>
    </div>
  </div>
);

const Technologies = () => {
  // UI Data for the Technologies Section
  const { id, kicker, sectionHeading, bodyText, groups } = technologyData;
  const techList = groups.flatMap((group) => group.techList);

  return (
    <section
      id={id}
      className="flex flex-col gap-6 pt-6"
      aria-label={sectionHeading}
    >
      <div className="flex flex-col gap-2">
        {kicker && <span className={sectionKickerStyles}>● {kicker}</span>}
        <h2 className={subHeadingStyles}>
          {sectionHeading} <span className="gradient-text">I ship with</span>
        </h2>
        <p className={`${bodyStyles} max-w-2xl`}>{bodyText}</p>
      </div>

      {/* Technology Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            className={`rounded-2xl glass p-5 hover:border-primary/40 hover:shadow-glow transition-[border-color,box-shadow] ${
              groups.length % 2 === 1 && index === groups.length - 1
                ? "md:col-span-2"
                : ""
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-primarySoft mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.techList.map((technology) => (
                <TechnologyItem
                  key={technology.stack}
                  technology={technology}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Marquee */}
      <div
        aria-hidden
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-3 relative"
      >
        <div className="flex gap-3 w-max animate-marquee pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...techList, ...techList].map((technology, index) => (
            <span
              key={`${technology.stack}-${index}`}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-sans text-white/70 whitespace-nowrap"
            >
              {technology.stack}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent"
        />
      </div>
    </section>
  );
};

TechnologyItem.propTypes = {
  technology: PropTypes.shape({
    stack: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

export default Technologies;
