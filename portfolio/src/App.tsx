import React, { useEffect, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
	const [currentSection, setCurrentSection] = useState<string>("");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const syncViewport = () => setIsMobile(window.innerWidth < 768);
		syncViewport();
		window.addEventListener("resize", syncViewport);
		return () => window.removeEventListener("resize", syncViewport);
	}, []);

	const observerOptions = useMemo(
		() => ({
			threshold: isMobile ? 0.05 : 0.25,
			rootMargin: isMobile ? "-140px 0px -55%" : "-80px 0px -40%",
		}),
		[isMobile]
	);

	const { ref: heroRef, inView: heroInView } = useInView(observerOptions);
	const { ref: skillsRef, inView: skillsInView } = useInView(observerOptions);
	const { ref: projectsRef, inView: projectsInView } =
		useInView(observerOptions);
	const { ref: contactRef, inView: contactInView } =
		useInView(observerOptions);

	useEffect(() => {
		if (contactInView) setCurrentSection("contact");
		else if (projectsInView) setCurrentSection("projects");
		else if (skillsInView) setCurrentSection("skills");
		else if (heroInView) setCurrentSection("hero");
	}, [heroInView, skillsInView, projectsInView, contactInView]);

	return (
		<div className="bg-[#183052] text-[#56d2c6] min-h-screen">
			<Header currentSection={currentSection} />
			<div className="md:max-w-screen-2xl z-10 mx-auto">
				<div ref={heroRef}>
					<Hero />
				</div>
				<div ref={skillsRef}>
					<Skills />
				</div>
				<div ref={projectsRef}>
					<Projects />
				</div>
				<div ref={contactRef}>
					<Contact />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
