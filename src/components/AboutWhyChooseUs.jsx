import React from 'react';

const AboutWhyChooseUs = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      title: "Experienced",
      image: "/api/placeholder/400/300",
      description: "With extensive consulting experience, we've perfected our services and solutions. We've worked with global FS customers and countless FTSE100 companies. We understand what good PMO is and know exactly how to implement and adjust your processes to see results."
    },
    {
      title: "Innovative",
      image: "/api/placeholder/400/300",
      description: "We understand that one solution can not fix every problem which is why we offer a free consultation call to our clients to better understand your needs and challenges. We'll advise you on recommendations, and how much you can save by using our solutions."
    },
    {
      title: "Trustworthy",
      image: "/api/placeholder/400/300",
      description: "We provide honest and open advice based on what solution would be best for you. Our dedication to transparency, integrity, and ethical practices in every project ensures that you can confidently rely on us for expert guidance and dependable solutions."
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Why Choose Standex Digital?</h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          With a passion for innovation and a commitment to excellence, we help businesses harness the power of technology to <strong>streamline operations, enhance efficiency, and drive growth</strong>. Whether you're looking to build a custom application, leverage AI for automation, optimize cloud infrastructure, or upskill your workforce, <strong>Standex Digital is your trusted partner in digital transformation</strong>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Let's build the future together. <strong>Get in touch with us today!</strong>
          </p>
          
          <button 
            onClick={scrollToContact}
            className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutWhyChooseUs;