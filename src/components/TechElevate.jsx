import React from 'react';

const TechElevate = () => {
  return (
    <section id="techElevate" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Tech Elevate – Industry-Leading Training & Certification
          </h2>
          <p className="text-xl text-gray-600">
            Empower your workforce with cutting-edge technology skills through comprehensive training programs and certification paths.
          </p>
        </div>

        {/* Tech Elevate Banner */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src="/images/tech-elevate-banner.jpg" 
            alt="Technology training and certification" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Solution Overview Section */}
        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800">Solution Overview</h3>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Standex Digital's Tech Elevate program offers industry-leading training and certification solutions designed to build technical proficiency across your organization. In today's rapidly evolving technology landscape, maintaining a skilled workforce is crucial for business innovation and competitiveness. Our comprehensive curriculum covers a wide range of technologies, from cloud computing and cybersecurity to artificial intelligence and software development methodologies. With customizable learning paths, hands-on practical exercises, and expert-led instruction, we help your team develop the practical expertise needed to drive digital transformation initiatives. Whether you're looking to upskill existing employees, onboard new talent, or establish centers of excellence within your organization, Tech Elevate provides structured pathways to technology mastery.
          </p>
        </div>

        {/* Two Column Features and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Customized Learning Paths</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Hands-on Practical Workshops</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Industry-Recognized Certifications</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Expert-Led Instruction</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Key Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Accelerated Innovation Capability</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Increased Employee Retention</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Enhanced Project Implementation</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Reduced Technology Adoption Costs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechElevate;