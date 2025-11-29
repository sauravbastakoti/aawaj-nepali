import React from "react";

const AboutUs = () => (
  <section className="bg-[#f8f5ff] py-12 px-4 sm:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0841] mb-2">Awaz Nepali Belgium</h2>
      <p className="text-lg text-[#6c4cf7] font-medium mb-6">Where Confidence Speaks with Nepali Heartbeats</p>
      <div className="flex flex-col items-center gap-4 mb-8">
        <span className="text-2xl">🌸 About Us</span>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Awaz Nepali Belgium is an educational and cultural platform, created to uplift and empower the Nepali community living in Belgium — especially our children and youth.<br /><br />
          Through our unusual combination of public speaking, personal development, and cultural education, we help students discover their voice, confidence, and pride in being Nepali.<br /><br />
          This is more than a class — it’s a movement to strengthen identity, nurture respect, and celebrate the beautiful rhythm of the Nepali language and culture.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="text-xl font-semibold text-[#6c4cf7] mb-2 flex items-center gap-2">🎯 Our Mission</h3>
        <p className="text-base text-gray-800">
          To guide every Nepali child and youth in Belgium to speak with clarity, courage, and cultural pride, while growing into confident, respectful, and compassionate individuals.
        </p>
      </div>
      <div className="bg-[#e6e6ff] rounded-xl shadow p-6">
        <h4 className="text-lg font-semibold text-[#1a0841] mb-2 flex items-center gap-2">🧑‍🏫 Public Speaking & Personality Development Program</h4>
        <p className="text-base text-gray-700">
          Our program blends public speaking, personal growth, and cultural education to help students find their voice, build confidence, and celebrate their Nepali heritage.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
