import React, { useState, useEffect, useRef } from 'react';

const TrainingCourses = () => {
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

  const courses = [
    {
      id: 'cloud-ai',
      title: 'Cloud Engineering, AI & DevOps',
      description: 'Master the fundamentals of cloud architecture, artificial intelligence, and DevOps principles. Learn to design, deploy, and manage scalable cloud solutions while implementing AI technologies and streamlining workflows.',
      image: '/CloudCourse.svg',
    },
    {
      id: 'power-platform',
      title: 'Power Platform: Low Code - No Code',
      description: 'Discover how to build professional applications without traditional coding. Learn to use Microsoft Power Platform to create efficient solutions using low-code and no-code development approaches.',
      image: '/PowerPlatformCourse.svg',
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Transform raw data into meaningful insights. Learn to use BI tools to create powerful visualizations, reports, and dashboards that drive informed business decisions.',
      image: '/BusinessIntelligenceCourse.svg',
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-3xl font-bold text-center text-white mb-12 transform transition-all duration-700 ${
            animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Our Courses
        </h2>

        <div className="space-y-12">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`transform transition-all duration-700 ${
                animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${100 + index * 150}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-[#2EC743] transition-colors duration-300">
      {/* Course Image/Flyer (Left Side) */}
      <div className="md:w-1/2 relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Description and Call to Action (Right Side) */}
      <div className="md:w-1/2 p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-4">
          {course.title}
        </h3>
        
        <p className="text-gray-300 mb-8">
          {course.description}
        </p>
        
        <div className="mt-auto space-y-3">
          <button className="w-full bg-[#049DCB] hover:bg-[#038ab4] text-white px-4 py-3 rounded transition duration-150">
            Enroll Now →
          </button>
          <button className="w-full bg-[#2EC743] hover:bg-[#25a936] text-white px-4 py-3 rounded transition duration-150">
            Brochure →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourses;