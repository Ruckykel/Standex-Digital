import React from 'react';

const WhatIsPAutomate = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-purple-800 font-medium mb-3">The Future Of Business Efficiency</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">What is Power Automate?</h2>
            
            <p className="text-gray-700 mb-8">
              Microsoft Power Automate transforms how your business operates by automating 
              tedious, repetitive tasks across hundreds of apps and services. This versatile and 
              powerful tool enables businesses to reduce the potential for human error and allows your 
              employees to focus on higher-value work.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="text-blue-600 mr-2 mt-1">•</div>
                <p className="text-gray-700">
                  <span className="font-medium text-blue-800">Seamless connections:</span> Integrate all of your essential software and data systems 
                  with ease.
                </p>
              </li>
              <li className="flex items-start">
                <div className="text-blue-600 mr-2 mt-1">•</div>
                <p className="text-gray-700">
                  <span className="font-medium text-blue-800">Work from anywhere:</span> Manage workflows on the go with the Power Automate 
                  mobile app.
                </p>
              </li>
            </ul>
            
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/Power-Automate.webp" 
              alt="Person looking at Power Automate workflow diagram" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsPAutomate;