import React, { useState, useEffect, useRef } from 'react';

const AboutProcess = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);
  
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

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      content: [
        "Our process begins with our discovery phase. We understand that every business is unique with its own requirements, challenges, and infrastructure. Every client has their own set of systems they use and so we start our approach by firstly gaining a detailed understanding of your business and vision.",
        "Our discovery phase is kicked off with our discovery workshop where we'll invite key stakeholders to understand your \"as-is\" business model. We take this time to establish the current systems you have in place, the processes you're following, reporting mechanisms you're using, and the pain points you're experiencing with your current solutions. Once we have an understanding of your business model and processes, we'll then design your business goals as well as the challenges you're currently facing to reach your goals.",
        "Our discovery workshop is free and is a critical step as it allows us to plan and propose the best possible solution for you. This will also help us to provide you with a fixed cost based on your unique project."
      ]
    },
    {
      number: 2,
      title: "Planning & Proposal",
      content: [
        "We take the insights from our discovery process and identify which business systems can be optimised and automated. We'll put together a proposal, with our recommendations and insights to help you make an informed decision on how you would like to proceed. Our Power Platform specialists will maximise any current investments you have in Microsoft to help you make the most out of your subscription if applicable."
      ]
    },
    {
      number: 3,
      title: "Preparation",
      content: [
        "Once the proposal is accepted, and you're happy with our recommendations, we start our data mining process to collect your business data. We'll pull in data from spreadsheets, forms, databases, and other forms you may have. All the data is then organised and sanitised to clean up inaccurate or incorrect data ensuring your dataset is ready for transforming and reporting. All of this structured data is then collated into the Microsoft Dataverse, ready to use with your new power platform implementation."
      ]
    },
    {
      number: 4,
      title: "Design & Development",
      content: [
        "Our design and development teams work within an Agile (Scrum) framework to deliver our solutions. This approach allows us to develop the solution iteratively meaning you will yield business benefits quicker. New functionality is developed and released every sprint to maximise productivity.",
        "Our consultants are armed with industry-leading experience and qualifications and work with a hands-on approach to consulting. Our team will work closely with you to develop your solution and involve you throughout the design process so you can offer any suggestions and make changes as necessary.",
        "We focus on implementing robust, long-lasting solutions so you can be sure that our solutions will serve you for years to come."
      ]
    },
    {
      number: 5,
      title: "Testing & Acceptance",
      content: [
        "Upon completion of the development phase, we carry out our rigorous testing process ensuring everything is working, collecting, and reporting as it should. Once we're completely satisfied, we'll invite you to carry out your own testing of the applications before we deliver the project and the solution goes live."
      ]
    },
    {
      number: 6,
      title: "Maintenance & Support",
      content: [
        "Once your project has been delivered, we ensure your product is maintained and you are supported throughout the lifetime of your solution. We provide ongoing support and offer training to upskill your staff to make the most out of your new solution.",
        "In the rare event that anything does go wrong, we'll always be on hand, ready to get everything back to how it should be."
      ]
    }
  ];

  return (
    <div className="w-full py-20 px-4 bg-gray-900">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <div 
          className={`mb-12 transform transition-all duration-1000 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-(-20) opacity-0'
          }`}
        >
          <h3 className="text-[#049DCB] font-medium text-center mb-4">
            How We Work
          </h3>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">Our Process</h2>
          
          <p className="text-center text-gray-300 mb-16">
            We've perfected our six step process to ensure your project is delivered successfully. We work closely with you throughout the process to ensure our bespoke solution is perfect for you.
          </p>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div 
            className={`absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[#049DCB] transform transition-all duration-1500 ${
              animationStarted ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
            style={{ transformOrigin: 'top' }}
          ></div>

          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:mb-16 pl-16 md:pl-20 transform transition-all duration-1000 ${
                animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Timeline circle */}
              <div 
                className={`absolute left-0 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-[#049DCB] bg-gray-800 flex items-center justify-center transform transition-all duration-500 ${
                  animationStarted ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${500 + index * 200}ms`,
                  animation: animationStarted ? 'pulse-blue 2s infinite' : 'none',
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#049DCB]"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#049DCB] mb-3">
                Step {step.number} - {step.title}
              </h3>

              <div 
                className="text-gray-300"
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {step.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className={`mb-3 transform transition-all duration-700 ${
                      animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}
                    style={{ transitionDelay: `${700 + index * 200 + pIndex * 100}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes pulse-blue {
          0% {
            box-shadow: 0 0 0 0 rgba(4, 157, 203, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(4, 157, 203, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(4, 157, 203, 0);
          }
        }
      `}</style>
      
      {/* Background Elements */}
      <div 
        className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#049DCB] to-transparent rounded-full filter blur-3xl opacity-0 transform transition-all duration-2000 ${
          animationStarted ? 'opacity-5' : 'opacity-0'
        }`}
        style={{ zIndex: 0, transitionDelay: '300ms' }}
      ></div>
      
      <div 
        className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2EC743] to-transparent rounded-full filter blur-3xl opacity-0 transform transition-all duration-2000 ${
          animationStarted ? 'opacity-5' : 'opacity-0'
        }`}
        style={{ zIndex: 0, transitionDelay: '400ms' }}
      ></div>
    </div>
  );
};

export default AboutProcess;