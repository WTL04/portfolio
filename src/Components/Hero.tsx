import "./Hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container">
      <div className="intro">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hello World, My name is <strong><span class="accent-name">WILLIAM LUU</span></strong>')
              .callFunction(() => {
                const cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) {
                  (cursor as HTMLElement).style.display = 'none';
                }
              })
              .typeString('<br /><br /><span class="roles">Full Stack Developer<br />ML Research Assistant<br />Academic Tutor</span>')
              .start();
          }}
          options={{
            delay: 30,
            cursor: '_',
          }}
        />
      </div>
      <div className="divider"></div>
      <div className="fade-in">
        <div className="icons">
          <a href="https://github.com/WTL04" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="github logo" width="50" height="50" />
          </a>
          <a href="https://linkedin.com/in/wtl04" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="linkedin logo" width="50" height="50" />
          </a>
          <a href="mailto:williamluu04@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/email.png" alt="gmail logo" width="55" height="45" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
