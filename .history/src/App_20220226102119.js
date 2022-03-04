import logo from "./logo.svg";
import "./App.scss";
import TodoApp from "./view/todo/TodoApp";
import Nav from "./view/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input type='text' value='hoang' /> */}
        {/* <TodoApp /> */}
        {/* <MyComponent /> */}
      </header>
    </div>
  );
}

export default App;