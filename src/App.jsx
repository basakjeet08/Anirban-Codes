import Header from "./components/Header";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <div className="min-h-screen h-screen min-w-screen w-full bg-background flex flex-col">
      <Header />
      <div className="w-full h-screen p-6 flex overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-cardVariant scroll-smooth xl:justify-center">
        <div className="flex flex-col gap-24 w-full xl:w-3/4">
          <Hero />
          <Experience />
          <Technologies />
          <Projects />

          {/* Bottom Spacing and Padding */}
          <div className="p-1" />
        </div>
      </div>
    </div>
  );
}

export default App;
