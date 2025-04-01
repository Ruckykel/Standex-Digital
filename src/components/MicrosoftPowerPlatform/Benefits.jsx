import React from 'react';

const Benefits = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Benefits Section */}
      <section id="benefits" className="mb-16">
        <h2 className="text-3xl font-bold text-[#0C2340] mb-4">Benefits Of The Power Platform</h2>
        <p className="text-lg text-slate-700 mb-8">
          The Microsoft Power Platform offers a comprehensive, flexible, and scalable solution that can address the
          diverse and evolving needs of your business. Its capabilities in automation, data analysis, custom app
          development, and integration make it a great choice to enhance operational efficiency, decision-making, and
          customer service.
        </p>

        {/* Streamlining Operations */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Streamlining Operations</h3>
          <p className="text-lg text-slate-700 mb-6">
            Power Automate can significantly reduce the time spent on manual tasks such as data entry, report generation,
            and inventory management by automating these processes. With Power BI, you can consolidate data from all
            your organisations teams, enabling efficient monitoring, analysis, and reporting. This can lead to better decision-
            making based on real-time insights.
          </p>
        </div>

        {/* Customised Solutions */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Customised Solutions</h3>
          <p className="text-lg text-slate-700 mb-6">
            With Power Apps, you can develop custom applications tailored to the unique needs of your business, such as
            specific inventory tracking, employee management, or customer feedback systems. The platform's ability to
            integrate with various Microsoft products and other third-party applications means you can create a unified
            system that connects all aspects of your business.
          </p>
        </div>

        {/* Cost and Time Efficiency */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Cost and Time Efficiency</h3>
          <p className="text-lg text-slate-700 mb-6">
            Automating routine tasks and optimising processes can lead to cost savings. The efficiencies gained from using
            the Power Platform can free up your and your employees' time to focus on more strategic tasks.
          </p>
        </div>

        {/* Scalability and Flexibility */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Scalability and Flexibility</h3>
          <p className="text-lg text-slate-700 mb-6">
            As your business grows, the Power Platform can scale with you, handling increased data and more complex
            processes. The ability to create custom solutions means that as your business needs change, your applications
            and workflows can evolve too.
          </p>
        </div>

        {/* Security and Compliance */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Security and Compliance</h3>
          <p className="text-lg text-slate-700 mb-6">
            Being a Microsoft product, the Power Platform offers robust security features, ensuring your business data is
            protected. The platform adheres to various compliance standards, which is crucial if you handle sensitive
            customer data.
          </p>
        </div>

        {/* Training and Accessibility */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Training and Accessibility</h3>
          <p className="text-lg text-slate-700 mb-6">
            The Power Platform is designed to be accessible to non-technical users, which means your team can quickly
            learn to use it. If required, there are great <a href="#" className="text-blue-700">Power Platform consultancy specialists</a> that can provide extensive
            training, making it easier for your team to get up to speed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Benefits;