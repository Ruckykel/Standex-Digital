import React, { useState } from 'react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      quote: '"Synapx provided us with a design and implementation plan for our new external Power App with integrated Power BI reporting. We were very impressed with the knowledge and experience shown by the consultants. The end result was a high performing, well governed and aesthetically pleasing Power App which is being used by our clients today."',
      company: 'UK Insurance Company',
      person: 'Senior Project Manager',
      logo: '/uk-insurance-logo.png' // Replace with actual logo path
    },
    {
      quote: '"We work with Synapx as our go-to and trusted partner for anything Power BI, or data in general, so much so we recommend them to all our clients! The team always work to first understand what our challenges are, what it is we want to achieve and with their expertise, are able to take us through, in simple terms, what the solution would be. For delivery of data projects or support with our existing data products, the team at Synapx work professionally and efficiently."',
      company: 'Lanware',
      person: 'Chief Technology Officer (CTO)',
      logo: '/lanware-logo.png' // Replace with actual logo path
    },
    {
      quote: '"As part of a major business process transformation programme, we were looking to significantly enhance our MI and BI capabilities. Having decided upon the technologies within our technical architecture design, we needed the assistance and expertise from Synapx to realise our objectives. Synapx performed brilliantly for us, working closely with technical and business stakeholders, and played a pivotal role on the programme."',
      company: 'The Gap Partnership',
      person: 'Head of Technology',
      logo: '/gap-partnership-logo.png' // Replace with actual logo path
    }
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center text-lg mb-12">We've worked with leading organisations from around the world.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col h-full">
            <div className="flex-grow bg-[#002642] text-white p-8 rounded-lg mb-6 relative">
              <p className="mb-8">{testimonial.quote}</p>
              {index === 1 && <button className="absolute bottom-4 right-4 text-white py-2 px-4 text-sm">Read More</button>}
              {index === 2 && <button className="absolute bottom-4 right-4 text-white py-2 px-4 text-sm">Read More</button>}
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-gray-200">
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} logo`} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center">{testimonial.company}</h3>
              <p className="text-blue-600 text-center">{testimonial.person}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots navigation */}
      <div className="flex justify-center mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              activeSlide === index ? 'bg-blue-900' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;