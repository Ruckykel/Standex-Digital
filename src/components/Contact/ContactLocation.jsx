import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Instagram, Twitter, Phone, Clock, MapPin } from 'lucide-react';

const ContactLocation = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setAnimationStarted(true);
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Location Card */}
        <div 
          className={`bg-gray-800 rounded-xl p-8 mb-16 shadow-lg border border-gray-700 transform transition-all duration-700 delay-200 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-[#049DCB]/10 p-6 rounded-full">
              <MapPin size={64} className="text-[#049DCB]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">London, UK</h3>
              <p className="text-gray-300">Our central hub for innovation and technology training</p>
            </div>
          </div>
        </div>
        
        {/* Contact and Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media */}
          <div 
            className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#2EC743] transition-all duration-300 transform transition-all duration-700 delay-300 ${
              animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#049DCB]/10 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-[#049DCB]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-8">
              <a href="mailto:admin@standexdigital.tech" className="flex items-center bg-gray-700 hover:bg-[#049DCB]/20 p-4 rounded-lg transition-colors group">
                <div className="bg-[#049DCB]/20 p-2 rounded-full mr-3 group-hover:bg-[#049DCB]/30 transition-colors">
                  <Mail className="h-5 w-5 text-[#049DCB]" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">admin@standexdigital.tech</span>
              </a>
              
              <a href="mailto:standexdigital@gmail.com" className="flex items-center bg-gray-700 hover:bg-[#049DCB]/20 p-4 rounded-lg transition-colors group">
                <div className="bg-[#049DCB]/20 p-2 rounded-full mr-3 group-hover:bg-[#049DCB]/30 transition-colors">
                  <Mail className="h-5 w-5 text-[#049DCB]" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">standexdigital@gmail.com</span>
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <a href="https://www.linkedin.com/company/standex-digital" className="flex items-center bg-gray-700 hover:bg-[#049DCB]/20 p-4 rounded-lg transition-colors group">
                  <div className="bg-[#049DCB]/20 p-2 rounded-full mr-3 group-hover:bg-[#049DCB]/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-[#049DCB]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
                
                <a href="https://www.instagram.com/standexdigital" className="flex items-center bg-gray-700 hover:bg-[#049DCB]/20 p-4 rounded-lg transition-colors group">
                  <div className="bg-[#049DCB]/20 p-2 rounded-full mr-3 group-hover:bg-[#049DCB]/30 transition-colors">
                    <Instagram className="h-5 w-5 text-[#049DCB]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                </a>
                
                <a href="https://x.com/standexdigital" className="flex items-center bg-gray-700 hover:bg-[#049DCB]/20 p-4 rounded-lg transition-colors group">
                  <div className="bg-[#049DCB]/20 p-2 rounded-full mr-3 group-hover:bg-[#049DCB]/30 transition-colors">
                    <Twitter className="h-5 w-5 text-[#049DCB]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Twitter</span>
                </a>
              </div>
            </div>
            
            <div className="mt-8 flex items-center p-4 bg-gray-700 rounded-lg">
              <div className="bg-[#2EC743]/20 p-2 rounded-full mr-4">
                <Phone className="h-5 w-5 text-[#2EC743]" />
              </div>
              <a href="tel:+447918262629" className="text-white hover:text-[#2EC743] transition-colors text-lg">
                +44 7918 262629
              </a>
            </div>
          </div>
          
          {/* Operating Hours */}
          <div 
            className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#2EC743] transition-all duration-300 transform transition-all duration-700 delay-400 ${
              animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#049DCB]/10 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-[#049DCB]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Operating Hours</h3>
            </div>
            
            <div className="mt-8 flex items-center justify-center">
              <div className="bg-[#2EC743]/10 p-8 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#2EC743] mb-2">24/7</p>
                <p className="text-white text-lg">Always available to serve you</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-700 p-6 rounded-lg text-center">
              <p className="text-gray-300">
                Our support team is available round the clock to assist you with any inquiries or technical issues you may encounter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;