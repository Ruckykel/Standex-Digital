import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  
  const testimonials = [
    {
      quote: '"Synapx provided us with a design and implementation plan for our new external Power App with integrated Power BI reporting. We were very impressed with the knowledge and experience shown by the consultants. The end result was a high performing, well governed and aesthetically pleasing Power App which is being used by our clients today."',
      company: 'UK Insurance Company',
      person: 'Senior Project Manager',
      logo: '/The-Ocean-Logo.webp' // Replace with actual logo path
    },
    {
      quote: '"We work with Synapx as our go-to and trusted partner for anything Power BI, or data in general, so much so we recommend them to all our clients! The team always work to first understand what our challenges are, what it is we want to achieve and with their expertise, are able to take us through, in simple terms, what the solution would be. For delivery of data projects or support with our existing data products, the team at Synapx work professionally and efficiently."',
      company: 'Lanware',
      person: 'Chief Technology Officer (CTO)',
      logo: '/The-Ocean-Logo.webp' // Replace with actual logo path
    },
    {
      quote: '"As part of a major business process transformation programme, we were looking to significantly enhance our MI and BI capabilities. Having decided upon the technologies within our technical architecture design, we needed the assistance and expertise from Synapx to realise our objectives. Synapx performed brilliantly for us, working closely with technical and business stakeholders, and played a pivotal role on the programme."',
      company: 'The Gap Partnership',
      person: 'Head of Technology',
      logo: '/The-Ocean-Logo.webp' // Replace with actual logo path
    }
  ];

  // Update visible count based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDotClick = (index) => {
    // Ensure we don't go out of bounds with pagination
    const maxStartIndex = Math.max(0, testimonials.length - visibleCount);
    setActiveSlide(Math.min(index, maxStartIndex));
  };

  const handlePrevClick = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prev) => Math.min(testimonials.length - visibleCount, prev + 1));
  };

  // Calculate which testimonials to show
  const visibleTestimonials = testimonials.slice(activeSlide, activeSlide + visibleCount);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center text-lg mb-12">We've worked with leading organisations from around the world.</p>
      
      {/* Position relative container for testimonials and side navigation */}
      <div className="relative">
        {/* Left arrow (previous) */}
        <button 
          onClick={handlePrevClick} 
          disabled={activeSlide === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 z-10 bg-white shadow-md rounded-full ${
            activeSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-900 hover:bg-blue-100'
          }`}
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      
        {/* Right arrow (next) */}
        <button 
          onClick={handleNextClick} 
          disabled={activeSlide >= testimonials.length - visibleCount}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 z-10 bg-white shadow-md rounded-full ${
            activeSlide >= testimonials.length - visibleCount ? 'text-gray-400 cursor-not-allowed' : 'text-blue-900 hover:bg-blue-100'
          }`}
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Testimonials grid - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={activeSlide + index} className="flex flex-col h-full">
            <div className="flex-grow bg-[#002642] text-white p-8 rounded-lg mb-6 relative">
              <p className="mb-4">{testimonial.quote}</p>
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
      </div>
      
      {/* Dots navigation at the bottom */}
      <div className="flex justify-center mt-10">
        {Array.from({ length: Math.ceil(testimonials.length - (visibleCount - 1)) }, (_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              activeSlide === i ? 'bg-blue-900' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;