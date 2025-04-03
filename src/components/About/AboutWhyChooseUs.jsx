import React, { useState, useEffect, useRef } from 'react';

const AboutWhyChooseUs = () => {
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

  const features = [
    {
      title: "Experienced",
      image: "/Experienced.webp",
      description: "With extensive consulting experience, we've perfected our services and solutions. We've worked with global FS customers and countless FTSE100 companies. We understand what good PMO is and know exactly how to implement and adjust your processes to see results."
    },
    {
      title: "Innovative",
      image: "/Innovative.webp",
      description: "We understand that one solution can not fix every problem which is why we offer a free consultation call to our clients to better understand your needs and challenges. We'll advise you on recommendations, and how much you can save by using our solutions."
    },
    {
      title: "Trustworthy",
      image: "/Trustworthy.webp",
      description: "We provide honest and open advice based on what solution would be best for you. Our dedication to transparency, integrity, and ethical practices in every project ensures that you can confidently rely on us for expert guidance and dependable solutions."
    }
  ];

  return (
    <div className="w-full py-20 px-4 bg-gray-900">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div 
          className={`mb-12 transform transition-all duration-1000 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-(-20) opacity-0'
          }`}
        >
          <h3 className="text-[#049DCB] font-medium text-center mb-4">
            Our Commitment
          </h3>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">Why Choose Standex Digital?</h2>
          
          <p className="text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            With a passion for innovation and a commitment to excellence, we help businesses harness the power of technology to <strong className="text-white">streamline operations, enhance efficiency, and drive growth</strong>. Whether you're looking to build a custom application, leverage AI for automation, optimize cloud infrastructure, or upskill your workforce, <strong className="text-white">Standex Digital is your trusted partner in digital transformation</strong>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#2EC743] transform ${
                animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative">
                {/* Subtle glow effect behind the image */}
                <div 
                  className={`absolute inset-0 bg-[#049DCB] opacity-0 blur-md transition-all duration-1500 ${
                    animationStarted ? 'opacity-10' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                ></div>
                
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-56 object-cover relative z-10"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#049DCB] mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`text-center transform transition-all duration-1000 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-gray-300 mb-6">
            Let's build the future together. <strong className="text-white">Get in touch with us today!</strong>
          </p>
          
          <a 
            href="/Contact"
            className={`inline-block bg-[#2EC743] text-gray-900 font-medium px-8 py-3 rounded-md hover:bg-[#049DCB] hover:text-white transition-all duration-300 transform ${
              animationStarted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            style={{ 
              transitionDelay: '1000ms',
              animation: animationStarted ? 'pulse 2s infinite' : 'none',
              animationDelay: '1.5s'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(46, 199, 67, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(46, 199, 67, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(46, 199, 67, 0);
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

export default AboutWhyChooseUs;