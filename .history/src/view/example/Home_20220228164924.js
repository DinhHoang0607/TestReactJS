import React from "react";
import { useNavigate  } from "react-router-dom";
const Home = () => {
  let history = useNavigate ();
  const handleClick = () => {
    setTimeout(() => {
      // history.push("./todos");
      neg
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
