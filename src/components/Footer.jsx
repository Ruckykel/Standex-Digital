import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#002642] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Icons */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <img src="/logo.svg" alt="Standex Logo" className="h-10" />
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-12" />
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-300">Careers</a></li>
              <li><a href="/case-studies" className="hover:text-blue-300">Case Studies</a></li>
              <li><a href="/events" className="hover:text-blue-300">Events</a></li>
              <li><a href="/blog" className="hover:text-blue-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="/services/microsoft-power-platform" className="hover:text-blue-300">Microsoft Power Platform</a></li>
              <li><a href="/services/microsoft-power-apps" className="hover:text-blue-300">Microsoft Power Apps</a></li>
              <li><a href="/services/microsoft-power-automate" className="hover:text-blue-300">Microsoft Power Automate</a></li>
              <li><a href="/services/microsoft-power-bi" className="hover:text-blue-300">Microsoft Power BI</a></li>
              <li><a href="/services/microsoft-power-pages" className="hover:text-blue-300">Microsoft Power Pages</a></li>
              <li><a href="/services/microsoft-fabric" className="hover:text-blue-300">Microsoft Fabric</a></li>
              <li><a href="/services/copilot-studio" className="hover:text-blue-300">Copilot Studio</a></li>
              <li><a href="/services/centre-of-excellence" className="hover:text-blue-300">Centre of Excellence</a></li>
            </ul>
          </div>
          
          {/* Stay In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@standex.co.uk</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <address className="not-italic">
                  Standex Ltd, CentralPoint, 45 Beech Street, Barbican, London, EC2Y 8AD,<br />
                  United Kingdom
                </address>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <address className="not-italic">
                  Standex India Technology Private Limited, BuzzWorks, Brigade Twin Towers,<br />
                  3rd Floor, Office 6, No.111-4, Jai Bharath Industries Pipeline Road,<br />
                  Yeshwantpur, Bengaluru, Karnataka, 560022
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-12" />
        
        {/* Microsoft Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <img src="/microsoft-partner1.png" alt="Microsoft Partner" className="h-12" />
          <img src="/microsoft-partner2.png" alt="Microsoft Partner" className="h-12" />
          <img src="/microsoft-partner3.png" alt="Microsoft Partner" className="h-12" />
          <img src="/microsoft-partner4.png" alt="Microsoft Partner" className="h-12" />
        </div>
        
        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">Copyright © 2025 Standex Ltd. All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="/cookies" className="text-sm hover:text-blue-300">Cookies</a>
            <a href="/privacy-policy" className="text-sm hover:text-blue-300">Privacy Policy</a>
            <a href="/disclaimer" className="text-sm hover:text-blue-300">Disclaimer</a>
            <a href="/modern-slavery-statement" className="text-sm hover:text-blue-300">Modern Slavery Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;