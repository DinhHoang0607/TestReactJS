import React from "react";
import Color from "../HOC/Color";
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
      aaa
      {/* <button onClick={() => handleClick()}>aaa</button> */}
    </div>
  );
};

// export default Home;
export default Color(Home);
