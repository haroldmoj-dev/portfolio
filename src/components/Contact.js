import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 bg-background text-text max-w-3xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-6">Contact Me</h2>
      <p className="text-lg text-center mb-8 max-w-xl">
        Feel free to reach out to me for any inquiries!
      </p>
      
      {/* Email */}
      <a 
        href="mailto:haroldmojica.dev@gmail.com"
        className="text-lg text-secondary hover:underline hover:scale-110 transition mb-8"
      >
        haroldmojica.dev@gmail.com
      </a>
      
      {/* Social Links (reuse from Banner) */}
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
    </section>
  );
}