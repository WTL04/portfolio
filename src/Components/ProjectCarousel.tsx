import './ProjectCarousel.css';

const projects = [
  {
    href: "https://github.com/bbrxnd/Heart2Heart",
    imgWebp: "/images/heart2heart.webp",
    imgPng: "/images/heart2heart.png",
    alt: "Heart2Heart",
    title: "Heart2Heart",
    tech: "NextJS, Tailwind, FastAPI",
    description: "Heart2Heart is an all-in-one fullstack web application to assist those with heart diseases/conditions.",
    event: "BeachHacks 2025",
  },
  {
    href: "https://github.com/WTL04/Mind-Controlled",
    imgSrc: "/images/MindControlled_Demo.gif",
    imgPng: undefined,
    imgWebp: undefined,
    alt: "Mind-Controlled",
    title: "Mind=Controlled",
    tech: "Tkinter, OpenCV, Vosk",
    description: "A hands-free accessibility-based Python application. Tracks user's head movement and voice for a seamless desktop experience.",
    event: "FullyHacks 2025",
  },
  {
    href: "https://github.com/WTL04/Emotion-Recognition-App",
    imgWebp: "/images/CNN.webp",
    imgPng: "/images/CNN.png",
    alt: "CNN",
    title: "Real-time Emotion Recognition App",
    tech: "Python, PyTorch, OpenCV",
    description: "CNN Model trained on FER2013 Frontal Face Dataset. Test accuracy of 71% currently.",
    event: "Independent Project",
  },
  {
    href: "https://github.com/WTL04/Transformer-Decoder-Model",
    imgWebp: "/images/transformer_output.webp",
    imgPng: "/images/transformer_output.png",
    alt: "Transformer Decoder",
    title: "Transformer Decoder Model",
    tech: "Python, PyTorch, Jupyter Notebook, Google Colab",
    description: "Character-level GPT-Style decoder-only Transformer model. Implemented Multiheaded Masked Attention from scratch. Trained on Romeo and Juliet as a dataset.",
    event: "Class Project"
  },

];

export default function ProjectCarousel() {
  return (
    <>
      <div className="project-section">

        <div className="section-title">
          <h1>PROJECTS</h1>
          <div className="title-underline"></div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-box"
              >
                <div className="project-img-wrapper">
                  <picture>
                    {project.imgWebp && (
                      <source srcSet={project.imgWebp} type="image/webp" />
                    )}
                    <img
                      src={project.imgSrc ?? project.imgPng}
                      alt={project.alt}
                    />
                  </picture>
                </div>
                <h4>{project.title}</h4>
                <h5><em>{project.tech}</em></h5>
                <p>{project.description}</p>
                <p style={{ fontStyle: 'italic' }}>{project.event}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

    </>

  );
}
