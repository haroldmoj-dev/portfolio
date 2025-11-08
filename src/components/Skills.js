import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <section
      id="skills"
      className="scroll-mt-24 flex flex-col justify-center items-start px-6 lg:px-8 bg-background text-text max-w-3xl mx-auto py-16"
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
          className={`bg-accent border-text border-2 rounded-b-lg ${
            activeTab === "list" ? "sm:rounded-r-lg" : "sm:rounded-t-lg"
          }`}>
          {activeTab === "list" && (
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 break-words transition-all">
              <div className="text-lg animate-in fade-in duration-500">
                <p className="text-primary font-bold">Programming</p>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="text-lg">
                <p className="text-primary font-bold">Web Dev</p>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="text-lg">
                <p className="text-primary font-bold">Data & APIs</p>
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="text-lg">
                <p className="text-primary font-bold">Tools</p>
                <ul>
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === "interactive" && (
            <div className="p-6 text-lg space-y-2">
              <p>Coming soon! This section is currently under construction...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
