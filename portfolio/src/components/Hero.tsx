import { FaDownload } from "react-icons/fa";
import CV from "../data/Frontend_Resume.pdf";
import boxImg from "../data/Img/box.webp";

function Hero() {
	return (
		<div
			className="container mx-auto py-20 px-4 min-h-screen justify-center flex flex-col items-center"
			id="hero"
		>
			<div className="flex justify-items-stretch items-center">
				<div>
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
				</div>
				<div className="ml-10 md:ml-20 animate-fade-in-up delay-400 hidden lg:block">
					{" "}
					<img
						src={boxImg}
						alt="Box"
						className="w-40 h-40 object-contain mx-auto"
					/>
				</div>
			</div>
			<a
				href={CV}
				download
				className="flex items-center cursor-pointer justify-center px-6 py-3 text-textc-primary font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(86,210,198,0.8)] transition-all duration-300 border-textc-primary border-2 mt-20 bg-transparent"
			>
				<span className="mr-2">Download CV</span>
				<FaDownload className="text-textc-primary" />
			</a>
		</div>
	);
}

export default Hero;
