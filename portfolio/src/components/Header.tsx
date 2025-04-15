import React, { useState } from "react";

interface HeaderProps {
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // Close the mobile menu after clicking
  };

  return (
    <header className="top-0 w-full bg-transparent text-white py-4 fixed z-50">
      <div className="container mx-auto flex justify-between items-center px-4 bg-[#1E2A47] rounded-lg shadow-xlg p-4 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
        <div className="font-bold text-xl">Srdjan Cukic</div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
        >
          {/* Animated Icon */}
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>

        {/* Navbar (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => handleScroll("hero")}
            className={`transition-all duration-300 ${
              currentSection === "hero" ? "underline underline-offset-4" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className={`transition-all duration-300 ${
              currentSection === "about" ? "underline underline-offset-4" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={`transition-all duration-300 ${
              currentSection === "projects"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`transition-all duration-300 ${
              currentSection === "contact" ? "underline underline-offset-4" : ""
            }`}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 top-100 bg-gray-900 rounded-lg shadow-lg p-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="text-white text-lg flex flex-col align-center">
          <button
            onClick={() => handleScroll("hero")}
            className={`transition-all duration-300 ${
              currentSection === "hero" ? "underline underline-offset-4" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className={`transition-all duration-300 ${
              currentSection === "about" ? "underline underline-offset-4" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={`transition-all duration-300 ${
              currentSection === "projects"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`transition-all duration-300 ${
              currentSection === "contact" ? "underline underline-offset-4" : ""
            }`}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
