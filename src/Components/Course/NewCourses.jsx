
import { FaMicrophoneAlt, FaTrophy } from 'react-icons/fa';

export default function NewCourses() {
	return (
		<section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 flex flex-col items-center">
			<div className="max-w-6xl w-full mx-auto px-4">
				{/* Header Section */}
				<div className="flex flex-col items-center mb-16">
					<span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-bold text-sm mb-4 shadow-md">Our Programs</span>
					<h1 className="text-5xl md:text-6xl font-black text-slate-900 text-center mb-6 tracking-tight">Choose Your Path to Confidence</h1>
					<p className="text-xl text-slate-600 text-center max-w-3xl font-medium leading-relaxed">Whether you want ongoing development or intensive speech preparation, we have a program for you.</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
					{/* Left Card - Monthly Program */}
					<div className="group relative rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 p-10 flex flex-col justify-between min-h-[520px] transition-all duration-300 hover:-translate-y-1 hover:border-red-200">
						{/* Gradient Accent */}
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>

						{/* Price Badge */}
						<span className="absolute top-0 right-0 translate-x-[-35%] -translate-y-1/2 px-6 py-2.5 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white font-black text-lg shadow-lg">€80<span className="text-sm font-semibold">/mo</span></span>

						{/* Icon */}
						<div className="mb-6">
							<span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-red-50 text-red-600 text-4xl shadow-md group-hover:scale-110 transition-transform"><FaMicrophoneAlt /></span>
						</div>

						{/* Content */}
						<div>
							<h2 className="text-3xl font-black text-slate-900 mb-3">Public Speaking & Development</h2>
							<div className="text-slate-700 font-bold mb-2 text-lg">Comprehensive monthly program</div>
							<div className="text-slate-500 text-base mb-6 font-medium">2 online classes/week + 1 physical/month</div>

							<ul className="mb-8 space-y-3">
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-red-600 text-2xl font-black leading-none">✓</span><span>Online classes via Zoom/Teams twice weekly</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-red-600 text-2xl font-black leading-none">✓</span><span>Monthly physical classes in Gent, Antwerpen, Brugge & Leuven</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-red-600 text-2xl font-black leading-none">✓</span><span>1.5 hours per session</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-red-600 text-2xl font-black leading-none">✓</span><span>Personal mentorship from 2 coaches</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-red-600 text-2xl font-black leading-none">✓</span><span>Expert trainers from Nepal (10+ years)</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-red-600 text-2xl font-black leading-none">✓</span><span>Confidence, articulation & cultural pride</span></li>
							</ul>
						</div>

						<button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">Enroll Now</button>
					</div>

					{/* Right Card - Intensive Package */}
					<div className="group relative rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-slate-100 p-10 flex flex-col justify-between min-h-[520px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
						{/* Gradient Accent */}
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl"></div>

						{/* Price Badge */}
						<span className="absolute top-0 right-0 translate-x-[-35%] -translate-y-1/2 px-6 py-2.5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-lg shadow-lg">€100<span className="text-sm font-semibold">/week</span></span>

						{/* Icon */}
						<div className="mb-6">
							<span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 text-4xl shadow-md group-hover:scale-110 transition-transform"><FaTrophy /></span>
						</div>

						{/* Content */}
						<div>
							<h2 className="text-3xl font-black text-slate-900 mb-3">Speech Preparation Package</h2>
							<div className="text-slate-700 font-bold mb-2 text-lg">Intensive one-week coaching</div>
							<div className="text-slate-500 text-base mb-6 font-medium">1 week intensive (14 hours total)</div>

							<ul className="mb-8 space-y-3">
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-blue-600 text-2xl font-black leading-none">✓</span><span>Custom-written speech for your event</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-blue-600 text-2xl font-black leading-none">✓</span><span>2 personal coaches for guidance</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-blue-600 text-2xl font-black leading-none">✓</span><span>Delivery and voice training</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-blue-600 text-2xl font-black leading-none">✓</span><span>Stage presence & confidence building</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-blue-600 text-2xl font-black leading-none">✓</span><span>Emotion and audience connection tips</span></li>
								<li className="flex items-start gap-3 text-slate-800 text-base font-medium"><span className="text-blue-600 text-2xl font-black leading-none">✓</span><span>Perfect for events, ceremonies & gatherings</span></li>
							</ul>
						</div>

						<button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-black text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">Enroll Now</button>
					</div>
				</div>
			</div>
		</section>
	);
}
