import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { SiEditorconfig } from "react-icons/si";
class TodoApp extends React.Component {
  state = {
    listTodos: [
      { id: "1", title: "Doing homework" },
      { id: "2", title: "Exercise" },
      { id: "3", title: "Fix bug" },
    ],
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo">
        <header>Hoang's ToDo App</header>
        <div className="list-todo-container">
          <div className="add-todo">
            <input type="text" />
            <button type="button">Add</button>
          </div>
          <div className="list-todo-content">
                    <div className="todo-child">todo 1
                    <SiEditorconfig />
                    <AiTwotoneDelete />
                    </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoApp;
