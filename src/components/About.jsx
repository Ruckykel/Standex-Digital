import AboutProcess from './About/AboutProcess'
import AboutUsHeader from './About/AboutUsHeader'
import AboutWhyChooseUs from './About/AboutWhyChooseUs'
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