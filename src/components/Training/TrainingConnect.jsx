import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TrainingConnect = () => {
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
    <section ref={sectionRef} className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-white mb-12 transform transition-all duration-700 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Connect With Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Image with Pattern */}
          <div 
            className={`md:w-1/2 transform transition-all duration-700 delay-100 ${
              animationStarted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="w-full max-w-md mx-auto">
              <img 
                src="/ConnectImage1.svg" 
                alt="Person using mobile phone" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Text and Buttons */}
          <div 
            className={`md:w-1/2 transform transition-all duration-700 delay-200 ${
              animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <p className="text-lg text-gray-300 mb-8">
              Join our vibrant community and stay updated with the latest news, updates, and exclusive offers. Connect with us on Telegram to be part of our growing network of enthusiasts and professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#linkedin" 
                className="flex items-center justify-center gap-2 bg-[#049DCB] hover:bg-[#038ab4] text-white px-6 py-3 rounded-md transition duration-200"
              >
                <Linkedin size={20} />
                <span>Join us on LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@techelevate.tech" 
                className="flex items-center justify-center gap-2 bg-[#2EC743] hover:bg-[#25a936] text-white px-6 py-3 rounded-md transition duration-200"
              >
                <Mail size={20} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingConnect;