import Navbar from './Navbar'
import Footer from './Footer'
import PowerBiHeader from './PowerBi/PowerBiHeader'
import WhatIsPowerBi from './PowerBi/WhatIsPowerBi'
import PowerBiServices from './PowerBi/PowerBiServices'
import PowerBiHelp from './PowerBi/PowerBiHelp'
import PowerBiAbility from './PowerBi/PowerBiAbility'


const PowerBi = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <PowerBiHeader />
      <WhatIsPowerBi/>
      <PowerBiServices/>
      <PowerBiHelp />
      <PowerBiAbility />
      <Footer />
    </div>
  )
}

export default PowerBi