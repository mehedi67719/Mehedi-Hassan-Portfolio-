import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Handle form submission with EmailJS
    const { user_name, user_email, subject, message } = formData;
    
    // EmailJS configuration - UPDATE THESE VALUES
    // You need to create a free EmailJS account and set up your service
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
    
    // Template parameters
    const templateParams = {
      user_name,
      user_email,
      subject,
      message
    };
    
    try {
      // Only attempt to send via EmailJS if the configuration is set up
      if (publicKey === 'YOUR_PUBLIC_KEY' || serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID') {
        // If using default placeholder values, open email client instead
        const mailtoLink = `mailto:meh67719@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${user_name}
Email: ${user_email}

Message:
${message}`)}`;
        window.location.href = mailtoLink;
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        return;
      }
      
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log(result.text);
      alert('Message sent successfully! I will get back to you soon.');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      
      // Fallback: open email client with pre-filled information
      const mailtoLink = `mailto:meh67719@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${user_name}
Email: ${user_email}

Message:
${message}`)}`;
      alert('EmailJS is not configured. Opening your email client instead. If that doesn\'t work, please contact me directly at meh67719@gmail.com');
      window.location.href = mailtoLink;
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0b0b]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-down">
          Get In <span className="text-yellow-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-500">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">meh67719@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">+880 1747737704</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">Jessore, Bangladesh</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span className="text-gray-400">+880 1747737704 (WhatsApp)</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-yellow-500 mb-4">Follow Me</h4>
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/mehedi67719" className="text-gray-400 hover:text-yellow-500 transition" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/mehedihassanjashore/" className="text-gray-400 hover:text-yellow-500 transition" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
            
                <a href="https://www.facebook.com/mehedi.hasana.835189" className="text-gray-400 hover:text-yellow-500 transition" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="user_name" 
                  name="user_name" 
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition" 
                  placeholder="Your Name" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="user_email" 
                  name="user_email" 
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition" 
                  placeholder="Your Email" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition" 
                  placeholder="Subject" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition" 
                  placeholder="Your Message" 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3.5 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/40"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;