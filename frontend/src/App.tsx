import "./App.css";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
