import { FaDownload } from "react-icons/fa";
import CV from "../data/Frontend_Resume.pdf";
import boxImg from "../data/Img/box.png";

function Hero() {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className="container mx-auto px-4 py-16 sm:py-20 min-h-screen flex flex-col items-center justify-center"
			id="hero"
		>
			<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
				<div className="max-w-xl text-center lg:text-left">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-widest cursor-pointer pb-6 sm:pb-8 animate-fade-in-up delay-200">
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
				</div>
				<div className="animate-fade-in-up delay-400 hidden lg:block">
					<img
						src={boxImg}
						alt="Box"
						className=" w-40 h-40 object-contain mx-auto"
					/>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-3 sm:gap-4 mt-10 sm:mt-16 w-full max-w-sm sm:max-w-xl">
				<a
					href={CV}
					download
					className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm sm:text-base text-textc-primary font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(86,210,198,0.8)] transition-all duration-300 border-textc-primary border-2 bg-transparent"
				>
					<span className="mr-2">Download CV</span>
					<FaDownload className="text-textc-primary" />
				</a>
				<button
					onClick={() => scrollToSection("projects")}
					className="flex items-center justify-center px-5 py-2.5 text-sm sm:text-base text-textc-primary font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(86,210,198,0.8)] transition-all duration-300 border-textc-primary border-2 bg-transparent"
				>
					Check Portfolio
				</button>
				<button
					onClick={() => scrollToSection("contact")}
					className="flex items-center justify-center px-5 py-2.5 text-sm sm:text-base text-textc-primary font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(86,210,198,0.8)] transition-all duration-300 border-textc-primary border-2 bg-transparent"
				>
					Get in Touch
				</button>
			</div>
		</div>
	);
}

export default Hero;
