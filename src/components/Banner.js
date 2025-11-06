import HaroldImg from "../assets/harold_img.png";
import HaroldImg2 from "../assets/harold_img2.png"; 
import { useState } from "react";

export default function Banner() {
  const [hover, setHover] = useState(false);
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background"
    >
      <div className="relative z-10 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-sans font-bold text-secondary mb-4">
            Hi, I’m <span className="text-primary">Harold</span>!
          </h1>
          <p className="text-lg text-text max-w-xl mb-6">
              I’m a Computer Science undergraduate student.
          </p>
          <a
              href="#projects"
              className="mt-4 px-6 py-3 bg-background text-primary rounded-full font-medium border-2 border-primary hover:bg-primary hover:text-secondary transition"
          >
              View My Projects
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
              src={hover ? HaroldImg2 : HaroldImg}
              alt="Harold"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg bg-accent border-2 border-primary transition hover:border-secondary"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setHover(false)}
          />
        </div>
      </div>
    </section>
  );
}
