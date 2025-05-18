import { useState, useEffect } from "react";
import Home from "./components/Home";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    

  return (
    <div className={`app ${scrolled ? "scrolled" : ""}`}>
      <div className="fixed-bg"></div>
     
     
      <Home />
      <Summary />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
