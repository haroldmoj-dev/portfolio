import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md shadow-[0_1px_14px_#1DB954] ${
        open ? "bg-background" : "bg-background/80"
      }`}
    >
      <div className="relative p-4 md:px-6 lg:px-8 max-w-5xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold italic text-primary">
          Harold <span className="text-secondary">Mojica</span>
        </a>
        <button
          className="md:hidden text-text hover:text-secondary"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:gap-8 absolute md:static bg-accent md:bg-transparent left-0 w-full md:w-auto p-4 md:p-0 ${
            open ? "top-16" : "hidden"
          } `}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 md:py-0 text-text hover:text-secondary"
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
