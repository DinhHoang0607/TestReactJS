import React, { useState } from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

const MyComponent = () => {
  const arr = [
    { id: "1", title: "game", cost: "5$" },
    { id: "2", title: "gamex", cost: "6$" },
    { id: "3", title: "gamexx", cost: "7$" },
  ];
  const

  return (
    <div>
      <AddComponent arr={arr} />
      <ChildComponent arr={arr} />
    </div>
  );
};

export default MyComponent;
