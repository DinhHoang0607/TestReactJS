import React from "react";

class TodoApp extends React.Component {
  state = {
    listTodos: [
      { id: "1", title: "Doing homework" },
      { id: "2", title: "Exercise" },
      { id: "3", title: "Fix bug" },
    ],
  };
    render() {
      let listTodos
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
