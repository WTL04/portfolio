import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial screen size check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${isSmallScreen ? "small-screen" : ""}`}>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <div className="logo">WILLIAM LUU</div>

      <ul className="menu">
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#publications">PUBLICATIONS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
