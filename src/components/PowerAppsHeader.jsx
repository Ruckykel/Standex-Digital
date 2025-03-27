import React, { useState, useEffect } from 'react';

const PowerAppsHeader = () => {
  // State for each counter
  const [connectorsCount, setConnectorsCount] = useState(0);
  const [fortuneCount, setFortuneCount] = useState(0);
  const [costCount, setCostCount] = useState(0);
  
  // Animation duration in milliseconds
  const animationDuration = 2000;
  // Target values
  const targetConnectors = 300;
  const targetFortune = 86;
  const targetCost = 74;

  // Function to handle smooth scrolling to contact form
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation effect
  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / animationDuration, 1);
      
      // Easing function for a smoother animation (ease-out)
      const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
      const easedProgress = easeOutCubic(percentage);

      // Update counter values
      setConnectorsCount(Math.floor(easedProgress * targetConnectors));
      setFortuneCount(Math.floor(easedProgress * targetFortune));
      setCostCount(Math.floor(easedProgress * targetCost));

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
    <div className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-4">
          <p className="text-cyan-300 mb-2">Microsoft Power Apps Consulting Services</p>
          <h1 className="text-5xl font-bold mb-6">Low Code Application Development</h1>
          <p className="max-w-2xl mx-auto mb-8">
            Revolutionise your business processes with a custom app that connects to all of
            your data, built specifically for you, and is accessible across all of your devices.
          </p>
          <button
            onClick={scrollToContactForm}
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
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Connectors Stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-purple-800">{connectorsCount}+</h2>
            <p className="font-semibold text-lg mb-3">Connectors</p>
            <p className="text-sm max-w-xs">
              With over 300 out-of-the-box connectors, easily integrate data from all of your systems taking the capabilities of your apps further.
            </p>
          </div>
          
          {/* Fortune 500 Stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-purple-800">{fortuneCount}%</h2>
            <p className="font-semibold text-lg mb-3">of the Fortune 500</p>
            <p className="text-sm max-w-xs">
              Have simplified their processes and enhanced user experience by transforming ideas into applications.
            </p>
          </div>
          
          {/* Lower Costs Stat */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold text-purple-800">{costCount}%</h2>
            <p className="font-semibold text-lg mb-3">Lower Costs</p>
            <p className="text-sm max-w-xs">
              Custom apps are available in DAYS with up to 74% lower costs than hiring an external custom application developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAppsHeader;