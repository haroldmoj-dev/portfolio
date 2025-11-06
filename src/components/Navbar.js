import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-md fixed top-0 w-full shadow-sm z-50">
      <div className="relative z-10 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto flex justify-between items-center p-6">
        <a href="#home" className="text-2xl font-bold text-primary">
          Harold Mojica
        </a>
        <button
          className="md:hidden text-text hover:text-secondary"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:gap-8 absolute md:static bg-background md:bg-transparent left-0 w-full md:w-auto p-6 md:p-0 transition-all ${
            open ? "top-16" : "-top-96"
          }`}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-text hover:text-secondary"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
