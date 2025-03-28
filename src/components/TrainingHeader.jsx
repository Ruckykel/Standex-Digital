import React from 'react';

const TrainingHeader = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-20">
      {/* Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">
          Tech Elevate
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Your Gateway to Advanced Tech Skills
        </h2>
        <p className="text-gray-600 text-lg">
          Welcome to Tech Elevate, where industry professionals teach practical 
          technology training programs to help you gain real-world skills for 
          immediate job placement.
        </p>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 relative">
        <div className="relative rounded-full bg-green-800 p-4 w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden">
          <img 
            src="/images/student-with-headphones.jpg" 
            alt="Tech student working on laptop with headphones" 
            className="object-cover w-full h-full rounded-full"
          />
          {/* AI Assistant Bot Icon */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHeader;