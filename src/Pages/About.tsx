import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="section-title">
        <h1>ABOUT ME</h1>
        <div className="title-underline"></div>
      </div>
      <div className="about-page-wrapper">
        <div className="profile-rectangle">
          <img src="/images/me_extra.png" alt="pfp" />
        </div>
        <div className="about-me">
          <p><span className="about-label">WHO</span>William Luu, 21 -- Westminster, California</p>
          <p><span className="about-label">EDU</span> Computer Science -- B.S. @ CSULB</p>
          <p><span className="about-label">FOCUS</span>Machine Learning / AI, Fullstack Dev</p>
          <p><span className="about-label">HOBBIES</span> Biking, Camping, Manga Reading, Video Games </p>
        </div>
      </div>
    </div>
  );
};

export default About;
