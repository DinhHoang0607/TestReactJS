import React, { useState } from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

const MyComponent = () => {
  const [arr, setArr] = useState([
    { id: 1, title: "game", cost: "5$" },
    { id: 2, title: "gamex", cost: "6$" },
    { id: 3, title: "gamexx", cost: "7$" },
  ]);
  const handleAddArr = (id, title, cost) => {
    setArr([
      ...arr,
      {
        id: id,
        title: title,
        cost: cost,
      },
    ]);
    console.log(arr);
  };
  const handleDelete = (it) => {
    setArr(arr.filter((item) => item !== it.id));
  };

  return (
    <div>
      <AddComponent handleAddArr={handleAddArr} />
      <ChildComponent arr={arr} han />
    </div>
  );
};

export default MyComponent;
