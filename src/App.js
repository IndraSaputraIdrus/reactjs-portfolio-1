import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
        </section>

        <section className="mt-10">
          <Services />
        </section>

        <section>
          <Portfolio />
        </section>
      </main>
    </div>
  );
}

export default App;
