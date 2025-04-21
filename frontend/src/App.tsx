import { useState } from "react";
import "./App.css";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
