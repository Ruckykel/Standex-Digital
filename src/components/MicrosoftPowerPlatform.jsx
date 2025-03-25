import Navbar from './Navbar'
import Footer from './Footer'
import MPPoverview from './MPPoverview'

const MicrosoftPowerPlatform = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <MPPoverview />
      <Footer />
    </div>
  )
}

export default MicrosoftPowerPlatform