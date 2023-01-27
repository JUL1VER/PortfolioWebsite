import MainPage from './components/mainPage/MainPage';
import MatrixBackground from './components/matrixBackground/MatrixBackground';
import Bowser from "bowser";
import './app.css';
import './global.css';

function App() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return (
    <>
      {browser.getBrowserName() === 'Firefox' ?
        <div className="App App_firefox" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>
          <MainPage/>
        </div>
      :
        <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>
          <MatrixBackground/>
          <MainPage/>
        </div>
      }
    </>
  );
}

export default App;
