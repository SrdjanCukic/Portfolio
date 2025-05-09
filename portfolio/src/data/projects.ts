import GlobalPulseImage from "../components/ui/ProjectIMG/GlobalPulse.png";
import DadJokeImage from "../components/ui/ProjectIMG/DadJoke.png";

export const projects = [
  {
    image: GlobalPulseImage,
    title: "Global Pulse",
    link: "https://challenge-two-sage.vercel.app/",
    embedUrl: "https://challenge-two-sage.vercel.app/",
    description:
      "This project is a news aggregator web application designed to provide users with a seamless and customizable experience for browsing news articles from multiple sources. The application is built using modern web technologies, including React, Tailwind CSS, and Material-UI (MUI), and follows a modular and responsive design approach. The main features of the application include a user-friendly interface, a responsive layout for optimal viewing on various devices, and the ability to filter news articles by category. Users can easily navigate through different sections of the application, ensuring that they can find the news that interests them most. The use of Tailwind CSS and MUI allows for a visually appealing design while maintaining a focus on usability and performance.",
    technologies: [
      "React",
      "TailwindCSS",
      "Material UI",
      "JavaScript",
      "CSS",
      "React Router",
    ],
  },
  {
    image: DadJokeImage,
    title: "Dad-Jokes",
    link: "https://dad-joke-angular.vercel.app/",
    embedUrl: "https://dad-joke-angular.vercel.app/",
    description:
      "This project is a web application that generates and displays random dad jokes. It is built using Angular, a popular front-end framework, and utilizes the Dad Joke API to fetch jokes. The application features a clean and user-friendly interface, allowing users to easily view and share jokes. The use of Angular ensures a smooth and responsive experience, with efficient data binding and component-based architecture. Users can enjoy a collection of light-hearted dad jokes at their fingertips.",
    technologies: ["TypeScript", "Angular"],
  },
];
