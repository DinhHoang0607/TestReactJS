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
      addTodo:''
    };
    handleAddTodo() {
        
    }
  render() {
    let { listTodos } = this.state;
    let { addTodo } = this.state;
    return (
      <div className="list-todo">
        <header>Hoang's ToDo App</header>
        <div className="list-todo-container">
          <div className="add-todo">
            <input type="text" />
            <button type="button">Add</button>
          </div>
          <div className="list-todo-content">
            {listTodos.map((listTodo) => {
              return (
                <div className="todo-child">
                  <span>{listTodo.title}</span>&nbsp;&nbsp;&nbsp;
                  <SiEditorconfig />
                  <AiTwotoneDelete />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default TodoApp;
