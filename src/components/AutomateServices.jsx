import React from 'react';

const AutomateServices = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-purple-800 font-medium mb-3">Power Automate Services</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 max-w-3xl mx-auto">
            Our Automation Experts Will Transform The Way You Operate
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Automation Consulting */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Automation Consulting</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              We examine workflow efficiency, data management, and resource allocation to identify opportunities for ROI positive process automation.
            </p>
            <a 
              href="#" 
              onClick={scrollToContactForm} 
              className="text-blue-800 font-medium hover:text-blue-600 transition-colors"
            >
              Speak To A Consultant
            </a>
          </div>
          
          {/* Card 2: Power Automate Development */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Power Automate Development</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Our expert team designs and deploys custom power automate solutions that align with your specific business objectives, ensuring seamless integration.
            </p>
            <a 
              href="#" 
              onClick={scrollToContactForm} 
              className="text-blue-800 font-medium hover:text-blue-600 transition-colors"
            >
              Schedule A Call
            </a>
          </div>
          
          {/* Card 3: Automation Training */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Automation Training</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              From basic workflow creation to advanced techniques, our training services provide your staff with the knowledge and skills necessary to utilise Power Automate effectively.
            </p>
            <a 
              href="#" 
              onClick={scrollToContactForm} 
              className="text-blue-800 font-medium hover:text-blue-600 transition-colors"
            >
              Speak To Our Training Specialists
            </a>
          </div>
          
          {/* Card 4: Automation Support */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Automation Support</h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Our Power Automate support service ensures your automated process are functioning optimally. This includes troubleshooting, updates, and periodic reviews.
            </p>
            <a 
              href="#" 
              onClick={scrollToContactForm} 
              className="text-blue-800 font-medium hover:text-blue-600 transition-colors"
            >
              Speak To Our Support Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateServices;