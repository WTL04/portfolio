import ProjectCarousel from "../Components/ProjectCarousel";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="project-page-wrapper">
        <div className="title">
          <h1>PROJECTS</h1>
        </div>
        <ProjectCarousel />
      </div>
    </>
  );
};

export default Projects;
