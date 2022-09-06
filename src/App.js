import './app.css';
import MainPage from './components/mainPage/MainPage';
import MatrixBackground from './components/MatrixBackground/MatrixBackground';
import Bowser from "bowser";

function App() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return (
    <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}> 
        {browser.getBrowserName() === 'Firefox' ? null : <MatrixBackground/>}
        <MainPage/>
    </div>
  );
}

export default App;
