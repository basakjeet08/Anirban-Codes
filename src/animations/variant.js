import { easeInOut } from "framer-motion";

export const horizontalSlide = (direction, delay = 0.2) => {
  return {
    // Acts as initial state
    initial: {
      y: 0,
      x: direction === "left" ? 100 : -100,
      opacity: 0,
    },

    // Acts as final state
    final: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay,
        ease: easeInOut,
      },
    },
  };
};

export const verticalStaggeredAnimation = (index, delayPerIndex = 0.2) => {
  return {
    initial: {
      y: 100,
      opacity: 0,
    },

    final: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * delayPerIndex,
      },
    },
  };
};
