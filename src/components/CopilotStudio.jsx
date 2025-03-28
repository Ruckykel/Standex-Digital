import Navbar from './Navbar'
import Footer from './Footer'
import Connect from "./Connect"
import CopilotHeader from './CopilotHeader'
import WhatIsCopilot from './WhatIsCopilot'
import CopilotHelp from './CopilotHelp'
import CopilotSolutions from './CopilotSolutions'
import CopilotAbility from './CopilotAbility'
import CopilotProcess from './CopilotProcess'


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