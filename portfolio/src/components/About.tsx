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
import nodeJsIcon from "./ui/icons/icons8-nodejs-96.png";

function About() {
	const icons = [
		{ src: typescriptIcon, alt: "TypeScript Icon", label: "TypeScript" },
		{ src: javacriptIcon, alt: "JavaScript Icon", label: "JavaScript" },
		{ src: nodeJsIcon, alt: "Node.js Icon", label: "Node.js" },
		{ src: tailwindIcon, alt: "Tailwind CSS Icon", label: "Tailwind CSS" },
		{ src: htmlIcon, alt: "HTML Icon", label: "HTML5" },
		{ src: reactIcon, alt: "React Icon", label: "React" },
		{ src: cssIcon, alt: "CSS Icon", label: "CSS3" },
		{ src: muiIcon, alt: "Material UI Icon", label: "Material UI" },
		{ src: viteIcon, alt: "Vite Icon", label: "Vite" },
		{ src: reduxIcon, alt: "Redux Icon", label: "Redux" },
		{ src: gitIcon, alt: "Git Icon", label: "Git & GitHub" },
		{ src: mongoIcon, alt: "MongoDB Icon", label: "MongoDB" },
		{ src: sassIcon, alt: "Sass Icon", label: "Sass" },
	];

	return (
		<div
			className="container mx-auto py-20 px-4 min-h-screen justify-center flex flex-col items-center"
			id="about"
		>
			<h1 className="text-6xl font-bold font-mono tracking-widest cursor-auto mb-8">
				<div className="relative">
					<div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-textc-primary"></div>
					<div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-textc-primary"></div>
					<span className="text-white transition-all duration-500 hover:text-textc-primary hover:drop-shadow-[0_0_10px_rgba(86,210,198,0.8)]">
						Skills
					</span>
				</div>
				<br />
			</h1>
			{/* Download CV Button */}
			<div>
				<p className="text-2xl font-mono tracking-widest text-center pt-8 pb-8 animate-fade-in-up delay-200">
					I'm a self-taught Front-End Developer with a passion for
					building clean, responsive, and user-friendly web
					experiences. As a husband and father, I value time with my
					family and love traveling to explore new places. My journey
					into web development started with curiosity and grew into a
					full-fledged passion for crafting beautiful and functional
					interfaces using React, TypeScript, and modern front-end
					technologies. I'm always eager to learn, improve, and take
					on new challenges. Whether it's coding, exploring new
					destinations, or spending quality time with my loved ones, I
					strive to make the most of every moment.
				</p>
			</div>
			<div className="grid grid-cols-2 gap-6 pt-16 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-10">
				{icons.map(({ src, alt, label }, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-3 text-center"
					>
						<Tilter>
							<img src={src} alt={alt} className="w-24 h-24" />
						</Tilter>
						<span className="px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-textc-primary bg-textc-primary/10 border border-textc-primary/40 rounded-full shadow-[0_0_15px_rgba(86,210,198,0.15)]">
							{label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default About;
