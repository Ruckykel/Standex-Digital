import React from 'react';

const PowerBiHelp = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-purple-900 font-medium mb-3">How Our Power BI Services Can Help You</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 max-w-3xl mx-auto leading-tight">
            Empower Your Team with Data
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Benefit 1 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Connect Your Data</h3>
            <p className="text-slate-700">
              We can help you embrace the power of automation to streamline information collation 
              across your organisation, making your report generation quicker and more efficient.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Interactive Dashboards</h3>
            <p className="text-slate-700">
              We'll improve team collaboration to help your organisation easily make decisions by 
              transforming complex data into clear, visually engaging dashboards.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Real-time Insights</h3>
            <p className="text-slate-700">
              Implement centralised reporting systems that offer a single, live version of each report, 
              ensuring that everyone in your organisation always has access to the most current and 
              accurate data.
            </p>
          </div>
        </div>

        {/* Dashboard Example */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="rounded overflow-hidden">
            <img 
              src="/api/placeholder/1200/400" 
              alt="Power BI Dashboard Example" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerBiHelp;