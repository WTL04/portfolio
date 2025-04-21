import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1280); // Update state if screen size changes
    }

    window.addEventListener("resize", handleResize); // Add event listener on resize
    handleResize(); // Initial check on load

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>

        <div className="logo">{/* add logo here */} LOGO</div>
        <ul className="menu">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>BLOG</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
