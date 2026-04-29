import './ProjectCarousel.css';

const projects = [

  // WIP
  {
    href: "https://devpost.com/software/coral-pv38mq?ref_content=my-projects-tab&ref_feature=my_projects",
    imgSrc: "/images/wip.png",
    imgPng: undefined,
    imgWebp: undefined,
    alt: "Ashguard",
    title: "Ashguard",
    tech: "React Native, FastAPI, AWS EC2, REDIS, Firebase",
    description: "Wildfire evacuation mobile application, WIP...",
    event: "Senior Capstone",

  },
  // Hackathons / competitions - most recent first
  {
    href: "https://devpost.com/software/coral-pv38mq?ref_content=my-projects-tab&ref_feature=my_projects",
    imgSrc: "/images/coral.gif",
    imgPng: undefined,
    imgWebp: undefined,
    alt: "C.O.R.A.L",
    title: "C.O.R.A.L",
    tech: "FastAPI, Gemini, Arcgis, HTML/CSS/JS",
    description: "Adversarial pandemic simulation where you deploy and mutate a virus against a Gemini-powered AI coordinator reasoning in real time on a 3D globe.",
    event: "FullyHacks 2026",
  },
  {
    href: "https://github.com/WinstonTa/Starbound-Atlas-2025",
    imgSrc: "/images/happy_mapper.gif",
    imgPng: undefined,
    imgWebp: undefined,
    alt: "",
    title: "Happy Mapper",
    tech: "React Native, FastAPI, Gemini Vision, Firebase",
    description: "React Native app that uses Google Gemini to parse menu photos and surface real-time happy hour deals near you.",
    event: "1st place 🥇, Project Starbound @ CSULB",
  },
  {
    href: "https://devpost.com/software/mind-controlled",
    imgSrc: "/images/MindControlled_Demo.gif",
    imgPng: undefined,
    imgWebp: undefined,
    alt: "Mind-Controlled",
    title: "Mind=Controlled",
    tech: "Tkinter, OpenCV, Vosk",
    description: "A hands-free accessibility-based Python application. Tracks user's head movement and voice for a seamless desktop experience.",
    event: "FullyHacks 2025",
  },
  // Independent
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
  // Class projects last
  {
    href: "https://github.com/WTL04/CECS458---Skin-Issue-Detection",
    imgSrc: "/images/skin_detector.gif",
    imgPng: undefined,
    imgWebp: undefined,
    alt: "",
    title: "YOLO Skin Issue Detection",
    tech: "TensorFlow (CUDA), PyTorch, FastAPI",
    description: "YOLOv8 + OpenAI skin analysis app that detects issues from images and returns personalized skincare recommendations.",
    event: "Class Project",
  },
  {
    href: "https://github.com/WTL04/Transformer-Decoder-Model",
    imgWebp: "/images/transformer_output.webp",
    imgPng: "/images/transformer_output.png",
    alt: "Transformer Decoder",
    title: "Transformer Decoder Model",
    tech: "PyTorch",
    description: "Character-level GPT-Style decoder-only Transformer model. Implemented Multiheaded Masked Attention from scratch. Trained on Romeo and Juliet as a dataset.",
    event: "Class Project",
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
