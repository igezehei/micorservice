import logo from "../src/alpha/assets/img/Humaaans/character 20.svg";
import logo6 from "../src/alpha/assets/img/Humaaans/character 6.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span className="App-expand"></span>
          <span>n</span>
          <span>b</span>
          <span>o</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          </p>
          <div class="column">
          <img src={logo6} className="App-logo" alt="logo6" />
          <a
            className="App-link"
            href="https://github.com/igezehei"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start onboarding App
          </a>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
      </header>
    </div>
  );
}

export default App;
