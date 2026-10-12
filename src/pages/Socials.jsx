import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  bodyStyles,
  primaryRowCard,
  subHeadingStyles,
  sectionKickerStyles,
  captionStyles,
} from "../styles";
import { socialData } from "../constants/data";

const SocialItems = ({ social: { type, url, icon: Icon, name } }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${type}: ${name}`}
    className="group block h-full"
  >
    <div className={`${primaryRowCard} min-w-0 sm:min-w-[200px] h-full`}>
      <span className="h-11 w-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:border-primary/60 group-hover:shadow-glow transition-[border-color,box-shadow] shrink-0">
        <Icon className="h-7 w-7 text-primarySoft" aria-hidden />
      </span>
      <span className="flex flex-col min-w-0">
        <span className="text-xs font-sans font-semibold text-white flex items-center gap-2">
          {type}
          <FaExternalLinkAlt
            aria-hidden
            className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-primarySoft"
          />
        </span>
        <span className={`${captionStyles} break-words`}>{name}</span>
      </span>
    </div>
  </a>
);

const Socials = () => {
  // UI Data for the Socials Section
  const { id, kicker, sectionHeading, content, socialList } = socialData;

  return (
    <section
      id={id}
      className="flex flex-col gap-6 w-full pt-6"
      aria-label={sectionHeading}
    >
      <div className="flex flex-col gap-2">
        {kicker && <span className={sectionKickerStyles}>● {kicker}</span>}
        <h2 className={subHeadingStyles}>
          {sectionHeading}{" "}
          <span className="gradient-text">— let&apos;s connect</span>
        </h2>
        <p className={`${bodyStyles} max-w-2xl`}>{content}</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        {socialList.map((socialItem, index) => (
          <motion.div
            key={socialItem.url}
            className="w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <SocialItems social={socialItem} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

SocialItems.propTypes = {
  social: PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Socials;
