import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const PowerPlatformCourse = () => {
  const course = {
    id: 'power-platform-bi',
    title: 'Standex Certified Power Platform & Business Intelligence Practitioner (SCPBE)',
    description: 'End-to-end Power Platform and BI mastery: Power Apps, Power Automate, Power BI, Copilot Studio, SQL, Dataverse, data modelling, integration, and full enterprise solution delivery.',
    image: '/PowerPlatform.png',
    enrollLink: 'https://buy.stripe.com/bIY1693YAcFMbx66os',
    duration: '12 weeks (part-time)',
    format: 'Online',
    topics: [
      {
        title: 'Module 1: Power Platform, Data & SQL Foundations',
        items: [
          'Power Platform ecosystem: M365, Azure, Power Platform; roles of Power Apps, Power Automate, Power BI, Copilot Studio; architecture, licensing, and environments',
          'General data concepts: transactional vs analytical, structured/semi/unstructured, OLTP vs OLAP, data quality/integrity/governance, normalisation vs denormalisation (conceptual)',
          'SQL fundamentals: relational schemas, PK/FK/constraints; SELECT, WHERE, JOIN, GROUP BY; subqueries and CTEs; window functions; indexing and performance basics; writing readable SQL',
          'Data storage in Power Platform context: Dataverse fundamentals and table design; when to use Dataverse vs SQL vs SharePoint; connecting SQL to Power Apps and Power BI; security/access/compliance basics'
        ]
      },
      {
        title: 'Module 2: Power Apps & Power Automate – Data-Driven Applications',
        items: [
          'Power Apps (canvas & model-driven): design and architecture; screens, forms, galleries, components; Power FX deep dive (Patch, Collect, LookUp, Filter, ForAll); delegation and data limits; security; offline/responsive design and publishing',
          'Power Automate: automated/instant/scheduled/business process flows; using SQL and Dataverse as triggers/actions; approval patterns; error handling with scopes, retries, exception patterns; Power Automate Desktop for legacy systems',
          'Data & integration patterns: app-to-flow and flow-to-data patterns; validations, transactions, concurrency; performance tuning with large datasets; governance, DLP policies, and ALM'
        ]
      },
      {
        title: 'Module 3: Power BI, Analytics & Business Intelligence',
        items: [
          'BI fundamentals: KPIs, metrics, dimensions, measures; reporting vs dashboards vs analytics; designing data models for decision-making',
          'Power BI data modelling & SQL for analytics: star schema and dimensional modelling; fact/dimension tables; import vs DirectQuery vs composite; using SQL views for analytics; model performance optimisation',
          'Power BI development & DAX: Power Query ETL best practices; DAX fundamentals and evaluation context; time intelligence patterns; performance optimisation',
          'Power Platform BI integration & capstone: Dataverse → Power BI integration; embedding Power BI in Power Apps & Teams; Row-Level Security (RLS); end-to-end capstone (SQL + Dataverse backend, Power App front-end, Power Automate workflows, Power BI analytics, documentation and presentation)'
        ]
      }
    ],
    benefits: [
      'Certification: Standex Certified Power Platform & BI Engineer (SCPBE)',
      'Portfolio-ready capstone covering apps, automation, BI, and copilots',
      'Data modelling depth with SQL, Dataverse, and Power BI',
      'Enterprise-grade ALM, governance, and security practices',
      'Career outcomes across app development, automation, and analytics'
    ],
    audience: 'Business and technical professionals who need to design, build, automate, and analyze end-to-end solutions on the Microsoft Power Platform with strong BI foundations.',
    tagline: 'Deliver production-ready Power Platform and BI solutions end to end'
  };

  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <div className="bg-gray-900 pt-24 pb-16 px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link 
              to="/Training"
              className="inline-flex items-center gap-2 text-[#049DCB] hover:text-[#038ab4] transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Training Courses</span>
            </Link>
          </div>

          {/* Course Header */}
          <div className="mb-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="sm:w-1/4">
              <div className="bg-[#049DCB] rounded-full p-4 inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <div className="sm:w-3/4 text-center sm:text-left">
              <p className="text-gray-300 text-sm mb-2">StandEx Digital - Standex Digital Training</p>
              <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
              <h2 className="text-xl text-[#049DCB]">{course.tagline}</h2>
            </div>
          </div>

          {/* Course Image */}
          <div className="mb-8">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Course Description */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">{course.description}</p>
          </div>
          
          {/* Course Duration */}
          <div className="mb-8 bg-gray-800 p-6 rounded-lg flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3 text-[#2EC743] font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-3 text-[#049DCB] font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Format: {course.format}</span>
            </div>
          </div>
          
          {/* Course Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Course Content</h3>
            <div className="space-y-6">
              {course.topics.map((topic, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-[#049DCB] font-semibold text-lg mb-3">{topic.title}</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    {topic.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Who Should Attend */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Who Should Attend</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 text-lg">{course.audience}</p>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Benefits</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
                {course.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Microsoft Partner */}
          <div className="mb-8 bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="40" height="40">
                  <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                  <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
                  <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
                  <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
                </svg>
              </div>
              <div>
                <p className="text-white text-lg font-semibold">Microsoft Learning Partner</p>
                <p className="text-gray-300">Official Microsoft training and certification preparation</p>
              </div>
            </div>
          </div>
          
          {/* Enroll Button */}
          <div className="mb-8">
            <a 
              href={course.enrollLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#049DCB] hover:bg-[#038ab4] text-white px-8 py-4 rounded-lg transition duration-150 text-center font-semibold text-lg"
            >
              Enroll Now →
            </a>
          </div>

          {/* Contact */}
          <div className="text-center text-gray-400">
            <p className="text-lg mb-2">Have questions? Contact us at:</p>
            <p className="text-[#2EC743] text-lg font-semibold">support@standexdigital.com | +447918262629</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PowerPlatformCourse; 