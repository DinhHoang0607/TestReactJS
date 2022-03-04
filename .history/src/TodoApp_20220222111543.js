import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { SiEditorconfig } from "react-icons/si";

const TodoApp = () => {
  const [listTodos, setListTodos] = useState([
    { id: "1", title: "Doing homework" },
    { id: "2", title: "Exercise" },
    { id: "3", title: "Fix bug" },
  ]);
  return (
    <div className="list-todo">
      <header>Hoang's ToDo App</header>
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" onChange={(e) => this.handleAddTodo(e)} />
          <button type="button">Add</button>
        </div>
        <div className="list-todo-content">
          {listTodos.map((listTodo) => {
            return (
              <div key className="todo-child">
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
};

export default TodoApp;

// class TodoApp extends React.Component {
//   // const[todo, setTodo]=useState('');
//   state = {
//     listTodos: [
//       { id: "1", title: "Doing homework" },
//       { id: "2", title: "Exercise" },
//       { id: "3", title: "Fix bug" },
//     ],
//     // addTodo: "",
//   };
//   handleAddTodo(e) {
//     this.setState([
//       ...this.state.listTodos,
//       {
//         id: Date.now(),
//         title: e.target.value,
//       },
//     ]);
//     console.log(e);
//   }
//   render() {
//     let { listTodos } = this.state;
//     // let { addTodo } = this.state;
//     return (
//       <div className="list-todo">
//         <header>Hoang's ToDo App</header>
//         <div className="list-todo-container">
//           <div className="add-todo">
//             <input type="text" onChange={(e) => this.handleAddTodo(e)} />
//             <button type="button">Add</button>
//           </div>
//           <div className="list-todo-content">
//             {listTodos.map((listTodo) => {
//               return (
//                 <div className="todo-child">
//                   <span>{listTodo.title}</span>&nbsp;&nbsp;&nbsp;
//                   <SiEditorconfig />
//                   <AiTwotoneDelete />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default TodoApp;
