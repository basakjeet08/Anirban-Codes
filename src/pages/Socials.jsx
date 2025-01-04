import React from "react";
import { primaryCard, subHeadingStyles } from "../styles";
import { socials } from "../constants/data";

const SocialItems = ({ social: { type, url, logo } }) => {
  return (
    <a href={url} target="_blank">
      <div className={`${primaryCard}`}>
        <img
          className="h-10 w-10 object-contain"
          src={logo}
          alt={type + " Logo"}
        />
      </div>
    </a>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
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