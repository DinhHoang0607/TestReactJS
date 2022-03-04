import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let history = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      // history.push("./todos");
      history("./todos");
      console.log(history);
    }, 3000);
  };
  return (
    <div>
      <button onClick={() => handleClick()}>aaa</button>
      <Color
    </div>
  );
};

export default Home;
