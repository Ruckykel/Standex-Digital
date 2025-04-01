import React, { useState, useEffect, useRef } from 'react';

const WhatIsPAutomate = () => {
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
    <div className="w-full bg-gray-900 py-16 px-4">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div 
            className={`transform transition-all duration-1000 ${
              animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-(-20) opacity-0'
            }`}
          >
            <h3 className="text-[#049DCB] font-medium mb-3">The Future Of Business Efficiency</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Power Automate?</h2>
            
            <p className="text-gray-300 mb-8">
              Microsoft Power Automate transforms how your business operates by automating 
              tedious, repetitive tasks across hundreds of apps and services. This versatile and 
              powerful tool enables businesses to reduce the potential for human error and allows your 
              employees to focus on higher-value work.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-(-10) opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="text-[#2EC743] mr-2 mt-1 text-xl">•</div>
                <p className="text-gray-300">
                  <span className="font-medium text-[#049DCB]">Seamless connections:</span> Integrate all of your essential software and data systems 
                  with ease.
                </p>
              </li>
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-(-10) opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="text-[#2EC743] mr-2 mt-1 text-xl">•</div>
                <p className="text-gray-300">
                  <span className="font-medium text-[#049DCB]">Work from anywhere:</span> Manage workflows on the go with the Power Automate 
                  mobile app.
                </p>
              </li>
            </ul>
            
          </div>
          
          {/* Right Column - Image */}
          <div 
            className={`rounded-lg overflow-hidden border border-gray-700 shadow-lg transform transition-all duration-1000 ${
              animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img 
              src="/Power-Automate.webp" 
              alt="Person looking at Power Automate workflow diagram" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </div>

      {/* Additional animated background element */}
      <div 
        className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-[#049DCB10] to-transparent transform transition-all duration-1500 ${
          animationStarted ? 'opacity-20 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
        style={{ transitionDelay: '300ms', zIndex: 0 }}
      ></div>
      
      {/* Additional animated background element */}
      <div 
        className={`absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-[#2EC74310] to-transparent transform transition-all duration-1500 ${
          animationStarted ? 'opacity-20 translate-x-0' : 'opacity-0 translate-x-(-20)'
        }`}
        style={{ transitionDelay: '300ms', zIndex: 0 }}
      ></div>
    </div>
  );
};

export default WhatIsPAutomate;