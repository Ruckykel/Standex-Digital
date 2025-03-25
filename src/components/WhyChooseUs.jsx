import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left Section - Dark Blue Background with Text */}
      <div className="w-full md:w-1/2 bg-[#002642] text-white py-16 px-8 md:px-16 flex flex-col justify-center">
        <h3 className="text-lg font-medium text-cyan-300 mb-4">
          Why Choose Us
        </h3>
        
        <h2 className="text-4xl font-bold mb-6">
          Experts in Digital Transformation
        </h2>
        
        <p className="text-white mb-8 leading-relaxed">
          Our proven track record of transforming businesses speaks volumes. As a certified Microsoft 
          Solutions Partner and licence provider, we bring extensive experience and deep expertise to every 
          project. We focus on understanding your unique needs and crafting tailored digital solutions that 
          drive efficiency and growth. Work with us for reliable, effective strategies that deliver real results.
        </p>
        
        {/* Microsoft Partner Logo Card */}
        <div className="bg-white rounded-lg p-6 mb-8 w-full max-w-sm">
          <img 
            src="/microsoft-solutions-partner-logo.png" 
            alt="Microsoft Solutions Partner" 
            className="h-12 mb-6"
          />
          
          {/* Stats */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#002642] flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">250+ Projects Completed</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#002642] flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">100% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 h-full min-h-[500px]">
        <img 
          src="/presentation-image.jpg" 
          alt="Digital presentation with team" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;