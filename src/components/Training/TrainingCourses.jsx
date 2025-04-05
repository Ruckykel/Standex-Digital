import React, { useState, useEffect, useRef } from 'react';

const TrainingCourses = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);
  
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    // Store current scroll position before disabling it
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Use setTimeout to ensure scrolling is re-enabled after modal animation
    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.overflowY = 'auto';
    }, 10);
  };

  const courses = [
    {
      id: 'cloud-ai',
      title: 'Cloud Engineering, AI & DevOps',
      description: 'Master the fundamentals of cloud architecture, artificial intelligence, and DevOps principles. Learn to design, deploy, and manage scalable cloud solutions while implementing AI technologies and streamlining workflows.',
      image: '/CloudCourse.svg',
      enrollLink: 'https://buy.stripe.com/cN29CF2Uw5dk30A6op',
      duration: '12 weeks (part-time)',
      format: 'Online',
      topics: [
        {
          title: 'Month 1: Cloud Computing Fundamentals',
          items: [
            'Understand cloud service models and deployment strategies',
            'Set up and configure cloud environments',
            'Implement security best practices for cloud resources',
            'Master virtualization and containerization concepts'
          ]
        },
        {
          title: 'Month 2: AI & Prompt Engineering',
          items: [
            'Develop skills in prompt engineering for generative AI',
            'Create and deploy AI solutions using Azure AI services',
            'Understand machine learning workflows and model training',
            'Build practical AI applications for business use cases'
          ]
        },
        {
          title: 'Month 3: DevOps & Continuous Integration',
          items: [
            'Implement CI/CD pipelines for automated software delivery',
            'Utilize infrastructure as code for consistent deployments',
            'Master version control and collaborative development workflows',
            'Learn monitoring and optimization techniques for cloud resources'
          ]
        }
      ],
      benefits: [
        'Free $500 Azure Credits for the first 30 students',
        'Hands-on labs and real-world projects',
        'UK Work Experience',
        'Preparation for industry-recognized certifications',
        'Access to cutting-edge tools and technologies'
      ],
      audience: 'IT professionals, software developers, system administrators, and technology managers looking to upskill in cloud computing, AI implementation, and modern development practices.',
      tagline: 'Master new skills with our in-depth course offering'
    },
    {
      id: 'power-platform',
      title: 'Power Platform: Low Code - No Code',
      description: 'Discover how to build professional applications without traditional coding. Learn to use Microsoft Power Platform to create efficient solutions using low-code and no-code development approaches.',
      image: '/PowerPlatformCourse.svg',
      enrollLink: 'https://buy.stripe.com/bIY1693YAcFMbx66os',
      duration: '12 weeks (part-time)',
      format: 'Online',
      topics: [
        {
          title: 'Month 1: Power Apps Foundations',
          items: [
            'Build custom business applications without coding experience',
            'Design intuitive user interfaces and responsive layouts',
            'Connect to data sources and create dynamic forms'
          ]
        },
        {
          title: 'Month 2: Power Automate Essentials',
          items: [
            'Automate repetitive tasks and complex workflows',
            'Integrate with Microsoft 365 and third-party applications',
            'Create approval processes and notification systems'
          ]
        },
        {
          title: 'Month 3: Copilot Studio & Integration',
          items: [
            'Design and deploy custom AI chatbots for your organization',
            'Integrate Copilot capabilities across your Power Platform solutions',
            'Create end-to-end business solutions combining all three technologies'
          ]
        }
      ],
      benefits: [
        'Hands-on projects based on real business scenarios',
        'Small group coaching from certified Microsoft instructors',
        'UK Work Experience',
        'Career advancement in high-demand fields',
        'Flexible learning schedule for working professionals'
      ],
      audience: 'Business professionals, analysts, administrators, and technology enthusiasts looking to enhance productivity and innovation within their organization.',
      tagline: 'Gain mastery with our well-rounded course program'
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence',
      description: 'Transform raw data into meaningful insights. Learn to use BI tools to create powerful visualizations, reports, and dashboards that drive informed business decisions.',
      image: '/BusinessIntelligenceCourse.svg',
      enrollLink: 'https://buy.stripe.com/bIYaGJeDe0X47gQ5kn',
      duration: '12 weeks (part-time)',
      format: 'Online',
      topics: [
        {
          title: 'Month 1: Excel for Data Analysis',
          items: [
            'Master advanced data analysis techniques',
            'Create dynamic pivot tables and dashboards',
            'Implement complex formulas and functions',
            'Develop efficient data cleaning and preparation methods',
            'Build professional charts and visualization tools'
          ]
        },
        {
          title: 'Month 2: SQL Fundamentals',
          items: [
            'Write effective data queries for information retrieval',
            'Perform data aggregation and analysis',
            'Implement data manipulation techniques',
            'Understand database management principles',
            'Master table joins and relationship mapping'
          ]
        },
        {
          title: 'Month 3: Power BI Development',
          items: [
            'Design comprehensive data models',
            'Create interactive dashboards and reports',
            'Implement real-time reporting solutions',
            'Master data transformation and ETL processes',
            'Develop advanced visualizations for complex datasets'
          ]
        }
      ],
      benefits: [
        'Work with real datasets across multiple industries',
        'Build a portfolio of business intelligence projects',
        'UK Work Experience',
        'Learn industry-standard tools and methodologies',
        'Develop skills for high-demand BI positions'
      ],
      audience: 'Business analysts, data professionals, managers, and decision-makers looking to enhance their data analysis capabilities and deliver actionable insights within their organizations.',
      tagline: 'Fuel your professional growth with our all-encompassing course'
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
              <CourseCard course={course} openModal={openModal} />
            </div>
          ))}
        </div>
      </div>

      {/* Course Brochure Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">{selectedCourse.title} - Course Overview</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {/* Course Header */}
              <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="sm:w-1/4">
                  <div className="bg-[#049DCB] rounded-full p-3 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="sm:w-3/4">
                  <p className="text-gray-300 text-sm mb-1">StandEx Digital - Tech Elevate</p>
                  <h4 className="text-white text-lg font-semibold">{selectedCourse.tagline}</h4>
                </div>
              </div>
              
              {/* Course Duration */}
              <div className="mb-6 bg-gray-700 p-4 rounded-lg flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-[#2EC743] font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Duration: {selectedCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[#049DCB] font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Format: {selectedCourse.format}</span>
                </div>
              </div>
              
              {/* Course Content */}
              <div className="mb-6">
                <h5 className="text-white text-lg font-semibold mb-3">Course Content</h5>
                <div className="space-y-4">
                  {selectedCourse.topics.map((topic, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                      <h6 className="text-[#049DCB] font-medium mb-2">{topic.title}</h6>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        {topic.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Who Should Attend */}
              <div className="mb-6">
                <h5 className="text-white text-lg font-semibold mb-3">Who Should Attend</h5>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300">{selectedCourse.audience}</p>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="mb-6">
                <h5 className="text-white text-lg font-semibold mb-3">Benefits</h5>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    {selectedCourse.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Microsoft Partner */}
              <div className="mb-6 bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="32" height="32">
                      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                      <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
                      <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
                      <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Microsoft Learning Partner</p>
                  </div>
                </div>
              </div>
              
              {/* Enroll Button */}
              <a 
                href={selectedCourse.enrollLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#049DCB] hover:bg-[#038ab4] text-white px-4 py-4 rounded-lg transition duration-150 text-center font-semibold"
              >
                Enroll Now →
              </a>

              {/* Contact */}
              <div className="mt-6 text-center text-gray-400 text-sm">
                <p>Have questions? Contact us at:</p>
                <p className="text-[#2EC743]">techelevate@standexdigital.tech | +447918262629</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CourseCard = ({ course, openModal }) => {
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
          <a 
            href={course.enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#049DCB] hover:bg-[#038ab4] text-white px-4 py-3 rounded transition duration-150 text-center"
          >
            Enroll Now →
          </a>
          <button 
            onClick={() => openModal(course)}
            className="block w-full bg-[#2EC743] hover:bg-[#25a936] text-white px-4 py-3 rounded transition duration-150 text-center"
          >
            View Brochure →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourses;