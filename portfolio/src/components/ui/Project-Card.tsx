import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  tag,
  image,
  description,
  buttonText,
  buttonHref,
}: Readonly<{
  title: string;
  tag: Array<string>;
  image: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}>) {
  return (
    <>
      <div
        className="relative flex flex-col gap-8 overflow-hidden border-transparent rounded-xl border px-8 py-4 bg-[#1E2A47] shadow-lg"
        style={{
          padding: "1rem",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // Adds elevation
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="z-20 flex flex-col flex-grow">
          <div className="flex items-center gap-2 flex-col">
            <h3 className="inline font-semibold text-white text-xl">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tag.map((t, index) => (
                <p
                  key={index}
                  className="ml-2 inline rounded-xl border border-white p-2 align-top font-medium text-sm uppercase tracking-tight text-[#56d2c6]"
                >
                  {t}
                </p>
              ))}
            </div>
          </div>
          <img
            src={image}
            alt={title}
            className="mt-4 rounded-lg shadow-md object-cover w-full h-48"
          />
          <p className="pt-5 text-neutral-400 ">{description}</p>
        </div>
        <button
          onClick={() => window.open(buttonHref, "_blank")}
          className="flex items-center justify-center px-6 py-3 text-[#56d2c6] font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(86,210,198,0.8)] transition-all duration-300 border-[#56d2c6] border-2 mt-4 bg-transparent mx-auto"
        >
          <span className="mr-2">{buttonText}</span>
          <FaExternalLinkAlt className="text-[#56d2c6]" />
        </button>
      </div>
    </>
  );
}
