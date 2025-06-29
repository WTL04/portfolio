import "./App.css";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects"
import Publications from "./Pages/Publications";
import Skills from "./Pages/Skills"
import Footer from "./Components/Footer";

function App() {
  return (
    <>

      <Home />

      <section className="section" id="about">
        <About />
      </section>

      <section className="section" id="projects">
        <Projects />
      </section>

      <section className="section" id="publications">
        <Publications />
      </section>

      <Skills />
      <Footer />
    </>
  );
}

export default App;
