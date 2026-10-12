import PropTypes from "prop-types";
import { bodyStyles, primaryRowCard, subHeadingStyles } from "../styles";
import { socialData } from "../constants/data";
import { motion } from "framer-motion";
import {
  horizontalSlide,
  verticalStaggeredAnimation,
} from "../animations/variant";

const SocialItems = ({ social: { type, url, logo, name } }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${type}: ${name}`}
  >
    <div className={primaryRowCard}>
      <img
        className="h-10 w-10 object-contain"
        src={logo}
        alt=""
        loading="lazy"
      />
      <p className={bodyStyles}>{name}</p>
    </div>
  </a>
);

const Socials = () => {
  // UI Data for the Socials Section
  const { id, sectionHeading, content, socialList } = socialData;

  return (
    <section
      id={id}
      className="flex flex-col gap-8 w-full pt-6"
      aria-label={sectionHeading}
    >
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <motion.div
        className="overflow-hidden"
        variants={horizontalSlide("right")}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <p className={bodyStyles}>{content}</p>
      </motion.div>

      <div className="flex flex-row flex-wrap gap-4">
        {socialList.map((socialItem, index) => (
          <motion.div
            key={socialItem.url}
            variants={verticalStaggeredAnimation(index)}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
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
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Socials;
