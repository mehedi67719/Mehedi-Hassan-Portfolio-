import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0b0b0b] to-black" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-down">
          My <span className="text-yellow-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10" data-aos="fade-up">
          {/* Project 1: ContestHub */}
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 group shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
            <div className="relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/mehedi67719/assets/618f09e01884ecdf367c3466f3509cd0b7a3e299/Screenshot%202025-12-22%20134357.png" 
                alt="ContestHub" 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link 
                  to="/project-details/contesthub" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl shadow-yellow-500/40 transform hover:scale-105 backdrop-blur-sm"
                >
                  View Project Details
                </Link>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">ContestHub</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                ContestHub is a modern, user-friendly full-stack contest management platform where users can create, explore, participate in, and manage creative contests such as design, article writing, business ideas, and more.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">React</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Node.js</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Express</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">MongoDB</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">JWT</span>
                
              </div>
              <div className="flex gap-6">
                <Link 
                  to="/project-details/contesthub" 
                  className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold group/details"
                >
                  <svg className="w-5 h-5 group-hover/details:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Details
                </Link>
                <a href="https://contesthub-46e63.web.app/" className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.8 13.8a7 7 0 01-3.6 3.6m0 0a7 7 0 01-3.6-3.6m3.6 3.6L21 21M5 5l5.2 5.2M5 5a7 7 0 119.2 9.2M5 5l5.2 5.2M14.2 14.2a7 7 0 01-3.6-3.6m0 0a7 7 0 013.6 3.6z"></path>
                  </svg>
                  Demo
                </a>
                <a href="https://github.com/mehedi67719/ContestHub" className="text-gray-400 hover:text-yellow-500 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Local-Food-Lovers-Network */}
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 group shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
            <div className="relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/mehedi67719/assets/refs/heads/main/Screenshot%202025-11-19%20155729.png" 
                alt="Local Food Lovers Network" 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link 
                  to="/project-details/localfood" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl shadow-yellow-500/40 transform hover:scale-105 backdrop-blur-sm"
                >
                  View Project Details
                </Link>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">Local Food Lovers Network</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Discover. Share. Enjoy Local Food. A modern MERN-based community platform where users explore food, post reviews, save favorites, and enjoy an engaging foodie experience.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">React</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Node.js</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">MongoDB</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Express</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Firebase</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Tailwind</span>
              </div>
              <div className="flex gap-6">
                <Link 
                  to="/project-details/localfood" 
                  className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold group/details"
                >
                  <svg className="w-5 h-5 group-hover/details:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Details
                </Link>
                <a href="https://food-lovers-450c0.web.app/" className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.8 13.8a7 7 0 01-3.6 3.6m0 0a7 7 0 01-3.6-3.6m3.6 3.6L21 21M5 5l5.2 5.2M5 5a7 7 0 119.2 9.2M5 5l5.2 5.2M14.2 14.2a7 7 0 01-3.6-3.6m0 0a7 7 0 013.6 3.6z"></path>
                  </svg>
                  Demo
                </a>
                <a href="https://github.com/mehedi67719/Local-Food-Lovers-Network.git" className="text-gray-400 hover:text-yellow-500 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: green-nest */}
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 group shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
            <div className="relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/mehedi67719/assets/refs/heads/main/Screenshot%202025-11-19%20153602.png" 
                alt="Green Nest" 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link 
                  to="/project-details/greennest" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl shadow-yellow-500/40 transform hover:scale-105 backdrop-blur-sm"
                >
                  View Project Details
                </Link>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">Green Nest</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Explore, shop, and consult about indoor plants while learning plant care tips. Green Nest is a React-based frontend application focused on indoor plants. Users can explore plants, view detailed information, book consultations, and manage their profiles.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">React</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">JavaScript</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">HTML5</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">CSS3</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Tailwind CSS</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">React Router</span>
              </div>
              <div className="flex gap-6">
                <Link 
                  to="/project-details/greennest" 
                  className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold group/details"
                >
                  <svg className="w-5 h-5 group-hover/details:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Details
                </Link>
                <a href="https://amazing-tiramisu-49f2f5.netlify.app/home" className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.8 13.8a7 7 0 01-3.6 3.6m0 0a7 7 0 01-3.6-3.6m3.6 3.6L21 21M5 5l5.2 5.2M5 5a7 7 0 119.2 9.2M5 5l5.2 5.2M14.2 14.2a7 7 0 01-3.6-3.6m0 0a7 7 0 013.6 3.6z"></path>
                  </svg>
                  Demo
                </a>
                <a href="https://github.com/mehedi67719/green-nest.git" className="text-gray-400 hover:text-yellow-500 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: DailyShopBD */}
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 group shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
            <div className="relative overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/mehedi67719/assets/57cb17094a21f504e2bfaf1c1bf1ac67fee61936/dailyshop.png" 
                alt="DailyShopBD" 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link 
                  to="/project-details/dailyshop" 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl shadow-yellow-500/40 transform hover:scale-105 backdrop-blur-sm"
                >
                  View Project Details
                </Link>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">DailyShopBD</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                DailyShopBD is a full-featured MERN (MongoDB, Express, React, Node) e-commerce application. It includes user authentication, product management (CRUD), add-to-cart system, order management, and a complete shopping flow for buyers and sellers.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">React</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Node.js</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">MongoDB</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">Express</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">JWT</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-500 text-sm px-4 py-2 rounded-full border border-yellow-500/40 font-medium">bcrypt</span>
              </div>
              <div className="flex gap-6">
                <Link 
                  to="/project-details/dailyshop" 
                  className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold group/details"
                >
                  <svg className="w-5 h-5 group-hover/details:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Details
                </Link>
                <a href="https://dailyshopbd-bc93e.web.app/" className="text-yellow-500 hover:text-yellow-400 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.8 13.8a7 7 0 01-3.6 3.6m0 0a7 7 0 01-3.6-3.6m3.6 3.6L21 21M5 5l5.2 5.2M5 5a7 7 0 119.2 9.2M5 5l5.2 5.2M14.2 14.2a7 7 0 01-3.6-3.6m0 0a7 7 0 013.6 3.6z"></path>
                  </svg>
                  Demo
                </a>
                <a href="https://github.com/mehedi67719/DailyShopBD.git" className="text-gray-400 hover:text-yellow-500 text-base flex items-center gap-2 font-semibold" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;