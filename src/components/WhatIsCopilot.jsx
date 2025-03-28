import React from 'react';

const WhatIsCopilot = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="pr-0 lg:pr-8">
            <h3 className="text-purple-900 font-medium mb-4">
              Revolutionise Your Customer And Employee Experiences
            </h3>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              What Is Microsoft Copilot Studio?
            </h2>
            
            <p className="text-blue-900 mb-4">
              Microsoft Copilot Studio (formerly Power Virtual Agents) is a cutting-edge platform that 
              enables businesses to create and deploy intelligent chatbots with ease. These AI-powered 
              virtual agents can engage with customers and employees across various platforms, enhancing 
              support, streamlining communication, and freeing up valuable human resources for strategic tasks.
            </p>
          </div>
          
          {/* Right column - Image */}
          <div className="mt-6 lg:mt-0">
            <div className="relative">
              <img 
                src="/Copilot.webp" 
                alt="Person using laptop with AI chatbot interface" 
                className="rounded-lg shadow-lg w-full"
              />
              {/* Note: Replace placeholder with actual image in production */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCopilot;