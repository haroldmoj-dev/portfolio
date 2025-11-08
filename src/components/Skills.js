import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("interactive");

  return (
    <section
      id="skills"
      className="scroll-mt-24 flex flex-col justify-center items-start px-6 lg:px-8 bg-background text-text max-w-3xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-6">Skills</h2>

      <div className="w-full overflow-hidden">
        <div className="flex flex-wrap w-full">
          <button
            className={`py-2 grow sm:grow-0 text-center font-bold rounded-t-lg border-text border-t-2 border-l-2 border-r-2 transition-[padding] duration-200 ease-in-out ${
              activeTab === "list" ? "px-4 text-text hover:text-secondary border-transparent" : "px-8 text-secondary bg-accent"
            }`}
            onClick={() => setActiveTab("interactive")}
          >
            Interactive Mode
          </button>
          <button
            className={`py-2 grow sm:grow-0 text-center font-bold rounded-t-lg border-text border-t-2 border-l-2 border-r-2 transition-[padding] duration-200 ease-in-out ${
              activeTab === "interactive" ? "px-4 text-text hover:text-secondary border-transparent" : "px-8 text-secondary bg-accent"
            }`}
            onClick={() => setActiveTab("list")}
          >
            List Mode
          </button>
        </div>
        <div 
          className={`p-6 bg-accent border-text border-2 rounded-b-lg ${
            activeTab === "interactive" ? "sm:rounded-r-lg" : "sm:rounded-t-lg"
          }`}>
          {activeTab === "list" && (
            <div className="space-y-2">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>JavaScript</p>
              <p>Next.js</p>
            </div>
          )}
          {activeTab === "interactive" && (
            <div className="space-y-2">
              <p>Node.js</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
