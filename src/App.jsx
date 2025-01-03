import Header from "./components/Header";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="min-h-screen h-full min-w-screen w-full bg-background flex flex-col">
      <Header />
      <div className="w-full flex xl:justify-center p-6">
        <div className="flex flex-col gap-4 w-full xl:w-3/4">
          <Hero />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
