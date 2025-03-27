import React from 'react';

const PowerPlatformSections = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Components Section */}
      <section id="components" className="mb-16">
        <h2 className="text-3xl font-bold text-[#0C2340] mb-4">Components Of The Power Platform</h2>
        <p className="text-lg text-slate-700 mb-8">
          There are 4 key components that make up the Power Platform that are powerful individually and even better
          when used together.
        </p>

        {/* Power BI Section */}
        <div id="power-bi" className="mb-16">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power BI</h3>
          <p className="text-lg text-slate-700 mb-4">
            <a href="#" className="text-blue-700">Power BI</a> is a business analytics tool that allows users to visualise and analyse data from various sources,
            enhancing decision-making processes across an organisation. The ability to integrate with over 300 built-in
            connectors enables Power BI to gather data from a wide range of systems and services, including sales,
            inventory, and customer interactions, among others. This facilitates the creation of interactive dashboards and
            reports that can visually communicate trends, insights, and patterns within the data, making it accessible and
            understandable for stakeholders at all levels of the organisation.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#0C2340] mb-3">Usefulness and Benefits</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-slate-700">Data Visualisation: Converts complex data into easy-to-understand visual formats.</li>
              <li className="text-lg text-slate-700">Real-Time Analytics: Provides real-time insights into business performance.</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img 
              src="/api/placeholder/800/500" 
              alt="Power BI dashboard on a laptop" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Power Apps Section */}
        <div id="power-apps" className="mb-16">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power Apps</h3>
          <p className="text-lg text-slate-700 mb-4">
            <a href="#" className="text-blue-700">Power Apps</a> allows you to build custom apps with little to no code. You can develop apps that meet specific
            business needs, like an app for inventory management in your convenience stores, or a customer feedback app
            for your business. These apps can be used on smartphones, tablets, and browsers, making them accessible to
            your teams on the go.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#0C2340] mb-3">Usefulness and Benefits</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-slate-700">Customisation: Tailor apps to specific business needs without extensive coding.</li>
              <li className="text-lg text-slate-700">Agility: Rapid development and deployment of solutions.</li>
            </ul>
          </div>
        </div>

        {/* Power Automate Section */}
        <div id="power-automate" className="mb-16">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power Automate</h3>
          <p className="text-lg text-slate-700 mb-4">
            <a href="#" className="text-blue-700">Power Automate</a> helps automate workflows and tasks across various applications. For instance, you can set up
            a workflow that automatically reorders stock when it falls below a certain level, or one that sends a weekly sales
            report to your team. It helps reduce manual tasks and improves your organisation's overall efficiency with less
            scope for human error and more time to focus on high-value tasks.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#0C2340] mb-3">Usefulness and Benefits</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-slate-700">Efficiency: Automates repetitive tasks, saving time and reducing errors.</li>
              <li className="text-lg text-slate-700">Workflow Optimisation: Streamlines business processes.</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img 
              src="/api/placeholder/800/500" 
              alt="Power Automate workflow on laptop and mobile" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Power Pages Section */}
        <div id="power-pages" className="mb-16">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Power Pages</h3>
          <p className="text-lg text-slate-700 mb-4">
            <a href="#" className="text-blue-700">Power Pages</a> is a component of the Power Platform focused on building and deploying low-code, secure, and
            scalable business websites. Power Pages can be used to create a professional web presence for your business.
            You can design websites for online services, customer engagement, or information sharing about your
            organisation. These websites can integrate seamlessly with your other Power Platform tools, enhancing your
            overall digital strategy.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#0C2340] mb-3">Usefulness and Benefits</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-slate-700">Web Presence: Easily create professional-looking websites.</li>
              <li className="text-lg text-slate-700">Integration: Seamlessly integrate with other Power Platform tools and data sources.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* We've removed the Key Features, Benefits, and Conclusion sections as requested */}
      
      {/* Empty sections with IDs to maintain anchor functionality */}
      <div id="key-features" className="hidden"></div>
      <div id="benefits" className="hidden"></div>
      <div id="conclusion" className="hidden"></div>

      {/* Specific anchor points for the inline links */}
      <div id="automate" className="hidden"></div>
      <div id="analyse" className="hidden"></div>
      <div id="develop" className="hidden"></div>
    </div>
  );
};

export default PowerPlatformSections;