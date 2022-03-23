

import PokemonHandler from './components/external-data/PokemonHandler';
import ShoppingManager from './components/shopping-basket-example/ShoppingManagerComp';
import './css/App.css';


function App() {
  return (
    <div className="App">
      {/* Put in the manager import here */}
      <PokemonHandler />
    </div>
  );
}

export default App;
