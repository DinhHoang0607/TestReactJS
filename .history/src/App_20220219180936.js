import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input type='text' value='hoang' /> */}
     
        <MyComponent />

        
      </header>
    </div>
  );
}

export default App;
