import React, { useState, useEffect, useRef } from 'react';

const AIArchitectureAndDevelopment = () => {
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
    <section id="aiArchitectureAndDevelopment" className="py-20 bg-gray-900 w-full">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        <div 
          className={`mb-12 transform transition-all duration-1000 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-(-20) opacity-0'
          }`}
        >
          <h3 className="text-[#049DCB] font-medium mb-4">
            Advanced Technology Solutions
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Architecture & Development
          </h2>
          
          <p className="text-xl text-gray-300">
            Harness the power of artificial intelligence to automate processes, unlock data insights, and create intelligent applications for your business.
          </p>
        </div>

        {/* AI Architecture Banner */}
        <div 
          className={`mb-12 rounded-lg overflow-hidden border border-gray-700 transform transition-all duration-1000 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative">
            {/* Subtle glow effect behind the image */}
            <div 
              className={`absolute inset-0 bg-[#049DCB] opacity-0 blur-2xl rounded-lg transition-all duration-1500 ${
                animationStarted ? 'opacity-5' : 'opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            ></div>
            
            <img 
              src="/DataIntelligenceLarge.png" 
              alt="AI architecture and development visualization" 
              className="w-full h-auto object-cover relative z-10"
            />
          </div>
        </div>

        {/* Solution Overview Section */}
        <div 
          className={`bg-gray-800 p-8 rounded-lg mb-12 border border-gray-700 transform transition-all duration-1000 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="flex items-center mb-6">
            <div 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-4"
              style={{ 
                animation: animationStarted ? 'float 3s ease-in-out infinite' : 'none'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#049DCB]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Solution Overview</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Standex Digital's AI Architecture & Development services provide enterprise-grade artificial intelligence solutions that transform your business operations and decision-making capabilities. We design and implement custom AI systems that address your specific business challenges, from predictive analytics and natural language processing to computer vision and recommendation engines. Our expert team navigates the entire AI development lifecycle, from data preparation and algorithm selection to model training, deployment, and ongoing optimization. By leveraging cutting-edge technologies and frameworks, we help you automate complex processes, extract actionable insights from your data, and create intelligent applications that drive innovation and competitive advantage.
          </p>
        </div>

        {/* Two Column Features and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Key Features */}
          <div 
            className={`transform transition-all duration-1000 ${
              animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-(-20) opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
            
            <ul className="space-y-4">
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Machine Learning Model Development</p>
                </div>
              </li>
              
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Natural Language Processing (NLP)</p>
                </div>
              </li>
              
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Computer Vision Solutions</p>
                </div>
              </li>
              
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Predictive Analytics & Forecasting</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Key Benefits */}
          <div 
            className={`transform transition-all duration-1000 ${
              animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
            
            <ul className="space-y-4">
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Enhanced Decision-Making</p>
                </div>
              </li>
              
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Automation of Complex Processes</p>
                </div>
              </li>
              
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Actionable Data Insights</p>
                </div>
              </li>
              
              <li 
                className={`flex items-start transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="text-[#2EC743] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Competitive Business Advantage</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-b border-gray-700 my-16"></div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
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
    </section>
  );
};

export default AIArchitectureAndDevelopment;