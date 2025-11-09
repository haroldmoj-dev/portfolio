const projects = [
  {
    title: "OpenChan",
    description: "Web application demonstrating role-based access control system",
    link: "https://github.com/haroldmoj-dev/dlsu-secure-web-dev",
  },
  {
    title: "UniRide",
    description: "Carpooling mobile application made for students",
    link: "https://github.com/haroldmoj-dev/dlsu-mobile-carpooling",
  },
  {
    title: "JPDGarage",
    description: "Online management system for motorcycle parts",
    link: "https://github.com/haroldmoj-dev/dlsu-jpdgarage",
  },
  {
    title: "CityShadows",
    description: "Routing tool recommending shaded walking paths",
    link: "https://github.com/haroldmoj-dev/dlsu-cityshadows",
  },
  {
    title: "Floating Point Converter",
    description: "Web application implementing Decimal32 floating point conversion",
    link: "https://github.com/haroldmoj-dev/dlsu-decimal32-fp-converter",
  },
  {
    title: "TAE",
    description: "2D pixel game designed for 1–2 players (local multiplayer)",
    link: "https://github.com/haroldmoj-dev/gamemaker-game1",
  },
  {
    title: "SpringTales",
    description: "Website storing infographics made for Guardian Tales",
    link: "https://github.com/haroldmoj-dev/gt-central",
  },
  {
    title: "MyFarm",
    description: "Farming game showcasing object-oriented programming",
    link: "https://github.com/haroldmoj-dev/dlsu-myfarm",
  },
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="scroll-mt-24 flex flex-col items-start px-6 lg:px-8 bg-background text-text max-w-5xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-6">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="p-6 rounded-lg shadow-md bg-accent hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-secondary mb-2">
              {proj.title}
            </h3>
            <p className="text-text mb-4">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
