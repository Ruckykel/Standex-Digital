import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, BarChart3, Shield, Zap, Eye, Brain } from 'lucide-react';

const slides = [
    {
        badge: 'AI-Powered Platform',
        title: 'Get Cited by AI — Without Compliance Risk',
        description:
            'StandexAI helps growth teams and regulated industries run SEO/GEO audits to see how AI models position your brand, then fix gaps in one workflow with ownership verification and a built-in content studio.',
        features: [
            { icon: Eye, label: 'AI Visibility Audit', detail: 'See how GPT, Gemini & Claude perceive your brand' },
            { icon: Shield, label: 'Compliance-First', detail: 'Built for regulated industries with ownership verification' },
            { icon: BarChart3, label: 'GEO Score Tracking', detail: 'Track citation probability and model share in real-time' },
        ],
        stat: { value: '72', suffix: '', label: 'GEO Score', sub: 'Average improvement after optimization' },
    },
    {
        badge: 'Standex-Core Engine',
        title: 'Proprietary GEO Engine Tuned for Citation',
        description:
            "Standex-Core is not a generic wrapper. It's our proprietary engine tuned for citation probability, hallucination risk, and vector alignment signals — combining GPT, Gemini, and Claude into one decision layer.",
        features: [
            { icon: Brain, label: 'Multi-Model Analysis', detail: 'GPT-4o, Claude 3.5, and Gemini signals unified' },
            { icon: Zap, label: 'Hallucination Detection', detail: 'Flags inconsistent brand facts before they spread' },
            { icon: Sparkles, label: 'Semantic Gap Analysis', detail: 'Measures your authority distance vs. what AI sees' },
        ],
        stat: { value: '61', suffix: '%', label: 'Share of Model', sub: 'Average brand mention rate across AI models' },
    },
    {
        badge: 'Content Studio',
        title: 'From Scan to Publish — One Workflow',
        description:
            'Enter your URL and keyword, get a full visibility report, verify ownership through llms.txt, meta tag or DNS, then ship optimized content directly from the built-in Content Studio with guardrails.',
        features: [
            { icon: Eye, label: 'Scan & Report', detail: 'Full GEO score, sentiment, and citation source findings' },
            { icon: Shield, label: 'Verify Ownership', detail: 'Activate strategy actions via llms.txt, meta tag, or DNS' },
            { icon: Zap, label: 'Publish with Confidence', detail: 'Rewrite with guardrails and publish in one click' },
        ],
        stat: { value: '3', suffix: ' Steps', label: 'Scan → Verify → Publish', sub: 'Complete workflow in minutes' },
    },
];

