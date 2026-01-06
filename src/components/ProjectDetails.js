import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  // Project data
  const projects = {
    contesthub: {
      id: 'contesthub',
      name: 'ContestHub',
      image: 'https://raw.githubusercontent.com/mehedi67719/assets/618f09e01884ecdf367c3466f3509cd0b7a3e299/Screenshot%202025-12-22%20134357.png',
      description: 'ContestHub is a modern, user-friendly full-stack contest management platform where users can create, explore, participate in, and manage creative contests such as design, article writing, business ideas, and more.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Firebase', 'Tailwind'],
      liveDemo: 'https://contesthub-46e63.web.app/',
      github: 'https://github.com/mehedi67719/ContestHub',
      features: [
        'Modern, responsive design (desktop, tablet, mobile)',
        'Authentication & Role Management (Email/password login, Google Sign-in, JWT-secured private routes)',
        'Browse contests by type with dynamic search',
        'Register and pay via Stripe',
        'Task submission after registration',
        'Live contest deadline countdown',
        'Winner declaration with photo and prize',
        'User dashboard (Participated contests, Winning contests, Profile)',
        'Creator dashboard (Add/Edit/Delete contests, See submissions, Declare winner)',
        'Admin dashboard (Manage users and contests)',
        'Dynamic leaderboard ranked by contest wins',
        'Win percentage charts in profile',
        'All forms implemented with react-hook-form',
        'SweetAlert2 notifications for all CRUD actions'
      ],
      challenges: [
        'Implementing role-based access control with JWT authentication',
        'Managing real-time contest updates and deadlines',
        'Creating a seamless payment integration with Stripe',
        'Designing a complex database schema for contest management'
      ],
      improvements: [
        'Add more contest categories',
        'Implement advanced analytics and reporting',
        'Add social sharing features',
        'Integrate more payment gateways'
      ]
    },
    localfood: {
      id: 'localfood',
      name: 'Local Food Lovers Network',
      image: 'https://raw.githubusercontent.com/mehedi67719/assets/refs/heads/main/Screenshot%202025-11-19%20155729.png',
      description: 'Discover. Share. Enjoy Local Food. A modern MERN-based community platform where users explore food, post reviews, save favorites, and enjoy an engaging foodie experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Tailwind', 'SweetAlert2', 'React Hook Form'],
      liveDemo: 'https://food-lovers-450c0.web.app/',
      github: 'https://github.com/mehedi67719/Local-Food-Lovers-Network.git',
      features: [
        'Modern, Responsive UI with clean foodie-themed design',
        'Firebase Authentication (Email/Password and Google login)',
        'Protected routes with persistence',
        'Review System (Create, Read, Update, Delete reviews)',
        'Favorite System to save favorite food items',
        'Search System with server-side filtering using MongoDB regex',
        'User dropdown with Add Review, My Reviews, My Favorites, Logout',
        'Hero slider on home page',
        'Toast notifications (SweetAlert2)',
        '404 Error Page with Back to Home option'
      ],
      challenges: [
        'Implementing Firebase authentication with multiple providers',
        'Creating a responsive UI that works well on all devices',
        'Managing user-generated content and reviews',
        'Implementing search functionality with server-side filtering'
      ],
      improvements: [
        'Add food delivery integration',
        'Implement AI-powered food recommendation engine',
        'Add multilingual support for international users',
        'Enhance the review system with photo uploads'
      ]
    },
    greennest: {
      id: 'greennest',
      name: 'Green Nest',
      image: 'https://raw.githubusercontent.com/mehedi67719/assets/refs/heads/main/Screenshot%202025-11-19%20153602.png',
      description: 'Explore, shop, and consult about indoor plants while learning plant care tips. Green Nest is a React-based frontend application focused on indoor plants. Users can explore plants, view detailed information, book consultations, and manage their profiles. The app includes authentication, smooth SPA navigation, and dynamic content rendering from JSON data.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'SwiperJS', 'Framer Motion', 'SweetAlert2'],
      liveDemo: 'https://amazing-tiramisu-49f2f5.netlify.app/home',
      github: 'https://github.com/mehedi67719/green-nest.git',
      features: [
        'Modern, Responsive UI with clean, user-friendly interface',
        'Home Page with Banner, Top Plants, Plant Care Tips, and Experts sections',
        'Authentication system with Login & Register using email & password',
        'Password validation rules and toggle functionality',
        'Plant Details Page with information display and consultation booking',
        'My Profile Page with user info display and real-time update feature',
        'Smooth SPA navigation with persistent Navbar & Footer',
        'Dynamic content rendering from JSON data',
        'Toast notifications for errors and success messages',
        '404 Error Page for invalid route handling'
      ],
      challenges: [
        'Implementing smooth SPA navigation without reload errors',
        'Creating dynamic content rendering from JSON data',
        'Implementing real-time profile updates without page reload',
        'Integrating multiple animation libraries for smooth transitions'
      ],
      improvements: [
        'Add more plant categories',
        'Implement advanced plant care AI recommendations',
        'Add social sharing features for plant enthusiasts',
        'Integrate with more payment gateways for consultations'
      ]
    },
    dailyshop: {
      id: 'dailyshop',
      name: 'DailyShopBD',
      image: 'https://raw.githubusercontent.com/mehedi67719/assets/57cb17094a21f504e2bfaf1c1bf1ac67fee61936/dailyshop.png',
      description: 'DailyShopBD is a full-featured MERN (MongoDB, Express, React, Node) e-commerce application. It includes user authentication, product management (CRUD), add-to-cart system, order management, and a complete shopping flow for buyers and sellers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'bcrypt', 'Tailwind CSS', 'React Router', 'Axios', 'Mongoose', 'dotenv', 'cors'],
      liveDemo: 'https://dailyshopbd-bc93e.web.app/',
      github: 'https://github.com/mehedi67719/DailyShopBD.git',
      features: [
        'User authentication with JWT and password hashing using bcrypt',
        'Protected routes and user profile access',
        'Product Management (Create, Read, Update, Delete products)',
        'Add to Cart System with quantity updates',
        'Complete shopping cart functionality',
        'Order Management system for placing and viewing orders',
        'Admin panel for product and order management',
        'Beautiful UI with Tailwind CSS',
        'Fully responsive design',
        'Product detail pages with comprehensive information'
      ],
      challenges: [
        'Implementing secure JWT authentication with proper session management',
        'Creating a robust cart management system with real-time updates',
        'Designing an efficient database schema for product and order relationships',
        'Managing concurrent user sessions and cart data synchronization'
      ],
      improvements: [
        'Add payment gateway integration',
        'Implement advanced search and filtering options',
        'Add product reviews and ratings system',
        'Integrate with more shipping providers for order tracking'
      ]
    }
  };

  useEffect(() => {
    // Set the project data based on the URL parameter
    if (projectId && projects[projectId]) {
      setProject(projects[projectId]);
    }
  }, [projectId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400">The project you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0b] to-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-black rounded-xl border border-gray-700 overflow-hidden shadow-2xl shadow-yellow-500/10">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4 md:mb-0">{project.name}</h1>
              <div className="flex gap-4">
                <a 
                  href={project.liveDemo} 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2.5 rounded font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/40 transform hover:-translate-y-0.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="border-2 border-yellow-500 text-yellow-500 px-4 py-2.5 rounded font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transform hover:-translate-y-0.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{project.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-500 tracking-wider">TECHNOLOGIES USED</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-yellow-500/20 text-yellow-500 text-sm px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-500 tracking-wider">KEY FEATURES</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-500 tracking-wider">CHALLENGES FACED</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-500 tracking-wider">POTENTIAL IMPROVEMENTS</h2>
              <ul className="space-y-2">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="border-2 border-yellow-500 text-yellow-500 px-6 py-3.5 rounded font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/40 transform hover:-translate-y-1"
              >
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;