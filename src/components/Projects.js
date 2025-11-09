import TaeImg from "../assets/projects/tae.png";
import FpImg from "../assets/projects/fp.png";
import FarmImg from "../assets/projects/farm.png";
import SpringImg from "../assets/projects/spring.png";
import OpenchanImg from "../assets/projects/openchan.png";
import UnirideImg from "../assets/projects/uniride.png";
import JpdImg from "../assets/projects/jpd.png";
import CityImg from "../assets/projects/city.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CityShadows",
    description: "Routing tool recommending shaded walking paths",
    link: "https://github.com/haroldmoj-dev/dlsu-cityshadows",
    image: CityImg,
    stack: ["Python", "PyTorch", "OpenCV", "GeoPandas"],
  },
  {
    title: "UniRide",
    description: "Carpooling mobile application made for students",
    link: "https://github.com/haroldmoj-dev/dlsu-mobile-carpooling",
    image: UnirideImg,
    stack: ["Android Studio", "Java", "XML", "Firebase"],
  },
  {
    title: "JPDGarage",
    description: "Online management system for motorcycle parts",
    link: "https://github.com/haroldmoj-dev/dlsu-jpdgarage",
    image: JpdImg,
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "SpringTales",
    description: "Website storing infographics made for Guardian Tales",
    link: "https://github.com/haroldmoj-dev/gt-central",
    image: SpringImg,
    stack: ["HTML/CSS"],
  },
  {
    title: "OpenChan",
    description: "Web application demonstrating role-based access control system",
    link: "https://github.com/haroldmoj-dev/dlsu-secure-web-dev",
    image: OpenchanImg,
    stack: ["Node.js", "Express", "SQLite", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "TAE",
    description: "2D pixel game designed for 1–2 players (local multiplayer)",
    link: "https://github.com/haroldmoj-dev/gamemaker-game1",
    image: TaeImg,
    stack: ["GameMaker Language"],
  },
  {
    title: "Floating Point Converter",
    description: "Web application implementing Decimal32 floating point conversion",
    link: "https://github.com/haroldmoj-dev/dlsu-decimal32-fp-converter",
    image: FpImg,
    stack: ["Python", "Panel"],
  },
  {
    title: "MyFarm",
    description: "Farming game showcasing object-oriented programming",
    link: "https://github.com/haroldmoj-dev/dlsu-myfarm",
    image: FarmImg,
    stack: ["Java", "Swing"],
  },
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="scroll-mt-24 flex flex-col items-start px-6 lg:px-8 bg-background text-text max-w-5xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projects.map((proj) => (
          <div className="rounded-lg bg-accent transition relative overflow-hidden border-2 border-transparent hover:border-text hover:-translate-y-4 flex flex-col">
            <div
              className="min-h-60 flex flex-col relative"
              style={{
                backgroundImage: proj.image ? `url(${proj.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
              <a 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 transition"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-1 max-w-[calc(100%-1.5rem)]">
                {proj.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-black bg-opacity-70 text-secondary rounded-md border-2 border-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div 
              key={proj.title}
              className="relative z-10 bg-accent flex-grow"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {proj.title}
                </h3>
                <p className="text-text">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}