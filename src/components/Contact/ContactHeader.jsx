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
        
      </div>
    </div>
  );
};

export default ContactHeader;