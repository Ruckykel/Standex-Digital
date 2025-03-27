import React from 'react';

const PowerPagesAbility = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">What Can Power Pages Do?</h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Power Pages offers an innovative platform for creating sophisticated websites and web apps with ease. It enables seamless integration, interactive features, and secure data 
          access, tailored to your specific business requirements. Explore some example use cases below:
        </p>
      </div>

      {/* Use Cases Grid - Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* E-Commerce & Ordering */}
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">E-Commerce & Ordering</h3>
          <p className="text-gray-700">
            Design custom e-commerce and ordering platforms. Power Pages facilitates the creation of user-friendly online stores, order management systems, and integrated payment gateways, providing a seamless shopping experience for your customers.
          </p>
        </div>

        {/* Membership Management & Event Registration */}
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Membership Management & Event Registration</h3>
          <p className="text-gray-700">
            Create dynamic sites for membership management and event registration. Power Pages allows for easy sign-ups, membership tracking, event listings, and online registration, simplifying the management of events and member databases.
          </p>
        </div>

        {/* Reporting Access for External Users */}
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Reporting Access for External Users</h3>
          <p className="text-gray-700">
            Offer secure and customised reporting access to external users. With Power Pages, you can create portals that allow customers or partners to view and interact with relevant reports and data, enhancing transparency and collaboration.
          </p>
        </div>
      </div>

      {/* Use Cases Grid - Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Survey and Feedback Collection */}
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Survey and Feedback Collection</h3>
          <p className="text-gray-700">
            Develop interactive platforms for surveys and feedback collection. Utilise Power Pages to build engaging and responsive forms and surveys, making it easier to gather and analyse feedback from customers or employees.
          </p>
        </div>

        {/* Student Portals */}
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Student Portals</h3>
          <p className="text-gray-700">
            Build comprehensive student portals. Power Pages can be used to create educational portals that provide students with access to course materials, schedules, grades, and other resources, enriching the learning experience.
          </p>
        </div>

        {/* Vendor and Supply Collaboration */}
        <div className="text-center flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Vendor and Supply Collaboration</h3>
          <p className="text-gray-700">
            Facilitate vendor and supply chain collaboration through dedicated web apps. Power Pages enables the creation of portals for inventory management, order tracking, and supplier communication, streamlining supply chain processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerPagesAbility;