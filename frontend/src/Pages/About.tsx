import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-page-wrapper">
        <div className="title">
          <h1>ABOUT</h1>
        </div>

        <div className="profile-circle">
          <img src="/images/github.png" alt="pfp" width="100" height="100" />
        </div>

        <div className="about-me">
          <p>
            I am 20 years old from Westminster, California, and I am currently
            attending California State University of Long Beach, pursuing a
            bachelor's degree in computer science.
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
