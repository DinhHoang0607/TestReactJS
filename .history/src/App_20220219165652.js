import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input type='text' value='hoang' /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <input type="text" value="aaa" />
        
      </header>
    </div>
  );
}

export default App;
