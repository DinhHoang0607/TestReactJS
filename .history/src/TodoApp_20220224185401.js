import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { SiEditorconfig } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoApp = () => {
  const [listTodos, setListTodos] = useState([
    { id: "1", title: "Doing homework" },
    { id: "2", title: "Exercise" },
    { id: "3", title: "Fix bug" },
  ]);
  const [title, setTitle] = useState("");
  const [editTodo, setEditTodo] = useState({});
  const handleAddTodo = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = () => {
    if (!title) {
      toast.error("Missing title");
      return;
    }
    setListTodos([
      ...listTodos,
      {
        id: Date.now(),
        title: title,
      },
    ]);
    setTitle("");
    toast.success("Success");
  };
  const handleDelete = (listTodo) => {
    setListTodos(listTodos.filter((list) => list.id !== listTodo.id));
    toast.success("successful delete");
  };
  const handleEdit = (listTodo, index) => {
    // setFlag(true);
    // setTitle(listTodo.title);
    // setListTodos(
    //   listTodos.map((list) =>
    //     list.id === listTodo.id ? { id: list.id, title: title } : { ...list }
    //   )
    // );
    setEditTodo(listTodo);
    console.log(editTodo);
  };
  const isEmpty = (obj) => {
    console.log(Object.keys(obj).length === 0);
    return Object.keys(obj).length === 0;
  };
  return (
    <div className="list-todo">
      <header>Hoang's ToDo App</header>
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" value={title} onChange={(e) => handleAddTodo(e)} />
          <button type="button" onClick={() => handleSubmit()}>
            Add
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <div className="list-todo-content">
          {listTodos.map((listTodo, index) => {
            return (
              <div key={listTodo.id} className="todo-child">
                {!isEmpty(editTodo) ? (
                  <>
                  <span>
                    {index} - <input type="text" value={listTodo.title}></input>
                  </span>
                  </>
                ) : (
                  <>
                      <span>
                        {index} - {listTodo.title}
                      </span>
                    
                  </>
                )}
                <SiEditorconfig onClick={() => handleEdit(listTodo, index)} />
                <AiTwotoneDelete onClick={() => handleDelete(listTodo)} />
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
