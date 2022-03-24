import './css/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/using-react-router/04-home';
import Shop from './components/using-react-router/01-shop';
import Contact from './components/using-react-router/02-contact-us';
import Profile from './components/using-react-router/03-profile';
import NavBar from './components/using-react-router/05-nav-bar';
import GetRequest from './components/making-requests/GetRequestWithAxios';

function App() {
  return (
    <div className="App">
      {/* Put in the manager import here */}
      <GetRequest></GetRequest>
    </div>
  );
}

export default App;

