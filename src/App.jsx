import { useRef } from "react";
import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";

function App() {
  const scrollContainerRef = useRef(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="h-screen h-dvh w-full bg-ink text-white font-sans relative overflow-hidden">
        {/* Ambient background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute top-[35%] -left-40 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[110px]" />
          <div className="absolute top-[60%] -right-40 h-[380px] w-[380px] rounded-full bg-cyanGlow/15 blur-[110px]" />
        </div>

        <div className="relative z-10 flex flex-col h-full min-h-0">
          <Header scrollContainerRef={scrollContainerRef} />
          <main
            ref={scrollContainerRef}
            className="w-full flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scroll-smooth"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col gap-20 md:gap-28 pb-10">
              <Hero />
              <Experience />
              <Technologies />
              <Projects />
              <Socials />
              <Contact />
            </div>
            <Footer />
          </main>
          <BackToTop scrollContainerRef={scrollContainerRef} />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
