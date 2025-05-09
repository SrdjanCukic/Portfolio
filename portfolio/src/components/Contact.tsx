import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import FaEnvelope for the email icon

function Contact() {
  return (
    <div
      className="container mx-auto py-20 px-4 md:min-h-screen flex flex-col lg:flex-row justify-between items-center gap-8"
      id="contact"
    >
      <div className="w-full lg:w-1/2 text-white text-center mx-auto">
        <p className="mb-2">Located in Novi Sad, Serbia</p>

        <h3 className="text-xl font-bold text-[#56d2c6] mb-4">Links</h3>
        <div className="flex gap-4 justify-center ">
          <a
            href="https://github.com/SrdjanCukic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#56d2c6] transition"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/srdjan-cukic-4a50591a3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#56d2c6] transition"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="mailto:cukic.srdjan@gmail.com"
            className="text-white hover:text-[#56d2c6] transition"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
