import React, { useState, useEffect } from "react";

interface HeaderProps {
	currentSection: string;
}

const NAV_ITEMS = [
	{ id: "hero", label: "Home" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isAtTop, setIsAtTop] = useState<boolean>(true);

	useEffect(() => {
		const handleScrollState = () => {
			setIsAtTop(window.scrollY <= 10);
		};

		handleScrollState();
		window.addEventListener("scroll", handleScrollState);

		return () => window.removeEventListener("scroll", handleScrollState);
	}, []);

	const handleScroll = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			const prefersReduced = window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;
			el.scrollIntoView({
				behavior: prefersReduced ? "auto" : "smooth",
				block: "start",
			});
		}
		setOpen(false);
	};

	const shouldExpand = isAtTop || isHovered;
	const navLinkClass = (isActive: boolean) =>
		`relative px-2 transition-all duration-300 cursor-pointer ${
			shouldExpand ? "py-2 text-base" : "py-1 text-sm"
		}
         hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
         focus-visible:ring-offset-2 focus-visible:ring-offset-brand
         after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all
         ${
				isActive
					? "text-primary after:w-full"
					: "text-textc-secondary hover:after:w-full"
			}`;

	return (
		<header
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`top-0 w-full fixed z-50 bg-brand-surface text-textc-secondary transition-all duration-300 ${
				shouldExpand
					? "py-4 shadow-lg"
					: "py-2 shadow-md backdrop-blur-md"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center px-4 transition-all duration-300">
				{/* Logo (scroll to top) */}
				<button
					onClick={() => handleScroll("hero")}
					className={`font-bold text-primary tracking-wide cursor-pointer transition-all duration-300 ${
						shouldExpand ? "text-2xl" : "text-xl"
					}
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                     focus-visible:ring-offset-2 focus-visible:ring-offset-brand`}
					aria-label="Scroll to top"
				>
					Srđan Čukić
				</button>

				{/* Desktop Navigation */}
				<nav
					className={`hidden md:flex items-center transition-all duration-300 ${
						shouldExpand ? "space-x-6" : "space-x-4"
					}`}
					aria-label="Main navigation"
				>
					{NAV_ITEMS.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							onClick={(e) => {
								e.preventDefault();
								handleScroll(item.id);
							}}
							aria-current={
								currentSection === item.id ? "page" : undefined
							}
							className={navLinkClass(currentSection === item.id)}
						>
							{item.label}
						</a>
					))}
				</nav>

				{/* Hamburger Button */}
				<button
					onClick={() => setOpen((v) => !v)}
					className="md:hidden cursor-pointer flex flex-col justify-center items-center w-10 h-10 relative z-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                     focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
					aria-label="Toggle navigation"
					aria-expanded={open}
					aria-controls="mobile-menu"
				>
					<span
						className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
							open ? "rotate-45 translate-y-1.5" : ""
						}`}
					/>
					<span
						className={`w-6 h-0.5 bg-primary my-1 transition-all duration-300 ${
							open ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
							open ? "-rotate-45 -translate-y-1.5" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className={`absolute right-0 w-full md:hidden transition-transform duration-300 ${
					open ? "translate-x-0" : "translate-x-full"
				} ${
					shouldExpand ? "top-16" : "top-12"
				} bg-brand-surface shadow-lg rounded-b-lg`}
			>
				<nav
					className="flex flex-col items-center space-y-4 py-4"
					aria-label="Mobile navigation"
				>
					{NAV_ITEMS.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							onClick={(e) => {
								e.preventDefault();
								handleScroll(item.id);
							}}
							aria-current={
								currentSection === item.id ? "page" : undefined
							}
							className={navLinkClass(currentSection === item.id)}
						>
							{item.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
