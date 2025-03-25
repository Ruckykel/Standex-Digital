import React from 'react';

const PPdiscovery = () => {
  // Function to scroll to contact form when button is clicked
  const scrollToContactForm = () => {
    // Find the contact form element by ID (which already exists in your Connect component)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      // Smooth scroll to the contact form
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-[#0C2340] rounded-2xl p-12 relative overflow-hidden">
        {/* Background pattern - subtle grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Want to learn how the Power Platform can transform your business?
          </h2>
          
          {/* Subtext */}
          <p className="text-white text-lg mb-10">
            Schedule a FREE call with our power platform specialists.
          </p>
          
          {/* CTA Button - scrolls to the contact-form id */}
          <button 
            onClick={scrollToContactForm}
            className="inline-flex items-center bg-[#B5EDF9] text-[#0C2340] py-4 px-8 rounded-md font-medium transition-colors hover:bg-[#9DDFF3]"
          >
            Book A Discovery Session
            <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PPdiscovery;