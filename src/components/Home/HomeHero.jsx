import React, { useEffect } from 'react';

const HomeHero = () => {
    const powerPlatformIcons = [
        { name: 'Power BI', src: '/PowerBi.svg' },
        { name: 'Power Apps', src: '/PowerApps.svg' },
        { name: 'Power Automate', src: '/PowerAutomate.svg' },
        { name: 'Power Pages', src: '/PowerPages.svg' },
        { name: 'Power Platform', src: 'PowerPlatform.svg' },
        { name: 'Copilot', src: '/CopilotStudio.svg' }
    ];

    // This will trigger animations after component mounts
    useEffect(() => {
        const animateElements = () => {
            // Animate subtitle with fade in
            const subtitle = document.querySelector('.hero-subtitle');
            if (subtitle) {
                subtitle.classList.add('animate-subtitle');
            }
            
            // Animate heading lines with staggered fade-in
            const headingLines = document.querySelectorAll('.heading-line');
            headingLines.forEach((line, index) => {
                setTimeout(() => {
                    line.classList.add('animate-heading');
                }, 300 + (index * 200));
            });
            
            // Animate button
            const button = document.querySelector('.hero-button');
            if (button) {
                setTimeout(() => {
                    button.classList.add('animate-button');
                }, 800);
            }
            
            // Animate icons with staggered fade-in and floating effect
            const icons = document.querySelectorAll('.platform-icon');
            icons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('animate-icon');
                }, 1000 + (index * 150));
            });
        };
        
        // Small delay to ensure DOM is ready
        setTimeout(animateElements, 100);
    }, []);

    return (
        <div 
            className="relative h-[88vh] sm:h-[100vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/TechBng.svg")' }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d2720df] to-[#02183cdc]" />

            {/* Custom animation styles */}
            <style jsx>{`
                .animate-subtitle {
                    animation: fadeIn 0.8s ease forwards;
                }
                
                .heading-line {
                    opacity: 0;
                    transform: translateY(20px);
                }
                
                .animate-heading {
                    animation: slideUp 0.8s ease forwards;
                }
                
                .hero-button {
                    opacity: 0;
                    transform: translateY(20px);
                }
                
                .animate-button {
                    animation: slideUp 0.6s ease forwards;
                }
                
                .platform-icon {
                    opacity: 0;
                    transform: translateY(15px);
                }
                
                .animate-icon {
                    animation: fadeInUp 0.5s ease forwards, float 3s ease-in-out infinite;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>

            {/* Content */}
            <div className="relative z-10 pt-16 sm">
                <div className="max-w-7xl mx-auto px-4 py-20 sm:py-24">
                    <div className="text-center">
                        <p className="hero-subtitle opacity-0 mb-7 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                          Standex | Microsoft Power Platform & Data Specialists 
                        </p>
                        <h1 className="text-4xl font-semibold text-white sm:text-4xl md:text-5xl">
                            <span className="heading-line block mb-2 sm:mb-3 md:mb-5">Unleash The Power of The</span>
                            <span className="heading-line block">Microsoft Power Platform</span>
                        </h1>
                        
                        <div className="mt-11 sm:mt-14 flex justify-center">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="hero-button inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-[#185c4a] bg-blue-50 hover:bg-white transition-colors duration-200 md:py-2 md:text-lg md:px-10"
                                >
                                    See How We Can Help →
                                </a>
                            </div>
                        </div>

                        {/* Power Platform Icons */}
                        <div className="mt-12">
                            <div className="flex justify-center items-center gap-4 md:gap-8">
                                {powerPlatformIcons.map((icon, index) => (
                                    <div key={icon.name}>
                                        <img
                                            src={icon.src}
                                            alt={icon.name}
                                            className={`platform-icon w-8 h-8 md:w-12 md:h-12 transition-transform duration-200 hover:scale-110`}
                                            style={{ animationDelay: `${index * 0.15}s` }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;