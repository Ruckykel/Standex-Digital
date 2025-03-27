import React from 'react';

const TableOfContents = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Table of Contents Header */}
      <h2 className="text-4xl font-bold text-[#0C2340] text-center mb-8">Table of Contents</h2>
      
      {/* TOC Links */}
      <div className="mb-12">
        <ol className="list-decimal list-inside space-y-2 text-lg text-[#0C2340]">
          <li className="font-medium">
            <a href="#components" className="hover:text-blue-700">Components Of The Power Platform</a>
            <ol className="list-decimal list-inside ml-8 space-y-2 mt-2">
              <li className="text-base">
                <a href="#power-bi" className="hover:text-blue-700">Power BI</a>
              </li>
              <li className="text-base">
                <a href="#power-apps" className="hover:text-blue-700">Power Apps</a>
              </li>
              <li className="text-base">
                <a href="#power-automate" className="hover:text-blue-700">Power Automate</a>
              </li>
              <li className="text-base">
                <a href="#power-pages" className="hover:text-blue-700">Power Pages</a>
              </li>
            </ol>
          </li>
          <li className="font-medium mt-4">
            <a href="#key-features" className="hover:text-blue-700">Key Features Of The Power Platform</a>
          </li>
          <li className="font-medium">
            <a href="#benefits" className="hover:text-blue-700">Benefits Of The Power Platform</a>
          </li>
          <li className="font-medium">
            <a href="#conclusion" className="hover:text-blue-700">Conclusion</a>
          </li>
        </ol>
      </div>
      
      {/* Description Text */}
      <div className="text-lg text-slate-700 mb-12">
        <p className="mb-4">
          Microsoft Power Platform is a suite of low-code business solutions/tools developed by Microsoft to help
          businesses <a href="#automate" className="text-blue-700 font-medium">automate processes</a>, <a href="#analyse" className="text-blue-700 font-medium">analyse data</a>, and <a href="#develop" className="text-blue-700 font-medium">develop custom applications</a>. Businesses can streamline
          their operations using the Power Platform, to reduce manual labour, enhance data-driven decision-making, and
          accelerate business growth.
        </p>
      </div>
      
      {/* Power Platform Icons */}
      <div className="flex flex-wrap justify-center gap-12 mb-8">
        <div className="flex flex-col items-center">
          <img src="/PowerApps.svg" alt="Power Apps" className="w-32 h-32" />
          <span className="mt-2 text-center">Power Apps</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/PowerPages.svg" alt="Power Pages" className="w-32 h-32" />
          <span className="mt-2 text-center">Power Pages</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/PowerAutomate.svg" alt="Power Automate" className="w-32 h-32" />
          <span className="mt-2 text-center">Power Automate</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/PowerBi.svg" alt="Power BI" className="w-32 h-32" />
          <span className="mt-2 text-center">Power BI</span>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;