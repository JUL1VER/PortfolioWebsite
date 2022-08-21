import './app.css';
import MainPage from './components/mainPage/MainPage';
import MatrixBackground from './components/MatrixBackground/MatrixBackground';

function App() {
  return (
    <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>  
        <MatrixBackground/>
        <MainPage/>
    </div>
  );
}

export default App;
