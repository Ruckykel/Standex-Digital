import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageTracker from './PageTracker'; // <- Add this line
import Home from './components/Home';
import PowerPlatform from './components/PowerPlatform';
import PowerApps from './components/PowerApps';
import PowerAutomate from './components/PowerAutomate';
import PowerBi from './components/PowerBi';
import PowerPages from './components/PowerPages';
import MicrosoftPowerPlatform from './components/MicrosoftPowerPlatform';
import Services from './components/Services';
import CopilotStudio from './components/CopilotStudio';
import About from './components/About';
import Training from './components/Training';
import Contact from './components/Contact';
import CloudAICourse from './components/Training/CloudAICourse';
import PowerPlatformCourse from './components/Training/PowerPlatformCourse';
import TechElevatePage from './components/TechElevatePage';
import StandexAIPage from './components/StandexAIPage';

function App() {
  return (
    <Router>
      <PageTracker /> {/* <- Add this inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PowerPlatform" element={<PowerPlatform />} />
        <Route path="/PowerApps" element={<PowerApps />} />
        <Route path="/PowerAutomate" element={<PowerAutomate />} />
        <Route path="/PowerBi" element={<PowerBi />} />
        <Route path="/PowerPages" element={<PowerPages />} />
        <Route path="/MicrosoftPowerPlatform" element={<MicrosoftPowerPlatform />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/CopilotStudio" element={<CopilotStudio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/courses/ai-practitioner" element={<CloudAICourse />} />
        <Route path="/courses/power-platform-bi" element={<PowerPlatformCourse />} />
        <Route path="/TechElevate" element={<TechElevatePage />} />
        <Route path="/StandexAI" element={<StandexAIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
