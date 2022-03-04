import React from "react";
import Color from "../HOC/Color";
import { useNavigate } from "react-router-dom";
import logo from "../asssets/images/ann_shop.png";
import { connect, useSelector } from "react-redux";
const Home = (props) => {
  let history = useNavigate();
  const handleClick = () => {
    // console.log(mapStateToProps());
    console.log(dataRedux);
    setTimeout(() => {
      history("./todos");
      console.log(history);
    }, 3000);
  };
  const dataRedux = props.dataRedux;
  const handleDeleteRedux = (user) => {
    console.log(user);
  };
  // const dataRedux = useSelector((state) => state.users);
  return (
    <div>
      <img src={logo} alt="" />
      <button onClick={() => handleClick()}>aaa</button>
      {dataRedux &&
        dataRedux.length > 0 &&
        dataRedux.map((item, index) => {
          return (
            <>
              <div key={item.id}>
                {index + 1}-{item.name}{" "}
                <span onClick={() => handleDeleteRedux(item)}> X </span>
              </div>
            </>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux:()=>dispatch
  }
};
// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
