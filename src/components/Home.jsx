import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HomeHero />
      <HomeAbout />
    </div>
  )
}

export default Home