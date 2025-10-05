import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
	return (
		<section
			className="container mx-auto py-20 px-4 md:min-h-screen flex flex-col items-center justify-center"
			id="contact"
		>
			{/* Heading */}
			<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-textc-primary">
				Get in Touch
			</h2>
			<p className="text-gray-300 mb-12 text-center max-w-xl">
				Always open to new opportunities, collaborations, or just a
				friendly chat. Feel free to reach out via the links below.
			</p>

			{/* Card container */}
			<div className="bg-blue-900/40 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#56d2c6]/20 w-full max-w-md text-center">
				<p className="mb-4 text-gray-200">📍 Novi Sad, Serbia</p>

				{/* Motion icons */}
				<motion.div
					className="flex gap-8 justify-center"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.2 } },
					}}
				>
					{/* GitHub */}
					<motion.a
						href="https://github.com/SrdjanCukic"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit my GitHub profile"
						className="text-white hover:text-[#56d2c6] transition transform hover:scale-110"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<FaGithub size={30} />
					</motion.a>

					{/* LinkedIn */}
					<motion.a
						href="https://www.linkedin.com/in/srdjan-cukic-4a50591a3"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit my LinkedIn profile"
						className="text-white hover:text-[#56d2c6] transition transform hover:scale-110"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<FaLinkedin size={30} />
					</motion.a>

					{/* Email */}
					<motion.a
						href="mailto:cukic.srdjan@gmail.com"
						aria-label="Send me an email"
						className="text-white hover:text-[#56d2c6] transition transform hover:scale-110"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<FaEnvelope size={30} />
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}

export default Contact;
