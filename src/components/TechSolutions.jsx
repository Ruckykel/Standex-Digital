import React from 'react';

const TechSolutions = () => {
  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Technology Solutions
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          We provide comprehensive technology services to help businesses thrive in the 
          digital era, leveraging innovative and disruptive tools of today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Intelligent Cloud Solutions */}
          <div className="bg-white rounded-lg p-8" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03), 0 0 1px rgba(0, 0, 0, 0.1)' }}>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Intelligent Cloud Solutions
            </h3>
            
            <p className="text-gray-600 mb-6">
              Comprehensive cloud architecture and migration services designed to optimize your infrastructure, enhance security, and enable scalable growth for your business.
            </p>
            
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Learn more
            </a>
          </div>
          
          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Web Development
            </h3>
            
            <p className="text-gray-600 mb-6">
              Custom website development with responsive design, ensuring optimal user experience across all devices and platforms while meeting your business objectives.
            </p>
            
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Learn more
            </a>
          </div>
          
          {/* App Development */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              App Development
            </h3>
            
            <p className="text-gray-600 mb-6">
              Innovative mobile application development for iOS and Android platforms, creating seamless digital experiences that engage users and drive your business forward.
            </p>
            
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Learn more
            </a>
          </div>
          
          {/* Digital Marketing */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Digital Marketing
            </h3>
            
            <p className="text-gray-600 mb-6">
              Results-driven digital marketing strategies including SEO, content marketing, and social media campaigns to increase visibility and generate qualified leads.
            </p>
            
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Learn more
            </a>
          </div>
          
          {/* Artificial Intelligence */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Artificial Intelligence
            </h3>
            
            <p className="text-gray-600 mb-6">
              Cutting-edge AI solutions that automate processes, extract valuable insights from data, and create intelligent applications to transform your business operations.
            </p>
            
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Learn more
            </a>
          </div>
          
          {/* E-commerce Solutions */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              E-commerce Solutions
            </h3>
            
            <p className="text-gray-600 mb-6">
              End-to-end e-commerce solutions with secure payment processing, inventory management, and personalized shopping experiences that increase conversions and customer loyalty.
            </p>
            
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
              Learn more
            </a>
          </div>
        </div>
        
        {/* Discover More Button */}
        <div className="text-center">
          <a href="#" className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions;