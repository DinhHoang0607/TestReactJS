import logo from "./logo.svg";
import "./App.scss";
import TodoApp from "./view/todo/TodoApp";
import Nav from "./view/Nav/Nav";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./view/example/Home";
import ListUser from "./view/user/ListUser";
import DetailUser from "./view/user/DetailUser";
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
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoApp />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/users/:id" element={<DetailUser />} />
            {/* <Route path="/todos" element={<MyComponent />} /> */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
