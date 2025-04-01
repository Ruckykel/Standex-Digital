import Navbar from './Navbar'
import Footer from './Footer'
import Connect from './Connect'
import AutomateHeader from './PowerAutomate/AutomateHeader'
import WhatIsPAutomate from './PowerAutomate/WhatIsPAutomate'
import AutomateServices from './PowerAutomate/AutomateServices'
import AutomateSolutions from './PowerAutomate/AutomateSolutions'
import AutomateAbility from './PowerAutomate/AutomateAbility'


const PowerAutomate = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <AutomateHeader />
      <WhatIsPAutomate />
      <AutomateServices/>
      <AutomateSolutions/>
      <AutomateAbility/>
      <Connect />
      <Footer />
    </div>
  )
}

export default PowerAutomate