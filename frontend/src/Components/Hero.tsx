import "./Hero.css";
import Line from "./Line";

const Hero = () => {
  return (
    <>
      <div className="intro">
        <p>Hello World, My name is </p>
        <div className="bolded-name">
          <h3> WILLIAM LUU </h3>
        </div>
      </div>

      <div className="description">
        <p>Full Stack Developer</p>
        <p>Computer Vision Researcher</p>
        <p>Coding Tutor and Youth Leader</p>
      </div>

      <div className="icons">
        <a
          href="https://github.com/WTL04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/github.png"
            alt="github logo"
            width="50"
            height="50"
          />
        </a>
        <a
          href="https://linkedin.com/in/wtl04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/linkedin.png"
            alt="linkedin logo"
            width="50"
            height="50"
          />
        </a>
        <a
          href="mailto:williamluu04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/gmail.png"
            alt="gmail logo"
            width="55"
            height="45"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
