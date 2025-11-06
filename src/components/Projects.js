const projects = [
  {
    title: "Project 1",
    description: "Project details.",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Project details.",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Project details.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="p-6 rounded-2xl shadow-md bg-accent hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-secondary mb-2">
              {proj.title}
            </h3>
            <p className="text-text mb-4">{proj.description}</p>
            <a
              href={proj.link}
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
