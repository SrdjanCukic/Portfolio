import { FaDownload } from "react-icons/fa";
import CV from "../data/Frontend_Resume.pdf";

function Hero() {
  return (
    <div
      className="container mx-auto py-20 px-4 min-h-screen justify-center flex flex-col items-center"
      id="hero"
    >
      <h1 className="text-6xl font-bold font-mono tracking-widest cursor-pointer pb-8 animate-fade-in-up delay-200 text-center my-70 md:my-0">
        <span className="transition-all duration-500 hover:mr-2 hover:text-white hover:after:content-['\'] hover:text-shadow">
          Hi
        </span>{" "}
        <span className="transition-all duration-500 hover:ml-8 hover:text-white hover:text-shadow">
          I`m
        </span>{" "}
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          Srđan
        </span>{" "}
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          Čukić
        </span>{" "}
        <br />
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          Frontend
        </span>{" "}
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          Developer
        </span>
      </h1>
      <p className="text-2xl font-mono tracking-widest text-center pt-8 pb-8 animate-fade-in-up delay-200">
        I'm a self-taught Front-End Developer with a passion for building clean,
        responsive, and user-friendly web experiences. As a husband and father,
        I value time with my family and love traveling to explore new places. My
        journey into web development started with curiosity and grew into a
        full-fledged passion for crafting beautiful and functional interfaces
        using React, TypeScript, and modern front-end technologies. I'm always
        eager to learn, improve, and take on new challenges. Whether it's
        coding, exploring new destinations, or spending quality time with my
        loved ones, I strive to make the most of every moment.
      </p>
      <a
        href={CV}
        download
        className="flex items-center justify-center px-6 py-3 text-[#56d2c6] font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(86,210,198,0.8)] transition-all duration-300 border-[#56d2c6] border-2 mt-20 bg-transparent"
      >
        <span className="mr-2">Download CV</span>
        <FaDownload className="text-[#56d2c6]" />
      </a>
    </div>
  );
}

export default Hero;
