import React from 'react';

const TrainingCourses = () => {
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Courses
        </h2>

        <div className="space-y-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-8">
          {course.description}
        </p>
        
        <div className="mt-auto space-y-3">
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded transition duration-150">
            Enroll Now →
          </button>
          <button className="w-full bg-blue-400 hover:bg-blue-500 text-white px-4 py-3 rounded transition duration-150">
            Brochure →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourses;