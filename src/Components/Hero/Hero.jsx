
import { motion } from "framer-motion";
import { useState } from "react";
import bigImage from "../../assets/img/big.png";
import mediumImage from "../../assets/img/medium.png";
import smallImage from "../../assets/img/small.png";

const Hero = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;
		setMousePos({ x, y });
	};

	const handleMouseLeave = () => {
		setMousePos({ x: 0.5, y: 0.5 });
	};

	return (
		<section className="relative w-full bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 px-4 sm:px-6 py-16 md:py-24 overflow-hidden">

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.4 }}
				transition={{ duration: 1.5 }}
				className="hidden md:block absolute left-[-100px] top-[100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400 to-transparent"
			/>

			<div className="max-w-7xl mx-auto px-0 md:px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">

					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-6 md:space-y-8"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="space-y-4"
						>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-blue-900">
							<span>Where Confidence </span>
							<span>Speaks </span>
							<br />
							<span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">with Nepali Heartbeats</span>
						</h1>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl"
						>
							Awaz Nepali Belgium empowers Nepali children and youth through public speaking, personal development, and cultural pride.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="flex flex-col sm:flex-row gap-4 pt-4"
						>
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								href="#join"
								className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center text-sm md:text-base"
							>
								Join the Program
							</motion.a>

							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								href="#learn"
								className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-xl hover:bg-blue-900 hover:text-white transition-all duration-300 text-center text-sm md:text-base"
							>
								Learn More
							</motion.a>
						</motion.div>
					</motion.div>

					{/* Right Images - Interactive with Mouse */}
					<motion.div
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
						className="relative h-[600px] md:h-[700px] cursor-grab active:cursor-grabbing"
					>
						<div className="relative w-full h-full">

							{/* Left Main Image - Larger */}
							<motion.div
								className="absolute left-0 top-20 z-20"
								animate={{
									x: (mousePos.x - 0.5) * 30,
									y: (mousePos.y - 0.5) * 30,
								}}
								transition={{ type: "spring", stiffness: 100, damping: 20 }}
							>
								<div className="w-72 h-96 md:w-80 md:h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20">
									<img src={bigImage} alt="Main Speaker" className="object-cover w-full h-full" />
								</div>
							</motion.div>

						{/* Top Right Image */}
						<motion.div
							className="absolute right-0 top-0 z-10"
							animate={{
								x: (mousePos.x - 0.5) * 45,
								y: (mousePos.y - 0.5) * 45,
							}}
								transition={{ type: "spring", stiffness: 100, damping: 20 }}
							>
								<div className="w-48 h-56 md:w-56 md:h-64 rounded-3xl overflow-hidden shadow-xl border-8 border-white/20">
									<img src={mediumImage} alt="Student 1" className="object-cover w-full h-full" />
								</div>
							</motion.div>

						{/* Bottom Right Image */}
						<motion.div
							className="absolute right-12 bottom-16 z-15"
							animate={{
								x: (mousePos.x - 0.5) * 50,
								y: (mousePos.y - 0.5) * 50,
							}}
								transition={{ type: "spring", stiffness: 100, damping: 20 }}
							>
								<div className="w-48 h-56 md:w-56 md:h-64 rounded-3xl overflow-hidden shadow-xl border-8 border-white/20">
									<img src={smallImage} alt="Student 2" className="object-cover w-full h-full" />
								</div>
							</motion.div>

						{/* Expert Trainer Card - Top Right */}
						<motion.div
							className="absolute top-0 -right-8 z-30"
							animate={{
								x: (mousePos.x - 0.5) * 35,
								y: (mousePos.y - 0.5) * 35,
							}}
							transition={{ type: "spring", stiffness: 100, damping: 20 }}
						>
							<div className="bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 w-auto">
								<div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-cyan-500 flex-shrink-0">
									<img src="/assets/img/educator.jpg" alt="Trainer" className="w-full h-full object-cover" />
								</div>
								<div>
									<div className="font-bold text-slate-900 text-sm">Expert Trainer</div>
									<div className="text-xs text-slate-600">Professional Coach</div>
									<div className="flex gap-1 mt-1">
										{[...Array(5)].map((_, i) => (
											<span key={i} className="text-yellow-400 text-xs">★</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>							{/* Free Courses Card - Bottom Left */}
							<motion.div
								className="absolute bottom-32 left-0 z-30"
								animate={{
									x: (mousePos.x - 0.5) * 35,
									y: (mousePos.y - 0.5) * 35,
								}}
								transition={{ type: "spring", stiffness: 100, damping: 20 }}
							>
								<div className="bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 w-auto">
									<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
										<span className="text-2xl">💼</span>
									</div>
									<div>
										<div className="font-bold text-red-600 text-sm">3,000 +</div>
										<div className="text-xs text-slate-600">Free Courses</div>
									</div>
								</div>
							</motion.div>

						{/* Congratulations Card - Bottom Center */}
						<motion.div
							className="absolute bottom-0 right-24 z-30"
							animate={{
								x: (mousePos.x - 0.5) * 35,
								y: (mousePos.y - 0.5) * 35,
							}}
								transition={{ type: "spring", stiffness: 100, damping: 20 }}
							>
								<div className="bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 w-auto">
									<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
										<span className="text-xl">🎉</span>
									</div>
									<div>
										<div className="font-bold text-purple-600 text-sm">Congrats!</div>
										<div className="text-xs text-slate-600">Your Admission Completed</div>
									</div>
								</div>
							</motion.div>

						</div>
					</motion.div>
				</div>
			</div>

		</section>
	);
};

export default Hero;