import React from 'react';

const CopilotHelp = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main section with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div>
            <h3 className="text-purple-800 font-medium mb-4">
              Simplify and Streamline
            </h3>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              How Can Copilot Studio Transform Your Business?
            </h2>
            
            <div className="mt-6">
              <img 
                src="/Copilot-Help.webp" 
                alt="Data center with blue digital visualization" 
                className="rounded-lg shadow-lg w-full"
              />
              {/* Note: Replace placeholder with actual image in production */}
            </div>
          </div>
          
          {/* Right column */}
          <div>
            <h3 className="text-blue-900 font-medium mb-4">
              Engaging Experiences for Customers, Clients, and Staff
            </h3>
            
            <p className="text-blue-900 mb-6">
              Copilot Studio offers a robust, low-code solution to create and deploy interactive 
              chatbots (AI Copilots) effortlessly. Leveraging its extensive set of connectors, you can 
              easily connect with various data sources and applications to deliver engaging and 
              efficient experiences.
            </p>
            
            <ul className="space-y-6">
              <li className="flex">
                <span className="text-purple-800 font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold text-blue-900">Customisable Conversations:</span>
                  <span className="text-blue-900"> Design tailored conversation flows that reflect your 
                  business processes and customer interactions.</span>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-purple-800 font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold text-blue-900">Multi-Channel Deployment:</span>
                  <span className="text-blue-900"> Deploy copilots across multiple channels to ensure 
                  they are accessible where your users are.</span>
                </div>
              </li>
              
              <li className="flex">
                <span className="text-purple-800 font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold text-blue-900">Advanced Analytics:</span>
                  <span className="text-blue-900"> Leverage insights and recommendations to continuously 
                  improve the performance and relevance of your AI copilots.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Benefits icons section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Save Resources */}
          <div className="text-center md:text-left">
            <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Save Resources</h3>
            <p className="text-blue-900">
              Reduce the need for extensive human intervention, cutting down operational costs and freeing staff for higher value work.
            </p>
          </div>
          
          {/* Respond Instantly */}
          <div className="text-center md:text-left">
            <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Respond Instantly</h3>
            <p className="text-blue-900">
              Provide immediate responses to common queries, eliminating the need to wait for human assistance, enhancing user satisfaction.
            </p>
          </div>
          
          {/* Continuous Improvement */}
          <div className="text-center md:text-left">
            <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Continuous Improvement</h3>
            <p className="text-blue-900">
              Built in analytics and feedback tools allow ongoing optimisation, ensuring chatbots evolve with your business needs.
            </p>
          </div>
          
          {/* Accessibility */}
          <div className="text-center md:text-left">
            <div className="bg-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Accessibility</h3>
            <p className="text-blue-900">
              Quickly retrieve and present relevant information from various systems, saving users the time and effort required to search for data themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopilotHelp;