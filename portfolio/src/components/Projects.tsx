import ProjectCard from "./ui/Project-Card";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto py-20 px-4 min-h-screen"
    >
      <h1 className="text-6xl font-bold font-mono tracking-widest cursor-pointer text-center pb-15">
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          My
        </span>{" "}
        <span className="transition-all duration-500 hover:text-white hover:text-shadow">
          Projects
        </span>{" "}
        <br />
      </h1>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              buttonHref={project.embedUrl}
              buttonText="Check it out"
              description={project.description}
              tag={project.technologies}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
