import React from 'react';

const WhatIsMPowerPages = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div>
          <p className="text-purple-800 font-medium mb-3">
            Transform Digital Experiences, One Page At A Time
          </p>
          
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            What Is Microsoft Power Pages?
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Microsoft Power Pages stands as a robust, low-code SaaS (Software as a Service)
              platform, catering to the development, hosting, and management of contemporary
              external-facing business websites. As a key component of the Microsoft Power Platform
              suite, it empowers developers to efficiently design, configure, and launch websites.
              These sites are tailored to provide a consistent and seamless user experience across a
              diverse range of web browsers and devices.
            </p>
            
            <p>
              This platform stands out for its ability to integrate seamlessly with other Power Platform
              components, such as Power Apps, Power Automate, and Power BI, providing a
              comprehensive suite for business solutions. Built with security at its core, the platform
              provides robust security features, including data encryption and compliance with
              industry standards.
            </p>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/Power-Pages.webp" 
              alt="Person working on Microsoft Power Pages" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMPowerPages;