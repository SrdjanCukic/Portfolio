import ProjectCard from "../project-card/ProjectCard";


function Projects() {
  const projects = [
    {
      image: "assets/img/project-1.jpg",
      title: "Global Pulse (News Aggregator)",
      link: "https://challenge-two-sage.vercel.app/",
      embedUrl: "https://challenge-two-sage.vercel.app/", 
      technologies: ["React", "TailwindCSS", "Material UI", "JavaScript", "CSS", "React Router"],
    },
    {
      image: "assets/img/project-2.jpg",
      title: "Dad-Jokes",
      link: "https://dad-joke-angular.vercel.app/",
      embedUrl: "https://dad-joke-angular.vercel.app/", 
      technologies: ["TypeScript", "Angular"],
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-20 px-4 min-h-screen">
    <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            link={project.link}
            technologies={project.technologies}
            embedUrl={project.embedUrl} // Pass embed URL
          />
        ))}
      </div>
    </div>
  </section>
  );
}

export default Projects;