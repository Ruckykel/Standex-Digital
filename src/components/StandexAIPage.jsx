import Navbar from './Navbar'
import Footer from './Footer'

const StandexAIPage = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <div 
        className="relative bg-gray-900 mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#020617]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-blue-100 text-lg md:text-xl mb-4">AI Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Standex AI</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl mx-auto mb-8">
            Transform your business with intelligent AI systems, from copilots to predictive analytics and automation.
          </p>
          <a href="#contact" className="inline-block px-8 py-3 bg-[#2EC743] text-white font-semibold rounded-lg hover:bg-[#25a83a] transition-colors">
            Start a Project
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StandexAIPage


