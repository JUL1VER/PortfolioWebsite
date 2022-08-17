import './app.css';
import MainPage from './components/mainPage/MainPage';
import BackgroundCanvas from './components/backgroundCanvas/BackgroundCanvas';
import MatrixBackground from './components/MatrixBackground/MatrixBackground';

function App() {
  return (
    <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>  
        {/* <BackgroundCanvas/> */}
        <MatrixBackground/>
        <MainPage/>
    </div>
  );
}

export default App;
