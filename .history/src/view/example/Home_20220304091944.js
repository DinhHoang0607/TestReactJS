import React from "react";
import Color from "../HOC/Color";
import { useNavigate } from "react-router-dom";
import logo from "../asssets/images/ann_shop.png";
import { connect } from "react-redux";
const Home = () => {
  let history = useNavigate();
  const handleClick = () => {
    // console.log(mapStateToProps());
    setTimeout(() => {
      history("./todos");
      console.log(history);
    }, 3000);
  };
  return (
    <div>
      <img src={logo} alt="" />
      <button onClick={() => handleClick()}>aaa</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
// export default Home;
export default connect(mapStateToProps)(Color(Home));
