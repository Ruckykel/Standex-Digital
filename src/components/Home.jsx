import BlogPost from './BlogPost'
import Connect from './Connect'
import Footer from './Footer'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'
import HomeServices from './HomeServices'
import Navbar from './Navbar'
import TechSolutions from './TechSolutions'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyChooseUs'

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
      <BlogPost />
      <Connect />
      <Footer />
    </div>
  )
}

export default Home