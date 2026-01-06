import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0b0b]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left" data-aos="fade-down">
          About <span className="text-yellow-500">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mt-12" data-aos="fade-right">
          <div>
            <p className="text-gray-400 leading-7 mb-6">
              Hi 👋, I'm Mehedi Hassan — a Frontend & MERN Stack Developer from Bangladesh, passionate about building clean, responsive, and user-friendly web applications. My journey in programming began with curiosity about how websites work, which led me to dive deep into web technologies.
            </p>
            
            <p className="text-gray-400 leading-7 mb-6">
              My programming journey started with HTML & CSS, where I learned the fundamentals of web structure and styling. I then progressed to JavaScript, which opened up the world of interactive web development. Today, I specialize in React, Node.js, Express.js & MongoDB, constantly learning and adapting to new technologies.
            </p>
            
            <p className="text-gray-400 leading-7 mb-6">
              I particularly enjoy creating clean UI interfaces, solving complex problems with elegant solutions, and turning ideas into reality. I love the process of debugging and optimizing code to achieve the best performance. Working with modern frameworks like React and utilizing tools like TailwindCSS brings me joy as I can create responsive and beautiful applications efficiently. I enjoy building full-stack applications with Node.js, Express.js & MongoDB and creating real-world projects including e-commerce, dashboards, plant shop apps & community platforms.
            </p>
            
            <p className="text-gray-400 leading-7">
              Outside of programming, I enjoy playing football, listening to music, reading tech blogs, and exploring new technologies. I believe in maintaining a healthy work-life balance which helps me stay creative and productive. I also enjoy competitive programming and real-world challenges.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6 bg-[#0a0a0a]" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Professional Summary
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span className="text-gray-400">Frontend Developer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span className="text-gray-400">1+ years of experience in web development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span className="text-gray-400">Expert in HTML, CSS, JavaScript, React, and TailwindCSS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span className="text-gray-400">React & modern UI focused</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span className="text-gray-400">Passionate about creating responsive and accessible web applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;