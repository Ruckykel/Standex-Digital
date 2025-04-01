import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart, Brain, Cog, Building, Cloud, Code, Database, BarChart2, Shield, Terminal } from 'lucide-react';

const TrainingCareer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const careerData = [
    {
      icon: <BarChart className="w-6 h-6 text-emerald-500" />,
      title: "Business Intelligence Analyst",
      description: "Career prospects in various industries, with a focus on data analysis and strategic decision-making.",
      salary: "£40,000 - £70,000"
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-500" />,
      title: "Data Scientist",
      description: "Opportunities in tech companies, finance, healthcare, and more, focusing on predictive modeling and big data.",
      salary: "£50,000 - £90,000"
    },
    {
      icon: <Cog className="w-6 h-6 text-emerald-500" />,
      title: "Power Platform Developer",
      description: "High demand in businesses seeking to automate processes and improve efficiency with custom apps and workflows.",
      salary: "£45,000 - £80,000"
    },
    {
      icon: <Building className="w-6 h-6 text-emerald-500" />,
      title: "Enterprise Architect",
      description: "Key roles in designing and implementing IT infrastructure, ensuring scalability and security.",
      salary: "£60,000 - £100,000"
    },
    {
      icon: <Cloud className="w-6 h-6 text-emerald-500" />,
      title: "Cloud Solutions Architect",
      description: "Leads cloud strategy and design in organizations, ensuring efficient and secure cloud-based solutions that scale to business needs.",
      salary: "£65,000 - £120,000"
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-500" />,
      title: "DevOps Engineer",
      description: "Integrates development and operations, automating software deployment and ensuring smooth, reliable system performance.",
      salary: "£50,000 - £85,000"
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      title: "ML Operations Engineer",
      description: "Works in industries ranging from finance to healthcare, focusing on building and deploying AI models to solve complex problems.",
      salary: "£55,000 - £95,000"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-emerald-500" />,
      title: "Power BI Specialist",
      description: "Creates and manages data visualizations and dashboards, helping businesses make informed, data-driven decisions.",
      salary: "£40,000 - £70,000"
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Cloud Security Engineer",
      description: "Ensures data protection and compliance in cloud environments, focusing on implementing security protocols and threat mitigation.",
      salary: "£60,000 - £100,000"
    },
    {
      icon: <Terminal className="w-6 h-6 text-emerald-500" />,
      title: "Low-Code/No-Code Solutions Consultant",
      description: "Specializes in delivering custom low-code solutions, improving efficiency and accessibility for non-technical users across various industries.",
      salary: "£45,000 - £75,000"
    }
  ];

  const totalSlides = careerData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
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

  // No automatic slide change

  // Calculate visible cards
  const getVisibleCards = () => {
    const mobileCardCount = 1;
    const desktopCardCount = 3;

    // For mobile view (single card)
    if (window.innerWidth < 768) {
      return careerData.slice(currentSlide, currentSlide + mobileCardCount);
    }
    
    // For desktop view (3 cards)
    const startIndex = currentSlide * 3;
    return careerData.slice(startIndex, startIndex + desktopCardCount);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Career Prospects & Salary Ranges
        </h2>

        {/* Desktop View - 3 cards at a time, centered on current card */}
        <div 
          className="hidden md:block relative"
          ref={sliderRef}
        >
          <div className="relative overflow-hidden px-16">
            <div className="flex justify-center gap-6">
              {(() => {
                // Find indices for the 3 visible cards
                const prevIndex = currentSlide === 0 ? careerData.length - 1 : currentSlide - 1;
                const nextIndex = currentSlide === careerData.length - 1 ? 0 : currentSlide + 1;
                
                return [
                  <div key="prev" className="w-full max-w-sm opacity-60">
                    <CareerCard career={careerData[prevIndex]} />
                  </div>,
                  <div key="current" className="w-full max-w-sm z-10 transform scale-105 shadow-lg">
                    <CareerCard career={careerData[currentSlide]} />
                  </div>,
                  <div key="next" className="w-full max-w-sm opacity-60">
                    <CareerCard career={careerData[nextIndex]} />
                  </div>,
                ];
              })()}
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 z-20"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 z-20"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile View - 1 card at a time with touch swipe */}
        <div 
          className="md:hidden relative"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden px-12">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <CareerCard career={careerData[currentSlide]} />
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerCard = ({ career }) => {
  return (
    <div className="bg-green-50 border border-green-100 rounded-lg p-6 w-full max-w-sm">
      <div className="mb-4 text-emerald-500">
        {career.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {career.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {career.description}
      </p>
      <div className="pt-4 border-t border-green-200">
        <h4 className="font-medium text-gray-800 mb-1">Annual Salary</h4>
        <p className="text-emerald-600 font-medium">{career.salary}</p>
      </div>
    </div>
  );
};

export default TrainingCareer;