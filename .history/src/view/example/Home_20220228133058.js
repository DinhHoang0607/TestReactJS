import React from "react";
import { useHistory } from "react-router";
const Home = () => {
  let history = useHistory();
  const handleClick = () => {
    setTimeout(() => {
      // history.push("./todos");
      console.log(history);
    }, 3000);
  };
  return (
    <div>
      <button onClick={() => handleClick()}>aaa</button>
    </div>
  );
};

export default Home;