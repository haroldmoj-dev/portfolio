import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24"
    >
      <div className="flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/10 text-text max-w-full mx-auto py-16">
        <h2 className="text-4xl text-primary mb-6 text-center">Contact Me</h2>
        <p className="text-lg text-center mb-8 max-w-xl">
          Feel free to reach out for any inquiries!
        </p>
        <a 
          href="mailto:haroldmojica.dev@gmail.com"
          className="text-lg text-secondary hover:underline hover:scale-110 transition mb-8"
        >
          haroldmojica.dev@gmail.com
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
        </div>
      </div>
      <footer className="w-full bg-background py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-text text-sm">
            © 2025 Harold Mojica
          </p>
        </div>
      </footer>
    </section>
    
  );
}