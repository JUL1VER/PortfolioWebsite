import MainPage from './components/mainPage/MainPage';
import BackgroundCanvas from './components/backgroundCanvas/BackgroundCanvas';
import './app.css';

function App() {
  return (
    <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>  
        <BackgroundCanvas/>
        <MainPage/>
    </div>
  );
}

export default App;
