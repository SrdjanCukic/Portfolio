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
    <header className="top-0 w-full bg-[#1E2A47] text-white py-4 fixed z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="font-bold text-2xl tracking-wide cursor-pointer">
          Srdjan Cukic
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => handleScroll("hero")}
            className={`transition-all duration-300 ${
              currentSection === "hero" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className={`transition-all duration-300 ${
              currentSection === "about" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={`transition-all duration-300 ${
              currentSection === "projects" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`transition-all duration-300 ${
              currentSection === "contact" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            Contact
          </button>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
        >
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 right-0 bg-[#1E2A47] w-full md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } shadow-lg rounded-b-lg`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <button
            onClick={() => handleScroll("hero")}
            className={`transition-all duration-300 ${
              currentSection === "hero" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className={`transition-all duration-300 ${
              currentSection === "about" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={`transition-all duration-300 ${
              currentSection === "projects" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`transition-all duration-300 ${
              currentSection === "contact" ? "text-[#56d2c6] underline" : ""
            } hover:text-[#56d2c6]`}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
