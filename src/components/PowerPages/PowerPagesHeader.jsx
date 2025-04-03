import React, { useState, useEffect } from 'react';

const PowerPagesHeader = () => {
  // State for the counter values
  const [templateCount, setTemplateCount] = useState(0);
  const [connectorCount, setConnectorCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  
  // Target values for the counters
  const targetTemplates = 15;
  const targetConnectors = 675;
  const targetExperience = 30;
  
  // Animation duration in milliseconds
  const animationDuration = 2000;
  
  // Animation effect using requestAnimationFrame for smoother animation
  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / animationDuration, 1);
      
      // Easing function for smoother animation (ease-out)
      const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
      const easedProgress = easeOutCubic(percentage);

      // Update counter values
      setTemplateCount(easedProgress * targetTemplates);
      setConnectorCount(easedProgress * targetConnectors);
      setExperienceCount(easedProgress * targetExperience);

      // Continue animation if not complete
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animateCounters);
      }
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animateCounters);

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <p className="text-cyan-300 mb-2">Microsoft Power Pages Consulting Services</p>
        
        <h1 className="text-5xl font-bold mb-6">Low Code Business-Centric Websites</h1>
        
        <p className="max-w-2xl mx-auto mb-8">
          Create modern, scalable and secure data-focused websites for desktop or mobile 
          with our Power Page consulting services
        </p>
        
        <div className="mb-8">
          <a
            href="/Contact"
            className="bg-cyan-100 text-blue-800 font-medium py-3 px-6 rounded-md hover:bg-cyan-200 transition-colors inline-flex items-center"
          >
            Book A Free Consultation Call
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
          </a>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Templates Stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-purple-800">
              {Math.floor(templateCount)}+
            </h2>
            <p className="font-semibold text-lg mb-3">Pre-built Templates</p>
            <p className="text-sm max-w-xs">
              Jumpstart the journey into power-pages with over 15 available business solution templates.
            </p>
          </div>
          
          {/* Connectors Stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-purple-800">
              {Math.floor(connectorCount)}+
            </h2>
            <p className="font-semibold text-lg mb-3">Connectors</p>
            <p className="text-sm max-w-xs">
              Power Pages saves data within Microsoft Dataverse, allowing the system to make use of over 675 available with the data source.
            </p>
          </div>
          
          {/* Experience Stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-purple-800">
              {Math.floor(experienceCount)}+
            </h2>
            <p className="font-semibold text-lg mb-3">Years of Experience</p>
            <p className="text-sm max-w-xs">
              Our Certified Microsoft Power Platform Specialists in the UK have over 30 years of combined experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPagesHeader;