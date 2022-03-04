import React from "react";

class TodoApp extends React.Component {
  render() {
    return (
      <div className="list-todo">
            <header>Hoang's ToDo App</header>
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type='text' />
                    <button className=""></button>
                </div>
            </div>
      </div>
    );
  }
}
export default TodoApp;
