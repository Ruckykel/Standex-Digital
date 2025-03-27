import Navbar from './Navbar'
import Footer from './Footer'
import Connect from './Connect'
import PowerAppsHeader from './PowerAppsHeader'
import WhatIsMPA from './WhatIsMPA'
import PASolutions from './PASolutions'
import PAHowWeCanHelp from './PAHowWeCanHelp'
import PAAbility from './PAAbility'
import PAProcess from './PAProcess'


const PowerApps = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <PowerAppsHeader/>
      <WhatIsMPA />
      <PASolutions/>
      <PAHowWeCanHelp />
      <PAAbility/>
      <PAProcess />
      <Connect />
      <Footer />
    </div>
  )
}

export default PowerApps