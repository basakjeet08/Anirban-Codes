import { motion } from "framer-motion";
import { FaArrowDown, FaFileAlt, FaFolderOpen } from "react-icons/fa";
import {
  bodyStyles,
  mainHeadingStyles,
  primaryButtonStyles,
  ghostButtonStyles,
  sectionKickerStyles,
} from "../styles";
import { heroData, projectData, resumeData, socialData } from "../constants/data";
import { horizontalSlide } from "../animations/variant";

const Hero = () => {
  // UI Data for the Hero Section
  const { id, name, role, info, stats, profileImage } = heroData;
  const { url: resumeUrl } = resumeData;

  return (
    <section
      id={id}
      className="w-full pt-16 md:pt-24 flex flex-col gap-10"
      aria-label="Intro"
    >
      <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-16">
        {/* Profile Image */}
        <motion.img
          className="mx-auto shrink-0 w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-2xl shadow-primary outline-dashed outline-primary outline-offset-4 lg:outline-offset-8"
          src={profileImage.src}
          alt={profileImage.alt}
          loading="eager"
          variants={horizontalSlide("left")}
          initial="initial"
          whileInView="final"
          viewport={{ once: true }}
        />

        {/* Introduction and Actions */}
        <motion.div
          className="flex flex-col gap-5 items-start text-left flex-1"
          variants={horizontalSlide("right")}
          initial="initial"
          whileInView="final"
          viewport={{ once: true }}
        >
          <span
            className={`${sectionKickerStyles} px-3 py-1.5 rounded-full glass inline-flex`}
          >
            👋 Hi there, I&apos;m
          </span>
          <h1
            className={`${mainHeadingStyles} text-4xl md:text-6xl leading-[1.05]`}
          >
            <span className="gradient-text">{name}</span>
          </h1>
          <p className="text-base md:text-lg font-display font-medium text-white/90">
            {role}
          </p>

          <p className={`${bodyStyles} max-w-2xl`}>{info}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={`#${projectData.id}`} className={primaryButtonStyles}>
              <FaFolderOpen aria-hidden /> View Projects
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={ghostButtonStyles}
            >
              <FaFileAlt aria-hidden /> View Resume
            </a>
            <a
              href={`#${socialData.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-semibold text-white/70 hover:text-white transition-colors"
            >
              Connect <FaArrowDown aria-hidden className="text-xs" />
            </a>
          </div>

          {/* Resume Highlights */}
          {stats && (
            <dl className="grid grid-cols-3 gap-3 w-full max-w-md pt-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col rounded-2xl glass px-4 py-3 text-center hover:border-primary/40 hover:shadow-glow transition-all"
                >
                  <dt className="order-2 text-[11px] font-sans text-white/60 mt-1">
                    {label}
                  </dt>
                  <dd className="order-1 font-display font-bold text-xl md:text-2xl gradient-text">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
