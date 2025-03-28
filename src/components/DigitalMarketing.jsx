import React from 'react';

const DigitalMarketing = () => {
  return (
    <section id="digitalMarketing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Digital Marketing
          </h2>
          <p className="text-xl text-gray-600">
            Amplify your online presence and drive measurable results with data-driven strategies tailored to your business goals.
          </p>
        </div>

        {/* Digital Marketing Banner */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src="/images/digital-marketing-banner.jpg" 
            alt="Digital marketing strategy visualization" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Solution Overview Section */}
        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800">Solution Overview</h3>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Standex Digital's comprehensive Digital Marketing solutions are designed to elevate your brand visibility, engage your target audience, and drive conversions. We take a strategic, data-driven approach to digital marketing, combining creative expertise with analytical precision. From search engine optimization and content marketing to social media management and pay-per-click advertising, our integrated strategies deliver measurable ROI. We continually analyze performance metrics to refine campaigns, ensuring your marketing investments yield maximum results. Partner with Standex Digital to transform your online presence and turn digital channels into powerful growth engines for your business.
          </p>
        </div>

        {/* Two Column Features and Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Search Engine Optimization (SEO)</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Content Marketing & Strategy</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Social Media Marketing</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Pay-Per-Click (PPC) Advertising</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Key Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Increased Brand Visibility</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Higher Quality Lead Generation</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Measurable ROI & Performance</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Enhanced Customer Engagement</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-b border-gray-200 my-16"></div>
      </div>
    </section>
  );
};

export default DigitalMarketing;