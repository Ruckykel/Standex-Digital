import HomeHero from './HomeHero'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HomeHero />
    </div>
  )
}

export default Home