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
      color: "from-emerald-500 to-teal-600" 
    },
    { 
      title: "Client Satisfaction Rate", 
      value: 0, 
      target: 95, 
      isPercentage: true,
      icon: Award,
      color: "from-blue-500 to-indigo-600" 
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers = stats.map((stat, index) => {
      const increment = stat.isPercentage ? 1 : Math.ceil(stat.target / 100);
      return setInterval(() => {
        setStats(prevStats => {
          const newStats = [...prevStats];
          if (newStats[index].value >= newStats[index].target) {
            clearInterval(timers[index]);
            return prevStats;
          }
          newStats[index] = {
            ...newStats[index],
            value: Math.min(
              newStats[index].value + increment,
              newStats[index].target
            )
          };
          return newStats;
        });
      }, 20);
    });
    
    return () => timers.forEach(timer => clearInterval(timer));
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 pt-16 sm:pt-24 pb-16">
      <h1 className="text-lg font-semibold mb-3">About Us</h1>
      <h2 className="text-3xl font-semibold mb-8">Experts In Consulting & Development</h2>
      
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
        <div className="relative">
          <img 
            src="/HomeAboutPic.webp"
            alt="Modern architecture"
            className="rounded-lg w-full object-cover"
          />
          <div className="hidden lg:block mt-8">
            <a href="#">
              <button className="inline-flex items-center gap-2 bg-[#1ab188] text-white px-6 py-3 rounded-md hover:bg-[#007B5A] transition-colors">
               More About us
               <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          <p className="text-gray-800 text-lg">
            Standex is a London-based company with consulting experience for some of the world's
            best-known companies. We love helping our clients get the most from their existing licenses
            and focus on delivering the best possible solutions to suit their business requirements.
            Our solutions help clients to connect their current business processes, transform their
            reporting, and automate unnecessary manual work.
          </p>
          
          <div className="h-px bg-gray-200 w-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="relative overflow-hidden bg-[#1e3a8a] text-white rounded-xl border border-gray-100 transition-colors duration-300">
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
      
      <div className="lg:hidden mt-8">
        <a href="#">
         <button className="inline-flex items-center gap-2 bg-[#1ab188] text-white px-6 py-3 rounded-md hover:bg-[#007B5A] transition-colors">
           More About us
           <ArrowRight className="w-5 h-5" />
         </button>
        </a>
      </div>
    </div>
  );
};

export default HomeAbout;