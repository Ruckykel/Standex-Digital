import React from 'react';

const PowerBiServices = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Service cards data
  const serviceCards = [
    {
      id: 'consulting',
      title: 'Power BI Consulting',
      description: "After understanding your business's unique challenges and goals, we identify areas of strength, uncover inefficiencies, and pinpoint opportunities for improvement.",
      linkText: 'Speak To A Consultant'
    },
    {
      id: 'development',
      title: 'Power BI Development',
      description: 'Leveraging our deep expertise in Power BI, we design and implement dashboards that turn your data into actionable insights, driving growth and efficiency.',
      linkText: 'Schedule A Call'
    },
    {
      id: 'training',
      title: 'Power BI Training',
      description: 'Equip your team with the skills to fully utilise Power BI. We cover everything from basic data visualisation techniques to advanced analytics, helping you harness the full potential of your data.',
      linkText: 'Speak To Our Training Specialists'
    },
    {
      id: 'support',
      title: 'Power BI Support',
      description: "Whether it's troubleshooting an existing setup, refining data models, or updating your reports, we offer ongoing Power BI support, ensuring your analytics solutions continue to meet your needs.",
      linkText: 'Speak To Our Support Team'
    }
  ];

  // Icons for each service type
  const getServiceIcon = (serviceId) => {
    switch(serviceId) {
      case 'consulting':
        return (
          <div className="bg-blue-950 rounded-full p-4 flex items-center justify-center w-16 h-16">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        );
      case 'development':
        return (
          <div className="bg-blue-950 rounded-full p-4 flex items-center justify-center w-16 h-16">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        );
      case 'training':
        return (
          <div className="bg-blue-950 rounded-full p-4 flex items-center justify-center w-16 h-16">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
        );
      case 'support':
        return (
          <div className="bg-blue-950 rounded-full p-4 flex items-center justify-center w-16 h-16">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
              <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
              <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
              <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-blue-950 rounded-full p-4 flex items-center justify-center w-16 h-16">
            <span className="text-white text-xl font-bold">{serviceId.charAt(0).toUpperCase()}</span>
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-900 font-medium mb-3">Power BI Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 max-w-4xl mx-auto leading-tight">
            Power BI solutions to transform your data into your most valuable asset
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <div key={card.id} className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
              {getServiceIcon(card.id)}
              <h3 className="text-xl font-bold text-blue-950 mt-5 mb-3">{card.title}</h3>
              <p className="text-slate-700 flex-grow mb-5">{card.description}</p>
              <a 
                href="#contact-form" 
                onClick={scrollToContactForm}
                className="text-blue-700 hover:text-blue-900 font-medium inline-block"
              >
                {card.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerBiServices;