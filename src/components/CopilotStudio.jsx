import Navbar from './Navbar'
import Footer from './Footer'
import Connect from "./Connect"
import CopilotHeader from './CopilotStudio/CopilotHeader'
import WhatIsCopilot from './CopilotStudio/WhatIsCopilot'
import CopilotHelp from './CopilotStudio/CopilotHelp'
import CopilotSolutions from './CopilotStudio/CopilotSolutions'
import CopilotAbility from './CopilotStudio/CopilotAbility'
import CopilotProcess from './CopilotStudio/CopilotProcess'


const CopilotStudio = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <CopilotHeader />
      <WhatIsCopilot />
      <CopilotHelp />
      <CopilotSolutions/>
      <CopilotAbility/>
      <CopilotProcess/>
      <Connect />
      <Footer />
    </div>
  )
}

export default CopilotStudio