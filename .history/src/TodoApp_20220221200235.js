import React from "react";

class TodoApp extends React.Component {
    state = {
        listTodos
    }
  render() {
    return (
      <div className="list-todo">
        <header>Hoang's ToDo App</header>
        <div className="list-todo-container">
          <div className="add-todo">
            <input type="text" />
            <button type="button">Add</button>
          </div>
          <div className="list-todo-content">
            <div className="todo-child">todo 1</div>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoApp;
