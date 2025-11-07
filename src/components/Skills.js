import { useState } from "react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      id="skills"
      className="scroll-mt-24 flex flex-col justify-center items-start px-4 md:px-6 lg:px-8 bg-background text-text max-w-3xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-6">Skills</h2>

      <div className="w-full border border-gray-300 rounded-md overflow-hidden">
        <div className="flex">
          <button
            className={`flex-1 py-2 text-center font-medium transition-colors ${
              activeTab === "frontend"
                ? "bg-primary text-background"
                : "bg-background text-text hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend
          </button>
          <button
            className={`flex-1 py-2 text-center font-medium transition-colors ${
              activeTab === "backend"
                ? "bg-primary text-background"
                : "bg-background text-text hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("backend")}
          >
            Backend
          </button>
        </div>

        <div className="p-6 bg-background">
          {activeTab === "frontend" && (
            <div className="space-y-2">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>JavaScript</p>
              <p>Next.js</p>
            </div>
          )}
          {activeTab === "backend" && (
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
