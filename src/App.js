import logo from './logo.svg';
import './App.css';
import { CalculatorView } from './views/CalculatorView';
import { PredictionView } from './views/PredictionView';
import { InstructionsView } from './views/InstructionsView';

function App() {
  return (
    <div className="App__container">
      <CalculatorView/>
      <PredictionView/>
      <InstructionsView/>
    </div>
  );
}

export default App;
