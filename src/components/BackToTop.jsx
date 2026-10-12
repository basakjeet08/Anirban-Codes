import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = ({ scrollContainerRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y =
        scrollContainerRef?.current?.scrollTop ?? window.scrollY ?? 0;
      setVisible(y > 600);
    };
    const c = scrollContainerRef?.current;
    if (c) c.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      if (c) c.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollContainerRef]);

  if (!visible) return null;

  const scrollTop = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full grid place-items-center bg-gradient-to-br from-primary to-accent text-white shadow-glow-lg hover:brightness-110 active:scale-95 transition-all"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
