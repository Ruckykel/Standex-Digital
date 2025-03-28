import React from 'react';

const CopilotSolutions = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'consulting',
      icon: '📋',
      title: 'Consulting & Discovery',
      description: 'A comprehensive discovery phase that lays the foundation for a tailored AI copilot solution. We evaluate the effectiveness of your current processes, identify potential data gaps, and pinpoint inefficiencies.',
      linkText: 'Speak To A Consultant'
    },
    {
      id: 'development',
      icon: '🔧',
      title: 'Development & Build',
      description: 'Our development and build services bring your AI copilot to life. We work closely with you to design and develop a copilot that meets your specific requirements, integrating it seamlessly into your existing systems and workflows.',
      linkText: 'Start Your Project'
    },
    {
      id: 'training',
      icon: '🎓',
      title: 'Copilot Studio Training',
      description: 'Our training services are designed to equip your staff with the necessary skills and knowledge to leverage Microsoft Copilot Studio to its fullest potential. From basic usage to advanced features, we ensure your team is confident and competent.',
      linkText: 'Speak To Our Training Specialists'
    },
    {
      id: 'support',
      icon: '🛠️',
      title: 'Copilot Studio Support',
      description: 'We offer robust support services for troubleshooting, assistance in setting up tools, and further developing and implementing strategies. Whether it\'s a technical glitch or a strategic pivot, our team ensures everything runs smoothly.',
      linkText: 'Speak To Our Support Team'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h3 className="text-purple-800 font-medium mb-4">
            Copilot Studio Services
          </h3>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            Copilot Studio solutions for all your<br />chatbot requirements
          </h2>
          
          <p className="text-blue-900 max-w-4xl mx-auto">
            Our team specialises in customising AI copilot solutions that cater to your unique business needs, 
            ensuring a smarter, faster, and more efficient way of working.
          </p>
        </div>
        
        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col">
              {/* Icon */}
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-blue-800 mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* Link */}
              <div className="mt-auto">
                <a 
                  href="#contact-form"
                  onClick={scrollToContactForm}
                  className="text-blue-700 hover:text-purple-800 font-medium transition-colors duration-300"
                >
                  {service.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopilotSolutions;