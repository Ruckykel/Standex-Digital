import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
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
    <div ref={sectionRef} className="flex flex-col md:flex-row w-full">
      {/* Left Section - Dark Blue Background with Text */}
      <div className="w-full md:w-1/2 bg-[#002642] text-white py-16 px-8 md:px-16 flex flex-col justify-center">
        <h3 
          className={`text-lg font-medium text-[#049DCB] mb-4 transform transition-all duration-700 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Why Choose Us
        </h3>
        
        <h2 
          className={`text-4xl font-bold mb-6 transform transition-all duration-700 delay-100 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Experts in Digital Transformation
        </h2>
        
        <p 
          className={`text-white mb-10 leading-relaxed transform transition-all duration-700 delay-200 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Our proven track record of transforming businesses speaks volumes. As a certified Microsoft 
          Solutions Partner and licence provider, we bring extensive experience and deep expertise to every 
          project. We focus on understanding your unique needs and crafting tailored digital solutions that 
          drive efficiency and growth. Work with us for reliable, effective strategies that deliver real results.
        </p>
        
        {/* Microsoft Partner Logo and Stats side by side */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-700 delay-300 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Microsoft Partner Logo Card */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-center items-center border border-gray-700 w-full sm:w-1/2">
            <img 
              src="/Microsoft-Solution-Partner-300x183.webp" 
              alt="Microsoft Solutions Partner" 
              className="h-16 mb-2"
            />
            <p className="text-white text-sm text-center mt-2">Certified Microsoft Solutions Partner</p>
          </div>
          
          {/* Stats Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 w-full sm:w-1/2">
            <h4 className="text-white font-semibold mb-4 text-lg">Achievements</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#2EC743] flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">250+ Projects Completed</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#2EC743] flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Image - Fixed for mobile responsiveness */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src="/Woman-consulting.webp" 
          alt="Digital presentation with team" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            animationStarted ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;