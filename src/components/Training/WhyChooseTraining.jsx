import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Wrench, BookOpen, Briefcase, Shield } from 'lucide-react';

const WhyChooseTraining = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-emerald-500" />,
      title: "Access to Tools",
      description: "Get hands-on experience with Power BI, Azure, SQL, and more for one year."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
      title: "Job References",
      description: "Stand out to employers with real job experience and professional references."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      title: "Free Resources",
      description: "Receive textbooks and materials to support your learning journey."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Microsoft Partnership",
      description: "Learn with the latest tools and resources, ensuring you're prepared for the tech world."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto slide change with longer duration
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-600 to-green-500 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Why Choose Tech Elevate
        </h2>
        <div className="w-16 h-1 bg-white mx-auto mb-12"></div>

        <div className="relative">
          {/* Single card carousel for all devices */}
          <div 
            className="relative w-full overflow-hidden"
            ref={slidesRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="min-w-full">
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full ml-2 hover:bg-white/50 transition-colors"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full mr-2 hover:bg-white/50 transition-colors"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center mx-auto max-w-sm md:max-w-md">
      <div className="bg-indigo-100 p-3 rounded-lg mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 text-center">
        {feature.description}
      </p>
    </div>
  );
};

export default WhyChooseTraining;