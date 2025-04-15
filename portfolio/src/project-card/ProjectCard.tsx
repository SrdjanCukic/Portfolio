import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  technologies: string[];
  embedUrl?: string; // Optional: URL for embedding the live preview
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link, technologies, embedUrl }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      {/* Embed or Image */}
      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="w-full h-48 border-none"
          title={title}
          loading="lazy"
        ></iframe>
      ) : (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}

      {/* Project Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;