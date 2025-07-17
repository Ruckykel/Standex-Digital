import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
          <a 
            href={course.enrollLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#049DCB] hover:bg-[#038ab4] text-white px-4 py-3 rounded transition duration-150 text-center"
          >
            Enroll Now →
          </a>
          <Link 
            to={`/courses/${course.id}`}
            className="block w-full bg-[#2EC743] hover:bg-[#25a936] text-white px-4 py-3 rounded transition duration-150 text-center"
          >
            View Course Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourses;