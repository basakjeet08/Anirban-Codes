import Header from "./components/Header";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="min-h-screen h-full min-w-screen w-full bg-background flex flex-col">
      <Header />
      <div className="w-screen flex xl:justify-center p-6">
        <div className="flex flex-col gap-4 w-full xl:w-3/4">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
