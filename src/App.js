import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import Footer from './components/footer/Footer';
import BackgroundCanvas from './components/backgroundCanvas/BackgroundCanvas';
import './app.css';

function App() {
  return (
    <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>
      <BackgroundCanvas/>
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
