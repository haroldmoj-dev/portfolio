import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md fixed top-0 w-full shadow-sm z-50">
      <h1 className="text-2xl font-bold text-indigo-600">Harold Mojica</h1>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul
        className={`md:flex md:gap-8 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto p-6 md:p-0 transition-all ${
          open ? "top-16" : "-top-96"
        }`}
      >
        {["Home", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
