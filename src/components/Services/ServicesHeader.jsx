import React from 'react';

const ServicesHeader = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-blue-900 py-14 px-6 text-center mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">
          Our Technology Solutions
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Comprehensive technology services tailored to transform your business and drive innovation in the digital era
        </p>
        
        <button 
          onClick={scrollToContactForm}
          className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
        >
          Book Your Free Consultation
        </button>
      </div>
    </div>
  );
};

export default ServicesHeader;