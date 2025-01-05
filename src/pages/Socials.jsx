import React from "react";
import { bodyStyles, primaryRowCard, subHeadingStyles } from "../styles";
import { socialData } from "../constants/data";

const SocialItems = ({ social: { type, url, logo, name } }) => {
  return (
    <a href={url} target="_blank">
      <div className={primaryRowCard}>
        <img
          className="h-10 w-10 object-contain"
          src={logo}
          alt={type + " Logo"}
        />
        <p className={bodyStyles}>{name}</p>
      </div>
    </a>
  );
};

const Socials = () => {
  // UI Data for the Socials Section
  const { id, sectionHeading, content, socialList } = socialData;

  return (
    <div id={id} className="flex flex-col gap-4 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <p className={bodyStyles}>{content}</p>
      <div className="flex flex-row flex-wrap gap-4">
        {socialList.map((socialItem, index) => (
          <div key={index}>
            <SocialItems social={socialItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
