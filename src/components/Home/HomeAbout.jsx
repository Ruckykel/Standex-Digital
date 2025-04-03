import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Award } from 'lucide-react';

const HomeAbout = () => {
  const [stats, setStats] = useState([
    { 
      title: "Increase in Efficiency", 
      value: 0, 
      target: 75, 
      isPercentage: true,
      icon: TrendingUp,
      color: "from-[#2EC743] to-emerald-600" 
    },
    { 
      title: "Client Satisfaction Rate", 
      value: 0, 
      target: 95, 
      isPercentage: true,
      icon: Award,
      color: "from-[#049DCB] to-blue-600" 
    },
    { 
      title: "Hours Saved", 
      value: 0, 
      target: 80000, 
      isPercentage: false,
      icon: Clock,
      color: "from-purple-500 to-pink-600" 
    }
  ]);
  
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const countersStarted = useRef(false);
  
  // Use a more precise intersection observer with better options
  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setAnimationStarted(true);
        
        // Only start counters once
        if (!countersStarted.current) {
          startCounters();
          countersStarted.current = true;
        }
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.25, // trigger when 25% visible
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
  
  // Separate function to handle counter animations
  const startCounters = () => {
    stats.forEach((stat, index) => {
      const increment = stat.isPercentage ? 1 : Math.ceil(stat.target / 100);
      let currentValue = 0;
      
      const intervalId = setInterval(() => {
        currentValue += increment;
        
        if (currentValue >= stat.target) {
          currentValue = stat.target;
          clearInterval(intervalId);
        }
        
        setStats(prevStats => {
          const newStats = [...prevStats];
          newStats[index] = {
            ...newStats[index],
            value: currentValue
          };
          return newStats;
        });
      }, 20);
    });
  };
  
  return (
    <div className="w-full bg-gray-900">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 pt-16 sm:pt-24 pb-16 text-gray-200"
      >
        <h1 
          className={`text-lg font-semibold mb-3 text-[#049DCB] transform transition-all duration-700 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          About Us
        </h1>
        
        <h2 
          className={`text-3xl font-semibold mb-8 text-white transform transition-all duration-700 delay-100 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Experts In Consulting & Development
        </h2>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
          <div 
            className={`relative transform transition-all duration-1000 delay-200 ${
              animationStarted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <img 
              src="/HomeAboutPic.webp"
              alt="Modern architecture"
              className="rounded-lg w-full object-cover border border-gray-800"
            />
            <div className="hidden lg:block mt-8">
              <a href="#">
                <button className="inline-flex items-center gap-2 bg-[#2EC743] text-white px-6 py-3 rounded-md hover:bg-[#25a137] transition-all duration-200 hover:scale-105 transform">
                 More About us
                 <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <p 
              className={`text-gray-300 text-lg transform transition-all duration-1000 delay-300 ${
                animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Standex is a global company with offices in Nigeria and the United Kingdom, bringing consulting experience for some of the world's
              best-known companies. We love helping our clients get the most from their existing licenses
              and focus on delivering the best possible solutions to suit their business requirements.
              Our solutions help clients to connect their current business processes, transform their
              reporting, and automate unnecessary manual work.
            </p>
            
            <div className={`h-px bg-gray-700 w-full transition-all duration-1000 delay-400 ${
              animationStarted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const delay = 500 + (index * 100);
                
                return (
                  <div 
                    key={index} 
                    className={`relative overflow-hidden bg-gray-800 text-white rounded-xl border border-gray-700 transition-all duration-700 transform ${
                      animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                    ref={el => statRefs.current[index] = el}
                  >
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${stat.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-200">{stat.title}</h3>
                        <div className={`rounded-full p-2 bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold">
                        {stat.isPercentage ? 
                          `${stat.value}%` : 
                          stat.value.toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className={`lg:hidden mt-8 transform transition-all duration-700 delay-800 ${
          animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a href="#">
           <button className="inline-flex items-center gap-2 bg-[#2EC743] text-white px-6 py-3 rounded-md hover:bg-[#25a137] transition-all duration-200 hover:scale-105 transform">
             More About us
             <ArrowRight className="w-5 h-5" />
           </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;