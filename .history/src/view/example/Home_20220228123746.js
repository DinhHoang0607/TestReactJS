import React from "react";
import { useHistory } from "react-router";
const Home = () => {
  let history = useHistory();
  const handleClick = () => {
    setTimeout(() => {
      history.push("./todos");
    }, 3000);
  };
  return <div>Home</div>;
};

export default Home;
