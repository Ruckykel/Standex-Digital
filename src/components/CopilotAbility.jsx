import React from 'react';

const CopilotAbility = () => {
  // Define the capabilities data
  const capabilities = [
    {
      id: 'first-line',
      icon: '❓',
      title: 'First Line Support',
      description: 'Deploy AI copilots to handle customer inquiries, provide support, and streamline service delivery. These copilots can automate ticket creation in platforms like ServiceNow and autolog unresolved queries for further review.'
    },
    {
      id: 'employee-onboarding',
      icon: '👤',
      title: 'Employee Onboarding & HR Support',
      description: 'Use AI copilots to guide new employees through the onboarding process, answer HR-related questions, and provide instant support, reducing the strain on human resources.'
    },
    {
      id: 'it-support',
      icon: '💼',
      title: 'IT Support',
      description: 'Enhance IT helpdesk services with AI copilots capable of troubleshooting common technical issues and escalating complex problems. These copilots can handle repetitive tasks, freeing up IT staff for more critical issues.'
    },
    {
      id: 'data-retrieval',
      icon: '📊',
      title: 'Data Retrieval',
      description: 'Configure AI copilots to retrieve and present data efficiently, facilitating faster decision-making and reporting. This can be particularly useful for sales teams needing quick access to internal processes and data sources.'
    },
    {
      id: 'faq-knowledge',
      icon: '🎓',
      title: 'FAQ and Knowledge Base Access',
      description: 'Offer instant access to FAQs and knowledge bases through virtual agents. These bots can answer common queries, provide information from your knowledge base, and improve customer service efficiency.'
    },
    {
      id: 'policy-compliance',
      icon: '🔗',
      title: 'Policy Compliance',
      description: 'Ensure compliance with company policies by using AI copilots to guide employees through complex regulatory requirements and company procedures, particularly useful in highly regulated industries such as insurance and finance.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            What Can Copilot Chatbots Do?
          </h2>
          
          <p className="text-blue-900 max-w-4xl mx-auto mb-12">
            Microsoft Copilot Studio offers a versatile platform that can transform how businesses interact with customers and streamline internal processes. 
            From handling customer inquiries to automating data retrieval, Copilot Studio's AI capabilities provide a wide range of applications tailored to meet diverse business needs.
          </p>
        </div>
        
        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.id} className="text-center">
              {/* Icon */}
              <div className="text-purple-800 text-4xl mb-4 flex justify-center">
                <span>{capability.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {capability.title}
              </h3>
              
              {/* Description */}
              <p className="text-blue-800">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopilotAbility;