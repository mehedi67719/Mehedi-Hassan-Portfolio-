import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-down">
          My <span className="text-yellow-500">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="border border-gray-700 rounded-xl p-6 bg-[#0a0a0a]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-yellow-500">Diploma in Computer Science</h3>
              <span className="text-gray-400 text-sm">2020 - 2024</span>
            </div>
            <p className="text-gray-400 mb-2">Jessore Polytechnic Institute</p>
            <p className="text-gray-400">
              Specialized in Computer Science and Technology with focus on web development, 
              database management, and software engineering principles. Completed various 
              projects demonstrating proficiency in modern programming languages and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;