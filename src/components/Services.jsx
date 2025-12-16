import AIArchitectureAndDevelopment from './Services/AIArchitectureAndDevelopment'
import DigitalMarketing from './Services/DigitalMarketing'
import ECommerceSolutions from './Services/ECommerceSolutions'
import Footer from './Footer'
import IntelligentCloudSolutions from './Services/IntelligentCloudSolutions'
import Navbar from './Navbar'
import ServicesDiscovery from './Services/ServicesDiscovery'
import ServicesHeader from './Services/ServicesHeader'
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
      <ServicesDiscovery/>
      <Footer />
    </div>
  )
}

export default Services