
import { FaShieldAlt, FaLightbulb, FaTrophy, FaHeart, FaGlobe, FaUserFriends } from 'react-icons/fa';

const gains = [
	{
		icon: <FaShieldAlt size={44} />,
		title: 'Overcome Stage Fear',
		desc: 'Learn to speak confidently in front of any audience, transforming nervousness into powerful presence.',
		color: 'from-red-100 to-red-50',
		borderColor: 'border-red-300',
		iconColor: 'text-red-600',
	},
	{
		icon: <FaLightbulb size={44} />,
		title: 'Master Storytelling',
		desc: 'Develop compelling communication through storytelling, articulation, and expressive body language.',
		color: 'from-orange-100 to-orange-50',
		borderColor: 'border-orange-300',
		iconColor: 'text-orange-600',
	},
	{
		icon: <FaTrophy size={44} />,
		title: 'Build Leadership',
		desc: 'Cultivate leadership skills and self-discipline that will serve you throughout life.',
		color: 'from-yellow-100 to-yellow-50',
		borderColor: 'border-yellow-300',
		iconColor: 'text-yellow-600',
	},
	{
		icon: <FaHeart size={44} />,
		title: 'Develop Self-Respect',
		desc: 'Build personality, self-respect, and a positive mindset rooted in cultural pride.',
		color: 'from-pink-100 to-pink-50',
		borderColor: 'border-pink-300',
		iconColor: 'text-pink-600',
	},
	{
		icon: <FaGlobe size={44} />,
		title: 'Honor Your Heritage',
		desc: 'Preserve and celebrate Nepali language, culture, and values while living abroad.',
		color: 'from-green-100 to-green-50',
		borderColor: 'border-green-300',
		iconColor: 'text-green-600',
	},
	{
		icon: <FaUserFriends size={44} />,
		title: 'Personal Mentorship',
		desc: 'Receive individual attention from two dedicated coaches who track your progress.',
		color: 'from-blue-100 to-blue-50',
		borderColor: 'border-blue-300',
		iconColor: 'text-blue-600',
	},
];

export default function Gain() {
	return (
		<section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 flex flex-col items-center">
			<div className="max-w-7xl w-full mx-auto px-4">
				{/* Header Section */}
				<div className="flex flex-col items-center mb-16">
					<span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-100 to-red-50 text-red-700 font-bold text-sm mb-4 shadow-md">★ Program Highlights</span>
					<h2 className="text-5xl md:text-6xl font-black text-slate-900 text-center mb-6 tracking-tight">What You'll Gain</h2>
					<p className="text-xl text-slate-600 text-center max-w-3xl font-medium">Transform your confidence and skills through our comprehensive program designed for success</p>
				</div>

				{/* Benefits Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
					{gains.map((gain, i) => (
						<div 
							key={i} 
						className={`group relative rounded-2xl bg-gradient-to-br ${gain.color} border-2 ${gain.borderColor} shadow-lg hover:shadow-2xl p-10 flex flex-col items-start transition-all duration-300 hover:-translate-y-2`}
					>
						{/* Icon */}
							<div className={`mb-6 p-4 rounded-xl bg-white shadow-md group-hover:scale-110 transition-transform ${gain.iconColor}`}>
								{gain.icon}
							</div>

							{/* Title */}
							<h3 className="font-black text-xl text-slate-900 mb-4 leading-tight">{gain.title}</h3>

						{/* Description */}
						<p className="text-slate-700 text-base leading-relaxed font-medium">{gain.desc}</p>
					</div>
					))}
				</div>
			</div>
		</section>
	);
}
