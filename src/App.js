import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App" style={{margin: '0 auto', width: '100%', textAlign: 'center'}}>
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
