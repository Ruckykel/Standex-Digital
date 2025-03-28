import AIArchitectureAndDevelopment from './AIArchitectureAndDevelopment'
import Connect from './Connect'
import DigitalMarketing from './DigitalMarketing'
import ECommerceSolutions from './ECommerceSolutions'
import Footer from './Footer'
import IntelligentCloudSolutions from './IntelligentCloudSolutions'
import Navbar from './Navbar'
import ServicesDiscovery from './ServicesDiscovery'
import ServicesHeader from './ServicesHeader'
import TechElevate from './TechElevate'
import WebAndAppDevelopment from './WebAndAppDevelopment'


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