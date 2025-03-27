import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PowerPlatform from './components/PowerPlatform';
import PowerApps from './components/PowerApps';
import PowerAutomate from './components/PowerAutomate';
import PowerBi from './components/PowerBi';
import PowerPages from './components/PowerPages';
import MicrosoftPowerPlatform from './components/MicrosoftPowerPlatform';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PowerPlatform" element={<PowerPlatform />} />
        <Route path="/PowerApps" element={<PowerApps />} />
        <Route path="/PowerAutomate" element={<PowerAutomate />} />
        <Route path="/PowerBi" element={<PowerBi />} />
        <Route path="/PowerPages" element={<PowerPages />} />
        <Route path="/MicrosoftPowerPlatform" element={<MicrosoftPowerPlatform />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}


export default App;
