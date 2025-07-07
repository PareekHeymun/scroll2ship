import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Ecommerce Website Frontend React Boilerplate
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a 
          className="Github-Link"
          href="https://github.com/PareekHeymun/Ecommerce-App"
          target="_blank"
          rel="noopener noreferrer"
          >Github: Ecommerce-App</a>
      </header>
    </div>
  );
}

export default App;
