import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TrainingConnect = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Connect With Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Image with Pattern */}
          <div className="md:w-1/2">
            <div className="w-full max-w-md mx-auto">
              <img 
                src="/ConnectImage1.svg" 
                alt="Person using mobile phone" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Text and Buttons */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-8">
              Join our vibrant community and stay updated with the latest news, updates, and exclusive offers. Connect with us on Telegram to be part of our growing network of enthusiasts and professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#linkedin" 
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md transition duration-200"
              >
                <Linkedin size={20} />
                <span>Join us on LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@techelevate.tech" 
                className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingConnect;