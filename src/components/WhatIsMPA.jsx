import React from 'react';

const WhatIsMPA = () => {
  // Features data
  const features = [
    {
      title: 'Bespoke',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
      description: 'Custom application development that is built specifically for your organisation\'s needs and optimised for your requirements.'
    },
    {
      title: 'Powerful',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      description: 'Limitless capabilities with over 300+ connectors to integrate data from hundreds of systems including SharePoint, Dataverse, and Dynamics 365.'
    },
    {
      title: 'Secure',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
      description: 'Enterprise-ready security and governance driven by Microsoft Identity Access Management. No additional costly security set-up required.'
    },
    {
      title: 'Effective',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      description: 'Link your custom app to Power Automate to instantly trigger automations and workflows to speed up repetitive and time-consuming tasks.'
    }
  ];

  return (
    <div>
      {/* What Is Power Apps Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left content section */}
          <div className="lg:w-1/2">
            <p className="text-purple-700 font-medium mb-2">Easy To Use, Easy To Maintain</p>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Is Microsoft Power Apps?</h2>
            
            <p className="text-slate-700 mb-6">
              Power Apps is an innovative low-code cloud service that empowers businesses to build 
              custom applications and integrate data from multiple systems, without the need for 
              custom development.
            </p>
            
            <p className="text-slate-700 mb-8">
              The limitless implementation of Power Apps makes it an extremely powerful tool that can 
              excel any business. Whether you need a custom app to improve internal productivity by 
              automating manual and repetitive tasks, or connect to thousands of customers externally 
              with your data via a login portal, Power Apps can provide the solution.
            </p>
          </div>
          
          {/* Right image section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-auto  overflow-hidden">
              <img 
                src="/Power-apps.webp" 
                alt="Microsoft Power Apps interface on mobile and desktop" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x400?text=Power+Apps+Image";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-purple-200 p-4 rounded-full mb-4">
                  <div className="text-purple-800">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMPA;