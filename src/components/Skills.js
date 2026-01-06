import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-down">
          My <span className="text-yellow-500">Skills</span>
        </h2>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-500 flex items-center gap-2" data-aos="fade-right">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 000-2.828l-4.242-4.242a2 2 0 00-2.828 0L7.343 5.343a2 2 0 000 2.828l1.657 1.657m13-5L9 15.343M13 7.343l4 4"></path>
            </svg>
            Frontend Development
          </h3>
          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">HTML5</span>
                  <span className="text-yellow-500">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">CSS3</span>
                  <span className="text-yellow-500">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">JavaScript</span>
                  <span className="text-yellow-500">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">React</span>
                  <span className="text-yellow-500">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Tailwind CSS</span>
                  <span className="text-yellow-500">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-500 flex items-center gap-2" data-aos="fade-right">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>
            Backend Development
          </h3>
          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Node.js</span>
                  <span className="text-yellow-500">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Express.js</span>
                  <span className="text-yellow-500">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">MongoDB</span>
                  <span className="text-yellow-500">65%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">RESTful APIs</span>
                  <span className="text-yellow-500">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Others */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-500 flex items-center gap-2" data-aos="fade-right">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Tools & Others
          </h3>
          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Git & GitHub</span>
                  <span className="text-yellow-500">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">VS Code</span>
                  <span className="text-yellow-500">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Figma</span>
                  <span className="text-yellow-500">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Responsive Design</span>
                  <span className="text-yellow-500">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;