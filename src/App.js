import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Project from "./components/UI/Project";
import Contact from "./components/UI/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
