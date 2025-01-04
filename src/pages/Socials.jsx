import React from "react";
import { bodyStyles, primaryRowCard, subHeadingStyles } from "../styles";
import { socials } from "../constants/data";

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

const Socials = ({ id = "social" }) => {
  return (
    <div id={id} className="flex flex-col gap-4 w-full">
      <h2 className={subHeadingStyles}>Socials</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {socials.map((socialItem, index) => (
          <SocialItems key={index} social={socialItem} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
