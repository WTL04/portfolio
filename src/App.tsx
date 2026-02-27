//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects"
import Publications from "./Pages/Publications";
import Contact from "./Pages/Contact"
import Skills from "./Pages/Skills"
import Footer from "./Components/Footer";

// import global styles 
import "./index.css"

function App() {
  return (
    <>

      <div className="my-app" style={{ fontFamily: "miricle-mono"}}>
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
      </div>
    </>
  );
}

export default App;
