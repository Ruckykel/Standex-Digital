import React from 'react';

const PowerBiAbility = () => {
  // Capability data
  const capabilities = [
    {
      id: 'sales',
      icon: (
        <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <path d="M2 20h20"></path>
        </svg>
      ),
      title: 'Sales Performance Analysis',
      description: 'Get in-depth analysis of sales data, allowing your business to track performance metrics, identify trends, and uncover insights about sales processes.'
    },
    {
      id: 'customer',
      icon: (
        <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: 'Customer Behaviour Insights',
      description: 'Analyse purchasing patterns, customer demographics, and engagement data to tailor marketing campaigns, improve product offerings, and enhance customer experience.'
    },
    {
      id: 'financial',
      icon: (
        <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: 'Financial Reporting and Analysis',
      description: 'Create interactive financial reports and dashboards to monitor key financial metrics. Track budget vs actuals, and make informed financial decisions based on real-time data.'
    },
    {
      id: 'supply',
      icon: (
        <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      title: 'Supply Chain and Inventory Management',
      description: 'Analyse inventory levels, supplier performance, and logistics data to optimise inventory management, reduce costs, and improve supply chain efficiency.'
    },
    {
      id: 'hr',
      icon: (
        <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="3" height="10"></rect>
          <rect x="8" y="5" width="3" height="12"></rect>
          <rect x="14" y="3" width="3" height="14"></rect>
          <rect x="20" y="8" width="3" height="9"></rect>
        </svg>
      ),
      title: 'HR Analytics and Workforce Planning',
      description: 'Analyse employee performance, track recruitment metrics, and understand workforce demographics to inform talent management strategies and enhance workforce planning.'
    },
    {
      id: 'operations',
      icon: (
        <svg className="w-10 h-10 text-purple-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
      title: 'Operational Efficiency and Process Optimisation',
      description: 'Analyse workflow data, identify bottlenecks, and track key performance indicators (KPIs) to streamline operations and enhance process efficiency across your organisation.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6">
            What Can Power BI Do?
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Power BI transforms the way you view and interact with your business data.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.id} className="text-center">
              <div className="flex justify-center mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {capability.title}
              </h3>
              <p className="text-slate-700">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerBiAbility;