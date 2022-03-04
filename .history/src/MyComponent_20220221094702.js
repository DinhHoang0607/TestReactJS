import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const MyComponent = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
//   const [arr, setArr] = useState([]);
  const arr = [
    { id: "1", title: "game", cost: "5$" },
    { id: "2", title: "gamex", cost: "6$" },
    { id: "3", title: "gamexx", cost: "7$" },
  ];
  // constructor(props) {
  //     super(props)
  // }
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };
  return (
    <div>
      
      <ChildComponent arr={arr} />
    </div>
  );
};

export default MyComponent;
