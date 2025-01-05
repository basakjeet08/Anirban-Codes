import { easeInOut } from "framer-motion";

export const horizontalSlide = (direction, delay = 0.2) => {
  return {
    // Acts as initial state
    initial: {
      y: 0,
      x: direction == "left" ? 100 : -100,
      opacity: 0,
    },

    // Acts as final state
    final: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
        easings: easeInOut,
      },
    },
  };
};

export const scaleIn = () => {
  return {
    // Acts as initial state
    initial: {
      opacity: 0,
      scale: 0,
    },

    // Acts as final state
    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        easings: easeInOut,
      },
    },
  };
};
