import React from 'react';

const ContactHeader = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4 mt-20">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <p className="text-teal-300 font-medium mb-4">Start Your Journey</p>
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg max-w-3xl mb-12">
          Take the first step in transforming your business by reaching out to us below. We
          offer an obligation-free consultation service where we will analyse your current
          processes and advise you on how you could benefit from our services.
        </p>
        <button 
          onClick={scrollToContactForm}
          className="bg-teal-100 text-blue-900 font-medium py-3 px-6 rounded-md flex items-center hover:bg-teal-200 transition-colors duration-300"
        >
          Let's Chat 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;