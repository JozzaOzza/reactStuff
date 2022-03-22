
import './css/App.css';
import FirstComponent from './components/FirstComponent';
import NavBar from './components/NavBarComp';
import Email from './components/EmailComp';
import Message from './components/MessageComp';
import Submit from './components/SubmitComp';
import Body from './components/BodyComp';
import ClickManager from './components/click-button-example/ClickManager';
import LoginManager from './components/login-example/LoginManager';

function App() {
  return (
    <div className="App">
      {/* Put in the manager import here */}
      <LoginManager></LoginManager>
    </div>
  );
}

export default App;
