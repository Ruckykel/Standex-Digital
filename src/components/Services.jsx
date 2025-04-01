import AIArchitectureAndDevelopment from './Services/AIArchitectureAndDevelopment'
import Connect from './Connect'
import DigitalMarketing from './Services/DigitalMarketing'
import ECommerceSolutions from './Services/ECommerceSolutions'
import Footer from './Footer'
import IntelligentCloudSolutions from './Services/IntelligentCloudSolutions'
import Navbar from './Navbar'
import ServicesDiscovery from './Services/ServicesDiscovery'
import ServicesHeader from './Services/ServicesHeader'
import TechElevate from './Services/TechElevate'
import WebAndAppDevelopment from './Services/WebAndAppDevelopment'


const Services = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ServicesHeader/>
      <IntelligentCloudSolutions />
      <WebAndAppDevelopment />
      <DigitalMarketing/>
      <AIArchitectureAndDevelopment />
      <ECommerceSolutions/>
      <TechElevate/>
      <ServicesDiscovery/>
      <Connect/>
      <Footer />
    </div>
  )
}

export default Services