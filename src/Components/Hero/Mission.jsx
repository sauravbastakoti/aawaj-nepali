

import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaUsers, FaHeart } from "react-icons/fa";

const Mission = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<section className="py-24 px-4 sm:px-8 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
						Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vision & Mission</span>
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
						Empowering Nepali voices in Belgium through confidence, communication, and cultural pride
					</p>
				</motion.div>

				{/* Main Vision & Mission Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
				>
					{/* Vision Card - Bold and Inspiring */}
					<motion.div
						variants={itemVariants}
						className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
					>
						{/* Background Gradient */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800"></div>
						
						{/* Animated Background Elements */}
						<div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
						<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>

						{/* Content */}
						<div className="relative z-10 px-8 md:px-10 py-12 md:py-16 min-h-[420px] flex flex-col justify-center">
							<div className="flex items-start gap-5 mb-8">
								<motion.div
									whileHover={{ scale: 1.2, rotate: 10 }}
									className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
								>
									<FaRocket className="text-4xl text-white" />
								</motion.div>
								<div>
									<h3 className="text-4xl md:text-5xl font-black text-white">Our Vision</h3>
									<div className="w-12 h-1 bg-white/50 mt-2 rounded-full"></div>
								</div>
							</div>
							<p className="text-white/90 text-lg md:text-lg leading-relaxed font-medium mb-6">
								To create a thriving community of confident, articulate leaders who celebrate their Nepali heritage while excelling in the global stage.
							</p>
							<div className="space-y-3">
								<div className="flex items-center gap-3 text-white/80">
									<div className="w-2 h-2 bg-white rounded-full"></div>
									<span>Build unshakeable confidence in public speaking</span>
								</div>
								<div className="flex items-center gap-3 text-white/80">
									<div className="w-2 h-2 bg-white rounded-full"></div>
									<span>Preserve and celebrate Nepali cultural identity</span>
								</div>
								<div className="flex items-center gap-3 text-white/80">
									<div className="w-2 h-2 bg-white rounded-full"></div>
									<span>Develop leadership excellence across generations</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Mission Card - Action-Oriented */}
					<motion.div
						variants={itemVariants}
						className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
					>
						{/* Background Gradient */}
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-800"></div>
						
						{/* Animated Background Elements */}
						<div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
						<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>

						{/* Content */}
						<div className="relative z-10 px-8 md:px-10 py-12 md:py-16 min-h-[420px] flex flex-col justify-center">
							<div className="flex items-start gap-5 mb-8">
								<motion.div
									whileHover={{ scale: 1.2, rotate: -10 }}
									className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
								>
									<FaBullseye className="text-4xl text-white" />
								</motion.div>
								<div>
									<h3 className="text-4xl md:text-5xl font-black text-white">Our Mission</h3>
									<div className="w-12 h-1 bg-white/50 mt-2 rounded-full"></div>
								</div>
							</div>
							<p className="text-white/90 text-lg md:text-lg leading-relaxed font-medium mb-6">
								To provide transformative communication and personality development programs that unlock the potential of every individual in our community.
							</p>
							<div className="space-y-3">
								<div className="flex items-center gap-3 text-white/80">
									<div className="w-2 h-2 bg-white rounded-full"></div>
									<span>Expert mentorship from seasoned professionals</span>
								</div>
								<div className="flex items-center gap-3 text-white/80">
									<div className="w-2 h-2 bg-white rounded-full"></div>
									<span>Interactive, engaging, and culturally relevant programs</span>
								</div>
								<div className="flex items-center gap-3 text-white/80">
									<div className="w-2 h-2 bg-white rounded-full"></div>
									<span>Support every step of your communication journey</span>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Core Values Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-200/50"
				>
					<h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 text-center">
						What Drives <span className="text-blue-600">Us</span>
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ icon: FaUsers, title: "Community", desc: "Building connections among Nepali youth" },
							{ icon: FaHeart, title: "Excellence", desc: "Pursuing the highest standards in everything" },
							{ icon: FaBullseye, title: "Integrity", desc: "Acting with honesty and moral courage" },
							{ icon: FaRocket, title: "Innovation", desc: "Constantly evolving our approaches" },
						].map((value, idx) => (
							<motion.div
								key={idx}
								whileHover={{ y: -8 }}
								className="group text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<motion.div
									whileHover={{ scale: 1.15, rotate: 5 }}
									className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-600 group-hover:to-blue-500 transition-all"
								>
									<value.icon className="text-2xl text-white" />
								</motion.div>
								<h4 className="text-xl font-black text-slate-900 mb-2">{value.title}</h4>
								<p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Mission;