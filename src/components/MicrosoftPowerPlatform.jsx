import Benefits from './MicrosoftPowerPlatform/Benefits'
import Footer from './Footer'
import KeyFeatures from './MicrosoftPowerPlatform/KeyFeatures'
import Navbar from './Navbar'
import PowerPlatformSections from './MicrosoftPowerPlatform/PowerPlatformSections'
import TableOfContents from './MicrosoftPowerPlatform/TableOfContents'
import WhatIsMpp from './MicrosoftPowerPlatform/WhatIsMpp'


const MicrosoftPowerPlatform = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <WhatIsMpp />
      <TableOfContents />
      <PowerPlatformSections />
      <KeyFeatures />
      <Benefits />
      <Footer />
    </div>
  )
}

export default MicrosoftPowerPlatform