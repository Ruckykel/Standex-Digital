import React from 'react';

const AutomateAbility = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            What Can Power Automate Do?
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Create, run, and check automated workflows from anywhere with Power Automate's mobile app - even when out of the office.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Capability 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Automatically save emails and attachements
            </h3>
            <p className="text-gray-700 px-4">
              Automatically save email attachments to a specified cloud storage or system. This reduces manual effort, ensures important documents are systematically stored, and enhances data accessibility and organisation.
            </p>
          </div>
          
          {/* Capability 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Manage holiday requests & approval
            </h3>
            <p className="text-gray-700 px-4">
              Streamline the process of managing holiday requests and approvals. Power Automate can automate request routing, notifications, and record-keeping, reducing administrative workload and improving the efficiency of leave management.
            </p>
          </div>
          
          {/* Capability 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Send Reminders for Overdue Tasks
            </h3>
            <p className="text-gray-700 px-4">
              Set up automatic reminders for overdue tasks using Power Automate. This ensures that critical deadlines are met and helps in maintaining project timelines, enhancing overall productivity and accountability within teams.
            </p>
          </div>
          
          {/* Capability 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Automation of Billing and Expense Invoices
            </h3>
            <p className="text-gray-700 px-4">
              Automate the processing of billing and expense invoices. Power Automate can be used to trigger workflows for invoice generation, approval, and payment processing, significantly reducing manual errors and speeding up the financial operations.
            </p>
          </div>
          
          {/* Capability 5 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Receive an Email When a Power BI Alert is Triggered
            </h3>
            <p className="text-gray-700 px-4">
              Configure Power Automate to send instant email notifications upon triggering of specific Power BI alerts. This ensures real-time awareness of crucial data insights or anomalies, enabling prompt action and decision-making.
            </p>
          </div>
          
          {/* Capability 6 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Send Notifications for Various Events
            </h3>
            <p className="text-gray-700 px-4">
              Utilise Power Automate to send custom notifications for various events, such as system updates, meeting reminders, or workflow completions. This enhances communication efficiency and ensures that relevant stakeholders are always informed.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AutomateAbility;