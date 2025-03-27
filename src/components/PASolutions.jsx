import React from 'react';

const PASolutions = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left content section */}
        <div className="md:w-1/2 p-10 md:p-16">
          <p className="text-cyan-300 mb-3">Custom App Solutions</p>
          <h2 className="text-4xl font-bold mb-8">How Can Power Apps Help?</h2>
          
          <p className="mb-6">
            Microsoft Power Apps offers an innovative, cost-effective alternative to organisations that 
            wish to digitise their business processes. There is no need to compromise on 
            customisability with off-the-shelf solutions which fail to meet bespoke requirements or 
            pay for custom development which is expensive and difficult to maintain.
          </p>
          
          <p>
            Power App applications give organisations the ability to quickly launch and roll out an 
            application, and then maximise its potential as needed. Multiple functionalities can be 
            added, application capabilities can be extended, and they can be further customised to 
            suit your requirements as you progress in your journey. This means that your applications 
            never become outdated or obsolete as they evolve with your organisation and connect to 
            new data sources.
          </p>
        </div>
        
        {/* Right image section */}
        <div className="md:w-1/2 relative">
          <div className="h-full bg-gradient-to-r from-blue-900 to-blue-950">
            <img 
              src="/api/placeholder/800/500" 
              alt="Person working on laptop with digital interface overlays" 
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
            
            {/* Digital interface overlay elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Create abstract digital UI elements */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {/* Charts */}
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-cyan-200 border-opacity-20">
                  <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                </div>
                
                {/* People */}
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-cyan-200 border-opacity-20">
                  <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Document */}
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-cyan-200 border-opacity-20">
                  <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Target */}
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-cyan-200 border-opacity-20">
                  <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                
                {/* Graph */}
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-cyan-200 border-opacity-20">
                  <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Money */}
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-cyan-200 border-opacity-20">
                  <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Digital connection lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full border-t-2 border-b-2 border-pink-500 border-opacity-20 transform rotate-12"></div>
                <div className="w-full h-full border-t-2 border-b-2 border-cyan-300 border-opacity-20 transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PASolutions;