import React from 'react';

const AboutProcess = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      content: [
        "Our process begins with our discovery phase. We understand that every business is unique with its own requirements, challenges, and infrastructure. Every client has their own set of systems they use and so we start our approach by firstly gaining a detailed understanding of your business and vision.",
        "Our discovery phase is kicked off with our discovery workshop where we'll invite key stakeholders to understand your \"as-is\" business model. We take this time to establish the current systems you have in place, the processes you're following, reporting mechanisms you're using, and the pain points you're experiencing with your current solutions. Once we have an understanding of your business model and processes, we'll then design your business goals as well as the challenges you're currently facing to reach your goals.",
        "Our discovery workshop is free and is a critical step as it allows us to plan and propose the best possible solution for you. This will also help us to provide you with a fixed cost based on your unique project."
      ]
    },
    {
      number: 2,
      title: "Planning & Proposal",
      content: [
        "We take the insights from our discovery process and identify which business systems can be optimised and automated. We'll put together a proposal, with our recommendations and insights to help you make an informed decision on how you would like to proceed. Our Power Platform specialists will maximise any current investments you have in Microsoft to help you make the most out of your subscription if applicable."
      ]
    },
    {
      number: 3,
      title: "Preparation",
      content: [
        "Once the proposal is accepted, and you're happy with our recommendations, we start our data mining process to collect your business data. We'll pull in data from spreadsheets, forms, databases, and other forms you may have. All the data is then organised and sanitised to clean up inaccurate or incorrect data ensuring your dataset is ready for transforming and reporting. All of this structured data is then collated into the Microsoft Dataverse, ready to use with your new power platform implementation."
      ]
    },
    {
      number: 4,
      title: "Design & Development",
      content: [
        "Our design and development teams work within an Agile (Scrum) framework to deliver our solutions. This approach allows us to develop the solution iteratively meaning you will yield business benefits quicker. New functionality is developed and released every sprint to maximise productivity.",
        "Our consultants are armed with industry-leading experience and qualifications and work with a hands-on approach to consulting. Our team will work closely with you to develop your solution and involve you throughout the design process so you can offer any suggestions and make changes as necessary.",
        "We focus on implementing robust, long-lasting solutions so you can be sure that our solutions will serve you for years to come."
      ]
    },
    {
      number: 5,
      title: "Testing & Acceptance",
      content: [
        "Upon completion of the development phase, we carry out our rigorous testing process ensuring everything is working, collecting, and reporting as it should. Once we're completely satisfied, we'll invite you to carry out your own testing of the applications before we deliver the project and the solution goes live."
      ]
    },
    {
      number: 6,
      title: "Maintenance & Support",
      content: [
        "Once your project has been delivered, we ensure your product is maintained and you are supported throughout the lifetime of your solution. We provide ongoing support and offer training to upskill your staff to make the most out of your new solution.",
        "In the rare event that anything does go wrong, we'll always be on hand, ready to get everything back to how it should be."
      ]
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Our Process</h2>
        <p className="text-center text-gray-700 mb-16">
          We've perfected our six step process to ensure your project is delivered successfully. We work closely with you throughout the process to ensure our bespoke solution is perfect for you.
        </p>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-purple-600"></div>

          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <div key={index} className="relative mb-12 md:mb-16 pl-16 md:pl-20">
              {/* Timeline circle */}
              <div className="absolute left-0 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-purple-600 bg-white flex items-center justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-purple-600"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-3">
                Step {step.number} - {step.title}
              </h3>

              <div className="text-gray-700">
                {step.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProcess;