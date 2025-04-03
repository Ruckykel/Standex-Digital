import React, { useState, useEffect, useRef } from 'react';

const ServicesDiscovery = () => {
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
    <div className="w-full py-20 px-6 bg-gray-900">
      <div 
        ref={sectionRef}
        className={`max-w-6xl mx-auto bg-gray-800 rounded-xl p-10 text-center relative overflow-hidden border border-gray-700 transform transition-all duration-1000 ${
          animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Background grid pattern - purely decorative */}
        <div 
          className={`absolute inset-0 opacity-0 transition-all duration-1500 ${
            animationStarted ? 'opacity-10' : 'opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Subtle glow effect */}
        <div 
          className={`absolute inset-0 bg-[#049DCB] opacity-0 blur-2xl rounded-lg transition-all duration-1500 ${
            animationStarted ? 'opacity-5' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        ></div>

        <div className="relative z-10">
          <h3 
            className={`text-[#049DCB] font-medium mb-4 transform transition-all duration-1000 ${
              animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-(-10) opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Get Started Today
          </h3>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-1000 ${
              animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-(-10) opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Ready to elevate your business with custom technology solutions?
          </h2>
          
          <p 
            className={`text-lg text-gray-300 max-w-3xl mx-auto mb-8 transform transition-all duration-1000 ${
              animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-(-10) opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Schedule a free consultation with our technical specialists to discuss your unique requirements.
          </p>
          
          <a 
            href="/Contact"
            className={`inline-flex items-center px-6 py-3 bg-[#2EC743] text-gray-900 font-medium rounded hover:bg-[#049DCB] hover:text-white transition-all duration-300 transform ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
            }`}
            style={{ 
              transitionDelay: '500ms',
              animation: animationStarted ? 'pulse 2s infinite' : 'none'
            }}
          >
            Book A Discovery Session
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(46, 199, 67, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(46, 199, 67, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(46, 199, 67, 0);
          }
        }
      `}</style>
      
      {/* Background Elements */}
      <div 
        className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#049DCB] to-transparent rounded-full filter blur-3xl opacity-0 transform transition-all duration-2000 ${
          animationStarted ? 'opacity-5' : 'opacity-0'
        }`}
        style={{ zIndex: 0, transitionDelay: '300ms' }}
      ></div>
      
      <div 
        className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2EC743] to-transparent rounded-full filter blur-3xl opacity-0 transform transition-all duration-2000 ${
          animationStarted ? 'opacity-5' : 'opacity-0'
        }`}
        style={{ zIndex: 0, transitionDelay: '400ms' }}
      ></div>
    </div>
  );
};

export default ServicesDiscovery;