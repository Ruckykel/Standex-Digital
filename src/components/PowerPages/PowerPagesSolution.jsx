import React from 'react';

const PowerPagesSolution = () => {
  // Function to scroll to contact form
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="text-purple-800 font-medium mb-3">
          Power Pages Services
        </p>
        <h2 className="text-4xl font-bold text-blue-900 max-w-3xl mx-auto">
          Power Pages solutions to transform your digital presence
        </h2>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Power Pages Consulting */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col h-full">
          <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Power Pages Consulting
          </h3>
          <p className="text-gray-700 mb-6 flex-grow">
            Our Power Pages specialists work closely with your business for strategic planning, custom solution design, and the implementation of best practices for your web presence. Our focus is on solutions that integrate smoothly with your existing business systems and workflows.
          </p>
          <button 
            onClick={scrollToContactForm}
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            Speak To A Consultant
          </button>
        </div>

        {/* Card 2: Discovery & Development */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col h-full">
          <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Discovery & Development
          </h3>
          <p className="text-gray-700 mb-6 flex-grow">
            A comprehensive analysis of existing Power Pages setups, focusing on performance, security, and functionality. Our specialists review overall functionality and user experience, providing actionable recommendations for improvements.
          </p>
          <button 
            onClick={scrollToContactForm}
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            Schedule A Call
          </button>
        </div>

        {/* Card 3: Power Pages Training */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col h-full">
          <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Power Pages Training
          </h3>
          <p className="text-gray-700 mb-6 flex-grow">
            Our training services aim to educate businesses on effectively utilising Power Pages, catering to both basic and advanced users. These sessions are tailored to the specific needs of the business, ensuring relevant skill development.
          </p>
          <button 
            onClick={scrollToContactForm}
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            Speak To Our Training Specialists
          </button>
        </div>

        {/* Card 4: Power Pages Support */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col h-full">
          <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Power Pages Support
          </h3>
          <p className="text-gray-700 mb-6 flex-grow">
            We provide ongoing technical assistance, maintenance, and advisory support for Power Pages users. This encompasses direct help with technical issues, regular website maintenance, and updates to keep the site functional and secure.
          </p>
          <button 
            onClick={scrollToContactForm}
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            Speak To Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PowerPagesSolution;