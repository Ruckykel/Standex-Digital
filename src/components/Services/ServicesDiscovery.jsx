import React from 'react';

const ServicesDiscovery = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto bg-blue-900 rounded-xl p-10 text-center relative overflow-hidden">
        {/* Background grid pattern - purely decorative */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to elevate your business with custom technology solutions?
          </h2>
          
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Schedule a free consultation with our technical specialists to discuss your unique requirements.
          </p>
          
          <button 
            onClick={scrollToContactForm}
            className="inline-flex items-center px-6 py-3 bg-teal-400 text-blue-900 font-medium rounded hover:bg-teal-300 transition-colors"
          >
            Book A Discovery Session
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDiscovery;