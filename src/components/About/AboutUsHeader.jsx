import React from 'react';

const AboutUsHeader = () => {
  return (
    <div className="w-full bg-blue-900 text-white py-16 mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm mb-2">The Power Platform Consulting Specialists</p>
        
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        
        <p className="text-lg mb-8">
          Standex offers a range of services with a focus on Microsoft Power Platform
          consulting. We're a dedicated team of power platform specialists who love seeing
          businesses transform and make the most out of their tools and software.
        </p>
        
        <a 
          href="/Contact"
          className="bg-cyan-100 text-blue-900 px-6 py-2 rounded-md hover:bg-cyan-200 transition-colors duration-300 inline-flex items-center"
        >
          Let's Chat
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutUsHeader;