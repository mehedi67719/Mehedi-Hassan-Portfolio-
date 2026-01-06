import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden" data-aos="fade-up">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-15 md:opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-15 md:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-15 md:opacity-20 animate-blob animation-delay-4000"></div>
          </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        <div className="space-y-10">
          <div>
            <h2 className="text-lg md:text-xl text-yellow-400 mb-2 font-bold tracking-widest uppercase" data-aos="fade-right" data-aos-delay="200">HELLO, I'M</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-tight" data-aos="fade-right" data-aos-delay="300">
                Mehedi <span className="text-yellow-300">Hassan</span>
              </h1>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/40 whitespace-nowrap animate-pulse self-start md:self-auto">
                Available for work
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg md:max-w-xl leading-relaxed font-light" data-aos="fade-right" data-aos-delay="400">
              A Frontend & MERN Stack Developer from Bangladesh, passionate about building clean, responsive, and user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4" data-aos="fade-up" data-aos-delay="500">
            <a 
              href="Mehedi Hassan resume.pdf" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-yellow-500/40 hover:shadow-yellow-500/50 transform hover:-translate-y-1 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              download="Mehedi Hassan Resume.pdf"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Resume
            </a>
            
            <a 
              href="#contact" 
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/40 transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6" data-aos="fade-up" data-aos-delay="600">
            <a href="https://github.com/mehedi67719" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mehedihassanjashore/" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/mehedi.hasana.835189" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center order-first md:order-last">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <div className="absolute -inset-4 bg-gradient-to-l from-yellow-600 to-yellow-500 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-700 delay-150"></div>
            <img 
              src="/Mehedi Hassan full.jpg" 
              alt="Mehedi Hassan Profile"
              className="relative w-64 h-64 md:w-80 md:h-96 object-cover rounded-full md:rounded-2xl border-4 border-yellow-500 z-10 transition-transform duration-700 group-hover:scale-105 shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;