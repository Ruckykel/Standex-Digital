import AboutProcess from './AboutProcess'
import AboutUsHeader from './AboutUsHeader'
import AboutWhyChooseUs from './AboutWhyChooseUs'
import Connect from './Connect'
import Footer from './Footer'
import Navbar from './Navbar'


const About = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <AboutUsHeader/>
      <AboutWhyChooseUs/>
      <AboutProcess/>
      <Connect/>
      <Footer />
    </div>
  )
}

export default About