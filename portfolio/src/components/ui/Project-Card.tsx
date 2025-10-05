type ProjectCardProps = {
	image: string;
	title: string;
	description: string;
	tag: string[];
	buttonHref: string;
	buttonText: string;
};

export default function ProjectCard({
	image,
	title,
	description,
	tag,
	buttonHref,
	buttonText,
}: ProjectCardProps) {
	return (
		<div className="flex flex-col rounded-xl bg-[#1E2A47]/80 shadow-lg overflow-hidden border border-[#56d2c6]/30 max-w-md w-full">
			{/* Slika */}
			<div className="w-full h-48 overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Tekst */}
			<div className="flex flex-col flex-grow p-6">
				{/* Tagovi */}
				<div className="flex flex-wrap gap-2 mb-3">
					{tag.map((t, idx) => (
						<span
							key={idx}
							className="px-2 py-1 text-xs font-medium bg-[#56d2c6]/20 text-[#56d2c6] rounded-lg"
						>
							{t}
						</span>
					))}
				</div>

				{/* Naslov */}
				<h2 className="text-xl font-semibold text-[#56d2c6] mb-3">
					{title}
				</h2>

				{/* Opis */}
				<p className="text-sm text-neutral-300 flex-grow">
					{description}
				</p>

				{/* Dugme */}
				<div className="mt-auto mx-auto pt-4">
					<a
						href={buttonHref}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-4 py-2 rounded-lg bg-[#56d2c6] text-[#0d1b2a] font-semibold hover:bg-[#48b9ae] transition"
					>
						{buttonText}
					</a>
				</div>
			</div>
		</div>
	);
}
