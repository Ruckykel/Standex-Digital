import Navbar from './Navbar'
import Footer from './Footer'
import Connect from './Connect'
import PowerPagesHeader from './PowerPages/PowerPagesHeader'
import WhatIsMPowerPages from './PowerPages/WhatIsMPowerPages'
import PowerPagesInnovate from './PowerPages/PowerPagesInnovate'
import PowerPagesSolution from './PowerPages/PowerPagesSolution'
import PowerPagesAbility from './PowerPages/PowerPagesAbility'
import PowerPagesProcess from './PowerPages/PowerPagesProcess'


const PowerPages = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <PowerPagesHeader />
      <WhatIsMPowerPages/>
      <PowerPagesInnovate/>
      <PowerPagesSolution/>
      <PowerPagesAbility/>
      <PowerPagesProcess/>
      <Connect/>
      <Footer />
    </div>
  )
}

export default PowerPages