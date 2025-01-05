import React from "react";
import {
  bodyStyles,
  primaryCard,
  subHeadingStyles,
  inputStyle,
  titleStyles,
  primaryButtonStyles,
} from "../styles";
import { contacts } from "../constants/data";

const Form = () => {
  const onSubmitPressed = (event) => {
    event.preventDefault();
    console.log("Submit Pressed");
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="w-2/3 min-w-[400px] max-w-[600px]">
        <form
          className={`${primaryCard} items-center`}
          onSubmit={onSubmitPressed}
        >
          <p className={titleStyles}>Email Me</p>

          <input
            className={inputStyle}
            type="text"
            placeholder="Subject"
            required
          />

          <input
            className={inputStyle}
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />

          <textarea
            className={`${inputStyle} h-[200px]`}
            name="body"
            placeholder="Enter your Message"
            required
          />

          <button className={`${primaryButtonStyles} p-3 w-2/3`} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  // UI Data for Contact me Section
  const { id, sectionHeading, content } = contacts;
  return (
    // Container for Contact Me Section
    <div id={id} className="flex flex-col gap-4 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <p className={bodyStyles}>{content}</p>
      <Form />
    </div>
  );
};

export default Contact;
