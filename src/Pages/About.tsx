import "./About.css";

const About = () => {
  return (
    <>


      <div className="about-page-wrapper">
        <div className="section-title">
          <h1>ABOUT ME</h1>
          <div className="title-underline"></div>
        </div>

        <div className="profile-rectangle">
          <img src="/images/me_extra.png" alt="pfp" />
        </div>

        <div className="about-me">
          <p>
            I am 21 years old from <strong>Westminster, California</strong>.

            I am currently studying <strong>Computer Science</strong> at <strong>California State University, Long Beach</strong>, passionate about the intersection of machine learning, computer vision, and AI research.
          </p>
          <p>
            I thrive on solving complex problems and building intelligent systems that make a real-world impact.
            Beyond AI, I have a keen interest in full-stack development and UI/UX.
          </p>
          <p>
            On my free time, I love to go camping, play volleyball, video games,
            and go biking!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
