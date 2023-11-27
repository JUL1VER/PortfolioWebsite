import MainPage from "./pages/mainPage/MainPage";
import MatrixBackground from "./components/matrixBackground/MatrixBackground";
import Bowser from "bowser";
import classNames from "classnames";

import s from "./app.css";
import "./global.css";

function App() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return (
    <>
      {browser.getBrowserName() === "Firefox" ? (
        <div className={classNames(s.app, s.app_firefox)}>
          <MainPage />
        </div>
      ) : (
        <div className="app">
          <MatrixBackground />
          <MainPage />
        </div>
      )}
    </>
  );
}

export default App;
