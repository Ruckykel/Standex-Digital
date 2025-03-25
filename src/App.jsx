import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PowerPlatform from './components/PowerPlatform';
import MicrosoftPowerPlatform from './components/MicrosoftPowerPlatform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PowerPlatform" element={<PowerPlatform />} />
        <Route path="/MicrosoftPowerPlatform" element={<MicrosoftPowerPlatform />} />
      </Routes>
    </Router>
  );
}


export default App;
