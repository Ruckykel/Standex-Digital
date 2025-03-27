import PPabout from "./PPabout"
import Navbar from './Navbar'
import Footer from './Footer'
import PPservices from "./PPservices"
import TechSolutions from "./TechSolutions"
import Testimonials from "./Testimonials"
import Connect from "./Connect"
import PPdiscovery from "./PPdiscovery"

const PowerPlatform = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <PPabout />
      <PPservices />
      <PPdiscovery />
      <Testimonials />
      <Connect />
      <Footer />
    </div>
  )
}

export default PowerPlatform