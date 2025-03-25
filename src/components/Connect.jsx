import React, { useState } from 'react';

const Connect = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact-form" className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Connect With Our Team</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions about our services, facilities, or training programs? Reach out to us 
          and our team will be happy to assist you.
        </p>

        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-800 mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-800 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-800 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;