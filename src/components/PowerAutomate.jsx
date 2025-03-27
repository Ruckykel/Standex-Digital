import Navbar from './Navbar'
import Footer from './Footer'
import Connect from './Connect'
import AutomateHeader from './AutomateHeader'
import WhatIsPAutomate from './WhatIsPAutomate'
import AutomateServices from './AutomateServices'
import AutomateSolutions from './AutomateSolutions'
import AutomateAbility from './AutomateAbility'


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