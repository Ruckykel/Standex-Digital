import React from 'react';

const AutomateSolutions = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-purple-800 font-medium mb-3">How Our Power Automate Solutions Can Help You</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 max-w-3xl mx-auto">
            The Key To A Smoother, More Productive Workplace
          </h2>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Reduce Human Errors */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Reduce Human Errors</h3>
            <p className="text-gray-700">
              Power Automate eliminates the risk of human error by automating tasks with precision. This leads to fewer mistakes, improved data quality and smoother operations.
            </p>
          </div>
          
          {/* Card 2: Boost Productivity */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Boost Productivity</h3>
            <p className="text-gray-700">
              Streamline your mundane and repetitive tasks, freeing up employees from <span className="text-blue-800">time-consuming</span> manual work allowing them to focus on higher-value tasks.
            </p>
          </div>
          
          {/* Card 3: Enhance Collaboration & Communication */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Enhance Collaboration & Communication</h3>
            <p className="text-gray-700">
              Power Automate workflows can connect departments and systems fostering seamless information flow.
            </p>
          </div>
        </div>

        {/* Example Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/api/placeholder/1200/600" 
              alt="Power Automate Travel Approval Dashboard Example" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateSolutions;