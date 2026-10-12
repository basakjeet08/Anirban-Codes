import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        scrollContainerRef?.current?.scrollTop ?? window.scrollY ?? 0;
      setIsVisible(scrollTop > 600);
    };
    const container = scrollContainerRef?.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  if (!isVisible) return null;

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full grid place-items-center bg-gradient-to-br from-primary to-accent text-white shadow-glow-lg hover:brightness-110 active:scale-95 transition-all"
    >
      <FaArrowUp aria-hidden />
    </button>
  );
};

BackToTop.propTypes = {
  scrollContainerRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default BackToTop;
