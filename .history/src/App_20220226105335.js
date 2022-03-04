import logo from "./logo.svg";
import "./App.scss";
import TodoApp from "./view/todo/TodoApp";
import Nav from "./view/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./view/example/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <input type='text' value='hoang' /> */}
          {/* <TodoApp /> */}
          {/* <MyComponent /> */}
      
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/todos">
          <TodoApp />
        </Route>
      </Switch>
        </Router>
        </header>
      </div>
  );
}

export default App;
