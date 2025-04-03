import Footer from './Footer'
import HomeAbout from './Home/HomeAbout'
import HomeHero from './Home/HomeHero'
import HomeServices from './Home/HomeServices'
import Navbar from './Navbar'
import TechSolutions from './Home/TechSolutions'
import Testimonials from './Testimonials'
import WhyChooseUs from './Home/WhyChooseUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <TechSolutions />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home