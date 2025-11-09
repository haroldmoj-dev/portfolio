import { FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaTools } from "react-icons/fa";
import { SiC, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiJavascript, SiJupyter, SiPandas, SiNumpy, SiOpencv, SiScikitlearn, SiPytorch, SiFirebase } from "react-icons/si";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: <SiC /> },
      { name: "Javascript", icon: <SiJavascript/> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Web Dev",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Data Analytics",
    skills: [
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Numpy", icon: <SiNumpy /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "PyTorch", icon: <SiPytorch /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("list");
  const [highlightCategoryIndex, setHighlightCategoryIndex] = useState(0);

  useEffect(() => {
    if (activeTab === "list") {
      const interval = setInterval(() => {
        setHighlightCategoryIndex(prev => (prev + 1) % skillCategories.length);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="scroll-mt-24 flex flex-col justify-center items-start px-6 lg:px-8 bg-background text-text max-w-5xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-6">Skills</h2>

      <div className="w-full overflow-hidden">
        <div className="flex flex-wrap w-full">
          <button
            className={`text-lg py-2 grow sm:grow-0 text-center font-bold rounded-t-lg border-text border-t-2 border-l-2 border-r-2 transition-[padding] duration-200 ease-in-out ${
              activeTab === "interactive" ? "px-4 text-text hover:text-secondary border-transparent" : "px-8 text-secondary bg-accent"
            }`}
            onClick={() => setActiveTab("list")}
          >
            List Mode
          </button>
          <button
            className={`text-lg py-2 grow sm:grow-0 text-center font-bold rounded-t-lg border-text border-t-2 border-l-2 border-r-2 transition-[padding] duration-200 ease-in-out ${
              activeTab === "list" ? "px-4 text-text hover:text-secondary border-transparent" : "px-8 text-secondary bg-accent"
            }`}
            onClick={() => setActiveTab("interactive")}
          >
            Interactive Mode
          </button>
        </div>
        <div 
          className={`bg-accent border-text border-2 rounded-b-lg overflow-hidden ${
            activeTab === "list" ? "sm:rounded-r-lg" : "sm:rounded-t-lg"
          }`}>
          {activeTab === "list" && (
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.category} className="text-lg">
                  <p 
                    className={`font-bold transition-all duration-500 ${
                      categoryIndex === highlightCategoryIndex 
                        ? "text-primarybright glow-effect" 
                        : "text-primary"
                      }
                    `}
                  >
                    {category.category}
                  </p>
                  <ul>
                    {category.skills.map(skill => (
                      <li
                        key={skill.name}
                        className={`flex items-center gap-2 transition-all duration-500 ${
                          categoryIndex === highlightCategoryIndex 
                            ? "text-secondary glow-effect" 
                            : "text-text"
                        }`}
                      >
                        {skill.icon} {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {activeTab === "interactive" && (
            <div className="p-6">
              <p className="text-lg text-center mb-6">Coming soon! This section is currently under construction...</p>
              <div className="text-6xl flex justify-center mb-4">
                <FaTools />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}