import Benefits from './Benefits'
import Footer from './Footer'
import KeyFeatures from './KeyFeatures'
import Navbar from './Navbar'
import PowerPlatformSections from './PowerPlatformSections'
import TableOfContents from './TableOfContents'
import WhatIsMpp from './WhatIsMpp'


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