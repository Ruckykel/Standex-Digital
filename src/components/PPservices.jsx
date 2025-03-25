import React from 'react';

const PPservices = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-purple-700 font-medium mb-2">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0C2340] max-w-4xl mx-auto leading-tight">
          Comprehensive Business Solutions with the Power Platform
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Power Apps Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <img src="/PowerApps.svg" alt="Power Apps" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power Apps</h3>
          <p className="text-slate-700 mb-6 flex-grow">
            Transform your business with cost-effective, custom applications that are fully responsive across all your platforms and devices.
          </p>
          <a href="#" className="text-[#0C2340] font-medium hover:text-purple-700 transition-colors">
            Explore Power Apps Services
          </a>
        </div>

        {/* Power Automate Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <img src="/PowerAutomate.svg" alt="Power Automate" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power Automate</h3>
          <p className="text-slate-700 mb-6 flex-grow">
            Save time, reduce costs, and increase your business efficiency by automating repetitive and manual processes.
          </p>
          <a href="#" className="text-[#0C2340] font-medium hover:text-purple-700 transition-colors">
            Explore Power Automate Services
          </a>
        </div>

        {/* Power BI Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <img src="/PowerBi.svg" alt="Power BI" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power BI</h3>
          <p className="text-slate-700 mb-6 flex-grow">
            Visualise your raw data in custom dashboards and insightful reports and make decisions based on real-time data.
          </p>
          <a href="#" className="text-[#0C2340] font-medium hover:text-purple-700 transition-colors">
            Explore Power BI Services
          </a>
        </div>

        {/* Power Pages Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <img src="/PowerPages.svg" alt="Power Pages" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power Pages</h3>
          <p className="text-slate-700 mb-6 flex-grow">
            Enhance engagement, streamline operations, and provide easy access to your services with interactive web portals and websites.
          </p>
          <a href="#" className="text-[#0C2340] font-medium hover:text-purple-700 transition-colors">
            Explore Power Pages Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default PPservices;