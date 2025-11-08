const Highlight = ({ children }) => (
    <span className="
      text-secondary 
      md:inline-block 
      md:px-1 
      md:rounded-md 
      md:transition-all 
      md:duration-100 
      md:hover:scale-110 
      md:hover:bg-background
      ">
      {children}
    </span>
  );

export default function About() {
  
  return (
    <section
      id="about"
      className="scroll-mt-24 flex flex-col justify-center items-start px-6 lg:px-8 bg-background text-text max-w-5xl mx-auto py-16"
    >
      <h2 className="text-4xl text-primary mb-6">About</h2>
      
      <p className="text-lg mb-4">
        I’m currently studying <Highlight>BS Computer Science</Highlight>, Major in Software Technology at <Highlight>De La Salle University, Manila</Highlight>. My journey into tech started in senior high while studying in Bahrain, when a capstone project about cheating prevention made me realize how much I enjoy solving problems through code.
      </p>

      <p className="text-lg mb-4">
        Since then, I’ve learned quite a lot of stuff from <Highlight>writing code</Highlight> to <Highlight>exploring machine learning</Highlight>. I’m still discovering my niche, but <Highlight>I love the process of building things</Highlight> even on the side. In other words, curiosity drives me, and creativity keeps me going.
      </p>

      <p className="text-lg">
        But of course, I'm human! Outside of coding, <Highlight>I also enjoy life</Highlight>! I love watching movies, making art, listening to music, and spending time with family. Hopefully, life in the future remains just as fulfilling.
      </p>
    </section>
  );
}
