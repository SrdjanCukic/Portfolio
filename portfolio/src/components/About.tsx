import Tilter from "./ui/Tilter";
import typescriptIcon from "./ui/icons/icons8-typescript-96.png";
import javacriptIcon from "./ui/icons/icons8-javascript-96.png";
import tailwindIcon from "./ui/icons/icons8-tailwindcss-96.png";
import htmlIcon from "./ui/icons/icons8-html-96.png";
import reactIcon from "./ui/icons/icons8-react-96.png";
import cssIcon from "./ui/icons/icons8-css-96.png";
import muiIcon from "./ui/icons/icons8-material-ui-96.png";
import reduxIcon from "./ui/icons/icons8-redux-96.png";
import gitIcon from "./ui/icons/icons8-github-96.png";
import viteIcon from "./ui/icons/icons8-vite-96.png";
import mongoIcon from "./ui/icons/icons8-mongo-db-96.png";
import sassIcon from "./ui/icons/icons8-sass-96.png";

function About() {
  const icons = [
    { src: typescriptIcon, alt: "TypeScript Icon" },
    { src: javacriptIcon, alt: "JavaScript Icon" },
    { src: tailwindIcon, alt: "Tailwind CSS Icon" },
    { src: htmlIcon, alt: "HTML Icon" },
    { src: reactIcon, alt: "React Icon" },
    { src: cssIcon, alt: "CSS Icon" },
    { src: muiIcon, alt: "Material UI Icon" },
    { src: viteIcon, alt: "Vite Icon" },
    { src: reduxIcon, alt: "Redux Icon" },
    { src: gitIcon, alt: "Git Icon" },
    { src: mongoIcon, alt: "MongoDB Icon" },
    { src: sassIcon, alt: "Sass Icon" },
  ];

  return (
    <div
      className="container mx-auto py-20 px-4 min-h-screen justify-center flex flex-col items-center"
      id="about"
    >
      <h1 className="text-6xl font-bold font-mono tracking-widest cursor-pointer ">
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          My
        </span>{" "}
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          Skills
        </span>{" "}
        <br />
      </h1>

      {/* Download CV Button */}

      <div className="grid grid-cols-3 gap-4 pt-20 lg:flex lg:flex-wrap lg:justify-center lg:gap-8">
        {icons.map((icon, index) => (
          <Tilter key={index}>
            <img src={icon.src} alt={icon.alt} />
          </Tilter>
        ))}
      </div>
    </div>
  );
}

export default About;
