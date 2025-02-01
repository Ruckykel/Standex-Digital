import React from 'react';

const HomeHero = () => {
    const powerPlatformIcons = [
        { name: 'Power BI', src: '/PowerBi.svg' },
        { name: 'Power Apps', src: '/PowerApps.svg' },
        { name: 'Power Automate', src: '/PowerAutomate.svg' },
        { name: 'Power Pages', src: '/PowerPages.svg' },
        { name: 'Power Platform', src: 'PowerPlatform.svg' },
        { name: 'Copilot', src: '/CopilotStudio.svg' }
    ];

    return (
        <div 
            className="relative h-[88vh] sm:h-[100vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/TechBng.svg")' }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#143c32df] to-[#012769dc]" />

            {/* Content */}
            <div className="relative z-10 pt-16 sm">
                <div className="max-w-7xl mx-auto px-4 py-20 sm:py-24">
                    <div className="text-center">
                        <p className="mb-7 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                          Standex | Microsoft Power Platform & Data Specialists 
                        </p>
                        <h1 className="text-4xl font-semibold text-white sm:text-4xl md:text-5xl">
                            <span className="block mb-2 sm:mb-3 md:mb-5">Unleash The Power of The</span>
                            <span className="block">Microsoft Power Platform</span>
                        </h1>
                        
                        <div className="mt-11 sm:mt-14 flex justify-center">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-[#185c4a] bg-blue-50 hover:bg-white transition-colors duration-200 md:py-2 md:text-lg md:px-10"
                                >
                                    See How We Can Help →
                                </a>
                            </div>
                        </div>

                        {/* Power Platform Icons */}
                        <div className="mt-12">
                            <div className="flex justify-center items-center gap-4 md:gap-8">
                                {powerPlatformIcons.map((icon) => (
                                    <div key={icon.name}>
                                        <img
                                            src={icon.src}
                                            alt={icon.name}
                                            className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-200 hover:scale-105"
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