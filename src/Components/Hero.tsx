import "./Hero.css";
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <>
      <div className="intro">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hello World, My name is <strong>WILLIAM LUU</strong>')
              // disabling cursor 
              .callFunction(() => {
                const cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) {
                  (cursor as HTMLElement).style.display = 'none';
                }
              })
              .typeString('<br /><br /><p style="text-align:center;">Full Stack Developer</p>')
              .typeString('<p style="text-align:center;">AI/ML Research Assistant</p>')
              .typeString('<p style="text-align:center;">Academic Tutor</p>')
              .start();
          }}
          options={{
            delay: 30,
            cursor: '_',
          }}
        />
      </div>

      <div className="fade-in">
        <div className="icons">
          <a
            href="https://github.com/WTL04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/portfolio/images/github.png"
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
              src="/portfolio/images/linkedin.png"
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
              src="/portfolio/images/gmail.png"
              alt="gmail logo"
              width="55"
              height="45"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
