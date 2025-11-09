import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import HaroldImg from "../assets/harold-informal-img.png";
import HaroldImg2 from "../assets/harold-formal-img.png"; 

const Typing = ({ words }) => (
  <span className="text-primary font-bold block md:inline">
    <Typewriter
      words={words}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={120}
      deleteSpeed={80}
      delaySpeed={2000}
    />
  </span>
);

export default function Banner() {
  const [click, setClick] = useState(false);
  
  useEffect(() => {
    const preload = [HaroldImg, HaroldImg2];
    preload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background pt-16"
    >
      <div className="px-6 py-12 lg:px-8 mx-auto max-w-5xl flex flex-col lg:flex-row gap-8 items-center text-center lg:text-left">
        <div className="max-w-xl lg:max-w-full">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-secondary mb-6">
            <Typing words={['Harold', 'Mojica']}/> at your service!
          </h1>
          <p className="text-lg text-text mb-6">
            A Computer Science undergraduate with a passion for bringing ideas to life. I aspire to become a professional programmer where creativity is the only limit!
          </p>
          <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
            <a
                href="#projects"
                className="px-6 py-3 bg-background text-primary rounded-full font-medium border-2 border-primary hover:bg-primary hover:text-secondary transition  inline-flex items-center gap-2"
            >
                <HiDownload className="h-6 w-auto"/> Resume
            </a>
            <div className="flex gap-6 items-center">
              <a href="https://github.com/haroldmoj-dev" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-auto h-8 text-text hover:text-secondary transition" />
              </a>
              <a href="https://www.linkedin.com/in/harold-mojica" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-auto h-8 text-text hover:text-secondary transition" />
              </a>
              <a href="https://www.facebook.com/harold.mojica.1" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-auto h-8 text-text hover:text-secondary transition" />
              </a>
              <a href="mailto:haroldmojica.dev@gmail.com">
                <HiOutlineMail className="w-auto h-10 text-text hover:text-secondary transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer rounded-full border-2 border-primary hover:border-secondary transition-colors" onClick={() => setClick(!click)}>
              <img
                src={HaroldImg}
                alt="Harold"
                className={`absolute inset-0 w-full h-full object-cover rounded-full shadow-lg bg-accent transition-opacity duration-300 ${click ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src={HaroldImg2}
                alt="Harold"
                className={`absolute inset-0 w-full h-full object-cover rounded-full shadow-lg bg-accent transition-opacity duration-300 ${click ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