const StandexAISection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animationStarted, setAnimationStarted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionRef = useRef(null);
    const autoplayRef = useRef(null);

    // Intersection observer
    useEffect(() => {
        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setAnimationStarted(true);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Autoplay
    useEffect(() => {
        if (!animationStarted) return;
        autoplayRef.current = setInterval(() => {
            goToNext();
        }, 15000);
        return () => clearInterval(autoplayRef.current);
    }, [animationStarted, currentSlide]);

    const goToNext = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 300);
    }, []);

    const goToPrev = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 300);
    }, []);

    const goToSlide = useCallback((index) => {
        if (index === currentSlide) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 300);
    }, [currentSlide]);

    const slide = slides[currentSlide];

    return (
        <div className="w-full bg-gray-900 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
                    style={{
                        background: 'radial-gradient(circle, #049DCB 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.03]"
                    style={{
                        background: 'radial-gradient(circle, #2EC743 0%, transparent 70%)',
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <style>{`
        @keyframes slideStatUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(4, 157, 203, 0.15); }
          50% { box-shadow: 0 0 40px rgba(4, 157, 203, 0.3); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .stat-animate {
          animation: slideStatUp 0.6s ease-out forwards;
        }
        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(4,157,203,0.08), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>

            <section ref={sectionRef} className="py-16 md:py-24 px-4 max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <div
                        className={`inline-flex items-center gap-2 bg-[#049DCB]/10 border border-[#049DCB]/20 rounded-full px-4 py-1.5 mb-5 transform transition-all duration-700 ${animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                    >
                        <Sparkles className="w-4 h-4 text-[#049DCB]" />
                        <span className="text-[#049DCB] text-sm font-medium tracking-wide">Introducing StandexAI</span>
                    </div>

                    <h2
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transform transition-all duration-700 delay-100 ${animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        AI-Powered Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049DCB] to-[#2EC743]">Visibility Platform</span>
                    </h2>

                    <p
                        className={`text-gray-400 max-w-2xl mx-auto text-base md:text-lg transform transition-all duration-700 delay-200 ${animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        Optimize your brand's presence across AI models with compliance-first content operations.
                    </p>
                </div>

                {/* Main content card */}
                <div
                    className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/60 overflow-hidden transform transition-all duration-1000 delay-300 ${animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-[0.97]'
                        }`}
                >
                    {/* Top bar with navigation */}
                    <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray-700/50">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${i === currentSlide
                                            ? 'w-8 bg-gradient-to-r from-[#049DCB] to-[#2EC743]'
                                            : 'w-2 bg-gray-600 hover:bg-gray-500'
                                            }`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-500 text-xs font-mono ml-2">
                                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Arrow navigation */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={goToPrev}
                                className="w-9 h-9 rounded-lg bg-gray-700/60 border border-gray-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600/80 hover:border-[#049DCB]/40 transition-all duration-200 cursor-pointer"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="w-9 h-9 rounded-lg bg-gray-700/60 border border-gray-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600/80 hover:border-[#049DCB]/40 transition-all duration-200 cursor-pointer"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Slide content */}
                    <div className="p-6 md:p-10 lg:p-12">
                        <div
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-14 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            {/* Left content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 bg-[#2EC743]/10 border border-[#2EC743]/20 rounded-full px-3 py-1 mb-5 self-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2EC743] animate-pulse" />
                                    <span className="text-[#2EC743] text-xs font-semibold tracking-wider uppercase">{slide.badge}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{slide.title}</h3>

                                <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">{slide.description}</p>

                                {/* Feature list */}
                                <div className="space-y-4 mb-8">
                                    {slide.features.map((feat, idx) => {
                                        const IconComp = feat.icon;
                                        return (
                                            <div key={idx} className="flex items-start gap-4 group">
                                                <div className="w-10 h-10 rounded-lg bg-gray-700/70 border border-gray-600/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#049DCB]/40 group-hover:bg-[#049DCB]/10 transition-all duration-300">
                                                    <IconComp className="w-5 h-5 text-[#049DCB]" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-semibold text-sm">{feat.label}</div>
                                                    <div className="text-gray-500 text-sm">{feat.detail}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CTA */}
                                <a
                                    href="https://www.standexai.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#049DCB] to-[#038ab3] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#049DCB]/20 hover:scale-[1.03] transform self-start group"
                                >
                                    Explore StandexAI
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </div>

                            {/* Right — stat card & visual */}
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-full max-w-md">
                                    {/* Stat hero card */}
                                    <div className="bg-gray-900/80 rounded-2xl border border-gray-700/50 p-8 pulse-glow">
                                        {/* Mini top bar */}
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-3 h-3 rounded-full bg-[#2EC743]" />
                                            <div className="w-3 h-3 rounded-full bg-[#049DCB]" />
                                            <div className="w-3 h-3 rounded-full bg-gray-600" />
                                            <span className="text-gray-500 text-xs font-mono ml-auto">standex-core v4.1</span>
                                        </div>

                                        {/* Big stat */}
                                        <div className="text-center mb-6 stat-animate" key={`stat-${currentSlide}`}>
                                            <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-none mb-1">
                                                {slide.stat.value}
                                                <span className="text-3xl md:text-4xl">{slide.stat.suffix}</span>
                                            </div>
                                            <div className="text-[#049DCB] font-semibold text-sm mt-2">{slide.stat.label}</div>
                                            <div className="text-gray-500 text-xs mt-1">{slide.stat.sub}</div>
                                        </div>

                                        {/* Shimmer line */}
                                        <div className="h-px w-full shimmer-line rounded mb-6" />

                                        {/* Mini metrics */}
                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { label: 'GPT-4o', status: 'Cited', color: '#2EC743' },
                                                { label: 'Claude', status: 'Positive', color: '#049DCB' },
                                                { label: 'Gemini', status: currentSlide === 0 ? 'Pending' : 'Cited', color: currentSlide === 0 ? '#EEA32C' : '#2EC743' },
                                            ].map((m, i) => (
                                                <div key={i} className="bg-gray-800/80 rounded-lg p-3 text-center border border-gray-700/40">
                                                    <div className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-1">{m.label}</div>
                                                    <div className="text-xs font-semibold" style={{ color: m.color }}>
                                                        {m.status}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom row of mini cards */}
                                    <div className="grid grid-cols-2 gap-3 mt-3">
                                        <div className="bg-gray-800/50 rounded-xl border border-gray-700/40 p-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#049DCB]/10 flex items-center justify-center flex-shrink-0">
                                                <BarChart3 className="w-4 h-4 text-[#049DCB]" />
                                            </div>
                                            <div>
                                                <div className="text-white text-sm font-semibold">SEO/GEO</div>
                                                <div className="text-gray-500 text-[10px]">Dual audit engine</div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-xl border border-gray-700/40 p-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#2EC743]/10 flex items-center justify-center flex-shrink-0">
                                                <Shield className="w-4 h-4 text-[#2EC743]" />
                                            </div>
                                            <div>
                                                <div className="text-white text-sm font-semibold">Compliance</div>
                                                <div className="text-gray-500 text-[10px]">Ownership verified</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile arrow controls at bottom */}
                <div className="flex items-center justify-center gap-4 mt-6 lg:hidden">
                    <button
                        onClick={goToPrev}
                        className="w-11 h-11 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#049DCB]/50 transition-all duration-200"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`h-2.5 rounded-full transition-all duration-500 ${i === currentSlide
                                    ? 'w-8 bg-gradient-to-r from-[#049DCB] to-[#2EC743]'
                                    : 'w-2.5 bg-gray-600'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={goToNext}
                        className="w-11 h-11 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#049DCB]/50 transition-all duration-200"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default StandexAISection;
