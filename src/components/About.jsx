import AboutProcess from './About/AboutProcess'
import AboutUsHeader from './About/AboutUsHeader'
import AboutWhyChooseUs from './About/AboutWhyChooseUs'
import Footer from './Footer'
import Navbar from './Navbar'


const About = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <AboutUsHeader/>
      <AboutWhyChooseUs/>
      <AboutProcess/>
      <Footer />
    </div>
  )
}

export default About