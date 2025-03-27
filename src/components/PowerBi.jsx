import Navbar from './Navbar'
import Footer from './Footer'
import Connect from './Connect'
import PowerBiHeader from './PowerBiHeader'
import WhatIsPowerBi from './WhatIsPowerBi'
import PowerBiServices from './PowerBiServices'
import PowerBiHelp from './PowerBiHelp'
import PowerBiAbility from './PowerBiAbility'


const PowerBi = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <PowerBiHeader />
      <WhatIsPowerBi/>
      <PowerBiServices/>
      <PowerBiHelp />
      <PowerBiAbility />
      <Connect />
      <Footer />
    </div>
  )
}

export default PowerBi