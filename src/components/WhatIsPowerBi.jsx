import React from 'react';

const WhatIsPowerBi = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="text-purple-900 font-medium mb-2">About</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">What is Power BI?</h2>
            
            <div className="space-y-6 text-slate-700">
              <p>
                Power BI is a reporting and dashboard design tool designed to transform your 
                complex data into visually stunning, interactive reports that inform & inspire smarter 
                business strategies.
              </p>
              
              <p>
                Every day your company generates large amounts of raw and structured data that contain 
                valuable insights. Power BI allows you to manage all of your data in one place at a 
                portfolio, project or programme view. This holistic view enables your organisation to make 
                cohesive decisions backed by a complete understanding of your data landscape.
              </p>
              
              <div className="mt-8">
                
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/Power-Bi.webp" 
                alt="Power BI Dashboard Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPowerBi;