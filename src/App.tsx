//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects"
import Publications from "./Pages/Publications";
import Skills from "./Pages/Skills"
import OfflineLife from "./Pages/OfflineLife"
import Footer from "./Components/Footer";

// import global styles 
import "./index.css"

function App() {
  return (
    <>

      <div className="my-app" style={{ fontFamily: "miricle-mono" }}>
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

        <section className="section" id="skills">
          <Skills />
        </section>

        <section className="section" id="offline">
          <OfflineLife />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
