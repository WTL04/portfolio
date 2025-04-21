import "./About.css";

const About = () => {
  return (
    <>

      <div className="title-about">
        <h1>ABOUT</h1>
      </div>
      <div className="about-page-wrapper">

        <div className="profile-circle">
          <img src="/images/profile.webp" alt="pfp" width="350" height="350" />
        </div>

        <div className="about-me">
          <p>
            I am 20 years old from <strong>Westminster, California</strong>.

            I am currently studying <strong>Computer Science</strong> at <strong>California State University, Long Beach</strong>, passionate about the intersection of machine learning, computer vision, and AI research.
          </p>
          <p>
            I thrive on solving complex problems and building intelligent systems that make a real-world impact.
            Beyond AI, I have a keen interest in full-stack development and UI/UX.
          </p>
          <p>
            On my free time, I love to draw, play volleyball, play video games,
            and go biking!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
