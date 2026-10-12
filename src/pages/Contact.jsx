import { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  bodyStyles,
  primaryCard,
  subHeadingStyles,
  inputStyle,
  titleStyles,
  primaryButtonStyles,
} from "../styles";
import { contactData } from "../constants/data";
import { motion } from "framer-motion";
import { horizontalSlide } from "../animations/variant";

const Form = ({ accessKey }) => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitPressed = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData(formRef.current);
      formData.set("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error("Message submission failed");
      }

      formRef.current.reset();
      alert("Message sent successfully.");
    } catch {
      alert("Unable to send your message. Please try again or contact me by email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="w-full sm:w-2/3 max-w-[600px]">
        <form
          ref={formRef}
          className={`${primaryCard} items-center`}
          onSubmit={onSubmitPressed}
          aria-label="Contact form"
          aria-busy={isSubmitting}
        >
          <p className={titleStyles}>Email Me</p>

          <input
            className={inputStyle}
            type="text"
            name="subject"
            aria-label="Subject"
            placeholder="Subject"
            required
          />

          <input
            className={inputStyle}
            type="email"
            name="email"
            aria-label="Your email address"
            placeholder="Your email address"
            autoComplete="email"
            required
          />

          <textarea
            className={`${inputStyle} h-[200px]`}
            name="message"
            aria-label="Your message"
            placeholder="Your message"
            required
          />

          <button
            className={`${primaryButtonStyles} p-3 w-2/3`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  // UI Data for Contact me Section
  const { id, sectionHeading, content, accessKey } = contactData;
  return (
    // Container for Contact Me Section
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

      <Form accessKey={accessKey} />
    </section>
  );
};

Form.propTypes = {
  accessKey: PropTypes.string.isRequired,
};

export default Contact;
