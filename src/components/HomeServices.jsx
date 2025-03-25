import React from 'react';

const HomeServices = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">Our Services</h2>
      
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-slate-700">
          Whilst our expertise lies within the Microsoft Power Platform, we are not limited to any business 
          advocated tools or applications. We offer a range of services to help clients optimise their business 
          processes regardless of their current infrastructure. Browse our most popular services below.
        </p>
      </div>
      
      <div className="bg-[#0C2340] rounded-xl overflow-hidden shadow-lg">
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
          {/* Left side - Diagram */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#B5EDF9] rounded-full w-2/5 h-2/5 flex items-center justify-center z-10">
                <div className="text-center text-[#0C2340] font-medium text-sm">
                  <div>Power</div>
                  <div>Platform</div>
                  <div>Solutions</div>
                </div>
              </div>
              
              {/* Top circle and path (PowerApps) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1/4">
                <div className="absolute inset-0 border-4 border-[#D25BB1] rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/PowerApps.svg" alt="Power Apps" className="w-1/2 h-1/2" />
                </div>
              </div>
              <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 border-4 border-[#D25BB1] rounded-full border-b-0 border-x-0"></div>
              
              {/* Right circle and path (Power BI) */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/4 h-1/4">
                <div className="absolute inset-0 border-4 border-[#EEA32C] rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/PowerBi.svg" alt="Power BI" className="w-3/4 h-1/2" />
                </div>
              </div>
              <div className="absolute top-1/2 right-[12%] transform -translate-y-1/2 w-1/3 h-1/3 border-4 border-[#EEA32C] rounded-full border-l-0 border-y-0"></div>
              
              {/* Bottom circle and path (DataVerse) */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1/4">
                <div className="absolute inset-0 border-4 border-[#9B7AC7] rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/PowerPages.svg" alt="Dataverse" className="w-1/2 h-1/2" />
                </div>
              </div>
              <div className="absolute bottom-[12%] left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 border-4 border-[#9B7AC7] rounded-full border-t-0 border-x-0"></div>
              
              {/* Left circle and path (Power Automate) */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/4 h-1/4">
                <div className="absolute inset-0 border-4 border-[#2F8DD8] rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/PowerAutomate.svg" alt="Power Automate" className="w-1/2 h-1/2" />
                </div>
              </div>
              <div className="absolute top-1/2 left-[12%] transform -translate-y-1/2 w-1/3 h-1/3 border-4 border-[#2F8DD8] rounded-full border-r-0 border-y-0"></div>
              
              {/* Background icons - keeping these placeholders */}
              <div className="absolute top-[10%] left-[10%] text-gray-500 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div className="absolute bottom-[10%] left-[10%] text-gray-500 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
              <div className="absolute top-[10%] right-[10%] text-gray-500 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
              </div>
              <div className="absolute bottom-[10%] right-[10%] text-gray-500 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                <rect x="4" y="4" width="6" height="6" fill="currentColor" />
                <rect x="14" y="4" width="6" height="6" fill="currentColor" />
                <rect x="4" y="14" width="6" height="6" fill="currentColor" />
                <rect x="14" y="14" width="6" height="6" fill="currentColor" />
              </svg>
              <h3 className="text-2xl font-bold">Power Platform Solutions</h3>
            </div>
            
            <p className="mb-6">
              The Microsoft Power Platform has four key products designed to boost your
              company's efficiency and drive productivity. Our power platform implementation
              will allow you to analyse your data, automate your processes, and build bespoke
              apps for custom functionalities. Our consulting expertise lies in identifying the
              most beneficial tools within the Power Platform suite that align perfectly with your
              business needs. We'll also implement effective strategies to ensure these tools
              are integrated seamlessly into your business framework.
            </p>
            
            <div>
              <a href="#" className="inline-flex items-center bg-[#B5EDF9] text-[#0C2340] py-3 px-5 rounded-md font-medium transition-colors hover:bg-[#9DDFF3]">
                Power Platform Solutions
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;