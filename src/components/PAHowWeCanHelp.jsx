import React from 'react';

const PAHowWeCanHelp = () => {
  // Function to handle smooth scrolling to contact form
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Service card data
  const services = [
    {
      title: "Consulting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "We take a deep dive into your business processes, identifying key areas where efficiency can be improved. Our team will recommend and implement the most suitable tools from the Microsoft Power Platform, ensuring these enhancements align with your business goals.",
      linkText: "Speak To A Consultant"
    },
    {
      title: "Discovery",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      description: "A comprehensive discovery that lays the foundation for a tailored Power App solution. We look at the effectiveness of your current processes, identify potential data gaps, and pinpoint inefficiencies.",
      linkText: "Schedule A Discovery Session"
    },
    {
      title: "Training",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Our training services are designed to equip your staff with the necessary skills and knowledge to leverage Power Apps to their fullest potential. From basic usage to advanced features, we ensure your team is confident and competent.",
      linkText: "Speak To A Training Specialist"
    },
    {
      title: "Support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "We offer robust support services for troubleshooting, assistance in setting up tools, and further developing and implementing strategies. Whether it's a technical glitch or a strategic pivot, our team is here to ensure everything runs smoothly.",
      linkText: "Speak To Our Support Team"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-purple-700 mb-2">How We Can Help</p>
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Choose The Right Service For<br />Your Business
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-12">
          Our team is dedicated to customising app solutions that fit your unique business 
          needs, ensuring a smarter, faster, and more efficient way of working.
        </p>
        
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col h-full"
            >
              {/* Icon Circle */}
              <div className="mb-4 self-center">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              
              {/* Service Description */}
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              
              {/* Link */}
              <button 
                onClick={scrollToContactForm}
                className="text-blue-600 hover:text-blue-800 font-medium mt-auto"
              >
                {service.linkText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PAHowWeCanHelp;