import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);
  
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

  // Detect when section is in view for animations
  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setAnimationStarted(true);
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
    <div className="w-full bg-gray-900 py-16 px-4">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <h2 
          className={`text-4xl font-bold text-center mb-4 text-white transform transition-all duration-700 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Testimonials
        </h2>
        <p 
          className={`text-center text-lg mb-12 text-gray-300 transform transition-all duration-700 delay-100 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          We've worked with leading organisations from around the world.
        </p>
        
        {/* Position relative container for testimonials and side navigation */}
        <div className="relative">
          {/* Left arrow (previous) */}
          <button 
            onClick={handlePrevClick} 
            disabled={activeSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 p-2 z-10 bg-gray-800 shadow-md rounded-full transition-all duration-300 ${
              activeSlide === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-200 hover:bg-gray-700 hover:scale-110'
            } ${animationStarted ? 'opacity-100' : 'opacity-0'}`}
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
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 p-2 z-10 bg-gray-800 shadow-md rounded-full transition-all duration-300 ${
              activeSlide >= testimonials.length - visibleCount ? 'text-gray-600 cursor-not-allowed' : 'text-gray-200 hover:bg-gray-700 hover:scale-110'
            } ${animationStarted ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Testimonials grid - responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={activeSlide + index} 
                className={`flex flex-col h-full transform transition-all duration-700 ${
                  animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="flex-grow bg-gray-800 text-white p-8 rounded-lg mb-6 relative border border-gray-700 shadow-lg hover:shadow-[#2EC74320] transition-all duration-300 hover:-translate-y-1">
                  {/* Improved quote design */}
                  <div className="absolute top-4 left-4 text-[#049DCB] opacity-30">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="0.5">
                      <path d="M11.0975 1.5H8.50745C4.40745 1.5 2.55745 3.95 2.55745 7.45V16.5H10.0975V8.5H6.59745C6.59745 5.5 7.69745 4.9 9.99745 4.9H11.0975V1.5Z" fill="currentColor"/>
                      <path d="M21.4976 1.5H18.8976C14.7976 1.5 12.9976 3.95 12.9976 7.45V16.5H20.4976V8.5H17.0976C17.0976 5.5 18.1976 4.9 20.4976 4.9H21.4976V1.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="ml-10 mt-2">
                    <p className="mb-4 text-gray-300 italic font-light">{testimonial.quote}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 border-[#049DCB] overflow-hidden">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-white">{testimonial.company}</h3>
                  <p className="text-[#2EC743] text-center">{testimonial.person}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots navigation at the bottom */}
        <div 
          className={`flex justify-center mt-10 transform transition-all duration-700 delay-500 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {Array.from({ length: Math.ceil(testimonials.length - (visibleCount - 1)) }, (_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                activeSlide === i ? 'bg-[#049DCB]' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;