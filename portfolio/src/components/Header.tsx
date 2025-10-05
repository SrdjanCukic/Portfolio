import React, { useState } from "react";

interface HeaderProps {
	currentSection: string;
}

const NAV_ITEMS = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
	const [open, setOpen] = useState<boolean>(false);

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

	const navLinkClass = (isActive: boolean) =>
		`relative px-2 py-2 transition-all duration-300 cursor-pointer
     hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
     focus-visible:ring-offset-2 focus-visible:ring-offset-brand
     after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all
     ${
			isActive
				? "text-primary after:w-full"
				: "text-textc-secondary hover:after:w-full"
		}`;

	return (
		<header className="top-0 w-full bg-brand-surface text-textc-secondary py-4 fixed z-50 shadow-lg">
			<div className="container mx-auto flex justify-between items-center px-4">
				{/* Logo (scroll to top) */}
				<button
					onClick={() => handleScroll("hero")}
					className="font-bold text-2xl text-primary tracking-wide cursor-pointer
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                     focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
					aria-label="Scroll to top"
				>
					Srđan Čukić
				</button>

				{/* Desktop Navigation */}
				<nav
					className="hidden md:flex items-center space-x-6"
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
				className={`absolute top-16 right-0 bg-brand-surface w-full md:hidden transition-transform duration-300 ${
					open ? "translate-x-0" : "translate-x-full"
				} shadow-lg rounded-b-lg`}
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
