import Navbar from './Navbar'
import Footer from './Footer'
import Connect from './Connect'
import PowerPagesHeader from './PowerPagesHeader'
import WhatIsMPowerPages from './WhatIsMPowerPages'
import PowerPagesInnovate from './PowerPagesInnovate'
import PowerPagesSolution from './PowerPagesSolution'
import PowerPagesAbility from './PowerPagesAbility'
import PowerPagesProcess from './PowerPagesProcess'


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