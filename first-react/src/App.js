import './css/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/using-react-router/04-home';
import Shop from './components/using-react-router/01-shop';
import Contact from './components/using-react-router/02-contact-us';
import Profile from './components/using-react-router/03-profile';

function App() {
  return (
    <div className="App">
      {/* Put in the manager import here */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;

