import fundo from './images/fundo.png'
import BoxLogo from './Components/BoxLogo';
import Carrossel from './Components/Carrossel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={fundo} alt="" className='imageBack'/>
      <BoxLogo/>
      <Carrossel/>
    </div>
  );
}

export default App;
