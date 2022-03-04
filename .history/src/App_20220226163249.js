import logo from "./logo.svg";
import "./App.scss";
import TodoApp from "./view/todo/TodoApp";
import Nav from "./view/Nav/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./view/example/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <input type='text' value='hoang' /> */}
          {/* <TodoApp /> */}
          {/* <MyComponent /> */}
          <Routes>
            <Route path="/" component={Home}>
              <Home />
            </Route>
            <Route path="/todos" component={TodoApp}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
