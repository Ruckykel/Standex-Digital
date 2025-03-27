import React from 'react';

const KeyFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Key Features Section */}
      <section id="key-features" className="mb-16">
        <h2 className="text-3xl font-bold text-[#0C2340] mb-4">Key Features Of The Power Platform</h2>
        <p className="text-lg text-slate-700 mb-8">
          The key strength of the Power Platform lies in its seamless integration with existing Microsoft products like
          Office 365, Dynamics 365, and Azure, as well as its capability to connect with a wide range of external
          data sources.
        </p>

        {/* Seamless Integrations Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Seamless Integrations with existing Microsoft Products</h3>
          <p className="text-lg text-slate-700 mb-4">
            The key strength of the Power Platform is its ability to integrate its various components with each other, as well
            as with other Microsoft products like Office 365, Dynamics 365, and Azure.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            The integration of Power Platform with other Microsoft products allows you to create a more cohesive and
            efficient IT ecosystem. It enables you to automate workflows, gain deeper insights into your data, and create
            custom solutions that work seamlessly with your existing Microsoft software, thereby enhancing overall
            productivity and operational efficiency.
          </p>
        </div>

        {/* External Data Sources Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Integrates with external data sources</h3>
          <p className="text-lg text-slate-700 mb-4">
            For systems that are not directly integrated, Power Platform offers the ability to connect via APIs and custom
            connectors. This means that even if you're using a Microsoft product that doesn't have built-in integration, you
            can still connect it to your Power Platform applications.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            The Power Platform boasts over 400 pre-built connectors for various services and applications. These
            connectors allow you to integrate with popular cloud services, Microsoft products (like Office 365, Dynamics
            365), and other third-party services (like Salesforce, Twitter, and Google services).
          </p>
          <p className="text-lg text-slate-700 mb-6">
            If a specific connector you need is not available, the Power Platform offers the ability to create custom
            connectors. This allows you to connect to any service that has a RESTful API. Custom connectors enable you to
            extend the platform's capabilities to virtually any external data source or service.
          </p>
        </div>

        {/* Low-Code Development Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Low-Code Development Environment:</h3>
          <p className="text-lg text-slate-700 mb-4">
            The platform is designed to be accessible to users with varying levels of technical expertise. One of the main
            advantages of the Microsoft Power Platform is its accessibility to non-technical users, enabling them to create
            apps, automate workflows, and analyse data with minimal coding. To support this, Microsoft and various
            other providers offer a range of training resources and courses, catering to different levels of expertise and
            specific needs.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            While the low-code nature of the Microsoft Power Platform makes it accessible to non-technical users, if you
            need to develop complex applications or workflows that go beyond the basic templates and functions, a <a href="#" className="text-blue-700">Power
            Platform Consultancy</a> can help. We can help design sophisticated solutions that are tailored to your specific
            business needs, ensuring they are robust, efficient, and scalable. We can also provide <a href="#" className="text-blue-700">targeted training and
            support</a>, helping your team to better understand and utilise the Power Platform, thereby fostering a more self-
            sufficient approach in the long run.
          </p>
        </div>

        {/* Dataverse Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0C2340] mb-4">The Dataverse</h3>
          <p className="text-lg text-slate-700 mb-4">
            The primary storage system for data within the Power Platform is the Dataverse (CDS). It's a cloud-based
            storage space that allows you to securely store and manage data used by business applications. CDS is built on
            Azure, Microsoft's cloud computing service, and integrates data from various sources into a unified format.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            Since Power Platform is built on Azure, it inherits Azure's robust security measures, including encryption,
            network security, and identity management. Microsoft is known for its commitment to compliance and privacy.
            The Power Platform adheres to various industry standards and regulations, which is particularly important if you
            handle sensitive customer data or operate in regions with strict data protection laws.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            The Power Platform can also connect to external data sources. This means that you can keep your data where it
            currently resides and integrate this data with your Power Platform applications.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-bold text-[#0C2340] mb-3">Advantages of This Approach:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg text-slate-700">
                You can choose what data to integrate and how to use it within the Power Platform,
                providing flexibility in managing your business processes.
              </li>
              <li className="text-lg text-slate-700">
                This approach can easily scale with your business, allowing you to add more data
                sources or integrate additional services as needed.
              </li>
              <li className="text-lg text-slate-700">
                By keeping data in its original sources, you reduce the complexity and potential risks
                associated with moving large amounts of data to a new location.
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/api/placeholder/800/500" 
              alt="Cloud computing and data integration concept" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyFeatures;