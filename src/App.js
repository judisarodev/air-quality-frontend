import './App.css';
import {MainView} from './views/MainView.js'
import {CalculatorView} from './views/CalculatorView.js'
import { Header } from './components/Herader.js';
import { Footer } from './components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MapView } from './views/MapView.js';


function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/mapa" element={<MapView />} />
          <Route path="/calculadora" element={<CalculatorView />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
