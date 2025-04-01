import PPabout from "./PowerPlatform/PPabout"
import Navbar from './Navbar'
import Footer from './Footer'
import PPservices from "./PowerPlatform/PPservices"
import Testimonials from "./Testimonials"
import Connect from "./Connect"
import PPdiscovery from "./PowerPlatform/PPdiscovery"

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